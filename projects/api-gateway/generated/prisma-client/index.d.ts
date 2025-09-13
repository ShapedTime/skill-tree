
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model SkillCategory
 * 
 */
export type SkillCategory = $Result.DefaultSelection<Prisma.$SkillCategoryPayload>
/**
 * Model SkillTree
 * 
 */
export type SkillTree = $Result.DefaultSelection<Prisma.$SkillTreePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model UserSkillTreeProgress
 * 
 */
export type UserSkillTreeProgress = $Result.DefaultSelection<Prisma.$UserSkillTreeProgressPayload>
/**
 * Model UserSkillProgress
 * 
 */
export type UserSkillProgress = $Result.DefaultSelection<Prisma.$UserSkillProgressPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>
/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DifficultyLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const SkillType: {
  KNOWLEDGE: 'KNOWLEDGE',
  PRACTICAL: 'PRACTICAL',
  PROJECT: 'PROJECT',
  ASSESSMENT: 'ASSESSMENT',
  MILESTONE: 'MILESTONE'
};

export type SkillType = (typeof SkillType)[keyof typeof SkillType]


export const TreeProgressStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED'
};

export type TreeProgressStatus = (typeof TreeProgressStatus)[keyof typeof TreeProgressStatus]


export const SkillProgressStatus: {
  LOCKED: 'LOCKED',
  AVAILABLE: 'AVAILABLE',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  SKIPPED: 'SKIPPED'
};

export type SkillProgressStatus = (typeof SkillProgressStatus)[keyof typeof SkillProgressStatus]


export const CompletionMethod: {
  MANUAL: 'MANUAL',
  ASSESSMENT: 'ASSESSMENT',
  PROJECT: 'PROJECT',
  TIME_BASED: 'TIME_BASED',
  EXTERNAL: 'EXTERNAL'
};

export type CompletionMethod = (typeof CompletionMethod)[keyof typeof CompletionMethod]


export const AchievementCategory: {
  PROGRESS: 'PROGRESS',
  STREAK: 'STREAK',
  EXPLORATION: 'EXPLORATION',
  MASTERY: 'MASTERY',
  SOCIAL: 'SOCIAL',
  TIME: 'TIME'
};

export type AchievementCategory = (typeof AchievementCategory)[keyof typeof AchievementCategory]


export const AchievementRarity: {
  COMMON: 'COMMON',
  UNCOMMON: 'UNCOMMON',
  RARE: 'RARE',
  LEGENDARY: 'LEGENDARY'
};

export type AchievementRarity = (typeof AchievementRarity)[keyof typeof AchievementRarity]

}

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type SkillType = $Enums.SkillType

export const SkillType: typeof $Enums.SkillType

export type TreeProgressStatus = $Enums.TreeProgressStatus

export const TreeProgressStatus: typeof $Enums.TreeProgressStatus

export type SkillProgressStatus = $Enums.SkillProgressStatus

export const SkillProgressStatus: typeof $Enums.SkillProgressStatus

export type CompletionMethod = $Enums.CompletionMethod

export const CompletionMethod: typeof $Enums.CompletionMethod

export type AchievementCategory = $Enums.AchievementCategory

export const AchievementCategory: typeof $Enums.AchievementCategory

export type AchievementRarity = $Enums.AchievementRarity

export const AchievementRarity: typeof $Enums.AchievementRarity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillCategory`: Exposes CRUD operations for the **SkillCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillCategories
    * const skillCategories = await prisma.skillCategory.findMany()
    * ```
    */
  get skillCategory(): Prisma.SkillCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillTree`: Exposes CRUD operations for the **SkillTree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillTrees
    * const skillTrees = await prisma.skillTree.findMany()
    * ```
    */
  get skillTree(): Prisma.SkillTreeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillTreeProgress`: Exposes CRUD operations for the **UserSkillTreeProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillTreeProgresses
    * const userSkillTreeProgresses = await prisma.userSkillTreeProgress.findMany()
    * ```
    */
  get userSkillTreeProgress(): Prisma.UserSkillTreeProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkillProgress`: Exposes CRUD operations for the **UserSkillProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillProgresses
    * const userSkillProgresses = await prisma.userSkillProgress.findMany()
    * ```
    */
  get userSkillProgress(): Prisma.UserSkillProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    SkillCategory: 'SkillCategory',
    SkillTree: 'SkillTree',
    Skill: 'Skill',
    UserSkillTreeProgress: 'UserSkillTreeProgress',
    UserSkillProgress: 'UserSkillProgress',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement',
    UserSession: 'UserSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "skillCategory" | "skillTree" | "skill" | "userSkillTreeProgress" | "userSkillProgress" | "achievement" | "userAchievement" | "userSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      SkillCategory: {
        payload: Prisma.$SkillCategoryPayload<ExtArgs>
        fields: Prisma.SkillCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findFirst: {
            args: Prisma.SkillCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          findMany: {
            args: Prisma.SkillCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          create: {
            args: Prisma.SkillCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          createMany: {
            args: Prisma.SkillCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          delete: {
            args: Prisma.SkillCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          update: {
            args: Prisma.SkillCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SkillCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SkillCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillCategoryPayload>
          }
          aggregate: {
            args: Prisma.SkillCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillCategory>
          }
          groupBy: {
            args: Prisma.SkillCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCategoryCountAggregateOutputType> | number
          }
        }
      }
      SkillTree: {
        payload: Prisma.$SkillTreePayload<ExtArgs>
        fields: Prisma.SkillTreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillTreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillTreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          findFirst: {
            args: Prisma.SkillTreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillTreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          findMany: {
            args: Prisma.SkillTreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>[]
          }
          create: {
            args: Prisma.SkillTreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          createMany: {
            args: Prisma.SkillTreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillTreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>[]
          }
          delete: {
            args: Prisma.SkillTreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          update: {
            args: Prisma.SkillTreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          deleteMany: {
            args: Prisma.SkillTreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillTreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillTreeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>[]
          }
          upsert: {
            args: Prisma.SkillTreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillTreePayload>
          }
          aggregate: {
            args: Prisma.SkillTreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillTree>
          }
          groupBy: {
            args: Prisma.SkillTreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillTreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillTreeCountArgs<ExtArgs>
            result: $Utils.Optional<SkillTreeCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      UserSkillTreeProgress: {
        payload: Prisma.$UserSkillTreeProgressPayload<ExtArgs>
        fields: Prisma.UserSkillTreeProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillTreeProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillTreeProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          findFirst: {
            args: Prisma.UserSkillTreeProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillTreeProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          findMany: {
            args: Prisma.UserSkillTreeProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>[]
          }
          create: {
            args: Prisma.UserSkillTreeProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          createMany: {
            args: Prisma.UserSkillTreeProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillTreeProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>[]
          }
          delete: {
            args: Prisma.UserSkillTreeProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          update: {
            args: Prisma.UserSkillTreeProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillTreeProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillTreeProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillTreeProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillTreeProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillTreeProgressPayload>
          }
          aggregate: {
            args: Prisma.UserSkillTreeProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillTreeProgress>
          }
          groupBy: {
            args: Prisma.UserSkillTreeProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillTreeProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillTreeProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillTreeProgressCountAggregateOutputType> | number
          }
        }
      }
      UserSkillProgress: {
        payload: Prisma.$UserSkillProgressPayload<ExtArgs>
        fields: Prisma.UserSkillProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          findFirst: {
            args: Prisma.UserSkillProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          findMany: {
            args: Prisma.UserSkillProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>[]
          }
          create: {
            args: Prisma.UserSkillProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          createMany: {
            args: Prisma.UserSkillProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>[]
          }
          delete: {
            args: Prisma.UserSkillProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          update: {
            args: Prisma.UserSkillProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillProgressPayload>
          }
          aggregate: {
            args: Prisma.UserSkillProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkillProgress>
          }
          groupBy: {
            args: Prisma.UserSkillProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillProgressCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    skillCategory?: SkillCategoryOmit
    skillTree?: SkillTreeOmit
    skill?: SkillOmit
    userSkillTreeProgress?: UserSkillTreeProgressOmit
    userSkillProgress?: UserSkillProgressOmit
    achievement?: AchievementOmit
    userAchievement?: UserAchievementOmit
    userSession?: UserSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    skillTreeProgress: number
    skillProgress: number
    achievements: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTreeProgress?: boolean | UserCountOutputTypeCountSkillTreeProgressArgs
    skillProgress?: boolean | UserCountOutputTypeCountSkillProgressArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillTreeProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillTreeProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
  }


  /**
   * Count Type SkillCategoryCountOutputType
   */

  export type SkillCategoryCountOutputType = {
    skillTrees: number
  }

  export type SkillCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTrees?: boolean | SkillCategoryCountOutputTypeCountSkillTreesArgs
  }

  // Custom InputTypes
  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategoryCountOutputType
     */
    select?: SkillCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCategoryCountOutputType without action
   */
  export type SkillCategoryCountOutputTypeCountSkillTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillTreeWhereInput
  }


  /**
   * Count Type SkillTreeCountOutputType
   */

  export type SkillTreeCountOutputType = {
    skills: number
    userProgress: number
  }

  export type SkillTreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillTreeCountOutputTypeCountSkillsArgs
    userProgress?: boolean | SkillTreeCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * SkillTreeCountOutputType without action
   */
  export type SkillTreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTreeCountOutputType
     */
    select?: SkillTreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillTreeCountOutputType without action
   */
  export type SkillTreeCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * SkillTreeCountOutputType without action
   */
  export type SkillTreeCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillTreeProgressWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    childSkills: number
    userProgress: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childSkills?: boolean | SkillCountOutputTypeCountChildSkillsArgs
    userProgress?: boolean | SkillCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountChildSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillProgressWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    userAchievements: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | AchievementCountOutputTypeCountUserAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUserAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    firstName: number
    lastName: number
    avatarUrl: number
    isActive: number
    emailVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    passwordHash: string
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    isActive: boolean
    emailVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    updatedBy: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    skillTreeProgress?: boolean | User$skillTreeProgressArgs<ExtArgs>
    skillProgress?: boolean | User$skillProgressArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "firstName" | "lastName" | "avatarUrl" | "isActive" | "emailVerified" | "lastLoginAt" | "createdAt" | "updatedAt" | "createdBy" | "updatedBy", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTreeProgress?: boolean | User$skillTreeProgressArgs<ExtArgs>
    skillProgress?: boolean | User$skillProgressArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skillTreeProgress: Prisma.$UserSkillTreeProgressPayload<ExtArgs>[]
      skillProgress: Prisma.$UserSkillProgressPayload<ExtArgs>[]
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[]
      sessions: Prisma.$UserSessionPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string
      firstName: string | null
      lastName: string | null
      avatarUrl: string | null
      isActive: boolean
      emailVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      updatedBy: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillTreeProgress<T extends User$skillTreeProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$skillTreeProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillProgress<T extends User$skillProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$skillProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly updatedBy: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.skillTreeProgress
   */
  export type User$skillTreeProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    where?: UserSkillTreeProgressWhereInput
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    cursor?: UserSkillTreeProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillTreeProgressScalarFieldEnum | UserSkillTreeProgressScalarFieldEnum[]
  }

  /**
   * User.skillProgress
   */
  export type User$skillProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    where?: UserSkillProgressWhereInput
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    cursor?: UserSkillProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillProgressScalarFieldEnum | UserSkillProgressScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    cursor?: UserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
    currentStreak: number | null
    maxStreak: number | null
    skillsCompleted: number | null
    hoursLearned: number | null
    treesStarted: number | null
    treesCompleted: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
    currentStreak: number | null
    maxStreak: number | null
    skillsCompleted: number | null
    hoursLearned: number | null
    treesStarted: number | null
    treesCompleted: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    bio: string | null
    location: string | null
    website: string | null
    timezone: string | null
    totalXp: number | null
    currentLevel: number | null
    currentStreak: number | null
    maxStreak: number | null
    lastActivityAt: Date | null
    skillsCompleted: number | null
    hoursLearned: number | null
    treesStarted: number | null
    treesCompleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    bio: string | null
    location: string | null
    website: string | null
    timezone: string | null
    totalXp: number | null
    currentLevel: number | null
    currentStreak: number | null
    maxStreak: number | null
    lastActivityAt: Date | null
    skillsCompleted: number | null
    hoursLearned: number | null
    treesStarted: number | null
    treesCompleted: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    bio: number
    location: number
    website: number
    timezone: number
    learningGoals: number
    interests: number
    preferences: number
    totalXp: number
    currentLevel: number
    currentStreak: number
    maxStreak: number
    lastActivityAt: number
    skillsCompleted: number
    hoursLearned: number
    treesStarted: number
    treesCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    totalXp?: true
    currentLevel?: true
    currentStreak?: true
    maxStreak?: true
    skillsCompleted?: true
    hoursLearned?: true
    treesStarted?: true
    treesCompleted?: true
  }

  export type UserProfileSumAggregateInputType = {
    totalXp?: true
    currentLevel?: true
    currentStreak?: true
    maxStreak?: true
    skillsCompleted?: true
    hoursLearned?: true
    treesStarted?: true
    treesCompleted?: true
  }

  export type UserProfileMinAggregateInputType = {
    userId?: true
    bio?: true
    location?: true
    website?: true
    timezone?: true
    totalXp?: true
    currentLevel?: true
    currentStreak?: true
    maxStreak?: true
    lastActivityAt?: true
    skillsCompleted?: true
    hoursLearned?: true
    treesStarted?: true
    treesCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    bio?: true
    location?: true
    website?: true
    timezone?: true
    totalXp?: true
    currentLevel?: true
    currentStreak?: true
    maxStreak?: true
    lastActivityAt?: true
    skillsCompleted?: true
    hoursLearned?: true
    treesStarted?: true
    treesCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    bio?: true
    location?: true
    website?: true
    timezone?: true
    learningGoals?: true
    interests?: true
    preferences?: true
    totalXp?: true
    currentLevel?: true
    currentStreak?: true
    maxStreak?: true
    lastActivityAt?: true
    skillsCompleted?: true
    hoursLearned?: true
    treesStarted?: true
    treesCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    bio: string | null
    location: string | null
    website: string | null
    timezone: string | null
    learningGoals: string[]
    interests: string[]
    preferences: JsonValue
    totalXp: number
    currentLevel: number
    currentStreak: number
    maxStreak: number
    lastActivityAt: Date | null
    skillsCompleted: number
    hoursLearned: number
    treesStarted: number
    treesCompleted: number
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    timezone?: boolean
    learningGoals?: boolean
    interests?: boolean
    preferences?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    lastActivityAt?: boolean
    skillsCompleted?: boolean
    hoursLearned?: boolean
    treesStarted?: boolean
    treesCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    timezone?: boolean
    learningGoals?: boolean
    interests?: boolean
    preferences?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    lastActivityAt?: boolean
    skillsCompleted?: boolean
    hoursLearned?: boolean
    treesStarted?: boolean
    treesCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    timezone?: boolean
    learningGoals?: boolean
    interests?: boolean
    preferences?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    lastActivityAt?: boolean
    skillsCompleted?: boolean
    hoursLearned?: boolean
    treesStarted?: boolean
    treesCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    bio?: boolean
    location?: boolean
    website?: boolean
    timezone?: boolean
    learningGoals?: boolean
    interests?: boolean
    preferences?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    lastActivityAt?: boolean
    skillsCompleted?: boolean
    hoursLearned?: boolean
    treesStarted?: boolean
    treesCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "bio" | "location" | "website" | "timezone" | "learningGoals" | "interests" | "preferences" | "totalXp" | "currentLevel" | "currentStreak" | "maxStreak" | "lastActivityAt" | "skillsCompleted" | "hoursLearned" | "treesStarted" | "treesCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      bio: string | null
      location: string | null
      website: string | null
      timezone: string | null
      learningGoals: string[]
      interests: string[]
      preferences: Prisma.JsonValue
      totalXp: number
      currentLevel: number
      currentStreak: number
      maxStreak: number
      lastActivityAt: Date | null
      skillsCompleted: number
      hoursLearned: number
      treesStarted: number
      treesCompleted: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly location: FieldRef<"UserProfile", 'String'>
    readonly website: FieldRef<"UserProfile", 'String'>
    readonly timezone: FieldRef<"UserProfile", 'String'>
    readonly learningGoals: FieldRef<"UserProfile", 'String[]'>
    readonly interests: FieldRef<"UserProfile", 'String[]'>
    readonly preferences: FieldRef<"UserProfile", 'Json'>
    readonly totalXp: FieldRef<"UserProfile", 'Int'>
    readonly currentLevel: FieldRef<"UserProfile", 'Int'>
    readonly currentStreak: FieldRef<"UserProfile", 'Int'>
    readonly maxStreak: FieldRef<"UserProfile", 'Int'>
    readonly lastActivityAt: FieldRef<"UserProfile", 'DateTime'>
    readonly skillsCompleted: FieldRef<"UserProfile", 'Int'>
    readonly hoursLearned: FieldRef<"UserProfile", 'Float'>
    readonly treesStarted: FieldRef<"UserProfile", 'Int'>
    readonly treesCompleted: FieldRef<"UserProfile", 'Int'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model SkillCategory
   */

  export type AggregateSkillCategory = {
    _count: SkillCategoryCountAggregateOutputType | null
    _avg: SkillCategoryAvgAggregateOutputType | null
    _sum: SkillCategorySumAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  export type SkillCategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type SkillCategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type SkillCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    color: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    color: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    color: number
    icon: number
    sortOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillCategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type SkillCategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type SkillCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    color?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    color?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    color?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategory to aggregate.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillCategories
    **/
    _count?: true | SkillCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type GetSkillCategoryAggregateType<T extends SkillCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillCategory[P]>
      : GetScalarType<T[P], AggregateSkillCategory[P]>
  }




  export type SkillCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillCategoryWhereInput
    orderBy?: SkillCategoryOrderByWithAggregationInput | SkillCategoryOrderByWithAggregationInput[]
    by: SkillCategoryScalarFieldEnum[] | SkillCategoryScalarFieldEnum
    having?: SkillCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCategoryCountAggregateInputType | true
    _avg?: SkillCategoryAvgAggregateInputType
    _sum?: SkillCategorySumAggregateInputType
    _min?: SkillCategoryMinAggregateInputType
    _max?: SkillCategoryMaxAggregateInputType
  }

  export type SkillCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    color: string | null
    icon: string | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SkillCategoryCountAggregateOutputType | null
    _avg: SkillCategoryAvgAggregateOutputType | null
    _sum: SkillCategorySumAggregateOutputType | null
    _min: SkillCategoryMinAggregateOutputType | null
    _max: SkillCategoryMaxAggregateOutputType | null
  }

  type GetSkillCategoryGroupByPayload<T extends SkillCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SkillCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SkillCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillTrees?: boolean | SkillCategory$skillTreesArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillCategory"]>

  export type SkillCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    color?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "color" | "icon" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["skillCategory"]>
  export type SkillCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTrees?: boolean | SkillCategory$skillTreesArgs<ExtArgs>
    _count?: boolean | SkillCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillCategory"
    objects: {
      skillTrees: Prisma.$SkillTreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      color: string | null
      icon: string | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skillCategory"]>
    composites: {}
  }

  type SkillCategoryGetPayload<S extends boolean | null | undefined | SkillCategoryDefaultArgs> = $Result.GetResult<Prisma.$SkillCategoryPayload, S>

  type SkillCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCategoryCountAggregateInputType | true
    }

  export interface SkillCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillCategory'], meta: { name: 'SkillCategory' } }
    /**
     * Find zero or one SkillCategory that matches the filter.
     * @param {SkillCategoryFindUniqueArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillCategoryFindUniqueArgs>(args: SelectSubset<T, SkillCategoryFindUniqueArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillCategoryFindUniqueOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillCategoryFindFirstArgs>(args?: SelectSubset<T, SkillCategoryFindFirstArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindFirstOrThrowArgs} args - Arguments to find a SkillCategory
     * @example
     * // Get one SkillCategory
     * const skillCategory = await prisma.skillCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany()
     * 
     * // Get first 10 SkillCategories
     * const skillCategories = await prisma.skillCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillCategoryFindManyArgs>(args?: SelectSubset<T, SkillCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillCategory.
     * @param {SkillCategoryCreateArgs} args - Arguments to create a SkillCategory.
     * @example
     * // Create one SkillCategory
     * const SkillCategory = await prisma.skillCategory.create({
     *   data: {
     *     // ... data to create a SkillCategory
     *   }
     * })
     * 
     */
    create<T extends SkillCategoryCreateArgs>(args: SelectSubset<T, SkillCategoryCreateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillCategories.
     * @param {SkillCategoryCreateManyArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCategoryCreateManyArgs>(args?: SelectSubset<T, SkillCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillCategories and returns the data saved in the database.
     * @param {SkillCategoryCreateManyAndReturnArgs} args - Arguments to create many SkillCategories.
     * @example
     * // Create many SkillCategories
     * const skillCategory = await prisma.skillCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillCategory.
     * @param {SkillCategoryDeleteArgs} args - Arguments to delete one SkillCategory.
     * @example
     * // Delete one SkillCategory
     * const SkillCategory = await prisma.skillCategory.delete({
     *   where: {
     *     // ... filter to delete one SkillCategory
     *   }
     * })
     * 
     */
    delete<T extends SkillCategoryDeleteArgs>(args: SelectSubset<T, SkillCategoryDeleteArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillCategory.
     * @param {SkillCategoryUpdateArgs} args - Arguments to update one SkillCategory.
     * @example
     * // Update one SkillCategory
     * const skillCategory = await prisma.skillCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillCategoryUpdateArgs>(args: SelectSubset<T, SkillCategoryUpdateArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillCategories.
     * @param {SkillCategoryDeleteManyArgs} args - Arguments to filter SkillCategories to delete.
     * @example
     * // Delete a few SkillCategories
     * const { count } = await prisma.skillCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillCategoryDeleteManyArgs>(args?: SelectSubset<T, SkillCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillCategoryUpdateManyArgs>(args: SelectSubset<T, SkillCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillCategories and returns the data updated in the database.
     * @param {SkillCategoryUpdateManyAndReturnArgs} args - Arguments to update many SkillCategories.
     * @example
     * // Update many SkillCategories
     * const skillCategory = await prisma.skillCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillCategories and only return the `id`
     * const skillCategoryWithIdOnly = await prisma.skillCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillCategory.
     * @param {SkillCategoryUpsertArgs} args - Arguments to update or create a SkillCategory.
     * @example
     * // Update or create a SkillCategory
     * const skillCategory = await prisma.skillCategory.upsert({
     *   create: {
     *     // ... data to create a SkillCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillCategory we want to update
     *   }
     * })
     */
    upsert<T extends SkillCategoryUpsertArgs>(args: SelectSubset<T, SkillCategoryUpsertArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryCountArgs} args - Arguments to filter SkillCategories to count.
     * @example
     * // Count the number of SkillCategories
     * const count = await prisma.skillCategory.count({
     *   where: {
     *     // ... the filter for the SkillCategories we want to count
     *   }
     * })
    **/
    count<T extends SkillCategoryCountArgs>(
      args?: Subset<T, SkillCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillCategoryAggregateArgs>(args: Subset<T, SkillCategoryAggregateArgs>): Prisma.PrismaPromise<GetSkillCategoryAggregateType<T>>

    /**
     * Group by SkillCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SkillCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillCategory model
   */
  readonly fields: SkillCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillTrees<T extends SkillCategory$skillTreesArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategory$skillTreesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillCategory model
   */
  interface SkillCategoryFieldRefs {
    readonly id: FieldRef<"SkillCategory", 'String'>
    readonly name: FieldRef<"SkillCategory", 'String'>
    readonly slug: FieldRef<"SkillCategory", 'String'>
    readonly description: FieldRef<"SkillCategory", 'String'>
    readonly color: FieldRef<"SkillCategory", 'String'>
    readonly icon: FieldRef<"SkillCategory", 'String'>
    readonly sortOrder: FieldRef<"SkillCategory", 'Int'>
    readonly isActive: FieldRef<"SkillCategory", 'Boolean'>
    readonly createdAt: FieldRef<"SkillCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillCategory findUnique
   */
  export type SkillCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findUniqueOrThrow
   */
  export type SkillCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory findFirst
   */
  export type SkillCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findFirstOrThrow
   */
  export type SkillCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategory to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillCategories.
     */
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory findMany
   */
  export type SkillCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SkillCategories to fetch.
     */
    where?: SkillCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillCategories to fetch.
     */
    orderBy?: SkillCategoryOrderByWithRelationInput | SkillCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillCategories.
     */
    cursor?: SkillCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillCategories.
     */
    skip?: number
    distinct?: SkillCategoryScalarFieldEnum | SkillCategoryScalarFieldEnum[]
  }

  /**
   * SkillCategory create
   */
  export type SkillCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillCategory.
     */
    data: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
  }

  /**
   * SkillCategory createMany
   */
  export type SkillCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory createManyAndReturn
   */
  export type SkillCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SkillCategories.
     */
    data: SkillCategoryCreateManyInput | SkillCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillCategory update
   */
  export type SkillCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillCategory.
     */
    data: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
    /**
     * Choose, which SkillCategory to update.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory updateMany
   */
  export type SkillCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory updateManyAndReturn
   */
  export type SkillCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SkillCategories.
     */
    data: XOR<SkillCategoryUpdateManyMutationInput, SkillCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SkillCategories to update
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to update.
     */
    limit?: number
  }

  /**
   * SkillCategory upsert
   */
  export type SkillCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillCategory to update in case it exists.
     */
    where: SkillCategoryWhereUniqueInput
    /**
     * In case the SkillCategory found by the `where` argument doesn't exist, create a new SkillCategory with this data.
     */
    create: XOR<SkillCategoryCreateInput, SkillCategoryUncheckedCreateInput>
    /**
     * In case the SkillCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillCategoryUpdateInput, SkillCategoryUncheckedUpdateInput>
  }

  /**
   * SkillCategory delete
   */
  export type SkillCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
    /**
     * Filter which SkillCategory to delete.
     */
    where: SkillCategoryWhereUniqueInput
  }

  /**
   * SkillCategory deleteMany
   */
  export type SkillCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillCategories to delete
     */
    where?: SkillCategoryWhereInput
    /**
     * Limit how many SkillCategories to delete.
     */
    limit?: number
  }

  /**
   * SkillCategory.skillTrees
   */
  export type SkillCategory$skillTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    where?: SkillTreeWhereInput
    orderBy?: SkillTreeOrderByWithRelationInput | SkillTreeOrderByWithRelationInput[]
    cursor?: SkillTreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillTreeScalarFieldEnum | SkillTreeScalarFieldEnum[]
  }

  /**
   * SkillCategory without action
   */
  export type SkillCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCategory
     */
    select?: SkillCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillCategory
     */
    omit?: SkillCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SkillTree
   */

  export type AggregateSkillTree = {
    _count: SkillTreeCountAggregateOutputType | null
    _avg: SkillTreeAvgAggregateOutputType | null
    _sum: SkillTreeSumAggregateOutputType | null
    _min: SkillTreeMinAggregateOutputType | null
    _max: SkillTreeMaxAggregateOutputType | null
  }

  export type SkillTreeAvgAggregateOutputType = {
    estimatedHours: number | null
  }

  export type SkillTreeSumAggregateOutputType = {
    estimatedHours: number | null
  }

  export type SkillTreeMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedHours: number | null
    version: string | null
    isPublished: boolean | null
    isFeatured: boolean | null
    isAiGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SkillTreeMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedHours: number | null
    version: string | null
    isPublished: boolean | null
    isFeatured: boolean | null
    isAiGenerated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SkillTreeCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    slug: number
    description: number
    shortDescription: number
    difficulty: number
    estimatedHours: number
    prerequisites: number
    tags: number
    version: number
    layoutConfig: number
    themeConfig: number
    isPublished: number
    isFeatured: number
    isAiGenerated: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type SkillTreeAvgAggregateInputType = {
    estimatedHours?: true
  }

  export type SkillTreeSumAggregateInputType = {
    estimatedHours?: true
  }

  export type SkillTreeMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    version?: true
    isPublished?: true
    isFeatured?: true
    isAiGenerated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SkillTreeMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    version?: true
    isPublished?: true
    isFeatured?: true
    isAiGenerated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SkillTreeCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    prerequisites?: true
    tags?: true
    version?: true
    layoutConfig?: true
    themeConfig?: true
    isPublished?: true
    isFeatured?: true
    isAiGenerated?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type SkillTreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillTree to aggregate.
     */
    where?: SkillTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillTrees to fetch.
     */
    orderBy?: SkillTreeOrderByWithRelationInput | SkillTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillTrees
    **/
    _count?: true | SkillTreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillTreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillTreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillTreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillTreeMaxAggregateInputType
  }

  export type GetSkillTreeAggregateType<T extends SkillTreeAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillTree[P]>
      : GetScalarType<T[P], AggregateSkillTree[P]>
  }




  export type SkillTreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillTreeWhereInput
    orderBy?: SkillTreeOrderByWithAggregationInput | SkillTreeOrderByWithAggregationInput[]
    by: SkillTreeScalarFieldEnum[] | SkillTreeScalarFieldEnum
    having?: SkillTreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillTreeCountAggregateInputType | true
    _avg?: SkillTreeAvgAggregateInputType
    _sum?: SkillTreeSumAggregateInputType
    _min?: SkillTreeMinAggregateInputType
    _max?: SkillTreeMaxAggregateInputType
  }

  export type SkillTreeGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    slug: string
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel
    estimatedHours: number | null
    prerequisites: string[]
    tags: string[]
    version: string
    layoutConfig: JsonValue
    themeConfig: JsonValue
    isPublished: boolean
    isFeatured: boolean
    isAiGenerated: boolean
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    updatedBy: string | null
    _count: SkillTreeCountAggregateOutputType | null
    _avg: SkillTreeAvgAggregateOutputType | null
    _sum: SkillTreeSumAggregateOutputType | null
    _min: SkillTreeMinAggregateOutputType | null
    _max: SkillTreeMaxAggregateOutputType | null
  }

  type GetSkillTreeGroupByPayload<T extends SkillTreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillTreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillTreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillTreeGroupByOutputType[P]>
            : GetScalarType<T[P], SkillTreeGroupByOutputType[P]>
        }
      >
    >


  export type SkillTreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    prerequisites?: boolean
    tags?: boolean
    version?: boolean
    layoutConfig?: boolean
    themeConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    skills?: boolean | SkillTree$skillsArgs<ExtArgs>
    userProgress?: boolean | SkillTree$userProgressArgs<ExtArgs>
    _count?: boolean | SkillTreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    prerequisites?: boolean
    tags?: boolean
    version?: boolean
    layoutConfig?: boolean
    themeConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    prerequisites?: boolean
    tags?: boolean
    version?: boolean
    layoutConfig?: boolean
    themeConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    prerequisites?: boolean
    tags?: boolean
    version?: boolean
    layoutConfig?: boolean
    themeConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type SkillTreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "description" | "shortDescription" | "difficulty" | "estimatedHours" | "prerequisites" | "tags" | "version" | "layoutConfig" | "themeConfig" | "isPublished" | "isFeatured" | "isAiGenerated" | "createdAt" | "updatedAt" | "createdBy" | "updatedBy", ExtArgs["result"]["skillTree"]>
  export type SkillTreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
    skills?: boolean | SkillTree$skillsArgs<ExtArgs>
    userProgress?: boolean | SkillTree$userProgressArgs<ExtArgs>
    _count?: boolean | SkillTreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillTreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }
  export type SkillTreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SkillCategoryDefaultArgs<ExtArgs>
  }

  export type $SkillTreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillTree"
    objects: {
      category: Prisma.$SkillCategoryPayload<ExtArgs>
      skills: Prisma.$SkillPayload<ExtArgs>[]
      userProgress: Prisma.$UserSkillTreeProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      slug: string
      description: string | null
      shortDescription: string | null
      difficulty: $Enums.DifficultyLevel
      estimatedHours: number | null
      prerequisites: string[]
      tags: string[]
      version: string
      layoutConfig: Prisma.JsonValue
      themeConfig: Prisma.JsonValue
      isPublished: boolean
      isFeatured: boolean
      isAiGenerated: boolean
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      updatedBy: string | null
    }, ExtArgs["result"]["skillTree"]>
    composites: {}
  }

  type SkillTreeGetPayload<S extends boolean | null | undefined | SkillTreeDefaultArgs> = $Result.GetResult<Prisma.$SkillTreePayload, S>

  type SkillTreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillTreeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillTreeCountAggregateInputType | true
    }

  export interface SkillTreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillTree'], meta: { name: 'SkillTree' } }
    /**
     * Find zero or one SkillTree that matches the filter.
     * @param {SkillTreeFindUniqueArgs} args - Arguments to find a SkillTree
     * @example
     * // Get one SkillTree
     * const skillTree = await prisma.skillTree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillTreeFindUniqueArgs>(args: SelectSubset<T, SkillTreeFindUniqueArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillTree that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillTreeFindUniqueOrThrowArgs} args - Arguments to find a SkillTree
     * @example
     * // Get one SkillTree
     * const skillTree = await prisma.skillTree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillTreeFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillTreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillTree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeFindFirstArgs} args - Arguments to find a SkillTree
     * @example
     * // Get one SkillTree
     * const skillTree = await prisma.skillTree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillTreeFindFirstArgs>(args?: SelectSubset<T, SkillTreeFindFirstArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillTree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeFindFirstOrThrowArgs} args - Arguments to find a SkillTree
     * @example
     * // Get one SkillTree
     * const skillTree = await prisma.skillTree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillTreeFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillTreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillTrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillTrees
     * const skillTrees = await prisma.skillTree.findMany()
     * 
     * // Get first 10 SkillTrees
     * const skillTrees = await prisma.skillTree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillTreeWithIdOnly = await prisma.skillTree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillTreeFindManyArgs>(args?: SelectSubset<T, SkillTreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillTree.
     * @param {SkillTreeCreateArgs} args - Arguments to create a SkillTree.
     * @example
     * // Create one SkillTree
     * const SkillTree = await prisma.skillTree.create({
     *   data: {
     *     // ... data to create a SkillTree
     *   }
     * })
     * 
     */
    create<T extends SkillTreeCreateArgs>(args: SelectSubset<T, SkillTreeCreateArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillTrees.
     * @param {SkillTreeCreateManyArgs} args - Arguments to create many SkillTrees.
     * @example
     * // Create many SkillTrees
     * const skillTree = await prisma.skillTree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillTreeCreateManyArgs>(args?: SelectSubset<T, SkillTreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillTrees and returns the data saved in the database.
     * @param {SkillTreeCreateManyAndReturnArgs} args - Arguments to create many SkillTrees.
     * @example
     * // Create many SkillTrees
     * const skillTree = await prisma.skillTree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillTrees and only return the `id`
     * const skillTreeWithIdOnly = await prisma.skillTree.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillTreeCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillTreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillTree.
     * @param {SkillTreeDeleteArgs} args - Arguments to delete one SkillTree.
     * @example
     * // Delete one SkillTree
     * const SkillTree = await prisma.skillTree.delete({
     *   where: {
     *     // ... filter to delete one SkillTree
     *   }
     * })
     * 
     */
    delete<T extends SkillTreeDeleteArgs>(args: SelectSubset<T, SkillTreeDeleteArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillTree.
     * @param {SkillTreeUpdateArgs} args - Arguments to update one SkillTree.
     * @example
     * // Update one SkillTree
     * const skillTree = await prisma.skillTree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillTreeUpdateArgs>(args: SelectSubset<T, SkillTreeUpdateArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillTrees.
     * @param {SkillTreeDeleteManyArgs} args - Arguments to filter SkillTrees to delete.
     * @example
     * // Delete a few SkillTrees
     * const { count } = await prisma.skillTree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillTreeDeleteManyArgs>(args?: SelectSubset<T, SkillTreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillTrees
     * const skillTree = await prisma.skillTree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillTreeUpdateManyArgs>(args: SelectSubset<T, SkillTreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillTrees and returns the data updated in the database.
     * @param {SkillTreeUpdateManyAndReturnArgs} args - Arguments to update many SkillTrees.
     * @example
     * // Update many SkillTrees
     * const skillTree = await prisma.skillTree.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillTrees and only return the `id`
     * const skillTreeWithIdOnly = await prisma.skillTree.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillTreeUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillTreeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillTree.
     * @param {SkillTreeUpsertArgs} args - Arguments to update or create a SkillTree.
     * @example
     * // Update or create a SkillTree
     * const skillTree = await prisma.skillTree.upsert({
     *   create: {
     *     // ... data to create a SkillTree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillTree we want to update
     *   }
     * })
     */
    upsert<T extends SkillTreeUpsertArgs>(args: SelectSubset<T, SkillTreeUpsertArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillTrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeCountArgs} args - Arguments to filter SkillTrees to count.
     * @example
     * // Count the number of SkillTrees
     * const count = await prisma.skillTree.count({
     *   where: {
     *     // ... the filter for the SkillTrees we want to count
     *   }
     * })
    **/
    count<T extends SkillTreeCountArgs>(
      args?: Subset<T, SkillTreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillTreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillTreeAggregateArgs>(args: Subset<T, SkillTreeAggregateArgs>): Prisma.PrismaPromise<GetSkillTreeAggregateType<T>>

    /**
     * Group by SkillTree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillTreeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillTreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillTreeGroupByArgs['orderBy'] }
        : { orderBy?: SkillTreeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillTreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillTree model
   */
  readonly fields: SkillTreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillTree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillTreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends SkillCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillCategoryDefaultArgs<ExtArgs>>): Prisma__SkillCategoryClient<$Result.GetResult<Prisma.$SkillCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends SkillTree$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillTree$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends SkillTree$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, SkillTree$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillTree model
   */
  interface SkillTreeFieldRefs {
    readonly id: FieldRef<"SkillTree", 'String'>
    readonly categoryId: FieldRef<"SkillTree", 'String'>
    readonly name: FieldRef<"SkillTree", 'String'>
    readonly slug: FieldRef<"SkillTree", 'String'>
    readonly description: FieldRef<"SkillTree", 'String'>
    readonly shortDescription: FieldRef<"SkillTree", 'String'>
    readonly difficulty: FieldRef<"SkillTree", 'DifficultyLevel'>
    readonly estimatedHours: FieldRef<"SkillTree", 'Float'>
    readonly prerequisites: FieldRef<"SkillTree", 'String[]'>
    readonly tags: FieldRef<"SkillTree", 'String[]'>
    readonly version: FieldRef<"SkillTree", 'String'>
    readonly layoutConfig: FieldRef<"SkillTree", 'Json'>
    readonly themeConfig: FieldRef<"SkillTree", 'Json'>
    readonly isPublished: FieldRef<"SkillTree", 'Boolean'>
    readonly isFeatured: FieldRef<"SkillTree", 'Boolean'>
    readonly isAiGenerated: FieldRef<"SkillTree", 'Boolean'>
    readonly createdAt: FieldRef<"SkillTree", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillTree", 'DateTime'>
    readonly createdBy: FieldRef<"SkillTree", 'String'>
    readonly updatedBy: FieldRef<"SkillTree", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkillTree findUnique
   */
  export type SkillTreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter, which SkillTree to fetch.
     */
    where: SkillTreeWhereUniqueInput
  }

  /**
   * SkillTree findUniqueOrThrow
   */
  export type SkillTreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter, which SkillTree to fetch.
     */
    where: SkillTreeWhereUniqueInput
  }

  /**
   * SkillTree findFirst
   */
  export type SkillTreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter, which SkillTree to fetch.
     */
    where?: SkillTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillTrees to fetch.
     */
    orderBy?: SkillTreeOrderByWithRelationInput | SkillTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillTrees.
     */
    cursor?: SkillTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillTrees.
     */
    distinct?: SkillTreeScalarFieldEnum | SkillTreeScalarFieldEnum[]
  }

  /**
   * SkillTree findFirstOrThrow
   */
  export type SkillTreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter, which SkillTree to fetch.
     */
    where?: SkillTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillTrees to fetch.
     */
    orderBy?: SkillTreeOrderByWithRelationInput | SkillTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillTrees.
     */
    cursor?: SkillTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillTrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillTrees.
     */
    distinct?: SkillTreeScalarFieldEnum | SkillTreeScalarFieldEnum[]
  }

  /**
   * SkillTree findMany
   */
  export type SkillTreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter, which SkillTrees to fetch.
     */
    where?: SkillTreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillTrees to fetch.
     */
    orderBy?: SkillTreeOrderByWithRelationInput | SkillTreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillTrees.
     */
    cursor?: SkillTreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillTrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillTrees.
     */
    skip?: number
    distinct?: SkillTreeScalarFieldEnum | SkillTreeScalarFieldEnum[]
  }

  /**
   * SkillTree create
   */
  export type SkillTreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillTree.
     */
    data: XOR<SkillTreeCreateInput, SkillTreeUncheckedCreateInput>
  }

  /**
   * SkillTree createMany
   */
  export type SkillTreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillTrees.
     */
    data: SkillTreeCreateManyInput | SkillTreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillTree createManyAndReturn
   */
  export type SkillTreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * The data used to create many SkillTrees.
     */
    data: SkillTreeCreateManyInput | SkillTreeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillTree update
   */
  export type SkillTreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillTree.
     */
    data: XOR<SkillTreeUpdateInput, SkillTreeUncheckedUpdateInput>
    /**
     * Choose, which SkillTree to update.
     */
    where: SkillTreeWhereUniqueInput
  }

  /**
   * SkillTree updateMany
   */
  export type SkillTreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillTrees.
     */
    data: XOR<SkillTreeUpdateManyMutationInput, SkillTreeUncheckedUpdateManyInput>
    /**
     * Filter which SkillTrees to update
     */
    where?: SkillTreeWhereInput
    /**
     * Limit how many SkillTrees to update.
     */
    limit?: number
  }

  /**
   * SkillTree updateManyAndReturn
   */
  export type SkillTreeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * The data used to update SkillTrees.
     */
    data: XOR<SkillTreeUpdateManyMutationInput, SkillTreeUncheckedUpdateManyInput>
    /**
     * Filter which SkillTrees to update
     */
    where?: SkillTreeWhereInput
    /**
     * Limit how many SkillTrees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillTree upsert
   */
  export type SkillTreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillTree to update in case it exists.
     */
    where: SkillTreeWhereUniqueInput
    /**
     * In case the SkillTree found by the `where` argument doesn't exist, create a new SkillTree with this data.
     */
    create: XOR<SkillTreeCreateInput, SkillTreeUncheckedCreateInput>
    /**
     * In case the SkillTree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillTreeUpdateInput, SkillTreeUncheckedUpdateInput>
  }

  /**
   * SkillTree delete
   */
  export type SkillTreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
    /**
     * Filter which SkillTree to delete.
     */
    where: SkillTreeWhereUniqueInput
  }

  /**
   * SkillTree deleteMany
   */
  export type SkillTreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillTrees to delete
     */
    where?: SkillTreeWhereInput
    /**
     * Limit how many SkillTrees to delete.
     */
    limit?: number
  }

  /**
   * SkillTree.skills
   */
  export type SkillTree$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * SkillTree.userProgress
   */
  export type SkillTree$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    where?: UserSkillTreeProgressWhereInput
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    cursor?: UserSkillTreeProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillTreeProgressScalarFieldEnum | UserSkillTreeProgressScalarFieldEnum[]
  }

  /**
   * SkillTree without action
   */
  export type SkillTreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillTree
     */
    select?: SkillTreeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillTree
     */
    omit?: SkillTreeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillTreeInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    nodeSize: number | null
  }

  export type SkillSumAggregateOutputType = {
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    nodeSize: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    skillTreeId: string | null
    parentSkillId: string | null
    name: string | null
    shortName: string | null
    description: string | null
    skillType: $Enums.SkillType | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    nodeSize: number | null
    isActive: boolean | null
    isOptional: boolean | null
    isMilestone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    skillTreeId: string | null
    parentSkillId: string | null
    name: string | null
    shortName: string | null
    description: string | null
    skillType: $Enums.SkillType | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    nodeSize: number | null
    isActive: boolean | null
    isOptional: boolean | null
    isMilestone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    updatedBy: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    skillTreeId: number
    parentSkillId: number
    name: number
    shortName: number
    description: number
    learningObjectives: number
    skillType: number
    difficulty: number
    estimatedMinutes: number
    xpValue: number
    dependencies: number
    dependents: number
    positionX: number
    positionY: number
    nodeSize: number
    content: number
    resources: number
    assessments: number
    isActive: number
    isOptional: number
    isMilestone: number
    createdAt: number
    updatedAt: number
    createdBy: number
    updatedBy: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    nodeSize?: true
  }

  export type SkillSumAggregateInputType = {
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    nodeSize?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    skillTreeId?: true
    parentSkillId?: true
    name?: true
    shortName?: true
    description?: true
    skillType?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    nodeSize?: true
    isActive?: true
    isOptional?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    skillTreeId?: true
    parentSkillId?: true
    name?: true
    shortName?: true
    description?: true
    skillType?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    nodeSize?: true
    isActive?: true
    isOptional?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    skillTreeId?: true
    parentSkillId?: true
    name?: true
    shortName?: true
    description?: true
    learningObjectives?: true
    skillType?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    dependencies?: true
    dependents?: true
    positionX?: true
    positionY?: true
    nodeSize?: true
    content?: true
    resources?: true
    assessments?: true
    isActive?: true
    isOptional?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    updatedBy?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    skillTreeId: string
    parentSkillId: string | null
    name: string
    shortName: string | null
    description: string | null
    learningObjectives: string[]
    skillType: $Enums.SkillType
    difficulty: $Enums.DifficultyLevel
    estimatedMinutes: number | null
    xpValue: number
    dependencies: string[]
    dependents: string[]
    positionX: number
    positionY: number
    nodeSize: number
    content: JsonValue | null
    resources: JsonValue | null
    assessments: JsonValue | null
    isActive: boolean
    isOptional: boolean
    isMilestone: boolean
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    updatedBy: string | null
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillTreeId?: boolean
    parentSkillId?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    learningObjectives?: boolean
    skillType?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    dependents?: boolean
    positionX?: boolean
    positionY?: boolean
    nodeSize?: boolean
    content?: boolean
    resources?: boolean
    assessments?: boolean
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
    childSkills?: boolean | Skill$childSkillsArgs<ExtArgs>
    userProgress?: boolean | Skill$userProgressArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillTreeId?: boolean
    parentSkillId?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    learningObjectives?: boolean
    skillType?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    dependents?: boolean
    positionX?: boolean
    positionY?: boolean
    nodeSize?: boolean
    content?: boolean
    resources?: boolean
    assessments?: boolean
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillTreeId?: boolean
    parentSkillId?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    learningObjectives?: boolean
    skillType?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    dependents?: boolean
    positionX?: boolean
    positionY?: boolean
    nodeSize?: boolean
    content?: boolean
    resources?: boolean
    assessments?: boolean
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    skillTreeId?: boolean
    parentSkillId?: boolean
    name?: boolean
    shortName?: boolean
    description?: boolean
    learningObjectives?: boolean
    skillType?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    dependents?: boolean
    positionX?: boolean
    positionY?: boolean
    nodeSize?: boolean
    content?: boolean
    resources?: boolean
    assessments?: boolean
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    updatedBy?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillTreeId" | "parentSkillId" | "name" | "shortName" | "description" | "learningObjectives" | "skillType" | "difficulty" | "estimatedMinutes" | "xpValue" | "dependencies" | "dependents" | "positionX" | "positionY" | "nodeSize" | "content" | "resources" | "assessments" | "isActive" | "isOptional" | "isMilestone" | "createdAt" | "updatedAt" | "createdBy" | "updatedBy", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
    childSkills?: boolean | Skill$childSkillsArgs<ExtArgs>
    userProgress?: boolean | Skill$userProgressArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    parentSkill?: boolean | Skill$parentSkillArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      skillTree: Prisma.$SkillTreePayload<ExtArgs>
      parentSkill: Prisma.$SkillPayload<ExtArgs> | null
      childSkills: Prisma.$SkillPayload<ExtArgs>[]
      userProgress: Prisma.$UserSkillProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skillTreeId: string
      parentSkillId: string | null
      name: string
      shortName: string | null
      description: string | null
      learningObjectives: string[]
      skillType: $Enums.SkillType
      difficulty: $Enums.DifficultyLevel
      estimatedMinutes: number | null
      xpValue: number
      dependencies: string[]
      dependents: string[]
      positionX: number
      positionY: number
      nodeSize: number
      content: Prisma.JsonValue | null
      resources: Prisma.JsonValue | null
      assessments: Prisma.JsonValue | null
      isActive: boolean
      isOptional: boolean
      isMilestone: boolean
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      updatedBy: string | null
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillTree<T extends SkillTreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillTreeDefaultArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentSkill<T extends Skill$parentSkillArgs<ExtArgs> = {}>(args?: Subset<T, Skill$parentSkillArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childSkills<T extends Skill$childSkillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$childSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends Skill$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Skill$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly skillTreeId: FieldRef<"Skill", 'String'>
    readonly parentSkillId: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly shortName: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly learningObjectives: FieldRef<"Skill", 'String[]'>
    readonly skillType: FieldRef<"Skill", 'SkillType'>
    readonly difficulty: FieldRef<"Skill", 'DifficultyLevel'>
    readonly estimatedMinutes: FieldRef<"Skill", 'Int'>
    readonly xpValue: FieldRef<"Skill", 'Int'>
    readonly dependencies: FieldRef<"Skill", 'String[]'>
    readonly dependents: FieldRef<"Skill", 'String[]'>
    readonly positionX: FieldRef<"Skill", 'Float'>
    readonly positionY: FieldRef<"Skill", 'Float'>
    readonly nodeSize: FieldRef<"Skill", 'Int'>
    readonly content: FieldRef<"Skill", 'Json'>
    readonly resources: FieldRef<"Skill", 'Json'>
    readonly assessments: FieldRef<"Skill", 'Json'>
    readonly isActive: FieldRef<"Skill", 'Boolean'>
    readonly isOptional: FieldRef<"Skill", 'Boolean'>
    readonly isMilestone: FieldRef<"Skill", 'Boolean'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
    readonly createdBy: FieldRef<"Skill", 'String'>
    readonly updatedBy: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.parentSkill
   */
  export type Skill$parentSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
  }

  /**
   * Skill.childSkills
   */
  export type Skill$childSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill.userProgress
   */
  export type Skill$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    where?: UserSkillProgressWhereInput
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    cursor?: UserSkillProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillProgressScalarFieldEnum | UserSkillProgressScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model UserSkillTreeProgress
   */

  export type AggregateUserSkillTreeProgress = {
    _count: UserSkillTreeProgressCountAggregateOutputType | null
    _avg: UserSkillTreeProgressAvgAggregateOutputType | null
    _sum: UserSkillTreeProgressSumAggregateOutputType | null
    _min: UserSkillTreeProgressMinAggregateOutputType | null
    _max: UserSkillTreeProgressMaxAggregateOutputType | null
  }

  export type UserSkillTreeProgressAvgAggregateOutputType = {
    progressPercent: number | null
    skillsCompleted: number | null
    totalSkills: number | null
    timeSpentMinutes: number | null
  }

  export type UserSkillTreeProgressSumAggregateOutputType = {
    progressPercent: number | null
    skillsCompleted: number | null
    totalSkills: number | null
    timeSpentMinutes: number | null
  }

  export type UserSkillTreeProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillTreeId: string | null
    status: $Enums.TreeProgressStatus | null
    progressPercent: number | null
    skillsCompleted: number | null
    totalSkills: number | null
    timeSpentMinutes: number | null
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillTreeProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillTreeId: string | null
    status: $Enums.TreeProgressStatus | null
    progressPercent: number | null
    skillsCompleted: number | null
    totalSkills: number | null
    timeSpentMinutes: number | null
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillTreeProgressCountAggregateOutputType = {
    id: number
    userId: number
    skillTreeId: number
    status: number
    progressPercent: number
    skillsCompleted: number
    totalSkills: number
    timeSpentMinutes: number
    startedAt: number
    lastActivityAt: number
    completedAt: number
    milestonesReached: number
    currentPath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillTreeProgressAvgAggregateInputType = {
    progressPercent?: true
    skillsCompleted?: true
    totalSkills?: true
    timeSpentMinutes?: true
  }

  export type UserSkillTreeProgressSumAggregateInputType = {
    progressPercent?: true
    skillsCompleted?: true
    totalSkills?: true
    timeSpentMinutes?: true
  }

  export type UserSkillTreeProgressMinAggregateInputType = {
    id?: true
    userId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    skillsCompleted?: true
    totalSkills?: true
    timeSpentMinutes?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillTreeProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    skillsCompleted?: true
    totalSkills?: true
    timeSpentMinutes?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillTreeProgressCountAggregateInputType = {
    id?: true
    userId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    skillsCompleted?: true
    totalSkills?: true
    timeSpentMinutes?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    milestonesReached?: true
    currentPath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillTreeProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillTreeProgress to aggregate.
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillTreeProgresses to fetch.
     */
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillTreeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillTreeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillTreeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkillTreeProgresses
    **/
    _count?: true | UserSkillTreeProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillTreeProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillTreeProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillTreeProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillTreeProgressMaxAggregateInputType
  }

  export type GetUserSkillTreeProgressAggregateType<T extends UserSkillTreeProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkillTreeProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkillTreeProgress[P]>
      : GetScalarType<T[P], AggregateUserSkillTreeProgress[P]>
  }




  export type UserSkillTreeProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillTreeProgressWhereInput
    orderBy?: UserSkillTreeProgressOrderByWithAggregationInput | UserSkillTreeProgressOrderByWithAggregationInput[]
    by: UserSkillTreeProgressScalarFieldEnum[] | UserSkillTreeProgressScalarFieldEnum
    having?: UserSkillTreeProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillTreeProgressCountAggregateInputType | true
    _avg?: UserSkillTreeProgressAvgAggregateInputType
    _sum?: UserSkillTreeProgressSumAggregateInputType
    _min?: UserSkillTreeProgressMinAggregateInputType
    _max?: UserSkillTreeProgressMaxAggregateInputType
  }

  export type UserSkillTreeProgressGroupByOutputType = {
    id: string
    userId: string
    skillTreeId: string
    status: $Enums.TreeProgressStatus
    progressPercent: number
    skillsCompleted: number
    totalSkills: number
    timeSpentMinutes: number
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    milestonesReached: string[]
    currentPath: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserSkillTreeProgressCountAggregateOutputType | null
    _avg: UserSkillTreeProgressAvgAggregateOutputType | null
    _sum: UserSkillTreeProgressSumAggregateOutputType | null
    _min: UserSkillTreeProgressMinAggregateOutputType | null
    _max: UserSkillTreeProgressMaxAggregateOutputType | null
  }

  type GetUserSkillTreeProgressGroupByPayload<T extends UserSkillTreeProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillTreeProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillTreeProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillTreeProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillTreeProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillTreeProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    skillsCompleted?: boolean
    totalSkills?: boolean
    timeSpentMinutes?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    milestonesReached?: boolean
    currentPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillTreeProgress"]>

  export type UserSkillTreeProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    skillsCompleted?: boolean
    totalSkills?: boolean
    timeSpentMinutes?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    milestonesReached?: boolean
    currentPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillTreeProgress"]>

  export type UserSkillTreeProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    skillsCompleted?: boolean
    totalSkills?: boolean
    timeSpentMinutes?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    milestonesReached?: boolean
    currentPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillTreeProgress"]>

  export type UserSkillTreeProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    skillsCompleted?: boolean
    totalSkills?: boolean
    timeSpentMinutes?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    milestonesReached?: boolean
    currentPath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillTreeProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillTreeId" | "status" | "progressPercent" | "skillsCompleted" | "totalSkills" | "timeSpentMinutes" | "startedAt" | "lastActivityAt" | "completedAt" | "milestonesReached" | "currentPath" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillTreeProgress"]>
  export type UserSkillTreeProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }
  export type UserSkillTreeProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }
  export type UserSkillTreeProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }

  export type $UserSkillTreeProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkillTreeProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skillTree: Prisma.$SkillTreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillTreeId: string
      status: $Enums.TreeProgressStatus
      progressPercent: number
      skillsCompleted: number
      totalSkills: number
      timeSpentMinutes: number
      startedAt: Date | null
      lastActivityAt: Date | null
      completedAt: Date | null
      milestonesReached: string[]
      currentPath: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkillTreeProgress"]>
    composites: {}
  }

  type UserSkillTreeProgressGetPayload<S extends boolean | null | undefined | UserSkillTreeProgressDefaultArgs> = $Result.GetResult<Prisma.$UserSkillTreeProgressPayload, S>

  type UserSkillTreeProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillTreeProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillTreeProgressCountAggregateInputType | true
    }

  export interface UserSkillTreeProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkillTreeProgress'], meta: { name: 'UserSkillTreeProgress' } }
    /**
     * Find zero or one UserSkillTreeProgress that matches the filter.
     * @param {UserSkillTreeProgressFindUniqueArgs} args - Arguments to find a UserSkillTreeProgress
     * @example
     * // Get one UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillTreeProgressFindUniqueArgs>(args: SelectSubset<T, UserSkillTreeProgressFindUniqueArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillTreeProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillTreeProgressFindUniqueOrThrowArgs} args - Arguments to find a UserSkillTreeProgress
     * @example
     * // Get one UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillTreeProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillTreeProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillTreeProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressFindFirstArgs} args - Arguments to find a UserSkillTreeProgress
     * @example
     * // Get one UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillTreeProgressFindFirstArgs>(args?: SelectSubset<T, UserSkillTreeProgressFindFirstArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillTreeProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressFindFirstOrThrowArgs} args - Arguments to find a UserSkillTreeProgress
     * @example
     * // Get one UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillTreeProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillTreeProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillTreeProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkillTreeProgresses
     * const userSkillTreeProgresses = await prisma.userSkillTreeProgress.findMany()
     * 
     * // Get first 10 UserSkillTreeProgresses
     * const userSkillTreeProgresses = await prisma.userSkillTreeProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillTreeProgressWithIdOnly = await prisma.userSkillTreeProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillTreeProgressFindManyArgs>(args?: SelectSubset<T, UserSkillTreeProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillTreeProgress.
     * @param {UserSkillTreeProgressCreateArgs} args - Arguments to create a UserSkillTreeProgress.
     * @example
     * // Create one UserSkillTreeProgress
     * const UserSkillTreeProgress = await prisma.userSkillTreeProgress.create({
     *   data: {
     *     // ... data to create a UserSkillTreeProgress
     *   }
     * })
     * 
     */
    create<T extends UserSkillTreeProgressCreateArgs>(args: SelectSubset<T, UserSkillTreeProgressCreateArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillTreeProgresses.
     * @param {UserSkillTreeProgressCreateManyArgs} args - Arguments to create many UserSkillTreeProgresses.
     * @example
     * // Create many UserSkillTreeProgresses
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillTreeProgressCreateManyArgs>(args?: SelectSubset<T, UserSkillTreeProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillTreeProgresses and returns the data saved in the database.
     * @param {UserSkillTreeProgressCreateManyAndReturnArgs} args - Arguments to create many UserSkillTreeProgresses.
     * @example
     * // Create many UserSkillTreeProgresses
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkillTreeProgresses and only return the `id`
     * const userSkillTreeProgressWithIdOnly = await prisma.userSkillTreeProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillTreeProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillTreeProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillTreeProgress.
     * @param {UserSkillTreeProgressDeleteArgs} args - Arguments to delete one UserSkillTreeProgress.
     * @example
     * // Delete one UserSkillTreeProgress
     * const UserSkillTreeProgress = await prisma.userSkillTreeProgress.delete({
     *   where: {
     *     // ... filter to delete one UserSkillTreeProgress
     *   }
     * })
     * 
     */
    delete<T extends UserSkillTreeProgressDeleteArgs>(args: SelectSubset<T, UserSkillTreeProgressDeleteArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillTreeProgress.
     * @param {UserSkillTreeProgressUpdateArgs} args - Arguments to update one UserSkillTreeProgress.
     * @example
     * // Update one UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillTreeProgressUpdateArgs>(args: SelectSubset<T, UserSkillTreeProgressUpdateArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillTreeProgresses.
     * @param {UserSkillTreeProgressDeleteManyArgs} args - Arguments to filter UserSkillTreeProgresses to delete.
     * @example
     * // Delete a few UserSkillTreeProgresses
     * const { count } = await prisma.userSkillTreeProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillTreeProgressDeleteManyArgs>(args?: SelectSubset<T, UserSkillTreeProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillTreeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkillTreeProgresses
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillTreeProgressUpdateManyArgs>(args: SelectSubset<T, UserSkillTreeProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillTreeProgresses and returns the data updated in the database.
     * @param {UserSkillTreeProgressUpdateManyAndReturnArgs} args - Arguments to update many UserSkillTreeProgresses.
     * @example
     * // Update many UserSkillTreeProgresses
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkillTreeProgresses and only return the `id`
     * const userSkillTreeProgressWithIdOnly = await prisma.userSkillTreeProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSkillTreeProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillTreeProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillTreeProgress.
     * @param {UserSkillTreeProgressUpsertArgs} args - Arguments to update or create a UserSkillTreeProgress.
     * @example
     * // Update or create a UserSkillTreeProgress
     * const userSkillTreeProgress = await prisma.userSkillTreeProgress.upsert({
     *   create: {
     *     // ... data to create a UserSkillTreeProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkillTreeProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillTreeProgressUpsertArgs>(args: SelectSubset<T, UserSkillTreeProgressUpsertArgs<ExtArgs>>): Prisma__UserSkillTreeProgressClient<$Result.GetResult<Prisma.$UserSkillTreeProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillTreeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressCountArgs} args - Arguments to filter UserSkillTreeProgresses to count.
     * @example
     * // Count the number of UserSkillTreeProgresses
     * const count = await prisma.userSkillTreeProgress.count({
     *   where: {
     *     // ... the filter for the UserSkillTreeProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserSkillTreeProgressCountArgs>(
      args?: Subset<T, UserSkillTreeProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillTreeProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkillTreeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSkillTreeProgressAggregateArgs>(args: Subset<T, UserSkillTreeProgressAggregateArgs>): Prisma.PrismaPromise<GetUserSkillTreeProgressAggregateType<T>>

    /**
     * Group by UserSkillTreeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillTreeProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSkillTreeProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillTreeProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillTreeProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSkillTreeProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillTreeProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkillTreeProgress model
   */
  readonly fields: UserSkillTreeProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkillTreeProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillTreeProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skillTree<T extends SkillTreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillTreeDefaultArgs<ExtArgs>>): Prisma__SkillTreeClient<$Result.GetResult<Prisma.$SkillTreePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSkillTreeProgress model
   */
  interface UserSkillTreeProgressFieldRefs {
    readonly id: FieldRef<"UserSkillTreeProgress", 'String'>
    readonly userId: FieldRef<"UserSkillTreeProgress", 'String'>
    readonly skillTreeId: FieldRef<"UserSkillTreeProgress", 'String'>
    readonly status: FieldRef<"UserSkillTreeProgress", 'TreeProgressStatus'>
    readonly progressPercent: FieldRef<"UserSkillTreeProgress", 'Float'>
    readonly skillsCompleted: FieldRef<"UserSkillTreeProgress", 'Int'>
    readonly totalSkills: FieldRef<"UserSkillTreeProgress", 'Int'>
    readonly timeSpentMinutes: FieldRef<"UserSkillTreeProgress", 'Int'>
    readonly startedAt: FieldRef<"UserSkillTreeProgress", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserSkillTreeProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserSkillTreeProgress", 'DateTime'>
    readonly milestonesReached: FieldRef<"UserSkillTreeProgress", 'String[]'>
    readonly currentPath: FieldRef<"UserSkillTreeProgress", 'String[]'>
    readonly createdAt: FieldRef<"UserSkillTreeProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkillTreeProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkillTreeProgress findUnique
   */
  export type UserSkillTreeProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillTreeProgress to fetch.
     */
    where: UserSkillTreeProgressWhereUniqueInput
  }

  /**
   * UserSkillTreeProgress findUniqueOrThrow
   */
  export type UserSkillTreeProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillTreeProgress to fetch.
     */
    where: UserSkillTreeProgressWhereUniqueInput
  }

  /**
   * UserSkillTreeProgress findFirst
   */
  export type UserSkillTreeProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillTreeProgress to fetch.
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillTreeProgresses to fetch.
     */
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillTreeProgresses.
     */
    cursor?: UserSkillTreeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillTreeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillTreeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillTreeProgresses.
     */
    distinct?: UserSkillTreeProgressScalarFieldEnum | UserSkillTreeProgressScalarFieldEnum[]
  }

  /**
   * UserSkillTreeProgress findFirstOrThrow
   */
  export type UserSkillTreeProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillTreeProgress to fetch.
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillTreeProgresses to fetch.
     */
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillTreeProgresses.
     */
    cursor?: UserSkillTreeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillTreeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillTreeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillTreeProgresses.
     */
    distinct?: UserSkillTreeProgressScalarFieldEnum | UserSkillTreeProgressScalarFieldEnum[]
  }

  /**
   * UserSkillTreeProgress findMany
   */
  export type UserSkillTreeProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillTreeProgresses to fetch.
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillTreeProgresses to fetch.
     */
    orderBy?: UserSkillTreeProgressOrderByWithRelationInput | UserSkillTreeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkillTreeProgresses.
     */
    cursor?: UserSkillTreeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillTreeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillTreeProgresses.
     */
    skip?: number
    distinct?: UserSkillTreeProgressScalarFieldEnum | UserSkillTreeProgressScalarFieldEnum[]
  }

  /**
   * UserSkillTreeProgress create
   */
  export type UserSkillTreeProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkillTreeProgress.
     */
    data: XOR<UserSkillTreeProgressCreateInput, UserSkillTreeProgressUncheckedCreateInput>
  }

  /**
   * UserSkillTreeProgress createMany
   */
  export type UserSkillTreeProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkillTreeProgresses.
     */
    data: UserSkillTreeProgressCreateManyInput | UserSkillTreeProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillTreeProgress createManyAndReturn
   */
  export type UserSkillTreeProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkillTreeProgresses.
     */
    data: UserSkillTreeProgressCreateManyInput | UserSkillTreeProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkillTreeProgress update
   */
  export type UserSkillTreeProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkillTreeProgress.
     */
    data: XOR<UserSkillTreeProgressUpdateInput, UserSkillTreeProgressUncheckedUpdateInput>
    /**
     * Choose, which UserSkillTreeProgress to update.
     */
    where: UserSkillTreeProgressWhereUniqueInput
  }

  /**
   * UserSkillTreeProgress updateMany
   */
  export type UserSkillTreeProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkillTreeProgresses.
     */
    data: XOR<UserSkillTreeProgressUpdateManyMutationInput, UserSkillTreeProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillTreeProgresses to update
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * Limit how many UserSkillTreeProgresses to update.
     */
    limit?: number
  }

  /**
   * UserSkillTreeProgress updateManyAndReturn
   */
  export type UserSkillTreeProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserSkillTreeProgresses.
     */
    data: XOR<UserSkillTreeProgressUpdateManyMutationInput, UserSkillTreeProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillTreeProgresses to update
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * Limit how many UserSkillTreeProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkillTreeProgress upsert
   */
  export type UserSkillTreeProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkillTreeProgress to update in case it exists.
     */
    where: UserSkillTreeProgressWhereUniqueInput
    /**
     * In case the UserSkillTreeProgress found by the `where` argument doesn't exist, create a new UserSkillTreeProgress with this data.
     */
    create: XOR<UserSkillTreeProgressCreateInput, UserSkillTreeProgressUncheckedCreateInput>
    /**
     * In case the UserSkillTreeProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillTreeProgressUpdateInput, UserSkillTreeProgressUncheckedUpdateInput>
  }

  /**
   * UserSkillTreeProgress delete
   */
  export type UserSkillTreeProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
    /**
     * Filter which UserSkillTreeProgress to delete.
     */
    where: UserSkillTreeProgressWhereUniqueInput
  }

  /**
   * UserSkillTreeProgress deleteMany
   */
  export type UserSkillTreeProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillTreeProgresses to delete
     */
    where?: UserSkillTreeProgressWhereInput
    /**
     * Limit how many UserSkillTreeProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserSkillTreeProgress without action
   */
  export type UserSkillTreeProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillTreeProgress
     */
    select?: UserSkillTreeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillTreeProgress
     */
    omit?: UserSkillTreeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillTreeProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserSkillProgress
   */

  export type AggregateUserSkillProgress = {
    _count: UserSkillProgressCountAggregateOutputType | null
    _avg: UserSkillProgressAvgAggregateOutputType | null
    _sum: UserSkillProgressSumAggregateOutputType | null
    _min: UserSkillProgressMinAggregateOutputType | null
    _max: UserSkillProgressMaxAggregateOutputType | null
  }

  export type UserSkillProgressAvgAggregateOutputType = {
    progressPercent: number | null
    timeSpentMinutes: number | null
    attemptsCount: number | null
    completionScore: number | null
    engagementScore: number | null
  }

  export type UserSkillProgressSumAggregateOutputType = {
    progressPercent: number | null
    timeSpentMinutes: number | null
    attemptsCount: number | null
    completionScore: number | null
    engagementScore: number | null
  }

  export type UserSkillProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    skillTreeId: string | null
    status: $Enums.SkillProgressStatus | null
    progressPercent: number | null
    timeSpentMinutes: number | null
    attemptsCount: number | null
    completionMethod: $Enums.CompletionMethod | null
    completionScore: number | null
    unlockedAt: Date | null
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    engagementScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    skillTreeId: string | null
    status: $Enums.SkillProgressStatus | null
    progressPercent: number | null
    timeSpentMinutes: number | null
    attemptsCount: number | null
    completionMethod: $Enums.CompletionMethod | null
    completionScore: number | null
    unlockedAt: Date | null
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    engagementScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSkillProgressCountAggregateOutputType = {
    id: number
    userId: number
    skillId: number
    skillTreeId: number
    status: number
    progressPercent: number
    timeSpentMinutes: number
    attemptsCount: number
    completionMethod: number
    completionScore: number
    evidenceData: number
    unlockedAt: number
    startedAt: number
    lastActivityAt: number
    completedAt: number
    strugglingIndicators: number
    engagementScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillProgressAvgAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    attemptsCount?: true
    completionScore?: true
    engagementScore?: true
  }

  export type UserSkillProgressSumAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    attemptsCount?: true
    completionScore?: true
    engagementScore?: true
  }

  export type UserSkillProgressMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    timeSpentMinutes?: true
    attemptsCount?: true
    completionMethod?: true
    completionScore?: true
    unlockedAt?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    engagementScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    timeSpentMinutes?: true
    attemptsCount?: true
    completionMethod?: true
    completionScore?: true
    unlockedAt?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    engagementScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSkillProgressCountAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    timeSpentMinutes?: true
    attemptsCount?: true
    completionMethod?: true
    completionScore?: true
    evidenceData?: true
    unlockedAt?: true
    startedAt?: true
    lastActivityAt?: true
    completedAt?: true
    strugglingIndicators?: true
    engagementScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSkillProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillProgress to aggregate.
     */
    where?: UserSkillProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillProgresses to fetch.
     */
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkillProgresses
    **/
    _count?: true | UserSkillProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillProgressMaxAggregateInputType
  }

  export type GetUserSkillProgressAggregateType<T extends UserSkillProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkillProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkillProgress[P]>
      : GetScalarType<T[P], AggregateUserSkillProgress[P]>
  }




  export type UserSkillProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillProgressWhereInput
    orderBy?: UserSkillProgressOrderByWithAggregationInput | UserSkillProgressOrderByWithAggregationInput[]
    by: UserSkillProgressScalarFieldEnum[] | UserSkillProgressScalarFieldEnum
    having?: UserSkillProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillProgressCountAggregateInputType | true
    _avg?: UserSkillProgressAvgAggregateInputType
    _sum?: UserSkillProgressSumAggregateInputType
    _min?: UserSkillProgressMinAggregateInputType
    _max?: UserSkillProgressMaxAggregateInputType
  }

  export type UserSkillProgressGroupByOutputType = {
    id: string
    userId: string
    skillId: string
    skillTreeId: string
    status: $Enums.SkillProgressStatus
    progressPercent: number
    timeSpentMinutes: number
    attemptsCount: number
    completionMethod: $Enums.CompletionMethod | null
    completionScore: number | null
    evidenceData: JsonValue | null
    unlockedAt: Date | null
    startedAt: Date | null
    lastActivityAt: Date | null
    completedAt: Date | null
    strugglingIndicators: JsonValue | null
    engagementScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserSkillProgressCountAggregateOutputType | null
    _avg: UserSkillProgressAvgAggregateOutputType | null
    _sum: UserSkillProgressSumAggregateOutputType | null
    _min: UserSkillProgressMinAggregateOutputType | null
    _max: UserSkillProgressMaxAggregateOutputType | null
  }

  type GetUserSkillProgressGroupByPayload<T extends UserSkillProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    attemptsCount?: boolean
    completionMethod?: boolean
    completionScore?: boolean
    evidenceData?: boolean
    unlockedAt?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    strugglingIndicators?: boolean
    engagementScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    attemptsCount?: boolean
    completionMethod?: boolean
    completionScore?: boolean
    evidenceData?: boolean
    unlockedAt?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    strugglingIndicators?: boolean
    engagementScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    attemptsCount?: boolean
    completionMethod?: boolean
    completionScore?: boolean
    evidenceData?: boolean
    unlockedAt?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    strugglingIndicators?: boolean
    engagementScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    attemptsCount?: boolean
    completionMethod?: boolean
    completionScore?: boolean
    evidenceData?: boolean
    unlockedAt?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    completedAt?: boolean
    strugglingIndicators?: boolean
    engagementScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "skillTreeId" | "status" | "progressPercent" | "timeSpentMinutes" | "attemptsCount" | "completionMethod" | "completionScore" | "evidenceData" | "unlockedAt" | "startedAt" | "lastActivityAt" | "completedAt" | "strugglingIndicators" | "engagementScore" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillProgress"]>
  export type UserSkillProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $UserSkillProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkillProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillId: string
      skillTreeId: string
      status: $Enums.SkillProgressStatus
      progressPercent: number
      timeSpentMinutes: number
      attemptsCount: number
      completionMethod: $Enums.CompletionMethod | null
      completionScore: number | null
      evidenceData: Prisma.JsonValue | null
      unlockedAt: Date | null
      startedAt: Date | null
      lastActivityAt: Date | null
      completedAt: Date | null
      strugglingIndicators: Prisma.JsonValue | null
      engagementScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSkillProgress"]>
    composites: {}
  }

  type UserSkillProgressGetPayload<S extends boolean | null | undefined | UserSkillProgressDefaultArgs> = $Result.GetResult<Prisma.$UserSkillProgressPayload, S>

  type UserSkillProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillProgressCountAggregateInputType | true
    }

  export interface UserSkillProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkillProgress'], meta: { name: 'UserSkillProgress' } }
    /**
     * Find zero or one UserSkillProgress that matches the filter.
     * @param {UserSkillProgressFindUniqueArgs} args - Arguments to find a UserSkillProgress
     * @example
     * // Get one UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillProgressFindUniqueArgs>(args: SelectSubset<T, UserSkillProgressFindUniqueArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkillProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillProgressFindUniqueOrThrowArgs} args - Arguments to find a UserSkillProgress
     * @example
     * // Get one UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressFindFirstArgs} args - Arguments to find a UserSkillProgress
     * @example
     * // Get one UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillProgressFindFirstArgs>(args?: SelectSubset<T, UserSkillProgressFindFirstArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkillProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressFindFirstOrThrowArgs} args - Arguments to find a UserSkillProgress
     * @example
     * // Get one UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkillProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkillProgresses
     * const userSkillProgresses = await prisma.userSkillProgress.findMany()
     * 
     * // Get first 10 UserSkillProgresses
     * const userSkillProgresses = await prisma.userSkillProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillProgressWithIdOnly = await prisma.userSkillProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillProgressFindManyArgs>(args?: SelectSubset<T, UserSkillProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkillProgress.
     * @param {UserSkillProgressCreateArgs} args - Arguments to create a UserSkillProgress.
     * @example
     * // Create one UserSkillProgress
     * const UserSkillProgress = await prisma.userSkillProgress.create({
     *   data: {
     *     // ... data to create a UserSkillProgress
     *   }
     * })
     * 
     */
    create<T extends UserSkillProgressCreateArgs>(args: SelectSubset<T, UserSkillProgressCreateArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkillProgresses.
     * @param {UserSkillProgressCreateManyArgs} args - Arguments to create many UserSkillProgresses.
     * @example
     * // Create many UserSkillProgresses
     * const userSkillProgress = await prisma.userSkillProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillProgressCreateManyArgs>(args?: SelectSubset<T, UserSkillProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkillProgresses and returns the data saved in the database.
     * @param {UserSkillProgressCreateManyAndReturnArgs} args - Arguments to create many UserSkillProgresses.
     * @example
     * // Create many UserSkillProgresses
     * const userSkillProgress = await prisma.userSkillProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkillProgresses and only return the `id`
     * const userSkillProgressWithIdOnly = await prisma.userSkillProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkillProgress.
     * @param {UserSkillProgressDeleteArgs} args - Arguments to delete one UserSkillProgress.
     * @example
     * // Delete one UserSkillProgress
     * const UserSkillProgress = await prisma.userSkillProgress.delete({
     *   where: {
     *     // ... filter to delete one UserSkillProgress
     *   }
     * })
     * 
     */
    delete<T extends UserSkillProgressDeleteArgs>(args: SelectSubset<T, UserSkillProgressDeleteArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkillProgress.
     * @param {UserSkillProgressUpdateArgs} args - Arguments to update one UserSkillProgress.
     * @example
     * // Update one UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillProgressUpdateArgs>(args: SelectSubset<T, UserSkillProgressUpdateArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkillProgresses.
     * @param {UserSkillProgressDeleteManyArgs} args - Arguments to filter UserSkillProgresses to delete.
     * @example
     * // Delete a few UserSkillProgresses
     * const { count } = await prisma.userSkillProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillProgressDeleteManyArgs>(args?: SelectSubset<T, UserSkillProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkillProgresses
     * const userSkillProgress = await prisma.userSkillProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillProgressUpdateManyArgs>(args: SelectSubset<T, UserSkillProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkillProgresses and returns the data updated in the database.
     * @param {UserSkillProgressUpdateManyAndReturnArgs} args - Arguments to update many UserSkillProgresses.
     * @example
     * // Update many UserSkillProgresses
     * const userSkillProgress = await prisma.userSkillProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkillProgresses and only return the `id`
     * const userSkillProgressWithIdOnly = await prisma.userSkillProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSkillProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkillProgress.
     * @param {UserSkillProgressUpsertArgs} args - Arguments to update or create a UserSkillProgress.
     * @example
     * // Update or create a UserSkillProgress
     * const userSkillProgress = await prisma.userSkillProgress.upsert({
     *   create: {
     *     // ... data to create a UserSkillProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkillProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillProgressUpsertArgs>(args: SelectSubset<T, UserSkillProgressUpsertArgs<ExtArgs>>): Prisma__UserSkillProgressClient<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkillProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressCountArgs} args - Arguments to filter UserSkillProgresses to count.
     * @example
     * // Count the number of UserSkillProgresses
     * const count = await prisma.userSkillProgress.count({
     *   where: {
     *     // ... the filter for the UserSkillProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserSkillProgressCountArgs>(
      args?: Subset<T, UserSkillProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkillProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSkillProgressAggregateArgs>(args: Subset<T, UserSkillProgressAggregateArgs>): Prisma.PrismaPromise<GetUserSkillProgressAggregateType<T>>

    /**
     * Group by UserSkillProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSkillProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSkillProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkillProgress model
   */
  readonly fields: UserSkillProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkillProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSkillProgress model
   */
  interface UserSkillProgressFieldRefs {
    readonly id: FieldRef<"UserSkillProgress", 'String'>
    readonly userId: FieldRef<"UserSkillProgress", 'String'>
    readonly skillId: FieldRef<"UserSkillProgress", 'String'>
    readonly skillTreeId: FieldRef<"UserSkillProgress", 'String'>
    readonly status: FieldRef<"UserSkillProgress", 'SkillProgressStatus'>
    readonly progressPercent: FieldRef<"UserSkillProgress", 'Float'>
    readonly timeSpentMinutes: FieldRef<"UserSkillProgress", 'Int'>
    readonly attemptsCount: FieldRef<"UserSkillProgress", 'Int'>
    readonly completionMethod: FieldRef<"UserSkillProgress", 'CompletionMethod'>
    readonly completionScore: FieldRef<"UserSkillProgress", 'Float'>
    readonly evidenceData: FieldRef<"UserSkillProgress", 'Json'>
    readonly unlockedAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly startedAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly strugglingIndicators: FieldRef<"UserSkillProgress", 'Json'>
    readonly engagementScore: FieldRef<"UserSkillProgress", 'Float'>
    readonly createdAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSkillProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSkillProgress findUnique
   */
  export type UserSkillProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillProgress to fetch.
     */
    where: UserSkillProgressWhereUniqueInput
  }

  /**
   * UserSkillProgress findUniqueOrThrow
   */
  export type UserSkillProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillProgress to fetch.
     */
    where: UserSkillProgressWhereUniqueInput
  }

  /**
   * UserSkillProgress findFirst
   */
  export type UserSkillProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillProgress to fetch.
     */
    where?: UserSkillProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillProgresses to fetch.
     */
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillProgresses.
     */
    cursor?: UserSkillProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillProgresses.
     */
    distinct?: UserSkillProgressScalarFieldEnum | UserSkillProgressScalarFieldEnum[]
  }

  /**
   * UserSkillProgress findFirstOrThrow
   */
  export type UserSkillProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillProgress to fetch.
     */
    where?: UserSkillProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillProgresses to fetch.
     */
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkillProgresses.
     */
    cursor?: UserSkillProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkillProgresses.
     */
    distinct?: UserSkillProgressScalarFieldEnum | UserSkillProgressScalarFieldEnum[]
  }

  /**
   * UserSkillProgress findMany
   */
  export type UserSkillProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserSkillProgresses to fetch.
     */
    where?: UserSkillProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkillProgresses to fetch.
     */
    orderBy?: UserSkillProgressOrderByWithRelationInput | UserSkillProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkillProgresses.
     */
    cursor?: UserSkillProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkillProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkillProgresses.
     */
    skip?: number
    distinct?: UserSkillProgressScalarFieldEnum | UserSkillProgressScalarFieldEnum[]
  }

  /**
   * UserSkillProgress create
   */
  export type UserSkillProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkillProgress.
     */
    data: XOR<UserSkillProgressCreateInput, UserSkillProgressUncheckedCreateInput>
  }

  /**
   * UserSkillProgress createMany
   */
  export type UserSkillProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkillProgresses.
     */
    data: UserSkillProgressCreateManyInput | UserSkillProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkillProgress createManyAndReturn
   */
  export type UserSkillProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkillProgresses.
     */
    data: UserSkillProgressCreateManyInput | UserSkillProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkillProgress update
   */
  export type UserSkillProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkillProgress.
     */
    data: XOR<UserSkillProgressUpdateInput, UserSkillProgressUncheckedUpdateInput>
    /**
     * Choose, which UserSkillProgress to update.
     */
    where: UserSkillProgressWhereUniqueInput
  }

  /**
   * UserSkillProgress updateMany
   */
  export type UserSkillProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkillProgresses.
     */
    data: XOR<UserSkillProgressUpdateManyMutationInput, UserSkillProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillProgresses to update
     */
    where?: UserSkillProgressWhereInput
    /**
     * Limit how many UserSkillProgresses to update.
     */
    limit?: number
  }

  /**
   * UserSkillProgress updateManyAndReturn
   */
  export type UserSkillProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserSkillProgresses.
     */
    data: XOR<UserSkillProgressUpdateManyMutationInput, UserSkillProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserSkillProgresses to update
     */
    where?: UserSkillProgressWhereInput
    /**
     * Limit how many UserSkillProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkillProgress upsert
   */
  export type UserSkillProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkillProgress to update in case it exists.
     */
    where: UserSkillProgressWhereUniqueInput
    /**
     * In case the UserSkillProgress found by the `where` argument doesn't exist, create a new UserSkillProgress with this data.
     */
    create: XOR<UserSkillProgressCreateInput, UserSkillProgressUncheckedCreateInput>
    /**
     * In case the UserSkillProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillProgressUpdateInput, UserSkillProgressUncheckedUpdateInput>
  }

  /**
   * UserSkillProgress delete
   */
  export type UserSkillProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
    /**
     * Filter which UserSkillProgress to delete.
     */
    where: UserSkillProgressWhereUniqueInput
  }

  /**
   * UserSkillProgress deleteMany
   */
  export type UserSkillProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkillProgresses to delete
     */
    where?: UserSkillProgressWhereInput
    /**
     * Limit how many UserSkillProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserSkillProgress without action
   */
  export type UserSkillProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkillProgress
     */
    select?: UserSkillProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkillProgress
     */
    omit?: UserSkillProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillProgressInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    xpReward: number | null
  }

  export type AchievementSumAggregateOutputType = {
    xpReward: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: $Enums.AchievementCategory | null
    xpReward: number | null
    badgeIcon: string | null
    badgeColor: string | null
    rarity: $Enums.AchievementRarity | null
    isVisible: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: $Enums.AchievementCategory | null
    xpReward: number | null
    badgeIcon: string | null
    badgeColor: string | null
    rarity: $Enums.AchievementRarity | null
    isVisible: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    criteria: number
    xpReward: number
    badgeIcon: number
    badgeColor: number
    rarity: number
    isVisible: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    xpReward?: true
  }

  export type AchievementSumAggregateInputType = {
    xpReward?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    xpReward?: true
    badgeIcon?: true
    badgeColor?: true
    rarity?: true
    isVisible?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    xpReward?: true
    badgeIcon?: true
    badgeColor?: true
    rarity?: true
    isVisible?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    criteria?: true
    xpReward?: true
    badgeIcon?: true
    badgeColor?: true
    rarity?: true
    isVisible?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    category: $Enums.AchievementCategory
    criteria: JsonValue
    xpReward: number
    badgeIcon: string | null
    badgeColor: string | null
    rarity: $Enums.AchievementRarity
    isVisible: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeIcon?: boolean
    badgeColor?: boolean
    rarity?: boolean
    isVisible?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeIcon?: boolean
    badgeColor?: boolean
    rarity?: boolean
    isVisible?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeIcon?: boolean
    badgeColor?: boolean
    rarity?: boolean
    isVisible?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    criteria?: boolean
    xpReward?: boolean
    badgeIcon?: boolean
    badgeColor?: boolean
    rarity?: boolean
    isVisible?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "criteria" | "xpReward" | "badgeIcon" | "badgeColor" | "rarity" | "isVisible" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAchievements?: boolean | Achievement$userAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      userAchievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      category: $Enums.AchievementCategory
      criteria: Prisma.JsonValue
      xpReward: number
      badgeIcon: string | null
      badgeColor: string | null
      rarity: $Enums.AchievementRarity
      isVisible: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAchievements<T extends Achievement$userAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$userAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly category: FieldRef<"Achievement", 'AchievementCategory'>
    readonly criteria: FieldRef<"Achievement", 'Json'>
    readonly xpReward: FieldRef<"Achievement", 'Int'>
    readonly badgeIcon: FieldRef<"Achievement", 'String'>
    readonly badgeColor: FieldRef<"Achievement", 'String'>
    readonly rarity: FieldRef<"Achievement", 'AchievementRarity'>
    readonly isVisible: FieldRef<"Achievement", 'Boolean'>
    readonly isActive: FieldRef<"Achievement", 'Boolean'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
    readonly updatedAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.userAchievements
   */
  export type Achievement$userAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementAvgAggregateOutputType = {
    progress: number | null
  }

  export type UserAchievementSumAggregateOutputType = {
    progress: number | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    earnedAt: Date | null
    progress: number | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    earnedAt: Date | null
    progress: number | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    earnedAt: number
    progress: number
    metadata: number
    _all: number
  }


  export type UserAchievementAvgAggregateInputType = {
    progress?: true
  }

  export type UserAchievementSumAggregateInputType = {
    progress?: true
  }

  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    earnedAt?: true
    progress?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    earnedAt?: true
    progress?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    earnedAt?: true
    progress?: true
    metadata?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _avg?: UserAchievementAvgAggregateInputType
    _sum?: UserAchievementSumAggregateInputType
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    userId: string
    achievementId: string
    earnedAt: Date
    progress: number
    metadata: JsonValue | null
    _count: UserAchievementCountAggregateOutputType | null
    _avg: UserAchievementAvgAggregateOutputType | null
    _sum: UserAchievementSumAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    progress?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    progress?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    progress?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    progress?: boolean
    metadata?: boolean
  }

  export type UserAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "achievementId" | "earnedAt" | "progress" | "metadata", ExtArgs["result"]["userAchievement"]>
  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievementId: string
      earnedAt: Date
      progress: number
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements and returns the data updated in the database.
     * @param {UserAchievementUpdateManyAndReturnArgs} args - Arguments to update many UserAchievements.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAchievement model
   */
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly userId: FieldRef<"UserAchievement", 'String'>
    readonly achievementId: FieldRef<"UserAchievement", 'String'>
    readonly earnedAt: FieldRef<"UserAchievement", 'DateTime'>
    readonly progress: FieldRef<"UserAchievement", 'Float'>
    readonly metadata: FieldRef<"UserAchievement", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
  }

  /**
   * UserAchievement updateManyAndReturn
   */
  export type UserAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
    /**
     * Limit how many UserAchievements to delete.
     */
    limit?: number
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: UserAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    startedAt: Date | null
    lastActivityAt: Date | null
    endedAt: Date | null
    isActive: boolean | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    startedAt: Date | null
    lastActivityAt: Date | null
    endedAt: Date | null
    isActive: boolean | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    userId: number
    deviceInfo: number
    ipAddress: number
    startedAt: number
    lastActivityAt: number
    endedAt: number
    isActive: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    startedAt?: true
    lastActivityAt?: true
    endedAt?: true
    isActive?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    startedAt?: true
    lastActivityAt?: true
    endedAt?: true
    isActive?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    deviceInfo?: true
    ipAddress?: true
    startedAt?: true
    lastActivityAt?: true
    endedAt?: true
    isActive?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    userId: string
    deviceInfo: JsonValue | null
    ipAddress: string | null
    startedAt: Date
    lastActivityAt: Date
    endedAt: Date | null
    isActive: boolean
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    endedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    endedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    endedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    startedAt?: boolean
    lastActivityAt?: boolean
    endedAt?: boolean
    isActive?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceInfo" | "ipAddress" | "startedAt" | "lastActivityAt" | "endedAt" | "isActive", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceInfo: Prisma.JsonValue | null
      ipAddress: string | null
      startedAt: Date
      lastActivityAt: Date
      endedAt: Date | null
      isActive: boolean
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly deviceInfo: FieldRef<"UserSession", 'Json'>
    readonly ipAddress: FieldRef<"UserSession", 'String'>
    readonly startedAt: FieldRef<"UserSession", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserSession", 'DateTime'>
    readonly endedAt: FieldRef<"UserSession", 'DateTime'>
    readonly isActive: FieldRef<"UserSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    bio: 'bio',
    location: 'location',
    website: 'website',
    timezone: 'timezone',
    learningGoals: 'learningGoals',
    interests: 'interests',
    preferences: 'preferences',
    totalXp: 'totalXp',
    currentLevel: 'currentLevel',
    currentStreak: 'currentStreak',
    maxStreak: 'maxStreak',
    lastActivityAt: 'lastActivityAt',
    skillsCompleted: 'skillsCompleted',
    hoursLearned: 'hoursLearned',
    treesStarted: 'treesStarted',
    treesCompleted: 'treesCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SkillCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    color: 'color',
    icon: 'icon',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillCategoryScalarFieldEnum = (typeof SkillCategoryScalarFieldEnum)[keyof typeof SkillCategoryScalarFieldEnum]


  export const SkillTreeScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    shortDescription: 'shortDescription',
    difficulty: 'difficulty',
    estimatedHours: 'estimatedHours',
    prerequisites: 'prerequisites',
    tags: 'tags',
    version: 'version',
    layoutConfig: 'layoutConfig',
    themeConfig: 'themeConfig',
    isPublished: 'isPublished',
    isFeatured: 'isFeatured',
    isAiGenerated: 'isAiGenerated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type SkillTreeScalarFieldEnum = (typeof SkillTreeScalarFieldEnum)[keyof typeof SkillTreeScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    skillTreeId: 'skillTreeId',
    parentSkillId: 'parentSkillId',
    name: 'name',
    shortName: 'shortName',
    description: 'description',
    learningObjectives: 'learningObjectives',
    skillType: 'skillType',
    difficulty: 'difficulty',
    estimatedMinutes: 'estimatedMinutes',
    xpValue: 'xpValue',
    dependencies: 'dependencies',
    dependents: 'dependents',
    positionX: 'positionX',
    positionY: 'positionY',
    nodeSize: 'nodeSize',
    content: 'content',
    resources: 'resources',
    assessments: 'assessments',
    isActive: 'isActive',
    isOptional: 'isOptional',
    isMilestone: 'isMilestone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const UserSkillTreeProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillTreeId: 'skillTreeId',
    status: 'status',
    progressPercent: 'progressPercent',
    skillsCompleted: 'skillsCompleted',
    totalSkills: 'totalSkills',
    timeSpentMinutes: 'timeSpentMinutes',
    startedAt: 'startedAt',
    lastActivityAt: 'lastActivityAt',
    completedAt: 'completedAt',
    milestonesReached: 'milestonesReached',
    currentPath: 'currentPath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillTreeProgressScalarFieldEnum = (typeof UserSkillTreeProgressScalarFieldEnum)[keyof typeof UserSkillTreeProgressScalarFieldEnum]


  export const UserSkillProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    skillTreeId: 'skillTreeId',
    status: 'status',
    progressPercent: 'progressPercent',
    timeSpentMinutes: 'timeSpentMinutes',
    attemptsCount: 'attemptsCount',
    completionMethod: 'completionMethod',
    completionScore: 'completionScore',
    evidenceData: 'evidenceData',
    unlockedAt: 'unlockedAt',
    startedAt: 'startedAt',
    lastActivityAt: 'lastActivityAt',
    completedAt: 'completedAt',
    strugglingIndicators: 'strugglingIndicators',
    engagementScore: 'engagementScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillProgressScalarFieldEnum = (typeof UserSkillProgressScalarFieldEnum)[keyof typeof UserSkillProgressScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    criteria: 'criteria',
    xpReward: 'xpReward',
    badgeIcon: 'badgeIcon',
    badgeColor: 'badgeColor',
    rarity: 'rarity',
    isVisible: 'isVisible',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    earnedAt: 'earnedAt',
    progress: 'progress',
    metadata: 'metadata'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    startedAt: 'startedAt',
    lastActivityAt: 'lastActivityAt',
    endedAt: 'endedAt',
    isActive: 'isActive'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'SkillType'
   */
  export type EnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType'>
    


  /**
   * Reference to a field of type 'SkillType[]'
   */
  export type ListEnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType[]'>
    


  /**
   * Reference to a field of type 'TreeProgressStatus'
   */
  export type EnumTreeProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreeProgressStatus'>
    


  /**
   * Reference to a field of type 'TreeProgressStatus[]'
   */
  export type ListEnumTreeProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreeProgressStatus[]'>
    


  /**
   * Reference to a field of type 'SkillProgressStatus'
   */
  export type EnumSkillProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillProgressStatus'>
    


  /**
   * Reference to a field of type 'SkillProgressStatus[]'
   */
  export type ListEnumSkillProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillProgressStatus[]'>
    


  /**
   * Reference to a field of type 'CompletionMethod'
   */
  export type EnumCompletionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionMethod'>
    


  /**
   * Reference to a field of type 'CompletionMethod[]'
   */
  export type ListEnumCompletionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionMethod[]'>
    


  /**
   * Reference to a field of type 'AchievementCategory'
   */
  export type EnumAchievementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementCategory'>
    


  /**
   * Reference to a field of type 'AchievementCategory[]'
   */
  export type ListEnumAchievementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementCategory[]'>
    


  /**
   * Reference to a field of type 'AchievementRarity'
   */
  export type EnumAchievementRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementRarity'>
    


  /**
   * Reference to a field of type 'AchievementRarity[]'
   */
  export type ListEnumAchievementRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementRarity[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: StringNullableFilter<"User"> | string | null
    updatedBy?: StringNullableFilter<"User"> | string | null
    skillTreeProgress?: UserSkillTreeProgressListRelationFilter
    skillProgress?: UserSkillProgressListRelationFilter
    achievements?: UserAchievementListRelationFilter
    sessions?: UserSessionListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    skillTreeProgress?: UserSkillTreeProgressOrderByRelationAggregateInput
    skillProgress?: UserSkillProgressOrderByRelationAggregateInput
    achievements?: UserAchievementOrderByRelationAggregateInput
    sessions?: UserSessionOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: StringNullableFilter<"User"> | string | null
    updatedBy?: StringNullableFilter<"User"> | string | null
    skillTreeProgress?: UserSkillTreeProgressListRelationFilter
    skillProgress?: UserSkillProgressListRelationFilter
    achievements?: UserAchievementListRelationFilter
    sessions?: UserSessionListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: StringFilter<"UserProfile"> | string
    bio?: StringNullableFilter<"UserProfile"> | string | null
    location?: StringNullableFilter<"UserProfile"> | string | null
    website?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    learningGoals?: StringNullableListFilter<"UserProfile">
    interests?: StringNullableListFilter<"UserProfile">
    preferences?: JsonFilter<"UserProfile">
    totalXp?: IntFilter<"UserProfile"> | number
    currentLevel?: IntFilter<"UserProfile"> | number
    currentStreak?: IntFilter<"UserProfile"> | number
    maxStreak?: IntFilter<"UserProfile"> | number
    lastActivityAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    skillsCompleted?: IntFilter<"UserProfile"> | number
    hoursLearned?: FloatFilter<"UserProfile"> | number
    treesStarted?: IntFilter<"UserProfile"> | number
    treesCompleted?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    learningGoals?: SortOrder
    interests?: SortOrder
    preferences?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    bio?: StringNullableFilter<"UserProfile"> | string | null
    location?: StringNullableFilter<"UserProfile"> | string | null
    website?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    learningGoals?: StringNullableListFilter<"UserProfile">
    interests?: StringNullableListFilter<"UserProfile">
    preferences?: JsonFilter<"UserProfile">
    totalXp?: IntFilter<"UserProfile"> | number
    currentLevel?: IntFilter<"UserProfile"> | number
    currentStreak?: IntFilter<"UserProfile"> | number
    maxStreak?: IntFilter<"UserProfile"> | number
    lastActivityAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    skillsCompleted?: IntFilter<"UserProfile"> | number
    hoursLearned?: FloatFilter<"UserProfile"> | number
    treesStarted?: IntFilter<"UserProfile"> | number
    treesCompleted?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    learningGoals?: SortOrder
    interests?: SortOrder
    preferences?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    learningGoals?: StringNullableListFilter<"UserProfile">
    interests?: StringNullableListFilter<"UserProfile">
    preferences?: JsonWithAggregatesFilter<"UserProfile">
    totalXp?: IntWithAggregatesFilter<"UserProfile"> | number
    currentLevel?: IntWithAggregatesFilter<"UserProfile"> | number
    currentStreak?: IntWithAggregatesFilter<"UserProfile"> | number
    maxStreak?: IntWithAggregatesFilter<"UserProfile"> | number
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    skillsCompleted?: IntWithAggregatesFilter<"UserProfile"> | number
    hoursLearned?: FloatWithAggregatesFilter<"UserProfile"> | number
    treesStarted?: IntWithAggregatesFilter<"UserProfile"> | number
    treesCompleted?: IntWithAggregatesFilter<"UserProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type SkillCategoryWhereInput = {
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    id?: StringFilter<"SkillCategory"> | string
    name?: StringFilter<"SkillCategory"> | string
    slug?: StringFilter<"SkillCategory"> | string
    description?: StringNullableFilter<"SkillCategory"> | string | null
    color?: StringNullableFilter<"SkillCategory"> | string | null
    icon?: StringNullableFilter<"SkillCategory"> | string | null
    sortOrder?: IntFilter<"SkillCategory"> | number
    isActive?: BoolFilter<"SkillCategory"> | boolean
    createdAt?: DateTimeFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SkillCategory"> | Date | string
    skillTrees?: SkillTreeListRelationFilter
  }

  export type SkillCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillTrees?: SkillTreeOrderByRelationAggregateInput
  }

  export type SkillCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    OR?: SkillCategoryWhereInput[]
    NOT?: SkillCategoryWhereInput | SkillCategoryWhereInput[]
    description?: StringNullableFilter<"SkillCategory"> | string | null
    color?: StringNullableFilter<"SkillCategory"> | string | null
    icon?: StringNullableFilter<"SkillCategory"> | string | null
    sortOrder?: IntFilter<"SkillCategory"> | number
    isActive?: BoolFilter<"SkillCategory"> | boolean
    createdAt?: DateTimeFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SkillCategory"> | Date | string
    skillTrees?: SkillTreeListRelationFilter
  }, "id" | "name" | "slug">

  export type SkillCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCategoryCountOrderByAggregateInput
    _avg?: SkillCategoryAvgOrderByAggregateInput
    _max?: SkillCategoryMaxOrderByAggregateInput
    _min?: SkillCategoryMinOrderByAggregateInput
    _sum?: SkillCategorySumOrderByAggregateInput
  }

  export type SkillCategoryScalarWhereWithAggregatesInput = {
    AND?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    OR?: SkillCategoryScalarWhereWithAggregatesInput[]
    NOT?: SkillCategoryScalarWhereWithAggregatesInput | SkillCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillCategory"> | string
    name?: StringWithAggregatesFilter<"SkillCategory"> | string
    slug?: StringWithAggregatesFilter<"SkillCategory"> | string
    description?: StringNullableWithAggregatesFilter<"SkillCategory"> | string | null
    color?: StringNullableWithAggregatesFilter<"SkillCategory"> | string | null
    icon?: StringNullableWithAggregatesFilter<"SkillCategory"> | string | null
    sortOrder?: IntWithAggregatesFilter<"SkillCategory"> | number
    isActive?: BoolWithAggregatesFilter<"SkillCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SkillCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillCategory"> | Date | string
  }

  export type SkillTreeWhereInput = {
    AND?: SkillTreeWhereInput | SkillTreeWhereInput[]
    OR?: SkillTreeWhereInput[]
    NOT?: SkillTreeWhereInput | SkillTreeWhereInput[]
    id?: StringFilter<"SkillTree"> | string
    categoryId?: StringFilter<"SkillTree"> | string
    name?: StringFilter<"SkillTree"> | string
    slug?: StringFilter<"SkillTree"> | string
    description?: StringNullableFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableFilter<"SkillTree"> | number | null
    prerequisites?: StringNullableListFilter<"SkillTree">
    tags?: StringNullableListFilter<"SkillTree">
    version?: StringFilter<"SkillTree"> | string
    layoutConfig?: JsonFilter<"SkillTree">
    themeConfig?: JsonFilter<"SkillTree">
    isPublished?: BoolFilter<"SkillTree"> | boolean
    isFeatured?: BoolFilter<"SkillTree"> | boolean
    isAiGenerated?: BoolFilter<"SkillTree"> | boolean
    createdAt?: DateTimeFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeFilter<"SkillTree"> | Date | string
    createdBy?: StringNullableFilter<"SkillTree"> | string | null
    updatedBy?: StringNullableFilter<"SkillTree"> | string | null
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    skills?: SkillListRelationFilter
    userProgress?: UserSkillTreeProgressListRelationFilter
  }

  export type SkillTreeOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    prerequisites?: SortOrder
    tags?: SortOrder
    version?: SortOrder
    layoutConfig?: SortOrder
    themeConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isAiGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    category?: SkillCategoryOrderByWithRelationInput
    skills?: SkillOrderByRelationAggregateInput
    userProgress?: UserSkillTreeProgressOrderByRelationAggregateInput
  }

  export type SkillTreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SkillTreeWhereInput | SkillTreeWhereInput[]
    OR?: SkillTreeWhereInput[]
    NOT?: SkillTreeWhereInput | SkillTreeWhereInput[]
    categoryId?: StringFilter<"SkillTree"> | string
    name?: StringFilter<"SkillTree"> | string
    description?: StringNullableFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableFilter<"SkillTree"> | number | null
    prerequisites?: StringNullableListFilter<"SkillTree">
    tags?: StringNullableListFilter<"SkillTree">
    version?: StringFilter<"SkillTree"> | string
    layoutConfig?: JsonFilter<"SkillTree">
    themeConfig?: JsonFilter<"SkillTree">
    isPublished?: BoolFilter<"SkillTree"> | boolean
    isFeatured?: BoolFilter<"SkillTree"> | boolean
    isAiGenerated?: BoolFilter<"SkillTree"> | boolean
    createdAt?: DateTimeFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeFilter<"SkillTree"> | Date | string
    createdBy?: StringNullableFilter<"SkillTree"> | string | null
    updatedBy?: StringNullableFilter<"SkillTree"> | string | null
    category?: XOR<SkillCategoryScalarRelationFilter, SkillCategoryWhereInput>
    skills?: SkillListRelationFilter
    userProgress?: UserSkillTreeProgressListRelationFilter
  }, "id" | "slug">

  export type SkillTreeOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    prerequisites?: SortOrder
    tags?: SortOrder
    version?: SortOrder
    layoutConfig?: SortOrder
    themeConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isAiGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SkillTreeCountOrderByAggregateInput
    _avg?: SkillTreeAvgOrderByAggregateInput
    _max?: SkillTreeMaxOrderByAggregateInput
    _min?: SkillTreeMinOrderByAggregateInput
    _sum?: SkillTreeSumOrderByAggregateInput
  }

  export type SkillTreeScalarWhereWithAggregatesInput = {
    AND?: SkillTreeScalarWhereWithAggregatesInput | SkillTreeScalarWhereWithAggregatesInput[]
    OR?: SkillTreeScalarWhereWithAggregatesInput[]
    NOT?: SkillTreeScalarWhereWithAggregatesInput | SkillTreeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillTree"> | string
    categoryId?: StringWithAggregatesFilter<"SkillTree"> | string
    name?: StringWithAggregatesFilter<"SkillTree"> | string
    slug?: StringWithAggregatesFilter<"SkillTree"> | string
    description?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableWithAggregatesFilter<"SkillTree"> | number | null
    prerequisites?: StringNullableListFilter<"SkillTree">
    tags?: StringNullableListFilter<"SkillTree">
    version?: StringWithAggregatesFilter<"SkillTree"> | string
    layoutConfig?: JsonWithAggregatesFilter<"SkillTree">
    themeConfig?: JsonWithAggregatesFilter<"SkillTree">
    isPublished?: BoolWithAggregatesFilter<"SkillTree"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"SkillTree"> | boolean
    isAiGenerated?: BoolWithAggregatesFilter<"SkillTree"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillTree"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    skillTreeId?: StringFilter<"Skill"> | string
    parentSkillId?: StringNullableFilter<"Skill"> | string | null
    name?: StringFilter<"Skill"> | string
    shortName?: StringNullableFilter<"Skill"> | string | null
    description?: StringNullableFilter<"Skill"> | string | null
    learningObjectives?: StringNullableListFilter<"Skill">
    skillType?: EnumSkillTypeFilter<"Skill"> | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    dependents?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    nodeSize?: IntFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    resources?: JsonNullableFilter<"Skill">
    assessments?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isOptional?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    createdBy?: StringNullableFilter<"Skill"> | string | null
    updatedBy?: StringNullableFilter<"Skill"> | string | null
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
    parentSkill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    childSkills?: SkillListRelationFilter
    userProgress?: UserSkillProgressListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    parentSkillId?: SortOrderInput | SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    learningObjectives?: SortOrder
    skillType?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    dependents?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
    content?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    assessments?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isOptional?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    skillTree?: SkillTreeOrderByWithRelationInput
    parentSkill?: SkillOrderByWithRelationInput
    childSkills?: SkillOrderByRelationAggregateInput
    userProgress?: UserSkillProgressOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    skillTreeId?: StringFilter<"Skill"> | string
    parentSkillId?: StringNullableFilter<"Skill"> | string | null
    name?: StringFilter<"Skill"> | string
    shortName?: StringNullableFilter<"Skill"> | string | null
    description?: StringNullableFilter<"Skill"> | string | null
    learningObjectives?: StringNullableListFilter<"Skill">
    skillType?: EnumSkillTypeFilter<"Skill"> | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    dependents?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    nodeSize?: IntFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    resources?: JsonNullableFilter<"Skill">
    assessments?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isOptional?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    createdBy?: StringNullableFilter<"Skill"> | string | null
    updatedBy?: StringNullableFilter<"Skill"> | string | null
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
    parentSkill?: XOR<SkillNullableScalarRelationFilter, SkillWhereInput> | null
    childSkills?: SkillListRelationFilter
    userProgress?: UserSkillProgressListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    parentSkillId?: SortOrderInput | SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    learningObjectives?: SortOrder
    skillType?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    dependents?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
    content?: SortOrderInput | SortOrder
    resources?: SortOrderInput | SortOrder
    assessments?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isOptional?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    skillTreeId?: StringWithAggregatesFilter<"Skill"> | string
    parentSkillId?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    name?: StringWithAggregatesFilter<"Skill"> | string
    shortName?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    learningObjectives?: StringNullableListFilter<"Skill">
    skillType?: EnumSkillTypeWithAggregatesFilter<"Skill"> | $Enums.SkillType
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Skill"> | number | null
    xpValue?: IntWithAggregatesFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    dependents?: StringNullableListFilter<"Skill">
    positionX?: FloatWithAggregatesFilter<"Skill"> | number
    positionY?: FloatWithAggregatesFilter<"Skill"> | number
    nodeSize?: IntWithAggregatesFilter<"Skill"> | number
    content?: JsonNullableWithAggregatesFilter<"Skill">
    resources?: JsonNullableWithAggregatesFilter<"Skill">
    assessments?: JsonNullableWithAggregatesFilter<"Skill">
    isActive?: BoolWithAggregatesFilter<"Skill"> | boolean
    isOptional?: BoolWithAggregatesFilter<"Skill"> | boolean
    isMilestone?: BoolWithAggregatesFilter<"Skill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Skill"> | string | null
  }

  export type UserSkillTreeProgressWhereInput = {
    AND?: UserSkillTreeProgressWhereInput | UserSkillTreeProgressWhereInput[]
    OR?: UserSkillTreeProgressWhereInput[]
    NOT?: UserSkillTreeProgressWhereInput | UserSkillTreeProgressWhereInput[]
    id?: StringFilter<"UserSkillTreeProgress"> | string
    userId?: StringFilter<"UserSkillTreeProgress"> | string
    skillTreeId?: StringFilter<"UserSkillTreeProgress"> | string
    status?: EnumTreeProgressStatusFilter<"UserSkillTreeProgress"> | $Enums.TreeProgressStatus
    progressPercent?: FloatFilter<"UserSkillTreeProgress"> | number
    skillsCompleted?: IntFilter<"UserSkillTreeProgress"> | number
    totalSkills?: IntFilter<"UserSkillTreeProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillTreeProgress"> | number
    startedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    milestonesReached?: StringNullableListFilter<"UserSkillTreeProgress">
    currentPath?: StringNullableListFilter<"UserSkillTreeProgress">
    createdAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
  }

  export type UserSkillTreeProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    milestonesReached?: SortOrder
    currentPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skillTree?: SkillTreeOrderByWithRelationInput
  }

  export type UserSkillTreeProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_tree_progress?: UserSkillTreeProgressUnique_user_tree_progressCompoundUniqueInput
    AND?: UserSkillTreeProgressWhereInput | UserSkillTreeProgressWhereInput[]
    OR?: UserSkillTreeProgressWhereInput[]
    NOT?: UserSkillTreeProgressWhereInput | UserSkillTreeProgressWhereInput[]
    userId?: StringFilter<"UserSkillTreeProgress"> | string
    skillTreeId?: StringFilter<"UserSkillTreeProgress"> | string
    status?: EnumTreeProgressStatusFilter<"UserSkillTreeProgress"> | $Enums.TreeProgressStatus
    progressPercent?: FloatFilter<"UserSkillTreeProgress"> | number
    skillsCompleted?: IntFilter<"UserSkillTreeProgress"> | number
    totalSkills?: IntFilter<"UserSkillTreeProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillTreeProgress"> | number
    startedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    milestonesReached?: StringNullableListFilter<"UserSkillTreeProgress">
    currentPath?: StringNullableListFilter<"UserSkillTreeProgress">
    createdAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
  }, "id" | "unique_user_tree_progress">

  export type UserSkillTreeProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    milestonesReached?: SortOrder
    currentPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillTreeProgressCountOrderByAggregateInput
    _avg?: UserSkillTreeProgressAvgOrderByAggregateInput
    _max?: UserSkillTreeProgressMaxOrderByAggregateInput
    _min?: UserSkillTreeProgressMinOrderByAggregateInput
    _sum?: UserSkillTreeProgressSumOrderByAggregateInput
  }

  export type UserSkillTreeProgressScalarWhereWithAggregatesInput = {
    AND?: UserSkillTreeProgressScalarWhereWithAggregatesInput | UserSkillTreeProgressScalarWhereWithAggregatesInput[]
    OR?: UserSkillTreeProgressScalarWhereWithAggregatesInput[]
    NOT?: UserSkillTreeProgressScalarWhereWithAggregatesInput | UserSkillTreeProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkillTreeProgress"> | string
    userId?: StringWithAggregatesFilter<"UserSkillTreeProgress"> | string
    skillTreeId?: StringWithAggregatesFilter<"UserSkillTreeProgress"> | string
    status?: EnumTreeProgressStatusWithAggregatesFilter<"UserSkillTreeProgress"> | $Enums.TreeProgressStatus
    progressPercent?: FloatWithAggregatesFilter<"UserSkillTreeProgress"> | number
    skillsCompleted?: IntWithAggregatesFilter<"UserSkillTreeProgress"> | number
    totalSkills?: IntWithAggregatesFilter<"UserSkillTreeProgress"> | number
    timeSpentMinutes?: IntWithAggregatesFilter<"UserSkillTreeProgress"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillTreeProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"UserSkillTreeProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillTreeProgress"> | Date | string | null
    milestonesReached?: StringNullableListFilter<"UserSkillTreeProgress">
    currentPath?: StringNullableListFilter<"UserSkillTreeProgress">
    createdAt?: DateTimeWithAggregatesFilter<"UserSkillTreeProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkillTreeProgress"> | Date | string
  }

  export type UserSkillProgressWhereInput = {
    AND?: UserSkillProgressWhereInput | UserSkillProgressWhereInput[]
    OR?: UserSkillProgressWhereInput[]
    NOT?: UserSkillProgressWhereInput | UserSkillProgressWhereInput[]
    id?: StringFilter<"UserSkillProgress"> | string
    userId?: StringFilter<"UserSkillProgress"> | string
    skillId?: StringFilter<"UserSkillProgress"> | string
    skillTreeId?: StringFilter<"UserSkillProgress"> | string
    status?: EnumSkillProgressStatusFilter<"UserSkillProgress"> | $Enums.SkillProgressStatus
    progressPercent?: FloatFilter<"UserSkillProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillProgress"> | number
    attemptsCount?: IntFilter<"UserSkillProgress"> | number
    completionMethod?: EnumCompletionMethodNullableFilter<"UserSkillProgress"> | $Enums.CompletionMethod | null
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    evidenceData?: JsonNullableFilter<"UserSkillProgress">
    unlockedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    strugglingIndicators?: JsonNullableFilter<"UserSkillProgress">
    engagementScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type UserSkillProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionMethod?: SortOrderInput | SortOrder
    completionScore?: SortOrderInput | SortOrder
    evidenceData?: SortOrderInput | SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    strugglingIndicators?: SortOrderInput | SortOrder
    engagementScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type UserSkillProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_skill_progress?: UserSkillProgressUnique_user_skill_progressCompoundUniqueInput
    AND?: UserSkillProgressWhereInput | UserSkillProgressWhereInput[]
    OR?: UserSkillProgressWhereInput[]
    NOT?: UserSkillProgressWhereInput | UserSkillProgressWhereInput[]
    userId?: StringFilter<"UserSkillProgress"> | string
    skillId?: StringFilter<"UserSkillProgress"> | string
    skillTreeId?: StringFilter<"UserSkillProgress"> | string
    status?: EnumSkillProgressStatusFilter<"UserSkillProgress"> | $Enums.SkillProgressStatus
    progressPercent?: FloatFilter<"UserSkillProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillProgress"> | number
    attemptsCount?: IntFilter<"UserSkillProgress"> | number
    completionMethod?: EnumCompletionMethodNullableFilter<"UserSkillProgress"> | $Enums.CompletionMethod | null
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    evidenceData?: JsonNullableFilter<"UserSkillProgress">
    unlockedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    strugglingIndicators?: JsonNullableFilter<"UserSkillProgress">
    engagementScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "unique_user_skill_progress">

  export type UserSkillProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionMethod?: SortOrderInput | SortOrder
    completionScore?: SortOrderInput | SortOrder
    evidenceData?: SortOrderInput | SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    strugglingIndicators?: SortOrderInput | SortOrder
    engagementScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSkillProgressCountOrderByAggregateInput
    _avg?: UserSkillProgressAvgOrderByAggregateInput
    _max?: UserSkillProgressMaxOrderByAggregateInput
    _min?: UserSkillProgressMinOrderByAggregateInput
    _sum?: UserSkillProgressSumOrderByAggregateInput
  }

  export type UserSkillProgressScalarWhereWithAggregatesInput = {
    AND?: UserSkillProgressScalarWhereWithAggregatesInput | UserSkillProgressScalarWhereWithAggregatesInput[]
    OR?: UserSkillProgressScalarWhereWithAggregatesInput[]
    NOT?: UserSkillProgressScalarWhereWithAggregatesInput | UserSkillProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkillProgress"> | string
    userId?: StringWithAggregatesFilter<"UserSkillProgress"> | string
    skillId?: StringWithAggregatesFilter<"UserSkillProgress"> | string
    skillTreeId?: StringWithAggregatesFilter<"UserSkillProgress"> | string
    status?: EnumSkillProgressStatusWithAggregatesFilter<"UserSkillProgress"> | $Enums.SkillProgressStatus
    progressPercent?: FloatWithAggregatesFilter<"UserSkillProgress"> | number
    timeSpentMinutes?: IntWithAggregatesFilter<"UserSkillProgress"> | number
    attemptsCount?: IntWithAggregatesFilter<"UserSkillProgress"> | number
    completionMethod?: EnumCompletionMethodNullableWithAggregatesFilter<"UserSkillProgress"> | $Enums.CompletionMethod | null
    completionScore?: FloatNullableWithAggregatesFilter<"UserSkillProgress"> | number | null
    evidenceData?: JsonNullableWithAggregatesFilter<"UserSkillProgress">
    unlockedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    strugglingIndicators?: JsonNullableWithAggregatesFilter<"UserSkillProgress">
    engagementScore?: FloatNullableWithAggregatesFilter<"UserSkillProgress"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkillProgress"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    category?: EnumAchievementCategoryFilter<"Achievement"> | $Enums.AchievementCategory
    criteria?: JsonFilter<"Achievement">
    xpReward?: IntFilter<"Achievement"> | number
    badgeIcon?: StringNullableFilter<"Achievement"> | string | null
    badgeColor?: StringNullableFilter<"Achievement"> | string | null
    rarity?: EnumAchievementRarityFilter<"Achievement"> | $Enums.AchievementRarity
    isVisible?: BoolFilter<"Achievement"> | boolean
    isActive?: BoolFilter<"Achievement"> | boolean
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userAchievements?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeIcon?: SortOrderInput | SortOrder
    badgeColor?: SortOrderInput | SortOrder
    rarity?: SortOrder
    isVisible?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAchievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    category?: EnumAchievementCategoryFilter<"Achievement"> | $Enums.AchievementCategory
    criteria?: JsonFilter<"Achievement">
    xpReward?: IntFilter<"Achievement"> | number
    badgeIcon?: StringNullableFilter<"Achievement"> | string | null
    badgeColor?: StringNullableFilter<"Achievement"> | string | null
    rarity?: EnumAchievementRarityFilter<"Achievement"> | $Enums.AchievementRarity
    isVisible?: BoolFilter<"Achievement"> | boolean
    isActive?: BoolFilter<"Achievement"> | boolean
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    userAchievements?: UserAchievementListRelationFilter
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeIcon?: SortOrderInput | SortOrder
    badgeColor?: SortOrderInput | SortOrder
    rarity?: SortOrder
    isVisible?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    category?: EnumAchievementCategoryWithAggregatesFilter<"Achievement"> | $Enums.AchievementCategory
    criteria?: JsonWithAggregatesFilter<"Achievement">
    xpReward?: IntWithAggregatesFilter<"Achievement"> | number
    badgeIcon?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    badgeColor?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    rarity?: EnumAchievementRarityWithAggregatesFilter<"Achievement"> | $Enums.AchievementRarity
    isVisible?: BoolWithAggregatesFilter<"Achievement"> | boolean
    isActive?: BoolWithAggregatesFilter<"Achievement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    progress?: FloatFilter<"UserAchievement"> | number
    metadata?: JsonNullableFilter<"UserAchievement">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    progress?: SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    achievement?: AchievementOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_achievement?: UserAchievementUnique_user_achievementCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    progress?: FloatFilter<"UserAchievement"> | number
    metadata?: JsonNullableFilter<"UserAchievement">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "unique_user_achievement">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    progress?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _avg?: UserAchievementAvgOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
    _sum?: UserAchievementSumOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    userId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievement"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
    progress?: FloatWithAggregatesFilter<"UserAchievement"> | number
    metadata?: JsonNullableWithAggregatesFilter<"UserAchievement">
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    startedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    userId?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    startedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    userId?: StringWithAggregatesFilter<"UserSession"> | string
    deviceInfo?: JsonNullableWithAggregatesFilter<"UserSession">
    ipAddress?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"UserSession"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserProfileCreateInput = {
    bio?: string | null
    location?: string | null
    website?: string | null
    timezone?: string | null
    learningGoals?: UserProfileCreatelearningGoalsInput | string[]
    interests?: UserProfileCreateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: number
    currentLevel?: number
    currentStreak?: number
    maxStreak?: number
    lastActivityAt?: Date | string | null
    skillsCompleted?: number
    hoursLearned?: number
    treesStarted?: number
    treesCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    bio?: string | null
    location?: string | null
    website?: string | null
    timezone?: string | null
    learningGoals?: UserProfileCreatelearningGoalsInput | string[]
    interests?: UserProfileCreateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: number
    currentLevel?: number
    currentStreak?: number
    maxStreak?: number
    lastActivityAt?: Date | string | null
    skillsCompleted?: number
    hoursLearned?: number
    treesStarted?: number
    treesCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    userId: string
    bio?: string | null
    location?: string | null
    website?: string | null
    timezone?: string | null
    learningGoals?: UserProfileCreatelearningGoalsInput | string[]
    interests?: UserProfileCreateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: number
    currentLevel?: number
    currentStreak?: number
    maxStreak?: number
    lastActivityAt?: Date | string | null
    skillsCompleted?: number
    hoursLearned?: number
    treesStarted?: number
    treesCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    color?: string | null
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTrees?: SkillTreeCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    color?: string | null
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTrees?: SkillTreeUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SkillCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTrees?: SkillTreeUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTrees?: SkillTreeUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SkillCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    color?: string | null
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillTreeCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    category: SkillCategoryCreateNestedOneWithoutSkillTreesInput
    skills?: SkillCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillTreeProgressCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    category?: SkillCategoryUpdateOneRequiredWithoutSkillTreesNestedInput
    skills?: SkillUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillTreeProgressUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SkillTreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillTreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
    parentSkill?: SkillCreateNestedOneWithoutChildSkillsInput
    childSkills?: SkillCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    skillTreeId: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    childSkills?: SkillUncheckedCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
    parentSkill?: SkillUpdateOneWithoutChildSkillsNestedInput
    childSkills?: SkillUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    childSkills?: SkillUncheckedUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    skillTreeId: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSkillTreeProgressCreateInput = {
    id?: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillTreeProgressInput
    skillTree: SkillTreeCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillTreeProgressUncheckedCreateInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillTreeProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillTreeProgressNestedInput
    skillTree?: SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillTreeProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillTreeProgressCreateManyInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillTreeProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillTreeProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressCreateInput = {
    id?: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillProgressInput
    skill: SkillCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateInput = {
    id?: string
    userId: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillProgressNestedInput
    skill?: SkillUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressCreateManyInput = {
    id?: string
    userId: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    category?: $Enums.AchievementCategory
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeIcon?: string | null
    badgeColor?: string | null
    rarity?: $Enums.AchievementRarity
    isVisible?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAchievements?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    category?: $Enums.AchievementCategory
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeIcon?: string | null
    badgeColor?: string | null
    rarity?: $Enums.AchievementRarity
    isVisible?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAchievements?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAchievements?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    category?: $Enums.AchievementCategory
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeIcon?: string | null
    badgeColor?: string | null
    rarity?: $Enums.AchievementRarity
    isVisible?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateInput = {
    id?: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAchievementsInput
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    userId: string
    achievementId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    userId: string
    achievementId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSessionCreateInput = {
    id?: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    userId: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionCreateManyInput = {
    id?: string
    userId: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSkillTreeProgressListRelationFilter = {
    every?: UserSkillTreeProgressWhereInput
    some?: UserSkillTreeProgressWhereInput
    none?: UserSkillTreeProgressWhereInput
  }

  export type UserSkillProgressListRelationFilter = {
    every?: UserSkillProgressWhereInput
    some?: UserSkillProgressWhereInput
    none?: UserSkillProgressWhereInput
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type UserSessionListRelationFilter = {
    every?: UserSessionWhereInput
    some?: UserSessionWhereInput
    none?: UserSessionWhereInput
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSkillTreeProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSkillProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    timezone?: SortOrder
    learningGoals?: SortOrder
    interests?: SortOrder
    preferences?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    lastActivityAt?: SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    timezone?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    lastActivityAt?: SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    website?: SortOrder
    timezone?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    lastActivityAt?: SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    skillsCompleted?: SortOrder
    hoursLearned?: SortOrder
    treesStarted?: SortOrder
    treesCompleted?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SkillTreeListRelationFilter = {
    every?: SkillTreeWhereInput
    some?: SkillTreeWhereInput
    none?: SkillTreeWhereInput
  }

  export type SkillTreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type SkillCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillCategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SkillCategoryScalarRelationFilter = {
    is?: SkillCategoryWhereInput
    isNot?: SkillCategoryWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillTreeCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    prerequisites?: SortOrder
    tags?: SortOrder
    version?: SortOrder
    layoutConfig?: SortOrder
    themeConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isAiGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillTreeAvgOrderByAggregateInput = {
    estimatedHours?: SortOrder
  }

  export type SkillTreeMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    version?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isAiGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillTreeMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    version?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    isAiGenerated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillTreeSumOrderByAggregateInput = {
    estimatedHours?: SortOrder
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SkillTreeScalarRelationFilter = {
    is?: SkillTreeWhereInput
    isNot?: SkillTreeWhereInput
  }

  export type SkillNullableScalarRelationFilter = {
    is?: SkillWhereInput | null
    isNot?: SkillWhereInput | null
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    parentSkillId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    learningObjectives?: SortOrder
    skillType?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    dependents?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
    content?: SortOrder
    resources?: SortOrder
    assessments?: SortOrder
    isActive?: SortOrder
    isOptional?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    parentSkillId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    skillType?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
    isActive?: SortOrder
    isOptional?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    parentSkillId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    description?: SortOrder
    skillType?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
    isActive?: SortOrder
    isOptional?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    nodeSize?: SortOrder
  }

  export type EnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillTypeFilter<$PrismaModel>
    _max?: NestedEnumSkillTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTreeProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeProgressStatus | EnumTreeProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeProgressStatusFilter<$PrismaModel> | $Enums.TreeProgressStatus
  }

  export type UserSkillTreeProgressUnique_user_tree_progressCompoundUniqueInput = {
    userId: string
    skillTreeId: string
  }

  export type UserSkillTreeProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    milestonesReached?: SortOrder
    currentPath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillTreeProgressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
  }

  export type UserSkillTreeProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillTreeProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillTreeProgressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
    skillsCompleted?: SortOrder
    totalSkills?: SortOrder
    timeSpentMinutes?: SortOrder
  }

  export type EnumTreeProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeProgressStatus | EnumTreeProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.TreeProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreeProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumTreeProgressStatusFilter<$PrismaModel>
  }

  export type EnumSkillProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusFilter<$PrismaModel> | $Enums.SkillProgressStatus
  }

  export type EnumCompletionMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionMethod | EnumCompletionMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompletionMethodNullableFilter<$PrismaModel> | $Enums.CompletionMethod | null
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type UserSkillProgressUnique_user_skill_progressCompoundUniqueInput = {
    userId: string
    skillId: string
  }

  export type UserSkillProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionMethod?: SortOrder
    completionScore?: SortOrder
    evidenceData?: SortOrder
    unlockedAt?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    strugglingIndicators?: SortOrder
    engagementScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillProgressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionScore?: SortOrder
    engagementScore?: SortOrder
  }

  export type UserSkillProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionMethod?: SortOrder
    completionScore?: SortOrder
    unlockedAt?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    engagementScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionMethod?: SortOrder
    completionScore?: SortOrder
    unlockedAt?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    completedAt?: SortOrder
    engagementScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillProgressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    attemptsCount?: SortOrder
    completionScore?: SortOrder
    engagementScore?: SortOrder
  }

  export type EnumSkillProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillProgressStatusFilter<$PrismaModel>
  }

  export type EnumCompletionMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionMethod | EnumCompletionMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompletionMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompletionMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompletionMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumCompletionMethodNullableFilter<$PrismaModel>
  }

  export type EnumAchievementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryFilter<$PrismaModel> | $Enums.AchievementCategory
  }

  export type EnumAchievementRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRarity | EnumAchievementRarityFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRarityFilter<$PrismaModel> | $Enums.AchievementRarity
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    criteria?: SortOrder
    xpReward?: SortOrder
    badgeIcon?: SortOrder
    badgeColor?: SortOrder
    rarity?: SortOrder
    isVisible?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    xpReward?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    xpReward?: SortOrder
    badgeIcon?: SortOrder
    badgeColor?: SortOrder
    rarity?: SortOrder
    isVisible?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    xpReward?: SortOrder
    badgeIcon?: SortOrder
    badgeColor?: SortOrder
    rarity?: SortOrder
    isVisible?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    xpReward?: SortOrder
  }

  export type EnumAchievementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AchievementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementCategoryFilter<$PrismaModel>
    _max?: NestedEnumAchievementCategoryFilter<$PrismaModel>
  }

  export type EnumAchievementRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRarity | EnumAchievementRarityFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRarityWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementRarityFilter<$PrismaModel>
    _max?: NestedEnumAchievementRarityFilter<$PrismaModel>
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUnique_user_achievementCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    progress?: SortOrder
    metadata?: SortOrder
  }

  export type UserAchievementAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    progress?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    progress?: SortOrder
  }

  export type UserAchievementSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    endedAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    endedAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    startedAt?: SortOrder
    lastActivityAt?: SortOrder
    endedAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserSkillTreeProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput> | UserSkillTreeProgressCreateWithoutUserInput[] | UserSkillTreeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutUserInput | UserSkillTreeProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillTreeProgressCreateManyUserInputEnvelope
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
  }

  export type UserSkillProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput> | UserSkillTreeProgressCreateWithoutUserInput[] | UserSkillTreeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutUserInput | UserSkillTreeProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillTreeProgressCreateManyUserInputEnvelope
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
  }

  export type UserSkillProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSkillTreeProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput> | UserSkillTreeProgressCreateWithoutUserInput[] | UserSkillTreeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutUserInput | UserSkillTreeProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillTreeProgressUpsertWithWhereUniqueWithoutUserInput | UserSkillTreeProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillTreeProgressCreateManyUserInputEnvelope
    set?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    disconnect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    delete?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    update?: UserSkillTreeProgressUpdateWithWhereUniqueWithoutUserInput | UserSkillTreeProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillTreeProgressUpdateManyWithWhereWithoutUserInput | UserSkillTreeProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
  }

  export type UserSkillProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutUserInput | UserSkillProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutUserInput | UserSkillProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutUserInput | UserSkillProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput> | UserSkillTreeProgressCreateWithoutUserInput[] | UserSkillTreeProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutUserInput | UserSkillTreeProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillTreeProgressUpsertWithWhereUniqueWithoutUserInput | UserSkillTreeProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillTreeProgressCreateManyUserInputEnvelope
    set?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    disconnect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    delete?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    update?: UserSkillTreeProgressUpdateWithWhereUniqueWithoutUserInput | UserSkillTreeProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillTreeProgressUpdateManyWithWhereWithoutUserInput | UserSkillTreeProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
  }

  export type UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutUserInput | UserSkillProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutUserInput | UserSkillProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutUserInput | UserSkillProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput> | UserSessionCreateWithoutUserInput[] | UserSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput | UserSessionCreateOrConnectWithoutUserInput[]
    upsert?: UserSessionUpsertWithWhereUniqueWithoutUserInput | UserSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSessionCreateManyUserInputEnvelope
    set?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    disconnect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    delete?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    connect?: UserSessionWhereUniqueInput | UserSessionWhereUniqueInput[]
    update?: UserSessionUpdateWithWhereUniqueWithoutUserInput | UserSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSessionUpdateManyWithWhereWithoutUserInput | UserSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileCreatelearningGoalsInput = {
    set: string[]
  }

  export type UserProfileCreateinterestsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserProfileUpdatelearningGoalsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type SkillTreeCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput> | SkillTreeCreateWithoutCategoryInput[] | SkillTreeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillTreeCreateOrConnectWithoutCategoryInput | SkillTreeCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillTreeCreateManyCategoryInputEnvelope
    connect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
  }

  export type SkillTreeUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput> | SkillTreeCreateWithoutCategoryInput[] | SkillTreeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillTreeCreateOrConnectWithoutCategoryInput | SkillTreeCreateOrConnectWithoutCategoryInput[]
    createMany?: SkillTreeCreateManyCategoryInputEnvelope
    connect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
  }

  export type SkillTreeUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput> | SkillTreeCreateWithoutCategoryInput[] | SkillTreeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillTreeCreateOrConnectWithoutCategoryInput | SkillTreeCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillTreeUpsertWithWhereUniqueWithoutCategoryInput | SkillTreeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillTreeCreateManyCategoryInputEnvelope
    set?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    disconnect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    delete?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    connect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    update?: SkillTreeUpdateWithWhereUniqueWithoutCategoryInput | SkillTreeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillTreeUpdateManyWithWhereWithoutCategoryInput | SkillTreeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillTreeScalarWhereInput | SkillTreeScalarWhereInput[]
  }

  export type SkillTreeUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput> | SkillTreeCreateWithoutCategoryInput[] | SkillTreeUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SkillTreeCreateOrConnectWithoutCategoryInput | SkillTreeCreateOrConnectWithoutCategoryInput[]
    upsert?: SkillTreeUpsertWithWhereUniqueWithoutCategoryInput | SkillTreeUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SkillTreeCreateManyCategoryInputEnvelope
    set?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    disconnect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    delete?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    connect?: SkillTreeWhereUniqueInput | SkillTreeWhereUniqueInput[]
    update?: SkillTreeUpdateWithWhereUniqueWithoutCategoryInput | SkillTreeUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SkillTreeUpdateManyWithWhereWithoutCategoryInput | SkillTreeUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SkillTreeScalarWhereInput | SkillTreeScalarWhereInput[]
  }

  export type SkillTreeCreateprerequisitesInput = {
    set: string[]
  }

  export type SkillTreeCreatetagsInput = {
    set: string[]
  }

  export type SkillCategoryCreateNestedOneWithoutSkillTreesInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillTreesInput, SkillCategoryUncheckedCreateWithoutSkillTreesInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillTreesInput
    connect?: SkillCategoryWhereUniqueInput
  }

  export type SkillCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillTreeProgressCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillTreeProgressCreateWithoutSkillTreeInput[] | UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput | UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput[]
    createMany?: UserSkillTreeProgressCreateManySkillTreeInputEnvelope
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillTreeProgressUncheckedCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillTreeProgressCreateWithoutSkillTreeInput[] | UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput | UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput[]
    createMany?: UserSkillTreeProgressCreateManySkillTreeInputEnvelope
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SkillTreeUpdateprerequisitesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillTreeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillCategoryUpdateOneRequiredWithoutSkillTreesNestedInput = {
    create?: XOR<SkillCategoryCreateWithoutSkillTreesInput, SkillCategoryUncheckedCreateWithoutSkillTreesInput>
    connectOrCreate?: SkillCategoryCreateOrConnectWithoutSkillTreesInput
    upsert?: SkillCategoryUpsertWithoutSkillTreesInput
    connect?: SkillCategoryWhereUniqueInput
    update?: XOR<XOR<SkillCategoryUpdateToOneWithWhereWithoutSkillTreesInput, SkillCategoryUpdateWithoutSkillTreesInput>, SkillCategoryUncheckedUpdateWithoutSkillTreesInput>
  }

  export type SkillUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutSkillTreeInput | SkillUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutSkillTreeInput | SkillUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutSkillTreeInput | SkillUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserSkillTreeProgressUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillTreeProgressCreateWithoutSkillTreeInput[] | UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput | UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput[]
    upsert?: UserSkillTreeProgressUpsertWithWhereUniqueWithoutSkillTreeInput | UserSkillTreeProgressUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: UserSkillTreeProgressCreateManySkillTreeInputEnvelope
    set?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    disconnect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    delete?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    update?: UserSkillTreeProgressUpdateWithWhereUniqueWithoutSkillTreeInput | UserSkillTreeProgressUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: UserSkillTreeProgressUpdateManyWithWhereWithoutSkillTreeInput | UserSkillTreeProgressUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutSkillTreeInput | SkillUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutSkillTreeInput | SkillUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutSkillTreeInput | SkillUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillTreeProgressCreateWithoutSkillTreeInput[] | UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput | UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput[]
    upsert?: UserSkillTreeProgressUpsertWithWhereUniqueWithoutSkillTreeInput | UserSkillTreeProgressUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: UserSkillTreeProgressCreateManySkillTreeInputEnvelope
    set?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    disconnect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    delete?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    connect?: UserSkillTreeProgressWhereUniqueInput | UserSkillTreeProgressWhereUniqueInput[]
    update?: UserSkillTreeProgressUpdateWithWhereUniqueWithoutSkillTreeInput | UserSkillTreeProgressUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: UserSkillTreeProgressUpdateManyWithWhereWithoutSkillTreeInput | UserSkillTreeProgressUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
  }

  export type SkillCreatelearningObjectivesInput = {
    set: string[]
  }

  export type SkillCreatedependenciesInput = {
    set: string[]
  }

  export type SkillCreatedependentsInput = {
    set: string[]
  }

  export type SkillTreeCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutSkillsInput
    connect?: SkillTreeWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutChildSkillsInput = {
    create?: XOR<SkillCreateWithoutChildSkillsInput, SkillUncheckedCreateWithoutChildSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutChildSkillsInput
    connect?: SkillWhereUniqueInput
  }

  export type SkillCreateNestedManyWithoutParentSkillInput = {
    create?: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput> | SkillCreateWithoutParentSkillInput[] | SkillUncheckedCreateWithoutParentSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutParentSkillInput | SkillCreateOrConnectWithoutParentSkillInput[]
    createMany?: SkillCreateManyParentSkillInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillProgressCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutParentSkillInput = {
    create?: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput> | SkillCreateWithoutParentSkillInput[] | SkillUncheckedCreateWithoutParentSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutParentSkillInput | SkillCreateOrConnectWithoutParentSkillInput[]
    createMany?: SkillCreateManyParentSkillInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type SkillUpdatelearningObjectivesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSkillTypeFieldUpdateOperationsInput = {
    set?: $Enums.SkillType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SkillUpdatedependenciesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillUpdatedependentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SkillTreeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutSkillsInput
    upsert?: SkillTreeUpsertWithoutSkillsInput
    connect?: SkillTreeWhereUniqueInput
    update?: XOR<XOR<SkillTreeUpdateToOneWithWhereWithoutSkillsInput, SkillTreeUpdateWithoutSkillsInput>, SkillTreeUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneWithoutChildSkillsNestedInput = {
    create?: XOR<SkillCreateWithoutChildSkillsInput, SkillUncheckedCreateWithoutChildSkillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutChildSkillsInput
    upsert?: SkillUpsertWithoutChildSkillsInput
    disconnect?: SkillWhereInput | boolean
    delete?: SkillWhereInput | boolean
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutChildSkillsInput, SkillUpdateWithoutChildSkillsInput>, SkillUncheckedUpdateWithoutChildSkillsInput>
  }

  export type SkillUpdateManyWithoutParentSkillNestedInput = {
    create?: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput> | SkillCreateWithoutParentSkillInput[] | SkillUncheckedCreateWithoutParentSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutParentSkillInput | SkillCreateOrConnectWithoutParentSkillInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutParentSkillInput | SkillUpsertWithWhereUniqueWithoutParentSkillInput[]
    createMany?: SkillCreateManyParentSkillInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutParentSkillInput | SkillUpdateWithWhereUniqueWithoutParentSkillInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutParentSkillInput | SkillUpdateManyWithWhereWithoutParentSkillInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserSkillProgressUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutSkillInput | UserSkillProgressUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutSkillInput | UserSkillProgressUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutSkillInput | UserSkillProgressUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutParentSkillNestedInput = {
    create?: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput> | SkillCreateWithoutParentSkillInput[] | SkillUncheckedCreateWithoutParentSkillInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutParentSkillInput | SkillCreateOrConnectWithoutParentSkillInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutParentSkillInput | SkillUpsertWithWhereUniqueWithoutParentSkillInput[]
    createMany?: SkillCreateManyParentSkillInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutParentSkillInput | SkillUpdateWithWhereUniqueWithoutParentSkillInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutParentSkillInput | SkillUpdateManyWithWhereWithoutParentSkillInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutSkillInput | UserSkillProgressUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutSkillInput | UserSkillProgressUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutSkillInput | UserSkillProgressUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
  }

  export type UserSkillTreeProgressCreatemilestonesReachedInput = {
    set: string[]
  }

  export type UserSkillTreeProgressCreatecurrentPathInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSkillTreeProgressInput = {
    create?: XOR<UserCreateWithoutSkillTreeProgressInput, UserUncheckedCreateWithoutSkillTreeProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillTreeProgressInput
    connect?: UserWhereUniqueInput
  }

  export type SkillTreeCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutUserProgressInput
    connect?: SkillTreeWhereUniqueInput
  }

  export type EnumTreeProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.TreeProgressStatus
  }

  export type UserSkillTreeProgressUpdatemilestonesReachedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserSkillTreeProgressUpdatecurrentPathInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSkillTreeProgressNestedInput = {
    create?: XOR<UserCreateWithoutSkillTreeProgressInput, UserUncheckedCreateWithoutSkillTreeProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillTreeProgressInput
    upsert?: UserUpsertWithoutSkillTreeProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillTreeProgressInput, UserUpdateWithoutSkillTreeProgressInput>, UserUncheckedUpdateWithoutSkillTreeProgressInput>
  }

  export type SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutUserProgressInput
    upsert?: SkillTreeUpsertWithoutUserProgressInput
    connect?: SkillTreeWhereUniqueInput
    update?: XOR<XOR<SkillTreeUpdateToOneWithWhereWithoutUserProgressInput, SkillTreeUpdateWithoutUserProgressInput>, SkillTreeUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutSkillProgressInput = {
    create?: XOR<UserCreateWithoutSkillProgressInput, UserUncheckedCreateWithoutSkillProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillProgressInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<SkillCreateWithoutUserProgressInput, SkillUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUserProgressInput
    connect?: SkillWhereUniqueInput
  }

  export type EnumSkillProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.SkillProgressStatus
  }

  export type NullableEnumCompletionMethodFieldUpdateOperationsInput = {
    set?: $Enums.CompletionMethod | null
  }

  export type UserUpdateOneRequiredWithoutSkillProgressNestedInput = {
    create?: XOR<UserCreateWithoutSkillProgressInput, UserUncheckedCreateWithoutSkillProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillProgressInput
    upsert?: UserUpsertWithoutSkillProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillProgressInput, UserUpdateWithoutSkillProgressInput>, UserUncheckedUpdateWithoutSkillProgressInput>
  }

  export type SkillUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<SkillCreateWithoutUserProgressInput, SkillUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUserProgressInput
    upsert?: SkillUpsertWithoutUserProgressInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUserProgressInput, SkillUpdateWithoutUserProgressInput>, SkillUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type EnumAchievementCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AchievementCategory
  }

  export type EnumAchievementRarityFieldUpdateOperationsInput = {
    set?: $Enums.AchievementRarity
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type AchievementCreateNestedOneWithoutUserAchievementsInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput = {
    create?: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUserAchievementsInput
    upsert?: AchievementUpsertWithoutUserAchievementsInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUserAchievementsInput, AchievementUpdateWithoutUserAchievementsInput>, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType
  }

  export type NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | EnumSkillTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillType[] | ListEnumSkillTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillTypeFilter<$PrismaModel>
    _max?: NestedEnumSkillTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTreeProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeProgressStatus | EnumTreeProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeProgressStatusFilter<$PrismaModel> | $Enums.TreeProgressStatus
  }

  export type NestedEnumTreeProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeProgressStatus | EnumTreeProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeProgressStatus[] | ListEnumTreeProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.TreeProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreeProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumTreeProgressStatusFilter<$PrismaModel>
  }

  export type NestedEnumSkillProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusFilter<$PrismaModel> | $Enums.SkillProgressStatus
  }

  export type NestedEnumCompletionMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionMethod | EnumCompletionMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompletionMethodNullableFilter<$PrismaModel> | $Enums.CompletionMethod | null
  }

  export type NestedEnumSkillProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumSkillProgressStatusFilter<$PrismaModel>
  }

  export type NestedEnumCompletionMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionMethod | EnumCompletionMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompletionMethod[] | ListEnumCompletionMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompletionMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompletionMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompletionMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumCompletionMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumAchievementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryFilter<$PrismaModel> | $Enums.AchievementCategory
  }

  export type NestedEnumAchievementRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRarity | EnumAchievementRarityFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRarityFilter<$PrismaModel> | $Enums.AchievementRarity
  }

  export type NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AchievementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementCategoryFilter<$PrismaModel>
    _max?: NestedEnumAchievementCategoryFilter<$PrismaModel>
  }

  export type NestedEnumAchievementRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRarity | EnumAchievementRarityFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRarity[] | ListEnumAchievementRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRarityWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementRarityFilter<$PrismaModel>
    _max?: NestedEnumAchievementRarityFilter<$PrismaModel>
  }

  export type UserSkillTreeProgressCreateWithoutUserInput = {
    id?: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTree: SkillTreeCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillTreeProgressUncheckedCreateWithoutUserInput = {
    id?: string
    skillTreeId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillTreeProgressCreateOrConnectWithoutUserInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    create: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSkillTreeProgressCreateManyUserInputEnvelope = {
    data: UserSkillTreeProgressCreateManyUserInput | UserSkillTreeProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillProgressCreateWithoutUserInput = {
    id?: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateWithoutUserInput = {
    id?: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressCreateOrConnectWithoutUserInput = {
    where: UserSkillProgressWhereUniqueInput
    create: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSkillProgressCreateManyUserInputEnvelope = {
    data: UserSkillProgressCreateManyUserInput | UserSkillProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementCreateWithoutUserInput = {
    id?: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    achievement: AchievementCreateNestedOneWithoutUserAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: string
    achievementId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionCreateWithoutUserInput = {
    id?: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionCreateManyUserInputEnvelope = {
    data: UserSessionCreateManyUserInput | UserSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    bio?: string | null
    location?: string | null
    website?: string | null
    timezone?: string | null
    learningGoals?: UserProfileCreatelearningGoalsInput | string[]
    interests?: UserProfileCreateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: number
    currentLevel?: number
    currentStreak?: number
    maxStreak?: number
    lastActivityAt?: Date | string | null
    skillsCompleted?: number
    hoursLearned?: number
    treesStarted?: number
    treesCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    bio?: string | null
    location?: string | null
    website?: string | null
    timezone?: string | null
    learningGoals?: UserProfileCreatelearningGoalsInput | string[]
    interests?: UserProfileCreateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: number
    currentLevel?: number
    currentStreak?: number
    maxStreak?: number
    lastActivityAt?: Date | string | null
    skillsCompleted?: number
    hoursLearned?: number
    treesStarted?: number
    treesCompleted?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserSkillTreeProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    update: XOR<UserSkillTreeProgressUpdateWithoutUserInput, UserSkillTreeProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillTreeProgressCreateWithoutUserInput, UserSkillTreeProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSkillTreeProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    data: XOR<UserSkillTreeProgressUpdateWithoutUserInput, UserSkillTreeProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillTreeProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillTreeProgressScalarWhereInput
    data: XOR<UserSkillTreeProgressUpdateManyMutationInput, UserSkillTreeProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillTreeProgressScalarWhereInput = {
    AND?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
    OR?: UserSkillTreeProgressScalarWhereInput[]
    NOT?: UserSkillTreeProgressScalarWhereInput | UserSkillTreeProgressScalarWhereInput[]
    id?: StringFilter<"UserSkillTreeProgress"> | string
    userId?: StringFilter<"UserSkillTreeProgress"> | string
    skillTreeId?: StringFilter<"UserSkillTreeProgress"> | string
    status?: EnumTreeProgressStatusFilter<"UserSkillTreeProgress"> | $Enums.TreeProgressStatus
    progressPercent?: FloatFilter<"UserSkillTreeProgress"> | number
    skillsCompleted?: IntFilter<"UserSkillTreeProgress"> | number
    totalSkills?: IntFilter<"UserSkillTreeProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillTreeProgress"> | number
    startedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillTreeProgress"> | Date | string | null
    milestonesReached?: StringNullableListFilter<"UserSkillTreeProgress">
    currentPath?: StringNullableListFilter<"UserSkillTreeProgress">
    createdAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillTreeProgress"> | Date | string
  }

  export type UserSkillProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillProgressWhereUniqueInput
    update: XOR<UserSkillProgressUpdateWithoutUserInput, UserSkillProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput>
  }

  export type UserSkillProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillProgressWhereUniqueInput
    data: XOR<UserSkillProgressUpdateWithoutUserInput, UserSkillProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillProgressScalarWhereInput
    data: XOR<UserSkillProgressUpdateManyMutationInput, UserSkillProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillProgressScalarWhereInput = {
    AND?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
    OR?: UserSkillProgressScalarWhereInput[]
    NOT?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
    id?: StringFilter<"UserSkillProgress"> | string
    userId?: StringFilter<"UserSkillProgress"> | string
    skillId?: StringFilter<"UserSkillProgress"> | string
    skillTreeId?: StringFilter<"UserSkillProgress"> | string
    status?: EnumSkillProgressStatusFilter<"UserSkillProgress"> | $Enums.SkillProgressStatus
    progressPercent?: FloatFilter<"UserSkillProgress"> | number
    timeSpentMinutes?: IntFilter<"UserSkillProgress"> | number
    attemptsCount?: IntFilter<"UserSkillProgress"> | number
    completionMethod?: EnumCompletionMethodNullableFilter<"UserSkillProgress"> | $Enums.CompletionMethod | null
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    evidenceData?: JsonNullableFilter<"UserSkillProgress">
    unlockedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    strugglingIndicators?: JsonNullableFilter<"UserSkillProgress">
    engagementScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    earnedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    progress?: FloatFilter<"UserAchievement"> | number
    metadata?: JsonNullableFilter<"UserAchievement">
  }

  export type UserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type UserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateManyWithWhereWithoutUserInput = {
    where: UserSessionScalarWhereInput
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSessionScalarWhereInput = {
    AND?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    OR?: UserSessionScalarWhereInput[]
    NOT?: UserSessionScalarWhereInput | UserSessionScalarWhereInput[]
    id?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    deviceInfo?: JsonNullableFilter<"UserSession">
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    startedAt?: DateTimeFilter<"UserSession"> | Date | string
    lastActivityAt?: DateTimeFilter<"UserSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    isActive?: BoolFilter<"UserSession"> | boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    learningGoals?: UserProfileUpdatelearningGoalsInput | string[]
    interests?: UserProfileUpdateinterestsInput | string[]
    preferences?: JsonNullValueInput | InputJsonValue
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    hoursLearned?: FloatFieldUpdateOperationsInput | number
    treesStarted?: IntFieldUpdateOperationsInput | number
    treesCompleted?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillTreeCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skills?: SkillCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillTreeProgressCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeCreateOrConnectWithoutCategoryInput = {
    where: SkillTreeWhereUniqueInput
    create: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput>
  }

  export type SkillTreeCreateManyCategoryInputEnvelope = {
    data: SkillTreeCreateManyCategoryInput | SkillTreeCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SkillTreeUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SkillTreeWhereUniqueInput
    update: XOR<SkillTreeUpdateWithoutCategoryInput, SkillTreeUncheckedUpdateWithoutCategoryInput>
    create: XOR<SkillTreeCreateWithoutCategoryInput, SkillTreeUncheckedCreateWithoutCategoryInput>
  }

  export type SkillTreeUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SkillTreeWhereUniqueInput
    data: XOR<SkillTreeUpdateWithoutCategoryInput, SkillTreeUncheckedUpdateWithoutCategoryInput>
  }

  export type SkillTreeUpdateManyWithWhereWithoutCategoryInput = {
    where: SkillTreeScalarWhereInput
    data: XOR<SkillTreeUpdateManyMutationInput, SkillTreeUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SkillTreeScalarWhereInput = {
    AND?: SkillTreeScalarWhereInput | SkillTreeScalarWhereInput[]
    OR?: SkillTreeScalarWhereInput[]
    NOT?: SkillTreeScalarWhereInput | SkillTreeScalarWhereInput[]
    id?: StringFilter<"SkillTree"> | string
    categoryId?: StringFilter<"SkillTree"> | string
    name?: StringFilter<"SkillTree"> | string
    slug?: StringFilter<"SkillTree"> | string
    description?: StringNullableFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableFilter<"SkillTree"> | number | null
    prerequisites?: StringNullableListFilter<"SkillTree">
    tags?: StringNullableListFilter<"SkillTree">
    version?: StringFilter<"SkillTree"> | string
    layoutConfig?: JsonFilter<"SkillTree">
    themeConfig?: JsonFilter<"SkillTree">
    isPublished?: BoolFilter<"SkillTree"> | boolean
    isFeatured?: BoolFilter<"SkillTree"> | boolean
    isAiGenerated?: BoolFilter<"SkillTree"> | boolean
    createdAt?: DateTimeFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeFilter<"SkillTree"> | Date | string
    createdBy?: StringNullableFilter<"SkillTree"> | string | null
    updatedBy?: StringNullableFilter<"SkillTree"> | string | null
  }

  export type SkillCategoryCreateWithoutSkillTreesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    color?: string | null
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryUncheckedCreateWithoutSkillTreesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    color?: string | null
    icon?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCategoryCreateOrConnectWithoutSkillTreesInput = {
    where: SkillCategoryWhereUniqueInput
    create: XOR<SkillCategoryCreateWithoutSkillTreesInput, SkillCategoryUncheckedCreateWithoutSkillTreesInput>
  }

  export type SkillCreateWithoutSkillTreeInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    parentSkill?: SkillCreateNestedOneWithoutChildSkillsInput
    childSkills?: SkillCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutSkillTreeInput = {
    id?: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    childSkills?: SkillUncheckedCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutSkillTreeInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput>
  }

  export type SkillCreateManySkillTreeInputEnvelope = {
    data: SkillCreateManySkillTreeInput | SkillCreateManySkillTreeInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillTreeProgressCreateWithoutSkillTreeInput = {
    id?: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillTreeProgressInput
  }

  export type UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput = {
    id?: string
    userId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillTreeProgressCreateOrConnectWithoutSkillTreeInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    create: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput>
  }

  export type UserSkillTreeProgressCreateManySkillTreeInputEnvelope = {
    data: UserSkillTreeProgressCreateManySkillTreeInput | UserSkillTreeProgressCreateManySkillTreeInput[]
    skipDuplicates?: boolean
  }

  export type SkillCategoryUpsertWithoutSkillTreesInput = {
    update: XOR<SkillCategoryUpdateWithoutSkillTreesInput, SkillCategoryUncheckedUpdateWithoutSkillTreesInput>
    create: XOR<SkillCategoryCreateWithoutSkillTreesInput, SkillCategoryUncheckedCreateWithoutSkillTreesInput>
    where?: SkillCategoryWhereInput
  }

  export type SkillCategoryUpdateToOneWithWhereWithoutSkillTreesInput = {
    where?: SkillCategoryWhereInput
    data: XOR<SkillCategoryUpdateWithoutSkillTreesInput, SkillCategoryUncheckedUpdateWithoutSkillTreesInput>
  }

  export type SkillCategoryUpdateWithoutSkillTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCategoryUncheckedUpdateWithoutSkillTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpsertWithWhereUniqueWithoutSkillTreeInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutSkillTreeInput, SkillUncheckedUpdateWithoutSkillTreeInput>
    create: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutSkillTreeInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutSkillTreeInput, SkillUncheckedUpdateWithoutSkillTreeInput>
  }

  export type SkillUpdateManyWithWhereWithoutSkillTreeInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutSkillTreeInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    skillTreeId?: StringFilter<"Skill"> | string
    parentSkillId?: StringNullableFilter<"Skill"> | string | null
    name?: StringFilter<"Skill"> | string
    shortName?: StringNullableFilter<"Skill"> | string | null
    description?: StringNullableFilter<"Skill"> | string | null
    learningObjectives?: StringNullableListFilter<"Skill">
    skillType?: EnumSkillTypeFilter<"Skill"> | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    dependents?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    nodeSize?: IntFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    resources?: JsonNullableFilter<"Skill">
    assessments?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isOptional?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    createdBy?: StringNullableFilter<"Skill"> | string | null
    updatedBy?: StringNullableFilter<"Skill"> | string | null
  }

  export type UserSkillTreeProgressUpsertWithWhereUniqueWithoutSkillTreeInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    update: XOR<UserSkillTreeProgressUpdateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedUpdateWithoutSkillTreeInput>
    create: XOR<UserSkillTreeProgressCreateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedCreateWithoutSkillTreeInput>
  }

  export type UserSkillTreeProgressUpdateWithWhereUniqueWithoutSkillTreeInput = {
    where: UserSkillTreeProgressWhereUniqueInput
    data: XOR<UserSkillTreeProgressUpdateWithoutSkillTreeInput, UserSkillTreeProgressUncheckedUpdateWithoutSkillTreeInput>
  }

  export type UserSkillTreeProgressUpdateManyWithWhereWithoutSkillTreeInput = {
    where: UserSkillTreeProgressScalarWhereInput
    data: XOR<UserSkillTreeProgressUpdateManyMutationInput, UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeInput>
  }

  export type SkillTreeCreateWithoutSkillsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    category: SkillCategoryCreateNestedOneWithoutSkillTreesInput
    userProgress?: UserSkillTreeProgressCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateWithoutSkillsInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    userProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeCreateOrConnectWithoutSkillsInput = {
    where: SkillTreeWhereUniqueInput
    create: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutChildSkillsInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
    parentSkill?: SkillCreateNestedOneWithoutChildSkillsInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutChildSkillsInput = {
    id?: string
    skillTreeId: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutChildSkillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutChildSkillsInput, SkillUncheckedCreateWithoutChildSkillsInput>
  }

  export type SkillCreateWithoutParentSkillInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
    childSkills?: SkillCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutParentSkillInput = {
    id?: string
    skillTreeId: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    childSkills?: SkillUncheckedCreateNestedManyWithoutParentSkillInput
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutParentSkillInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput>
  }

  export type SkillCreateManyParentSkillInputEnvelope = {
    data: SkillCreateManyParentSkillInput | SkillCreateManyParentSkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillProgressCreateWithoutSkillInput = {
    id?: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillProgressInput
  }

  export type UserSkillProgressUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressCreateOrConnectWithoutSkillInput = {
    where: UserSkillProgressWhereUniqueInput
    create: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillProgressCreateManySkillInputEnvelope = {
    data: UserSkillProgressCreateManySkillInput | UserSkillProgressCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type SkillTreeUpsertWithoutSkillsInput = {
    update: XOR<SkillTreeUpdateWithoutSkillsInput, SkillTreeUncheckedUpdateWithoutSkillsInput>
    create: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
    where?: SkillTreeWhereInput
  }

  export type SkillTreeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: SkillTreeWhereInput
    data: XOR<SkillTreeUpdateWithoutSkillsInput, SkillTreeUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillTreeUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    category?: SkillCategoryUpdateOneRequiredWithoutSkillTreesNestedInput
    userProgress?: UserSkillTreeProgressUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillUpsertWithoutChildSkillsInput = {
    update: XOR<SkillUpdateWithoutChildSkillsInput, SkillUncheckedUpdateWithoutChildSkillsInput>
    create: XOR<SkillCreateWithoutChildSkillsInput, SkillUncheckedCreateWithoutChildSkillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutChildSkillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutChildSkillsInput, SkillUncheckedUpdateWithoutChildSkillsInput>
  }

  export type SkillUpdateWithoutChildSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
    parentSkill?: SkillUpdateOneWithoutChildSkillsNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutChildSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUpsertWithWhereUniqueWithoutParentSkillInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutParentSkillInput, SkillUncheckedUpdateWithoutParentSkillInput>
    create: XOR<SkillCreateWithoutParentSkillInput, SkillUncheckedCreateWithoutParentSkillInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutParentSkillInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutParentSkillInput, SkillUncheckedUpdateWithoutParentSkillInput>
  }

  export type SkillUpdateManyWithWhereWithoutParentSkillInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutParentSkillInput>
  }

  export type UserSkillProgressUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillProgressWhereUniqueInput
    update: XOR<UserSkillProgressUpdateWithoutSkillInput, UserSkillProgressUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillProgressUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillProgressWhereUniqueInput
    data: XOR<UserSkillProgressUpdateWithoutSkillInput, UserSkillProgressUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillProgressUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillProgressScalarWhereInput
    data: XOR<UserSkillProgressUpdateManyMutationInput, UserSkillProgressUncheckedUpdateManyWithoutSkillInput>
  }

  export type UserCreateWithoutSkillTreeProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillTreeProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillTreeProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillTreeProgressInput, UserUncheckedCreateWithoutSkillTreeProgressInput>
  }

  export type SkillTreeCreateWithoutUserProgressInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    category: SkillCategoryCreateNestedOneWithoutSkillTreesInput
    skills?: SkillCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateWithoutUserProgressInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skills?: SkillUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeCreateOrConnectWithoutUserProgressInput = {
    where: SkillTreeWhereUniqueInput
    create: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutSkillTreeProgressInput = {
    update: XOR<UserUpdateWithoutSkillTreeProgressInput, UserUncheckedUpdateWithoutSkillTreeProgressInput>
    create: XOR<UserCreateWithoutSkillTreeProgressInput, UserUncheckedCreateWithoutSkillTreeProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillTreeProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillTreeProgressInput, UserUncheckedUpdateWithoutSkillTreeProgressInput>
  }

  export type UserUpdateWithoutSkillTreeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillTreeProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SkillTreeUpsertWithoutUserProgressInput = {
    update: XOR<SkillTreeUpdateWithoutUserProgressInput, SkillTreeUncheckedUpdateWithoutUserProgressInput>
    create: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
    where?: SkillTreeWhereInput
  }

  export type SkillTreeUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: SkillTreeWhereInput
    data: XOR<SkillTreeUpdateWithoutUserProgressInput, SkillTreeUncheckedUpdateWithoutUserProgressInput>
  }

  export type SkillTreeUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    category?: SkillCategoryUpdateOneRequiredWithoutSkillTreesNestedInput
    skills?: SkillUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type UserCreateWithoutSkillProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillProgressInput, UserUncheckedCreateWithoutSkillProgressInput>
  }

  export type SkillCreateWithoutUserProgressInput = {
    id?: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
    parentSkill?: SkillCreateNestedOneWithoutChildSkillsInput
    childSkills?: SkillCreateNestedManyWithoutParentSkillInput
  }

  export type SkillUncheckedCreateWithoutUserProgressInput = {
    id?: string
    skillTreeId: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    childSkills?: SkillUncheckedCreateNestedManyWithoutParentSkillInput
  }

  export type SkillCreateOrConnectWithoutUserProgressInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserProgressInput, SkillUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutSkillProgressInput = {
    update: XOR<UserUpdateWithoutSkillProgressInput, UserUncheckedUpdateWithoutSkillProgressInput>
    create: XOR<UserCreateWithoutSkillProgressInput, UserUncheckedCreateWithoutSkillProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillProgressInput, UserUncheckedUpdateWithoutSkillProgressInput>
  }

  export type UserUpdateWithoutSkillProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SkillUpsertWithoutUserProgressInput = {
    update: XOR<SkillUpdateWithoutUserProgressInput, SkillUncheckedUpdateWithoutUserProgressInput>
    create: XOR<SkillCreateWithoutUserProgressInput, SkillUncheckedCreateWithoutUserProgressInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUserProgressInput, SkillUncheckedUpdateWithoutUserProgressInput>
  }

  export type SkillUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
    parentSkill?: SkillUpdateOneWithoutChildSkillsNestedInput
    childSkills?: SkillUpdateManyWithoutParentSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    childSkills?: SkillUncheckedUpdateManyWithoutParentSkillNestedInput
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
    sessions?: UserSessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
    sessions?: UserSessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type AchievementCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    category?: $Enums.AchievementCategory
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeIcon?: string | null
    badgeColor?: string | null
    rarity?: $Enums.AchievementRarity
    isVisible?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutUserAchievementsInput = {
    id?: string
    name: string
    description: string
    category?: $Enums.AchievementCategory
    criteria: JsonNullValueInput | InputJsonValue
    xpReward?: number
    badgeIcon?: string | null
    badgeColor?: string | null
    rarity?: $Enums.AchievementRarity
    isVisible?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutUserAchievementsInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
    sessions?: UserSessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AchievementUpsertWithoutUserAchievementsInput = {
    update: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
    create: XOR<AchievementCreateWithoutUserAchievementsInput, AchievementUncheckedCreateWithoutUserAchievementsInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUserAchievementsInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUserAchievementsInput, AchievementUncheckedUpdateWithoutUserAchievementsInput>
  }

  export type AchievementUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutUserAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    criteria?: JsonNullValueInput | InputJsonValue
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeIcon?: NullableStringFieldUpdateOperationsInput | string | null
    badgeColor?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: EnumAchievementRarityFieldUpdateOperationsInput | $Enums.AchievementRarity
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedCreateNestedManyWithoutUserInput
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTreeProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutUserNestedInput
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserSkillTreeProgressCreateManyUserInput = {
    id?: string
    skillTreeId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressCreateManyUserInput = {
    id?: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAchievementCreateManyUserInput = {
    id?: string
    achievementId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSessionCreateManyUserInput = {
    id?: string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    startedAt?: Date | string
    lastActivityAt?: Date | string
    endedAt?: Date | string | null
    isActive?: boolean
  }

  export type UserSkillTreeProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTree?: SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillTreeProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillTreeProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    achievement?: AchievementUpdateOneRequiredWithoutUserAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkillTreeCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    prerequisites?: SkillTreeCreateprerequisitesInput | string[]
    tags?: SkillTreeCreatetagsInput | string[]
    version?: string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    isAiGenerated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type SkillTreeUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillTreeProgressUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: SkillUncheckedUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    prerequisites?: SkillTreeUpdateprerequisitesInput | string[]
    tags?: SkillTreeUpdatetagsInput | string[]
    version?: StringFieldUpdateOperationsInput | string
    layoutConfig?: JsonNullValueInput | InputJsonValue
    themeConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isAiGenerated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateManySkillTreeInput = {
    id?: string
    parentSkillId?: string | null
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type UserSkillTreeProgressCreateManySkillTreeInput = {
    id?: string
    userId: string
    status?: $Enums.TreeProgressStatus
    progressPercent?: number
    skillsCompleted?: number
    totalSkills?: number
    timeSpentMinutes?: number
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    milestonesReached?: UserSkillTreeProgressCreatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressCreatecurrentPathInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    parentSkill?: SkillUpdateOneWithoutChildSkillsNestedInput
    childSkills?: SkillUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    childSkills?: SkillUncheckedUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentSkillId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSkillTreeProgressUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillTreeProgressNestedInput
  }

  export type UserSkillTreeProgressUncheckedUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillTreeProgressUncheckedUpdateManyWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumTreeProgressStatusFieldUpdateOperationsInput | $Enums.TreeProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    skillsCompleted?: IntFieldUpdateOperationsInput | number
    totalSkills?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    milestonesReached?: UserSkillTreeProgressUpdatemilestonesReachedInput | string[]
    currentPath?: UserSkillTreeProgressUpdatecurrentPathInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyParentSkillInput = {
    id?: string
    skillTreeId: string
    name: string
    shortName?: string | null
    description?: string | null
    learningObjectives?: SkillCreatelearningObjectivesInput | string[]
    skillType?: $Enums.SkillType
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    dependents?: SkillCreatedependentsInput | string[]
    positionX?: number
    positionY?: number
    nodeSize?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isOptional?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    updatedBy?: string | null
  }

  export type UserSkillProgressCreateManySkillInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    attemptsCount?: number
    completionMethod?: $Enums.CompletionMethod | null
    completionScore?: number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: Date | string | null
    startedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    completedAt?: Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateWithoutParentSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
    childSkills?: SkillUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutParentSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    childSkills?: SkillUncheckedUpdateManyWithoutParentSkillNestedInput
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutParentSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    learningObjectives?: SkillUpdatelearningObjectivesInput | string[]
    skillType?: EnumSkillTypeFieldUpdateOperationsInput | $Enums.SkillType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    dependents?: SkillUpdatedependentsInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    nodeSize?: IntFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    resources?: NullableJsonNullValueInput | InputJsonValue
    assessments?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isOptional?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSkillProgressUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    attemptsCount?: IntFieldUpdateOperationsInput | number
    completionMethod?: NullableEnumCompletionMethodFieldUpdateOperationsInput | $Enums.CompletionMethod | null
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evidenceData?: NullableJsonNullValueInput | InputJsonValue
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    strugglingIndicators?: NullableJsonNullValueInput | InputJsonValue
    engagementScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: string
    userId: string
    earnedAt?: Date | string
    progress?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}