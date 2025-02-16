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
  check_worth_category: { input: any; output: any; }
  claim_status: { input: any; output: any; }
  float8: { input: any; output: any; }
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

export type BlockRoomMessageOutput = {
  __typename?: 'BlockRoomMessageOutput';
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'Category';
  /** An aggregate relationship */
  claimCategoriesAggregate: ClaimCategoryAggregate;
  /** An array relationship */
  claim_categories: Array<ClaimCategory>;
  labelDe: Scalars['String']['output'];
  labelEn: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "category" */
export type CategoryClaimCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


/** columns and relationships of "category" */
export type CategoryClaim_CategoriesArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
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
  claim_categories?: InputMaybe<ClaimCategoryBoolExp>;
  claim_categoriesAggregate?: InputMaybe<ClaimCategoryAggregateBoolExp>;
  labelDe?: InputMaybe<StringComparisonExp>;
  labelEn?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "category" */
export enum CategoryConstraint {
  /** unique or primary key constraint on columns "name" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type CategoryInsertInput = {
  claim_categories?: InputMaybe<ClaimCategoryArrRelInsertInput>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CategoryMaxFields = {
  __typename?: 'CategoryMaxFields';
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CategoryMinFields = {
  __typename?: 'CategoryMinFields';
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "category" */
export type CategoryMutationResponse = {
  __typename?: 'CategoryMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type CategoryObjRelInsertInput = {
  data: CategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** on_conflict condition type for table "category" */
export type CategoryOnConflict = {
  constraint: CategoryConstraint;
  updateColumns?: Array<CategoryUpdateColumn>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** Ordering options when selecting data from "category". */
export type CategoryOrderBy = {
  claim_categoriesAggregate?: InputMaybe<ClaimCategoryAggregateOrderBy>;
  labelDe?: InputMaybe<OrderBy>;
  labelEn?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: category */
export type CategoryPkColumnsInput = {
  name: Scalars['String']['input'];
};

/** select columns of table "category" */
export enum CategorySelectColumn {
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type CategorySetInput = {
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "category" */
export enum CategoryUpdateColumn {
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

export type CategoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategorySetInput>;
  /** filter the rows which have to be updated */
  where: CategoryBoolExp;
};

/** Role Based Access Channels  */
export type Channel = {
  __typename?: 'Channel';
  archived: Scalars['Boolean']['output'];
  descriptionDe: Scalars['String']['output'];
  descriptionEn: Scalars['String']['output'];
  fileId?: Maybe<Scalars['uuid']['output']>;
  internal: Scalars['Boolean']['output'];
  labelDe: Scalars['String']['output'];
  labelEn: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "channel" */
export type ChannelAggregate = {
  __typename?: 'ChannelAggregate';
  aggregate?: Maybe<ChannelAggregateFields>;
  nodes: Array<Channel>;
};

/** aggregate fields of "channel" */
export type ChannelAggregateFields = {
  __typename?: 'ChannelAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ChannelMaxFields>;
  min?: Maybe<ChannelMinFields>;
};


/** aggregate fields of "channel" */
export type ChannelAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ChannelSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "channel". All fields are combined with a logical 'AND'. */
export type ChannelBoolExp = {
  _and?: InputMaybe<Array<ChannelBoolExp>>;
  _not?: InputMaybe<ChannelBoolExp>;
  _or?: InputMaybe<Array<ChannelBoolExp>>;
  archived?: InputMaybe<BooleanComparisonExp>;
  descriptionDe?: InputMaybe<StringComparisonExp>;
  descriptionEn?: InputMaybe<StringComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  internal?: InputMaybe<BooleanComparisonExp>;
  labelDe?: InputMaybe<StringComparisonExp>;
  labelEn?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "channel" */
export enum ChannelConstraint {
  /** unique or primary key constraint on columns "name" */
  ChannelPkey = 'channel_pkey'
}

/** input type for inserting data into table "channel" */
export type ChannelInsertInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionDe?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ChannelMaxFields = {
  __typename?: 'ChannelMaxFields';
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ChannelMinFields = {
  __typename?: 'ChannelMinFields';
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "channel" */
export type ChannelMutationResponse = {
  __typename?: 'ChannelMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Channel>;
};

/** on_conflict condition type for table "channel" */
export type ChannelOnConflict = {
  constraint: ChannelConstraint;
  updateColumns?: Array<ChannelUpdateColumn>;
  where?: InputMaybe<ChannelBoolExp>;
};

/** Ordering options when selecting data from "channel". */
export type ChannelOrderBy = {
  archived?: InputMaybe<OrderBy>;
  descriptionDe?: InputMaybe<OrderBy>;
  descriptionEn?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  labelDe?: InputMaybe<OrderBy>;
  labelEn?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: channel */
export type ChannelPkColumnsInput = {
  name: Scalars['String']['input'];
};

/** select columns of table "channel" */
export enum ChannelSelectColumn {
  /** column name */
  Archived = 'archived',
  /** column name */
  DescriptionDe = 'descriptionDe',
  /** column name */
  DescriptionEn = 'descriptionEn',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Internal = 'internal',
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "channel" */
export type ChannelSetInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionDe?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "channel" */
export type ChannelStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ChannelStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ChannelStreamCursorValueInput = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionDe?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "channel" */
export enum ChannelUpdateColumn {
  /** column name */
  Archived = 'archived',
  /** column name */
  DescriptionDe = 'descriptionDe',
  /** column name */
  DescriptionEn = 'descriptionEn',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Internal = 'internal',
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

export type ChannelUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ChannelSetInput>;
  /** filter the rows which have to be updated */
  where: ChannelBoolExp;
};

/** Boolean expression to compare columns of type "check_worth_category". All fields are combined with logical 'AND'. */
export type CheckWorthCategoryComparisonExp = {
  _eq?: InputMaybe<Scalars['check_worth_category']['input']>;
  _gt?: InputMaybe<Scalars['check_worth_category']['input']>;
  _gte?: InputMaybe<Scalars['check_worth_category']['input']>;
  _in?: InputMaybe<Array<Scalars['check_worth_category']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['check_worth_category']['input']>;
  _lte?: InputMaybe<Scalars['check_worth_category']['input']>;
  _neq?: InputMaybe<Scalars['check_worth_category']['input']>;
  _nin?: InputMaybe<Array<Scalars['check_worth_category']['input']>>;
};

export type CheckbotResponse = {
  __typename?: 'CheckbotResponse';
  data?: Maybe<Array<Maybe<DataListItem>>>;
  type: CheckbotResponseType;
};

export enum CheckbotResponseType {
  Factcheck = 'factcheck',
  Learningmaterial = 'learningmaterial',
  Unknown = 'unknown'
}

/** columns and relationships of "checkworthiness" */
export type Checkworthiness = {
  __typename?: 'Checkworthiness';
  category: Scalars['check_worth_category']['output'];
  claimId: Scalars['uuid']['output'];
  confidence: Scalars['float8']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "checkworthiness" */
export type CheckworthinessAggregate = {
  __typename?: 'CheckworthinessAggregate';
  aggregate?: Maybe<CheckworthinessAggregateFields>;
  nodes: Array<Checkworthiness>;
};

/** aggregate fields of "checkworthiness" */
export type CheckworthinessAggregateFields = {
  __typename?: 'CheckworthinessAggregateFields';
  avg?: Maybe<CheckworthinessAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CheckworthinessMaxFields>;
  min?: Maybe<CheckworthinessMinFields>;
  stddev?: Maybe<CheckworthinessStddevFields>;
  stddevPop?: Maybe<CheckworthinessStddevPopFields>;
  stddevSamp?: Maybe<CheckworthinessStddevSampFields>;
  sum?: Maybe<CheckworthinessSumFields>;
  varPop?: Maybe<CheckworthinessVarPopFields>;
  varSamp?: Maybe<CheckworthinessVarSampFields>;
  variance?: Maybe<CheckworthinessVarianceFields>;
};


/** aggregate fields of "checkworthiness" */
export type CheckworthinessAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CheckworthinessSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type CheckworthinessAvgFields = {
  __typename?: 'CheckworthinessAvgFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "checkworthiness". All fields are combined with a logical 'AND'. */
export type CheckworthinessBoolExp = {
  _and?: InputMaybe<Array<CheckworthinessBoolExp>>;
  _not?: InputMaybe<CheckworthinessBoolExp>;
  _or?: InputMaybe<Array<CheckworthinessBoolExp>>;
  category?: InputMaybe<CheckWorthCategoryComparisonExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  confidence?: InputMaybe<Float8ComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "checkworthiness" */
export enum CheckworthinessConstraint {
  /** unique or primary key constraint on columns "claim_id" */
  CheckworthinessClaimIdKey = 'checkworthiness_claim_id_key',
  /** unique or primary key constraint on columns "id" */
  CheckworthinessPkey = 'checkworthiness_pkey'
}

/** input type for incrementing numeric columns in table "checkworthiness" */
export type CheckworthinessIncInput = {
  confidence?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "checkworthiness" */
export type CheckworthinessInsertInput = {
  category?: InputMaybe<Scalars['check_worth_category']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  confidence?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type CheckworthinessMaxFields = {
  __typename?: 'CheckworthinessMaxFields';
  category?: Maybe<Scalars['check_worth_category']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  confidence?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type CheckworthinessMinFields = {
  __typename?: 'CheckworthinessMinFields';
  category?: Maybe<Scalars['check_worth_category']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  confidence?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "checkworthiness" */
export type CheckworthinessMutationResponse = {
  __typename?: 'CheckworthinessMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Checkworthiness>;
};

/** input type for inserting object relation for remote table "checkworthiness" */
export type CheckworthinessObjRelInsertInput = {
  data: CheckworthinessInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CheckworthinessOnConflict>;
};

/** on_conflict condition type for table "checkworthiness" */
export type CheckworthinessOnConflict = {
  constraint: CheckworthinessConstraint;
  updateColumns?: Array<CheckworthinessUpdateColumn>;
  where?: InputMaybe<CheckworthinessBoolExp>;
};

/** Ordering options when selecting data from "checkworthiness". */
export type CheckworthinessOrderBy = {
  category?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  confidence?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: checkworthiness */
export type CheckworthinessPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "checkworthiness" */
export enum CheckworthinessSelectColumn {
  /** column name */
  Category = 'category',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Confidence = 'confidence',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "checkworthiness" */
export type CheckworthinessSetInput = {
  category?: InputMaybe<Scalars['check_worth_category']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  confidence?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type CheckworthinessStddevFields = {
  __typename?: 'CheckworthinessStddevFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type CheckworthinessStddevPopFields = {
  __typename?: 'CheckworthinessStddevPopFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type CheckworthinessStddevSampFields = {
  __typename?: 'CheckworthinessStddevSampFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "checkworthiness" */
export type CheckworthinessStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CheckworthinessStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CheckworthinessStreamCursorValueInput = {
  category?: InputMaybe<Scalars['check_worth_category']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  confidence?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type CheckworthinessSumFields = {
  __typename?: 'CheckworthinessSumFields';
  confidence?: Maybe<Scalars['float8']['output']>;
};

/** update columns of table "checkworthiness" */
export enum CheckworthinessUpdateColumn {
  /** column name */
  Category = 'category',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Confidence = 'confidence',
  /** column name */
  Id = 'id'
}

export type CheckworthinessUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CheckworthinessIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CheckworthinessSetInput>;
  /** filter the rows which have to be updated */
  where: CheckworthinessBoolExp;
};

/** aggregate varPop on columns */
export type CheckworthinessVarPopFields = {
  __typename?: 'CheckworthinessVarPopFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type CheckworthinessVarSampFields = {
  __typename?: 'CheckworthinessVarSampFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CheckworthinessVarianceFields = {
  __typename?: 'CheckworthinessVarianceFields';
  confidence?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "claim" */
export type Claim = {
  __typename?: 'Claim';
  /** An object relationship */
  checkworthiness?: Maybe<Checkworthiness>;
  /** An array relationship */
  claimCategories: Array<ClaimCategory>;
  /** An aggregate relationship */
  claimCategoriesAggregate: ClaimCategoryAggregate;
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
  /** An object relationship */
  createdByUser?: Maybe<User>;
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  eventsAggregate: EventAggregate;
  /** An array relationship */
  facts: Array<Fact>;
  /** An aggregate relationship */
  factsAggregate: FactAggregate;
  id: Scalars['uuid']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  origins: Array<Origin>;
  /** An aggregate relationship */
  originsAggregate: OriginAggregate;
  processId?: Maybe<Scalars['bigint']['output']>;
  publishingUrl?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  ratingLabel?: Maybe<RatingLabel>;
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  status: Scalars['claim_status']['output'];
  submitterNotes?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  updatedByUser?: Maybe<User>;
  /** An array relationship */
  userClaimStatuses: Array<UserClaimStatus>;
  /** An aggregate relationship */
  userClaimStatusesAggregate: UserClaimStatusAggregate;
};


/** columns and relationships of "claim" */
export type ClaimClaimCategoriesArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimClaimCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimCategoryOrderBy>>;
  where?: InputMaybe<ClaimCategoryBoolExp>;
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
export type ClaimEventsArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
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


/** columns and relationships of "claim" */
export type ClaimUserClaimStatusesArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};


/** columns and relationships of "claim" */
export type ClaimUserClaimStatusesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};

/** aggregated selection of "claim" */
export type ClaimAggregate = {
  __typename?: 'ClaimAggregate';
  aggregate?: Maybe<ClaimAggregateFields>;
  nodes: Array<Claim>;
};

export type ClaimAggregateBoolExp = {
  bool_and?: InputMaybe<ClaimAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<ClaimAggregateBoolExpBool_Or>;
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
  checkworthiness?: InputMaybe<CheckworthinessBoolExp>;
  claimCategories?: InputMaybe<ClaimCategoryBoolExp>;
  claimCategoriesAggregate?: InputMaybe<ClaimCategoryAggregateBoolExp>;
  claimHistories?: InputMaybe<ClaimHistoryBoolExp>;
  claimHistoriesAggregate?: InputMaybe<ClaimHistoryAggregateBoolExp>;
  comments?: InputMaybe<CommentBoolExp>;
  commentsAggregate?: InputMaybe<CommentAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  createdByUser?: InputMaybe<UserBoolExp>;
  events?: InputMaybe<EventBoolExp>;
  eventsAggregate?: InputMaybe<EventAggregateBoolExp>;
  facts?: InputMaybe<FactBoolExp>;
  factsAggregate?: InputMaybe<FactAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  internal?: InputMaybe<BooleanComparisonExp>;
  origins?: InputMaybe<OriginBoolExp>;
  originsAggregate?: InputMaybe<OriginAggregateBoolExp>;
  processId?: InputMaybe<BigintComparisonExp>;
  publishingUrl?: InputMaybe<StringComparisonExp>;
  ratingLabel?: InputMaybe<RatingLabelBoolExp>;
  ratingLabelName?: InputMaybe<StringComparisonExp>;
  ratingStatement?: InputMaybe<StringComparisonExp>;
  ratingSummary?: InputMaybe<StringComparisonExp>;
  shortId?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<ClaimStatusComparisonExp>;
  submitterNotes?: InputMaybe<StringComparisonExp>;
  synopsis?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  updatedByUser?: InputMaybe<UserBoolExp>;
  userClaimStatuses?: InputMaybe<UserClaimStatusBoolExp>;
  userClaimStatusesAggregate?: InputMaybe<UserClaimStatusAggregateBoolExp>;
};

/** columns and relationships of "claim_category" */
export type ClaimCategory = {
  __typename?: 'ClaimCategory';
  /** An object relationship */
  category: Category;
  categoryName: Scalars['String']['output'];
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<User>;
};

/** aggregated selection of "claim_category" */
export type ClaimCategoryAggregate = {
  __typename?: 'ClaimCategoryAggregate';
  aggregate?: Maybe<ClaimCategoryAggregateFields>;
  nodes: Array<ClaimCategory>;
};

export type ClaimCategoryAggregateBoolExp = {
  count?: InputMaybe<ClaimCategoryAggregateBoolExpCount>;
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

/** order by aggregate values of table "claim_category" */
export type ClaimCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ClaimCategoryMaxOrderBy>;
  min?: InputMaybe<ClaimCategoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "claim_category" */
export type ClaimCategoryArrRelInsertInput = {
  data: Array<ClaimCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ClaimCategoryOnConflict>;
};

/** Boolean expression to filter rows from the table "claim_category". All fields are combined with a logical 'AND'. */
export type ClaimCategoryBoolExp = {
  _and?: InputMaybe<Array<ClaimCategoryBoolExp>>;
  _not?: InputMaybe<ClaimCategoryBoolExp>;
  _or?: InputMaybe<Array<ClaimCategoryBoolExp>>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userByUpdatedBy?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "claim_category" */
export enum ClaimCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ClaimCategoryPkey = 'claim_category_pkey'
}

/** input type for inserting data into table "claim_category" */
export type ClaimCategoryInsertInput = {
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
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
export type ClaimCategoryMaxFields = {
  __typename?: 'ClaimCategoryMaxFields';
  categoryName?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "claim_category" */
export type ClaimCategoryMaxOrderBy = {
  categoryName?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ClaimCategoryMinFields = {
  __typename?: 'ClaimCategoryMinFields';
  categoryName?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "claim_category" */
export type ClaimCategoryMinOrderBy = {
  categoryName?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
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
  category?: InputMaybe<CategoryOrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userByUpdatedBy?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: claim_category */
export type ClaimCategoryPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "claim_category" */
export enum ClaimCategorySelectColumn {
  /** column name */
  CategoryName = 'categoryName',
  /** column name */
  ClaimId = 'claimId',
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

/** input type for updating data in table "claim_category" */
export type ClaimCategorySetInput = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
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
  categoryName?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "claim_category" */
export enum ClaimCategoryUpdateColumn {
  /** column name */
  CategoryName = 'categoryName',
  /** column name */
  ClaimId = 'claimId',
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
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
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
  ratingLabelName?: InputMaybe<StringComparisonExp>;
  ratingStatement?: InputMaybe<StringComparisonExp>;
  ratingSummary?: InputMaybe<StringComparisonExp>;
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
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
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
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
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
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
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
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
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
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
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
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
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
  RatingLabelName = 'ratingLabelName',
  /** column name */
  RatingStatement = 'ratingStatement',
  /** column name */
  RatingSummary = 'ratingSummary',
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
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
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
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
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
  RatingLabelName = 'ratingLabelName',
  /** column name */
  RatingStatement = 'ratingStatement',
  /** column name */
  RatingSummary = 'ratingSummary',
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
  checkworthiness?: InputMaybe<CheckworthinessObjRelInsertInput>;
  claimCategories?: InputMaybe<ClaimCategoryArrRelInsertInput>;
  claimHistories?: InputMaybe<ClaimHistoryArrRelInsertInput>;
  comments?: InputMaybe<CommentArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
  events?: InputMaybe<EventArrRelInsertInput>;
  facts?: InputMaybe<FactArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  origins?: InputMaybe<OriginArrRelInsertInput>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  publishingUrl?: InputMaybe<Scalars['String']['input']>;
  ratingLabel?: InputMaybe<RatingLabelObjRelInsertInput>;
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
  shortId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['claim_status']['input']>;
  submitterNotes?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
  userClaimStatuses?: InputMaybe<UserClaimStatusArrRelInsertInput>;
};

/** aggregate max on columns */
export type ClaimMaxFields = {
  __typename?: 'ClaimMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processId?: Maybe<Scalars['bigint']['output']>;
  publishingUrl?: Maybe<Scalars['String']['output']>;
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
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
  publishingUrl?: InputMaybe<OrderBy>;
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
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
  publishingUrl?: Maybe<Scalars['String']['output']>;
  ratingLabelName?: Maybe<Scalars['String']['output']>;
  ratingStatement?: Maybe<Scalars['String']['output']>;
  ratingSummary?: Maybe<Scalars['String']['output']>;
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
  publishingUrl?: InputMaybe<OrderBy>;
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
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
  checkworthiness?: InputMaybe<CheckworthinessOrderBy>;
  claimCategoriesAggregate?: InputMaybe<ClaimCategoryAggregateOrderBy>;
  claimHistoriesAggregate?: InputMaybe<ClaimHistoryAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  createdByUser?: InputMaybe<UserOrderBy>;
  eventsAggregate?: InputMaybe<EventAggregateOrderBy>;
  factsAggregate?: InputMaybe<FactAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  originsAggregate?: InputMaybe<OriginAggregateOrderBy>;
  processId?: InputMaybe<OrderBy>;
  publishingUrl?: InputMaybe<OrderBy>;
  ratingLabel?: InputMaybe<RatingLabelOrderBy>;
  ratingLabelName?: InputMaybe<OrderBy>;
  ratingStatement?: InputMaybe<OrderBy>;
  ratingSummary?: InputMaybe<OrderBy>;
  shortId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  submitterNotes?: InputMaybe<OrderBy>;
  synopsis?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  updatedByUser?: InputMaybe<UserOrderBy>;
  userClaimStatusesAggregate?: InputMaybe<UserClaimStatusAggregateOrderBy>;
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
  Internal = 'internal',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  PublishingUrl = 'publishingUrl',
  /** column name */
  RatingLabelName = 'ratingLabelName',
  /** column name */
  RatingStatement = 'ratingStatement',
  /** column name */
  RatingSummary = 'ratingSummary',
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

/** select "claimAggregateBoolExpBool_andArgumentsColumns" columns of table "claim" */
export enum ClaimSelectColumnClaimAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Internal = 'internal'
}

/** select "claimAggregateBoolExpBool_orArgumentsColumns" columns of table "claim" */
export enum ClaimSelectColumnClaimAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Internal = 'internal'
}

/** input type for updating data in table "claim" */
export type ClaimSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  publishingUrl?: InputMaybe<Scalars['String']['input']>;
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
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
  internal?: InputMaybe<Scalars['Boolean']['input']>;
  processId?: InputMaybe<Scalars['bigint']['input']>;
  publishingUrl?: InputMaybe<Scalars['String']['input']>;
  ratingLabelName?: InputMaybe<Scalars['String']['input']>;
  ratingStatement?: InputMaybe<Scalars['String']['input']>;
  ratingSummary?: InputMaybe<Scalars['String']['input']>;
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
  Internal = 'internal',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  PublishingUrl = 'publishingUrl',
  /** column name */
  RatingLabelName = 'ratingLabelName',
  /** column name */
  RatingStatement = 'ratingStatement',
  /** column name */
  RatingSummary = 'ratingSummary',
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
  blocked: Scalars['Boolean']['output'];
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy: Scalars['uuid']['output'];
  /** An object relationship */
  createdByUser: User;
  deleted: Scalars['Boolean']['output'];
  displayedContent?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  /** An array relationship */
  thread: Array<Comment>;
  /** An aggregate relationship */
  threadAggregate: CommentAggregate;
  threadId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  updatedByUser?: Maybe<User>;
  /** An array relationship */
  userReactions: Array<CommentUserReactions>;
  /** An aggregate relationship */
  userReactionsAggregate: CommentUserReactionsAggregate;
};


/** columns and relationships of "comment" */
export type CommentThreadArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentThreadAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentOrderBy>>;
  where?: InputMaybe<CommentBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentUserReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


/** columns and relationships of "comment" */
export type CommentUserReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};

/** aggregated selection of "comment" */
export type CommentAggregate = {
  __typename?: 'CommentAggregate';
  aggregate?: Maybe<CommentAggregateFields>;
  nodes: Array<Comment>;
};

export type CommentAggregateBoolExp = {
  bool_and?: InputMaybe<CommentAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<CommentAggregateBoolExpBool_Or>;
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
  blocked?: InputMaybe<BooleanComparisonExp>;
  claim?: InputMaybe<ClaimBoolExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  createdByUser?: InputMaybe<UserBoolExp>;
  deleted?: InputMaybe<BooleanComparisonExp>;
  displayedContent?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  thread?: InputMaybe<CommentBoolExp>;
  threadAggregate?: InputMaybe<CommentAggregateBoolExp>;
  threadId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  updatedByUser?: InputMaybe<UserBoolExp>;
  userReactions?: InputMaybe<CommentUserReactionsBoolExp>;
  userReactionsAggregate?: InputMaybe<CommentUserReactionsAggregateBoolExp>;
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
  threadId?: Maybe<Scalars['uuid']['output']>;
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
  comment?: InputMaybe<CommentBoolExp>;
  content?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  threadId?: InputMaybe<UuidComparisonExp>;
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
  threadId?: InputMaybe<Scalars['uuid']['input']>;
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
  threadId?: Maybe<Scalars['uuid']['output']>;
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
  threadId?: Maybe<Scalars['uuid']['output']>;
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
  comment?: InputMaybe<CommentOrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  threadId?: InputMaybe<OrderBy>;
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
  ThreadId = 'threadId',
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
  threadId?: InputMaybe<Scalars['uuid']['input']>;
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
  threadId?: InputMaybe<Scalars['uuid']['input']>;
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
  ThreadId = 'threadId',
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
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  claim?: InputMaybe<ClaimObjRelInsertInput>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  thread?: InputMaybe<CommentArrRelInsertInput>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
  userReactions?: InputMaybe<CommentUserReactionsArrRelInsertInput>;
};

/** aggregate max on columns */
export type CommentMaxFields = {
  __typename?: 'CommentMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  displayedContent?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comment" */
export type CommentMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  displayedContent?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  threadId?: InputMaybe<OrderBy>;
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
  displayedContent?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  threadId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comment" */
export type CommentMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  displayedContent?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  threadId?: InputMaybe<OrderBy>;
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
  blocked?: InputMaybe<OrderBy>;
  claim?: InputMaybe<ClaimOrderBy>;
  claimId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  createdByUser?: InputMaybe<UserOrderBy>;
  deleted?: InputMaybe<OrderBy>;
  displayedContent?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  threadAggregate?: InputMaybe<CommentAggregateOrderBy>;
  threadId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  updatedByUser?: InputMaybe<UserOrderBy>;
  userReactionsAggregate?: InputMaybe<CommentUserReactionsAggregateOrderBy>;
};

/** primary key columns input for table: comment */
export type CommentPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment" */
export enum CommentSelectColumn {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  DisplayedContent = 'displayedContent',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  ThreadId = 'threadId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy'
}

/** select "commentAggregateBoolExpBool_andArgumentsColumns" columns of table "comment" */
export enum CommentSelectColumnCommentAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Deleted = 'deleted'
}

/** select "commentAggregateBoolExpBool_orArgumentsColumns" columns of table "comment" */
export enum CommentSelectColumnCommentAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  Deleted = 'deleted'
}

/** input type for updating data in table "comment" */
export type CommentSetInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
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
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  displayedContent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  threadId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comment" */
export enum CommentUpdateColumn {
  /** column name */
  Blocked = 'blocked',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Id = 'id',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  ThreadId = 'threadId',
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

/** columns and relationships of "comment_user_reactions" */
export type CommentUserReactions = {
  __typename?: 'CommentUserReactions';
  commentId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "comment_user_reactions" */
export type CommentUserReactionsAggregate = {
  __typename?: 'CommentUserReactionsAggregate';
  aggregate?: Maybe<CommentUserReactionsAggregateFields>;
  nodes: Array<CommentUserReactions>;
};

export type CommentUserReactionsAggregateBoolExp = {
  count?: InputMaybe<CommentUserReactionsAggregateBoolExpCount>;
};

/** aggregate fields of "comment_user_reactions" */
export type CommentUserReactionsAggregateFields = {
  __typename?: 'CommentUserReactionsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CommentUserReactionsMaxFields>;
  min?: Maybe<CommentUserReactionsMinFields>;
};


/** aggregate fields of "comment_user_reactions" */
export type CommentUserReactionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_user_reactions" */
export type CommentUserReactionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentUserReactionsMaxOrderBy>;
  min?: InputMaybe<CommentUserReactionsMinOrderBy>;
};

/** input type for inserting array relation for remote table "comment_user_reactions" */
export type CommentUserReactionsArrRelInsertInput = {
  data: Array<CommentUserReactionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CommentUserReactionsOnConflict>;
};

/** Boolean expression to filter rows from the table "comment_user_reactions". All fields are combined with a logical 'AND'. */
export type CommentUserReactionsBoolExp = {
  _and?: InputMaybe<Array<CommentUserReactionsBoolExp>>;
  _not?: InputMaybe<CommentUserReactionsBoolExp>;
  _or?: InputMaybe<Array<CommentUserReactionsBoolExp>>;
  commentId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  emoji?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "comment_user_reactions" */
export enum CommentUserReactionsConstraint {
  /** unique or primary key constraint on columns "id" */
  CommentUserReactionsPkey = 'comment_user_reactions_pkey',
  /** unique or primary key constraint on columns "user_id", "emoji", "comment_id" */
  UniqueUserCommentEmoji = 'unique_user_comment_emoji'
}

/** input type for inserting data into table "comment_user_reactions" */
export type CommentUserReactionsInsertInput = {
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type CommentUserReactionsMaxFields = {
  __typename?: 'CommentUserReactionsMaxFields';
  commentId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "comment_user_reactions" */
export type CommentUserReactionsMaxOrderBy = {
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  emoji?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentUserReactionsMinFields = {
  __typename?: 'CommentUserReactionsMinFields';
  commentId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "comment_user_reactions" */
export type CommentUserReactionsMinOrderBy = {
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  emoji?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "comment_user_reactions" */
export type CommentUserReactionsMutationResponse = {
  __typename?: 'CommentUserReactionsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CommentUserReactions>;
};

/** on_conflict condition type for table "comment_user_reactions" */
export type CommentUserReactionsOnConflict = {
  constraint: CommentUserReactionsConstraint;
  updateColumns?: Array<CommentUserReactionsUpdateColumn>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};

/** Ordering options when selecting data from "comment_user_reactions". */
export type CommentUserReactionsOrderBy = {
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  emoji?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: comment_user_reactions */
export type CommentUserReactionsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment_user_reactions" */
export enum CommentUserReactionsSelectColumn {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "comment_user_reactions" */
export type CommentUserReactionsSetInput = {
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "comment_user_reactions" */
export type CommentUserReactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommentUserReactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CommentUserReactionsStreamCursorValueInput = {
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "comment_user_reactions" */
export enum CommentUserReactionsUpdateColumn {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

export type CommentUserReactionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommentUserReactionsSetInput>;
  /** filter the rows which have to be updated */
  where: CommentUserReactionsBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type DataListItem = {
  __typename?: 'DataListItem';
  claim?: Maybe<Scalars['String']['output']>;
  fileType?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'Event';
  action?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  claimStatus?: Maybe<Scalars['claim_status']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  entryId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['bigint']['output'];
  tableName?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "event" */
export type EventAggregate = {
  __typename?: 'EventAggregate';
  aggregate?: Maybe<EventAggregateFields>;
  nodes: Array<Event>;
};

export type EventAggregateBoolExp = {
  count?: InputMaybe<EventAggregateBoolExpCount>;
};

/** aggregate fields of "event" */
export type EventAggregateFields = {
  __typename?: 'EventAggregateFields';
  avg?: Maybe<EventAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<EventMaxFields>;
  min?: Maybe<EventMinFields>;
  stddev?: Maybe<EventStddevFields>;
  stddevPop?: Maybe<EventStddevPopFields>;
  stddevSamp?: Maybe<EventStddevSampFields>;
  sum?: Maybe<EventSumFields>;
  varPop?: Maybe<EventVarPopFields>;
  varSamp?: Maybe<EventVarSampFields>;
  variance?: Maybe<EventVarianceFields>;
};


/** aggregate fields of "event" */
export type EventAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "event" */
export type EventAggregateOrderBy = {
  avg?: InputMaybe<EventAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<EventMaxOrderBy>;
  min?: InputMaybe<EventMinOrderBy>;
  stddev?: InputMaybe<EventStddevOrderBy>;
  stddevPop?: InputMaybe<EventStddevPopOrderBy>;
  stddevSamp?: InputMaybe<EventStddevSampOrderBy>;
  sum?: InputMaybe<EventSumOrderBy>;
  varPop?: InputMaybe<EventVarPopOrderBy>;
  varSamp?: InputMaybe<EventVarSampOrderBy>;
  variance?: InputMaybe<EventVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "event" */
export type EventArrRelInsertInput = {
  data: Array<EventInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EventOnConflict>;
};

/** aggregate avg on columns */
export type EventAvgFields = {
  __typename?: 'EventAvgFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "event" */
export type EventAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type EventBoolExp = {
  _and?: InputMaybe<Array<EventBoolExp>>;
  _not?: InputMaybe<EventBoolExp>;
  _or?: InputMaybe<Array<EventBoolExp>>;
  action?: InputMaybe<StringComparisonExp>;
  claimId?: InputMaybe<UuidComparisonExp>;
  claimStatus?: InputMaybe<ClaimStatusComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  entryId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  tableName?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "event" */
export enum EventConstraint {
  /** unique or primary key constraint on columns "id" */
  EventPkey = 'event_pkey'
}

/** input type for incrementing numeric columns in table "event" */
export type EventIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "event" */
export type EventInsertInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  claimStatus?: InputMaybe<Scalars['claim_status']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  entryId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type EventMaxFields = {
  __typename?: 'EventMaxFields';
  action?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  claimStatus?: Maybe<Scalars['claim_status']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  entryId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "event" */
export type EventMaxOrderBy = {
  action?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  claimStatus?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  entryId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type EventMinFields = {
  __typename?: 'EventMinFields';
  action?: Maybe<Scalars['String']['output']>;
  claimId?: Maybe<Scalars['uuid']['output']>;
  claimStatus?: Maybe<Scalars['claim_status']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  entryId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "event" */
export type EventMinOrderBy = {
  action?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  claimStatus?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  entryId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "event" */
export type EventMutationResponse = {
  __typename?: 'EventMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** on_conflict condition type for table "event" */
export type EventOnConflict = {
  constraint: EventConstraint;
  updateColumns?: Array<EventUpdateColumn>;
  where?: InputMaybe<EventBoolExp>;
};

/** Ordering options when selecting data from "event". */
export type EventOrderBy = {
  action?: InputMaybe<OrderBy>;
  claimId?: InputMaybe<OrderBy>;
  claimStatus?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  entryId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tableName?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: event */
export type EventPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "event" */
export enum EventSelectColumn {
  /** column name */
  Action = 'action',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  ClaimStatus = 'claimStatus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntryId = 'entryId',
  /** column name */
  Id = 'id',
  /** column name */
  TableName = 'tableName',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "event" */
export type EventSetInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  claimStatus?: InputMaybe<Scalars['claim_status']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  entryId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type EventStddevFields = {
  __typename?: 'EventStddevFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "event" */
export type EventStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type EventStddevPopFields = {
  __typename?: 'EventStddevPopFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "event" */
export type EventStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type EventStddevSampFields = {
  __typename?: 'EventStddevSampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "event" */
export type EventStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "event" */
export type EventStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventStreamCursorValueInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  claimStatus?: InputMaybe<Scalars['claim_status']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  entryId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type EventSumFields = {
  __typename?: 'EventSumFields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "event" */
export type EventSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "event" */
export enum EventUpdateColumn {
  /** column name */
  Action = 'action',
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  ClaimStatus = 'claimStatus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntryId = 'entryId',
  /** column name */
  Id = 'id',
  /** column name */
  TableName = 'tableName',
  /** column name */
  UserId = 'userId'
}

export type EventUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventSetInput>;
  /** filter the rows which have to be updated */
  where: EventBoolExp;
};

/** aggregate varPop on columns */
export type EventVarPopFields = {
  __typename?: 'EventVarPopFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "event" */
export type EventVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type EventVarSampFields = {
  __typename?: 'EventVarSampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "event" */
export type EventVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type EventVarianceFields = {
  __typename?: 'EventVarianceFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "event" */
export type EventVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "fact" */
export type Fact = {
  __typename?: 'Fact';
  /** An object relationship */
  claim: Claim;
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  createdByUser?: Maybe<User>;
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
  updatedByUser?: Maybe<User>;
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
  createdByUser?: InputMaybe<UserBoolExp>;
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
  updatedByUser?: InputMaybe<UserBoolExp>;
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
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
  factHistories?: InputMaybe<FactHistoryArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  sources?: InputMaybe<SourceArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
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
  createdByUser?: InputMaybe<UserOrderBy>;
  factHistoriesAggregate?: InputMaybe<FactHistoryAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  sourcesAggregate?: InputMaybe<SourceAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  updatedByUser?: InputMaybe<UserOrderBy>;
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
  /** An object relationship */
  createdByUser?: Maybe<User>;
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
  updatedByUser?: Maybe<User>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  usersAggregate: UserAggregate;
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


/** columns and relationships of "file" */
export type FileUsersArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


/** columns and relationships of "file" */
export type FileUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
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
  createdByUser?: InputMaybe<UserBoolExp>;
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
  updatedByUser?: InputMaybe<UserBoolExp>;
  users?: InputMaybe<UserBoolExp>;
  usersAggregate?: InputMaybe<UserAggregateBoolExp>;
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
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
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
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
  users?: InputMaybe<UserArrRelInsertInput>;
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
  createdByUser?: InputMaybe<UserOrderBy>;
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
  updatedByUser?: InputMaybe<UserOrderBy>;
  usersAggregate?: InputMaybe<UserAggregateOrderBy>;
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

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "handbook_sections" */
export type HandbookSections = {
  __typename?: 'HandbookSections';
  contentDe: Scalars['String']['output'];
  contentEn: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  teaserImage?: Maybe<Scalars['uuid']['output']>;
  teaserTextDe: Scalars['String']['output'];
  teaserTextEn: Scalars['String']['output'];
  titleDe: Scalars['String']['output'];
  titleEn: Scalars['String']['output'];
};

/** aggregated selection of "handbook_sections" */
export type HandbookSectionsAggregate = {
  __typename?: 'HandbookSectionsAggregate';
  aggregate?: Maybe<HandbookSectionsAggregateFields>;
  nodes: Array<HandbookSections>;
};

/** aggregate fields of "handbook_sections" */
export type HandbookSectionsAggregateFields = {
  __typename?: 'HandbookSectionsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<HandbookSectionsMaxFields>;
  min?: Maybe<HandbookSectionsMinFields>;
};


/** aggregate fields of "handbook_sections" */
export type HandbookSectionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HandbookSectionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "handbook_sections". All fields are combined with a logical 'AND'. */
export type HandbookSectionsBoolExp = {
  _and?: InputMaybe<Array<HandbookSectionsBoolExp>>;
  _not?: InputMaybe<HandbookSectionsBoolExp>;
  _or?: InputMaybe<Array<HandbookSectionsBoolExp>>;
  contentDe?: InputMaybe<StringComparisonExp>;
  contentEn?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  teaserImage?: InputMaybe<UuidComparisonExp>;
  teaserTextDe?: InputMaybe<StringComparisonExp>;
  teaserTextEn?: InputMaybe<StringComparisonExp>;
  titleDe?: InputMaybe<StringComparisonExp>;
  titleEn?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "handbook_sections" */
export enum HandbookSectionsConstraint {
  /** unique or primary key constraint on columns "id" */
  HandbookSectionsPkey = 'handbook_sections_pkey'
}

/** input type for inserting data into table "handbook_sections" */
export type HandbookSectionsInsertInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  teaserImage?: InputMaybe<Scalars['uuid']['input']>;
  teaserTextDe?: InputMaybe<Scalars['String']['input']>;
  teaserTextEn?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type HandbookSectionsMaxFields = {
  __typename?: 'HandbookSectionsMaxFields';
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  teaserImage?: Maybe<Scalars['uuid']['output']>;
  teaserTextDe?: Maybe<Scalars['String']['output']>;
  teaserTextEn?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type HandbookSectionsMinFields = {
  __typename?: 'HandbookSectionsMinFields';
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  teaserImage?: Maybe<Scalars['uuid']['output']>;
  teaserTextDe?: Maybe<Scalars['String']['output']>;
  teaserTextEn?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "handbook_sections" */
export type HandbookSectionsMutationResponse = {
  __typename?: 'HandbookSectionsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<HandbookSections>;
};

/** on_conflict condition type for table "handbook_sections" */
export type HandbookSectionsOnConflict = {
  constraint: HandbookSectionsConstraint;
  updateColumns?: Array<HandbookSectionsUpdateColumn>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
};

/** Ordering options when selecting data from "handbook_sections". */
export type HandbookSectionsOrderBy = {
  contentDe?: InputMaybe<OrderBy>;
  contentEn?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  teaserImage?: InputMaybe<OrderBy>;
  teaserTextDe?: InputMaybe<OrderBy>;
  teaserTextEn?: InputMaybe<OrderBy>;
  titleDe?: InputMaybe<OrderBy>;
  titleEn?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: handbook_sections */
export type HandbookSectionsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "handbook_sections" */
export enum HandbookSectionsSelectColumn {
  /** column name */
  ContentDe = 'contentDe',
  /** column name */
  ContentEn = 'contentEn',
  /** column name */
  Id = 'id',
  /** column name */
  TeaserImage = 'teaserImage',
  /** column name */
  TeaserTextDe = 'teaserTextDe',
  /** column name */
  TeaserTextEn = 'teaserTextEn',
  /** column name */
  TitleDe = 'titleDe',
  /** column name */
  TitleEn = 'titleEn'
}

/** input type for updating data in table "handbook_sections" */
export type HandbookSectionsSetInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  teaserImage?: InputMaybe<Scalars['uuid']['input']>;
  teaserTextDe?: InputMaybe<Scalars['String']['input']>;
  teaserTextEn?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "handbook_sections" */
export type HandbookSectionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HandbookSectionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HandbookSectionsStreamCursorValueInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  teaserImage?: InputMaybe<Scalars['uuid']['input']>;
  teaserTextDe?: InputMaybe<Scalars['String']['input']>;
  teaserTextEn?: InputMaybe<Scalars['String']['input']>;
  titleDe?: InputMaybe<Scalars['String']['input']>;
  titleEn?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "handbook_sections" */
export enum HandbookSectionsUpdateColumn {
  /** column name */
  ContentDe = 'contentDe',
  /** column name */
  ContentEn = 'contentEn',
  /** column name */
  Id = 'id',
  /** column name */
  TeaserImage = 'teaserImage',
  /** column name */
  TeaserTextDe = 'teaserTextDe',
  /** column name */
  TeaserTextEn = 'teaserTextEn',
  /** column name */
  TitleDe = 'titleDe',
  /** column name */
  TitleEn = 'titleEn'
}

export type HandbookSectionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HandbookSectionsSetInput>;
  /** filter the rows which have to be updated */
  where: HandbookSectionsBoolExp;
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

export enum Language {
  De = 'de',
  En = 'en'
}

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
  /** An object relationship */
  createdByUser?: Maybe<User>;
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
  remarks?: Maybe<Scalars['String']['output']>;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  updatedByUser?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
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
  createdByUser?: InputMaybe<UserBoolExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  originHistories?: InputMaybe<OriginHistoryBoolExp>;
  originHistoriesAggregate?: InputMaybe<OriginHistoryAggregateBoolExp>;
  remarks?: InputMaybe<StringComparisonExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  updatedByUser?: InputMaybe<UserBoolExp>;
  url?: InputMaybe<StringComparisonExp>;
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
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  originHistories?: InputMaybe<OriginHistoryArrRelInsertInput>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
  url?: InputMaybe<Scalars['String']['input']>;
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
  remarks?: Maybe<Scalars['String']['output']>;
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
  remarks?: InputMaybe<OrderBy>;
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
  remarks?: Maybe<Scalars['String']['output']>;
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
  remarks?: InputMaybe<OrderBy>;
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
  createdByUser?: InputMaybe<UserOrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  originHistoriesAggregate?: InputMaybe<OriginHistoryAggregateOrderBy>;
  remarks?: InputMaybe<OrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  updatedByUser?: InputMaybe<UserOrderBy>;
  url?: InputMaybe<OrderBy>;
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
  Remarks = 'remarks',
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
  remarks?: InputMaybe<Scalars['String']['input']>;
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
  remarks?: InputMaybe<Scalars['String']['input']>;
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
  Remarks = 'remarks',
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

/** columns and relationships of "page_content" */
export type PageContent = {
  __typename?: 'PageContent';
  contentDe: Scalars['String']['output'];
  contentEn: Scalars['String']['output'];
  pageName: Scalars['String']['output'];
};

/** aggregated selection of "page_content" */
export type PageContentAggregate = {
  __typename?: 'PageContentAggregate';
  aggregate?: Maybe<PageContentAggregateFields>;
  nodes: Array<PageContent>;
};

/** aggregate fields of "page_content" */
export type PageContentAggregateFields = {
  __typename?: 'PageContentAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<PageContentMaxFields>;
  min?: Maybe<PageContentMinFields>;
};


/** aggregate fields of "page_content" */
export type PageContentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PageContentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "page_content". All fields are combined with a logical 'AND'. */
export type PageContentBoolExp = {
  _and?: InputMaybe<Array<PageContentBoolExp>>;
  _not?: InputMaybe<PageContentBoolExp>;
  _or?: InputMaybe<Array<PageContentBoolExp>>;
  contentDe?: InputMaybe<StringComparisonExp>;
  contentEn?: InputMaybe<StringComparisonExp>;
  pageName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "page_content" */
export enum PageContentConstraint {
  /** unique or primary key constraint on columns "page_name" */
  PageContentPkey = 'page_content_pkey'
}

/** input type for inserting data into table "page_content" */
export type PageContentInsertInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PageContentMaxFields = {
  __typename?: 'PageContentMaxFields';
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PageContentMinFields = {
  __typename?: 'PageContentMinFields';
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "page_content" */
export type PageContentMutationResponse = {
  __typename?: 'PageContentMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PageContent>;
};

/** on_conflict condition type for table "page_content" */
export type PageContentOnConflict = {
  constraint: PageContentConstraint;
  updateColumns?: Array<PageContentUpdateColumn>;
  where?: InputMaybe<PageContentBoolExp>;
};

/** Ordering options when selecting data from "page_content". */
export type PageContentOrderBy = {
  contentDe?: InputMaybe<OrderBy>;
  contentEn?: InputMaybe<OrderBy>;
  pageName?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: page_content */
export type PageContentPkColumnsInput = {
  pageName: Scalars['String']['input'];
};

/** select columns of table "page_content" */
export enum PageContentSelectColumn {
  /** column name */
  ContentDe = 'contentDe',
  /** column name */
  ContentEn = 'contentEn',
  /** column name */
  PageName = 'pageName'
}

/** input type for updating data in table "page_content" */
export type PageContentSetInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "page_content" */
export type PageContentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PageContentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PageContentStreamCursorValueInput = {
  contentDe?: InputMaybe<Scalars['String']['input']>;
  contentEn?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "page_content" */
export enum PageContentUpdateColumn {
  /** column name */
  ContentDe = 'contentDe',
  /** column name */
  ContentEn = 'contentEn',
  /** column name */
  PageName = 'pageName'
}

export type PageContentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PageContentSetInput>;
  /** filter the rows which have to be updated */
  where: PageContentBoolExp;
};

/** columns and relationships of "rating_label" */
export type RatingLabel = {
  __typename?: 'RatingLabel';
  /** An array relationship */
  claims: Array<Claim>;
  /** An aggregate relationship */
  claimsAggregate: ClaimAggregate;
  labelDe: Scalars['String']['output'];
  labelEn: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "rating_label" */
export type RatingLabelClaimsArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};


/** columns and relationships of "rating_label" */
export type RatingLabelClaimsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClaimSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClaimOrderBy>>;
  where?: InputMaybe<ClaimBoolExp>;
};

/** aggregated selection of "rating_label" */
export type RatingLabelAggregate = {
  __typename?: 'RatingLabelAggregate';
  aggregate?: Maybe<RatingLabelAggregateFields>;
  nodes: Array<RatingLabel>;
};

/** aggregate fields of "rating_label" */
export type RatingLabelAggregateFields = {
  __typename?: 'RatingLabelAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<RatingLabelMaxFields>;
  min?: Maybe<RatingLabelMinFields>;
};


/** aggregate fields of "rating_label" */
export type RatingLabelAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RatingLabelSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rating_label". All fields are combined with a logical 'AND'. */
export type RatingLabelBoolExp = {
  _and?: InputMaybe<Array<RatingLabelBoolExp>>;
  _not?: InputMaybe<RatingLabelBoolExp>;
  _or?: InputMaybe<Array<RatingLabelBoolExp>>;
  claims?: InputMaybe<ClaimBoolExp>;
  claimsAggregate?: InputMaybe<ClaimAggregateBoolExp>;
  labelDe?: InputMaybe<StringComparisonExp>;
  labelEn?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rating_label" */
export enum RatingLabelConstraint {
  /** unique or primary key constraint on columns "name" */
  RatingLabelPkey = 'rating_label_pkey'
}

/** input type for inserting data into table "rating_label" */
export type RatingLabelInsertInput = {
  claims?: InputMaybe<ClaimArrRelInsertInput>;
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RatingLabelMaxFields = {
  __typename?: 'RatingLabelMaxFields';
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RatingLabelMinFields = {
  __typename?: 'RatingLabelMinFields';
  labelDe?: Maybe<Scalars['String']['output']>;
  labelEn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "rating_label" */
export type RatingLabelMutationResponse = {
  __typename?: 'RatingLabelMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<RatingLabel>;
};

/** input type for inserting object relation for remote table "rating_label" */
export type RatingLabelObjRelInsertInput = {
  data: RatingLabelInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RatingLabelOnConflict>;
};

/** on_conflict condition type for table "rating_label" */
export type RatingLabelOnConflict = {
  constraint: RatingLabelConstraint;
  updateColumns?: Array<RatingLabelUpdateColumn>;
  where?: InputMaybe<RatingLabelBoolExp>;
};

/** Ordering options when selecting data from "rating_label". */
export type RatingLabelOrderBy = {
  claimsAggregate?: InputMaybe<ClaimAggregateOrderBy>;
  labelDe?: InputMaybe<OrderBy>;
  labelEn?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rating_label */
export type RatingLabelPkColumnsInput = {
  name: Scalars['String']['input'];
};

/** select columns of table "rating_label" */
export enum RatingLabelSelectColumn {
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rating_label" */
export type RatingLabelSetInput = {
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "rating_label" */
export type RatingLabelStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RatingLabelStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RatingLabelStreamCursorValueInput = {
  labelDe?: InputMaybe<Scalars['String']['input']>;
  labelEn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "rating_label" */
export enum RatingLabelUpdateColumn {
  /** column name */
  LabelDe = 'labelDe',
  /** column name */
  LabelEn = 'labelEn',
  /** column name */
  Name = 'name'
}

export type RatingLabelUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RatingLabelSetInput>;
  /** filter the rows which have to be updated */
  where: RatingLabelBoolExp;
};

/** columns and relationships of "source" */
export type Source = {
  __typename?: 'Source';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  createdByUser?: Maybe<User>;
  excerpt?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  fact: Fact;
  factId: Scalars['uuid']['output'];
  /** An object relationship */
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sourceHistories: Array<SourceHistory>;
  /** An aggregate relationship */
  sourceHistoriesAggregate: SourceHistoryAggregate;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  updatedByUser?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
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
  archiveUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  createdByUser?: InputMaybe<UserBoolExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  fact?: InputMaybe<FactBoolExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  file?: InputMaybe<FileBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  remarks?: InputMaybe<StringComparisonExp>;
  sourceHistories?: InputMaybe<SourceHistoryBoolExp>;
  sourceHistoriesAggregate?: InputMaybe<SourceHistoryAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  updatedByUser?: InputMaybe<UserBoolExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "source" */
export enum SourceConstraint {
  /** unique or primary key constraint on columns "id" */
  SourcePkey = 'source_pkey'
}

/** columns and relationships of "source_history" */
export type SourceHistory = {
  __typename?: 'SourceHistory';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId: Scalars['uuid']['output'];
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  source: Source;
  sysPeriod?: Maybe<Scalars['tstzrange']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
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
  archiveUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  factId?: InputMaybe<UuidComparisonExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  historyId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  source?: InputMaybe<SourceBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
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
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  historyId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  source?: InputMaybe<SourceObjRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type SourceHistoryMaxFields = {
  __typename?: 'SourceHistoryMaxFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "source_history" */
export type SourceHistoryMaxOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SourceHistoryMinFields = {
  __typename?: 'SourceHistoryMinFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  historyId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "source_history" */
export type SourceHistoryMinOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
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
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  source?: InputMaybe<SourceOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: source_history */
export type SourceHistoryPkColumnsInput = {
  historyId: Scalars['uuid']['input'];
};

/** select columns of table "source_history" */
export enum SourceHistorySelectColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
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
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "source_history" */
export type SourceHistorySetInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
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
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
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
  ArchiveUrl = 'archiveUrl',
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
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
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
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  createdByUser?: InputMaybe<UserObjRelInsertInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  fact?: InputMaybe<FactObjRelInsertInput>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  file?: InputMaybe<FileObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  sourceHistories?: InputMaybe<SourceHistoryArrRelInsertInput>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  updatedByUser?: InputMaybe<UserObjRelInsertInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type SourceMaxFields = {
  __typename?: 'SourceMaxFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "source" */
export type SourceMaxOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  remarks?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SourceMinFields = {
  __typename?: 'SourceMinFields';
  archiveUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  factId?: Maybe<Scalars['uuid']['output']>;
  fileId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedBy?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "source" */
export type SourceMinOrderBy = {
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  factId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  remarks?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
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
  archiveUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  createdByUser?: InputMaybe<UserOrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  fact?: InputMaybe<FactOrderBy>;
  factId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FileOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  remarks?: InputMaybe<OrderBy>;
  sourceHistoriesAggregate?: InputMaybe<SourceHistoryAggregateOrderBy>;
  sysPeriod?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  updatedByUser?: InputMaybe<UserOrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: source */
export type SourcePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "source" */
export enum SourceSelectColumn {
  /** column name */
  ArchiveUrl = 'archiveUrl',
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
  Remarks = 'remarks',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "source" */
export type SourceSetInput = {
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
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
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  factId?: InputMaybe<Scalars['uuid']['input']>;
  fileId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  sysPeriod?: InputMaybe<Scalars['tstzrange']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedBy?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
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
  ArchiveUrl = 'archiveUrl',
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
  Remarks = 'remarks',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UpdatedBy = 'updatedBy',
  /** column name */
  Url = 'url'
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

export type SuccessInfo = {
  __typename?: 'SuccessInfo';
  success: Scalars['Boolean']['output'];
};

export type TextPayloadInput = {
  text: Scalars['String']['input'];
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
  /** An object relationship */
  file?: Maybe<File>;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  signedCodeOfConduct?: Maybe<Scalars['Boolean']['output']>;
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

/** View of user table to set Hasura Permissions for User to read all, including signed_code_of_conduct */
export type UserAccountView = {
  __typename?: 'UserAccountView';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  signedCodeOfConduct?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "user_account_view" */
export type UserAccountViewAggregate = {
  __typename?: 'UserAccountViewAggregate';
  aggregate?: Maybe<UserAccountViewAggregateFields>;
  nodes: Array<UserAccountView>;
};

/** aggregate fields of "user_account_view" */
export type UserAccountViewAggregateFields = {
  __typename?: 'UserAccountViewAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserAccountViewMaxFields>;
  min?: Maybe<UserAccountViewMinFields>;
};


/** aggregate fields of "user_account_view" */
export type UserAccountViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserAccountViewSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_account_view". All fields are combined with a logical 'AND'. */
export type UserAccountViewBoolExp = {
  _and?: InputMaybe<Array<UserAccountViewBoolExp>>;
  _not?: InputMaybe<UserAccountViewBoolExp>;
  _or?: InputMaybe<Array<UserAccountViewBoolExp>>;
  bio?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  mobileNumber?: InputMaybe<StringComparisonExp>;
  profileImage?: InputMaybe<UuidComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  signedCodeOfConduct?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** input type for inserting data into table "user_account_view" */
export type UserAccountViewInsertInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserAccountViewMaxFields = {
  __typename?: 'UserAccountViewMaxFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserAccountViewMinFields = {
  __typename?: 'UserAccountViewMinFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_account_view" */
export type UserAccountViewMutationResponse = {
  __typename?: 'UserAccountViewMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserAccountView>;
};

/** Ordering options when selecting data from "user_account_view". */
export type UserAccountViewOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  signedCodeOfConduct?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** select columns of table "user_account_view" */
export enum UserAccountViewSelectColumn {
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
  SignedCodeOfConduct = 'signedCodeOfConduct',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user_account_view" */
export type UserAccountViewSetInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_account_view" */
export type UserAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserAccountViewStreamCursorValueInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserAccountViewUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserAccountViewSetInput>;
  /** filter the rows which have to be updated */
  where: UserAccountViewBoolExp;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

export type UserAggregateBoolExp = {
  bool_and?: InputMaybe<UserAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<UserAggregateBoolExpBool_Or>;
  count?: InputMaybe<UserAggregateBoolExpCount>;
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

/** order by aggregate values of table "user" */
export type UserAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserMaxOrderBy>;
  min?: InputMaybe<UserMinOrderBy>;
};

/** input type for inserting array relation for remote table "user" */
export type UserArrRelInsertInput = {
  data: Array<UserInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
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
  file?: InputMaybe<FileBoolExp>;
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
  profileImage?: InputMaybe<UuidComparisonExp>;
  pronouns?: InputMaybe<StringComparisonExp>;
  signedCodeOfConduct?: InputMaybe<BooleanComparisonExp>;
  sources?: InputMaybe<SourceBoolExp>;
  sourcesAggregate?: InputMaybe<SourceAggregateBoolExp>;
  sysPeriod?: InputMaybe<TstzrangeComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userHistories?: InputMaybe<UserHistoryBoolExp>;
  userHistoriesAggregate?: InputMaybe<UserHistoryAggregateBoolExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** columns and relationships of "user_claim_status" */
export type UserClaimStatus = {
  __typename?: 'UserClaimStatus';
  claimId: Scalars['uuid']['output'];
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  hasMarked: Scalars['Boolean']['output'];
  hasRead: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "user_claim_status" */
export type UserClaimStatusAggregate = {
  __typename?: 'UserClaimStatusAggregate';
  aggregate?: Maybe<UserClaimStatusAggregateFields>;
  nodes: Array<UserClaimStatus>;
};

export type UserClaimStatusAggregateBoolExp = {
  bool_and?: InputMaybe<UserClaimStatusAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<UserClaimStatusAggregateBoolExpBool_Or>;
  count?: InputMaybe<UserClaimStatusAggregateBoolExpCount>;
};

/** aggregate fields of "user_claim_status" */
export type UserClaimStatusAggregateFields = {
  __typename?: 'UserClaimStatusAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserClaimStatusMaxFields>;
  min?: Maybe<UserClaimStatusMinFields>;
};


/** aggregate fields of "user_claim_status" */
export type UserClaimStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_claim_status" */
export type UserClaimStatusAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserClaimStatusMaxOrderBy>;
  min?: InputMaybe<UserClaimStatusMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_claim_status" */
export type UserClaimStatusArrRelInsertInput = {
  data: Array<UserClaimStatusInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserClaimStatusOnConflict>;
};

/** Boolean expression to filter rows from the table "user_claim_status". All fields are combined with a logical 'AND'. */
export type UserClaimStatusBoolExp = {
  _and?: InputMaybe<Array<UserClaimStatusBoolExp>>;
  _not?: InputMaybe<UserClaimStatusBoolExp>;
  _or?: InputMaybe<Array<UserClaimStatusBoolExp>>;
  claimId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  hasMarked?: InputMaybe<BooleanComparisonExp>;
  hasRead?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_claim_status" */
export enum UserClaimStatusConstraint {
  /** unique or primary key constraint on columns "user_id", "claim_id" */
  UserClaimStatusPkey = 'user_claim_status_pkey'
}

/** input type for inserting data into table "user_claim_status" */
export type UserClaimStatusInsertInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasMarked?: InputMaybe<Scalars['Boolean']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type UserClaimStatusMaxFields = {
  __typename?: 'UserClaimStatusMaxFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_claim_status" */
export type UserClaimStatusMaxOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserClaimStatusMinFields = {
  __typename?: 'UserClaimStatusMinFields';
  claimId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_claim_status" */
export type UserClaimStatusMinOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_claim_status" */
export type UserClaimStatusMutationResponse = {
  __typename?: 'UserClaimStatusMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserClaimStatus>;
};

/** on_conflict condition type for table "user_claim_status" */
export type UserClaimStatusOnConflict = {
  constraint: UserClaimStatusConstraint;
  updateColumns?: Array<UserClaimStatusUpdateColumn>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};

/** Ordering options when selecting data from "user_claim_status". */
export type UserClaimStatusOrderBy = {
  claimId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  hasMarked?: InputMaybe<OrderBy>;
  hasRead?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_claim_status */
export type UserClaimStatusPkColumnsInput = {
  claimId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};

/** select columns of table "user_claim_status" */
export enum UserClaimStatusSelectColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HasMarked = 'hasMarked',
  /** column name */
  HasRead = 'hasRead',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select "userClaimStatusAggregateBoolExpBool_andArgumentsColumns" columns of table "user_claim_status" */
export enum UserClaimStatusSelectColumnUserClaimStatusAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  HasMarked = 'hasMarked',
  /** column name */
  HasRead = 'hasRead'
}

/** select "userClaimStatusAggregateBoolExpBool_orArgumentsColumns" columns of table "user_claim_status" */
export enum UserClaimStatusSelectColumnUserClaimStatusAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  HasMarked = 'hasMarked',
  /** column name */
  HasRead = 'hasRead'
}

/** input type for updating data in table "user_claim_status" */
export type UserClaimStatusSetInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasMarked?: InputMaybe<Scalars['Boolean']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_claim_status" */
export type UserClaimStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserClaimStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserClaimStatusStreamCursorValueInput = {
  claimId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasMarked?: InputMaybe<Scalars['Boolean']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_claim_status" */
export enum UserClaimStatusUpdateColumn {
  /** column name */
  ClaimId = 'claimId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HasMarked = 'hasMarked',
  /** column name */
  HasRead = 'hasRead',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type UserClaimStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserClaimStatusSetInput>;
  /** filter the rows which have to be updated */
  where: UserClaimStatusBoolExp;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
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
  profileImage?: InputMaybe<UuidComparisonExp>;
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
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
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
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
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
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
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
  file?: InputMaybe<FileObjRelInsertInput>;
  files?: InputMaybe<FileArrRelInsertInput>;
  filesByUpdatedBy?: InputMaybe<FileArrRelInsertInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  origins?: InputMaybe<OriginArrRelInsertInput>;
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "user" */
export type UserMaxOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
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
  profileImage?: Maybe<Scalars['uuid']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "user" */
export type UserMinOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
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
  file?: InputMaybe<FileOrderBy>;
  filesAggregate?: InputMaybe<FileAggregateOrderBy>;
  filesByUpdatedByAggregate?: InputMaybe<FileAggregateOrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  mobileNumber?: InputMaybe<OrderBy>;
  originsAggregate?: InputMaybe<OriginAggregateOrderBy>;
  profileImage?: InputMaybe<OrderBy>;
  pronouns?: InputMaybe<OrderBy>;
  signedCodeOfConduct?: InputMaybe<OrderBy>;
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

export enum UserRole {
  Administrator = 'administrator',
  Aspirant = 'aspirant',
  Editor = 'editor',
  Junior = 'junior',
  Moderator = 'moderator',
  Senior = 'senior'
}

export type UserRoleResponse = {
  __typename?: 'UserRoleResponse';
  UserToUserRole?: Maybe<User>;
  id: Scalars['String']['output'];
  role: UserRole;
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
  SignedCodeOfConduct = 'signedCodeOfConduct',
  /** column name */
  SysPeriod = 'sysPeriod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** select "userAggregateBoolExpBool_andArgumentsColumns" columns of table "user" */
export enum UserSelectColumnUserAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  SignedCodeOfConduct = 'signedCodeOfConduct'
}

/** select "userAggregateBoolExpBool_orArgumentsColumns" columns of table "user" */
export enum UserSelectColumnUserAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  SignedCodeOfConduct = 'signedCodeOfConduct'
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
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
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
  profileImage?: InputMaybe<Scalars['uuid']['input']>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  signedCodeOfConduct?: InputMaybe<Scalars['Boolean']['input']>;
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
  SignedCodeOfConduct = 'signedCodeOfConduct',
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

export type UserWithRole = {
  __typename?: 'UserWithRole';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lang: Language;
  role: UserRole;
  username: Scalars['String']['output'];
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

export type ClaimAggregateBoolExpBool_And = {
  arguments: ClaimSelectColumnClaimAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ClaimAggregateBoolExpBool_Or = {
  arguments: ClaimSelectColumnClaimAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ClaimAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type ClaimHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ClaimHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ClaimHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentAggregateBoolExpBool_And = {
  arguments: CommentSelectColumnCommentAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CommentAggregateBoolExpBool_Or = {
  arguments: CommentSelectColumnCommentAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CommentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentUserReactionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentUserReactionsBoolExp>;
  predicate: IntComparisonExp;
};

export type EventAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<EventSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EventBoolExp>;
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
  /** Block Room message */
  blockRoomMessage?: Maybe<BlockRoomMessageOutput>;
  /** This Action deletes a user this is not reverserable */
  deleteAccount: SuccessInfo;
  /** delete data from the table: "category" */
  deleteCategory?: Maybe<CategoryMutationResponse>;
  /** delete single row from the table: "category" */
  deleteCategoryByPk?: Maybe<Category>;
  /** delete data from the table: "channel" */
  deleteChannel?: Maybe<ChannelMutationResponse>;
  /** delete single row from the table: "channel" */
  deleteChannelByPk?: Maybe<Channel>;
  /** delete data from the table: "checkworthiness" */
  deleteCheckworthiness?: Maybe<CheckworthinessMutationResponse>;
  /** delete single row from the table: "checkworthiness" */
  deleteCheckworthinessByPk?: Maybe<Checkworthiness>;
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
  /** delete data from the table: "comment_user_reactions" */
  deleteCommentUserReactions?: Maybe<CommentUserReactionsMutationResponse>;
  /** delete single row from the table: "comment_user_reactions" */
  deleteCommentUserReactionsByPk?: Maybe<CommentUserReactions>;
  /** delete data from the table: "event" */
  deleteEvent?: Maybe<EventMutationResponse>;
  /** delete single row from the table: "event" */
  deleteEventByPk?: Maybe<Event>;
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
  /** delete data from the table: "handbook_sections" */
  deleteHandbookSections?: Maybe<HandbookSectionsMutationResponse>;
  /** delete single row from the table: "handbook_sections" */
  deleteHandbookSectionsByPk?: Maybe<HandbookSections>;
  /** delete data from the table: "origin" */
  deleteOrigin?: Maybe<OriginMutationResponse>;
  /** delete single row from the table: "origin" */
  deleteOriginByPk?: Maybe<Origin>;
  /** delete data from the table: "origin_history" */
  deleteOriginHistory?: Maybe<OriginHistoryMutationResponse>;
  /** delete single row from the table: "origin_history" */
  deleteOriginHistoryByPk?: Maybe<OriginHistory>;
  /** delete data from the table: "page_content" */
  deletePageContent?: Maybe<PageContentMutationResponse>;
  /** delete single row from the table: "page_content" */
  deletePageContentByPk?: Maybe<PageContent>;
  /** delete data from the table: "rating_label" */
  deleteRatingLabel?: Maybe<RatingLabelMutationResponse>;
  /** delete single row from the table: "rating_label" */
  deleteRatingLabelByPk?: Maybe<RatingLabel>;
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
  /** delete data from the table: "user_account_view" */
  deleteUserAccountView?: Maybe<UserAccountViewMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "user_claim_status" */
  deleteUserClaimStatus?: Maybe<UserClaimStatusMutationResponse>;
  /** delete single row from the table: "user_claim_status" */
  deleteUserClaimStatusByPk?: Maybe<UserClaimStatus>;
  /** delete data from the table: "user_history" */
  deleteUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** delete single row from the table: "user_history" */
  deleteUserHistoryByPk?: Maybe<UserHistory>;
  /** insert data into the table: "category" */
  insertCategory?: Maybe<CategoryMutationResponse>;
  /** insert a single row into the table: "category" */
  insertCategoryOne?: Maybe<Category>;
  /** insert data into the table: "channel" */
  insertChannel?: Maybe<ChannelMutationResponse>;
  /** insert a single row into the table: "channel" */
  insertChannelOne?: Maybe<Channel>;
  /** insert data into the table: "checkworthiness" */
  insertCheckworthiness?: Maybe<CheckworthinessMutationResponse>;
  /** insert a single row into the table: "checkworthiness" */
  insertCheckworthinessOne?: Maybe<Checkworthiness>;
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
  /** insert data into the table: "comment_user_reactions" */
  insertCommentUserReactions?: Maybe<CommentUserReactionsMutationResponse>;
  /** insert a single row into the table: "comment_user_reactions" */
  insertCommentUserReactionsOne?: Maybe<CommentUserReactions>;
  /** insert data into the table: "event" */
  insertEvent?: Maybe<EventMutationResponse>;
  /** insert a single row into the table: "event" */
  insertEventOne?: Maybe<Event>;
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
  /** insert data into the table: "handbook_sections" */
  insertHandbookSections?: Maybe<HandbookSectionsMutationResponse>;
  /** insert a single row into the table: "handbook_sections" */
  insertHandbookSectionsOne?: Maybe<HandbookSections>;
  /** insert data into the table: "origin" */
  insertOrigin?: Maybe<OriginMutationResponse>;
  /** insert data into the table: "origin_history" */
  insertOriginHistory?: Maybe<OriginHistoryMutationResponse>;
  /** insert a single row into the table: "origin_history" */
  insertOriginHistoryOne?: Maybe<OriginHistory>;
  /** insert a single row into the table: "origin" */
  insertOriginOne?: Maybe<Origin>;
  /** insert data into the table: "page_content" */
  insertPageContent?: Maybe<PageContentMutationResponse>;
  /** insert a single row into the table: "page_content" */
  insertPageContentOne?: Maybe<PageContent>;
  /** insert data into the table: "rating_label" */
  insertRatingLabel?: Maybe<RatingLabelMutationResponse>;
  /** insert a single row into the table: "rating_label" */
  insertRatingLabelOne?: Maybe<RatingLabel>;
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
  /** insert data into the table: "user_account_view" */
  insertUserAccountView?: Maybe<UserAccountViewMutationResponse>;
  /** insert a single row into the table: "user_account_view" */
  insertUserAccountViewOne?: Maybe<UserAccountView>;
  /** insert data into the table: "user_claim_status" */
  insertUserClaimStatus?: Maybe<UserClaimStatusMutationResponse>;
  /** insert a single row into the table: "user_claim_status" */
  insertUserClaimStatusOne?: Maybe<UserClaimStatus>;
  /** insert data into the table: "user_history" */
  insertUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** insert a single row into the table: "user_history" */
  insertUserHistoryOne?: Maybe<UserHistory>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /**
   * Enqueue the incoming request in the FIFO queue. We'll wait on the
   * future that is resolved by one of the background workers.
   */
  sendMessageToCheckbotMessagePost?: Maybe<CheckbotResponse>;
  /** update data of the table: "category" */
  updateCategory?: Maybe<CategoryMutationResponse>;
  /** update single row of the table: "category" */
  updateCategoryByPk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  updateCategoryMany?: Maybe<Array<Maybe<CategoryMutationResponse>>>;
  /** update data of the table: "channel" */
  updateChannel?: Maybe<ChannelMutationResponse>;
  /** update single row of the table: "channel" */
  updateChannelByPk?: Maybe<Channel>;
  /** update multiples rows of table: "channel" */
  updateChannelMany?: Maybe<Array<Maybe<ChannelMutationResponse>>>;
  /** update data of the table: "checkworthiness" */
  updateCheckworthiness?: Maybe<CheckworthinessMutationResponse>;
  /** update single row of the table: "checkworthiness" */
  updateCheckworthinessByPk?: Maybe<Checkworthiness>;
  /** update multiples rows of table: "checkworthiness" */
  updateCheckworthinessMany?: Maybe<Array<Maybe<CheckworthinessMutationResponse>>>;
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
  /** update data of the table: "comment_user_reactions" */
  updateCommentUserReactions?: Maybe<CommentUserReactionsMutationResponse>;
  /** update single row of the table: "comment_user_reactions" */
  updateCommentUserReactionsByPk?: Maybe<CommentUserReactions>;
  /** update multiples rows of table: "comment_user_reactions" */
  updateCommentUserReactionsMany?: Maybe<Array<Maybe<CommentUserReactionsMutationResponse>>>;
  /** update data of the table: "event" */
  updateEvent?: Maybe<EventMutationResponse>;
  /** update single row of the table: "event" */
  updateEventByPk?: Maybe<Event>;
  /** update multiples rows of table: "event" */
  updateEventMany?: Maybe<Array<Maybe<EventMutationResponse>>>;
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
  /** update data of the table: "handbook_sections" */
  updateHandbookSections?: Maybe<HandbookSectionsMutationResponse>;
  /** update single row of the table: "handbook_sections" */
  updateHandbookSectionsByPk?: Maybe<HandbookSections>;
  /** update multiples rows of table: "handbook_sections" */
  updateHandbookSectionsMany?: Maybe<Array<Maybe<HandbookSectionsMutationResponse>>>;
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
  /** update data of the table: "page_content" */
  updatePageContent?: Maybe<PageContentMutationResponse>;
  /** update single row of the table: "page_content" */
  updatePageContentByPk?: Maybe<PageContent>;
  /** update multiples rows of table: "page_content" */
  updatePageContentMany?: Maybe<Array<Maybe<PageContentMutationResponse>>>;
  /** update data of the table: "rating_label" */
  updateRatingLabel?: Maybe<RatingLabelMutationResponse>;
  /** update single row of the table: "rating_label" */
  updateRatingLabelByPk?: Maybe<RatingLabel>;
  /** update multiples rows of table: "rating_label" */
  updateRatingLabelMany?: Maybe<Array<Maybe<RatingLabelMutationResponse>>>;
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
  /** update data of the table: "user_account_view" */
  updateUserAccountView?: Maybe<UserAccountViewMutationResponse>;
  /** update multiples rows of table: "user_account_view" */
  updateUserAccountViewMany?: Maybe<Array<Maybe<UserAccountViewMutationResponse>>>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "user_claim_status" */
  updateUserClaimStatus?: Maybe<UserClaimStatusMutationResponse>;
  /** update single row of the table: "user_claim_status" */
  updateUserClaimStatusByPk?: Maybe<UserClaimStatus>;
  /** update multiples rows of table: "user_claim_status" */
  updateUserClaimStatusMany?: Maybe<Array<Maybe<UserClaimStatusMutationResponse>>>;
  /** update data of the table: "user_history" */
  updateUserHistory?: Maybe<UserHistoryMutationResponse>;
  /** update single row of the table: "user_history" */
  updateUserHistoryByPk?: Maybe<UserHistory>;
  /** update multiples rows of table: "user_history" */
  updateUserHistoryMany?: Maybe<Array<Maybe<UserHistoryMutationResponse>>>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** Update user role */
  updateUserRole: UserWithRole;
};


/** mutation root */
export type Mutation_RootBlockRoomMessageArgs = {
  messageId: Scalars['String']['input'];
  roomId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAccountArgs = {
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCategoryArgs = {
  where: CategoryBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCategoryByPkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteChannelArgs = {
  where: ChannelBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteChannelByPkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCheckworthinessArgs = {
  where: CheckworthinessBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCheckworthinessByPkArgs = {
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
export type Mutation_RootDeleteCommentUserReactionsArgs = {
  where: CommentUserReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCommentUserReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteEventArgs = {
  where: EventBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEventByPkArgs = {
  id: Scalars['bigint']['input'];
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
export type Mutation_RootDeleteHandbookSectionsArgs = {
  where: HandbookSectionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteHandbookSectionsByPkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootDeletePageContentArgs = {
  where: PageContentBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePageContentByPkArgs = {
  pageName: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRatingLabelArgs = {
  where: RatingLabelBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRatingLabelByPkArgs = {
  name: Scalars['String']['input'];
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
export type Mutation_RootDeleteUserAccountViewArgs = {
  where: UserAccountViewBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserClaimStatusArgs = {
  where: UserClaimStatusBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserClaimStatusByPkArgs = {
  claimId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
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
export type Mutation_RootInsertChannelArgs = {
  objects: Array<ChannelInsertInput>;
  onConflict?: InputMaybe<ChannelOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertChannelOneArgs = {
  object: ChannelInsertInput;
  onConflict?: InputMaybe<ChannelOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCheckworthinessArgs = {
  objects: Array<CheckworthinessInsertInput>;
  onConflict?: InputMaybe<CheckworthinessOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCheckworthinessOneArgs = {
  object: CheckworthinessInsertInput;
  onConflict?: InputMaybe<CheckworthinessOnConflict>;
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
export type Mutation_RootInsertCommentUserReactionsArgs = {
  objects: Array<CommentUserReactionsInsertInput>;
  onConflict?: InputMaybe<CommentUserReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentUserReactionsOneArgs = {
  object: CommentUserReactionsInsertInput;
  onConflict?: InputMaybe<CommentUserReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventArgs = {
  objects: Array<EventInsertInput>;
  onConflict?: InputMaybe<EventOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventOneArgs = {
  object: EventInsertInput;
  onConflict?: InputMaybe<EventOnConflict>;
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
export type Mutation_RootInsertHandbookSectionsArgs = {
  objects: Array<HandbookSectionsInsertInput>;
  onConflict?: InputMaybe<HandbookSectionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertHandbookSectionsOneArgs = {
  object: HandbookSectionsInsertInput;
  onConflict?: InputMaybe<HandbookSectionsOnConflict>;
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
export type Mutation_RootInsertPageContentArgs = {
  objects: Array<PageContentInsertInput>;
  onConflict?: InputMaybe<PageContentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPageContentOneArgs = {
  object: PageContentInsertInput;
  onConflict?: InputMaybe<PageContentOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingLabelArgs = {
  objects: Array<RatingLabelInsertInput>;
  onConflict?: InputMaybe<RatingLabelOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRatingLabelOneArgs = {
  object: RatingLabelInsertInput;
  onConflict?: InputMaybe<RatingLabelOnConflict>;
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
export type Mutation_RootInsertUserAccountViewArgs = {
  objects: Array<UserAccountViewInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertUserAccountViewOneArgs = {
  object: UserAccountViewInsertInput;
};


/** mutation root */
export type Mutation_RootInsertUserClaimStatusArgs = {
  objects: Array<UserClaimStatusInsertInput>;
  onConflict?: InputMaybe<UserClaimStatusOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserClaimStatusOneArgs = {
  object: UserClaimStatusInsertInput;
  onConflict?: InputMaybe<UserClaimStatusOnConflict>;
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
export type Mutation_RootSendMessageToCheckbotMessagePostArgs = {
  textPayloadInput: TextPayloadInput;
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
export type Mutation_RootUpdateChannelArgs = {
  _set?: InputMaybe<ChannelSetInput>;
  where: ChannelBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateChannelByPkArgs = {
  _set?: InputMaybe<ChannelSetInput>;
  pkColumns: ChannelPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateChannelManyArgs = {
  updates: Array<ChannelUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCheckworthinessArgs = {
  _inc?: InputMaybe<CheckworthinessIncInput>;
  _set?: InputMaybe<CheckworthinessSetInput>;
  where: CheckworthinessBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCheckworthinessByPkArgs = {
  _inc?: InputMaybe<CheckworthinessIncInput>;
  _set?: InputMaybe<CheckworthinessSetInput>;
  pkColumns: CheckworthinessPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCheckworthinessManyArgs = {
  updates: Array<CheckworthinessUpdates>;
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
export type Mutation_RootUpdateCommentUserReactionsArgs = {
  _set?: InputMaybe<CommentUserReactionsSetInput>;
  where: CommentUserReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCommentUserReactionsByPkArgs = {
  _set?: InputMaybe<CommentUserReactionsSetInput>;
  pkColumns: CommentUserReactionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCommentUserReactionsManyArgs = {
  updates: Array<CommentUserReactionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEventArgs = {
  _inc?: InputMaybe<EventIncInput>;
  _set?: InputMaybe<EventSetInput>;
  where: EventBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEventByPkArgs = {
  _inc?: InputMaybe<EventIncInput>;
  _set?: InputMaybe<EventSetInput>;
  pkColumns: EventPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEventManyArgs = {
  updates: Array<EventUpdates>;
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
export type Mutation_RootUpdateHandbookSectionsArgs = {
  _set?: InputMaybe<HandbookSectionsSetInput>;
  where: HandbookSectionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateHandbookSectionsByPkArgs = {
  _set?: InputMaybe<HandbookSectionsSetInput>;
  pkColumns: HandbookSectionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateHandbookSectionsManyArgs = {
  updates: Array<HandbookSectionsUpdates>;
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
export type Mutation_RootUpdatePageContentArgs = {
  _set?: InputMaybe<PageContentSetInput>;
  where: PageContentBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePageContentByPkArgs = {
  _set?: InputMaybe<PageContentSetInput>;
  pkColumns: PageContentPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePageContentManyArgs = {
  updates: Array<PageContentUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRatingLabelArgs = {
  _set?: InputMaybe<RatingLabelSetInput>;
  where: RatingLabelBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRatingLabelByPkArgs = {
  _set?: InputMaybe<RatingLabelSetInput>;
  pkColumns: RatingLabelPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRatingLabelManyArgs = {
  updates: Array<RatingLabelUpdates>;
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
export type Mutation_RootUpdateUserAccountViewArgs = {
  _set?: InputMaybe<UserAccountViewSetInput>;
  where: UserAccountViewBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserAccountViewManyArgs = {
  updates: Array<UserAccountViewUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pkColumns: UserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserClaimStatusArgs = {
  _set?: InputMaybe<UserClaimStatusSetInput>;
  where: UserClaimStatusBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserClaimStatusByPkArgs = {
  _set?: InputMaybe<UserClaimStatusSetInput>;
  pkColumns: UserClaimStatusPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserClaimStatusManyArgs = {
  updates: Array<UserClaimStatusUpdates>;
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
export type Mutation_RootUpdateUserRoleArgs = {
  role: UserRole;
  userId: Scalars['uuid']['input'];
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
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channelAggregate: ChannelAggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channelByPk?: Maybe<Channel>;
  /** fetch data from the table: "checkworthiness" */
  checkworthiness: Array<Checkworthiness>;
  /** fetch aggregated fields from the table: "checkworthiness" */
  checkworthinessAggregate: CheckworthinessAggregate;
  /** fetch data from the table: "checkworthiness" using primary key columns */
  checkworthinessByPk?: Maybe<Checkworthiness>;
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
  /** fetch data from the table: "comment_user_reactions" */
  commentUserReactions: Array<CommentUserReactions>;
  /** fetch aggregated fields from the table: "comment_user_reactions" */
  commentUserReactionsAggregate: CommentUserReactionsAggregate;
  /** fetch data from the table: "comment_user_reactions" using primary key columns */
  commentUserReactionsByPk?: Maybe<CommentUserReactions>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  eventAggregate: EventAggregate;
  /** fetch data from the table: "event" using primary key columns */
  eventByPk?: Maybe<Event>;
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
  /** fetch data from the table: "handbook_sections" */
  handbookSections: Array<HandbookSections>;
  /** fetch aggregated fields from the table: "handbook_sections" */
  handbookSectionsAggregate: HandbookSectionsAggregate;
  /** fetch data from the table: "handbook_sections" using primary key columns */
  handbookSectionsByPk?: Maybe<HandbookSections>;
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
  /** fetch data from the table: "page_content" */
  pageContent: Array<PageContent>;
  /** fetch aggregated fields from the table: "page_content" */
  pageContentAggregate: PageContentAggregate;
  /** fetch data from the table: "page_content" using primary key columns */
  pageContentByPk?: Maybe<PageContent>;
  /** fetch data from the table: "rating_label" */
  ratingLabel: Array<RatingLabel>;
  /** fetch aggregated fields from the table: "rating_label" */
  ratingLabelAggregate: RatingLabelAggregate;
  /** fetch data from the table: "rating_label" using primary key columns */
  ratingLabelByPk?: Maybe<RatingLabel>;
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
  /** fetch data from the table: "user_account_view" */
  userAccountView: Array<UserAccountView>;
  /** fetch aggregated fields from the table: "user_account_view" */
  userAccountViewAggregate: UserAccountViewAggregate;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_claim_status" */
  userClaimStatus: Array<UserClaimStatus>;
  /** fetch aggregated fields from the table: "user_claim_status" */
  userClaimStatusAggregate: UserClaimStatusAggregate;
  /** fetch data from the table: "user_claim_status" using primary key columns */
  userClaimStatusByPk?: Maybe<UserClaimStatus>;
  /** fetch data from the table: "user_history" */
  userHistory: Array<UserHistory>;
  /** fetch aggregated fields from the table: "user_history" */
  userHistoryAggregate: UserHistoryAggregate;
  /** fetch data from the table: "user_history" using primary key columns */
  userHistoryByPk?: Maybe<UserHistory>;
  /** Get Roles of users by array of user ids */
  userRole: Array<UserRoleResponse>;
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
  name: Scalars['String']['input'];
};


export type Query_RootChannelArgs = {
  distinctOn?: InputMaybe<Array<ChannelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderBy>>;
  where?: InputMaybe<ChannelBoolExp>;
};


export type Query_RootChannelAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChannelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderBy>>;
  where?: InputMaybe<ChannelBoolExp>;
};


export type Query_RootChannelByPkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootCheckworthinessArgs = {
  distinctOn?: InputMaybe<Array<CheckworthinessSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CheckworthinessOrderBy>>;
  where?: InputMaybe<CheckworthinessBoolExp>;
};


export type Query_RootCheckworthinessAggregateArgs = {
  distinctOn?: InputMaybe<Array<CheckworthinessSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CheckworthinessOrderBy>>;
  where?: InputMaybe<CheckworthinessBoolExp>;
};


export type Query_RootCheckworthinessByPkArgs = {
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


export type Query_RootCommentUserReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


export type Query_RootCommentUserReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


export type Query_RootCommentUserReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Query_RootEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Query_RootEventByPkArgs = {
  id: Scalars['bigint']['input'];
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


export type Query_RootHandbookSectionsArgs = {
  distinctOn?: InputMaybe<Array<HandbookSectionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HandbookSectionsOrderBy>>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
};


export type Query_RootHandbookSectionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HandbookSectionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HandbookSectionsOrderBy>>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
};


export type Query_RootHandbookSectionsByPkArgs = {
  id: Scalars['uuid']['input'];
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


export type Query_RootPageContentArgs = {
  distinctOn?: InputMaybe<Array<PageContentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PageContentOrderBy>>;
  where?: InputMaybe<PageContentBoolExp>;
};


export type Query_RootPageContentAggregateArgs = {
  distinctOn?: InputMaybe<Array<PageContentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PageContentOrderBy>>;
  where?: InputMaybe<PageContentBoolExp>;
};


export type Query_RootPageContentByPkArgs = {
  pageName: Scalars['String']['input'];
};


export type Query_RootRatingLabelArgs = {
  distinctOn?: InputMaybe<Array<RatingLabelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingLabelOrderBy>>;
  where?: InputMaybe<RatingLabelBoolExp>;
};


export type Query_RootRatingLabelAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingLabelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingLabelOrderBy>>;
  where?: InputMaybe<RatingLabelBoolExp>;
};


export type Query_RootRatingLabelByPkArgs = {
  name: Scalars['String']['input'];
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


export type Query_RootUserAccountViewArgs = {
  distinctOn?: InputMaybe<Array<UserAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAccountViewOrderBy>>;
  where?: InputMaybe<UserAccountViewBoolExp>;
};


export type Query_RootUserAccountViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAccountViewOrderBy>>;
  where?: InputMaybe<UserAccountViewBoolExp>;
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


export type Query_RootUserClaimStatusArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};


export type Query_RootUserClaimStatusAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};


export type Query_RootUserClaimStatusByPkArgs = {
  claimId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
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


export type Query_RootUserRoleArgs = {
  ids: Array<InputMaybe<Scalars['uuid']['input']>>;
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
  /** fetch data from the table: "channel" */
  channel: Array<Channel>;
  /** fetch aggregated fields from the table: "channel" */
  channelAggregate: ChannelAggregate;
  /** fetch data from the table: "channel" using primary key columns */
  channelByPk?: Maybe<Channel>;
  /** fetch data from the table in a streaming manner: "channel" */
  channelStream: Array<Channel>;
  /** fetch data from the table: "checkworthiness" */
  checkworthiness: Array<Checkworthiness>;
  /** fetch aggregated fields from the table: "checkworthiness" */
  checkworthinessAggregate: CheckworthinessAggregate;
  /** fetch data from the table: "checkworthiness" using primary key columns */
  checkworthinessByPk?: Maybe<Checkworthiness>;
  /** fetch data from the table in a streaming manner: "checkworthiness" */
  checkworthinessStream: Array<Checkworthiness>;
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
  /** fetch data from the table: "comment_user_reactions" */
  commentUserReactions: Array<CommentUserReactions>;
  /** fetch aggregated fields from the table: "comment_user_reactions" */
  commentUserReactionsAggregate: CommentUserReactionsAggregate;
  /** fetch data from the table: "comment_user_reactions" using primary key columns */
  commentUserReactionsByPk?: Maybe<CommentUserReactions>;
  /** fetch data from the table in a streaming manner: "comment_user_reactions" */
  commentUserReactionsStream: Array<CommentUserReactions>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  eventAggregate: EventAggregate;
  /** fetch data from the table: "event" using primary key columns */
  eventByPk?: Maybe<Event>;
  /** fetch data from the table in a streaming manner: "event" */
  eventStream: Array<Event>;
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
  /** fetch data from the table: "handbook_sections" */
  handbookSections: Array<HandbookSections>;
  /** fetch aggregated fields from the table: "handbook_sections" */
  handbookSectionsAggregate: HandbookSectionsAggregate;
  /** fetch data from the table: "handbook_sections" using primary key columns */
  handbookSectionsByPk?: Maybe<HandbookSections>;
  /** fetch data from the table in a streaming manner: "handbook_sections" */
  handbookSectionsStream: Array<HandbookSections>;
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
  /** fetch data from the table: "page_content" */
  pageContent: Array<PageContent>;
  /** fetch aggregated fields from the table: "page_content" */
  pageContentAggregate: PageContentAggregate;
  /** fetch data from the table: "page_content" using primary key columns */
  pageContentByPk?: Maybe<PageContent>;
  /** fetch data from the table in a streaming manner: "page_content" */
  pageContentStream: Array<PageContent>;
  /** fetch data from the table: "rating_label" */
  ratingLabel: Array<RatingLabel>;
  /** fetch aggregated fields from the table: "rating_label" */
  ratingLabelAggregate: RatingLabelAggregate;
  /** fetch data from the table: "rating_label" using primary key columns */
  ratingLabelByPk?: Maybe<RatingLabel>;
  /** fetch data from the table in a streaming manner: "rating_label" */
  ratingLabelStream: Array<RatingLabel>;
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
  /** fetch data from the table: "user_account_view" */
  userAccountView: Array<UserAccountView>;
  /** fetch aggregated fields from the table: "user_account_view" */
  userAccountViewAggregate: UserAccountViewAggregate;
  /** fetch data from the table in a streaming manner: "user_account_view" */
  userAccountViewStream: Array<UserAccountView>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table: "user_claim_status" */
  userClaimStatus: Array<UserClaimStatus>;
  /** fetch aggregated fields from the table: "user_claim_status" */
  userClaimStatusAggregate: UserClaimStatusAggregate;
  /** fetch data from the table: "user_claim_status" using primary key columns */
  userClaimStatusByPk?: Maybe<UserClaimStatus>;
  /** fetch data from the table in a streaming manner: "user_claim_status" */
  userClaimStatusStream: Array<UserClaimStatus>;
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
  name: Scalars['String']['input'];
};


export type Subscription_RootCategoryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CategoryStreamCursorInput>>;
  where?: InputMaybe<CategoryBoolExp>;
};


export type Subscription_RootChannelArgs = {
  distinctOn?: InputMaybe<Array<ChannelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderBy>>;
  where?: InputMaybe<ChannelBoolExp>;
};


export type Subscription_RootChannelAggregateArgs = {
  distinctOn?: InputMaybe<Array<ChannelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChannelOrderBy>>;
  where?: InputMaybe<ChannelBoolExp>;
};


export type Subscription_RootChannelByPkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootChannelStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ChannelStreamCursorInput>>;
  where?: InputMaybe<ChannelBoolExp>;
};


export type Subscription_RootCheckworthinessArgs = {
  distinctOn?: InputMaybe<Array<CheckworthinessSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CheckworthinessOrderBy>>;
  where?: InputMaybe<CheckworthinessBoolExp>;
};


export type Subscription_RootCheckworthinessAggregateArgs = {
  distinctOn?: InputMaybe<Array<CheckworthinessSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CheckworthinessOrderBy>>;
  where?: InputMaybe<CheckworthinessBoolExp>;
};


export type Subscription_RootCheckworthinessByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCheckworthinessStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CheckworthinessStreamCursorInput>>;
  where?: InputMaybe<CheckworthinessBoolExp>;
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


export type Subscription_RootCommentUserReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


export type Subscription_RootCommentUserReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentUserReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentUserReactionsOrderBy>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


export type Subscription_RootCommentUserReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCommentUserReactionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CommentUserReactionsStreamCursorInput>>;
  where?: InputMaybe<CommentUserReactionsBoolExp>;
};


export type Subscription_RootEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Subscription_RootEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Subscription_RootEventByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootEventStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventStreamCursorInput>>;
  where?: InputMaybe<EventBoolExp>;
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


export type Subscription_RootHandbookSectionsArgs = {
  distinctOn?: InputMaybe<Array<HandbookSectionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HandbookSectionsOrderBy>>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
};


export type Subscription_RootHandbookSectionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HandbookSectionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HandbookSectionsOrderBy>>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
};


export type Subscription_RootHandbookSectionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHandbookSectionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<HandbookSectionsStreamCursorInput>>;
  where?: InputMaybe<HandbookSectionsBoolExp>;
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


export type Subscription_RootPageContentArgs = {
  distinctOn?: InputMaybe<Array<PageContentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PageContentOrderBy>>;
  where?: InputMaybe<PageContentBoolExp>;
};


export type Subscription_RootPageContentAggregateArgs = {
  distinctOn?: InputMaybe<Array<PageContentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PageContentOrderBy>>;
  where?: InputMaybe<PageContentBoolExp>;
};


export type Subscription_RootPageContentByPkArgs = {
  pageName: Scalars['String']['input'];
};


export type Subscription_RootPageContentStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PageContentStreamCursorInput>>;
  where?: InputMaybe<PageContentBoolExp>;
};


export type Subscription_RootRatingLabelArgs = {
  distinctOn?: InputMaybe<Array<RatingLabelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingLabelOrderBy>>;
  where?: InputMaybe<RatingLabelBoolExp>;
};


export type Subscription_RootRatingLabelAggregateArgs = {
  distinctOn?: InputMaybe<Array<RatingLabelSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RatingLabelOrderBy>>;
  where?: InputMaybe<RatingLabelBoolExp>;
};


export type Subscription_RootRatingLabelByPkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootRatingLabelStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RatingLabelStreamCursorInput>>;
  where?: InputMaybe<RatingLabelBoolExp>;
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


export type Subscription_RootUserAccountViewArgs = {
  distinctOn?: InputMaybe<Array<UserAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAccountViewOrderBy>>;
  where?: InputMaybe<UserAccountViewBoolExp>;
};


export type Subscription_RootUserAccountViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserAccountViewOrderBy>>;
  where?: InputMaybe<UserAccountViewBoolExp>;
};


export type Subscription_RootUserAccountViewStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserAccountViewStreamCursorInput>>;
  where?: InputMaybe<UserAccountViewBoolExp>;
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


export type Subscription_RootUserClaimStatusArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};


export type Subscription_RootUserClaimStatusAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserClaimStatusOrderBy>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
};


export type Subscription_RootUserClaimStatusByPkArgs = {
  claimId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootUserClaimStatusStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserClaimStatusStreamCursorInput>>;
  where?: InputMaybe<UserClaimStatusBoolExp>;
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

export type UserAggregateBoolExpBool_And = {
  arguments: UserSelectColumnUserAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserAggregateBoolExpBool_Or = {
  arguments: UserSelectColumnUserAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserBoolExp>;
  predicate: IntComparisonExp;
};

export type UserClaimStatusAggregateBoolExpBool_And = {
  arguments: UserClaimStatusSelectColumnUserClaimStatusAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserClaimStatusBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserClaimStatusAggregateBoolExpBool_Or = {
  arguments: UserClaimStatusSelectColumnUserClaimStatusAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserClaimStatusBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserClaimStatusAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserClaimStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserClaimStatusBoolExp>;
  predicate: IntComparisonExp;
};

export type UserHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type AnonymizeUserProfileMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  username: Scalars['String']['input'];
}>;


export type AnonymizeUserProfileMutation = { __typename?: 'mutation_root', updateUserByPk?: { __typename?: 'User', id: any } | null };

export type DeleteUserByPkMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteUserByPkMutation = { __typename?: 'mutation_root', deleteUserByPk?: { __typename?: 'User', id: any } | null };

export type GetAllUsersProfileImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersProfileImagesQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', id: any, profileImage?: any | null, username: string }> };

export type GetClaimSubmitterNotesQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetClaimSubmitterNotesQuery = { __typename?: 'query_root', data?: { __typename?: 'Claim', submitterNotes?: string | null } | null };

export type GetClaimsWithoutCheckworthinessQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type GetClaimsWithoutCheckworthinessQuery = { __typename?: 'query_root', data: Array<{ __typename?: 'Claim', id: any }> };

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUserByUsernameQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', profileImage?: any | null, id: any }> };

export type InsertCheckworthinessMutationVariables = Exact<{
  confidence: Scalars['float8']['input'];
  claimId: Scalars['uuid']['input'];
  category: Scalars['check_worth_category']['input'];
}>;


export type InsertCheckworthinessMutation = { __typename?: 'mutation_root', data?: { __typename?: 'Checkworthiness', id: any } | null };

export type InsertUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  profileImage: Scalars['uuid']['input'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insertUserOne?: { __typename?: 'User', id: any } | null };

export type QueryChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryChannelsQuery = { __typename?: 'query_root', channels: Array<{ __typename?: 'Channel', archived: boolean, descriptionDe: string, descriptionEn: string, fileId?: any | null, internal: boolean, labelDe: string, labelEn: string, name: string }> };

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
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type InsertFileMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null };

export type InsertFileAndInsertOriginMutationVariables = Exact<{
  claimId: Scalars['uuid']['input'];
  fileId: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertFileAndInsertOriginMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null, insertOriginOne?: { __typename?: 'Origin', id: any, claimId: any, index?: number | null, url?: string | null, archiveUrl?: string | null, excerpt?: string | null, remarks?: string | null, file?: { __typename?: 'File', id: any, mimeType: string, name: string, eTag: string, transcription?: string | null } | null } | null };

export type InsertFileAndInsertSourceMutationVariables = Exact<{
  factId: Scalars['uuid']['input'];
  fileId: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  archiveUrl?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertFileAndInsertSourceMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null, insertSourceOne?: { __typename?: 'Source', id: any, index?: number | null, factId: any, url?: string | null, archiveUrl?: string | null, excerpt?: string | null, remarks?: string | null, file?: { __typename?: 'File', id: any, mimeType: string, name: string, eTag: string, transcription?: string | null } | null, fact: { __typename?: 'Fact', claimId: any } } | null };

export type InsertFileAndUpdateOriginFileMutationVariables = Exact<{
  fileId: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  entryId: Scalars['uuid']['input'];
}>;


export type InsertFileAndUpdateOriginFileMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null, updateOriginByPk?: { __typename?: 'Origin', id: any } | null };

export type InsertFileAndUpdateSourceFileMutationVariables = Exact<{
  fileId: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  entryId: Scalars['uuid']['input'];
}>;


export type InsertFileAndUpdateSourceFileMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null, updateSourceByPk?: { __typename?: 'Source', id: any } | null };

export type InsertFileAndUpdateUserProfileImageMutationVariables = Exact<{
  fileId: Scalars['uuid']['input'];
  eTag: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  entryId: Scalars['uuid']['input'];
}>;


export type InsertFileAndUpdateUserProfileImageMutation = { __typename?: 'mutation_root', insertFileOne?: { __typename?: 'File', id: any } | null, updateUserByPk?: { __typename?: 'User', id: any } | null };

export type GetUserProfileImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileImagesQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'User', id: any, username: string, profileImage?: any | null }> };


export const AnonymizeUserProfileDocument = gql`
    mutation anonymizeUserProfile($id: uuid!, $username: String!) {
  updateUserByPk(
    pkColumns: {id: $id}
    _set: {username: $username, bio: null, email: $username, firstName: null, lastName: null, mobileNumber: null, profileImage: $id, pronouns: null}
  ) {
    id
  }
}
    `;
export const DeleteUserByPkDocument = gql`
    mutation deleteUserByPk($id: uuid!) {
  deleteUserByPk(id: $id) {
    id
  }
}
    `;
export const GetAllUsersProfileImagesDocument = gql`
    query GetAllUsersProfileImages {
  user {
    id
    profileImage
    username
  }
}
    `;
export const GetClaimSubmitterNotesDocument = gql`
    query getClaimSubmitterNotes($id: uuid!) {
  data: claimByPk(id: $id) {
    submitterNotes
  }
}
    `;
export const GetClaimsWithoutCheckworthinessDocument = gql`
    query getClaimsWithoutCheckworthiness($limit: Int!, $offset: Int!) {
  data: claim(
    limit: $limit
    offset: $offset
    where: {_not: {checkworthiness: {}}}
  ) {
    id
  }
}
    `;
export const GetUserByUsernameDocument = gql`
    query getUserByUsername($username: String!) {
  user(where: {username: {_eq: $username}}) {
    profileImage
    id
  }
}
    `;
export const InsertCheckworthinessDocument = gql`
    mutation insertCheckworthiness($confidence: float8!, $claimId: uuid!, $category: check_worth_category!) {
  data: insertCheckworthinessOne(
    object: {claimId: $claimId, confidence: $confidence, category: $category}
  ) {
    id
  }
}
    `;
export const InsertUserDocument = gql`
    mutation insertUser($id: uuid!, $email: String!, $username: String!, $firstName: String!, $lastName: String!, $profileImage: uuid!) {
  insertUserOne(
    object: {id: $id, email: $email, username: $username, firstName: $firstName, lastName: $lastName, profileImage: $profileImage}
  ) {
    id
  }
}
    `;
export const QueryChannelsDocument = gql`
    query queryChannels {
  channels: channel {
    archived
    descriptionDe
    descriptionEn
    fileId
    internal
    labelDe
    labelEn
    name
  }
}
    `;
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
    mutation insertFile($id: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $createdBy: uuid) {
  insertFileOne(
    object: {id: $id, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size, createdBy: $createdBy}
  ) {
    id
  }
}
    `;
export const InsertFileAndInsertOriginDocument = gql`
    mutation insertFileAndInsertOrigin($claimId: uuid!, $fileId: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $url: String = null, $excerpt: String = null, $archiveUrl: String = null, $remarks: String = null) {
  insertFileOne(
    object: {id: $fileId, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size}
  ) {
    id
  }
  insertOriginOne(
    object: {claimId: $claimId, fileId: $fileId, url: $url, excerpt: $excerpt, archiveUrl: $archiveUrl, remarks: $remarks}
  ) {
    id
    claimId
    index
    url
    archiveUrl
    excerpt
    remarks
    file {
      id
      mimeType
      name
      eTag
      transcription
    }
  }
}
    `;
export const InsertFileAndInsertSourceDocument = gql`
    mutation insertFileAndInsertSource($factId: uuid!, $fileId: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $url: String = null, $excerpt: String = null, $archiveUrl: String = null, $remarks: String = null) {
  insertFileOne(
    object: {id: $fileId, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size}
  ) {
    id
  }
  insertSourceOne(
    object: {factId: $factId, fileId: $fileId, url: $url, excerpt: $excerpt, archiveUrl: $archiveUrl, remarks: $remarks}
  ) {
    id
    index
    factId
    url
    archiveUrl
    excerpt
    remarks
    file {
      id
      mimeType
      name
      eTag
      transcription
    }
    fact {
      claimId
    }
  }
}
    `;
export const InsertFileAndUpdateOriginFileDocument = gql`
    mutation insertFileAndUpdateOriginFile($fileId: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $entryId: uuid!) {
  insertFileOne(
    object: {id: $fileId, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size}
  ) {
    id
  }
  updateOriginByPk(pkColumns: {id: $entryId}, _set: {fileId: $fileId}) {
    id
  }
}
    `;
export const InsertFileAndUpdateSourceFileDocument = gql`
    mutation insertFileAndUpdateSourceFile($fileId: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $entryId: uuid!) {
  insertFileOne(
    object: {id: $fileId, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size}
  ) {
    id
  }
  updateSourceByPk(pkColumns: {id: $entryId}, _set: {fileId: $fileId}) {
    id
  }
}
    `;
export const InsertFileAndUpdateUserProfileImageDocument = gql`
    mutation insertFileAndUpdateUserProfileImage($fileId: uuid!, $eTag: String!, $mimeType: String!, $name: String!, $size: Int!, $entryId: uuid!) {
  insertFileOne(
    object: {id: $fileId, eTag: $eTag, mimeType: $mimeType, name: $name, size: $size}
  ) {
    id
  }
  updateUserByPk(pkColumns: {id: $entryId}, _set: {profileImage: $fileId}) {
    id
  }
}
    `;
export const GetUserProfileImagesDocument = gql`
    query getUserProfileImages {
  user {
    id
    username
    profileImage
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    anonymizeUserProfile(variables: AnonymizeUserProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AnonymizeUserProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AnonymizeUserProfileMutation>(AnonymizeUserProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'anonymizeUserProfile', 'mutation', variables);
    },
    deleteUserByPk(variables: DeleteUserByPkMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteUserByPkMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserByPkMutation>(DeleteUserByPkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserByPk', 'mutation', variables);
    },
    GetAllUsersProfileImages(variables?: GetAllUsersProfileImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllUsersProfileImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUsersProfileImagesQuery>(GetAllUsersProfileImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllUsersProfileImages', 'query', variables);
    },
    getClaimSubmitterNotes(variables: GetClaimSubmitterNotesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetClaimSubmitterNotesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetClaimSubmitterNotesQuery>(GetClaimSubmitterNotesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getClaimSubmitterNotes', 'query', variables);
    },
    getClaimsWithoutCheckworthiness(variables: GetClaimsWithoutCheckworthinessQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetClaimsWithoutCheckworthinessQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetClaimsWithoutCheckworthinessQuery>(GetClaimsWithoutCheckworthinessDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getClaimsWithoutCheckworthiness', 'query', variables);
    },
    getUserByUsername(variables: GetUserByUsernameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByUsernameQuery>(GetUserByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByUsername', 'query', variables);
    },
    insertCheckworthiness(variables: InsertCheckworthinessMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertCheckworthinessMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertCheckworthinessMutation>(InsertCheckworthinessDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertCheckworthiness', 'mutation', variables);
    },
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUser', 'mutation', variables);
    },
    queryChannels(variables?: QueryChannelsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<QueryChannelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QueryChannelsQuery>(QueryChannelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'queryChannels', 'query', variables);
    },
    InsertClaim(variables?: InsertClaimMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertClaimMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertClaimMutation>(InsertClaimDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertClaim', 'mutation', variables);
    },
    getFileById(variables: GetFileByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFileByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFileByIdQuery>(GetFileByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFileById', 'query', variables);
    },
    insertFile(variables: InsertFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileMutation>(InsertFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFile', 'mutation', variables);
    },
    insertFileAndInsertOrigin(variables: InsertFileAndInsertOriginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileAndInsertOriginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileAndInsertOriginMutation>(InsertFileAndInsertOriginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFileAndInsertOrigin', 'mutation', variables);
    },
    insertFileAndInsertSource(variables: InsertFileAndInsertSourceMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileAndInsertSourceMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileAndInsertSourceMutation>(InsertFileAndInsertSourceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFileAndInsertSource', 'mutation', variables);
    },
    insertFileAndUpdateOriginFile(variables: InsertFileAndUpdateOriginFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileAndUpdateOriginFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileAndUpdateOriginFileMutation>(InsertFileAndUpdateOriginFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFileAndUpdateOriginFile', 'mutation', variables);
    },
    insertFileAndUpdateSourceFile(variables: InsertFileAndUpdateSourceFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileAndUpdateSourceFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileAndUpdateSourceFileMutation>(InsertFileAndUpdateSourceFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFileAndUpdateSourceFile', 'mutation', variables);
    },
    insertFileAndUpdateUserProfileImage(variables: InsertFileAndUpdateUserProfileImageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<InsertFileAndUpdateUserProfileImageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertFileAndUpdateUserProfileImageMutation>(InsertFileAndUpdateUserProfileImageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertFileAndUpdateUserProfileImage', 'mutation', variables);
    },
    getUserProfileImages(variables?: GetUserProfileImagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserProfileImagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserProfileImagesQuery>(GetUserProfileImagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserProfileImages', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;