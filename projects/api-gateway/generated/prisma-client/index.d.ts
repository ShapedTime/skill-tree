
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
 * Model UserSkillProgress
 * 
 */
export type UserSkillProgress = $Result.DefaultSelection<Prisma.$UserSkillProgressPayload>

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


export const SkillProgressStatus: {
  LOCKED: 'LOCKED',
  AVAILABLE: 'AVAILABLE',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type SkillProgressStatus = (typeof SkillProgressStatus)[keyof typeof SkillProgressStatus]

}

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type SkillProgressStatus = $Enums.SkillProgressStatus

export const SkillProgressStatus: typeof $Enums.SkillProgressStatus

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
   * `prisma.userSkillProgress`: Exposes CRUD operations for the **UserSkillProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkillProgresses
    * const userSkillProgresses = await prisma.userSkillProgress.findMany()
    * ```
    */
  get userSkillProgress(): Prisma.UserSkillProgressDelegate<ExtArgs, ClientOptions>;
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
    SkillTree: 'SkillTree',
    Skill: 'Skill',
    UserSkillProgress: 'UserSkillProgress'
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
      modelProps: "user" | "skillTree" | "skill" | "userSkillProgress"
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
    skillTree?: SkillTreeOmit
    skill?: SkillOmit
    userSkillProgress?: UserSkillProgressOmit
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
    skillProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillProgress?: boolean | UserCountOutputTypeCountSkillProgressArgs
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
  export type UserCountOutputTypeCountSkillProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillProgressWhereInput
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
    where?: UserSkillProgressWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    userProgress: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type SkillCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
  }

  export type UserSumAggregateOutputType = {
    totalXp: number | null
    currentLevel: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    bio: string | null
    timezone: string | null
    totalXp: number | null
    currentLevel: number | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatarUrl: string | null
    bio: string | null
    timezone: string | null
    totalXp: number | null
    currentLevel: number | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    firstName: number
    lastName: number
    avatarUrl: number
    bio: number
    timezone: number
    totalXp: number
    currentLevel: number
    isActive: number
    emailVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalXp?: true
    currentLevel?: true
  }

  export type UserSumAggregateInputType = {
    totalXp?: true
    currentLevel?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    bio?: true
    timezone?: true
    totalXp?: true
    currentLevel?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    bio?: true
    timezone?: true
    totalXp?: true
    currentLevel?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatarUrl?: true
    bio?: true
    timezone?: true
    totalXp?: true
    currentLevel?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
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
    bio: string | null
    timezone: string | null
    totalXp: number
    currentLevel: number
    isActive: boolean
    emailVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    bio?: boolean
    timezone?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillProgress?: boolean | User$skillProgressArgs<ExtArgs>
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
    bio?: boolean
    timezone?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    timezone?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    timezone?: boolean
    totalXp?: boolean
    currentLevel?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "firstName" | "lastName" | "avatarUrl" | "bio" | "timezone" | "totalXp" | "currentLevel" | "isActive" | "emailVerified" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillProgress?: boolean | User$skillProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skillProgress: Prisma.$UserSkillProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string
      firstName: string | null
      lastName: string | null
      avatarUrl: string | null
      bio: string | null
      timezone: string | null
      totalXp: number
      currentLevel: number
      isActive: boolean
      emailVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    skillProgress<T extends User$skillProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$skillProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly bio: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly totalXp: FieldRef<"User", 'Int'>
    readonly currentLevel: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedHours: number | null
    isPublished: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillTreeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedHours: number | null
    isPublished: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillTreeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    shortDescription: number
    difficulty: number
    estimatedHours: number
    tags: number
    layoutConfig: number
    isPublished: number
    isFeatured: number
    createdAt: number
    updatedAt: number
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
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillTreeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillTreeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    difficulty?: true
    estimatedHours?: true
    tags?: true
    layoutConfig?: true
    isPublished?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    slug: string
    description: string | null
    shortDescription: string | null
    difficulty: $Enums.DifficultyLevel
    estimatedHours: number | null
    tags: string[]
    layoutConfig: JsonValue
    isPublished: boolean
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    tags?: boolean
    layoutConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | SkillTree$skillsArgs<ExtArgs>
    userProgress?: boolean | SkillTree$userProgressArgs<ExtArgs>
    _count?: boolean | SkillTreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    tags?: boolean
    layoutConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    tags?: boolean
    layoutConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skillTree"]>

  export type SkillTreeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    tags?: boolean
    layoutConfig?: boolean
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillTreeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "shortDescription" | "difficulty" | "estimatedHours" | "tags" | "layoutConfig" | "isPublished" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["skillTree"]>
  export type SkillTreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | SkillTree$skillsArgs<ExtArgs>
    userProgress?: boolean | SkillTree$userProgressArgs<ExtArgs>
    _count?: boolean | SkillTreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillTreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillTreeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillTreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillTree"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      userProgress: Prisma.$UserSkillProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      shortDescription: string | null
      difficulty: $Enums.DifficultyLevel
      estimatedHours: number | null
      tags: string[]
      layoutConfig: Prisma.JsonValue
      isPublished: boolean
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
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
    skills<T extends SkillTree$skillsArgs<ExtArgs> = {}>(args?: Subset<T, SkillTree$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends SkillTree$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, SkillTree$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"SkillTree", 'String'>
    readonly slug: FieldRef<"SkillTree", 'String'>
    readonly description: FieldRef<"SkillTree", 'String'>
    readonly shortDescription: FieldRef<"SkillTree", 'String'>
    readonly difficulty: FieldRef<"SkillTree", 'DifficultyLevel'>
    readonly estimatedHours: FieldRef<"SkillTree", 'Float'>
    readonly tags: FieldRef<"SkillTree", 'String[]'>
    readonly layoutConfig: FieldRef<"SkillTree", 'Json'>
    readonly isPublished: FieldRef<"SkillTree", 'Boolean'>
    readonly isFeatured: FieldRef<"SkillTree", 'Boolean'>
    readonly createdAt: FieldRef<"SkillTree", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillTree", 'DateTime'>
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
  }

  export type SkillSumAggregateOutputType = {
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    skillTreeId: string | null
    name: string | null
    description: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    isActive: boolean | null
    isMilestone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    skillTreeId: string | null
    name: string | null
    description: string | null
    difficulty: $Enums.DifficultyLevel | null
    estimatedMinutes: number | null
    xpValue: number | null
    positionX: number | null
    positionY: number | null
    isActive: boolean | null
    isMilestone: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    skillTreeId: number
    name: number
    description: number
    difficulty: number
    estimatedMinutes: number
    xpValue: number
    dependencies: number
    positionX: number
    positionY: number
    content: number
    isActive: number
    isMilestone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
  }

  export type SkillSumAggregateInputType = {
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    skillTreeId?: true
    name?: true
    description?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    isActive?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    skillTreeId?: true
    name?: true
    description?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    positionX?: true
    positionY?: true
    isActive?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    skillTreeId?: true
    name?: true
    description?: true
    difficulty?: true
    estimatedMinutes?: true
    xpValue?: true
    dependencies?: true
    positionX?: true
    positionY?: true
    content?: true
    isActive?: true
    isMilestone?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    description: string | null
    difficulty: $Enums.DifficultyLevel
    estimatedMinutes: number | null
    xpValue: number
    dependencies: string[]
    positionX: number
    positionY: number
    content: JsonValue | null
    isActive: boolean
    isMilestone: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    description?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    positionX?: boolean
    positionY?: boolean
    content?: boolean
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    userProgress?: boolean | Skill$userProgressArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillTreeId?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    positionX?: boolean
    positionY?: boolean
    content?: boolean
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillTreeId?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    positionX?: boolean
    positionY?: boolean
    content?: boolean
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    skillTreeId?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    estimatedMinutes?: boolean
    xpValue?: boolean
    dependencies?: boolean
    positionX?: boolean
    positionY?: boolean
    content?: boolean
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillTreeId" | "name" | "description" | "difficulty" | "estimatedMinutes" | "xpValue" | "dependencies" | "positionX" | "positionY" | "content" | "isActive" | "isMilestone" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
    userProgress?: boolean | Skill$userProgressArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      skillTree: Prisma.$SkillTreePayload<ExtArgs>
      userProgress: Prisma.$UserSkillProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skillTreeId: string
      name: string
      description: string | null
      difficulty: $Enums.DifficultyLevel
      estimatedMinutes: number | null
      xpValue: number
      dependencies: string[]
      positionX: number
      positionY: number
      content: Prisma.JsonValue | null
      isActive: boolean
      isMilestone: boolean
      createdAt: Date
      updatedAt: Date
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
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly difficulty: FieldRef<"Skill", 'DifficultyLevel'>
    readonly estimatedMinutes: FieldRef<"Skill", 'Int'>
    readonly xpValue: FieldRef<"Skill", 'Int'>
    readonly dependencies: FieldRef<"Skill", 'String[]'>
    readonly positionX: FieldRef<"Skill", 'Float'>
    readonly positionY: FieldRef<"Skill", 'Float'>
    readonly content: FieldRef<"Skill", 'Json'>
    readonly isActive: FieldRef<"Skill", 'Boolean'>
    readonly isMilestone: FieldRef<"Skill", 'Boolean'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
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
    completionScore: number | null
  }

  export type UserSkillProgressSumAggregateOutputType = {
    progressPercent: number | null
    timeSpentMinutes: number | null
    completionScore: number | null
  }

  export type UserSkillProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    skillId: string | null
    skillTreeId: string | null
    status: $Enums.SkillProgressStatus | null
    progressPercent: number | null
    timeSpentMinutes: number | null
    completionScore: number | null
    startedAt: Date | null
    completedAt: Date | null
    lastActivityAt: Date | null
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
    completionScore: number | null
    startedAt: Date | null
    completedAt: Date | null
    lastActivityAt: Date | null
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
    completionScore: number
    startedAt: number
    completedAt: number
    lastActivityAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSkillProgressAvgAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    completionScore?: true
  }

  export type UserSkillProgressSumAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    completionScore?: true
  }

  export type UserSkillProgressMinAggregateInputType = {
    id?: true
    userId?: true
    skillId?: true
    skillTreeId?: true
    status?: true
    progressPercent?: true
    timeSpentMinutes?: true
    completionScore?: true
    startedAt?: true
    completedAt?: true
    lastActivityAt?: true
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
    completionScore?: true
    startedAt?: true
    completedAt?: true
    lastActivityAt?: true
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
    completionScore?: true
    startedAt?: true
    completedAt?: true
    lastActivityAt?: true
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
    completionScore: number | null
    startedAt: Date | null
    completedAt: Date | null
    lastActivityAt: Date | null
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
    completionScore?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    completionScore?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    completionScore?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkillProgress"]>

  export type UserSkillProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    skillId?: boolean
    skillTreeId?: boolean
    status?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    completionScore?: boolean
    startedAt?: boolean
    completedAt?: boolean
    lastActivityAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSkillProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skillId" | "skillTreeId" | "status" | "progressPercent" | "timeSpentMinutes" | "completionScore" | "startedAt" | "completedAt" | "lastActivityAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userSkillProgress"]>
  export type UserSkillProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }
  export type UserSkillProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }
  export type UserSkillProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
    skillTree?: boolean | SkillTreeDefaultArgs<ExtArgs>
  }

  export type $UserSkillProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkillProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
      skillTree: Prisma.$SkillTreePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skillId: string
      skillTreeId: string
      status: $Enums.SkillProgressStatus
      progressPercent: number
      timeSpentMinutes: number
      completionScore: number | null
      startedAt: Date | null
      completedAt: Date | null
      lastActivityAt: Date | null
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
    readonly completionScore: FieldRef<"UserSkillProgress", 'Float'>
    readonly startedAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserSkillProgress", 'DateTime'>
    readonly lastActivityAt: FieldRef<"UserSkillProgress", 'DateTime'>
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
    bio: 'bio',
    timezone: 'timezone',
    totalXp: 'totalXp',
    currentLevel: 'currentLevel',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillTreeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    shortDescription: 'shortDescription',
    difficulty: 'difficulty',
    estimatedHours: 'estimatedHours',
    tags: 'tags',
    layoutConfig: 'layoutConfig',
    isPublished: 'isPublished',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillTreeScalarFieldEnum = (typeof SkillTreeScalarFieldEnum)[keyof typeof SkillTreeScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    skillTreeId: 'skillTreeId',
    name: 'name',
    description: 'description',
    difficulty: 'difficulty',
    estimatedMinutes: 'estimatedMinutes',
    xpValue: 'xpValue',
    dependencies: 'dependencies',
    positionX: 'positionX',
    positionY: 'positionY',
    content: 'content',
    isActive: 'isActive',
    isMilestone: 'isMilestone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const UserSkillProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skillId: 'skillId',
    skillTreeId: 'skillTreeId',
    status: 'status',
    progressPercent: 'progressPercent',
    timeSpentMinutes: 'timeSpentMinutes',
    completionScore: 'completionScore',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    lastActivityAt: 'lastActivityAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSkillProgressScalarFieldEnum = (typeof UserSkillProgressScalarFieldEnum)[keyof typeof UserSkillProgressScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SkillProgressStatus'
   */
  export type EnumSkillProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillProgressStatus'>
    


  /**
   * Reference to a field of type 'SkillProgressStatus[]'
   */
  export type ListEnumSkillProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillProgressStatus[]'>
    
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
    bio?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    totalXp?: IntFilter<"User"> | number
    currentLevel?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skillProgress?: UserSkillProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillProgress?: UserSkillProgressOrderByRelationAggregateInput
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
    bio?: StringNullableFilter<"User"> | string | null
    timezone?: StringNullableFilter<"User"> | string | null
    totalXp?: IntFilter<"User"> | number
    currentLevel?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    skillProgress?: UserSkillProgressListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
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
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalXp?: IntWithAggregatesFilter<"User"> | number
    currentLevel?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillTreeWhereInput = {
    AND?: SkillTreeWhereInput | SkillTreeWhereInput[]
    OR?: SkillTreeWhereInput[]
    NOT?: SkillTreeWhereInput | SkillTreeWhereInput[]
    id?: StringFilter<"SkillTree"> | string
    name?: StringFilter<"SkillTree"> | string
    slug?: StringFilter<"SkillTree"> | string
    description?: StringNullableFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableFilter<"SkillTree"> | number | null
    tags?: StringNullableListFilter<"SkillTree">
    layoutConfig?: JsonFilter<"SkillTree">
    isPublished?: BoolFilter<"SkillTree"> | boolean
    isFeatured?: BoolFilter<"SkillTree"> | boolean
    createdAt?: DateTimeFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeFilter<"SkillTree"> | Date | string
    skills?: SkillListRelationFilter
    userProgress?: UserSkillProgressListRelationFilter
  }

  export type SkillTreeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    tags?: SortOrder
    layoutConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    userProgress?: UserSkillProgressOrderByRelationAggregateInput
  }

  export type SkillTreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SkillTreeWhereInput | SkillTreeWhereInput[]
    OR?: SkillTreeWhereInput[]
    NOT?: SkillTreeWhereInput | SkillTreeWhereInput[]
    name?: StringFilter<"SkillTree"> | string
    description?: StringNullableFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableFilter<"SkillTree"> | number | null
    tags?: StringNullableListFilter<"SkillTree">
    layoutConfig?: JsonFilter<"SkillTree">
    isPublished?: BoolFilter<"SkillTree"> | boolean
    isFeatured?: BoolFilter<"SkillTree"> | boolean
    createdAt?: DateTimeFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeFilter<"SkillTree"> | Date | string
    skills?: SkillListRelationFilter
    userProgress?: UserSkillProgressListRelationFilter
  }, "id" | "slug">

  export type SkillTreeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    tags?: SortOrder
    layoutConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"SkillTree"> | string
    slug?: StringWithAggregatesFilter<"SkillTree"> | string
    description?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"SkillTree"> | string | null
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"SkillTree"> | $Enums.DifficultyLevel
    estimatedHours?: FloatNullableWithAggregatesFilter<"SkillTree"> | number | null
    tags?: StringNullableListFilter<"SkillTree">
    layoutConfig?: JsonWithAggregatesFilter<"SkillTree">
    isPublished?: BoolWithAggregatesFilter<"SkillTree"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"SkillTree"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SkillTree"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillTree"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    skillTreeId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
    userProgress?: UserSkillProgressListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    content?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skillTree?: SkillTreeOrderByWithRelationInput
    userProgress?: UserSkillProgressOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    skillTreeId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
    userProgress?: UserSkillProgressListRelationFilter
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    content?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Skill"> | number | null
    xpValue?: IntWithAggregatesFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    positionX?: FloatWithAggregatesFilter<"Skill"> | number
    positionY?: FloatWithAggregatesFilter<"Skill"> | number
    content?: JsonNullableWithAggregatesFilter<"Skill">
    isActive?: BoolWithAggregatesFilter<"Skill"> | boolean
    isMilestone?: BoolWithAggregatesFilter<"Skill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
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
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
  }

  export type UserSkillProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    completionScore?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
    skillTree?: SkillTreeOrderByWithRelationInput
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
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    skillTree?: XOR<SkillTreeScalarRelationFilter, SkillTreeWhereInput>
  }, "id" | "unique_user_skill_progress">

  export type UserSkillProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    completionScore?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
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
    completionScore?: FloatNullableWithAggregatesFilter<"UserSkillProgress"> | number | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"UserSkillProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSkillProgress"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    timezone?: string | null
    totalXp?: number
    currentLevel?: number
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillProgress?: UserSkillProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    timezone?: string | null
    totalXp?: number
    currentLevel?: number
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillProgress?: UserSkillProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillProgress?: UserSkillProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    timezone?: string | null
    totalXp?: number
    currentLevel?: number
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutSkillTreeInput
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutSkillTreeNestedInput
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillTreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillTreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    skillTreeId: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    skillTreeId: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressCreateInput = {
    id?: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillProgressInput
    skill: SkillCreateNestedOneWithoutUserProgressInput
    skillTree: SkillTreeCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateInput = {
    id?: string
    userId: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillProgressNestedInput
    skill?: SkillUpdateOneRequiredWithoutUserProgressNestedInput
    skillTree?: SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserSkillProgressListRelationFilter = {
    every?: UserSkillProgressWhereInput
    some?: UserSkillProgressWhereInput
    none?: UserSkillProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSkillProgressOrderByRelationAggregateInput = {
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
    bio?: SortOrder
    timezone?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    timezone?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    timezone?: SortOrder
    totalXp?: SortOrder
    currentLevel?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalXp?: SortOrder
    currentLevel?: SortOrder
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
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    tags?: SortOrder
    layoutConfig?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillTreeAvgOrderByAggregateInput = {
    estimatedHours?: SortOrder
  }

  export type SkillTreeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillTreeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    isPublished?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    dependencies?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    isActive?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    skillTreeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    isActive?: SortOrder
    isMilestone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    xpValue?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
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

  export type EnumSkillProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusFilter<$PrismaModel> | $Enums.SkillProgressStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
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
    completionScore?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillProgressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    completionScore?: SortOrder
  }

  export type UserSkillProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skillId?: SortOrder
    skillTreeId?: SortOrder
    status?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    completionScore?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastActivityAt?: SortOrder
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
    completionScore?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    lastActivityAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSkillProgressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    completionScore?: SortOrder
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

  export type UserSkillProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type UserSkillProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSkillProgressCreateWithoutUserInput, UserSkillProgressUncheckedCreateWithoutUserInput> | UserSkillProgressCreateWithoutUserInput[] | UserSkillProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutUserInput | UserSkillProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillProgressCreateManyUserInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type SkillTreeCreatetagsInput = {
    set: string[]
  }

  export type SkillCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillProgressCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillProgressCreateWithoutSkillTreeInput[] | UserSkillProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillTreeInput | UserSkillProgressCreateOrConnectWithoutSkillTreeInput[]
    createMany?: UserSkillProgressCreateManySkillTreeInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<SkillCreateWithoutSkillTreeInput, SkillUncheckedCreateWithoutSkillTreeInput> | SkillCreateWithoutSkillTreeInput[] | SkillUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutSkillTreeInput | SkillCreateOrConnectWithoutSkillTreeInput[]
    createMany?: SkillCreateManySkillTreeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type UserSkillProgressUncheckedCreateNestedManyWithoutSkillTreeInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillProgressCreateWithoutSkillTreeInput[] | UserSkillProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillTreeInput | UserSkillProgressCreateOrConnectWithoutSkillTreeInput[]
    createMany?: UserSkillProgressCreateManySkillTreeInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
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

  export type SkillTreeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
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

  export type UserSkillProgressUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillProgressCreateWithoutSkillTreeInput[] | UserSkillProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillTreeInput | UserSkillProgressCreateOrConnectWithoutSkillTreeInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutSkillTreeInput | UserSkillProgressUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: UserSkillProgressCreateManySkillTreeInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutSkillTreeInput | UserSkillProgressUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutSkillTreeInput | UserSkillProgressUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
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

  export type UserSkillProgressUncheckedUpdateManyWithoutSkillTreeNestedInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput> | UserSkillProgressCreateWithoutSkillTreeInput[] | UserSkillProgressUncheckedCreateWithoutSkillTreeInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillTreeInput | UserSkillProgressCreateOrConnectWithoutSkillTreeInput[]
    upsert?: UserSkillProgressUpsertWithWhereUniqueWithoutSkillTreeInput | UserSkillProgressUpsertWithWhereUniqueWithoutSkillTreeInput[]
    createMany?: UserSkillProgressCreateManySkillTreeInputEnvelope
    set?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    disconnect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    delete?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
    update?: UserSkillProgressUpdateWithWhereUniqueWithoutSkillTreeInput | UserSkillProgressUpdateWithWhereUniqueWithoutSkillTreeInput[]
    updateMany?: UserSkillProgressUpdateManyWithWhereWithoutSkillTreeInput | UserSkillProgressUpdateManyWithWhereWithoutSkillTreeInput[]
    deleteMany?: UserSkillProgressScalarWhereInput | UserSkillProgressScalarWhereInput[]
  }

  export type SkillCreatedependenciesInput = {
    set: string[]
  }

  export type SkillTreeCreateNestedOneWithoutSkillsInput = {
    create?: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutSkillsInput
    connect?: SkillTreeWhereUniqueInput
  }

  export type UserSkillProgressCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
  }

  export type UserSkillProgressUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillProgressCreateWithoutSkillInput, UserSkillProgressUncheckedCreateWithoutSkillInput> | UserSkillProgressCreateWithoutSkillInput[] | UserSkillProgressUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillProgressCreateOrConnectWithoutSkillInput | UserSkillProgressCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillProgressCreateManySkillInputEnvelope
    connect?: UserSkillProgressWhereUniqueInput | UserSkillProgressWhereUniqueInput[]
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SkillTreeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutSkillsInput
    upsert?: SkillTreeUpsertWithoutSkillsInput
    connect?: SkillTreeWhereUniqueInput
    update?: XOR<XOR<SkillTreeUpdateToOneWithWhereWithoutSkillsInput, SkillTreeUpdateWithoutSkillsInput>, SkillTreeUncheckedUpdateWithoutSkillsInput>
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

  export type SkillTreeCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutUserProgressInput
    connect?: SkillTreeWhereUniqueInput
  }

  export type EnumSkillProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.SkillProgressStatus
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

  export type SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: SkillTreeCreateOrConnectWithoutUserProgressInput
    upsert?: SkillTreeUpsertWithoutUserProgressInput
    connect?: SkillTreeWhereUniqueInput
    update?: XOR<XOR<SkillTreeUpdateToOneWithWhereWithoutUserProgressInput, SkillTreeUpdateWithoutUserProgressInput>, SkillTreeUncheckedUpdateWithoutUserProgressInput>
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

  export type NestedEnumSkillProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillProgressStatus | EnumSkillProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillProgressStatus[] | ListEnumSkillProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillProgressStatusFilter<$PrismaModel> | $Enums.SkillProgressStatus
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

  export type UserSkillProgressCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: SkillCreateNestedOneWithoutUserProgressInput
    skillTree: SkillTreeCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateWithoutUserInput = {
    id?: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
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
    completionScore?: FloatNullableFilter<"UserSkillProgress"> | number | null
    startedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    lastActivityAt?: DateTimeNullableFilter<"UserSkillProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserSkillProgress"> | Date | string
  }

  export type SkillCreateWithoutSkillTreeInput = {
    id?: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutSkillTreeInput = {
    id?: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type UserSkillProgressCreateWithoutSkillTreeInput = {
    id?: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillProgressInput
    skill: SkillCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateWithoutSkillTreeInput = {
    id?: string
    userId: string
    skillId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressCreateOrConnectWithoutSkillTreeInput = {
    where: UserSkillProgressWhereUniqueInput
    create: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput>
  }

  export type UserSkillProgressCreateManySkillTreeInputEnvelope = {
    data: UserSkillProgressCreateManySkillTreeInput | UserSkillProgressCreateManySkillTreeInput[]
    skipDuplicates?: boolean
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
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    difficulty?: EnumDifficultyLevelFilter<"Skill"> | $Enums.DifficultyLevel
    estimatedMinutes?: IntNullableFilter<"Skill"> | number | null
    xpValue?: IntFilter<"Skill"> | number
    dependencies?: StringNullableListFilter<"Skill">
    positionX?: FloatFilter<"Skill"> | number
    positionY?: FloatFilter<"Skill"> | number
    content?: JsonNullableFilter<"Skill">
    isActive?: BoolFilter<"Skill"> | boolean
    isMilestone?: BoolFilter<"Skill"> | boolean
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type UserSkillProgressUpsertWithWhereUniqueWithoutSkillTreeInput = {
    where: UserSkillProgressWhereUniqueInput
    update: XOR<UserSkillProgressUpdateWithoutSkillTreeInput, UserSkillProgressUncheckedUpdateWithoutSkillTreeInput>
    create: XOR<UserSkillProgressCreateWithoutSkillTreeInput, UserSkillProgressUncheckedCreateWithoutSkillTreeInput>
  }

  export type UserSkillProgressUpdateWithWhereUniqueWithoutSkillTreeInput = {
    where: UserSkillProgressWhereUniqueInput
    data: XOR<UserSkillProgressUpdateWithoutSkillTreeInput, UserSkillProgressUncheckedUpdateWithoutSkillTreeInput>
  }

  export type UserSkillProgressUpdateManyWithWhereWithoutSkillTreeInput = {
    where: UserSkillProgressScalarWhereInput
    data: XOR<UserSkillProgressUpdateManyMutationInput, UserSkillProgressUncheckedUpdateManyWithoutSkillTreeInput>
  }

  export type SkillTreeCreateWithoutSkillsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserSkillProgressCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserSkillProgressUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeCreateOrConnectWithoutSkillsInput = {
    where: SkillTreeWhereUniqueInput
    create: XOR<SkillTreeCreateWithoutSkillsInput, SkillTreeUncheckedCreateWithoutSkillsInput>
  }

  export type UserSkillProgressCreateWithoutSkillInput = {
    id?: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSkillProgressInput
    skillTree: SkillTreeCreateNestedOneWithoutUserProgressInput
  }

  export type UserSkillProgressUncheckedCreateWithoutSkillInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
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
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserSkillProgressUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillTreeNestedInput
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

  export type UserCreateWithoutSkillProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    timezone?: string | null
    totalXp?: number
    currentLevel?: number
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSkillProgressInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    bio?: string | null
    timezone?: string | null
    totalXp?: number
    currentLevel?: number
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSkillProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillProgressInput, UserUncheckedCreateWithoutSkillProgressInput>
  }

  export type SkillCreateWithoutUserProgressInput = {
    id?: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skillTree: SkillTreeCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutUserProgressInput = {
    id?: string
    skillTreeId: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutUserProgressInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserProgressInput, SkillUncheckedCreateWithoutUserProgressInput>
  }

  export type SkillTreeCreateWithoutUserProgressInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeUncheckedCreateWithoutUserProgressInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    shortDescription?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedHours?: number | null
    tags?: SkillTreeCreatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutSkillTreeInput
  }

  export type SkillTreeCreateOrConnectWithoutUserProgressInput = {
    where: SkillTreeWhereUniqueInput
    create: XOR<SkillTreeCreateWithoutUserProgressInput, SkillTreeUncheckedCreateWithoutUserProgressInput>
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
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSkillProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    totalXp?: IntFieldUpdateOperationsInput | number
    currentLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillTree?: SkillTreeUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutSkillTreeNestedInput
  }

  export type SkillTreeUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedHours?: NullableFloatFieldUpdateOperationsInput | number | null
    tags?: SkillTreeUpdatetagsInput | string[]
    layoutConfig?: JsonNullValueInput | InputJsonValue
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutSkillTreeNestedInput
  }

  export type UserSkillProgressCreateManyUserInput = {
    id?: string
    skillId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: SkillUpdateOneRequiredWithoutUserProgressNestedInput
    skillTree?: SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManySkillTreeInput = {
    id?: string
    name: string
    description?: string | null
    difficulty?: $Enums.DifficultyLevel
    estimatedMinutes?: number | null
    xpValue?: number
    dependencies?: SkillCreatedependenciesInput | string[]
    positionX?: number
    positionY?: number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    isMilestone?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressCreateManySkillTreeInput = {
    id?: string
    userId: string
    skillId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserSkillProgressUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserSkillProgressUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateManyWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    xpValue?: IntFieldUpdateOperationsInput | number
    dependencies?: SkillUpdatedependenciesInput | string[]
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    content?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isMilestone?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillProgressNestedInput
    skill?: SkillUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressUncheckedUpdateManyWithoutSkillTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillProgressCreateManySkillInput = {
    id?: string
    userId: string
    skillTreeId: string
    status?: $Enums.SkillProgressStatus
    progressPercent?: number
    timeSpentMinutes?: number
    completionScore?: number | null
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSkillProgressUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSkillProgressNestedInput
    skillTree?: SkillTreeUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserSkillProgressUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skillTreeId?: StringFieldUpdateOperationsInput | string
    status?: EnumSkillProgressStatusFieldUpdateOperationsInput | $Enums.SkillProgressStatus
    progressPercent?: FloatFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    completionScore?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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