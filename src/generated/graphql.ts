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
  bigint: { input: any; output: any; }
  claim_status: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  tstzrange: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'Category';
  id: Scalars['uuid']['output'];
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "category" */
export type CategoryAggregate = {
  __typename?: 'CategoryAggregate';
  aggregate?: Maybe<CategoryAggregateFields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type CategoryAggregateFields = {
  __typename?: 'CategoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CategoryMaxFields>;
  min?: Maybe<CategoryMinFields>;
};


/** aggregate fields of "category" */
export type CategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CategorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type CategoryBoolExp = {
  _and?: InputMaybe<Array<CategoryBoolExp>>;
  _not?: InputMaybe<CategoryBoolExp>;
  _or?: InputMaybe<Array<CategoryBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  labelDe?: InputMaybe<StringComparisonExp>;
  labelEn?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "category" */
export enum CategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type CategoryInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CategoryMaxFields = {
  __typename?: 'CategoryMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CategoryMinFields = {
  __typename?: 'CategoryMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "category" */
export type CategoryMutationResponse = {
  __typename?: 'CategoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** on_conflict condition type for table "category" */
export type CategoryOnConflict = {
  constraint: CategoryConstraint;
  updateColumns?: Array<CategoryUpdateColumn>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** Ordering options when selecting data from "category". */
export type CategoryOrderBy = {
  id?: InputMaybe<OrderBy>;
  labelDe?: InputMaybe<OrderBy>;
  labelEn?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: category */
export type CategoryPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "category" */
export enum CategorySelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "category" */
export type CategorySetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "category" */
export type CategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "category" */
export enum CategoryUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name',
  /** column name */
  Title = 'title'
}

export type CategoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategorySetInput>;
  /** filter the rows which have to be updated */
  where: CategoryBoolExp;
};

/** columns and relationships of "claim" */
export type Claim = {
  __typename?: 'Claim';
  /** An array relationship */
  claimHistories: Array<ClaimHistory>;
  /** An aggregate relationship */
  claimHistoriesAggregate: ClaimHistoryAggregate;
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  commentsAggregate: CommentAggregate;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  facts: Array<Fact>;
  /** An aggregate relationship */
  factsAggregate: FactAggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  origins: Array<Origin>;
  /** An aggregate relationship */
  originsAggregate: OriginAggregate;
  processId?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  rating?: Maybe<Rating>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status: Scalars['claim_status']['output'];
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "claim" */
export type ClaimClaimHistoriesArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaimHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimHistoryOrderBy>>;
  where?: InputMaybe<ClaimHistoryBoolExp>;
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
export type ClaimFactsArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimFactsAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactOrderBy>>;
  where?: InputMaybe<FactBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimOriginsArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimOriginsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
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
  avg?: Maybe<ClaimAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimMaxFields>;
  min?: Maybe<ClaimMinFields>;
  stddev?: Maybe<ClaimStddevFields>;
  stddevPop?: Maybe<ClaimStddevPopFields>;
  stddevSamp?: Maybe<ClaimStddevSampFields>;
  sum?: Maybe<ClaimSumFields>;
  varPop?: Maybe<ClaimVarPopFields>;
  varSamp?: Maybe<ClaimVarSampFields>;
  variance?: Maybe<ClaimVarianceFields>;
};


/** aggregate fields of "claim" */
export type ClaimAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim" */
export type ClaimAggregateOrderBy = {
  avg?: InputMaybe<ClaimAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimMaxOrderBy>;
  min?: InputMaybe<ClaimMinOrderBy>;
  stddev?: InputMaybe<ClaimStddevOrderBy>;
  stddevPop?: InputMaybe<ClaimStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ClaimStddevSampOrderBy>;
  sum?: InputMaybe<ClaimSumOrderBy>;
  varPop?: InputMaybe<ClaimVarPopOrderBy>;
  varSamp?: InputMaybe<ClaimVarSampOrderBy>;
  variance?: InputMaybe<ClaimVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "claim" */
export type ClaimArrRelInsertInput = {
  data: Array<ClaimInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimOnConflict>;
};

/** aggregate avg on columns */
export type ClaimAvgFields = {
  __typename?: 'ClaimAvgFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "claim" */
export type ClaimAvgOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "claim". All fields are combined with a logical 'AND'. */
export type ClaimBoolExp = {
  _and?: InputMaybe<Array<ClaimBoolExp>>;
  _not?: InputMaybe<ClaimBoolExp>;
  _or?: InputMaybe<Array<ClaimBoolExp>>;
  claimHistories?: InputMaybe<ClaimHistoryBoolExp>;
  claimHistoriesAggregate?: InputMaybe<ClaimHistoryAggregateBoolExp>;
  comments?: InputMaybe<CommentBoolExp>;
  commentsAggregate?: InputMaybe<CommentAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  facts?: InputMaybe<FactBoolExp>;
  factsAggregate?: InputMaybe<FactAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  origins?: InputMaybe<OriginBoolExp>;
  originsAggregate?: InputMaybe<OriginAggregateBoolExp>;
  processId?: InputMaybe<BigintComparisonExp>;
  rating?: InputMaybe<RatingBoolExp>;
  ratingId?: InputMaybe<UuidComparisonExp>;
  shortId?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<ClaimStatusComparisonExp>;
  submitterNotes?: InputMaybe<StringComparisonExp>;
  synopsis?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** columns and relationships of "claim_category" */
export type ClaimCategory = {
  __typename?: 'ClaimCategory';
  categoryId: Scalars['uuid']['output'];
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "claim_category" */
export type ClaimCategoryAggregate = {
  __typename?: 'ClaimCategoryAggregate';
  aggregate?: Maybe<ClaimCategoryAggregateFields>;
  nodes: Array<ClaimCategory>;
};

/** aggregate fields of "claim_category" */
export type ClaimCategoryAggregateFields = {
  __typename?: 'ClaimCategoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimCategoryMaxFields>;
  min?: Maybe<ClaimCategoryMinFields>;
};


/** aggregate fields of "claim_category" */
export type ClaimCategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "claim_category". All fields are combined with a logical 'AND'. */
export type ClaimCategoryBoolExp = {
  _and?: InputMaybe<Array<ClaimCategoryBoolExp>>;
  _not?: InputMaybe<ClaimCategoryBoolExp>;
  _or?: InputMaybe<Array<ClaimCategoryBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "claim_category" */
export enum ClaimCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimCategoryPkey = 'claim_category_pkey'
}

/** input type for inserting data into table "claim_category" */
export type ClaimCategoryInsertInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ClaimCategoryMaxFields = {
  __typename?: 'ClaimCategoryMaxFields';
  categoryId?: Maybe<Scalars['uuid']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ClaimCategoryMinFields = {
  __typename?: 'ClaimCategoryMinFields';
  categoryId?: Maybe<Scalars['uuid']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "claim_category" */
export type ClaimCategoryMutationResponse = {
  __typename?: 'ClaimCategoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ClaimCategory>;
};

/** on_conflict condition type for table "claim_category" */
export type ClaimCategoryOnConflict = {
  constraint: ClaimCategoryConstraint;
  updateColumns?: Array<ClaimCategoryUpdateColumn>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};

/** Ordering options when selecting data from "claim_category". */
export type ClaimCategoryOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: claim_category */
export type ClaimCategoryPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim_category" */
export enum ClaimCategorySelectColumn {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "claim_category" */
export type ClaimCategorySetInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "claim_category" */
export type ClaimCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ClaimCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ClaimCategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars['uuid']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "claim_category" */
export enum ClaimCategoryUpdateColumn {
  /** column name */
  CategoryId = 'categoryId',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ClaimCategoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimCategorySetInput>;
  /** filter the rows which have to be updated */
  where: ClaimCategoryBoolExp;
};

/** unique or primary key constraints on table "claim" */
export enum ClaimConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimPkey = 'claim_pkey',
  /** unique or primary key constraint on columns "process_id" */
  ClaimProcessId = 'claim_process_id',
  /** unique or primary key constraint on columns "short_id" */
  ClaimShortIdKey = 'claim_short_id_key'
}

/** columns and relationships of "claim_history" */
export type ClaimHistory = {
  __typename?: 'ClaimHistory';
  /** An object relationship */
  claim: Claim;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  processId?: Maybe<Scalars['bigint']['output']>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status: Scalars['claim_status']['output'];
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "claim_history" */
export type ClaimHistoryAggregate = {
  __typename?: 'ClaimHistoryAggregate';
  aggregate?: Maybe<ClaimHistoryAggregateFields>;
  nodes: Array<ClaimHistory>;
};

export type ClaimHistoryAggregateBoolExp = {
  count?: InputMaybe<ClaimHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "claim_history" */
export type ClaimHistoryAggregateFields = {
  __typename?: 'ClaimHistoryAggregateFields';
  avg?: Maybe<ClaimHistoryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ClaimHistoryMaxFields>;
  min?: Maybe<ClaimHistoryMinFields>;
  stddev?: Maybe<ClaimHistoryStddevFields>;
  stddevPop?: Maybe<ClaimHistoryStddevPopFields>;
  stddevSamp?: Maybe<ClaimHistoryStddevSampFields>;
  sum?: Maybe<ClaimHistorySumFields>;
  varPop?: Maybe<ClaimHistoryVarPopFields>;
  varSamp?: Maybe<ClaimHistoryVarSampFields>;
  variance?: Maybe<ClaimHistoryVarianceFields>;
};


/** aggregate fields of "claim_history" */
export type ClaimHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "claim_history" */
export type ClaimHistoryAggregateOrderBy = {
  avg?: InputMaybe<ClaimHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimHistoryMaxOrderBy>;
  min?: InputMaybe<ClaimHistoryMinOrderBy>;
  stddev?: InputMaybe<ClaimHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<ClaimHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ClaimHistoryStddevSampOrderBy>;
  sum?: InputMaybe<ClaimHistorySumOrderBy>;
  varPop?: InputMaybe<ClaimHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<ClaimHistoryVarSampOrderBy>;
  variance?: InputMaybe<ClaimHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "claim_history" */
export type ClaimHistoryArrRelInsertInput = {
  data: Array<ClaimHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimHistoryOnConflict>;
};

/** aggregate avg on columns */
export type ClaimHistoryAvgFields = {
  __typename?: 'ClaimHistoryAvgFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "claim_history" */
export type ClaimHistoryAvgOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "claim_history". All fields are combined with a logical 'AND'. */
export type ClaimHistoryBoolExp = {
  _and?: InputMaybe<Array<ClaimHistoryBoolExp>>;
  _not?: InputMaybe<ClaimHistoryBoolExp>;
  _or?: InputMaybe<Array<ClaimHistoryBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  processId?: InputMaybe<BigintComparisonExp>;
  ratingId?: InputMaybe<UuidComparisonExp>;
  shortId?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<ClaimStatusComparisonExp>;
  submitterNotes?: InputMaybe<StringComparisonExp>;
  synopsis?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "claim_history" */
export enum ClaimHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  ClaimHistoryPkey = 'claim_history_pkey'
}

/** input type for incrementing numeric columns in table "claim_history" */
export type ClaimHistoryIncInput = {
  processId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "claim_history" */
export type ClaimHistoryInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ClaimHistoryMaxFields = {
  __typename?: 'ClaimHistoryMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processId?: Maybe<Scalars['bigint']['output']>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim_history" */
export type ClaimHistoryMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimHistoryMinFields = {
  __typename?: 'ClaimHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processId?: Maybe<Scalars['bigint']['output']>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim_history" */
export type ClaimHistoryMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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
  claim?: InputMaybe<ClaimOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
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
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  RatingId = 'ratingId',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitterNotes = 'submitterNotes',
  /** column name */
  Synopsis = 'synopsis',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim_history" */
export type ClaimHistorySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ClaimHistoryStddevFields = {
  __typename?: 'ClaimHistoryStddevFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "claim_history" */
export type ClaimHistoryStddevOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ClaimHistoryStddevPopFields = {
  __typename?: 'ClaimHistoryStddevPopFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "claim_history" */
export type ClaimHistoryStddevPopOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ClaimHistoryStddevSampFields = {
  __typename?: 'ClaimHistoryStddevSampFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "claim_history" */
export type ClaimHistoryStddevSampOrderBy = {
  processId?: InputMaybe<OrderBy>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ClaimHistorySumFields = {
  __typename?: 'ClaimHistorySumFields';
  processId?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "claim_history" */
export type ClaimHistorySumOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** update columns of table "claim_history" */
export enum ClaimHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  RatingId = 'ratingId',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitterNotes = 'submitterNotes',
  /** column name */
  Synopsis = 'synopsis',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ClaimHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ClaimHistoryBoolExp;
};

/** aggregate varPop on columns */
export type ClaimHistoryVarPopFields = {
  __typename?: 'ClaimHistoryVarPopFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "claim_history" */
export type ClaimHistoryVarPopOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ClaimHistoryVarSampFields = {
  __typename?: 'ClaimHistoryVarSampFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "claim_history" */
export type ClaimHistoryVarSampOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ClaimHistoryVarianceFields = {
  __typename?: 'ClaimHistoryVarianceFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "claim_history" */
export type ClaimHistoryVarianceOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "claim" */
export type ClaimIncInput = {
  processId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "claim" */
export type ClaimInsertInput = {
  claimHistories?: InputMaybe<ClaimHistoryArrRelInsertInput>;
  comments?: InputMaybe<CommentArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  facts?: InputMaybe<FactArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  origins?: InputMaybe<OriginArrRelInsertInput>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  rating?: InputMaybe<RatingObjRelInsertInput>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type ClaimMaxFields = {
  __typename?: 'ClaimMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processId?: Maybe<Scalars['bigint']['output']>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim" */
export type ClaimMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimMinFields = {
  __typename?: 'ClaimMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processId?: Maybe<Scalars['bigint']['output']>;
  ratingId?: Maybe<Scalars['uuid']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['claim_status']['output']>;
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim" */
export type ClaimMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
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
  claimHistoriesAggregate?: InputMaybe<ClaimHistoryAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  factsAggregate?: InputMaybe<FactAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  originsAggregate?: InputMaybe<OriginAggregateOrderBy>;
  processId?: InputMaybe<OrderBy>;
  rating?: InputMaybe<RatingOrderBy>;
  ratingId?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: claim */
export type ClaimPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim" */
export enum ClaimSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  RatingId = 'ratingId',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitterNotes = 'submitterNotes',
  /** column name */
  Synopsis = 'synopsis',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "claim" */
export type ClaimSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
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

/** aggregate stddev on columns */
export type ClaimStddevFields = {
  __typename?: 'ClaimStddevFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "claim" */
export type ClaimStddevOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ClaimStddevPopFields = {
  __typename?: 'ClaimStddevPopFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "claim" */
export type ClaimStddevPopOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ClaimStddevSampFields = {
  __typename?: 'ClaimStddevSampFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "claim" */
export type ClaimStddevSampOrderBy = {
  processId?: InputMaybe<OrderBy>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  ratingId?: InputMaybe<Scalars['uuid']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type ClaimSumFields = {
  __typename?: 'ClaimSumFields';
  processId?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "claim" */
export type ClaimSumOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** update columns of table "claim" */
export enum ClaimUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  RatingId = 'ratingId',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitterNotes = 'submitterNotes',
  /** column name */
  Synopsis = 'synopsis',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type ClaimUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ClaimIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClaimSetInput>;
  /** filter the rows which have to be updated */
  where: ClaimBoolExp;
};

/** aggregate varPop on columns */
export type ClaimVarPopFields = {
  __typename?: 'ClaimVarPopFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "claim" */
export type ClaimVarPopOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ClaimVarSampFields = {
  __typename?: 'ClaimVarSampFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "claim" */
export type ClaimVarSampOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ClaimVarianceFields = {
  __typename?: 'ClaimVarianceFields';
  processId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "claim" */
export type ClaimVarianceOrderBy = {
  processId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: 'Comment';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  /** An array relationship */
  commentHistories: Array<CommentHistory>;
  /** An aggregate relationship */
  commentHistoriesAggregate: CommentHistoryAggregate;
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


/** columns and relationships of "comment" */
export type CommentCommentHistoriesArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentCommentHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentHistoryOrderBy>>;
  where?: InputMaybe<CommentHistoryBoolExp>;
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
  commentHistories?: InputMaybe<CommentHistoryBoolExp>;
  commentHistoriesAggregate?: InputMaybe<CommentHistoryAggregateBoolExp>;
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
  /** An object relationship */
  comment: Comment;
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

export type CommentHistoryAggregateBoolExp = {
  count?: InputMaybe<CommentHistoryAggregateBoolExpCount>;
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

/** order by aggregate values of table "comment_history" */
export type CommentHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentHistoryMaxOrderBy>;
  min?: InputMaybe<CommentHistoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "comment_history" */
export type CommentHistoryArrRelInsertInput = {
  data: Array<CommentHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CommentHistoryOnConflict>;
};

/** Boolean expression to filter rows from the table "comment_history". All fields are combined with a logical 'AND'. */
export type CommentHistoryBoolExp = {
  _and?: InputMaybe<Array<CommentHistoryBoolExp>>;
  _not?: InputMaybe<CommentHistoryBoolExp>;
  _or?: InputMaybe<Array<CommentHistoryBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  comment?: InputMaybe<CommentBoolExp>;
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
  comment?: InputMaybe<CommentObjRelInsertInput>;
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

/** order by max() on columns of table "comment_history" */
export type CommentHistoryMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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

/** order by min() on columns of table "comment_history" */
export type CommentHistoryMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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
  comment?: InputMaybe<CommentOrderBy>;
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
  commentHistories?: InputMaybe<CommentHistoryArrRelInsertInput>;
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

/** input type for inserting object relation for remote table "comment" */
export type CommentObjRelInsertInput = {
  data: CommentInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CommentOnConflict>;
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
  commentHistoriesAggregate?: InputMaybe<CommentHistoryAggregateOrderBy>;
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
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  factHistories: Array<FactHistory>;
  /** An aggregate relationship */
  factHistoriesAggregate: FactHistoryAggregate;
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  sources: Array<Source>;
  /** An aggregate relationship */
  sourcesAggregate: SourceAggregate;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "fact" */
export type FactFactHistoriesArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


/** columns and relationships of "fact" */
export type FactFactHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FactHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FactHistoryOrderBy>>;
  where?: InputMaybe<FactHistoryBoolExp>;
};


/** columns and relationships of "fact" */
export type FactSourcesArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


/** columns and relationships of "fact" */
export type FactSourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
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
  avg?: Maybe<FactAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FactMaxFields>;
  min?: Maybe<FactMinFields>;
  stddev?: Maybe<FactStddevFields>;
  stddevPop?: Maybe<FactStddevPopFields>;
  stddevSamp?: Maybe<FactStddevSampFields>;
  sum?: Maybe<FactSumFields>;
  varPop?: Maybe<FactVarPopFields>;
  varSamp?: Maybe<FactVarSampFields>;
  variance?: Maybe<FactVarianceFields>;
};


/** aggregate fields of "fact" */
export type FactAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fact" */
export type FactAggregateOrderBy = {
  avg?: InputMaybe<FactAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FactMaxOrderBy>;
  min?: InputMaybe<FactMinOrderBy>;
  stddev?: InputMaybe<FactStddevOrderBy>;
  stddevPop?: InputMaybe<FactStddevPopOrderBy>;
  stddevSamp?: InputMaybe<FactStddevSampOrderBy>;
  sum?: InputMaybe<FactSumOrderBy>;
  varPop?: InputMaybe<FactVarPopOrderBy>;
  varSamp?: InputMaybe<FactVarSampOrderBy>;
  variance?: InputMaybe<FactVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "fact" */
export type FactArrRelInsertInput = {
  data: Array<FactInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FactOnConflict>;
};

/** aggregate avg on columns */
export type FactAvgFields = {
  __typename?: 'FactAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "fact" */
export type FactAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "fact". All fields are combined with a logical 'AND'. */
export type FactBoolExp = {
  _and?: InputMaybe<Array<FactBoolExp>>;
  _not?: InputMaybe<FactBoolExp>;
  _or?: InputMaybe<Array<FactBoolExp>>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  factHistories?: InputMaybe<FactHistoryBoolExp>;
  factHistoriesAggregate?: InputMaybe<FactHistoryAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  sources?: InputMaybe<SourceBoolExp>;
  sourcesAggregate?: InputMaybe<SourceAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
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
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  fact: Fact;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "fact_history" */
export type FactHistoryAggregate = {
  __typename?: 'FactHistoryAggregate';
  aggregate?: Maybe<FactHistoryAggregateFields>;
  nodes: Array<FactHistory>;
};

export type FactHistoryAggregateBoolExp = {
  count?: InputMaybe<FactHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "fact_history" */
export type FactHistoryAggregateFields = {
  __typename?: 'FactHistoryAggregateFields';
  avg?: Maybe<FactHistoryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<FactHistoryMaxFields>;
  min?: Maybe<FactHistoryMinFields>;
  stddev?: Maybe<FactHistoryStddevFields>;
  stddevPop?: Maybe<FactHistoryStddevPopFields>;
  stddevSamp?: Maybe<FactHistoryStddevSampFields>;
  sum?: Maybe<FactHistorySumFields>;
  varPop?: Maybe<FactHistoryVarPopFields>;
  varSamp?: Maybe<FactHistoryVarSampFields>;
  variance?: Maybe<FactHistoryVarianceFields>;
};


/** aggregate fields of "fact_history" */
export type FactHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FactHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "fact_history" */
export type FactHistoryAggregateOrderBy = {
  avg?: InputMaybe<FactHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FactHistoryMaxOrderBy>;
  min?: InputMaybe<FactHistoryMinOrderBy>;
  stddev?: InputMaybe<FactHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<FactHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<FactHistoryStddevSampOrderBy>;
  sum?: InputMaybe<FactHistorySumOrderBy>;
  varPop?: InputMaybe<FactHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<FactHistoryVarSampOrderBy>;
  variance?: InputMaybe<FactHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "fact_history" */
export type FactHistoryArrRelInsertInput = {
  data: Array<FactHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FactHistoryOnConflict>;
};

/** aggregate avg on columns */
export type FactHistoryAvgFields = {
  __typename?: 'FactHistoryAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "fact_history" */
export type FactHistoryAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "fact_history". All fields are combined with a logical 'AND'. */
export type FactHistoryBoolExp = {
  _and?: InputMaybe<Array<FactHistoryBoolExp>>;
  _not?: InputMaybe<FactHistoryBoolExp>;
  _or?: InputMaybe<Array<FactHistoryBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  fact?: InputMaybe<FactBoolExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "fact_history" */
export enum FactHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  FactHistoryPkey = 'fact_history_pkey'
}

/** input type for incrementing numeric columns in table "fact_history" */
export type FactHistoryIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "fact_history" */
export type FactHistoryInsertInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  fact?: InputMaybe<FactObjRelInsertInput>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type FactHistoryMaxFields = {
  __typename?: 'FactHistoryMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "fact_history" */
export type FactHistoryMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FactHistoryMinFields = {
  __typename?: 'FactHistoryMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "fact_history" */
export type FactHistoryMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  fact?: InputMaybe<FactOrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
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
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact_history" */
export type FactHistorySetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type FactHistoryStddevFields = {
  __typename?: 'FactHistoryStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "fact_history" */
export type FactHistoryStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type FactHistoryStddevPopFields = {
  __typename?: 'FactHistoryStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "fact_history" */
export type FactHistoryStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type FactHistoryStddevSampFields = {
  __typename?: 'FactHistoryStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "fact_history" */
export type FactHistoryStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
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
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type FactHistorySumFields = {
  __typename?: 'FactHistorySumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "fact_history" */
export type FactHistorySumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "fact_history" */
export enum FactHistoryUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FactHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactHistorySetInput>;
  /** filter the rows which have to be updated */
  where: FactHistoryBoolExp;
};

/** aggregate varPop on columns */
export type FactHistoryVarPopFields = {
  __typename?: 'FactHistoryVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "fact_history" */
export type FactHistoryVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type FactHistoryVarSampFields = {
  __typename?: 'FactHistoryVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "fact_history" */
export type FactHistoryVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FactHistoryVarianceFields = {
  __typename?: 'FactHistoryVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "fact_history" */
export type FactHistoryVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "fact" */
export type FactIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "fact" */
export type FactInsertInput = {
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  factHistories?: InputMaybe<FactHistoryArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sources?: InputMaybe<SourceArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type FactMaxFields = {
  __typename?: 'FactMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "fact" */
export type FactMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FactMinFields = {
  __typename?: 'FactMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "fact" */
export type FactMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
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
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  factHistoriesAggregate?: InputMaybe<FactHistoryAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  sourcesAggregate?: InputMaybe<SourceAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: fact */
export type FactPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "fact" */
export enum FactSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "fact" */
export type FactSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type FactStddevFields = {
  __typename?: 'FactStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "fact" */
export type FactStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type FactStddevPopFields = {
  __typename?: 'FactStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "fact" */
export type FactStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type FactStddevSampFields = {
  __typename?: 'FactStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "fact" */
export type FactStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
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
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type FactSumFields = {
  __typename?: 'FactSumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "fact" */
export type FactSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "fact" */
export enum FactUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type FactUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FactIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FactSetInput>;
  /** filter the rows which have to be updated */
  where: FactBoolExp;
};

/** aggregate varPop on columns */
export type FactVarPopFields = {
  __typename?: 'FactVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "fact" */
export type FactVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type FactVarSampFields = {
  __typename?: 'FactVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "fact" */
export type FactVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FactVarianceFields = {
  __typename?: 'FactVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "fact" */
export type FactVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** columns and relationships of "file" */
export type File = {
  __typename?: 'File';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  eTag: Scalars['String']['output'];
  /** An array relationship */
  fileHistories: Array<FileHistory>;
  /** An aggregate relationship */
  fileHistoriesAggregate: FileHistoryAggregate;
  id: Scalars['uuid']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  origins: Array<Origin>;
  /** An aggregate relationship */
  originsAggregate: OriginAggregate;
  size: Scalars['Int']['output'];
  /** An array relationship */
  sources: Array<Source>;
  /** An aggregate relationship */
  sourcesAggregate: SourceAggregate;
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
export type FileFileHistoriesArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


/** columns and relationships of "file" */
export type FileFileHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FileHistoryOrderBy>>;
  where?: InputMaybe<FileHistoryBoolExp>;
};


/** columns and relationships of "file" */
export type FileOriginsArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "file" */
export type FileOriginsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "file" */
export type FileSourcesArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


/** columns and relationships of "file" */
export type FileSourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
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
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  eTag?: InputMaybe<StringComparisonExp>;
  fileHistories?: InputMaybe<FileHistoryBoolExp>;
  fileHistoriesAggregate?: InputMaybe<FileHistoryAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  origins?: InputMaybe<OriginBoolExp>;
  originsAggregate?: InputMaybe<OriginAggregateBoolExp>;
  size?: InputMaybe<IntComparisonExp>;
  sources?: InputMaybe<SourceBoolExp>;
  sourcesAggregate?: InputMaybe<SourceAggregateBoolExp>;
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
  eTag: Scalars['String']['output'];
  /** An object relationship */
  file: File;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
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

export type FileHistoryAggregateBoolExp = {
  count?: InputMaybe<FileHistoryAggregateBoolExpCount>;
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

/** order by aggregate values of table "file_history" */
export type FileHistoryAggregateOrderBy = {
  avg?: InputMaybe<FileHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FileHistoryMaxOrderBy>;
  min?: InputMaybe<FileHistoryMinOrderBy>;
  stddev?: InputMaybe<FileHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<FileHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<FileHistoryStddevSampOrderBy>;
  sum?: InputMaybe<FileHistorySumOrderBy>;
  varPop?: InputMaybe<FileHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<FileHistoryVarSampOrderBy>;
  variance?: InputMaybe<FileHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "file_history" */
export type FileHistoryArrRelInsertInput = {
  data: Array<FileHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FileHistoryOnConflict>;
};

/** aggregate avg on columns */
export type FileHistoryAvgFields = {
  __typename?: 'FileHistoryAvgFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "file_history" */
export type FileHistoryAvgOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "file_history". All fields are combined with a logical 'AND'. */
export type FileHistoryBoolExp = {
  _and?: InputMaybe<Array<FileHistoryBoolExp>>;
  _not?: InputMaybe<FileHistoryBoolExp>;
  _or?: InputMaybe<Array<FileHistoryBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  eTag?: InputMaybe<StringComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
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
  eTag?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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
  eTag?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "file_history" */
export type FileHistoryMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  eTag?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FileHistoryMinFields = {
  __typename?: 'FileHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  eTag?: Maybe<Scalars['String']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  transcription?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "file_history" */
export type FileHistoryMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  eTag?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  transcription?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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
  eTag?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
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
  ETag = 'eTag',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
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
  eTag?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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

/** order by stddev() on columns of table "file_history" */
export type FileHistoryStddevOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type FileHistoryStddevPopFields = {
  __typename?: 'FileHistoryStddevPopFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "file_history" */
export type FileHistoryStddevPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type FileHistoryStddevSampFields = {
  __typename?: 'FileHistoryStddevSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "file_history" */
export type FileHistoryStddevSampOrderBy = {
  size?: InputMaybe<OrderBy>;
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
  eTag?: InputMaybe<Scalars['String']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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

/** order by sum() on columns of table "file_history" */
export type FileHistorySumOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** update columns of table "file_history" */
export enum FileHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  ETag = 'eTag',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
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

/** order by varPop() on columns of table "file_history" */
export type FileHistoryVarPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type FileHistoryVarSampFields = {
  __typename?: 'FileHistoryVarSampFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "file_history" */
export type FileHistoryVarSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FileHistoryVarianceFields = {
  __typename?: 'FileHistoryVarianceFields';
  size?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "file_history" */
export type FileHistoryVarianceOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "file" */
export type FileIncInput = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "file" */
export type FileInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  eTag?: InputMaybe<Scalars['String']['input']>;
  fileHistories?: InputMaybe<FileHistoryArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  origins?: InputMaybe<OriginArrRelInsertInput>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sources?: InputMaybe<SourceArrRelInsertInput>;
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
  eTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
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
  eTag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
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
  eTag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
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
  eTag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
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
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  eTag?: InputMaybe<OrderBy>;
  fileHistoriesAggregate?: InputMaybe<FileHistoryAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  originsAggregate?: InputMaybe<OriginAggregateOrderBy>;
  size?: InputMaybe<OrderBy>;
  sourcesAggregate?: InputMaybe<SourceAggregateOrderBy>;
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
  ETag = 'eTag',
  /** column name */
  Id = 'id',
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
  eTag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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
  eTag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
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
  ETag = 'eTag',
  /** column name */
  Id = 'id',
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

/** columns and relationships of "origin" */
export type Origin = {
  __typename?: 'Origin';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  originHistories: Array<OriginHistory>;
  /** An aggregate relationship */
  originHistoriesAggregate: OriginHistoryAggregate;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "origin" */
export type OriginOriginHistoriesArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


/** columns and relationships of "origin" */
export type OriginOriginHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};

/** aggregated selection of "origin" */
export type OriginAggregate = {
  __typename?: 'OriginAggregate';
  aggregate?: Maybe<OriginAggregateFields>;
  nodes: Array<Origin>;
};

export type OriginAggregateBoolExp = {
  count?: InputMaybe<OriginAggregateBoolExpCount>;
};

/** aggregate fields of "origin" */
export type OriginAggregateFields = {
  __typename?: 'OriginAggregateFields';
  avg?: Maybe<OriginAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OriginMaxFields>;
  min?: Maybe<OriginMinFields>;
  stddev?: Maybe<OriginStddevFields>;
  stddevPop?: Maybe<OriginStddevPopFields>;
  stddevSamp?: Maybe<OriginStddevSampFields>;
  sum?: Maybe<OriginSumFields>;
  varPop?: Maybe<OriginVarPopFields>;
  varSamp?: Maybe<OriginVarSampFields>;
  variance?: Maybe<OriginVarianceFields>;
};


/** aggregate fields of "origin" */
export type OriginAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OriginSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "origin" */
export type OriginAggregateOrderBy = {
  avg?: InputMaybe<OriginAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OriginMaxOrderBy>;
  min?: InputMaybe<OriginMinOrderBy>;
  stddev?: InputMaybe<OriginStddevOrderBy>;
  stddevPop?: InputMaybe<OriginStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OriginStddevSampOrderBy>;
  sum?: InputMaybe<OriginSumOrderBy>;
  varPop?: InputMaybe<OriginVarPopOrderBy>;
  varSamp?: InputMaybe<OriginVarSampOrderBy>;
  variance?: InputMaybe<OriginVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "origin" */
export type OriginArrRelInsertInput = {
  data: Array<OriginInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OriginOnConflict>;
};

/** aggregate avg on columns */
export type OriginAvgFields = {
  __typename?: 'OriginAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "origin" */
export type OriginAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "origin". All fields are combined with a logical 'AND'. */
export type OriginBoolExp = {
  _and?: InputMaybe<Array<OriginBoolExp>>;
  _not?: InputMaybe<OriginBoolExp>;
  _or?: InputMaybe<Array<OriginBoolExp>>;
  archiveUrl?: InputMaybe<StringComparisonExp>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  originHistories?: InputMaybe<OriginHistoryBoolExp>;
  originHistoriesAggregate?: InputMaybe<OriginHistoryAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "origin" */
export enum OriginConstraint {
  /** unique or primary key constraint on columns "id" */
  OriginPkey = 'origin_pkey'
}

/** columns and relationships of "origin_history" */
export type OriginHistory = {
  __typename?: 'OriginHistory';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  origin: Origin;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "origin_history" */
export type OriginHistoryAggregate = {
  __typename?: 'OriginHistoryAggregate';
  aggregate?: Maybe<OriginHistoryAggregateFields>;
  nodes: Array<OriginHistory>;
};

export type OriginHistoryAggregateBoolExp = {
  count?: InputMaybe<OriginHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "origin_history" */
export type OriginHistoryAggregateFields = {
  __typename?: 'OriginHistoryAggregateFields';
  avg?: Maybe<OriginHistoryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<OriginHistoryMaxFields>;
  min?: Maybe<OriginHistoryMinFields>;
  stddev?: Maybe<OriginHistoryStddevFields>;
  stddevPop?: Maybe<OriginHistoryStddevPopFields>;
  stddevSamp?: Maybe<OriginHistoryStddevSampFields>;
  sum?: Maybe<OriginHistorySumFields>;
  varPop?: Maybe<OriginHistoryVarPopFields>;
  varSamp?: Maybe<OriginHistoryVarSampFields>;
  variance?: Maybe<OriginHistoryVarianceFields>;
};


/** aggregate fields of "origin_history" */
export type OriginHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OriginHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "origin_history" */
export type OriginHistoryAggregateOrderBy = {
  avg?: InputMaybe<OriginHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OriginHistoryMaxOrderBy>;
  min?: InputMaybe<OriginHistoryMinOrderBy>;
  stddev?: InputMaybe<OriginHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<OriginHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<OriginHistoryStddevSampOrderBy>;
  sum?: InputMaybe<OriginHistorySumOrderBy>;
  varPop?: InputMaybe<OriginHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<OriginHistoryVarSampOrderBy>;
  variance?: InputMaybe<OriginHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "origin_history" */
export type OriginHistoryArrRelInsertInput = {
  data: Array<OriginHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OriginHistoryOnConflict>;
};

/** aggregate avg on columns */
export type OriginHistoryAvgFields = {
  __typename?: 'OriginHistoryAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "origin_history" */
export type OriginHistoryAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "origin_history". All fields are combined with a logical 'AND'. */
export type OriginHistoryBoolExp = {
  _and?: InputMaybe<Array<OriginHistoryBoolExp>>;
  _not?: InputMaybe<OriginHistoryBoolExp>;
  _or?: InputMaybe<Array<OriginHistoryBoolExp>>;
  archiveUrl?: InputMaybe<StringComparisonExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  origin?: InputMaybe<OriginBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "origin_history" */
export enum OriginHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  OriginHistoryPkey = 'origin_history_pkey'
}

/** input type for incrementing numeric columns in table "origin_history" */
export type OriginHistoryIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "origin_history" */
export type OriginHistoryInsertInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  origin?: InputMaybe<OriginObjRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OriginHistoryMaxFields = {
  __typename?: 'OriginHistoryMaxFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "origin_history" */
export type OriginHistoryMaxOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OriginHistoryMinFields = {
  __typename?: 'OriginHistoryMinFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "origin_history" */
export type OriginHistoryMinOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "origin_history" */
export type OriginHistoryMutationResponse = {
  __typename?: 'OriginHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OriginHistory>;
};

/** on_conflict condition type for table "origin_history" */
export type OriginHistoryOnConflict = {
  constraint: OriginHistoryConstraint;
  updateColumns?: Array<OriginHistoryUpdateColumn>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};

/** Ordering options when selecting data from "origin_history". */
export type OriginHistoryOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  origin?: InputMaybe<OriginOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: origin_history */
export type OriginHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "origin_history" */
export enum OriginHistorySelectColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "origin_history" */
export type OriginHistorySetInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type OriginHistoryStddevFields = {
  __typename?: 'OriginHistoryStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "origin_history" */
export type OriginHistoryStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OriginHistoryStddevPopFields = {
  __typename?: 'OriginHistoryStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "origin_history" */
export type OriginHistoryStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OriginHistoryStddevSampFields = {
  __typename?: 'OriginHistoryStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "origin_history" */
export type OriginHistoryStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "origin_history" */
export type OriginHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OriginHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OriginHistoryStreamCursorValueInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OriginHistorySumFields = {
  __typename?: 'OriginHistorySumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "origin_history" */
export type OriginHistorySumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "origin_history" */
export enum OriginHistoryUpdateColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

export type OriginHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OriginHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OriginHistorySetInput>;
  /** filter the rows which have to be updated */
  where: OriginHistoryBoolExp;
};

/** aggregate varPop on columns */
export type OriginHistoryVarPopFields = {
  __typename?: 'OriginHistoryVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "origin_history" */
export type OriginHistoryVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OriginHistoryVarSampFields = {
  __typename?: 'OriginHistoryVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "origin_history" */
export type OriginHistoryVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OriginHistoryVarianceFields = {
  __typename?: 'OriginHistoryVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "origin_history" */
export type OriginHistoryVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "origin" */
export type OriginIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "origin" */
export type OriginInsertInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originHistories?: InputMaybe<OriginHistoryArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type OriginMaxFields = {
  __typename?: 'OriginMaxFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "origin" */
export type OriginMaxOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OriginMinFields = {
  __typename?: 'OriginMinFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "origin" */
export type OriginMinOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "origin" */
export type OriginMutationResponse = {
  __typename?: 'OriginMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Origin>;
};

/** input type for inserting object relation for remote table "origin" */
export type OriginObjRelInsertInput = {
  data: OriginInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OriginOnConflict>;
};

/** on_conflict condition type for table "origin" */
export type OriginOnConflict = {
  constraint: OriginConstraint;
  updateColumns?: Array<OriginUpdateColumn>;
  where?: InputMaybe<OriginBoolExp>;
};

/** Ordering options when selecting data from "origin". */
export type OriginOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originHistoriesAggregate?: InputMaybe<OriginHistoryAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: origin */
export type OriginPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "origin" */
export enum OriginSelectColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "origin" */
export type OriginSetInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type OriginStddevFields = {
  __typename?: 'OriginStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "origin" */
export type OriginStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type OriginStddevPopFields = {
  __typename?: 'OriginStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "origin" */
export type OriginStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type OriginStddevSampFields = {
  __typename?: 'OriginStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "origin" */
export type OriginStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "origin" */
export type OriginStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OriginStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OriginStreamCursorValueInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type OriginSumFields = {
  __typename?: 'OriginSumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "origin" */
export type OriginSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "origin" */
export enum OriginUpdateColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

export type OriginUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OriginIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OriginSetInput>;
  /** filter the rows which have to be updated */
  where: OriginBoolExp;
};

/** aggregate varPop on columns */
export type OriginVarPopFields = {
  __typename?: 'OriginVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "origin" */
export type OriginVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type OriginVarSampFields = {
  __typename?: 'OriginVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "origin" */
export type OriginVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OriginVarianceFields = {
  __typename?: 'OriginVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "origin" */
export type OriginVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** columns and relationships of "rating" */
export type Rating = {
  __typename?: 'Rating';
  /** An array relationship */
  claims: Array<Claim>;
  /** An aggregate relationship */
  claimsAggregate: ClaimAggregate;
  id: Scalars['uuid']['output'];
  labelId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  ratingHistories: Array<RatingHistory>;
  /** An aggregate relationship */
  ratingHistoriesAggregate: RatingHistoryAggregate;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "rating" */
export type RatingClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "rating" */
export type RatingClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "rating" */
export type RatingRatingHistoriesArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


/** columns and relationships of "rating" */
export type RatingRatingHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};

/** aggregated selection of "rating" */
export type RatingAggregate = {
  __typename?: 'RatingAggregate';
  aggregate?: Maybe<RatingAggregateFields>;
  nodes: Array<Rating>;
};

/** aggregate fields of "rating" */
export type RatingAggregateFields = {
  __typename?: 'RatingAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<RatingMaxFields>;
  min?: Maybe<RatingMinFields>;
};


/** aggregate fields of "rating" */
export type RatingAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RatingSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rating". All fields are combined with a logical 'AND'. */
export type RatingBoolExp = {
  _and?: InputMaybe<Array<RatingBoolExp>>;
  _not?: InputMaybe<RatingBoolExp>;
  _or?: InputMaybe<Array<RatingBoolExp>>;
  claims?: InputMaybe<ClaimBoolExp>;
  claimsAggregate?: InputMaybe<ClaimAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  labelId?: InputMaybe<UuidComparisonExp>;
  ratingHistories?: InputMaybe<RatingHistoryBoolExp>;
  ratingHistoriesAggregate?: InputMaybe<RatingHistoryAggregateBoolExp>;
  summary?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rating" */
export enum RatingConstraint {
  /** unique or primary key constraint on columns "id" */
  RatingPkey = 'rating_pkey'
}

/** columns and relationships of "rating_history" */
export type RatingHistory = {
  __typename?: 'RatingHistory';
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  labelId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  rating: Rating;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "rating_history" */
export type RatingHistoryAggregate = {
  __typename?: 'RatingHistoryAggregate';
  aggregate?: Maybe<RatingHistoryAggregateFields>;
  nodes: Array<RatingHistory>;
};

export type RatingHistoryAggregateBoolExp = {
  count?: InputMaybe<RatingHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "rating_history" */
export type RatingHistoryAggregateFields = {
  __typename?: 'RatingHistoryAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<RatingHistoryMaxFields>;
  min?: Maybe<RatingHistoryMinFields>;
};


/** aggregate fields of "rating_history" */
export type RatingHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RatingHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rating_history" */
export type RatingHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RatingHistoryMaxOrderBy>;
  min?: InputMaybe<RatingHistoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "rating_history" */
export type RatingHistoryArrRelInsertInput = {
  data: Array<RatingHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RatingHistoryOnConflict>;
};

/** Boolean expression to filter rows from the table "rating_history". All fields are combined with a logical 'AND'. */
export type RatingHistoryBoolExp = {
  _and?: InputMaybe<Array<RatingHistoryBoolExp>>;
  _not?: InputMaybe<RatingHistoryBoolExp>;
  _or?: InputMaybe<Array<RatingHistoryBoolExp>>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  labelId?: InputMaybe<UuidComparisonExp>;
  rating?: InputMaybe<RatingBoolExp>;
  summary?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rating_history" */
export enum RatingHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  RatingHistoryPkey = 'rating_history_pkey'
}

/** input type for inserting data into table "rating_history" */
export type RatingHistoryInsertInput = {
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<RatingObjRelInsertInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RatingHistoryMaxFields = {
  __typename?: 'RatingHistoryMaxFields';
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  labelId?: Maybe<Scalars['uuid']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "rating_history" */
export type RatingHistoryMaxOrderBy = {
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  labelId?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RatingHistoryMinFields = {
  __typename?: 'RatingHistoryMinFields';
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  labelId?: Maybe<Scalars['uuid']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "rating_history" */
export type RatingHistoryMinOrderBy = {
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  labelId?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "rating_history" */
export type RatingHistoryMutationResponse = {
  __typename?: 'RatingHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<RatingHistory>;
};

/** on_conflict condition type for table "rating_history" */
export type RatingHistoryOnConflict = {
  constraint: RatingHistoryConstraint;
  updateColumns?: Array<RatingHistoryUpdateColumn>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};

/** Ordering options when selecting data from "rating_history". */
export type RatingHistoryOrderBy = {
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  labelId?: InputMaybe<OrderBy>;
  rating?: InputMaybe<RatingOrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rating_history */
export type RatingHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "rating_history" */
export enum RatingHistorySelectColumn {
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "rating_history" */
export type RatingHistorySetInput = {
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "rating_history" */
export type RatingHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RatingHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RatingHistoryStreamCursorValueInput = {
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "rating_history" */
export enum RatingHistoryUpdateColumn {
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title'
}

export type RatingHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RatingHistorySetInput>;
  /** filter the rows which have to be updated */
  where: RatingHistoryBoolExp;
};

/** input type for inserting data into table "rating" */
export type RatingInsertInput = {
  claims?: InputMaybe<ClaimArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  ratingHistories?: InputMaybe<RatingHistoryArrRelInsertInput>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RatingMaxFields = {
  __typename?: 'RatingMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
  labelId?: Maybe<Scalars['uuid']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RatingMinFields = {
  __typename?: 'RatingMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
  labelId?: Maybe<Scalars['uuid']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "rating" */
export type RatingMutationResponse = {
  __typename?: 'RatingMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rating>;
};

/** input type for inserting object relation for remote table "rating" */
export type RatingObjRelInsertInput = {
  data: RatingInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RatingOnConflict>;
};

/** on_conflict condition type for table "rating" */
export type RatingOnConflict = {
  constraint: RatingConstraint;
  updateColumns?: Array<RatingUpdateColumn>;
  where?: InputMaybe<RatingBoolExp>;
};

/** Ordering options when selecting data from "rating". */
export type RatingOrderBy = {
  claimsAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  labelId?: InputMaybe<OrderBy>;
  ratingHistoriesAggregate?: InputMaybe<RatingHistoryAggregateOrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rating */
export type RatingPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rating" */
export enum RatingSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "rating" */
export type RatingSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "rating" */
export type RatingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RatingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RatingStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  labelId?: InputMaybe<Scalars['uuid']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "rating" */
export enum RatingUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title'
}

export type RatingUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RatingSetInput>;
  /** filter the rows which have to be updated */
  where: RatingBoolExp;
};

/** columns and relationships of "source" */
export type Source = {
  __typename?: 'Source';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  fact: Fact;
  factId: Scalars['uuid']['output'];
  /** An object relationship */
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sourceHistories: Array<SourceHistory>;
  /** An aggregate relationship */
  sourceHistoriesAggregate: SourceHistoryAggregate;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};


/** columns and relationships of "source" */
export type SourceSourceHistoriesArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


/** columns and relationships of "source" */
export type SourceSourceHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};

/** aggregated selection of "source" */
export type SourceAggregate = {
  __typename?: 'SourceAggregate';
  aggregate?: Maybe<SourceAggregateFields>;
  nodes: Array<Source>;
};

export type SourceAggregateBoolExp = {
  count?: InputMaybe<SourceAggregateBoolExpCount>;
};

/** aggregate fields of "source" */
export type SourceAggregateFields = {
  __typename?: 'SourceAggregateFields';
  avg?: Maybe<SourceAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<SourceMaxFields>;
  min?: Maybe<SourceMinFields>;
  stddev?: Maybe<SourceStddevFields>;
  stddevPop?: Maybe<SourceStddevPopFields>;
  stddevSamp?: Maybe<SourceStddevSampFields>;
  sum?: Maybe<SourceSumFields>;
  varPop?: Maybe<SourceVarPopFields>;
  varSamp?: Maybe<SourceVarSampFields>;
  variance?: Maybe<SourceVarianceFields>;
};


/** aggregate fields of "source" */
export type SourceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "source" */
export type SourceAggregateOrderBy = {
  avg?: InputMaybe<SourceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SourceMaxOrderBy>;
  min?: InputMaybe<SourceMinOrderBy>;
  stddev?: InputMaybe<SourceStddevOrderBy>;
  stddevPop?: InputMaybe<SourceStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SourceStddevSampOrderBy>;
  sum?: InputMaybe<SourceSumOrderBy>;
  varPop?: InputMaybe<SourceVarPopOrderBy>;
  varSamp?: InputMaybe<SourceVarSampOrderBy>;
  variance?: InputMaybe<SourceVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "source" */
export type SourceArrRelInsertInput = {
  data: Array<SourceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SourceOnConflict>;
};

/** aggregate avg on columns */
export type SourceAvgFields = {
  __typename?: 'SourceAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "source" */
export type SourceAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "source". All fields are combined with a logical 'AND'. */
export type SourceBoolExp = {
  _and?: InputMaybe<Array<SourceBoolExp>>;
  _not?: InputMaybe<SourceBoolExp>;
  _or?: InputMaybe<Array<SourceBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  fact?: InputMaybe<FactBoolExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  sourceHistories?: InputMaybe<SourceHistoryBoolExp>;
  sourceHistoriesAggregate?: InputMaybe<SourceHistoryAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "source" */
export enum SourceConstraint {
  /** unique or primary key constraint on columns "id" */
  SourcePkey = 'source_pkey'
}

/** columns and relationships of "source_history" */
export type SourceHistory = {
  __typename?: 'SourceHistory';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId: Scalars['uuid']['output'];
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  source: Source;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "source_history" */
export type SourceHistoryAggregate = {
  __typename?: 'SourceHistoryAggregate';
  aggregate?: Maybe<SourceHistoryAggregateFields>;
  nodes: Array<SourceHistory>;
};

export type SourceHistoryAggregateBoolExp = {
  count?: InputMaybe<SourceHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "source_history" */
export type SourceHistoryAggregateFields = {
  __typename?: 'SourceHistoryAggregateFields';
  avg?: Maybe<SourceHistoryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<SourceHistoryMaxFields>;
  min?: Maybe<SourceHistoryMinFields>;
  stddev?: Maybe<SourceHistoryStddevFields>;
  stddevPop?: Maybe<SourceHistoryStddevPopFields>;
  stddevSamp?: Maybe<SourceHistoryStddevSampFields>;
  sum?: Maybe<SourceHistorySumFields>;
  varPop?: Maybe<SourceHistoryVarPopFields>;
  varSamp?: Maybe<SourceHistoryVarSampFields>;
  variance?: Maybe<SourceHistoryVarianceFields>;
};


/** aggregate fields of "source_history" */
export type SourceHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SourceHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "source_history" */
export type SourceHistoryAggregateOrderBy = {
  avg?: InputMaybe<SourceHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SourceHistoryMaxOrderBy>;
  min?: InputMaybe<SourceHistoryMinOrderBy>;
  stddev?: InputMaybe<SourceHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<SourceHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SourceHistoryStddevSampOrderBy>;
  sum?: InputMaybe<SourceHistorySumOrderBy>;
  varPop?: InputMaybe<SourceHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<SourceHistoryVarSampOrderBy>;
  variance?: InputMaybe<SourceHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "source_history" */
export type SourceHistoryArrRelInsertInput = {
  data: Array<SourceHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SourceHistoryOnConflict>;
};

/** aggregate avg on columns */
export type SourceHistoryAvgFields = {
  __typename?: 'SourceHistoryAvgFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "source_history" */
export type SourceHistoryAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "source_history". All fields are combined with a logical 'AND'. */
export type SourceHistoryBoolExp = {
  _and?: InputMaybe<Array<SourceHistoryBoolExp>>;
  _not?: InputMaybe<SourceHistoryBoolExp>;
  _or?: InputMaybe<Array<SourceHistoryBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  originalUrl?: InputMaybe<StringComparisonExp>;
  source?: InputMaybe<SourceBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "source_history" */
export enum SourceHistoryConstraint {
  /** unique or primary key constraint on columns "history_id" */
  SourceHistoryPkey = 'source_history_pkey'
}

/** input type for incrementing numeric columns in table "source_history" */
export type SourceHistoryIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "source_history" */
export type SourceHistoryInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<SourceObjRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type SourceHistoryMaxFields = {
  __typename?: 'SourceHistoryMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "source_history" */
export type SourceHistoryMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SourceHistoryMinFields = {
  __typename?: 'SourceHistoryMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "source_history" */
export type SourceHistoryMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "source_history" */
export type SourceHistoryMutationResponse = {
  __typename?: 'SourceHistoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<SourceHistory>;
};

/** on_conflict condition type for table "source_history" */
export type SourceHistoryOnConflict = {
  constraint: SourceHistoryConstraint;
  updateColumns?: Array<SourceHistoryUpdateColumn>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};

/** Ordering options when selecting data from "source_history". */
export type SourceHistoryOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  source?: InputMaybe<SourceOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: source_history */
export type SourceHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "source_history" */
export enum SourceHistorySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "source_history" */
export type SourceHistorySetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type SourceHistoryStddevFields = {
  __typename?: 'SourceHistoryStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "source_history" */
export type SourceHistoryStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type SourceHistoryStddevPopFields = {
  __typename?: 'SourceHistoryStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "source_history" */
export type SourceHistoryStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type SourceHistoryStddevSampFields = {
  __typename?: 'SourceHistoryStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "source_history" */
export type SourceHistoryStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "source_history" */
export type SourceHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SourceHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SourceHistoryStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type SourceHistorySumFields = {
  __typename?: 'SourceHistorySumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "source_history" */
export type SourceHistorySumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "source_history" */
export enum SourceHistoryUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  HistoryId = 'historyId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type SourceHistoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SourceHistoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SourceHistorySetInput>;
  /** filter the rows which have to be updated */
  where: SourceHistoryBoolExp;
};

/** aggregate varPop on columns */
export type SourceHistoryVarPopFields = {
  __typename?: 'SourceHistoryVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "source_history" */
export type SourceHistoryVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type SourceHistoryVarSampFields = {
  __typename?: 'SourceHistoryVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "source_history" */
export type SourceHistoryVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type SourceHistoryVarianceFields = {
  __typename?: 'SourceHistoryVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "source_history" */
export type SourceHistoryVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** input type for incrementing numeric columns in table "source" */
export type SourceIncInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "source" */
export type SourceInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fact?: InputMaybe<FactObjRelInsertInput>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sourceHistories?: InputMaybe<SourceHistoryArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userByUpdatedBy?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type SourceMaxFields = {
  __typename?: 'SourceMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "source" */
export type SourceMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SourceMinFields = {
  __typename?: 'SourceMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "source" */
export type SourceMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "source" */
export type SourceMutationResponse = {
  __typename?: 'SourceMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Source>;
};

/** input type for inserting object relation for remote table "source" */
export type SourceObjRelInsertInput = {
  data: SourceInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<SourceOnConflict>;
};

/** on_conflict condition type for table "source" */
export type SourceOnConflict = {
  constraint: SourceConstraint;
  updateColumns?: Array<SourceUpdateColumn>;
  where?: InputMaybe<SourceBoolExp>;
};

/** Ordering options when selecting data from "source". */
export type SourceOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fact?: InputMaybe<FactOrderBy>;
  factId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originalUrl?: InputMaybe<OrderBy>;
  sourceHistoriesAggregate?: InputMaybe<SourceHistoryAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: source */
export type SourcePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "source" */
export enum SourceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** input type for updating data in table "source" */
export type SourceSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type SourceStddevFields = {
  __typename?: 'SourceStddevFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "source" */
export type SourceStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type SourceStddevPopFields = {
  __typename?: 'SourceStddevPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "source" */
export type SourceStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type SourceStddevSampFields = {
  __typename?: 'SourceStddevSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "source" */
export type SourceStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "source" */
export type SourceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SourceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SourceStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originalUrl?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type SourceSumFields = {
  __typename?: 'SourceSumFields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "source" */
export type SourceSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "source" */
export enum SourceUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  FactId = 'factId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  OriginalUrl = 'originalUrl',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

export type SourceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SourceIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SourceSetInput>;
  /** filter the rows which have to be updated */
  where: SourceBoolExp;
};

/** aggregate varPop on columns */
export type SourceVarPopFields = {
  __typename?: 'SourceVarPopFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "source" */
export type SourceVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type SourceVarSampFields = {
  __typename?: 'SourceVarSampFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "source" */
export type SourceVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type SourceVarianceFields = {
  __typename?: 'SourceVarianceFields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "source" */
export type SourceVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
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
  /** An array relationship */
  claimResourcesByUpdatedBy: Array<Origin>;
  /** An aggregate relationship */
  claimResourcesByUpdatedByAggregate: OriginAggregate;
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
  /** An array relationship */
  factResourcesByUpdatedBy: Array<Source>;
  /** An aggregate relationship */
  factResourcesByUpdatedByAggregate: SourceAggregate;
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
  /** An array relationship */
  origins: Array<Origin>;
  /** An aggregate relationship */
  originsAggregate: OriginAggregate;
  profileImage?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sources: Array<Source>;
  /** An aggregate relationship */
  sourcesAggregate: SourceAggregate;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  userHistories: Array<UserHistory>;
  /** An aggregate relationship */
  userHistoriesAggregate: UserHistoryAggregate;
  username: Scalars['String']['output'];
};


/** columns and relationships of "user" */
export type UserClaimResourcesByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "user" */
export type UserClaimResourcesByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
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
export type UserFactResourcesByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserFactResourcesByUpdatedByAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
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


/** columns and relationships of "user" */
export type UserOriginsArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "user" */
export type UserOriginsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


/** columns and relationships of "user" */
export type UserSourcesArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserSourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserHistoriesArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
};


/** columns and relationships of "user" */
export type UserUserHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserHistoryOrderBy>>;
  where?: InputMaybe<UserHistoryBoolExp>;
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
  claimResourcesByUpdatedBy?: InputMaybe<OriginBoolExp>;
  claimResourcesByUpdatedByAggregate?: InputMaybe<OriginAggregateBoolExp>;
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
  factResourcesByUpdatedBy?: InputMaybe<SourceBoolExp>;
  factResourcesByUpdatedByAggregate?: InputMaybe<SourceAggregateBoolExp>;
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
  origins?: InputMaybe<OriginBoolExp>;
  originsAggregate?: InputMaybe<OriginAggregateBoolExp>;
  profileImage?: InputMaybe<StringComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  sources?: InputMaybe<SourceBoolExp>;
  sourcesAggregate?: InputMaybe<SourceAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userHistories?: InputMaybe<UserHistoryBoolExp>;
  userHistoriesAggregate?: InputMaybe<UserHistoryAggregateBoolExp>;
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
  /** An object relationship */
  user: User;
  username: Scalars['String']['output'];
};

/** aggregated selection of "user_history" */
export type UserHistoryAggregate = {
  __typename?: 'UserHistoryAggregate';
  aggregate?: Maybe<UserHistoryAggregateFields>;
  nodes: Array<UserHistory>;
};

export type UserHistoryAggregateBoolExp = {
  count?: InputMaybe<UserHistoryAggregateBoolExpCount>;
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

/** order by aggregate values of table "user_history" */
export type UserHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserHistoryMaxOrderBy>;
  min?: InputMaybe<UserHistoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_history" */
export type UserHistoryArrRelInsertInput = {
  data: Array<UserHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserHistoryOnConflict>;
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
  user?: InputMaybe<UserBoolExp>;
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
  user?: InputMaybe<UserObjRelInsertInput>;
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

/** order by max() on columns of table "user_history" */
export type UserHistoryMaxOrderBy = {
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
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
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

/** order by min() on columns of table "user_history" */
export type UserHistoryMinOrderBy = {
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
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
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
  user?: InputMaybe<UserOrderBy>;
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
  claimResourcesByUpdatedBy?: InputMaybe<OriginArrRelInsertInput>;
  claims?: InputMaybe<ClaimArrRelInsertInput>;
  claimsByUpdatedBy?: InputMaybe<ClaimArrRelInsertInput>;
  comments?: InputMaybe<CommentArrRelInsertInput>;
  commentsByUpdatedBy?: InputMaybe<CommentArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  factResourcesByUpdatedBy?: InputMaybe<SourceArrRelInsertInput>;
  facts?: InputMaybe<FactArrRelInsertInput>;
  factsByUpdatedBy?: InputMaybe<FactArrRelInsertInput>;
  files?: InputMaybe<FileArrRelInsertInput>;
  filesByUpdatedBy?: InputMaybe<FileArrRelInsertInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  origins?: InputMaybe<OriginArrRelInsertInput>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<SourceArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userHistories?: InputMaybe<UserHistoryArrRelInsertInput>;
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
  claimResourcesByUpdatedByAggregate?: InputMaybe<OriginAggregateOrderBy>;
  claimsAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  claimsByUpdatedByAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentAggregateOrderBy>;
  commentsByUpdatedByAggregate?: InputMaybe<CommentAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  factResourcesByUpdatedByAggregate?: InputMaybe<SourceAggregateOrderBy>;
  factsAggregate?: InputMaybe<FactAggregateOrderBy>;
  factsByUpdatedByAggregate?: InputMaybe<FactAggregateOrderBy>;
  filesAggregate?: InputMaybe<FileAggregateOrderBy>;
  filesByUpdatedByAggregate?: InputMaybe<FileAggregateOrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  originsAggregate?: InputMaybe<OriginAggregateOrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  sourcesAggregate?: InputMaybe<SourceAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userHistoriesAggregate?: InputMaybe<UserHistoryAggregateOrderBy>;
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

export type ClaimAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type FactAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FactSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FactBoolExp>;
  predicate: IntComparisonExp;
};

export type FactHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FactHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FactHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type FileAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileBoolExp>;
  predicate: IntComparisonExp;
};

export type FileHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<FileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileHistoryBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  deleteCategory?: Maybe<CategoryMutationResponse>;
  /** delete single row from the table: "category" */
  deleteCategoryByPk?: Maybe<Category>;
  /** delete data from the table: "claim" */
  deleteClaim?: Maybe<ClaimMutationResponse>;
  /** delete single row from the table: "claim" */
  deleteClaimByPk?: Maybe<Claim>;
  /** delete data from the table: "claim_category" */
  deleteClaimCategory?: Maybe<ClaimCategoryMutationResponse>;
  /** delete single row from the table: "claim_category" */
  deleteClaimCategoryByPk?: Maybe<ClaimCategory>;
  /** delete data from the table: "claim_history" */
  deleteClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** delete single row from the table: "claim_history" */
  deleteClaimHistoryByPk?: Maybe<ClaimHistory>;
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
  /** delete data from the table: "file" */
  deleteFile?: Maybe<FileMutationResponse>;
  /** delete single row from the table: "file" */
  deleteFileByPk?: Maybe<File>;
  /** delete data from the table: "file_history" */
  deleteFileHistory?: Maybe<FileHistoryMutationResponse>;
  /** delete single row from the table: "file_history" */
  deleteFileHistoryByPk?: Maybe<FileHistory>;
  /** delete data from the table: "origin" */
  deleteOrigin?: Maybe<OriginMutationResponse>;
  /** delete single row from the table: "origin" */
  deleteOriginByPk?: Maybe<Origin>;
  /** delete data from the table: "origin_history" */
  deleteOriginHistory?: Maybe<OriginHistoryMutationResponse>;
  /** delete single row from the table: "origin_history" */
  deleteOriginHistoryByPk?: Maybe<OriginHistory>;
  /** delete data from the table: "rating" */
  deleteRating?: Maybe<RatingMutationResponse>;
  /** delete single row from the table: "rating" */
  deleteRatingByPk?: Maybe<Rating>;
  /** delete data from the table: "rating_history" */
  deleteRatingHistory?: Maybe<RatingHistoryMutationResponse>;
  /** delete single row from the table: "rating_history" */
  deleteRatingHistoryByPk?: Maybe<RatingHistory>;
  /** delete data from the table: "source" */
  deleteSource?: Maybe<SourceMutationResponse>;
  /** delete single row from the table: "source" */
  deleteSourceByPk?: Maybe<Source>;
  /** delete data from the table: "source_history" */
  deleteSourceHistory?: Maybe<SourceHistoryMutationResponse>;
  /** delete single row from the table: "source_history" */
  deleteSourceHistoryByPk?: Maybe<SourceHistory>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "user_history" */
  deleteUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** delete single row from the table: "user_history" */
  deleteUserHistoryByPk?: Maybe<UserHistory>;
  /** insert data into the table: "category" */
  insertCategory?: Maybe<CategoryMutationResponse>;
  /** insert a single row into the table: "category" */
  insertCategoryOne?: Maybe<Category>;
  /** insert data into the table: "claim" */
  insertClaim?: Maybe<ClaimMutationResponse>;
  /** insert data into the table: "claim_category" */
  insertClaimCategory?: Maybe<ClaimCategoryMutationResponse>;
  /** insert a single row into the table: "claim_category" */
  insertClaimCategoryOne?: Maybe<ClaimCategory>;
  /** insert data into the table: "claim_history" */
  insertClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** insert a single row into the table: "claim_history" */
  insertClaimHistoryOne?: Maybe<ClaimHistory>;
  /** insert a single row into the table: "claim" */
  insertClaimOne?: Maybe<Claim>;
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
  /** insert data into the table: "file" */
  insertFile?: Maybe<FileMutationResponse>;
  /** insert data into the table: "file_history" */
  insertFileHistory?: Maybe<FileHistoryMutationResponse>;
  /** insert a single row into the table: "file_history" */
  insertFileHistoryOne?: Maybe<FileHistory>;
  /** insert a single row into the table: "file" */
  insertFileOne?: Maybe<File>;
  /** insert data into the table: "origin" */
  insertOrigin?: Maybe<OriginMutationResponse>;
  /** insert data into the table: "origin_history" */
  insertOriginHistory?: Maybe<OriginHistoryMutationResponse>;
  /** insert a single row into the table: "origin_history" */
  insertOriginHistoryOne?: Maybe<OriginHistory>;
  /** insert a single row into the table: "origin" */
  insertOriginOne?: Maybe<Origin>;
  /** insert data into the table: "rating" */
  insertRating?: Maybe<RatingMutationResponse>;
  /** insert data into the table: "rating_history" */
  insertRatingHistory?: Maybe<RatingHistoryMutationResponse>;
  /** insert a single row into the table: "rating_history" */
  insertRatingHistoryOne?: Maybe<RatingHistory>;
  /** insert a single row into the table: "rating" */
  insertRatingOne?: Maybe<Rating>;
  /** insert data into the table: "source" */
  insertSource?: Maybe<SourceMutationResponse>;
  /** insert data into the table: "source_history" */
  insertSourceHistory?: Maybe<SourceHistoryMutationResponse>;
  /** insert a single row into the table: "source_history" */
  insertSourceHistoryOne?: Maybe<SourceHistory>;
  /** insert a single row into the table: "source" */
  insertSourceOne?: Maybe<Source>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert data into the table: "user_history" */
  insertUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** insert a single row into the table: "user_history" */
  insertUserHistoryOne?: Maybe<UserHistory>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "category" */
  updateCategory?: Maybe<CategoryMutationResponse>;
  /** update single row of the table: "category" */
  updateCategoryByPk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  updateCategoryMany?: Maybe<Array<Maybe<CategoryMutationResponse>>>;
  /** update data of the table: "claim" */
  updateClaim?: Maybe<ClaimMutationResponse>;
  /** update single row of the table: "claim" */
  updateClaimByPk?: Maybe<Claim>;
  /** update data of the table: "claim_category" */
  updateClaimCategory?: Maybe<ClaimCategoryMutationResponse>;
  /** update single row of the table: "claim_category" */
  updateClaimCategoryByPk?: Maybe<ClaimCategory>;
  /** update multiples rows of table: "claim_category" */
  updateClaimCategoryMany?: Maybe<Array<Maybe<ClaimCategoryMutationResponse>>>;
  /** update data of the table: "claim_history" */
  updateClaimHistory?: Maybe<ClaimHistoryMutationResponse>;
  /** update single row of the table: "claim_history" */
  updateClaimHistoryByPk?: Maybe<ClaimHistory>;
  /** update multiples rows of table: "claim_history" */
  updateClaimHistoryMany?: Maybe<Array<Maybe<ClaimHistoryMutationResponse>>>;
  /** update multiples rows of table: "claim" */
  updateClaimMany?: Maybe<Array<Maybe<ClaimMutationResponse>>>;
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
  /** update data of the table: "origin" */
  updateOrigin?: Maybe<OriginMutationResponse>;
  /** update single row of the table: "origin" */
  updateOriginByPk?: Maybe<Origin>;
  /** update data of the table: "origin_history" */
  updateOriginHistory?: Maybe<OriginHistoryMutationResponse>;
  /** update single row of the table: "origin_history" */
  updateOriginHistoryByPk?: Maybe<OriginHistory>;
  /** update multiples rows of table: "origin_history" */
  updateOriginHistoryMany?: Maybe<Array<Maybe<OriginHistoryMutationResponse>>>;
  /** update multiples rows of table: "origin" */
  updateOriginMany?: Maybe<Array<Maybe<OriginMutationResponse>>>;
  /** update data of the table: "rating" */
  updateRating?: Maybe<RatingMutationResponse>;
  /** update single row of the table: "rating" */
  updateRatingByPk?: Maybe<Rating>;
  /** update data of the table: "rating_history" */
  updateRatingHistory?: Maybe<RatingHistoryMutationResponse>;
  /** update single row of the table: "rating_history" */
  updateRatingHistoryByPk?: Maybe<RatingHistory>;
  /** update multiples rows of table: "rating_history" */
  updateRatingHistoryMany?: Maybe<Array<Maybe<RatingHistoryMutationResponse>>>;
  /** update multiples rows of table: "rating" */
  updateRatingMany?: Maybe<Array<Maybe<RatingMutationResponse>>>;
  /** update data of the table: "source" */
  updateSource?: Maybe<SourceMutationResponse>;
  /** update single row of the table: "source" */
  updateSourceByPk?: Maybe<Source>;
  /** update data of the table: "source_history" */
  updateSourceHistory?: Maybe<SourceHistoryMutationResponse>;
  /** update single row of the table: "source_history" */
  updateSourceHistoryByPk?: Maybe<SourceHistory>;
  /** update multiples rows of table: "source_history" */
  updateSourceHistoryMany?: Maybe<Array<Maybe<SourceHistoryMutationResponse>>>;
  /** update multiples rows of table: "source" */
  updateSourceMany?: Maybe<Array<Maybe<SourceMutationResponse>>>;
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
};


/** mutation root */
export type Mutation_RootDeleteCategoryArgs = {
  where: CategoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootDeleteClaimCategoryArgs = {
  where: ClaimCategoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClaimCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootDeleteOriginArgs = {
  where: OriginBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOriginByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOriginHistoryArgs = {
  where: OriginHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOriginHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRatingArgs = {
  where: RatingBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRatingByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRatingHistoryArgs = {
  where: RatingHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRatingHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteSourceArgs = {
  where: SourceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteSourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteSourceHistoryArgs = {
  where: SourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteSourceHistoryByPkArgs = {
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
export type Mutation_RootInsertCategoryArgs = {
  objects: Array<CategoryInsertInput>;
  onConflict?: InputMaybe<CategoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCategoryOneArgs = {
  object: CategoryInsertInput;
  onConflict?: InputMaybe<CategoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimArgs = {
  objects: Array<ClaimInsertInput>;
  onConflict?: InputMaybe<ClaimOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimCategoryArgs = {
  objects: Array<ClaimCategoryInsertInput>;
  onConflict?: InputMaybe<ClaimCategoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClaimCategoryOneArgs = {
  object: ClaimCategoryInsertInput;
  onConflict?: InputMaybe<ClaimCategoryOnConflict>;
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
export type Mutation_RootInsertOriginArgs = {
  objects: Array<OriginInsertInput>;
  onConflict?: InputMaybe<OriginOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOriginHistoryArgs = {
  objects: Array<OriginHistoryInsertInput>;
  onConflict?: InputMaybe<OriginHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOriginHistoryOneArgs = {
  object: OriginHistoryInsertInput;
  onConflict?: InputMaybe<OriginHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOriginOneArgs = {
  object: OriginInsertInput;
  onConflict?: InputMaybe<OriginOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingArgs = {
  objects: Array<RatingInsertInput>;
  onConflict?: InputMaybe<RatingOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingHistoryArgs = {
  objects: Array<RatingHistoryInsertInput>;
  onConflict?: InputMaybe<RatingHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingHistoryOneArgs = {
  object: RatingHistoryInsertInput;
  onConflict?: InputMaybe<RatingHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingOneArgs = {
  object: RatingInsertInput;
  onConflict?: InputMaybe<RatingOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSourceArgs = {
  objects: Array<SourceInsertInput>;
  onConflict?: InputMaybe<SourceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSourceHistoryArgs = {
  objects: Array<SourceHistoryInsertInput>;
  onConflict?: InputMaybe<SourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSourceHistoryOneArgs = {
  object: SourceHistoryInsertInput;
  onConflict?: InputMaybe<SourceHistoryOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSourceOneArgs = {
  object: SourceInsertInput;
  onConflict?: InputMaybe<SourceOnConflict>;
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
export type Mutation_RootUpdateCategoryArgs = {
  _set?: InputMaybe<CategorySetInput>;
  where: CategoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCategoryByPkArgs = {
  _set?: InputMaybe<CategorySetInput>;
  pkColumns: CategoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCategoryManyArgs = {
  updates: Array<CategoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimArgs = {
  _inc?: InputMaybe<ClaimIncInput>;
  _set?: InputMaybe<ClaimSetInput>;
  where: ClaimBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimByPkArgs = {
  _inc?: InputMaybe<ClaimIncInput>;
  _set?: InputMaybe<ClaimSetInput>;
  pkColumns: ClaimPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimCategoryArgs = {
  _set?: InputMaybe<ClaimCategorySetInput>;
  where: ClaimCategoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimCategoryByPkArgs = {
  _set?: InputMaybe<ClaimCategorySetInput>;
  pkColumns: ClaimCategoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClaimCategoryManyArgs = {
  updates: Array<ClaimCategoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClaimHistoryArgs = {
  _inc?: InputMaybe<ClaimHistoryIncInput>;
  _set?: InputMaybe<ClaimHistorySetInput>;
  where: ClaimHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClaimHistoryByPkArgs = {
  _inc?: InputMaybe<ClaimHistoryIncInput>;
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
  _inc?: InputMaybe<FactIncInput>;
  _set?: InputMaybe<FactSetInput>;
  where: FactBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactByPkArgs = {
  _inc?: InputMaybe<FactIncInput>;
  _set?: InputMaybe<FactSetInput>;
  pkColumns: FactPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFactHistoryArgs = {
  _inc?: InputMaybe<FactHistoryIncInput>;
  _set?: InputMaybe<FactHistorySetInput>;
  where: FactHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFactHistoryByPkArgs = {
  _inc?: InputMaybe<FactHistoryIncInput>;
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
export type Mutation_RootUpdateOriginArgs = {
  _inc?: InputMaybe<OriginIncInput>;
  _set?: InputMaybe<OriginSetInput>;
  where: OriginBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOriginByPkArgs = {
  _inc?: InputMaybe<OriginIncInput>;
  _set?: InputMaybe<OriginSetInput>;
  pkColumns: OriginPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOriginHistoryArgs = {
  _inc?: InputMaybe<OriginHistoryIncInput>;
  _set?: InputMaybe<OriginHistorySetInput>;
  where: OriginHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOriginHistoryByPkArgs = {
  _inc?: InputMaybe<OriginHistoryIncInput>;
  _set?: InputMaybe<OriginHistorySetInput>;
  pkColumns: OriginHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOriginHistoryManyArgs = {
  updates: Array<OriginHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOriginManyArgs = {
  updates: Array<OriginUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRatingArgs = {
  _set?: InputMaybe<RatingSetInput>;
  where: RatingBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRatingByPkArgs = {
  _set?: InputMaybe<RatingSetInput>;
  pkColumns: RatingPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRatingHistoryArgs = {
  _set?: InputMaybe<RatingHistorySetInput>;
  where: RatingHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRatingHistoryByPkArgs = {
  _set?: InputMaybe<RatingHistorySetInput>;
  pkColumns: RatingHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRatingHistoryManyArgs = {
  updates: Array<RatingHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRatingManyArgs = {
  updates: Array<RatingUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateSourceArgs = {
  _inc?: InputMaybe<SourceIncInput>;
  _set?: InputMaybe<SourceSetInput>;
  where: SourceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateSourceByPkArgs = {
  _inc?: InputMaybe<SourceIncInput>;
  _set?: InputMaybe<SourceSetInput>;
  pkColumns: SourcePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateSourceHistoryArgs = {
  _inc?: InputMaybe<SourceHistoryIncInput>;
  _set?: InputMaybe<SourceHistorySetInput>;
  where: SourceHistoryBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateSourceHistoryByPkArgs = {
  _inc?: InputMaybe<SourceHistoryIncInput>;
  _set?: InputMaybe<SourceHistorySetInput>;
  pkColumns: SourceHistoryPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateSourceHistoryManyArgs = {
  updates: Array<SourceHistoryUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateSourceManyArgs = {
  updates: Array<SourceUpdates>;
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

export type OriginAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OriginSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OriginBoolExp>;
  predicate: IntComparisonExp;
};

export type OriginHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OriginHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OriginHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  categoryAggregate: CategoryAggregate;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** fetch data from the table: "claim" */
  claim: Array<Claim>;
  /** fetch aggregated fields from the table: "claim" */
  claimAggregate: ClaimAggregate;
  /** fetch data from the table: "claim" using primary key columns */
  claimByPk?: Maybe<Claim>;
  /** fetch data from the table: "claim_category" */
  claimCategory: Array<ClaimCategory>;
  /** fetch aggregated fields from the table: "claim_category" */
  claimCategoryAggregate: ClaimCategoryAggregate;
  /** fetch data from the table: "claim_category" using primary key columns */
  claimCategoryByPk?: Maybe<ClaimCategory>;
  /** fetch data from the table: "claim_history" */
  claimHistory: Array<ClaimHistory>;
  /** fetch aggregated fields from the table: "claim_history" */
  claimHistoryAggregate: ClaimHistoryAggregate;
  /** fetch data from the table: "claim_history" using primary key columns */
  claimHistoryByPk?: Maybe<ClaimHistory>;
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
  /** fetch data from the table: "origin" */
  origin: Array<Origin>;
  /** fetch aggregated fields from the table: "origin" */
  originAggregate: OriginAggregate;
  /** fetch data from the table: "origin" using primary key columns */
  originByPk?: Maybe<Origin>;
  /** fetch data from the table: "origin_history" */
  originHistory: Array<OriginHistory>;
  /** fetch aggregated fields from the table: "origin_history" */
  originHistoryAggregate: OriginHistoryAggregate;
  /** fetch data from the table: "origin_history" using primary key columns */
  originHistoryByPk?: Maybe<OriginHistory>;
  /** fetch data from the table: "rating" */
  rating: Array<Rating>;
  /** fetch aggregated fields from the table: "rating" */
  ratingAggregate: RatingAggregate;
  /** fetch data from the table: "rating" using primary key columns */
  ratingByPk?: Maybe<Rating>;
  /** fetch data from the table: "rating_history" */
  ratingHistory: Array<RatingHistory>;
  /** fetch aggregated fields from the table: "rating_history" */
  ratingHistoryAggregate: RatingHistoryAggregate;
  /** fetch data from the table: "rating_history" using primary key columns */
  ratingHistoryByPk?: Maybe<RatingHistory>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  sourceAggregate: SourceAggregate;
  /** fetch data from the table: "source" using primary key columns */
  sourceByPk?: Maybe<Source>;
  /** fetch data from the table: "source_history" */
  sourceHistory: Array<SourceHistory>;
  /** fetch aggregated fields from the table: "source_history" */
  sourceHistoryAggregate: SourceHistoryAggregate;
  /** fetch data from the table: "source_history" using primary key columns */
  sourceHistoryByPk?: Maybe<SourceHistory>;
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
};


export type Query_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};


export type Query_RootCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};


export type Query_RootCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type Query_RootClaimCategoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


export type Query_RootClaimCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


export type Query_RootClaimCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type Query_RootOriginArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


export type Query_RootOriginAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


export type Query_RootOriginByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOriginHistoryArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


export type Query_RootOriginHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


export type Query_RootOriginHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootRatingArgs = {
  distinctOn?: InputMaybe<Array<RatingSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingOrderBy>>;
  where?: InputMaybe<RatingBoolExp>;
};


export type Query_RootRatingAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingOrderBy>>;
  where?: InputMaybe<RatingBoolExp>;
};


export type Query_RootRatingByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRatingHistoryArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


export type Query_RootRatingHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


export type Query_RootRatingHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Query_RootSourceArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


export type Query_RootSourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


export type Query_RootSourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


export type Query_RootSourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


export type Query_RootSourceHistoryByPkArgs = {
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

export type RatingHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RatingHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RatingHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type SourceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SourceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SourceBoolExp>;
  predicate: IntComparisonExp;
};

export type SourceHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SourceHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SourceHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  categoryAggregate: CategoryAggregate;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  categoryStream: Array<Category>;
  /** fetch data from the table: "claim" */
  claim: Array<Claim>;
  /** fetch aggregated fields from the table: "claim" */
  claimAggregate: ClaimAggregate;
  /** fetch data from the table: "claim" using primary key columns */
  claimByPk?: Maybe<Claim>;
  /** fetch data from the table: "claim_category" */
  claimCategory: Array<ClaimCategory>;
  /** fetch aggregated fields from the table: "claim_category" */
  claimCategoryAggregate: ClaimCategoryAggregate;
  /** fetch data from the table: "claim_category" using primary key columns */
  claimCategoryByPk?: Maybe<ClaimCategory>;
  /** fetch data from the table in a streaming manner: "claim_category" */
  claimCategoryStream: Array<ClaimCategory>;
  /** fetch data from the table: "claim_history" */
  claimHistory: Array<ClaimHistory>;
  /** fetch aggregated fields from the table: "claim_history" */
  claimHistoryAggregate: ClaimHistoryAggregate;
  /** fetch data from the table: "claim_history" using primary key columns */
  claimHistoryByPk?: Maybe<ClaimHistory>;
  /** fetch data from the table in a streaming manner: "claim_history" */
  claimHistoryStream: Array<ClaimHistory>;
  /** fetch data from the table in a streaming manner: "claim" */
  claimStream: Array<Claim>;
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
  /** fetch data from the table: "origin" */
  origin: Array<Origin>;
  /** fetch aggregated fields from the table: "origin" */
  originAggregate: OriginAggregate;
  /** fetch data from the table: "origin" using primary key columns */
  originByPk?: Maybe<Origin>;
  /** fetch data from the table: "origin_history" */
  originHistory: Array<OriginHistory>;
  /** fetch aggregated fields from the table: "origin_history" */
  originHistoryAggregate: OriginHistoryAggregate;
  /** fetch data from the table: "origin_history" using primary key columns */
  originHistoryByPk?: Maybe<OriginHistory>;
  /** fetch data from the table in a streaming manner: "origin_history" */
  originHistoryStream: Array<OriginHistory>;
  /** fetch data from the table in a streaming manner: "origin" */
  originStream: Array<Origin>;
  /** fetch data from the table: "rating" */
  rating: Array<Rating>;
  /** fetch aggregated fields from the table: "rating" */
  ratingAggregate: RatingAggregate;
  /** fetch data from the table: "rating" using primary key columns */
  ratingByPk?: Maybe<Rating>;
  /** fetch data from the table: "rating_history" */
  ratingHistory: Array<RatingHistory>;
  /** fetch aggregated fields from the table: "rating_history" */
  ratingHistoryAggregate: RatingHistoryAggregate;
  /** fetch data from the table: "rating_history" using primary key columns */
  ratingHistoryByPk?: Maybe<RatingHistory>;
  /** fetch data from the table in a streaming manner: "rating_history" */
  ratingHistoryStream: Array<RatingHistory>;
  /** fetch data from the table in a streaming manner: "rating" */
  ratingStream: Array<Rating>;
  /** fetch data from the table: "source" */
  source: Array<Source>;
  /** fetch aggregated fields from the table: "source" */
  sourceAggregate: SourceAggregate;
  /** fetch data from the table: "source" using primary key columns */
  sourceByPk?: Maybe<Source>;
  /** fetch data from the table: "source_history" */
  sourceHistory: Array<SourceHistory>;
  /** fetch aggregated fields from the table: "source_history" */
  sourceHistoryAggregate: SourceHistoryAggregate;
  /** fetch data from the table: "source_history" using primary key columns */
  sourceHistoryByPk?: Maybe<SourceHistory>;
  /** fetch data from the table in a streaming manner: "source_history" */
  sourceHistoryStream: Array<SourceHistory>;
  /** fetch data from the table in a streaming manner: "source" */
  sourceStream: Array<Source>;
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
};


export type Subscription_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};


export type Subscription_RootCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};


export type Subscription_RootCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CategoryStreamCursorInput>>;
  where?: InputMaybe<CategoryBoolExp>;
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


export type Subscription_RootClaimCategoryArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


export type Subscription_RootClaimCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


export type Subscription_RootClaimCategoryByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootClaimCategoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimCategoryStreamCursorInput>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
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


export type Subscription_RootClaimStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ClaimStreamCursorInput>>;
  where?: InputMaybe<ClaimBoolExp>;
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


export type Subscription_RootOriginArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


export type Subscription_RootOriginAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginOrderBy>>;
  where?: InputMaybe<OriginBoolExp>;
};


export type Subscription_RootOriginByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOriginHistoryArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


export type Subscription_RootOriginHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<OriginHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OriginHistoryOrderBy>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


export type Subscription_RootOriginHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootOriginHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OriginHistoryStreamCursorInput>>;
  where?: InputMaybe<OriginHistoryBoolExp>;
};


export type Subscription_RootOriginStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OriginStreamCursorInput>>;
  where?: InputMaybe<OriginBoolExp>;
};


export type Subscription_RootRatingArgs = {
  distinctOn?: InputMaybe<Array<RatingSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingOrderBy>>;
  where?: InputMaybe<RatingBoolExp>;
};


export type Subscription_RootRatingAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingOrderBy>>;
  where?: InputMaybe<RatingBoolExp>;
};


export type Subscription_RootRatingByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRatingHistoryArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


export type Subscription_RootRatingHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingHistoryOrderBy>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


export type Subscription_RootRatingHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootRatingHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RatingHistoryStreamCursorInput>>;
  where?: InputMaybe<RatingHistoryBoolExp>;
};


export type Subscription_RootRatingStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RatingStreamCursorInput>>;
  where?: InputMaybe<RatingBoolExp>;
};


export type Subscription_RootSourceArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


export type Subscription_RootSourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceOrderBy>>;
  where?: InputMaybe<SourceBoolExp>;
};


export type Subscription_RootSourceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSourceHistoryArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


export type Subscription_RootSourceHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceHistorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SourceHistoryOrderBy>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


export type Subscription_RootSourceHistoryByPkArgs = {
  historyId: Scalars['uuid']['input'];
};


export type Subscription_RootSourceHistoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SourceHistoryStreamCursorInput>>;
  where?: InputMaybe<SourceHistoryBoolExp>;
};


export type Subscription_RootSourceStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SourceStreamCursorInput>>;
  where?: InputMaybe<SourceBoolExp>;
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

export type UserHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type InsertClaimMutationVariables = Exact<{
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  origins?: InputMaybe<Array<OriginInsertInput> | OriginInsertInput>;
}>;


export type InsertClaimMutation = { __typename?: 'mutation_root', insertClaim?: { __typename?: 'ClaimMutationResponse', returning: Array<{ __typename?: 'Claim', id: any, createdAt?: any | null, updatedAt?: any | null }> } | null };

export type GetFileByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetFileByIdQuery = { __typename?: 'query_root', file?: { __typename?: 'File', id: any, eTag: string, mimeType: string, name: string, size: number, updatedAt?: any | null } | null };

export type InsertFileMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  createdBy: Scalars['uuid']['input'];
}>;


export type InsertFileMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null };


export const InsertClaimDocument = gql`
    mutation InsertClaim($submitterNotes: String = "", $origins: [OriginInsertInput!] = []) {
  insertClaim(
    objects: {submitterNotes: $submitterNotes, origins: {data: $origins}}
  ) {
    returning {
      id
      createdAt
      updatedAt
    }
  }
}
    `;
export const GetFileByIdDocument = gql`
    query getFileById($id: uuid!) {
  file: fileByPk(id: $id) {
    id
    eTag
    mimeType
    name
    size
    updatedAt
  }
}
    `;
export const InsertFileDocument = gql`
    mutation insertFile($id: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $createdBy: uuid!) {
  insertFileOne(
    object: {id: $id, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size, createdBy: $createdBy}
  ) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    InsertClaim(variables?: InsertClaimMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertClaimMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertClaimMutation>(InsertClaimDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertClaim', 'mutation', variables);
    },
    getFileById(variables: GetFileByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFileByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFileByIdQuery>(GetFileByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFileById', 'query', variables);
    },
    insertFile(variables: InsertFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileMutation>(InsertFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFile', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;