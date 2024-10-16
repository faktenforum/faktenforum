// src/controllers/AuthController.ts
import { AcceptOAuth2ConsentRequestSession } from "@ory/client";
import { Controller, Get, Res, Inject, $log } from "@tsed/common";
import { Cookies, QueryParams, Context } from "@tsed/platform-params";
import { AuthService } from "~/services";
@Controller("/oauth")
export class AuthController {
  @Inject(AuthService)
  authService: AuthService;
  @Get("/login")
  async checkAuthentication(
    @Cookies("ory_kratos_session") cookieSession: string,
    @QueryParams("login_challenge") loginChallenge: string,
    @QueryParams("subject") subject: string,
    @Res() response: Res,
    @Context() ctx: Context
  ) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    try {
      await this.authService.getKratosSession(sessionCookie);

      const hydraResponse = await this.authService.acceptOAuth2Login(loginChallenge, subject);
      response.redirect(hydraResponse.redirect_to);
    } catch (_) {
      return response.redirect(
        `/login?return_to=${encodeURIComponent(`/api/v1/oauth/login?login_challenge=${loginChallenge}`)}`
      );
    }
  }
  @Get("/consent")
  async checkConsent(
    @Cookies("ory_kratos_session") cookieSession: string,
    @QueryParams("consent_challenge") consentChallenge: string,

    @Res() response: Res,
    @Context() ctx: Context
  ) {
    const sessionCookie = cookieSession || ctx.request.getHeader("ory_kratos_session");

    try {
      const session = await this.authService.getKratosSession(sessionCookie);

      const challengeResponse = await this.authService.getConsent(consentChallenge);
      const skipConsent =
        challengeResponse.skip || // skip because the user accepted the consent previously
        challengeResponse.client?.skip_consent; // skip because the client is trusted
      $log.info("skipConsent", skipConsent);

      if (skipConsent) {
        // If the consent is skipped, we accept the consent request immediately.
        const consentSession: AcceptOAuth2ConsentRequestSession = {
          access_token: {},
          id_token: {}
        };
        const requestedScope = challengeResponse.requested_scope;
        $log.info("requestedScope", requestedScope);
        if (requestedScope && requestedScope.includes("email")) {
          const addresses = session.identity.verifiable_addresses || [];
          if (addresses.length > 0) {
            const address = addresses[0];
            if (address.via === "email") {
              consentSession.id_token.email = address.value;
              consentSession.id_token.email_verified = address.verified;
            }
          }
        }

        if (requestedScope && requestedScope.includes("profile")) {
          consentSession.id_token.username = session.identity.traits.username;
        }
        const hydraResponse = await this.authService.acceptConsent(
          consentChallenge,
          challengeResponse,
          consentSession
        );
        response.redirect(hydraResponse.redirect_to);
      }
    } catch (_) {
      return response.redirect(
        `/login?return_to=${encodeURIComponent(`/api/v1/oauth/consent?consent_challenge=${consentChallenge}`)}`
      );
    }
  }
}
