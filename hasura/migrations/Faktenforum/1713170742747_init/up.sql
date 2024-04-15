SET check_function_bodies = false;
CREATE SCHEMA faktenforum;
CREATE SCHEMA kratos;
CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA kratos;
COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';
CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA kratos;
COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE TYPE faktenforum."ClaimLabel" AS ENUM (
    'FALSE',
    'MISSLEADING',
    'TRUE'
);
CREATE TYPE faktenforum."ClaimStatus" AS ENUM (
    'SUBMITTED',
    'READYT_TO_CHECK',
    'IN_PROGRESS',
    'ARCHIVED',
    'SPAM',
    'CLOSED',
    'CHECKED',
    'PUBLISHED'
);
CREATE TYPE faktenforum."FileType" AS ENUM (
    'IMAGE',
    'VIDEO',
    'DOCUMENT',
    'OTHER'
);
CREATE TYPE faktenforum."UserRole" AS ENUM (
    'ADMIN',
    'USER'
);
CREATE TABLE faktenforum."Claim" (
    id text NOT NULL,
    title text,
    description text,
    tags text[] DEFAULT ARRAY[]::text[],
    label faktenforum."ClaimLabel",
    status faktenforum."ClaimStatus" DEFAULT 'SUBMITTED'::faktenforum."ClaimStatus" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text,
    "archiveAt" timestamp(3) without time zone DEFAULT now(),
    "archiveId" text
);
CREATE TABLE faktenforum."ClaimFact" (
    id text NOT NULL,
    "claimId" text NOT NULL,
    "factId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text NOT NULL
);
CREATE TABLE faktenforum."ClaimResource" (
    id text NOT NULL,
    "originalUrl" text,
    description text,
    "fileId" text,
    "claimId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text
);
CREATE TABLE faktenforum."ClaimSubmissionToken" (
    id text NOT NULL,
    token text NOT NULL,
    "claimId" text NOT NULL,
    "expiresAt" timestamp(3) without time zone NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
CREATE TABLE faktenforum."Comment" (
    id text NOT NULL,
    "claimId" text NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text NOT NULL
);
CREATE TABLE faktenforum."Fact" (
    id text NOT NULL,
    title text,
    description text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text NOT NULL
);
CREATE TABLE faktenforum."FactResource" (
    id text NOT NULL,
    "originalUrl" text,
    description text,
    "fileId" text,
    "factId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text NOT NULL,
    "claimId" text
);
CREATE TABLE faktenforum."File" (
    id text NOT NULL,
    key text NOT NULL,
    name text NOT NULL,
    "mimeType" text NOT NULL,
    md5 text NOT NULL,
    size integer NOT NULL,
    transcription text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdBy" text
);
CREATE TABLE faktenforum."User" (
    id text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    bio text,
    "firstName" text,
    "lastName" text,
    "mobileNumber" text,
    "profileImage" text,
    pronouns text,
    username text NOT NULL
);
CREATE TABLE faktenforum."Virality" (
    id text NOT NULL,
    "claimId" text NOT NULL,
    "facebookLikes" integer,
    "facebookShares" integer,
    "youtubeViews" integer,
    "youtubeLikes" integer,
    "youtubeDislikes" integer,
    "instagramLikes" integer,
    "instagramShares" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);
CREATE TABLE faktenforum._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
CREATE TABLE kratos.continuity_containers (
    id uuid NOT NULL,
    identity_id uuid,
    name character varying(255) NOT NULL,
    payload jsonb,
    expires_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid
);
CREATE TABLE kratos.courier_message_dispatches (
    id uuid NOT NULL,
    message_id uuid NOT NULL,
    status character varying(7) NOT NULL,
    error json,
    nid uuid NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE kratos.courier_messages (
    id uuid NOT NULL,
    type integer NOT NULL,
    status integer NOT NULL,
    body text NOT NULL,
    subject character varying(255) NOT NULL,
    recipient character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    template_type character varying(255) DEFAULT ''::character varying NOT NULL,
    template_data bytea,
    nid uuid,
    send_count integer DEFAULT 0 NOT NULL,
    channel character varying(32)
);
CREATE TABLE kratos.identities (
    id uuid NOT NULL,
    schema_id character varying(2048) NOT NULL,
    traits jsonb NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid,
    state character varying(255) DEFAULT 'active'::character varying NOT NULL,
    state_changed_at timestamp without time zone,
    metadata_public jsonb,
    metadata_admin jsonb,
    available_aal character varying(4),
    organization_id uuid
);
CREATE TABLE kratos.identity_credential_identifiers (
    id uuid NOT NULL,
    identifier character varying(255) NOT NULL,
    identity_credential_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid,
    identity_credential_type_id uuid NOT NULL
);
CREATE TABLE kratos.identity_credential_types (
    id uuid NOT NULL,
    name character varying(32) NOT NULL
);
CREATE TABLE kratos.identity_credentials (
    id uuid NOT NULL,
    config jsonb NOT NULL,
    identity_credential_type_id uuid NOT NULL,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid,
    version integer DEFAULT 0 NOT NULL
);
CREATE TABLE kratos.identity_login_codes (
    id uuid NOT NULL,
    code character varying(64) NOT NULL,
    address character varying(255) NOT NULL,
    address_type character(36) NOT NULL,
    used_at timestamp without time zone,
    expires_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    issued_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    selfservice_login_flow_id uuid NOT NULL,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    nid uuid NOT NULL
);
CREATE TABLE kratos.identity_recovery_addresses (
    id uuid NOT NULL,
    via character varying(16) NOT NULL,
    value character varying(400) NOT NULL,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid
);
CREATE TABLE kratos.identity_recovery_codes (
    id uuid NOT NULL,
    code character varying(64) NOT NULL,
    used_at timestamp without time zone,
    identity_recovery_address_id uuid,
    code_type integer NOT NULL,
    expires_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    issued_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    selfservice_recovery_flow_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid NOT NULL,
    identity_id uuid NOT NULL
);
CREATE TABLE kratos.identity_recovery_tokens (
    id uuid NOT NULL,
    token character varying(64) NOT NULL,
    used boolean DEFAULT false NOT NULL,
    used_at timestamp without time zone,
    identity_recovery_address_id uuid,
    selfservice_recovery_flow_id uuid,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    expires_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    issued_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    nid uuid,
    identity_id uuid NOT NULL,
    token_type integer DEFAULT 0 NOT NULL,
    CONSTRAINT identity_recovery_tokens_token_type_ck CHECK (((token_type = 1) OR (token_type = 2)))
);
CREATE TABLE kratos.identity_registration_codes (
    id uuid NOT NULL,
    code character varying(64) NOT NULL,
    address character varying(255) NOT NULL,
    address_type character(36) NOT NULL,
    used_at timestamp without time zone,
    expires_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    issued_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    selfservice_registration_flow_id uuid NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    nid uuid NOT NULL
);
CREATE TABLE kratos.identity_verifiable_addresses (
    id uuid NOT NULL,
    status character varying(16) NOT NULL,
    via character varying(16) NOT NULL,
    verified boolean NOT NULL,
    value character varying(400) NOT NULL,
    verified_at timestamp without time zone,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid
);
CREATE TABLE kratos.identity_verification_codes (
    id uuid NOT NULL,
    code_hmac character varying(64) NOT NULL,
    used_at timestamp without time zone,
    identity_verifiable_address_id uuid,
    expires_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    issued_at timestamp without time zone DEFAULT '2000-01-01 00:00:00'::timestamp without time zone NOT NULL,
    selfservice_verification_flow_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid NOT NULL
);
CREATE TABLE kratos.identity_verification_tokens (
    id uuid NOT NULL,
    token character varying(64) NOT NULL,
    used boolean DEFAULT false NOT NULL,
    used_at timestamp without time zone,
    expires_at timestamp without time zone NOT NULL,
    issued_at timestamp without time zone NOT NULL,
    identity_verifiable_address_id uuid NOT NULL,
    selfservice_verification_flow_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    nid uuid
);
CREATE TABLE kratos.networks (
    id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);
CREATE TABLE kratos.schema_migration (
    version character varying(48) NOT NULL,
    version_self integer DEFAULT 0 NOT NULL
);
CREATE TABLE kratos.selfservice_errors (
    id uuid NOT NULL,
    errors jsonb NOT NULL,
    seen_at timestamp without time zone,
    was_seen boolean NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    csrf_token character varying(255) DEFAULT ''::character varying NOT NULL,
    nid uuid
);
CREATE TABLE kratos.selfservice_login_flows (
    id uuid NOT NULL,
    request_url text NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    active_method character varying(32) NOT NULL,
    csrf_token character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    forced boolean DEFAULT false NOT NULL,
    type character varying(16) DEFAULT 'browser'::character varying NOT NULL,
    ui jsonb,
    nid uuid,
    requested_aal character varying(4) DEFAULT 'aal1'::character varying NOT NULL,
    internal_context jsonb NOT NULL,
    oauth2_login_challenge uuid,
    oauth2_login_challenge_data text,
    state character varying(255),
    submit_count integer DEFAULT 0 NOT NULL,
    organization_id uuid
);
CREATE TABLE kratos.selfservice_recovery_flows (
    id uuid NOT NULL,
    request_url text NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    active_method character varying(32),
    csrf_token character varying(255) NOT NULL,
    state character varying(32) NOT NULL,
    recovered_identity_id uuid,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    type character varying(16) DEFAULT 'browser'::character varying NOT NULL,
    ui jsonb,
    nid uuid,
    submit_count integer DEFAULT 0 NOT NULL,
    skip_csrf_check boolean DEFAULT false NOT NULL
);
CREATE TABLE kratos.selfservice_registration_flows (
    id uuid NOT NULL,
    request_url text NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    active_method character varying(32) NOT NULL,
    csrf_token character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    type character varying(16) DEFAULT 'browser'::character varying NOT NULL,
    ui jsonb,
    nid uuid,
    internal_context jsonb NOT NULL,
    oauth2_login_challenge uuid,
    oauth2_login_challenge_data text,
    state character varying(255),
    submit_count integer DEFAULT 0 NOT NULL,
    organization_id uuid
);
CREATE TABLE kratos.selfservice_settings_flows (
    id uuid NOT NULL,
    request_url text NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    active_method character varying(32),
    state character varying(255) DEFAULT 'show_form'::character varying NOT NULL,
    type character varying(16) DEFAULT 'browser'::character varying NOT NULL,
    ui jsonb,
    nid uuid,
    internal_context jsonb NOT NULL
);
CREATE TABLE kratos.selfservice_verification_flows (
    id uuid NOT NULL,
    request_url text NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    csrf_token character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    type character varying(16) DEFAULT 'browser'::character varying NOT NULL,
    state character varying(255) DEFAULT 'show_form'::character varying NOT NULL,
    active_method character varying(32),
    ui jsonb,
    nid uuid,
    submit_count integer DEFAULT 0 NOT NULL,
    oauth2_login_challenge text,
    session_id uuid,
    identity_id uuid,
    authentication_methods json
);
CREATE TABLE kratos.session_devices (
    id uuid NOT NULL,
    ip_address character varying(50) DEFAULT ''::character varying,
    user_agent character varying(512) DEFAULT ''::character varying,
    location character varying(512) DEFAULT ''::character varying,
    nid uuid NOT NULL,
    session_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);
CREATE TABLE kratos.session_token_exchanges (
    id uuid NOT NULL,
    nid uuid NOT NULL,
    flow_id uuid NOT NULL,
    session_id uuid,
    init_code character varying(64) NOT NULL,
    return_to_code character varying(64) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);
CREATE TABLE kratos.sessions (
    id uuid NOT NULL,
    issued_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    authenticated_at timestamp without time zone NOT NULL,
    identity_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    token character varying(39),
    active boolean DEFAULT false,
    nid uuid,
    logout_token character varying(39),
    aal character varying(4) DEFAULT 'aal1'::character varying NOT NULL,
    authentication_methods jsonb NOT NULL
);
ALTER TABLE ONLY faktenforum."ClaimFact"
    ADD CONSTRAINT "ClaimFact_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."ClaimResource"
    ADD CONSTRAINT "ClaimResource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."Claim"
    ADD CONSTRAINT "Claim_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."Comment"
    ADD CONSTRAINT "Comment_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."FactResource"
    ADD CONSTRAINT "FactResource_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."Fact"
    ADD CONSTRAINT "Fact_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."File"
    ADD CONSTRAINT "File_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum."Virality"
    ADD CONSTRAINT "Virality_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY faktenforum._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.continuity_containers
    ADD CONSTRAINT continuity_containers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.courier_message_dispatches
    ADD CONSTRAINT courier_message_dispatches_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.courier_messages
    ADD CONSTRAINT courier_messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identities
    ADD CONSTRAINT identities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_credential_identifiers
    ADD CONSTRAINT identity_credential_identifiers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_credential_types
    ADD CONSTRAINT identity_credential_types_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_credentials
    ADD CONSTRAINT identity_credentials_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_login_codes
    ADD CONSTRAINT identity_login_codes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_recovery_addresses
    ADD CONSTRAINT identity_recovery_addresses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_recovery_codes
    ADD CONSTRAINT identity_recovery_codes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_recovery_tokens
    ADD CONSTRAINT identity_recovery_tokens_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_registration_codes
    ADD CONSTRAINT identity_registration_codes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_verifiable_addresses
    ADD CONSTRAINT identity_verifiable_addresses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_verification_codes
    ADD CONSTRAINT identity_verification_codes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.identity_verification_tokens
    ADD CONSTRAINT identity_verification_tokens_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.networks
    ADD CONSTRAINT networks_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_errors
    ADD CONSTRAINT selfservice_errors_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_login_flows
    ADD CONSTRAINT selfservice_login_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_settings_flows
    ADD CONSTRAINT selfservice_profile_management_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_recovery_flows
    ADD CONSTRAINT selfservice_recovery_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_registration_flows
    ADD CONSTRAINT selfservice_registration_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.selfservice_verification_flows
    ADD CONSTRAINT selfservice_verification_requests_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.session_devices
    ADD CONSTRAINT session_devices_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.session_token_exchanges
    ADD CONSTRAINT session_token_exchanges_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY kratos.session_devices
    ADD CONSTRAINT unique_session_device UNIQUE (nid, session_id, ip_address, user_agent);
CREATE UNIQUE INDEX "ClaimSubmissionToken_token_key" ON faktenforum."ClaimSubmissionToken" USING btree (token);
CREATE INDEX "File_key_idx" ON faktenforum."File" USING btree (key);
CREATE UNIQUE INDEX "User_email_key" ON faktenforum."User" USING btree (email);
CREATE UNIQUE INDEX "User_username_key" ON faktenforum."User" USING btree (username);
CREATE INDEX continuity_containers_id_nid_idx ON kratos.continuity_containers USING btree (id, nid);
CREATE INDEX continuity_containers_identity_id_nid_idx ON kratos.continuity_containers USING btree (identity_id, nid);
CREATE INDEX continuity_containers_nid_id_idx ON kratos.continuity_containers USING btree (nid, id);
CREATE INDEX courier_message_dispatches_id_message_id_nid_idx ON kratos.courier_message_dispatches USING btree (id, message_id, nid);
CREATE INDEX courier_messages_id_nid_idx ON kratos.courier_messages USING btree (id, nid);
CREATE INDEX courier_messages_nid_created_at_id_idx ON kratos.courier_messages USING btree (nid, created_at DESC);
CREATE INDEX courier_messages_nid_id_idx ON kratos.courier_messages USING btree (nid, id);
CREATE INDEX courier_messages_nid_recipient_created_at_id_idx ON kratos.courier_messages USING btree (nid, recipient, created_at DESC);
CREATE INDEX courier_messages_nid_status_created_at_id_idx ON kratos.courier_messages USING btree (nid, status, created_at DESC);
CREATE INDEX courier_messages_status_idx ON kratos.courier_messages USING btree (status);
CREATE INDEX identities_id_nid_idx ON kratos.identities USING btree (id, nid);
CREATE INDEX identities_nid_id_idx ON kratos.identities USING btree (nid, id);
CREATE INDEX identity_credential_identifiers_id_nid_idx ON kratos.identity_credential_identifiers USING btree (id, nid);
CREATE UNIQUE INDEX identity_credential_identifiers_identifier_nid_type_uq_idx ON kratos.identity_credential_identifiers USING btree (nid, identity_credential_type_id, identifier);
CREATE INDEX identity_credential_identifiers_nid_i_ici_idx ON kratos.identity_credential_identifiers USING btree (nid, identifier, identity_credential_id);
CREATE INDEX identity_credential_identifiers_nid_id_idx ON kratos.identity_credential_identifiers USING btree (nid, id);
CREATE INDEX identity_credential_identifiers_nid_identifier_gin ON kratos.identity_credential_identifiers USING gin (nid, identifier kratos.gin_trgm_ops);
CREATE INDEX identity_credential_identifiers_nid_identity_credential_id_idx ON kratos.identity_credential_identifiers USING btree (identity_credential_id, nid);
CREATE UNIQUE INDEX identity_credential_types_name_idx ON kratos.identity_credential_types USING btree (name);
CREATE INDEX identity_credentials_id_nid_idx ON kratos.identity_credentials USING btree (id, nid);
CREATE INDEX identity_credentials_nid_id_idx ON kratos.identity_credentials USING btree (nid, id);
CREATE INDEX identity_credentials_nid_identity_id_idx ON kratos.identity_credentials USING btree (identity_id, nid);
CREATE INDEX identity_login_codes_id_nid_idx ON kratos.identity_login_codes USING btree (id, nid);
CREATE INDEX identity_login_codes_nid_flow_id_idx ON kratos.identity_login_codes USING btree (nid, selfservice_login_flow_id);
CREATE UNIQUE INDEX identity_recovery_addresses_code_uq_idx ON kratos.identity_recovery_tokens USING btree (token);
CREATE INDEX identity_recovery_addresses_id_nid_idx ON kratos.identity_recovery_addresses USING btree (id, nid);
CREATE INDEX identity_recovery_addresses_nid_id_idx ON kratos.identity_recovery_addresses USING btree (nid, id);
CREATE INDEX identity_recovery_addresses_nid_identity_id_idx ON kratos.identity_recovery_addresses USING btree (identity_id, nid);
CREATE INDEX identity_recovery_addresses_status_via_idx ON kratos.identity_recovery_addresses USING btree (nid, via, value);
CREATE UNIQUE INDEX identity_recovery_addresses_status_via_uq_idx ON kratos.identity_recovery_addresses USING btree (nid, via, value);
CREATE INDEX identity_recovery_codes_id_nid_idx ON kratos.identity_recovery_codes USING btree (id, nid);
CREATE INDEX identity_recovery_codes_identity_id_nid_idx ON kratos.identity_recovery_codes USING btree (identity_id, nid);
CREATE INDEX identity_recovery_codes_identity_recovery_address_id_nid_idx ON kratos.identity_recovery_codes USING btree (identity_recovery_address_id, nid);
CREATE INDEX identity_recovery_codes_nid_flow_id_idx ON kratos.identity_recovery_codes USING btree (nid, selfservice_recovery_flow_id);
CREATE INDEX identity_recovery_tokens_id_nid_idx ON kratos.identity_recovery_tokens USING btree (id, nid);
CREATE INDEX identity_recovery_tokens_identity_id_nid_idx ON kratos.identity_recovery_tokens USING btree (identity_id, nid);
CREATE INDEX identity_recovery_tokens_identity_recovery_address_id_idx ON kratos.identity_recovery_tokens USING btree (identity_recovery_address_id);
CREATE INDEX identity_recovery_tokens_nid_id_idx ON kratos.identity_recovery_tokens USING btree (nid, id);
CREATE INDEX identity_recovery_tokens_selfservice_recovery_flow_id_idx ON kratos.identity_recovery_tokens USING btree (selfservice_recovery_flow_id);
CREATE INDEX identity_recovery_tokens_token_nid_used_idx ON kratos.identity_recovery_tokens USING btree (nid, token, used);
CREATE INDEX identity_registration_codes_id_nid_idx ON kratos.identity_registration_codes USING btree (id, nid);
CREATE INDEX identity_registration_codes_nid_flow_id_idx ON kratos.identity_registration_codes USING btree (nid, selfservice_registration_flow_id);
CREATE INDEX identity_verifiable_addresses_id_nid_idx ON kratos.identity_verifiable_addresses USING btree (id, nid);
CREATE INDEX identity_verifiable_addresses_nid_id_idx ON kratos.identity_verifiable_addresses USING btree (nid, id);
CREATE INDEX identity_verifiable_addresses_nid_identity_id_idx ON kratos.identity_verifiable_addresses USING btree (identity_id, nid);
CREATE INDEX identity_verifiable_addresses_status_via_idx ON kratos.identity_verifiable_addresses USING btree (nid, via, value);
CREATE UNIQUE INDEX identity_verifiable_addresses_status_via_uq_idx ON kratos.identity_verifiable_addresses USING btree (nid, via, value);
CREATE INDEX identity_verification_codes_id_nid_idx ON kratos.identity_verification_codes USING btree (id, nid);
CREATE INDEX identity_verification_codes_nid_flow_id_idx ON kratos.identity_verification_codes USING btree (nid, selfservice_verification_flow_id);
CREATE INDEX identity_verification_codes_verifiable_address_nid_idx ON kratos.identity_verification_codes USING btree (identity_verifiable_address_id, nid);
CREATE INDEX identity_verification_tokens_id_nid_idx ON kratos.identity_verification_tokens USING btree (id, nid);
CREATE INDEX identity_verification_tokens_nid_id_idx ON kratos.identity_verification_tokens USING btree (nid, id);
CREATE INDEX identity_verification_tokens_token_nid_used_flow_id_idx ON kratos.identity_verification_tokens USING btree (nid, token, used, selfservice_verification_flow_id);
CREATE UNIQUE INDEX identity_verification_tokens_token_uq_idx ON kratos.identity_verification_tokens USING btree (token);
CREATE INDEX identity_verification_tokens_verifiable_address_id_idx ON kratos.identity_verification_tokens USING btree (identity_verifiable_address_id);
CREATE INDEX identity_verification_tokens_verification_flow_id_idx ON kratos.identity_verification_tokens USING btree (selfservice_verification_flow_id);
CREATE UNIQUE INDEX schema_migration_version_idx ON kratos.schema_migration USING btree (version);
CREATE INDEX schema_migration_version_self_idx ON kratos.schema_migration USING btree (version_self);
CREATE INDEX selfservice_errors_errors_nid_id_idx ON kratos.selfservice_errors USING btree (nid, id);
CREATE INDEX selfservice_login_flows_id_nid_idx ON kratos.selfservice_login_flows USING btree (id, nid);
CREATE INDEX selfservice_login_flows_nid_id_idx ON kratos.selfservice_login_flows USING btree (nid, id);
CREATE INDEX selfservice_recovery_flows_id_nid_idx ON kratos.selfservice_recovery_flows USING btree (id, nid);
CREATE INDEX selfservice_recovery_flows_nid_id_idx ON kratos.selfservice_recovery_flows USING btree (nid, id);
CREATE INDEX selfservice_recovery_flows_recovered_identity_id_nid_idx ON kratos.selfservice_recovery_flows USING btree (recovered_identity_id, nid);
CREATE INDEX selfservice_registration_flows_id_nid_idx ON kratos.selfservice_registration_flows USING btree (id, nid);
CREATE INDEX selfservice_registration_flows_nid_id_idx ON kratos.selfservice_registration_flows USING btree (nid, id);
CREATE INDEX selfservice_settings_flows_id_nid_idx ON kratos.selfservice_settings_flows USING btree (id, nid);
CREATE INDEX selfservice_settings_flows_identity_id_nid_idx ON kratos.selfservice_settings_flows USING btree (identity_id, nid);
CREATE INDEX selfservice_settings_flows_nid_id_idx ON kratos.selfservice_settings_flows USING btree (nid, id);
CREATE INDEX selfservice_verification_flows_id_nid_idx ON kratos.selfservice_verification_flows USING btree (id, nid);
CREATE INDEX selfservice_verification_flows_nid_id_idx ON kratos.selfservice_verification_flows USING btree (nid, id);
CREATE INDEX session_devices_id_nid_idx ON kratos.session_devices USING btree (id, nid);
CREATE INDEX session_devices_session_id_nid_idx ON kratos.session_devices USING btree (session_id, nid);
CREATE INDEX session_token_exchanges_nid_code_idx ON kratos.session_token_exchanges USING btree (init_code, nid);
CREATE INDEX session_token_exchanges_nid_flow_id_idx ON kratos.session_token_exchanges USING btree (flow_id, nid);
CREATE INDEX sessions_id_nid_idx ON kratos.sessions USING btree (id, nid);
CREATE INDEX sessions_identity_id_nid_sorted_idx ON kratos.sessions USING btree (identity_id, nid, authenticated_at DESC);
CREATE UNIQUE INDEX sessions_logout_token_uq_idx ON kratos.sessions USING btree (logout_token);
CREATE INDEX sessions_nid_created_at_id_idx ON kratos.sessions USING btree (nid, created_at DESC, id);
CREATE INDEX sessions_nid_id_identity_id_idx ON kratos.sessions USING btree (nid, identity_id, id);
CREATE INDEX sessions_token_nid_idx ON kratos.sessions USING btree (nid, token);
CREATE UNIQUE INDEX sessions_token_uq_idx ON kratos.sessions USING btree (token);
ALTER TABLE ONLY faktenforum."ClaimFact"
    ADD CONSTRAINT "ClaimFact_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES faktenforum."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."ClaimFact"
    ADD CONSTRAINT "ClaimFact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."ClaimFact"
    ADD CONSTRAINT "ClaimFact_factId_fkey" FOREIGN KEY ("factId") REFERENCES faktenforum."Fact"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."ClaimResource"
    ADD CONSTRAINT "ClaimResource_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES faktenforum."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."ClaimResource"
    ADD CONSTRAINT "ClaimResource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY faktenforum."ClaimResource"
    ADD CONSTRAINT "ClaimResource_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES faktenforum."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY faktenforum."ClaimSubmissionToken"
    ADD CONSTRAINT "ClaimSubmissionToken_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES faktenforum."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."Claim"
    ADD CONSTRAINT "Claim_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY faktenforum."Comment"
    ADD CONSTRAINT "Comment_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES faktenforum."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."Comment"
    ADD CONSTRAINT "Comment_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."FactResource"
    ADD CONSTRAINT "FactResource_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."FactResource"
    ADD CONSTRAINT "FactResource_factId_fkey" FOREIGN KEY ("factId") REFERENCES faktenforum."Fact"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."FactResource"
    ADD CONSTRAINT "FactResource_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES faktenforum."File"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY faktenforum."Fact"
    ADD CONSTRAINT "Fact_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY faktenforum."File"
    ADD CONSTRAINT "File_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES faktenforum."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY faktenforum."Virality"
    ADD CONSTRAINT "Virality_claimId_fkey" FOREIGN KEY ("claimId") REFERENCES faktenforum."Claim"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY kratos.continuity_containers
    ADD CONSTRAINT continuity_containers_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.continuity_containers
    ADD CONSTRAINT continuity_containers_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.courier_message_dispatches
    ADD CONSTRAINT courier_message_dispatches_message_id_fk FOREIGN KEY (message_id) REFERENCES kratos.courier_messages(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.courier_message_dispatches
    ADD CONSTRAINT courier_message_dispatches_nid_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.courier_messages
    ADD CONSTRAINT courier_messages_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identities
    ADD CONSTRAINT identities_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credential_identifiers
    ADD CONSTRAINT identity_credential_identifiers_identity_credential_id_fkey FOREIGN KEY (identity_credential_id) REFERENCES kratos.identity_credentials(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credential_identifiers
    ADD CONSTRAINT identity_credential_identifiers_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credential_identifiers
    ADD CONSTRAINT identity_credential_identifiers_type_id_fk_idx FOREIGN KEY (identity_credential_type_id) REFERENCES kratos.identity_credential_types(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credentials
    ADD CONSTRAINT identity_credentials_identity_credential_type_id_fkey FOREIGN KEY (identity_credential_type_id) REFERENCES kratos.identity_credential_types(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credentials
    ADD CONSTRAINT identity_credentials_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_credentials
    ADD CONSTRAINT identity_credentials_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_login_codes
    ADD CONSTRAINT identity_login_codes_networks_id_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_login_codes
    ADD CONSTRAINT identity_login_codes_selfservice_login_flows_id_fk FOREIGN KEY (selfservice_login_flow_id) REFERENCES kratos.selfservice_login_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_addresses
    ADD CONSTRAINT identity_recovery_addresses_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_addresses
    ADD CONSTRAINT identity_recovery_addresses_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_codes
    ADD CONSTRAINT identity_recovery_codes_identity_id_fk FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_codes
    ADD CONSTRAINT identity_recovery_codes_identity_recovery_addresses_id_fk FOREIGN KEY (identity_recovery_address_id) REFERENCES kratos.identity_recovery_addresses(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_codes
    ADD CONSTRAINT identity_recovery_codes_networks_id_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_codes
    ADD CONSTRAINT identity_recovery_codes_selfservice_recovery_flows_id_fk FOREIGN KEY (selfservice_recovery_flow_id) REFERENCES kratos.selfservice_recovery_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_tokens
    ADD CONSTRAINT identity_recovery_tokens_identity_id_fk_idx FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_tokens
    ADD CONSTRAINT identity_recovery_tokens_identity_recovery_address_id_fkey FOREIGN KEY (identity_recovery_address_id) REFERENCES kratos.identity_recovery_addresses(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_tokens
    ADD CONSTRAINT identity_recovery_tokens_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_recovery_tokens
    ADD CONSTRAINT identity_recovery_tokens_selfservice_recovery_request_id_fkey FOREIGN KEY (selfservice_recovery_flow_id) REFERENCES kratos.selfservice_recovery_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_registration_codes
    ADD CONSTRAINT identity_registration_codes_networks_id_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_registration_codes
    ADD CONSTRAINT identity_registration_codes_selfservice_registration_flows_id_f FOREIGN KEY (selfservice_registration_flow_id) REFERENCES kratos.selfservice_registration_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verifiable_addresses
    ADD CONSTRAINT identity_verifiable_addresses_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verifiable_addresses
    ADD CONSTRAINT identity_verifiable_addresses_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_codes
    ADD CONSTRAINT identity_verification_codes_identity_verifiable_addresses_id_fk FOREIGN KEY (identity_verifiable_address_id) REFERENCES kratos.identity_verifiable_addresses(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_codes
    ADD CONSTRAINT identity_verification_codes_networks_id_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_codes
    ADD CONSTRAINT identity_verification_codes_selfservice_verification_flows_id_f FOREIGN KEY (selfservice_verification_flow_id) REFERENCES kratos.selfservice_verification_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_tokens
    ADD CONSTRAINT identity_verification_tokens_identity_verifiable_address_i_fkey FOREIGN KEY (identity_verifiable_address_id) REFERENCES kratos.identity_verifiable_addresses(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_tokens
    ADD CONSTRAINT identity_verification_tokens_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.identity_verification_tokens
    ADD CONSTRAINT identity_verification_tokens_selfservice_verification_flow_fkey FOREIGN KEY (selfservice_verification_flow_id) REFERENCES kratos.selfservice_verification_flows(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_errors
    ADD CONSTRAINT selfservice_errors_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_login_flows
    ADD CONSTRAINT selfservice_login_flows_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_settings_flows
    ADD CONSTRAINT selfservice_profile_management_requests_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_recovery_flows
    ADD CONSTRAINT selfservice_recovery_flows_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_recovery_flows
    ADD CONSTRAINT selfservice_recovery_requests_recovered_identity_id_fkey FOREIGN KEY (recovered_identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_registration_flows
    ADD CONSTRAINT selfservice_registration_flows_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_settings_flows
    ADD CONSTRAINT selfservice_settings_flows_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.selfservice_verification_flows
    ADD CONSTRAINT selfservice_verification_flows_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY kratos.session_devices
    ADD CONSTRAINT session_metadata_nid_fk FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.session_devices
    ADD CONSTRAINT session_metadata_sessions_id_fk FOREIGN KEY (session_id) REFERENCES kratos.sessions(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.sessions
    ADD CONSTRAINT sessions_identity_id_fkey FOREIGN KEY (identity_id) REFERENCES kratos.identities(id) ON DELETE CASCADE;
ALTER TABLE ONLY kratos.sessions
    ADD CONSTRAINT sessions_nid_fk_idx FOREIGN KEY (nid) REFERENCES kratos.networks(id) ON UPDATE RESTRICT ON DELETE CASCADE;
