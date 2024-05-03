import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  claim_label: { input: any; output: any; }
  claim_status: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  tstzrange: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** columns and relationships of "claim" */
export type Claim = {
  __typename?: 'Claim';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  /** An aggregate relationship */
  claimFactsAggregate: ClaimFactAggregate;
  /** An aggregate relationship */
  claimResourcesAggregate: ClaimResourceAggregate;
  /** An aggregate relationship */
  claimSubmissionTokensAggregate: ClaimSubmissionTokenAggregate;
  /** An array relationship */
  claim_facts: Array<ClaimFact>;
  /** An array relationship */
  claim_resources: Array<ClaimResource>;
  /** An array relationship */
  claim_submission_tokens: Array<ClaimSubmissionToken>;
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  commentsAggregate: CommentAggregate;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  label?: Maybe<Scalars['claim_label']['output']>;
  status: Scalars['claim_status']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
  /** An array relationship */
  viralities: Array<Virality>;
  /** An aggregate relationship */
  viralitiesAggregate: ViralityAggregate;
};


/** columns and relationships of "claim" */
export type ClaimClaimFactsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaimResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaimSubmissionTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaim_FactsArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaim_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaim_Submission_TokensArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimViralitiesArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimViralitiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};

/** aggregated selection of "claim" */
export type ClaimAggregate = {
  __typename?: 'ClaimAggregate';
  aggregate?: Maybe<ClaimAggregateFields>;
  nodes: Array<Claim>;
};

export type ClaimAggregateBoolExp = {
  count?: InputMaybe<ClaimAggregateBoolExpCount>;
};

/** aggregate fields of "claim" */
export type ClaimAggregateFields = {
  __typename?: 'ClaimAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimMaxFields>;
  min?: Maybe<ClaimMinFields>;
};


/** aggregate fields of "claim" */
export type ClaimAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim" */
export type ClaimAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimMaxOrderBy>;
  min?: InputMaybe<ClaimMinOrderBy>;
};

/** input type for inserting array relation for remote table "claim" */
export type ClaimArrRelInsertInput = {
  data: Array<ClaimInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimOnConflict>;
};

/** Boolean expression to filter rows from the table "claim". All fields are combined with a logical 'AND'. */
export type ClaimBoolExp = {
  _and?: InputMaybe<Array<ClaimBoolExp>>;
  _not?: InputMaybe<ClaimBoolExp>;
  _or?: InputMaybe<Array<ClaimBoolExp>>;
  archiveAt?: InputMaybe<TimestampComparisonExp>;
  archiveId?: InputMaybe<UuidComparisonExp>;
  claim_facts?: InputMaybe<ClaimFactBoolExp>;
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateBoolExp>;
  claim_resources?: InputMaybe<ClaimResourceBoolExp>;
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateBoolExp>;
  claim_submission_tokens?: InputMaybe<ClaimSubmissionTokenBoolExp>;
  claim_submission_tokensAggregate?: InputMaybe<ClaimSubmissionTokenAggregateBoolExp>;
  comments?: InputMaybe<CommentBoolExp>;
  commentsAggregate?: InputMaybe<CommentAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  label?: InputMaybe<ClaimLabelComparisonExp>;
  status?: InputMaybe<ClaimStatusComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  tags?: InputMaybe<StringArrayComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
  viralities?: InputMaybe<ViralityBoolExp>;
  viralitiesAggregate?: InputMaybe<ViralityAggregateBoolExp>;
};

/** unique or primary key constraints on table "claim" */
export enum ClaimConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimPkey = 'claim_pkey'
}

/** columns and relationships of "claim_fact" */
export type ClaimFact = {
  __typename?: 'ClaimFact';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  fact: Fact;
  factId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};

/** aggregated selection of "claim_fact" */
export type ClaimFactAggregate = {
  __typename?: 'ClaimFactAggregate';
  aggregate?: Maybe<ClaimFactAggregateFields>;
  nodes: Array<ClaimFact>;
};

export type ClaimFactAggregateBoolExp = {
  count?: InputMaybe<ClaimFactAggregateBoolExpCount>;
};

/** aggregate fields of "claim_fact" */
export type ClaimFactAggregateFields = {
  __typename?: 'ClaimFactAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimFactMaxFields>;
  min?: Maybe<ClaimFactMinFields>;
};


/** aggregate fields of "claim_fact" */
export type ClaimFactAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimFactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim_fact" */
export type ClaimFactAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimFactMaxOrderBy>;
  min?: InputMaybe<ClaimFactMinOrderBy>;
};

/** input type for inserting array relation for remote table "claim_fact" */
export type ClaimFactArrRelInsertInput = {
  data: Array<ClaimFactInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimFactOnConflict>;
};

/** Boolean expression to filter rows from the table "claim_fact". All fields are combined with a logical 'AND'. */
export type ClaimFactBoolExp = {
  _and?: InputMaybe<Array<ClaimFactBoolExp>>;
  _not?: InputMaybe<ClaimFactBoolExp>;
  _or?: InputMaybe<Array<ClaimFactBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  fact?: InputMaybe<FactBoolExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "claim_fact" */
export enum ClaimFactConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimFactPkey = 'claim_fact_pkey'
}

/** columns and relationships of "claim_fact_history" */
export type ClaimFactHistory = {
  __typename?: 'ClaimFactHistory';
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  factId: Scalars['uuid']['output'];
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "claim_fact_history" */
export type ClaimFactHistoryAggregate = {
  __typename?: 'ClaimFactHistoryAggregate';
  aggregate?: Maybe<ClaimFactHistoryAggregateFields>;
  nodes: Array<ClaimFactHistory>;
};

/** aggregate fields of "claim_fact_history" */
export type ClaimFactHistoryAggregateFields = {
  __typename?: 'ClaimFactHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimFactHistoryMaxFields>;
  min?: Maybe<ClaimFactHistoryMinFields>;
};


/** aggregate fields of "claim_fact_history" */
export type ClaimFactHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimFactHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "claim_fact_history". All fields are combined with a logical 'AND'. */
export type ClaimFactHistoryBoolExp = {
  _and?: InputMaybe<Array<ClaimFactHistoryBoolExp>>;
  _not?: InputMaybe<ClaimFactHistoryBoolExp>;
  _or?: InputMaybe<Array<ClaimFactHistoryBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "claim_fact_history" */
export enum ClaimFactHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  ClaimFactHistoryPkey = 'claim_fact_history_pkey'
}

/** input type for inserting data into table "claim_fact_history" */
export type ClaimFactHistoryInsertInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ClaimFactHistoryMaxFields = {
  __typename?: 'ClaimFactHistoryMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ClaimFactHistoryMinFields = {
  __typename?: 'ClaimFactHistoryMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "claim_fact_history" */
export type ClaimFactHistoryMutationResponse = {
  __typename?: 'ClaimFactHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimFactHistory>;
};

/** on_conflict condition type for table "claim_fact_history" */
export type ClaimFactHistoryOnConflict = {
  constraint: ClaimFactHistoryConstraint;
  updateColumns?: Array<ClaimFactHistoryUpdateColumn>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};

/** Ordering options when selecting data from "claim_fact_history". */
export type ClaimFactHistoryOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claim_fact_history */
export type ClaimFactHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "claim_fact_history" */
export enum ClaimFactHistorySelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  FactId = 'factId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_fact_history" */
export type ClaimFactHistorySetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "claim_fact_history" */
export type ClaimFactHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimFactHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimFactHistoryStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_fact_history" */
export enum ClaimFactHistoryUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  FactId = 'factId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimFactHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimFactHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ClaimFactHistoryBoolExp;
};

/** input type for inserting data into table "claim_fact" */
export type ClaimFactInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  fact?: InputMaybe<FactObjRelInsertInput>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type ClaimFactMaxFields = {
  __typename?: 'ClaimFactMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim_fact" */
export type ClaimFactMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimFactMinFields = {
  __typename?: 'ClaimFactMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim_fact" */
export type ClaimFactMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "claim_fact" */
export type ClaimFactMutationResponse = {
  __typename?: 'ClaimFactMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimFact>;
};

/** on_conflict condition type for table "claim_fact" */
export type ClaimFactOnConflict = {
  constraint: ClaimFactConstraint;
  updateColumns?: Array<ClaimFactUpdateColumn>;
  where?: InputMaybe<ClaimFactBoolExp>;
};

/** Ordering options when selecting data from "claim_fact". */
export type ClaimFactOrderBy = {
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  fact?: InputMaybe<FactOrderBy>;
  factId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: claim_fact */
export type ClaimFactPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim_fact" */
export enum ClaimFactSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  FactId = 'factId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_fact" */
export type ClaimFactSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "claim_fact" */
export type ClaimFactStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimFactStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimFactStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_fact" */
export enum ClaimFactUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  FactId = 'factId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimFactUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimFactSetInput>;
  /** filter the rows which have to be updated */
  where: ClaimFactBoolExp;
};

/** columns and relationships of "claim_history" */
export type ClaimHistory = {
  __typename?: 'ClaimHistory';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  label?: Maybe<Scalars['claim_label']['output']>;
  status: Scalars['claim_status']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "claim_history" */
export type ClaimHistoryAggregate = {
  __typename?: 'ClaimHistoryAggregate';
  aggregate?: Maybe<ClaimHistoryAggregateFields>;
  nodes: Array<ClaimHistory>;
};

/** aggregate fields of "claim_history" */
export type ClaimHistoryAggregateFields = {
  __typename?: 'ClaimHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimHistoryMaxFields>;
  min?: Maybe<ClaimHistoryMinFields>;
};


/** aggregate fields of "claim_history" */
export type ClaimHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "claim_history". All fields are combined with a logical 'AND'. */
export type ClaimHistoryBoolExp = {
  _and?: InputMaybe<Array<ClaimHistoryBoolExp>>;
  _not?: InputMaybe<ClaimHistoryBoolExp>;
  _or?: InputMaybe<Array<ClaimHistoryBoolExp>>;
  archiveAt?: InputMaybe<TimestampComparisonExp>;
  archiveId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  label?: InputMaybe<ClaimLabelComparisonExp>;
  status?: InputMaybe<ClaimStatusComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  tags?: InputMaybe<StringArrayComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "claim_history" */
export enum ClaimHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  ClaimHistoryPkey = 'claim_history_pkey'
}

/** input type for inserting data into table "claim_history" */
export type ClaimHistoryInsertInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ClaimHistoryMaxFields = {
  __typename?: 'ClaimHistoryMaxFields';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['claim_label']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ClaimHistoryMinFields = {
  __typename?: 'ClaimHistoryMinFields';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['claim_label']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "claim_history" */
export type ClaimHistoryMutationResponse = {
  __typename?: 'ClaimHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimHistory>;
};

/** on_conflict condition type for table "claim_history" */
export type ClaimHistoryOnConflict = {
  constraint: ClaimHistoryConstraint;
  updateColumns?: Array<ClaimHistoryUpdateColumn>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};

/** Ordering options when selecting data from "claim_history". */
export type ClaimHistoryOrderBy = {
  archiveAt?: InputMaybe<OrderBy>;
  archiveId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claim_history */
export type ClaimHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "claim_history" */
export enum ClaimHistorySelectColumn {
  /** column name */
  ArchiveAt = 'archiveAt',
  /** column name */
  ArchiveId = 'archiveId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Status = 'status',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_history" */
export type ClaimHistorySetInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "claim_history" */
export type ClaimHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimHistoryStreamCursorValueInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_history" */
export enum ClaimHistoryUpdateColumn {
  /** column name */
  ArchiveAt = 'archiveAt',
  /** column name */
  ArchiveId = 'archiveId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Status = 'status',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ClaimHistoryBoolExp;
};

/** input type for inserting data into table "claim" */
export type ClaimInsertInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  claim_facts?: InputMaybe<ClaimFactArrRelInsertInput>;
  claim_resources?: InputMaybe<ClaimResourceArrRelInsertInput>;
  claim_submission_tokens?: InputMaybe<ClaimSubmissionTokenArrRelInsertInput>;
  comments?: InputMaybe<CommentArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
  viralities?: InputMaybe<ViralityArrRelInsertInput>;
};

/** Boolean expression to compare columns of type "claim_label". All fields are combined with logical 'AND'. */
export type ClaimLabelComparisonExp = {
  _eq?: InputMaybe<Scalars['claim_label']['input']>;
  _gt?: InputMaybe<Scalars['claim_label']['input']>;
  _gte?: InputMaybe<Scalars['claim_label']['input']>;
  _in?: InputMaybe<Array<Scalars['claim_label']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['claim_label']['input']>;
  _lte?: InputMaybe<Scalars['claim_label']['input']>;
  _neq?: InputMaybe<Scalars['claim_label']['input']>;
  _nin?: InputMaybe<Array<Scalars['claim_label']['input']>>;
};

/** aggregate max on columns */
export type ClaimMaxFields = {
  __typename?: 'ClaimMaxFields';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['claim_label']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim" */
export type ClaimMaxOrderBy = {
  archiveAt?: InputMaybe<OrderBy>;
  archiveId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimMinFields = {
  __typename?: 'ClaimMinFields';
  archiveAt?: Maybe<Scalars['timestamp']['output']>;
  archiveId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['claim_label']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim" */
export type ClaimMinOrderBy = {
  archiveAt?: InputMaybe<OrderBy>;
  archiveId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "claim" */
export type ClaimMutationResponse = {
  __typename?: 'ClaimMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Claim>;
};

/** input type for inserting object relation for remote table "claim" */
export type ClaimObjRelInsertInput = {
  data: ClaimInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimOnConflict>;
};

/** on_conflict condition type for table "claim" */
export type ClaimOnConflict = {
  constraint: ClaimConstraint;
  updateColumns?: Array<ClaimUpdateColumn>;
  where?: InputMaybe<ClaimBoolExp>;
};

/** Ordering options when selecting data from "claim". */
export type ClaimOrderBy = {
  archiveAt?: InputMaybe<OrderBy>;
  archiveId?: InputMaybe<OrderBy>;
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateOrderBy>;
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateOrderBy>;
  claim_submission_tokensAggregate?: InputMaybe<ClaimSubmissionTokenAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
  viralitiesAggregate?: InputMaybe<ViralityAggregateOrderBy>;
};

/** primary key columns input for table: claim */
export type ClaimPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "claim_resource" */
export type ClaimResource = {
  __typename?: 'ClaimResource';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};

/** aggregated selection of "claim_resource" */
export type ClaimResourceAggregate = {
  __typename?: 'ClaimResourceAggregate';
  aggregate?: Maybe<ClaimResourceAggregateFields>;
  nodes: Array<ClaimResource>;
};

export type ClaimResourceAggregateBoolExp = {
  count?: InputMaybe<ClaimResourceAggregateBoolExpCount>;
};

/** aggregate fields of "claim_resource" */
export type ClaimResourceAggregateFields = {
  __typename?: 'ClaimResourceAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimResourceMaxFields>;
  min?: Maybe<ClaimResourceMinFields>;
};


/** aggregate fields of "claim_resource" */
export type ClaimResourceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim_resource" */
export type ClaimResourceAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimResourceMaxOrderBy>;
  min?: InputMaybe<ClaimResourceMinOrderBy>;
};

/** input type for inserting array relation for remote table "claim_resource" */
export type ClaimResourceArrRelInsertInput = {
  data: Array<ClaimResourceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimResourceOnConflict>;
};

/** Boolean expression to filter rows from the table "claim_resource". All fields are combined with a logical 'AND'. */
export type ClaimResourceBoolExp = {
  _and?: InputMaybe<Array<ClaimResourceBoolExp>>;
  _not?: InputMaybe<ClaimResourceBoolExp>;
  _or?: InputMaybe<Array<ClaimResourceBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "claim_resource" */
export enum ClaimResourceConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimResourcePkey = 'claim_resource_pkey'
}

/** columns and relationships of "claim_resource_history" */
export type ClaimResourceHistory = {
  __typename?: 'ClaimResourceHistory';
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "claim_resource_history" */
export type ClaimResourceHistoryAggregate = {
  __typename?: 'ClaimResourceHistoryAggregate';
  aggregate?: Maybe<ClaimResourceHistoryAggregateFields>;
  nodes: Array<ClaimResourceHistory>;
};

/** aggregate fields of "claim_resource_history" */
export type ClaimResourceHistoryAggregateFields = {
  __typename?: 'ClaimResourceHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimResourceHistoryMaxFields>;
  min?: Maybe<ClaimResourceHistoryMinFields>;
};


/** aggregate fields of "claim_resource_history" */
export type ClaimResourceHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimResourceHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "claim_resource_history". All fields are combined with a logical 'AND'. */
export type ClaimResourceHistoryBoolExp = {
  _and?: InputMaybe<Array<ClaimResourceHistoryBoolExp>>;
  _not?: InputMaybe<ClaimResourceHistoryBoolExp>;
  _or?: InputMaybe<Array<ClaimResourceHistoryBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "claim_resource_history" */
export enum ClaimResourceHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  ClaimResourceHistoryPkey = 'claim_resource_history_pkey'
}

/** input type for inserting data into table "claim_resource_history" */
export type ClaimResourceHistoryInsertInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ClaimResourceHistoryMaxFields = {
  __typename?: 'ClaimResourceHistoryMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ClaimResourceHistoryMinFields = {
  __typename?: 'ClaimResourceHistoryMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "claim_resource_history" */
export type ClaimResourceHistoryMutationResponse = {
  __typename?: 'ClaimResourceHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimResourceHistory>;
};

/** on_conflict condition type for table "claim_resource_history" */
export type ClaimResourceHistoryOnConflict = {
  constraint: ClaimResourceHistoryConstraint;
  updateColumns?: Array<ClaimResourceHistoryUpdateColumn>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};

/** Ordering options when selecting data from "claim_resource_history". */
export type ClaimResourceHistoryOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claim_resource_history */
export type ClaimResourceHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "claim_resource_history" */
export enum ClaimResourceHistorySelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_resource_history" */
export type ClaimResourceHistorySetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "claim_resource_history" */
export type ClaimResourceHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimResourceHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimResourceHistoryStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_resource_history" */
export enum ClaimResourceHistoryUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimResourceHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimResourceHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ClaimResourceHistoryBoolExp;
};

/** input type for inserting data into table "claim_resource" */
export type ClaimResourceInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type ClaimResourceMaxFields = {
  __typename?: 'ClaimResourceMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim_resource" */
export type ClaimResourceMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimResourceMinFields = {
  __typename?: 'ClaimResourceMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim_resource" */
export type ClaimResourceMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "claim_resource" */
export type ClaimResourceMutationResponse = {
  __typename?: 'ClaimResourceMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimResource>;
};

/** on_conflict condition type for table "claim_resource" */
export type ClaimResourceOnConflict = {
  constraint: ClaimResourceConstraint;
  updateColumns?: Array<ClaimResourceUpdateColumn>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};

/** Ordering options when selecting data from "claim_resource". */
export type ClaimResourceOrderBy = {
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: claim_resource */
export type ClaimResourcePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim_resource" */
export enum ClaimResourceSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_resource" */
export type ClaimResourceSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "claim_resource" */
export type ClaimResourceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimResourceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimResourceStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_resource" */
export enum ClaimResourceUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimResourceUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimResourceSetInput>;
  /** filter the rows which have to be updated */
  where: ClaimResourceBoolExp;
};

/** select columns of table "claim" */
export enum ClaimSelectColumn {
  /** column name */
  ArchiveAt = 'archiveAt',
  /** column name */
  ArchiveId = 'archiveId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Status = 'status',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim" */
export type ClaimSetInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Boolean expression to compare columns of type "claim_status". All fields are combined with logical 'AND'. */
export type ClaimStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['claim_status']['input']>;
  _gt?: InputMaybe<Scalars['claim_status']['input']>;
  _gte?: InputMaybe<Scalars['claim_status']['input']>;
  _in?: InputMaybe<Array<Scalars['claim_status']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['claim_status']['input']>;
  _lte?: InputMaybe<Scalars['claim_status']['input']>;
  _neq?: InputMaybe<Scalars['claim_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['claim_status']['input']>>;
};

/** Streaming cursor of the table "claim" */
export type ClaimStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimStreamCursorValueInput = {
  archiveAt?: InputMaybe<Scalars['timestamp']['input']>;
  archiveId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['claim_label']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "claim_submission_token" */
export type ClaimSubmissionToken = {
  __typename?: 'ClaimSubmissionToken';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "claim_submission_token" */
export type ClaimSubmissionTokenAggregate = {
  __typename?: 'ClaimSubmissionTokenAggregate';
  aggregate?: Maybe<ClaimSubmissionTokenAggregateFields>;
  nodes: Array<ClaimSubmissionToken>;
};

export type ClaimSubmissionTokenAggregateBoolExp = {
  count?: InputMaybe<ClaimSubmissionTokenAggregateBoolExpCount>;
};

/** aggregate fields of "claim_submission_token" */
export type ClaimSubmissionTokenAggregateFields = {
  __typename?: 'ClaimSubmissionTokenAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimSubmissionTokenMaxFields>;
  min?: Maybe<ClaimSubmissionTokenMinFields>;
};


/** aggregate fields of "claim_submission_token" */
export type ClaimSubmissionTokenAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim_submission_token" */
export type ClaimSubmissionTokenAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimSubmissionTokenMaxOrderBy>;
  min?: InputMaybe<ClaimSubmissionTokenMinOrderBy>;
};

/** input type for inserting array relation for remote table "claim_submission_token" */
export type ClaimSubmissionTokenArrRelInsertInput = {
  data: Array<ClaimSubmissionTokenInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimSubmissionTokenOnConflict>;
};

/** Boolean expression to filter rows from the table "claim_submission_token". All fields are combined with a logical 'AND'. */
export type ClaimSubmissionTokenBoolExp = {
  _and?: InputMaybe<Array<ClaimSubmissionTokenBoolExp>>;
  _not?: InputMaybe<ClaimSubmissionTokenBoolExp>;
  _or?: InputMaybe<Array<ClaimSubmissionTokenBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  token?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "claim_submission_token" */
export enum ClaimSubmissionTokenConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimSubmissionTokenPkey = 'claim_submission_token_pkey',
  /** unique or primary key constraint on columns "token" */
  ClaimSubmissionTokenTokenKey = 'claim_submission_token_token_key'
}

/** input type for inserting data into table "claim_submission_token" */
export type ClaimSubmissionTokenInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ClaimSubmissionTokenMaxFields = {
  __typename?: 'ClaimSubmissionTokenMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "claim_submission_token" */
export type ClaimSubmissionTokenMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimSubmissionTokenMinFields = {
  __typename?: 'ClaimSubmissionTokenMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "claim_submission_token" */
export type ClaimSubmissionTokenMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "claim_submission_token" */
export type ClaimSubmissionTokenMutationResponse = {
  __typename?: 'ClaimSubmissionTokenMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimSubmissionToken>;
};

/** on_conflict condition type for table "claim_submission_token" */
export type ClaimSubmissionTokenOnConflict = {
  constraint: ClaimSubmissionTokenConstraint;
  updateColumns?: Array<ClaimSubmissionTokenUpdateColumn>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};

/** Ordering options when selecting data from "claim_submission_token". */
export type ClaimSubmissionTokenOrderBy = {
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claim_submission_token */
export type ClaimSubmissionTokenPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim_submission_token" */
export enum ClaimSubmissionTokenSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "claim_submission_token" */
export type ClaimSubmissionTokenSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "claim_submission_token" */
export type ClaimSubmissionTokenStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimSubmissionTokenStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimSubmissionTokenStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "claim_submission_token" */
export enum ClaimSubmissionTokenUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ClaimSubmissionTokenUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimSubmissionTokenSetInput>;
  /** filter the rows which have to be updated */
  where: ClaimSubmissionTokenBoolExp;
};

/** update columns of table "claim" */
export enum ClaimUpdateColumn {
  /** column name */
  ArchiveAt = 'archiveAt',
  /** column name */
  ArchiveId = 'archiveId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Status = 'status',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimSetInput>;
  /** filter the rows which have to be updated */
  where: ClaimBoolExp;
};

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: 'Comment';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user: User;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};

/** aggregated selection of "comment" */
export type CommentAggregate = {
  __typename?: 'CommentAggregate';
  aggregate?: Maybe<CommentAggregateFields>;
  nodes: Array<Comment>;
};

export type CommentAggregateBoolExp = {
  count?: InputMaybe<CommentAggregateBoolExpCount>;
};

/** aggregate fields of "comment" */
export type CommentAggregateFields = {
  __typename?: 'CommentAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CommentMaxFields>;
  min?: Maybe<CommentMinFields>;
};


/** aggregate fields of "comment" */
export type CommentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment" */
export type CommentAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentMaxOrderBy>;
  min?: InputMaybe<CommentMinOrderBy>;
};

/** input type for inserting array relation for remote table "comment" */
export type CommentArrRelInsertInput = {
  data: Array<CommentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CommentOnConflict>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type CommentBoolExp = {
  _and?: InputMaybe<Array<CommentBoolExp>>;
  _not?: InputMaybe<CommentBoolExp>;
  _or?: InputMaybe<Array<CommentBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "comment" */
export enum CommentConstraint {
  /** unique or primary key constraint on columns "id" */
  CommentPkey = 'comment_pkey'
}

/** columns and relationships of "comment_history" */
export type CommentHistory = {
  __typename?: 'CommentHistory';
  claimId: Scalars['uuid']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy: Scalars['uuid']['output'];
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "comment_history" */
export type CommentHistoryAggregate = {
  __typename?: 'CommentHistoryAggregate';
  aggregate?: Maybe<CommentHistoryAggregateFields>;
  nodes: Array<CommentHistory>;
};

/** aggregate fields of "comment_history" */
export type CommentHistoryAggregateFields = {
  __typename?: 'CommentHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CommentHistoryMaxFields>;
  min?: Maybe<CommentHistoryMinFields>;
};


/** aggregate fields of "comment_history" */
export type CommentHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommentHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "comment_history". All fields are combined with a logical 'AND'. */
export type CommentHistoryBoolExp = {
  _and?: InputMaybe<Array<CommentHistoryBoolExp>>;
  _not?: InputMaybe<CommentHistoryBoolExp>;
  _or?: InputMaybe<Array<CommentHistoryBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "comment_history" */
export enum CommentHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  CommentHistoryPkey = 'comment_history_pkey'
}

/** input type for inserting data into table "comment_history" */
export type CommentHistoryInsertInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type CommentHistoryMaxFields = {
  __typename?: 'CommentHistoryMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type CommentHistoryMinFields = {
  __typename?: 'CommentHistoryMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "comment_history" */
export type CommentHistoryMutationResponse = {
  __typename?: 'CommentHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CommentHistory>;
};

/** on_conflict condition type for table "comment_history" */
export type CommentHistoryOnConflict = {
  constraint: CommentHistoryConstraint;
  updateColumns?: Array<CommentHistoryUpdateColumn>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};

/** Ordering options when selecting data from "comment_history". */
export type CommentHistoryOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: comment_history */
export type CommentHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "comment_history" */
export enum CommentHistorySelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "comment_history" */
export type CommentHistorySetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "comment_history" */
export type CommentHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommentHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CommentHistoryStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comment_history" */
export enum CommentHistoryUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type CommentHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommentHistorySetInput>;
  /** filter the rows which have to be updated */
  where: CommentHistoryBoolExp;
};

/** input type for inserting data into table "comment" */
export type CommentInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type CommentMaxFields = {
  __typename?: 'CommentMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comment" */
export type CommentMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentMinFields = {
  __typename?: 'CommentMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comment" */
export type CommentMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "comment" */
export type CommentMutationResponse = {
  __typename?: 'CommentMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** on_conflict condition type for table "comment" */
export type CommentOnConflict = {
  constraint: CommentConstraint;
  updateColumns?: Array<CommentUpdateColumn>;
  where?: InputMaybe<CommentBoolExp>;
};

/** Ordering options when selecting data from "comment". */
export type CommentOrderBy = {
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: comment */
export type CommentPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment" */
export enum CommentSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "comment" */
export type CommentSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "comment" */
export type CommentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CommentStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comment" */
export enum CommentUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type CommentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommentSetInput>;
  /** filter the rows which have to be updated */
  where: CommentBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "fact" */
export type Fact = {
  __typename?: 'Fact';
  /** An aggregate relationship */
  claimFactsAggregate: ClaimFactAggregate;
  /** An array relationship */
  claim_facts: Array<ClaimFact>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An aggregate relationship */
  factResourcesAggregate: FactResourceAggregate;
  /** An array relationship */
  fact_resources: Array<FactResource>;
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "fact" */
export type FactClaimFactsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "fact" */
export type FactClaim_FactsArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "fact" */
export type FactFactResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "fact" */
export type FactFact_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};

/** aggregated selection of "fact" */
export type FactAggregate = {
  __typename?: 'FactAggregate';
  aggregate?: Maybe<FactAggregateFields>;
  nodes: Array<Fact>;
};

export type FactAggregateBoolExp = {
  count?: InputMaybe<FactAggregateBoolExpCount>;
};

/** aggregate fields of "fact" */
export type FactAggregateFields = {
  __typename?: 'FactAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<FactMaxFields>;
  min?: Maybe<FactMinFields>;
};


/** aggregate fields of "fact" */
export type FactAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fact" */
export type FactAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FactMaxOrderBy>;
  min?: InputMaybe<FactMinOrderBy>;
};

/** input type for inserting array relation for remote table "fact" */
export type FactArrRelInsertInput = {
  data: Array<FactInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FactOnConflict>;
};

/** Boolean expression to filter rows from the table "fact". All fields are combined with a logical 'AND'. */
export type FactBoolExp = {
  _and?: InputMaybe<Array<FactBoolExp>>;
  _not?: InputMaybe<FactBoolExp>;
  _or?: InputMaybe<Array<FactBoolExp>>;
  claim_facts?: InputMaybe<ClaimFactBoolExp>;
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  fact_resources?: InputMaybe<FactResourceBoolExp>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "fact" */
export enum FactConstraint {
  /** unique or primary key constraint on columns "id" */
  FactPkey = 'fact_pkey'
}

/** columns and relationships of "fact_history" */
export type FactHistory = {
  __typename?: 'FactHistory';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "fact_history" */
export type FactHistoryAggregate = {
  __typename?: 'FactHistoryAggregate';
  aggregate?: Maybe<FactHistoryAggregateFields>;
  nodes: Array<FactHistory>;
};

/** aggregate fields of "fact_history" */
export type FactHistoryAggregateFields = {
  __typename?: 'FactHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<FactHistoryMaxFields>;
  min?: Maybe<FactHistoryMinFields>;
};


/** aggregate fields of "fact_history" */
export type FactHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "fact_history". All fields are combined with a logical 'AND'. */
export type FactHistoryBoolExp = {
  _and?: InputMaybe<Array<FactHistoryBoolExp>>;
  _not?: InputMaybe<FactHistoryBoolExp>;
  _or?: InputMaybe<Array<FactHistoryBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "fact_history" */
export enum FactHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  FactHistoryPkey = 'fact_history_pkey'
}

/** input type for inserting data into table "fact_history" */
export type FactHistoryInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type FactHistoryMaxFields = {
  __typename?: 'FactHistoryMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type FactHistoryMinFields = {
  __typename?: 'FactHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "fact_history" */
export type FactHistoryMutationResponse = {
  __typename?: 'FactHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FactHistory>;
};

/** on_conflict condition type for table "fact_history" */
export type FactHistoryOnConflict = {
  constraint: FactHistoryConstraint;
  updateColumns?: Array<FactHistoryUpdateColumn>;
  where?: InputMaybe<FactHistoryBoolExp>;
};

/** Ordering options when selecting data from "fact_history". */
export type FactHistoryOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: fact_history */
export type FactHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "fact_history" */
export enum FactHistorySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact_history" */
export type FactHistorySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "fact_history" */
export type FactHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FactHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FactHistoryStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "fact_history" */
export enum FactHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactHistorySetInput>;
  /** filter the rows which have to be updated */
  where: FactHistoryBoolExp;
};

/** input type for inserting data into table "fact" */
export type FactInsertInput = {
  claim_facts?: InputMaybe<ClaimFactArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fact_resources?: InputMaybe<FactResourceArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type FactMaxFields = {
  __typename?: 'FactMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "fact" */
export type FactMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FactMinFields = {
  __typename?: 'FactMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "fact" */
export type FactMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "fact" */
export type FactMutationResponse = {
  __typename?: 'FactMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fact>;
};

/** input type for inserting object relation for remote table "fact" */
export type FactObjRelInsertInput = {
  data: FactInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<FactOnConflict>;
};

/** on_conflict condition type for table "fact" */
export type FactOnConflict = {
  constraint: FactConstraint;
  updateColumns?: Array<FactUpdateColumn>;
  where?: InputMaybe<FactBoolExp>;
};

/** Ordering options when selecting data from "fact". */
export type FactOrderBy = {
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: fact */
export type FactPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "fact_resource" */
export type FactResource = {
  __typename?: 'FactResource';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  fact: Fact;
  factId: Scalars['uuid']['output'];
  /** An object relationship */
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};

/** aggregated selection of "fact_resource" */
export type FactResourceAggregate = {
  __typename?: 'FactResourceAggregate';
  aggregate?: Maybe<FactResourceAggregateFields>;
  nodes: Array<FactResource>;
};

export type FactResourceAggregateBoolExp = {
  count?: InputMaybe<FactResourceAggregateBoolExpCount>;
};

/** aggregate fields of "fact_resource" */
export type FactResourceAggregateFields = {
  __typename?: 'FactResourceAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<FactResourceMaxFields>;
  min?: Maybe<FactResourceMinFields>;
};


/** aggregate fields of "fact_resource" */
export type FactResourceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactResourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fact_resource" */
export type FactResourceAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FactResourceMaxOrderBy>;
  min?: InputMaybe<FactResourceMinOrderBy>;
};

/** input type for inserting array relation for remote table "fact_resource" */
export type FactResourceArrRelInsertInput = {
  data: Array<FactResourceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FactResourceOnConflict>;
};

/** Boolean expression to filter rows from the table "fact_resource". All fields are combined with a logical 'AND'. */
export type FactResourceBoolExp = {
  _and?: InputMaybe<Array<FactResourceBoolExp>>;
  _not?: InputMaybe<FactResourceBoolExp>;
  _or?: InputMaybe<Array<FactResourceBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  fact?: InputMaybe<FactBoolExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "fact_resource" */
export enum FactResourceConstraint {
  /** unique or primary key constraint on columns "id" */
  FactResourcePkey = 'fact_resource_pkey'
}

/** columns and relationships of "fact_resource_history" */
export type FactResourceHistory = {
  __typename?: 'FactResourceHistory';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factId: Scalars['uuid']['output'];
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "fact_resource_history" */
export type FactResourceHistoryAggregate = {
  __typename?: 'FactResourceHistoryAggregate';
  aggregate?: Maybe<FactResourceHistoryAggregateFields>;
  nodes: Array<FactResourceHistory>;
};

/** aggregate fields of "fact_resource_history" */
export type FactResourceHistoryAggregateFields = {
  __typename?: 'FactResourceHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<FactResourceHistoryMaxFields>;
  min?: Maybe<FactResourceHistoryMinFields>;
};


/** aggregate fields of "fact_resource_history" */
export type FactResourceHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactResourceHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "fact_resource_history". All fields are combined with a logical 'AND'. */
export type FactResourceHistoryBoolExp = {
  _and?: InputMaybe<Array<FactResourceHistoryBoolExp>>;
  _not?: InputMaybe<FactResourceHistoryBoolExp>;
  _or?: InputMaybe<Array<FactResourceHistoryBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "fact_resource_history" */
export enum FactResourceHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  FactResourceHistoryPkey = 'fact_resource_history_pkey'
}

/** input type for inserting data into table "fact_resource_history" */
export type FactResourceHistoryInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type FactResourceHistoryMaxFields = {
  __typename?: 'FactResourceHistoryMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type FactResourceHistoryMinFields = {
  __typename?: 'FactResourceHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "fact_resource_history" */
export type FactResourceHistoryMutationResponse = {
  __typename?: 'FactResourceHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FactResourceHistory>;
};

/** on_conflict condition type for table "fact_resource_history" */
export type FactResourceHistoryOnConflict = {
  constraint: FactResourceHistoryConstraint;
  updateColumns?: Array<FactResourceHistoryUpdateColumn>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};

/** Ordering options when selecting data from "fact_resource_history". */
export type FactResourceHistoryOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: fact_resource_history */
export type FactResourceHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "fact_resource_history" */
export enum FactResourceHistorySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact_resource_history" */
export type FactResourceHistorySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "fact_resource_history" */
export type FactResourceHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FactResourceHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FactResourceHistoryStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "fact_resource_history" */
export enum FactResourceHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactResourceHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactResourceHistorySetInput>;
  /** filter the rows which have to be updated */
  where: FactResourceHistoryBoolExp;
};

/** input type for inserting data into table "fact_resource" */
export type FactResourceInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fact?: InputMaybe<FactObjRelInsertInput>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type FactResourceMaxFields = {
  __typename?: 'FactResourceMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "fact_resource" */
export type FactResourceMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FactResourceMinFields = {
  __typename?: 'FactResourceMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "fact_resource" */
export type FactResourceMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "fact_resource" */
export type FactResourceMutationResponse = {
  __typename?: 'FactResourceMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FactResource>;
};

/** on_conflict condition type for table "fact_resource" */
export type FactResourceOnConflict = {
  constraint: FactResourceConstraint;
  updateColumns?: Array<FactResourceUpdateColumn>;
  where?: InputMaybe<FactResourceBoolExp>;
};

/** Ordering options when selecting data from "fact_resource". */
export type FactResourceOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  fact?: InputMaybe<FactOrderBy>;
  factId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: fact_resource */
export type FactResourcePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "fact_resource" */
export enum FactResourceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact_resource" */
export type FactResourceSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "fact_resource" */
export type FactResourceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FactResourceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FactResourceStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "fact_resource" */
export enum FactResourceUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactResourceUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactResourceSetInput>;
  /** filter the rows which have to be updated */
  where: FactResourceBoolExp;
};

/** select columns of table "fact" */
export enum FactSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact" */
export type FactSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "fact" */
export type FactStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FactStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FactStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "fact" */
export enum FactUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactSetInput>;
  /** filter the rows which have to be updated */
  where: FactBoolExp;
};

/** columns and relationships of "file" */
export type File = {
  __typename?: 'File';
  /** An aggregate relationship */
  claimResourcesAggregate: ClaimResourceAggregate;
  /** An array relationship */
  claim_resources: Array<ClaimResource>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An aggregate relationship */
  factResourcesAggregate: FactResourceAggregate;
  /** An array relationship */
  fact_resources: Array<FactResource>;
  id: Scalars['uuid']['output'];
  key: Scalars['String']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "file" */
export type FileClaimResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "file" */
export type FileClaim_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "file" */
export type FileFactResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "file" */
export type FileFact_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};

/** aggregated selection of "file" */
export type FileAggregate = {
  __typename?: 'FileAggregate';
  aggregate?: Maybe<FileAggregateFields>;
  nodes: Array<File>;
};

export type FileAggregateBoolExp = {
  count?: InputMaybe<FileAggregateBoolExpCount>;
};

/** aggregate fields of "file" */
export type FileAggregateFields = {
  __typename?: 'FileAggregateFields';
  avg?: Maybe<FileAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FileMaxFields>;
  min?: Maybe<FileMinFields>;
  stddev?: Maybe<FileStddevFields>;
  stddevPop?: Maybe<FileStddevPopFields>;
  stddevSamp?: Maybe<FileStddevSampFields>;
  sum?: Maybe<FileSumFields>;
  varPop?: Maybe<FileVarPopFields>;
  varSamp?: Maybe<FileVarSampFields>;
  variance?: Maybe<FileVarianceFields>;
};


/** aggregate fields of "file" */
export type FileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "file" */
export type FileAggregateOrderBy = {
  avg?: InputMaybe<FileAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FileMaxOrderBy>;
  min?: InputMaybe<FileMinOrderBy>;
  stddev?: InputMaybe<FileStddevOrderBy>;
  stddevPop?: InputMaybe<FileStddevPopOrderBy>;
  stddevSamp?: InputMaybe<FileStddevSampOrderBy>;
  sum?: InputMaybe<FileSumOrderBy>;
  varPop?: InputMaybe<FileVarPopOrderBy>;
  varSamp?: InputMaybe<FileVarSampOrderBy>;
  variance?: InputMaybe<FileVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "file" */
export type FileArrRelInsertInput = {
  data: Array<FileInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FileOnConflict>;
};

/** aggregate avg on columns */
export type FileAvgFields = {
  __typename?: 'FileAvgFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "file" */
export type FileAvgOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type FileBoolExp = {
  _and?: InputMaybe<Array<FileBoolExp>>;
  _not?: InputMaybe<FileBoolExp>;
  _or?: InputMaybe<Array<FileBoolExp>>;
  claim_resources?: InputMaybe<ClaimResourceBoolExp>;
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  fact_resources?: InputMaybe<FactResourceBoolExp>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  md5?: InputMaybe<StringComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  transcription?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "file" */
export enum FileConstraint {
  /** unique or primary key constraint on columns "id" */
  FilePkey = 'file_pkey'
}

/** columns and relationships of "file_history" */
export type FileHistory = {
  __typename?: 'FileHistory';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  key: Scalars['String']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "file_history" */
export type FileHistoryAggregate = {
  __typename?: 'FileHistoryAggregate';
  aggregate?: Maybe<FileHistoryAggregateFields>;
  nodes: Array<FileHistory>;
};

/** aggregate fields of "file_history" */
export type FileHistoryAggregateFields = {
  __typename?: 'FileHistoryAggregateFields';
  avg?: Maybe<FileHistoryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FileHistoryMaxFields>;
  min?: Maybe<FileHistoryMinFields>;
  stddev?: Maybe<FileHistoryStddevFields>;
  stddevPop?: Maybe<FileHistoryStddevPopFields>;
  stddevSamp?: Maybe<FileHistoryStddevSampFields>;
  sum?: Maybe<FileHistorySumFields>;
  varPop?: Maybe<FileHistoryVarPopFields>;
  varSamp?: Maybe<FileHistoryVarSampFields>;
  variance?: Maybe<FileHistoryVarianceFields>;
};


/** aggregate fields of "file_history" */
export type FileHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type FileHistoryAvgFields = {
  __typename?: 'FileHistoryAvgFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "file_history". All fields are combined with a logical 'AND'. */
export type FileHistoryBoolExp = {
  _and?: InputMaybe<Array<FileHistoryBoolExp>>;
  _not?: InputMaybe<FileHistoryBoolExp>;
  _or?: InputMaybe<Array<FileHistoryBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  md5?: InputMaybe<StringComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  transcription?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "file_history" */
export enum FileHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  FileHistoryPkey = 'file_history_pkey'
}

/** input type for incrementing numeric columns in table "file_history" */
export type FileHistoryIncInput = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "file_history" */
export type FileHistoryInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type FileHistoryMaxFields = {
  __typename?: 'FileHistoryMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  md5?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type FileHistoryMinFields = {
  __typename?: 'FileHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  md5?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "file_history" */
export type FileHistoryMutationResponse = {
  __typename?: 'FileHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<FileHistory>;
};

/** on_conflict condition type for table "file_history" */
export type FileHistoryOnConflict = {
  constraint: FileHistoryConstraint;
  updateColumns?: Array<FileHistoryUpdateColumn>;
  where?: InputMaybe<FileHistoryBoolExp>;
};

/** Ordering options when selecting data from "file_history". */
export type FileHistoryOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: file_history */
export type FileHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "file_history" */
export enum FileHistorySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Md5 = 'md5',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Transcription = 'transcription',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "file_history" */
export type FileHistorySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type FileHistoryStddevFields = {
  __typename?: 'FileHistoryStddevFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type FileHistoryStddevPopFields = {
  __typename?: 'FileHistoryStddevPopFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type FileHistoryStddevSampFields = {
  __typename?: 'FileHistoryStddevSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "file_history" */
export type FileHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FileHistoryStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type FileHistorySumFields = {
  __typename?: 'FileHistorySumFields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "file_history" */
export enum FileHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Md5 = 'md5',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Transcription = 'transcription',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FileHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FileHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FileHistorySetInput>;
  /** filter the rows which have to be updated */
  where: FileHistoryBoolExp;
};

/** aggregate varPop on columns */
export type FileHistoryVarPopFields = {
  __typename?: 'FileHistoryVarPopFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type FileHistoryVarSampFields = {
  __typename?: 'FileHistoryVarSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type FileHistoryVarianceFields = {
  __typename?: 'FileHistoryVarianceFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** input type for incrementing numeric columns in table "file" */
export type FileIncInput = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "file" */
export type FileInsertInput = {
  claim_resources?: InputMaybe<ClaimResourceArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  fact_resources?: InputMaybe<FactResourceArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type FileMaxFields = {
  __typename?: 'FileMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  md5?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "file" */
export type FileMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FileMinFields = {
  __typename?: 'FileMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  md5?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "file" */
export type FileMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "file" */
export type FileMutationResponse = {
  __typename?: 'FileMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** input type for inserting object relation for remote table "file" */
export type FileObjRelInsertInput = {
  data: FileInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<FileOnConflict>;
};

/** on_conflict condition type for table "file" */
export type FileOnConflict = {
  constraint: FileConstraint;
  updateColumns?: Array<FileUpdateColumn>;
  where?: InputMaybe<FileBoolExp>;
};

/** Ordering options when selecting data from "file". */
export type FileOrderBy = {
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: file */
export type FilePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "file" */
export enum FileSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Md5 = 'md5',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Transcription = 'transcription',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "file" */
export type FileSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type FileStddevFields = {
  __typename?: 'FileStddevFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "file" */
export type FileStddevOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type FileStddevPopFields = {
  __typename?: 'FileStddevPopFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "file" */
export type FileStddevPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type FileStddevSampFields = {
  __typename?: 'FileStddevSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "file" */
export type FileStddevSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "file" */
export type FileStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FileStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FileStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  md5?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  transcription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type FileSumFields = {
  __typename?: 'FileSumFields';
  size?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "file" */
export type FileSumOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** update columns of table "file" */
export enum FileUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Md5 = 'md5',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Transcription = 'transcription',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FileUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FileIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FileSetInput>;
  /** filter the rows which have to be updated */
  where: FileBoolExp;
};

/** aggregate varPop on columns */
export type FileVarPopFields = {
  __typename?: 'FileVarPopFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "file" */
export type FileVarPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type FileVarSampFields = {
  __typename?: 'FileVarSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "file" */
export type FileVarSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FileVarianceFields = {
  __typename?: 'FileVarianceFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "file" */
export type FileVarianceOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringArrayComparisonExp = {
  /** is the array contained in the given array value */
  _containedIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "tstzrange". All fields are combined with logical 'AND'. */
export type TstzrangeComparisonExp = {
  _eq?: InputMaybe<Scalars['tstzrange']['input']>;
  _gt?: InputMaybe<Scalars['tstzrange']['input']>;
  _gte?: InputMaybe<Scalars['tstzrange']['input']>;
  _in?: InputMaybe<Array<Scalars['tstzrange']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['tstzrange']['input']>;
  _lte?: InputMaybe<Scalars['tstzrange']['input']>;
  _neq?: InputMaybe<Scalars['tstzrange']['input']>;
  _nin?: InputMaybe<Array<Scalars['tstzrange']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  /** An aggregate relationship */
  claimFactsAggregate: ClaimFactAggregate;
  /** An array relationship */
  claimFactsByUpdatedBy: Array<ClaimFact>;
  /** An aggregate relationship */
  claimFactsByUpdatedByAggregate: ClaimFactAggregate;
  /** An aggregate relationship */
  claimResourcesAggregate: ClaimResourceAggregate;
  /** An array relationship */
  claimResourcesByUpdatedBy: Array<ClaimResource>;
  /** An aggregate relationship */
  claimResourcesByUpdatedByAggregate: ClaimResourceAggregate;
  /** An array relationship */
  claim_facts: Array<ClaimFact>;
  /** An array relationship */
  claim_resources: Array<ClaimResource>;
  /** An array relationship */
  claims: Array<Claim>;
  /** An aggregate relationship */
  claimsAggregate: ClaimAggregate;
  /** An array relationship */
  claimsByUpdatedBy: Array<Claim>;
  /** An aggregate relationship */
  claimsByUpdatedByAggregate: ClaimAggregate;
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  commentsAggregate: CommentAggregate;
  /** An array relationship */
  commentsByUpdatedBy: Array<Comment>;
  /** An aggregate relationship */
  commentsByUpdatedByAggregate: CommentAggregate;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  /** An aggregate relationship */
  factResourcesAggregate: FactResourceAggregate;
  /** An array relationship */
  factResourcesByUpdatedBy: Array<FactResource>;
  /** An aggregate relationship */
  factResourcesByUpdatedByAggregate: FactResourceAggregate;
  /** An array relationship */
  fact_resources: Array<FactResource>;
  /** An array relationship */
  facts: Array<Fact>;
  /** An aggregate relationship */
  factsAggregate: FactAggregate;
  /** An array relationship */
  factsByUpdatedBy: Array<Fact>;
  /** An aggregate relationship */
  factsByUpdatedByAggregate: FactAggregate;
  /** An array relationship */
  files: Array<File>;
  /** An aggregate relationship */
  filesAggregate: FileAggregate;
  /** An array relationship */
  filesByUpdatedBy: Array<File>;
  /** An aggregate relationship */
  filesByUpdatedByAggregate: FileAggregate;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username: Scalars['String']['output'];
};


/** columns and relationships of "user" */
export type UserClaimFactsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimFactsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimFactsByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimResourcesByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimResourcesByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaim_FactsArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaim_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimsByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "user" */
export type UserCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "user" */
export type UserCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "user" */
export type UserCommentsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "user" */
export type UserCommentsByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactResourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactResourcesByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactResourcesByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserFact_ResourcesArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactsArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactsByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "user" */
export type UserFilesArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


/** columns and relationships of "user" */
export type UserFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


/** columns and relationships of "user" */
export type UserFilesByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


/** columns and relationships of "user" */
export type UserFilesByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  bio?: InputMaybe<StringComparisonExp>;
  claimFactsByUpdatedBy?: InputMaybe<ClaimFactBoolExp>;
  claimFactsByUpdatedByAggregate?: InputMaybe<ClaimFactAggregateBoolExp>;
  claimResourcesByUpdatedBy?: InputMaybe<ClaimResourceBoolExp>;
  claimResourcesByUpdatedByAggregate?: InputMaybe<ClaimResourceAggregateBoolExp>;
  claim_facts?: InputMaybe<ClaimFactBoolExp>;
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateBoolExp>;
  claim_resources?: InputMaybe<ClaimResourceBoolExp>;
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateBoolExp>;
  claims?: InputMaybe<ClaimBoolExp>;
  claimsAggregate?: InputMaybe<ClaimAggregateBoolExp>;
  claimsByUpdatedBy?: InputMaybe<ClaimBoolExp>;
  claimsByUpdatedByAggregate?: InputMaybe<ClaimAggregateBoolExp>;
  comments?: InputMaybe<CommentBoolExp>;
  commentsAggregate?: InputMaybe<CommentAggregateBoolExp>;
  commentsByUpdatedBy?: InputMaybe<CommentBoolExp>;
  commentsByUpdatedByAggregate?: InputMaybe<CommentAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  factResourcesByUpdatedBy?: InputMaybe<FactResourceBoolExp>;
  factResourcesByUpdatedByAggregate?: InputMaybe<FactResourceAggregateBoolExp>;
  fact_resources?: InputMaybe<FactResourceBoolExp>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateBoolExp>;
  facts?: InputMaybe<FactBoolExp>;
  factsAggregate?: InputMaybe<FactAggregateBoolExp>;
  factsByUpdatedBy?: InputMaybe<FactBoolExp>;
  factsByUpdatedByAggregate?: InputMaybe<FactAggregateBoolExp>;
  files?: InputMaybe<FileBoolExp>;
  filesAggregate?: InputMaybe<FileAggregateBoolExp>;
  filesByUpdatedBy?: InputMaybe<FileBoolExp>;
  filesByUpdatedByAggregate?: InputMaybe<FileAggregateBoolExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  mobileNumber?: InputMaybe<StringComparisonExp>;
  profileImage?: InputMaybe<StringComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = 'user_username_key'
}

/** columns and relationships of "user_history" */
export type UserHistory = {
  __typename?: 'UserHistory';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username: Scalars['String']['output'];
};

/** aggregated selection of "user_history" */
export type UserHistoryAggregate = {
  __typename?: 'UserHistoryAggregate';
  aggregate?: Maybe<UserHistoryAggregateFields>;
  nodes: Array<UserHistory>;
};

/** aggregate fields of "user_history" */
export type UserHistoryAggregateFields = {
  __typename?: 'UserHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserHistoryMaxFields>;
  min?: Maybe<UserHistoryMinFields>;
};


/** aggregate fields of "user_history" */
export type UserHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_history". All fields are combined with a logical 'AND'. */
export type UserHistoryBoolExp = {
  _and?: InputMaybe<Array<UserHistoryBoolExp>>;
  _not?: InputMaybe<UserHistoryBoolExp>;
  _or?: InputMaybe<Array<UserHistoryBoolExp>>;
  bio?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  mobileNumber?: InputMaybe<StringComparisonExp>;
  profileImage?: InputMaybe<StringComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_history" */
export enum UserHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  UserHistoryPkey = 'user_history_pkey'
}

/** input type for inserting data into table "user_history" */
export type UserHistoryInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserHistoryMaxFields = {
  __typename?: 'UserHistoryMaxFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserHistoryMinFields = {
  __typename?: 'UserHistoryMinFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_history" */
export type UserHistoryMutationResponse = {
  __typename?: 'UserHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserHistory>;
};

/** on_conflict condition type for table "user_history" */
export type UserHistoryOnConflict = {
  constraint: UserHistoryConstraint;
  updateColumns?: Array<UserHistoryUpdateColumn>;
  where?: InputMaybe<UserHistoryBoolExp>;
};

/** Ordering options when selecting data from "user_history". */
export type UserHistoryOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_history */
export type UserHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "user_history" */
export enum UserHistorySelectColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MobileNumber = 'mobileNumber',
  /** column name */
  ProfileImage = 'profileImage',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user_history" */
export type UserHistorySetInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_history" */
export type UserHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserHistoryStreamCursorValueInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_history" */
export enum UserHistoryUpdateColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MobileNumber = 'mobileNumber',
  /** column name */
  ProfileImage = 'profileImage',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type UserHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserHistorySetInput>;
  /** filter the rows which have to be updated */
  where: UserHistoryBoolExp;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  claimFactsByUpdatedBy?: InputMaybe<ClaimFactArrRelInsertInput>;
  claimResourcesByUpdatedBy?: InputMaybe<ClaimResourceArrRelInsertInput>;
  claim_facts?: InputMaybe<ClaimFactArrRelInsertInput>;
  claim_resources?: InputMaybe<ClaimResourceArrRelInsertInput>;
  claims?: InputMaybe<ClaimArrRelInsertInput>;
  claimsByUpdatedBy?: InputMaybe<ClaimArrRelInsertInput>;
  comments?: InputMaybe<CommentArrRelInsertInput>;
  commentsByUpdatedBy?: InputMaybe<CommentArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  factResourcesByUpdatedBy?: InputMaybe<FactResourceArrRelInsertInput>;
  fact_resources?: InputMaybe<FactResourceArrRelInsertInput>;
  facts?: InputMaybe<FactArrRelInsertInput>;
  factsByUpdatedBy?: InputMaybe<FactArrRelInsertInput>;
  files?: InputMaybe<FileArrRelInsertInput>;
  filesByUpdatedBy?: InputMaybe<FileArrRelInsertInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  updateColumns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  bio?: InputMaybe<OrderBy>;
  claimFactsByUpdatedByAggregate?: InputMaybe<ClaimFactAggregateOrderBy>;
  claimResourcesByUpdatedByAggregate?: InputMaybe<ClaimResourceAggregateOrderBy>;
  claim_factsAggregate?: InputMaybe<ClaimFactAggregateOrderBy>;
  claim_resourcesAggregate?: InputMaybe<ClaimResourceAggregateOrderBy>;
  claimsAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  claimsByUpdatedByAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentAggregateOrderBy>;
  commentsByUpdatedByAggregate?: InputMaybe<CommentAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  factResourcesByUpdatedByAggregate?: InputMaybe<FactResourceAggregateOrderBy>;
  fact_resourcesAggregate?: InputMaybe<FactResourceAggregateOrderBy>;
  factsAggregate?: InputMaybe<FactAggregateOrderBy>;
  factsByUpdatedByAggregate?: InputMaybe<FactAggregateOrderBy>;
  filesAggregate?: InputMaybe<FileAggregateOrderBy>;
  filesByUpdatedByAggregate?: InputMaybe<FileAggregateOrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MobileNumber = 'mobileNumber',
  /** column name */
  ProfileImage = 'profileImage',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  MobileNumber = 'mobileNumber',
  /** column name */
  ProfileImage = 'profileImage',
  /** column name */
  Pronouns = 'pronouns',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  /** filter the rows which have to be updated */
  where: UserBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "virality" */
export type Virality = {
  __typename?: 'Virality';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  facebookLikes?: Maybe<Scalars['Int']['output']>;
  facebookShares?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  instagramLikes?: Maybe<Scalars['Int']['output']>;
  instagramShares?: Maybe<Scalars['Int']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  youtubeDislikes?: Maybe<Scalars['Int']['output']>;
  youtubeLikes?: Maybe<Scalars['Int']['output']>;
  youtubeViews?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "virality" */
export type ViralityAggregate = {
  __typename?: 'ViralityAggregate';
  aggregate?: Maybe<ViralityAggregateFields>;
  nodes: Array<Virality>;
};

export type ViralityAggregateBoolExp = {
  count?: InputMaybe<ViralityAggregateBoolExpCount>;
};

/** aggregate fields of "virality" */
export type ViralityAggregateFields = {
  __typename?: 'ViralityAggregateFields';
  avg?: Maybe<ViralityAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ViralityMaxFields>;
  min?: Maybe<ViralityMinFields>;
  stddev?: Maybe<ViralityStddevFields>;
  stddevPop?: Maybe<ViralityStddevPopFields>;
  stddevSamp?: Maybe<ViralityStddevSampFields>;
  sum?: Maybe<ViralitySumFields>;
  varPop?: Maybe<ViralityVarPopFields>;
  varSamp?: Maybe<ViralityVarSampFields>;
  variance?: Maybe<ViralityVarianceFields>;
};


/** aggregate fields of "virality" */
export type ViralityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ViralitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "virality" */
export type ViralityAggregateOrderBy = {
  avg?: InputMaybe<ViralityAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ViralityMaxOrderBy>;
  min?: InputMaybe<ViralityMinOrderBy>;
  stddev?: InputMaybe<ViralityStddevOrderBy>;
  stddevPop?: InputMaybe<ViralityStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ViralityStddevSampOrderBy>;
  sum?: InputMaybe<ViralitySumOrderBy>;
  varPop?: InputMaybe<ViralityVarPopOrderBy>;
  varSamp?: InputMaybe<ViralityVarSampOrderBy>;
  variance?: InputMaybe<ViralityVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "virality" */
export type ViralityArrRelInsertInput = {
  data: Array<ViralityInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ViralityOnConflict>;
};

/** aggregate avg on columns */
export type ViralityAvgFields = {
  __typename?: 'ViralityAvgFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "virality" */
export type ViralityAvgOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "virality". All fields are combined with a logical 'AND'. */
export type ViralityBoolExp = {
  _and?: InputMaybe<Array<ViralityBoolExp>>;
  _not?: InputMaybe<ViralityBoolExp>;
  _or?: InputMaybe<Array<ViralityBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  facebookLikes?: InputMaybe<IntComparisonExp>;
  facebookShares?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  instagramLikes?: InputMaybe<IntComparisonExp>;
  instagramShares?: InputMaybe<IntComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  youtubeDislikes?: InputMaybe<IntComparisonExp>;
  youtubeLikes?: InputMaybe<IntComparisonExp>;
  youtubeViews?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "virality" */
export enum ViralityConstraint {
  /** unique or primary key constraint on columns "id" */
  ViralityPkey = 'virality_pkey'
}

/** input type for incrementing numeric columns in table "virality" */
export type ViralityIncInput = {
  facebookLikes?: InputMaybe<Scalars['Int']['input']>;
  facebookShares?: InputMaybe<Scalars['Int']['input']>;
  instagramLikes?: InputMaybe<Scalars['Int']['input']>;
  instagramShares?: InputMaybe<Scalars['Int']['input']>;
  youtubeDislikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeLikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeViews?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "virality" */
export type ViralityInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  facebookLikes?: InputMaybe<Scalars['Int']['input']>;
  facebookShares?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagramLikes?: InputMaybe<Scalars['Int']['input']>;
  instagramShares?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  youtubeDislikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeLikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeViews?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type ViralityMaxFields = {
  __typename?: 'ViralityMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  facebookLikes?: Maybe<Scalars['Int']['output']>;
  facebookShares?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instagramLikes?: Maybe<Scalars['Int']['output']>;
  instagramShares?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  youtubeDislikes?: Maybe<Scalars['Int']['output']>;
  youtubeLikes?: Maybe<Scalars['Int']['output']>;
  youtubeViews?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "virality" */
export type ViralityMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ViralityMinFields = {
  __typename?: 'ViralityMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  facebookLikes?: Maybe<Scalars['Int']['output']>;
  facebookShares?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instagramLikes?: Maybe<Scalars['Int']['output']>;
  instagramShares?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  youtubeDislikes?: Maybe<Scalars['Int']['output']>;
  youtubeLikes?: Maybe<Scalars['Int']['output']>;
  youtubeViews?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "virality" */
export type ViralityMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "virality" */
export type ViralityMutationResponse = {
  __typename?: 'ViralityMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Virality>;
};

/** on_conflict condition type for table "virality" */
export type ViralityOnConflict = {
  constraint: ViralityConstraint;
  updateColumns?: Array<ViralityUpdateColumn>;
  where?: InputMaybe<ViralityBoolExp>;
};

/** Ordering options when selecting data from "virality". */
export type ViralityOrderBy = {
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: virality */
export type ViralityPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "virality" */
export enum ViralitySelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FacebookLikes = 'facebookLikes',
  /** column name */
  FacebookShares = 'facebookShares',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramLikes = 'instagramLikes',
  /** column name */
  InstagramShares = 'instagramShares',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YoutubeDislikes = 'youtubeDislikes',
  /** column name */
  YoutubeLikes = 'youtubeLikes',
  /** column name */
  YoutubeViews = 'youtubeViews'
}

/** input type for updating data in table "virality" */
export type ViralitySetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  facebookLikes?: InputMaybe<Scalars['Int']['input']>;
  facebookShares?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagramLikes?: InputMaybe<Scalars['Int']['input']>;
  instagramShares?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  youtubeDislikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeLikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeViews?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ViralityStddevFields = {
  __typename?: 'ViralityStddevFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "virality" */
export type ViralityStddevOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ViralityStddevPopFields = {
  __typename?: 'ViralityStddevPopFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "virality" */
export type ViralityStddevPopOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ViralityStddevSampFields = {
  __typename?: 'ViralityStddevSampFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "virality" */
export type ViralityStddevSampOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "virality" */
export type ViralityStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ViralityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ViralityStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  facebookLikes?: InputMaybe<Scalars['Int']['input']>;
  facebookShares?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagramLikes?: InputMaybe<Scalars['Int']['input']>;
  instagramShares?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  youtubeDislikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeLikes?: InputMaybe<Scalars['Int']['input']>;
  youtubeViews?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ViralitySumFields = {
  __typename?: 'ViralitySumFields';
  facebookLikes?: Maybe<Scalars['Int']['output']>;
  facebookShares?: Maybe<Scalars['Int']['output']>;
  instagramLikes?: Maybe<Scalars['Int']['output']>;
  instagramShares?: Maybe<Scalars['Int']['output']>;
  youtubeDislikes?: Maybe<Scalars['Int']['output']>;
  youtubeLikes?: Maybe<Scalars['Int']['output']>;
  youtubeViews?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "virality" */
export type ViralitySumOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** update columns of table "virality" */
export enum ViralityUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FacebookLikes = 'facebookLikes',
  /** column name */
  FacebookShares = 'facebookShares',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramLikes = 'instagramLikes',
  /** column name */
  InstagramShares = 'instagramShares',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YoutubeDislikes = 'youtubeDislikes',
  /** column name */
  YoutubeLikes = 'youtubeLikes',
  /** column name */
  YoutubeViews = 'youtubeViews'
}

export type ViralityUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ViralityIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ViralitySetInput>;
  /** filter the rows which have to be updated */
  where: ViralityBoolExp;
};

/** aggregate varPop on columns */
export type ViralityVarPopFields = {
  __typename?: 'ViralityVarPopFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "virality" */
export type ViralityVarPopOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ViralityVarSampFields = {
  __typename?: 'ViralityVarSampFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "virality" */
export type ViralityVarSampOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ViralityVarianceFields = {
  __typename?: 'ViralityVarianceFields';
  facebookLikes?: Maybe<Scalars['Float']['output']>;
  facebookShares?: Maybe<Scalars['Float']['output']>;
  instagramLikes?: Maybe<Scalars['Float']['output']>;
  instagramShares?: Maybe<Scalars['Float']['output']>;
  youtubeDislikes?: Maybe<Scalars['Float']['output']>;
  youtubeLikes?: Maybe<Scalars['Float']['output']>;
  youtubeViews?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "virality" */
export type ViralityVarianceOrderBy = {
  facebookLikes?: InputMaybe<OrderBy>;
  facebookShares?: InputMaybe<OrderBy>;
  instagramLikes?: InputMaybe<OrderBy>;
  instagramShares?: InputMaybe<OrderBy>;
  youtubeDislikes?: InputMaybe<OrderBy>;
  youtubeLikes?: InputMaybe<OrderBy>;
  youtubeViews?: InputMaybe<OrderBy>;
};

export type ClaimAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimFactAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimFactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimFactBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimResourceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimResourceBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimSubmissionTokenAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimSubmissionTokenBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentBoolExp>;
  predicate: IntComparisonExp;
};

export type FactAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FactBoolExp>;
  predicate: IntComparisonExp;
};

export type FactResourceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FactResourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FactResourceBoolExp>;
  predicate: IntComparisonExp;
};

export type FileAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "claim" */
  deleteClaim?: Maybe<ClaimMutationResponse>;
  /** delete single row from the table: "claim" */
  deleteClaimByPk?: Maybe<Claim>;
  /** delete data from the table: "claim_fact" */
  deleteClaimFact?: Maybe<ClaimFactMutationResponse>;
  /** delete single row from the table: "claim_fact" */
  deleteClaimFactByPk?: Maybe<ClaimFact>;
  /** delete data from the table: "claim_fact_history" */
  deleteClaimFactHistory?: Maybe<ClaimFactHistoryMutationResponse>;
  /** delete single row from the table: "claim_fact_history" */
  deleteClaimFactHistoryByPk?: Maybe<ClaimFactHistory>;
  /** delete data from the table: "claim_history" */
  deleteClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** delete single row from the table: "claim_history" */
  deleteClaimHistoryByPk?: Maybe<ClaimHistory>;
  /** delete data from the table: "claim_resource" */
  deleteClaimResource?: Maybe<ClaimResourceMutationResponse>;
  /** delete single row from the table: "claim_resource" */
  deleteClaimResourceByPk?: Maybe<ClaimResource>;
  /** delete data from the table: "claim_resource_history" */
  deleteClaimResourceHistory?: Maybe<ClaimResourceHistoryMutationResponse>;
  /** delete single row from the table: "claim_resource_history" */
  deleteClaimResourceHistoryByPk?: Maybe<ClaimResourceHistory>;
  /** delete data from the table: "claim_submission_token" */
  deleteClaimSubmissionToken?: Maybe<ClaimSubmissionTokenMutationResponse>;
  /** delete single row from the table: "claim_submission_token" */
  deleteClaimSubmissionTokenByPk?: Maybe<ClaimSubmissionToken>;
  /** delete data from the table: "comment" */
  deleteComment?: Maybe<CommentMutationResponse>;
  /** delete single row from the table: "comment" */
  deleteCommentByPk?: Maybe<Comment>;
  /** delete data from the table: "comment_history" */
  deleteCommentHistory?: Maybe<CommentHistoryMutationResponse>;
  /** delete single row from the table: "comment_history" */
  deleteCommentHistoryByPk?: Maybe<CommentHistory>;
  /** delete data from the table: "fact" */
  deleteFact?: Maybe<FactMutationResponse>;
  /** delete single row from the table: "fact" */
  deleteFactByPk?: Maybe<Fact>;
  /** delete data from the table: "fact_history" */
  deleteFactHistory?: Maybe<FactHistoryMutationResponse>;
  /** delete single row from the table: "fact_history" */
  deleteFactHistoryByPk?: Maybe<FactHistory>;
  /** delete data from the table: "fact_resource" */
  deleteFactResource?: Maybe<FactResourceMutationResponse>;
  /** delete single row from the table: "fact_resource" */
  deleteFactResourceByPk?: Maybe<FactResource>;
  /** delete data from the table: "fact_resource_history" */
  deleteFactResourceHistory?: Maybe<FactResourceHistoryMutationResponse>;
  /** delete single row from the table: "fact_resource_history" */
  deleteFactResourceHistoryByPk?: Maybe<FactResourceHistory>;
  /** delete data from the table: "file" */
  deleteFile?: Maybe<FileMutationResponse>;
  /** delete single row from the table: "file" */
  deleteFileByPk?: Maybe<File>;
  /** delete data from the table: "file_history" */
  deleteFileHistory?: Maybe<FileHistoryMutationResponse>;
  /** delete single row from the table: "file_history" */
  deleteFileHistoryByPk?: Maybe<FileHistory>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "user_history" */
  deleteUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** delete single row from the table: "user_history" */
  deleteUserHistoryByPk?: Maybe<UserHistory>;
  /** delete data from the table: "virality" */
  deleteVirality?: Maybe<ViralityMutationResponse>;
  /** delete single row from the table: "virality" */
  deleteViralityByPk?: Maybe<Virality>;
  /** insert data into the table: "claim" */
  insertClaim?: Maybe<ClaimMutationResponse>;
  /** insert data into the table: "claim_fact" */
  insertClaimFact?: Maybe<ClaimFactMutationResponse>;
  /** insert data into the table: "claim_fact_history" */
  insertClaimFactHistory?: Maybe<ClaimFactHistoryMutationResponse>;
  /** insert a single row into the table: "claim_fact_history" */
  insertClaimFactHistoryOne?: Maybe<ClaimFactHistory>;
  /** insert a single row into the table: "claim_fact" */
  insertClaimFactOne?: Maybe<ClaimFact>;
  /** insert data into the table: "claim_history" */
  insertClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** insert a single row into the table: "claim_history" */
  insertClaimHistoryOne?: Maybe<ClaimHistory>;
  /** insert a single row into the table: "claim" */
  insertClaimOne?: Maybe<Claim>;
  /** insert data into the table: "claim_resource" */
  insertClaimResource?: Maybe<ClaimResourceMutationResponse>;
  /** insert data into the table: "claim_resource_history" */
  insertClaimResourceHistory?: Maybe<ClaimResourceHistoryMutationResponse>;
  /** insert a single row into the table: "claim_resource_history" */
  insertClaimResourceHistoryOne?: Maybe<ClaimResourceHistory>;
  /** insert a single row into the table: "claim_resource" */
  insertClaimResourceOne?: Maybe<ClaimResource>;
  /** insert data into the table: "claim_submission_token" */
  insertClaimSubmissionToken?: Maybe<ClaimSubmissionTokenMutationResponse>;
  /** insert a single row into the table: "claim_submission_token" */
  insertClaimSubmissionTokenOne?: Maybe<ClaimSubmissionToken>;
  /** insert data into the table: "comment" */
  insertComment?: Maybe<CommentMutationResponse>;
  /** insert data into the table: "comment_history" */
  insertCommentHistory?: Maybe<CommentHistoryMutationResponse>;
  /** insert a single row into the table: "comment_history" */
  insertCommentHistoryOne?: Maybe<CommentHistory>;
  /** insert a single row into the table: "comment" */
  insertCommentOne?: Maybe<Comment>;
  /** insert data into the table: "fact" */
  insertFact?: Maybe<FactMutationResponse>;
  /** insert data into the table: "fact_history" */
  insertFactHistory?: Maybe<FactHistoryMutationResponse>;
  /** insert a single row into the table: "fact_history" */
  insertFactHistoryOne?: Maybe<FactHistory>;
  /** insert a single row into the table: "fact" */
  insertFactOne?: Maybe<Fact>;
  /** insert data into the table: "fact_resource" */
  insertFactResource?: Maybe<FactResourceMutationResponse>;
  /** insert data into the table: "fact_resource_history" */
  insertFactResourceHistory?: Maybe<FactResourceHistoryMutationResponse>;
  /** insert a single row into the table: "fact_resource_history" */
  insertFactResourceHistoryOne?: Maybe<FactResourceHistory>;
  /** insert a single row into the table: "fact_resource" */
  insertFactResourceOne?: Maybe<FactResource>;
  /** insert data into the table: "file" */
  insertFile?: Maybe<FileMutationResponse>;
  /** insert data into the table: "file_history" */
  insertFileHistory?: Maybe<FileHistoryMutationResponse>;
  /** insert a single row into the table: "file_history" */
  insertFileHistoryOne?: Maybe<FileHistory>;
  /** insert a single row into the table: "file" */
  insertFileOne?: Maybe<File>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert data into the table: "user_history" */
  insertUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** insert a single row into the table: "user_history" */
  insertUserHistoryOne?: Maybe<UserHistory>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "virality" */
  insertVirality?: Maybe<ViralityMutationResponse>;
  /** insert a single row into the table: "virality" */
  insertViralityOne?: Maybe<Virality>;
  /** update data of the table: "claim" */
  updateClaim?: Maybe<ClaimMutationResponse>;
  /** update single row of the table: "claim" */
  updateClaimByPk?: Maybe<Claim>;
  /** update data of the table: "claim_fact" */
  updateClaimFact?: Maybe<ClaimFactMutationResponse>;
  /** update single row of the table: "claim_fact" */
  updateClaimFactByPk?: Maybe<ClaimFact>;
  /** update data of the table: "claim_fact_history" */
  updateClaimFactHistory?: Maybe<ClaimFactHistoryMutationResponse>;
  /** update single row of the table: "claim_fact_history" */
  updateClaimFactHistoryByPk?: Maybe<ClaimFactHistory>;
  /** update multiples rows of table: "claim_fact_history" */
  updateClaimFactHistoryMany?: Maybe<Array<Maybe<ClaimFactHistoryMutationResponse>>>;
  /** update multiples rows of table: "claim_fact" */
  updateClaimFactMany?: Maybe<Array<Maybe<ClaimFactMutationResponse>>>;
  /** update data of the table: "claim_history" */
  updateClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** update single row of the table: "claim_history" */
  updateClaimHistoryByPk?: Maybe<ClaimHistory>;
  /** update multiples rows of table: "claim_history" */
  updateClaimHistoryMany?: Maybe<Array<Maybe<ClaimHistoryMutationResponse>>>;
  /** update multiples rows of table: "claim" */
  updateClaimMany?: Maybe<Array<Maybe<ClaimMutationResponse>>>;
  /** update data of the table: "claim_resource" */
  updateClaimResource?: Maybe<ClaimResourceMutationResponse>;
  /** update single row of the table: "claim_resource" */
  updateClaimResourceByPk?: Maybe<ClaimResource>;
  /** update data of the table: "claim_resource_history" */
  updateClaimResourceHistory?: Maybe<ClaimResourceHistoryMutationResponse>;
  /** update single row of the table: "claim_resource_history" */
  updateClaimResourceHistoryByPk?: Maybe<ClaimResourceHistory>;
  /** update multiples rows of table: "claim_resource_history" */
  updateClaimResourceHistoryMany?: Maybe<Array<Maybe<ClaimResourceHistoryMutationResponse>>>;
  /** update multiples rows of table: "claim_resource" */
  updateClaimResourceMany?: Maybe<Array<Maybe<ClaimResourceMutationResponse>>>;
  /** update data of the table: "claim_submission_token" */
  updateClaimSubmissionToken?: Maybe<ClaimSubmissionTokenMutationResponse>;
  /** update single row of the table: "claim_submission_token" */
  updateClaimSubmissionTokenByPk?: Maybe<ClaimSubmissionToken>;
  /** update multiples rows of table: "claim_submission_token" */
  updateClaimSubmissionTokenMany?: Maybe<Array<Maybe<ClaimSubmissionTokenMutationResponse>>>;
  /** update data of the table: "comment" */
  updateComment?: Maybe<CommentMutationResponse>;
  /** update single row of the table: "comment" */
  updateCommentByPk?: Maybe<Comment>;
  /** update data of the table: "comment_history" */
  updateCommentHistory?: Maybe<CommentHistoryMutationResponse>;
  /** update single row of the table: "comment_history" */
  updateCommentHistoryByPk?: Maybe<CommentHistory>;
  /** update multiples rows of table: "comment_history" */
  updateCommentHistoryMany?: Maybe<Array<Maybe<CommentHistoryMutationResponse>>>;
  /** update multiples rows of table: "comment" */
  updateCommentMany?: Maybe<Array<Maybe<CommentMutationResponse>>>;
  /** update data of the table: "fact" */
  updateFact?: Maybe<FactMutationResponse>;
  /** update single row of the table: "fact" */
  updateFactByPk?: Maybe<Fact>;
  /** update data of the table: "fact_history" */
  updateFactHistory?: Maybe<FactHistoryMutationResponse>;
  /** update single row of the table: "fact_history" */
  updateFactHistoryByPk?: Maybe<FactHistory>;
  /** update multiples rows of table: "fact_history" */
  updateFactHistoryMany?: Maybe<Array<Maybe<FactHistoryMutationResponse>>>;
  /** update multiples rows of table: "fact" */
  updateFactMany?: Maybe<Array<Maybe<FactMutationResponse>>>;
  /** update data of the table: "fact_resource" */
  updateFactResource?: Maybe<FactResourceMutationResponse>;
  /** update single row of the table: "fact_resource" */
  updateFactResourceByPk?: Maybe<FactResource>;
  /** update data of the table: "fact_resource_history" */
  updateFactResourceHistory?: Maybe<FactResourceHistoryMutationResponse>;
  /** update single row of the table: "fact_resource_history" */
  updateFactResourceHistoryByPk?: Maybe<FactResourceHistory>;
  /** update multiples rows of table: "fact_resource_history" */
  updateFactResourceHistoryMany?: Maybe<Array<Maybe<FactResourceHistoryMutationResponse>>>;
  /** update multiples rows of table: "fact_resource" */
  updateFactResourceMany?: Maybe<Array<Maybe<FactResourceMutationResponse>>>;
  /** update data of the table: "file" */
  updateFile?: Maybe<FileMutationResponse>;
  /** update single row of the table: "file" */
  updateFileByPk?: Maybe<File>;
  /** update data of the table: "file_history" */
  updateFileHistory?: Maybe<FileHistoryMutationResponse>;
  /** update single row of the table: "file_history" */
  updateFileHistoryByPk?: Maybe<FileHistory>;
  /** update multiples rows of table: "file_history" */
  updateFileHistoryMany?: Maybe<Array<Maybe<FileHistoryMutationResponse>>>;
  /** update multiples rows of table: "file" */
  updateFileMany?: Maybe<Array<Maybe<FileMutationResponse>>>;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "user_history" */
  updateUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** update single row of the table: "user_history" */
  updateUserHistoryByPk?: Maybe<UserHistory>;
  /** update multiples rows of table: "user_history" */
  updateUserHistoryMany?: Maybe<Array<Maybe<UserHistoryMutationResponse>>>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** update data of the table: "virality" */
  updateVirality?: Maybe<ViralityMutationResponse>;
  /** update single row of the table: "virality" */
  updateViralityByPk?: Maybe<Virality>;
  /** update multiples rows of table: "virality" */
  updateViralityMany?: Maybe<Array<Maybe<ViralityMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteClaimArgs = {
  where: ClaimBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimFactArgs = {
  where: ClaimFactBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimFactHistoryArgs = {
  where: ClaimFactHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimHistoryArgs = {
  where: ClaimHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimResourceArgs = {
  where: ClaimResourceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimResourceHistoryArgs = {
  where: ClaimResourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteClaimSubmissionTokenArgs = {
  where: ClaimSubmissionTokenBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimSubmissionTokenByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCommentArgs = {
  where: CommentBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCommentHistoryArgs = {
  where: CommentHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCommentHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFactArgs = {
  where: FactBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFactHistoryArgs = {
  where: FactHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFactResourceArgs = {
  where: FactResourceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFactResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFactResourceHistoryArgs = {
  where: FactResourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFactResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  where: FileBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFileByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteFileHistoryArgs = {
  where: FileHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteFileHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserHistoryArgs = {
  where: UserHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteViralityArgs = {
  where: ViralityBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteViralityByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsertClaimArgs = {
  objects: Array<ClaimInsertInput>;
  onConflict?: InputMaybe<ClaimOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimFactArgs = {
  objects: Array<ClaimFactInsertInput>;
  onConflict?: InputMaybe<ClaimFactOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimFactHistoryArgs = {
  objects: Array<ClaimFactHistoryInsertInput>;
  onConflict?: InputMaybe<ClaimFactHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimFactHistoryOneArgs = {
  object: ClaimFactHistoryInsertInput;
  onConflict?: InputMaybe<ClaimFactHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimFactOneArgs = {
  object: ClaimFactInsertInput;
  onConflict?: InputMaybe<ClaimFactOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimHistoryArgs = {
  objects: Array<ClaimHistoryInsertInput>;
  onConflict?: InputMaybe<ClaimHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimHistoryOneArgs = {
  object: ClaimHistoryInsertInput;
  onConflict?: InputMaybe<ClaimHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimOneArgs = {
  object: ClaimInsertInput;
  onConflict?: InputMaybe<ClaimOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimResourceArgs = {
  objects: Array<ClaimResourceInsertInput>;
  onConflict?: InputMaybe<ClaimResourceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimResourceHistoryArgs = {
  objects: Array<ClaimResourceHistoryInsertInput>;
  onConflict?: InputMaybe<ClaimResourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimResourceHistoryOneArgs = {
  object: ClaimResourceHistoryInsertInput;
  onConflict?: InputMaybe<ClaimResourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimResourceOneArgs = {
  object: ClaimResourceInsertInput;
  onConflict?: InputMaybe<ClaimResourceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimSubmissionTokenArgs = {
  objects: Array<ClaimSubmissionTokenInsertInput>;
  onConflict?: InputMaybe<ClaimSubmissionTokenOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimSubmissionTokenOneArgs = {
  object: ClaimSubmissionTokenInsertInput;
  onConflict?: InputMaybe<ClaimSubmissionTokenOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentArgs = {
  objects: Array<CommentInsertInput>;
  onConflict?: InputMaybe<CommentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentHistoryArgs = {
  objects: Array<CommentHistoryInsertInput>;
  onConflict?: InputMaybe<CommentHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentHistoryOneArgs = {
  object: CommentHistoryInsertInput;
  onConflict?: InputMaybe<CommentHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentOneArgs = {
  object: CommentInsertInput;
  onConflict?: InputMaybe<CommentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactArgs = {
  objects: Array<FactInsertInput>;
  onConflict?: InputMaybe<FactOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactHistoryArgs = {
  objects: Array<FactHistoryInsertInput>;
  onConflict?: InputMaybe<FactHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactHistoryOneArgs = {
  object: FactHistoryInsertInput;
  onConflict?: InputMaybe<FactHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactOneArgs = {
  object: FactInsertInput;
  onConflict?: InputMaybe<FactOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactResourceArgs = {
  objects: Array<FactResourceInsertInput>;
  onConflict?: InputMaybe<FactResourceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactResourceHistoryArgs = {
  objects: Array<FactResourceHistoryInsertInput>;
  onConflict?: InputMaybe<FactResourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactResourceHistoryOneArgs = {
  object: FactResourceHistoryInsertInput;
  onConflict?: InputMaybe<FactResourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFactResourceOneArgs = {
  object: FactResourceInsertInput;
  onConflict?: InputMaybe<FactResourceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  objects: Array<FileInsertInput>;
  onConflict?: InputMaybe<FileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileHistoryArgs = {
  objects: Array<FileHistoryInsertInput>;
  onConflict?: InputMaybe<FileHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileHistoryOneArgs = {
  object: FileHistoryInsertInput;
  onConflict?: InputMaybe<FileHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileOneArgs = {
  object: FileInsertInput;
  onConflict?: InputMaybe<FileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserHistoryArgs = {
  objects: Array<UserHistoryInsertInput>;
  onConflict?: InputMaybe<UserHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserHistoryOneArgs = {
  object: UserHistoryInsertInput;
  onConflict?: InputMaybe<UserHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertViralityArgs = {
  objects: Array<ViralityInsertInput>;
  onConflict?: InputMaybe<ViralityOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertViralityOneArgs = {
  object: ViralityInsertInput;
  onConflict?: InputMaybe<ViralityOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateClaimArgs = {
  _set?: InputMaybe<ClaimSetInput>;
  where: ClaimBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimByPkArgs = {
  _set?: InputMaybe<ClaimSetInput>;
  pkColumns: ClaimPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactArgs = {
  _set?: InputMaybe<ClaimFactSetInput>;
  where: ClaimFactBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactByPkArgs = {
  _set?: InputMaybe<ClaimFactSetInput>;
  pkColumns: ClaimFactPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactHistoryArgs = {
  _set?: InputMaybe<ClaimFactHistorySetInput>;
  where: ClaimFactHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactHistoryByPkArgs = {
  _set?: InputMaybe<ClaimFactHistorySetInput>;
  pkColumns: ClaimFactHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactHistoryManyArgs = {
  updates: Array<ClaimFactHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimFactManyArgs = {
  updates: Array<ClaimFactUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimHistoryArgs = {
  _set?: InputMaybe<ClaimHistorySetInput>;
  where: ClaimHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimHistoryByPkArgs = {
  _set?: InputMaybe<ClaimHistorySetInput>;
  pkColumns: ClaimHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimHistoryManyArgs = {
  updates: Array<ClaimHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimManyArgs = {
  updates: Array<ClaimUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceArgs = {
  _set?: InputMaybe<ClaimResourceSetInput>;
  where: ClaimResourceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceByPkArgs = {
  _set?: InputMaybe<ClaimResourceSetInput>;
  pkColumns: ClaimResourcePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceHistoryArgs = {
  _set?: InputMaybe<ClaimResourceHistorySetInput>;
  where: ClaimResourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceHistoryByPkArgs = {
  _set?: InputMaybe<ClaimResourceHistorySetInput>;
  pkColumns: ClaimResourceHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceHistoryManyArgs = {
  updates: Array<ClaimResourceHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimResourceManyArgs = {
  updates: Array<ClaimResourceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimSubmissionTokenArgs = {
  _set?: InputMaybe<ClaimSubmissionTokenSetInput>;
  where: ClaimSubmissionTokenBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimSubmissionTokenByPkArgs = {
  _set?: InputMaybe<ClaimSubmissionTokenSetInput>;
  pkColumns: ClaimSubmissionTokenPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimSubmissionTokenManyArgs = {
  updates: Array<ClaimSubmissionTokenUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCommentArgs = {
  _set?: InputMaybe<CommentSetInput>;
  where: CommentBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCommentByPkArgs = {
  _set?: InputMaybe<CommentSetInput>;
  pkColumns: CommentPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCommentHistoryArgs = {
  _set?: InputMaybe<CommentHistorySetInput>;
  where: CommentHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCommentHistoryByPkArgs = {
  _set?: InputMaybe<CommentHistorySetInput>;
  pkColumns: CommentHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCommentHistoryManyArgs = {
  updates: Array<CommentHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCommentManyArgs = {
  updates: Array<CommentUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFactArgs = {
  _set?: InputMaybe<FactSetInput>;
  where: FactBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactByPkArgs = {
  _set?: InputMaybe<FactSetInput>;
  pkColumns: FactPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFactHistoryArgs = {
  _set?: InputMaybe<FactHistorySetInput>;
  where: FactHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactHistoryByPkArgs = {
  _set?: InputMaybe<FactHistorySetInput>;
  pkColumns: FactHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFactHistoryManyArgs = {
  updates: Array<FactHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFactManyArgs = {
  updates: Array<FactUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceArgs = {
  _set?: InputMaybe<FactResourceSetInput>;
  where: FactResourceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceByPkArgs = {
  _set?: InputMaybe<FactResourceSetInput>;
  pkColumns: FactResourcePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceHistoryArgs = {
  _set?: InputMaybe<FactResourceHistorySetInput>;
  where: FactResourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceHistoryByPkArgs = {
  _set?: InputMaybe<FactResourceHistorySetInput>;
  pkColumns: FactResourceHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceHistoryManyArgs = {
  updates: Array<FactResourceHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFactResourceManyArgs = {
  updates: Array<FactResourceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<FileIncInput>;
  _set?: InputMaybe<FileSetInput>;
  where: FileBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFileByPkArgs = {
  _inc?: InputMaybe<FileIncInput>;
  _set?: InputMaybe<FileSetInput>;
  pkColumns: FilePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFileHistoryArgs = {
  _inc?: InputMaybe<FileHistoryIncInput>;
  _set?: InputMaybe<FileHistorySetInput>;
  where: FileHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFileHistoryByPkArgs = {
  _inc?: InputMaybe<FileHistoryIncInput>;
  _set?: InputMaybe<FileHistorySetInput>;
  pkColumns: FileHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFileHistoryManyArgs = {
  updates: Array<FileHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFileManyArgs = {
  updates: Array<FileUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pkColumns: UserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserHistoryArgs = {
  _set?: InputMaybe<UserHistorySetInput>;
  where: UserHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserHistoryByPkArgs = {
  _set?: InputMaybe<UserHistorySetInput>;
  pkColumns: UserHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserHistoryManyArgs = {
  updates: Array<UserHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateViralityArgs = {
  _inc?: InputMaybe<ViralityIncInput>;
  _set?: InputMaybe<ViralitySetInput>;
  where: ViralityBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateViralityByPkArgs = {
  _inc?: InputMaybe<ViralityIncInput>;
  _set?: InputMaybe<ViralitySetInput>;
  pkColumns: ViralityPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateViralityManyArgs = {
  updates: Array<ViralityUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "claim" */
  claim: Array<Claim>;
  /** fetch aggregated fields from the table: "claim" */
  claimAggregate: ClaimAggregate;
  /** fetch data from the table: "claim" using primary key columns */
  claimByPk?: Maybe<Claim>;
  /** fetch data from the table: "claim_fact" */
  claimFact: Array<ClaimFact>;
  /** fetch aggregated fields from the table: "claim_fact" */
  claimFactAggregate: ClaimFactAggregate;
  /** fetch data from the table: "claim_fact" using primary key columns */
  claimFactByPk?: Maybe<ClaimFact>;
  /** fetch data from the table: "claim_fact_history" */
  claimFactHistory: Array<ClaimFactHistory>;
  /** fetch aggregated fields from the table: "claim_fact_history" */
  claimFactHistoryAggregate: ClaimFactHistoryAggregate;
  /** fetch data from the table: "claim_fact_history" using primary key columns */
  claimFactHistoryByPk?: Maybe<ClaimFactHistory>;
  /** fetch data from the table: "claim_history" */
  claimHistory: Array<ClaimHistory>;
  /** fetch aggregated fields from the table: "claim_history" */
  claimHistoryAggregate: ClaimHistoryAggregate;
  /** fetch data from the table: "claim_history" using primary key columns */
  claimHistoryByPk?: Maybe<ClaimHistory>;
  /** fetch data from the table: "claim_resource" */
  claimResource: Array<ClaimResource>;
  /** fetch aggregated fields from the table: "claim_resource" */
  claimResourceAggregate: ClaimResourceAggregate;
  /** fetch data from the table: "claim_resource" using primary key columns */
  claimResourceByPk?: Maybe<ClaimResource>;
  /** fetch data from the table: "claim_resource_history" */
  claimResourceHistory: Array<ClaimResourceHistory>;
  /** fetch aggregated fields from the table: "claim_resource_history" */
  claimResourceHistoryAggregate: ClaimResourceHistoryAggregate;
  /** fetch data from the table: "claim_resource_history" using primary key columns */
  claimResourceHistoryByPk?: Maybe<ClaimResourceHistory>;
  /** fetch data from the table: "claim_submission_token" */
  claimSubmissionToken: Array<ClaimSubmissionToken>;
  /** fetch aggregated fields from the table: "claim_submission_token" */
  claimSubmissionTokenAggregate: ClaimSubmissionTokenAggregate;
  /** fetch data from the table: "claim_submission_token" using primary key columns */
  claimSubmissionTokenByPk?: Maybe<ClaimSubmissionToken>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  commentAggregate: CommentAggregate;
  /** fetch data from the table: "comment" using primary key columns */
  commentByPk?: Maybe<Comment>;
  /** fetch data from the table: "comment_history" */
  commentHistory: Array<CommentHistory>;
  /** fetch aggregated fields from the table: "comment_history" */
  commentHistoryAggregate: CommentHistoryAggregate;
  /** fetch data from the table: "comment_history" using primary key columns */
  commentHistoryByPk?: Maybe<CommentHistory>;
  /** fetch data from the table: "fact" */
  fact: Array<Fact>;
  /** fetch aggregated fields from the table: "fact" */
  factAggregate: FactAggregate;
  /** fetch data from the table: "fact" using primary key columns */
  factByPk?: Maybe<Fact>;
  /** fetch data from the table: "fact_history" */
  factHistory: Array<FactHistory>;
  /** fetch aggregated fields from the table: "fact_history" */
  factHistoryAggregate: FactHistoryAggregate;
  /** fetch data from the table: "fact_history" using primary key columns */
  factHistoryByPk?: Maybe<FactHistory>;
  /** fetch data from the table: "fact_resource" */
  factResource: Array<FactResource>;
  /** fetch aggregated fields from the table: "fact_resource" */
  factResourceAggregate: FactResourceAggregate;
  /** fetch data from the table: "fact_resource" using primary key columns */
  factResourceByPk?: Maybe<FactResource>;
  /** fetch data from the table: "fact_resource_history" */
  factResourceHistory: Array<FactResourceHistory>;
  /** fetch aggregated fields from the table: "fact_resource_history" */
  factResourceHistoryAggregate: FactResourceHistoryAggregate;
  /** fetch data from the table: "fact_resource_history" using primary key columns */
  factResourceHistoryByPk?: Maybe<FactResourceHistory>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  fileAggregate: FileAggregate;
  /** fetch data from the table: "file" using primary key columns */
  fileByPk?: Maybe<File>;
  /** fetch data from the table: "file_history" */
  fileHistory: Array<FileHistory>;
  /** fetch aggregated fields from the table: "file_history" */
  fileHistoryAggregate: FileHistoryAggregate;
  /** fetch data from the table: "file_history" using primary key columns */
  fileHistoryByPk?: Maybe<FileHistory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_history" */
  userHistory: Array<UserHistory>;
  /** fetch aggregated fields from the table: "user_history" */
  userHistoryAggregate: UserHistoryAggregate;
  /** fetch data from the table: "user_history" using primary key columns */
  userHistoryByPk?: Maybe<UserHistory>;
  /** fetch data from the table: "virality" */
  virality: Array<Virality>;
  /** fetch aggregated fields from the table: "virality" */
  viralityAggregate: ViralityAggregate;
  /** fetch data from the table: "virality" using primary key columns */
  viralityByPk?: Maybe<Virality>;
};


export type Query_RootClaimArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


export type Query_RootClaimAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


export type Query_RootClaimByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClaimFactArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


export type Query_RootClaimFactAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


export type Query_RootClaimFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClaimFactHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactHistoryOrderBy>>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};


export type Query_RootClaimFactHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactHistoryOrderBy>>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};


export type Query_RootClaimFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootClaimHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


export type Query_RootClaimHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


export type Query_RootClaimHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootClaimResourceArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


export type Query_RootClaimResourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


export type Query_RootClaimResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootClaimResourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceHistoryOrderBy>>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};


export type Query_RootClaimResourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceHistoryOrderBy>>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};


export type Query_RootClaimResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootClaimSubmissionTokenArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


export type Query_RootClaimSubmissionTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


export type Query_RootClaimSubmissionTokenByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


export type Query_RootCommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


export type Query_RootCommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentHistoryArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


export type Query_RootCommentHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


export type Query_RootCommentHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootFactArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


export type Query_RootFactAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


export type Query_RootFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFactHistoryArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


export type Query_RootFactHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


export type Query_RootFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootFactResourceArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


export type Query_RootFactResourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


export type Query_RootFactResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFactResourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<FactResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceHistoryOrderBy>>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};


export type Query_RootFactResourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceHistoryOrderBy>>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};


export type Query_RootFactResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootFileArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Query_RootFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Query_RootFileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


export type Query_RootFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


export type Query_RootFileHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Query_RootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserHistoryArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


export type Query_RootUserHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


export type Query_RootUserHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootViralityArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};


export type Query_RootViralityAggregateArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};


export type Query_RootViralityByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "claim" */
  claim: Array<Claim>;
  /** fetch aggregated fields from the table: "claim" */
  claimAggregate: ClaimAggregate;
  /** fetch data from the table: "claim" using primary key columns */
  claimByPk?: Maybe<Claim>;
  /** fetch data from the table: "claim_fact" */
  claimFact: Array<ClaimFact>;
  /** fetch aggregated fields from the table: "claim_fact" */
  claimFactAggregate: ClaimFactAggregate;
  /** fetch data from the table: "claim_fact" using primary key columns */
  claimFactByPk?: Maybe<ClaimFact>;
  /** fetch data from the table: "claim_fact_history" */
  claimFactHistory: Array<ClaimFactHistory>;
  /** fetch aggregated fields from the table: "claim_fact_history" */
  claimFactHistoryAggregate: ClaimFactHistoryAggregate;
  /** fetch data from the table: "claim_fact_history" using primary key columns */
  claimFactHistoryByPk?: Maybe<ClaimFactHistory>;
  /** fetch data from the table in a streaming manner: "claim_fact_history" */
  claimFactHistoryStream: Array<ClaimFactHistory>;
  /** fetch data from the table in a streaming manner: "claim_fact" */
  claimFactStream: Array<ClaimFact>;
  /** fetch data from the table: "claim_history" */
  claimHistory: Array<ClaimHistory>;
  /** fetch aggregated fields from the table: "claim_history" */
  claimHistoryAggregate: ClaimHistoryAggregate;
  /** fetch data from the table: "claim_history" using primary key columns */
  claimHistoryByPk?: Maybe<ClaimHistory>;
  /** fetch data from the table in a streaming manner: "claim_history" */
  claimHistoryStream: Array<ClaimHistory>;
  /** fetch data from the table: "claim_resource" */
  claimResource: Array<ClaimResource>;
  /** fetch aggregated fields from the table: "claim_resource" */
  claimResourceAggregate: ClaimResourceAggregate;
  /** fetch data from the table: "claim_resource" using primary key columns */
  claimResourceByPk?: Maybe<ClaimResource>;
  /** fetch data from the table: "claim_resource_history" */
  claimResourceHistory: Array<ClaimResourceHistory>;
  /** fetch aggregated fields from the table: "claim_resource_history" */
  claimResourceHistoryAggregate: ClaimResourceHistoryAggregate;
  /** fetch data from the table: "claim_resource_history" using primary key columns */
  claimResourceHistoryByPk?: Maybe<ClaimResourceHistory>;
  /** fetch data from the table in a streaming manner: "claim_resource_history" */
  claimResourceHistoryStream: Array<ClaimResourceHistory>;
  /** fetch data from the table in a streaming manner: "claim_resource" */
  claimResourceStream: Array<ClaimResource>;
  /** fetch data from the table in a streaming manner: "claim" */
  claimStream: Array<Claim>;
  /** fetch data from the table: "claim_submission_token" */
  claimSubmissionToken: Array<ClaimSubmissionToken>;
  /** fetch aggregated fields from the table: "claim_submission_token" */
  claimSubmissionTokenAggregate: ClaimSubmissionTokenAggregate;
  /** fetch data from the table: "claim_submission_token" using primary key columns */
  claimSubmissionTokenByPk?: Maybe<ClaimSubmissionToken>;
  /** fetch data from the table in a streaming manner: "claim_submission_token" */
  claimSubmissionTokenStream: Array<ClaimSubmissionToken>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  commentAggregate: CommentAggregate;
  /** fetch data from the table: "comment" using primary key columns */
  commentByPk?: Maybe<Comment>;
  /** fetch data from the table: "comment_history" */
  commentHistory: Array<CommentHistory>;
  /** fetch aggregated fields from the table: "comment_history" */
  commentHistoryAggregate: CommentHistoryAggregate;
  /** fetch data from the table: "comment_history" using primary key columns */
  commentHistoryByPk?: Maybe<CommentHistory>;
  /** fetch data from the table in a streaming manner: "comment_history" */
  commentHistoryStream: Array<CommentHistory>;
  /** fetch data from the table in a streaming manner: "comment" */
  commentStream: Array<Comment>;
  /** fetch data from the table: "fact" */
  fact: Array<Fact>;
  /** fetch aggregated fields from the table: "fact" */
  factAggregate: FactAggregate;
  /** fetch data from the table: "fact" using primary key columns */
  factByPk?: Maybe<Fact>;
  /** fetch data from the table: "fact_history" */
  factHistory: Array<FactHistory>;
  /** fetch aggregated fields from the table: "fact_history" */
  factHistoryAggregate: FactHistoryAggregate;
  /** fetch data from the table: "fact_history" using primary key columns */
  factHistoryByPk?: Maybe<FactHistory>;
  /** fetch data from the table in a streaming manner: "fact_history" */
  factHistoryStream: Array<FactHistory>;
  /** fetch data from the table: "fact_resource" */
  factResource: Array<FactResource>;
  /** fetch aggregated fields from the table: "fact_resource" */
  factResourceAggregate: FactResourceAggregate;
  /** fetch data from the table: "fact_resource" using primary key columns */
  factResourceByPk?: Maybe<FactResource>;
  /** fetch data from the table: "fact_resource_history" */
  factResourceHistory: Array<FactResourceHistory>;
  /** fetch aggregated fields from the table: "fact_resource_history" */
  factResourceHistoryAggregate: FactResourceHistoryAggregate;
  /** fetch data from the table: "fact_resource_history" using primary key columns */
  factResourceHistoryByPk?: Maybe<FactResourceHistory>;
  /** fetch data from the table in a streaming manner: "fact_resource_history" */
  factResourceHistoryStream: Array<FactResourceHistory>;
  /** fetch data from the table in a streaming manner: "fact_resource" */
  factResourceStream: Array<FactResource>;
  /** fetch data from the table in a streaming manner: "fact" */
  factStream: Array<Fact>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  fileAggregate: FileAggregate;
  /** fetch data from the table: "file" using primary key columns */
  fileByPk?: Maybe<File>;
  /** fetch data from the table: "file_history" */
  fileHistory: Array<FileHistory>;
  /** fetch aggregated fields from the table: "file_history" */
  fileHistoryAggregate: FileHistoryAggregate;
  /** fetch data from the table: "file_history" using primary key columns */
  fileHistoryByPk?: Maybe<FileHistory>;
  /** fetch data from the table in a streaming manner: "file_history" */
  fileHistoryStream: Array<FileHistory>;
  /** fetch data from the table in a streaming manner: "file" */
  fileStream: Array<File>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_history" */
  userHistory: Array<UserHistory>;
  /** fetch aggregated fields from the table: "user_history" */
  userHistoryAggregate: UserHistoryAggregate;
  /** fetch data from the table: "user_history" using primary key columns */
  userHistoryByPk?: Maybe<UserHistory>;
  /** fetch data from the table in a streaming manner: "user_history" */
  userHistoryStream: Array<UserHistory>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
  /** fetch data from the table: "virality" */
  virality: Array<Virality>;
  /** fetch aggregated fields from the table: "virality" */
  viralityAggregate: ViralityAggregate;
  /** fetch data from the table: "virality" using primary key columns */
  viralityByPk?: Maybe<Virality>;
  /** fetch data from the table in a streaming manner: "virality" */
  viralityStream: Array<Virality>;
};


export type Subscription_RootClaimArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


export type Subscription_RootClaimAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


export type Subscription_RootClaimByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClaimFactArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


export type Subscription_RootClaimFactAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactOrderBy>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


export type Subscription_RootClaimFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClaimFactHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactHistoryOrderBy>>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};


export type Subscription_RootClaimFactHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimFactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimFactHistoryOrderBy>>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};


export type Subscription_RootClaimFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootClaimFactHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimFactHistoryStreamCursorInput>>;
  where?: InputMaybe<ClaimFactHistoryBoolExp>;
};


export type Subscription_RootClaimFactStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimFactStreamCursorInput>>;
  where?: InputMaybe<ClaimFactBoolExp>;
};


export type Subscription_RootClaimHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


export type Subscription_RootClaimHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


export type Subscription_RootClaimHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootClaimHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimHistoryStreamCursorInput>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


export type Subscription_RootClaimResourceArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


export type Subscription_RootClaimResourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceOrderBy>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


export type Subscription_RootClaimResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClaimResourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceHistoryOrderBy>>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};


export type Subscription_RootClaimResourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimResourceHistoryOrderBy>>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};


export type Subscription_RootClaimResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootClaimResourceHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimResourceHistoryStreamCursorInput>>;
  where?: InputMaybe<ClaimResourceHistoryBoolExp>;
};


export type Subscription_RootClaimResourceStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimResourceStreamCursorInput>>;
  where?: InputMaybe<ClaimResourceBoolExp>;
};


export type Subscription_RootClaimStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimStreamCursorInput>>;
  where?: InputMaybe<ClaimBoolExp>;
};


export type Subscription_RootClaimSubmissionTokenArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


export type Subscription_RootClaimSubmissionTokenAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSubmissionTokenSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimSubmissionTokenOrderBy>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


export type Subscription_RootClaimSubmissionTokenByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClaimSubmissionTokenStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimSubmissionTokenStreamCursorInput>>;
  where?: InputMaybe<ClaimSubmissionTokenBoolExp>;
};


export type Subscription_RootCommentArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


export type Subscription_RootCommentAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


export type Subscription_RootCommentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCommentHistoryArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


export type Subscription_RootCommentHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


export type Subscription_RootCommentHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootCommentHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CommentHistoryStreamCursorInput>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


export type Subscription_RootCommentStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CommentStreamCursorInput>>;
  where?: InputMaybe<CommentBoolExp>;
};


export type Subscription_RootFactArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


export type Subscription_RootFactAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


export type Subscription_RootFactByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFactHistoryArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


export type Subscription_RootFactHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


export type Subscription_RootFactHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootFactHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FactHistoryStreamCursorInput>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


export type Subscription_RootFactResourceArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


export type Subscription_RootFactResourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceOrderBy>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


export type Subscription_RootFactResourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFactResourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<FactResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceHistoryOrderBy>>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};


export type Subscription_RootFactResourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactResourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactResourceHistoryOrderBy>>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};


export type Subscription_RootFactResourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootFactResourceHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FactResourceHistoryStreamCursorInput>>;
  where?: InputMaybe<FactResourceHistoryBoolExp>;
};


export type Subscription_RootFactResourceStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FactResourceStreamCursorInput>>;
  where?: InputMaybe<FactResourceBoolExp>;
};


export type Subscription_RootFactStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FactStreamCursorInput>>;
  where?: InputMaybe<FactBoolExp>;
};


export type Subscription_RootFileArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileOrderBy>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootFileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


export type Subscription_RootFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


export type Subscription_RootFileHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootFileHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FileHistoryStreamCursorInput>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


export type Subscription_RootFileStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<FileStreamCursorInput>>;
  where?: InputMaybe<FileBoolExp>;
};


export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserHistoryArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


export type Subscription_RootUserHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


export type Subscription_RootUserHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootUserHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserHistoryStreamCursorInput>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};


export type Subscription_RootViralityArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};


export type Subscription_RootViralityAggregateArgs = {
  distinctOn?: InputMaybe<Array<ViralitySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ViralityOrderBy>>;
  where?: InputMaybe<ViralityBoolExp>;
};


export type Subscription_RootViralityByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootViralityStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ViralityStreamCursorInput>>;
  where?: InputMaybe<ViralityBoolExp>;
};

export type ViralityAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ViralitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ViralityBoolExp>;
  predicate: IntComparisonExp;
};

export type GetFileByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetFileByIdQuery = { __typename?: 'query_root', file?: { __typename?: 'File', id: any, key: string, mimeType: string, name: string, size: number, updatedAt?: any | null } | null };


export const GetFileByIdDocument = gql`
    query getFileById($id: uuid!) {
  file: fileByPk(id: $id) {
    id
    key
    mimeType
    name
    size
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getFileById(variables: GetFileByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFileByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFileByIdQuery>(GetFileByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFileById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;