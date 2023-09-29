import { PrismaClient } from "@prisma/client";
import { Injectable } from "@tsed/di";
import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

const prisma = new PrismaClient();

@Injectable()
export class PassportService {
  constructor() {
    this.initializeJwtStrategy();
  }

  private initializeJwtStrategy() {
    const jwtStrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET // Ideally, store secret in environment variables
    };

    passport.use(
      new JwtStrategy(jwtStrategyOptions, async (jwtPayload, done) => {
        try {
          const user = await prisma.user.findUnique({ where: { id: jwtPayload.id } });
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(error, false);
        }
      })
    );
  }
}
