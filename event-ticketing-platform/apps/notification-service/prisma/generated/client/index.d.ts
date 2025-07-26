
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
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationTemplate
 * 
 */
export type NotificationTemplate = $Result.DefaultSelection<Prisma.$NotificationTemplatePayload>
/**
 * Model NotificationQueue
 * 
 */
export type NotificationQueue = $Result.DefaultSelection<Prisma.$NotificationQueuePayload>
/**
 * Model NotificationEvent
 * 
 */
export type NotificationEvent = $Result.DefaultSelection<Prisma.$NotificationEventPayload>
/**
 * Model NotificationSettings
 * 
 */
export type NotificationSettings = $Result.DefaultSelection<Prisma.$NotificationSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  DELIVERED: 'DELIVERED',
  BOUNCED: 'BOUNCED',
  CLICKED: 'CLICKED',
  OPENED: 'OPENED'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const NotificationType: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH: 'PUSH',
  WEBHOOK: 'WEBHOOK'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationPriority: {
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type NotificationPriority = (typeof NotificationPriority)[keyof typeof NotificationPriority]


export const TemplateType: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  PUSH: 'PUSH'
};

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType]

}

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationPriority = $Enums.NotificationPriority

export const NotificationPriority: typeof $Enums.NotificationPriority

export type TemplateType = $Enums.TemplateType

export const TemplateType: typeof $Enums.TemplateType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notifications
 * const notifications = await prisma.notification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationTemplate`: Exposes CRUD operations for the **NotificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTemplates
    * const notificationTemplates = await prisma.notificationTemplate.findMany()
    * ```
    */
  get notificationTemplate(): Prisma.NotificationTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationQueue`: Exposes CRUD operations for the **NotificationQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationQueues
    * const notificationQueues = await prisma.notificationQueue.findMany()
    * ```
    */
  get notificationQueue(): Prisma.NotificationQueueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationEvent`: Exposes CRUD operations for the **NotificationEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationEvents
    * const notificationEvents = await prisma.notificationEvent.findMany()
    * ```
    */
  get notificationEvent(): Prisma.NotificationEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationSettings`: Exposes CRUD operations for the **NotificationSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSettings
    * const notificationSettings = await prisma.notificationSettings.findMany()
    * ```
    */
  get notificationSettings(): Prisma.NotificationSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Notification: 'Notification',
    NotificationTemplate: 'NotificationTemplate',
    NotificationQueue: 'NotificationQueue',
    NotificationEvent: 'NotificationEvent',
    NotificationSettings: 'NotificationSettings'
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
      modelProps: "notification" | "notificationTemplate" | "notificationQueue" | "notificationEvent" | "notificationSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationTemplate: {
        payload: Prisma.$NotificationTemplatePayload<ExtArgs>
        fields: Prisma.NotificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.NotificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findMany: {
            args: Prisma.NotificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          create: {
            args: Prisma.NotificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          createMany: {
            args: Prisma.NotificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          delete: {
            args: Prisma.NotificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          update: {
            args: Prisma.NotificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NotificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          upsert: {
            args: Prisma.NotificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.NotificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTemplate>
          }
          groupBy: {
            args: Prisma.NotificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      NotificationQueue: {
        payload: Prisma.$NotificationQueuePayload<ExtArgs>
        fields: Prisma.NotificationQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          findFirst: {
            args: Prisma.NotificationQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          findMany: {
            args: Prisma.NotificationQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>[]
          }
          create: {
            args: Prisma.NotificationQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          createMany: {
            args: Prisma.NotificationQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>[]
          }
          delete: {
            args: Prisma.NotificationQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          update: {
            args: Prisma.NotificationQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          deleteMany: {
            args: Prisma.NotificationQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>[]
          }
          upsert: {
            args: Prisma.NotificationQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationQueuePayload>
          }
          aggregate: {
            args: Prisma.NotificationQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationQueue>
          }
          groupBy: {
            args: Prisma.NotificationQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationQueueCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationQueueCountAggregateOutputType> | number
          }
        }
      }
      NotificationEvent: {
        payload: Prisma.$NotificationEventPayload<ExtArgs>
        fields: Prisma.NotificationEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findFirst: {
            args: Prisma.NotificationEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          findMany: {
            args: Prisma.NotificationEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          create: {
            args: Prisma.NotificationEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          createMany: {
            args: Prisma.NotificationEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          delete: {
            args: Prisma.NotificationEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          update: {
            args: Prisma.NotificationEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          deleteMany: {
            args: Prisma.NotificationEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>[]
          }
          upsert: {
            args: Prisma.NotificationEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationEventPayload>
          }
          aggregate: {
            args: Prisma.NotificationEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationEvent>
          }
          groupBy: {
            args: Prisma.NotificationEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationEventCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationEventCountAggregateOutputType> | number
          }
        }
      }
      NotificationSettings: {
        payload: Prisma.$NotificationSettingsPayload<ExtArgs>
        fields: Prisma.NotificationSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findFirst: {
            args: Prisma.NotificationSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          findMany: {
            args: Prisma.NotificationSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          create: {
            args: Prisma.NotificationSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          createMany: {
            args: Prisma.NotificationSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          delete: {
            args: Prisma.NotificationSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          update: {
            args: Prisma.NotificationSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSettingsPayload>
          }
          aggregate: {
            args: Prisma.NotificationSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSettings>
          }
          groupBy: {
            args: Prisma.NotificationSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSettingsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    notification?: NotificationOmit
    notificationTemplate?: NotificationTemplateOmit
    notificationQueue?: NotificationQueueOmit
    notificationEvent?: NotificationEventOmit
    notificationSettings?: NotificationSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    events: number
    queueItems: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | NotificationCountOutputTypeCountEventsArgs
    queueItems?: boolean | NotificationCountOutputTypeCountQueueItemsArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountQueueItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationQueueWhereInput
  }


  /**
   * Count Type NotificationTemplateCountOutputType
   */

  export type NotificationTemplateCountOutputType = {
    notifications: number
  }

  export type NotificationTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | NotificationTemplateCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * NotificationTemplateCountOutputType without action
   */
  export type NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplateCountOutputType
     */
    select?: NotificationTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationTemplateCountOutputType without action
   */
  export type NotificationTemplateCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    retryCount: number | null
    maxRetries: number | null
  }

  export type NotificationSumAggregateOutputType = {
    retryCount: number | null
    maxRetries: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    priority: $Enums.NotificationPriority | null
    recipient: string | null
    recipientName: string | null
    recipientId: string | null
    subject: string | null
    message: string | null
    templateId: string | null
    provider: string | null
    providerMessageId: string | null
    eventType: string | null
    orderId: string | null
    paymentId: string | null
    eventId: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    bouncedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
    maxRetries: number | null
    scheduledFor: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    priority: $Enums.NotificationPriority | null
    recipient: string | null
    recipientName: string | null
    recipientId: string | null
    subject: string | null
    message: string | null
    templateId: string | null
    provider: string | null
    providerMessageId: string | null
    eventType: string | null
    orderId: string | null
    paymentId: string | null
    eventId: string | null
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    bouncedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
    maxRetries: number | null
    scheduledFor: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    status: number
    priority: number
    recipient: number
    recipientName: number
    recipientId: number
    subject: number
    message: number
    templateId: number
    templateData: number
    provider: number
    providerMessageId: number
    providerResponse: number
    eventType: number
    orderId: number
    paymentId: number
    eventId: number
    metadata: number
    sentAt: number
    deliveredAt: number
    openedAt: number
    clickedAt: number
    bouncedAt: number
    failedAt: number
    errorMessage: number
    retryCount: number
    maxRetries: number
    scheduledFor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    retryCount?: true
    maxRetries?: true
  }

  export type NotificationSumAggregateInputType = {
    retryCount?: true
    maxRetries?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    recipient?: true
    recipientName?: true
    recipientId?: true
    subject?: true
    message?: true
    templateId?: true
    provider?: true
    providerMessageId?: true
    eventType?: true
    orderId?: true
    paymentId?: true
    eventId?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    clickedAt?: true
    bouncedAt?: true
    failedAt?: true
    errorMessage?: true
    retryCount?: true
    maxRetries?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    recipient?: true
    recipientName?: true
    recipientId?: true
    subject?: true
    message?: true
    templateId?: true
    provider?: true
    providerMessageId?: true
    eventType?: true
    orderId?: true
    paymentId?: true
    eventId?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    clickedAt?: true
    bouncedAt?: true
    failedAt?: true
    errorMessage?: true
    retryCount?: true
    maxRetries?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    recipient?: true
    recipientName?: true
    recipientId?: true
    subject?: true
    message?: true
    templateId?: true
    templateData?: true
    provider?: true
    providerMessageId?: true
    providerResponse?: true
    eventType?: true
    orderId?: true
    paymentId?: true
    eventId?: true
    metadata?: true
    sentAt?: true
    deliveredAt?: true
    openedAt?: true
    clickedAt?: true
    bouncedAt?: true
    failedAt?: true
    errorMessage?: true
    retryCount?: true
    maxRetries?: true
    scheduledFor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    status: $Enums.NotificationStatus
    priority: $Enums.NotificationPriority
    recipient: string
    recipientName: string | null
    recipientId: string | null
    subject: string | null
    message: string
    templateId: string | null
    templateData: JsonValue | null
    provider: string
    providerMessageId: string | null
    providerResponse: JsonValue | null
    eventType: string | null
    orderId: string | null
    paymentId: string | null
    eventId: string | null
    metadata: JsonValue | null
    sentAt: Date | null
    deliveredAt: Date | null
    openedAt: Date | null
    clickedAt: Date | null
    bouncedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    retryCount: number
    maxRetries: number
    scheduledFor: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    recipient?: boolean
    recipientName?: boolean
    recipientId?: boolean
    subject?: boolean
    message?: boolean
    templateId?: boolean
    templateData?: boolean
    provider?: boolean
    providerMessageId?: boolean
    providerResponse?: boolean
    eventType?: boolean
    orderId?: boolean
    paymentId?: boolean
    eventId?: boolean
    metadata?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    bouncedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | Notification$templateArgs<ExtArgs>
    events?: boolean | Notification$eventsArgs<ExtArgs>
    queueItems?: boolean | Notification$queueItemsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    recipient?: boolean
    recipientName?: boolean
    recipientId?: boolean
    subject?: boolean
    message?: boolean
    templateId?: boolean
    templateData?: boolean
    provider?: boolean
    providerMessageId?: boolean
    providerResponse?: boolean
    eventType?: boolean
    orderId?: boolean
    paymentId?: boolean
    eventId?: boolean
    metadata?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    bouncedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | Notification$templateArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    recipient?: boolean
    recipientName?: boolean
    recipientId?: boolean
    subject?: boolean
    message?: boolean
    templateId?: boolean
    templateData?: boolean
    provider?: boolean
    providerMessageId?: boolean
    providerResponse?: boolean
    eventType?: boolean
    orderId?: boolean
    paymentId?: boolean
    eventId?: boolean
    metadata?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    bouncedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    template?: boolean | Notification$templateArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    recipient?: boolean
    recipientName?: boolean
    recipientId?: boolean
    subject?: boolean
    message?: boolean
    templateId?: boolean
    templateData?: boolean
    provider?: boolean
    providerMessageId?: boolean
    providerResponse?: boolean
    eventType?: boolean
    orderId?: boolean
    paymentId?: boolean
    eventId?: boolean
    metadata?: boolean
    sentAt?: boolean
    deliveredAt?: boolean
    openedAt?: boolean
    clickedAt?: boolean
    bouncedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    maxRetries?: boolean
    scheduledFor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "priority" | "recipient" | "recipientName" | "recipientId" | "subject" | "message" | "templateId" | "templateData" | "provider" | "providerMessageId" | "providerResponse" | "eventType" | "orderId" | "paymentId" | "eventId" | "metadata" | "sentAt" | "deliveredAt" | "openedAt" | "clickedAt" | "bouncedAt" | "failedAt" | "errorMessage" | "retryCount" | "maxRetries" | "scheduledFor" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Notification$templateArgs<ExtArgs>
    events?: boolean | Notification$eventsArgs<ExtArgs>
    queueItems?: boolean | Notification$queueItemsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Notification$templateArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | Notification$templateArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      template: Prisma.$NotificationTemplatePayload<ExtArgs> | null
      events: Prisma.$NotificationEventPayload<ExtArgs>[]
      queueItems: Prisma.$NotificationQueuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      status: $Enums.NotificationStatus
      priority: $Enums.NotificationPriority
      recipient: string
      recipientName: string | null
      recipientId: string | null
      subject: string | null
      message: string
      templateId: string | null
      templateData: Prisma.JsonValue | null
      provider: string
      providerMessageId: string | null
      providerResponse: Prisma.JsonValue | null
      eventType: string | null
      orderId: string | null
      paymentId: string | null
      eventId: string | null
      metadata: Prisma.JsonValue | null
      sentAt: Date | null
      deliveredAt: Date | null
      openedAt: Date | null
      clickedAt: Date | null
      bouncedAt: Date | null
      failedAt: Date | null
      errorMessage: string | null
      retryCount: number
      maxRetries: number
      scheduledFor: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends Notification$templateArgs<ExtArgs> = {}>(args?: Subset<T, Notification$templateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends Notification$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queueItems<T extends Notification$queueItemsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$queueItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly priority: FieldRef<"Notification", 'NotificationPriority'>
    readonly recipient: FieldRef<"Notification", 'String'>
    readonly recipientName: FieldRef<"Notification", 'String'>
    readonly recipientId: FieldRef<"Notification", 'String'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly templateId: FieldRef<"Notification", 'String'>
    readonly templateData: FieldRef<"Notification", 'Json'>
    readonly provider: FieldRef<"Notification", 'String'>
    readonly providerMessageId: FieldRef<"Notification", 'String'>
    readonly providerResponse: FieldRef<"Notification", 'Json'>
    readonly eventType: FieldRef<"Notification", 'String'>
    readonly orderId: FieldRef<"Notification", 'String'>
    readonly paymentId: FieldRef<"Notification", 'String'>
    readonly eventId: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly deliveredAt: FieldRef<"Notification", 'DateTime'>
    readonly openedAt: FieldRef<"Notification", 'DateTime'>
    readonly clickedAt: FieldRef<"Notification", 'DateTime'>
    readonly bouncedAt: FieldRef<"Notification", 'DateTime'>
    readonly failedAt: FieldRef<"Notification", 'DateTime'>
    readonly errorMessage: FieldRef<"Notification", 'String'>
    readonly retryCount: FieldRef<"Notification", 'Int'>
    readonly maxRetries: FieldRef<"Notification", 'Int'>
    readonly scheduledFor: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.template
   */
  export type Notification$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    where?: NotificationTemplateWhereInput
  }

  /**
   * Notification.events
   */
  export type Notification$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    cursor?: NotificationEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * Notification.queueItems
   */
  export type Notification$queueItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    where?: NotificationQueueWhereInput
    orderBy?: NotificationQueueOrderByWithRelationInput | NotificationQueueOrderByWithRelationInput[]
    cursor?: NotificationQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationQueueScalarFieldEnum | NotificationQueueScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationTemplate
   */

  export type AggregateNotificationTemplate = {
    _count: NotificationTemplateCountAggregateOutputType | null
    _avg: NotificationTemplateAvgAggregateOutputType | null
    _sum: NotificationTemplateSumAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  export type NotificationTemplateAvgAggregateOutputType = {
    brevoTemplateId: number | null
    version: number | null
  }

  export type NotificationTemplateSumAggregateOutputType = {
    brevoTemplateId: number | null
    version: number | null
  }

  export type NotificationTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TemplateType | null
    description: string | null
    subject: string | null
    htmlContent: string | null
    textContent: string | null
    brevoTemplateId: number | null
    isActive: boolean | null
    createdBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TemplateType | null
    description: string | null
    subject: string | null
    htmlContent: string | null
    textContent: string | null
    brevoTemplateId: number | null
    isActive: boolean | null
    createdBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationTemplateCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    subject: number
    htmlContent: number
    textContent: number
    variables: number
    brevoTemplateId: number
    isActive: number
    createdBy: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationTemplateAvgAggregateInputType = {
    brevoTemplateId?: true
    version?: true
  }

  export type NotificationTemplateSumAggregateInputType = {
    brevoTemplateId?: true
    version?: true
  }

  export type NotificationTemplateMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    subject?: true
    htmlContent?: true
    textContent?: true
    brevoTemplateId?: true
    isActive?: true
    createdBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    subject?: true
    htmlContent?: true
    textContent?: true
    brevoTemplateId?: true
    isActive?: true
    createdBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationTemplateCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    subject?: true
    htmlContent?: true
    textContent?: true
    variables?: true
    brevoTemplateId?: true
    isActive?: true
    createdBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplate to aggregate.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTemplates
    **/
    _count?: true | NotificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type GetNotificationTemplateAggregateType<T extends NotificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTemplate[P]>
      : GetScalarType<T[P], AggregateNotificationTemplate[P]>
  }




  export type NotificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTemplateWhereInput
    orderBy?: NotificationTemplateOrderByWithAggregationInput | NotificationTemplateOrderByWithAggregationInput[]
    by: NotificationTemplateScalarFieldEnum[] | NotificationTemplateScalarFieldEnum
    having?: NotificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTemplateCountAggregateInputType | true
    _avg?: NotificationTemplateAvgAggregateInputType
    _sum?: NotificationTemplateSumAggregateInputType
    _min?: NotificationTemplateMinAggregateInputType
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type NotificationTemplateGroupByOutputType = {
    id: string
    name: string
    type: $Enums.TemplateType
    description: string | null
    subject: string | null
    htmlContent: string | null
    textContent: string
    variables: JsonValue | null
    brevoTemplateId: number | null
    isActive: boolean
    createdBy: string | null
    version: number
    createdAt: Date
    updatedAt: Date
    _count: NotificationTemplateCountAggregateOutputType | null
    _avg: NotificationTemplateAvgAggregateOutputType | null
    _sum: NotificationTemplateSumAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  type GetNotificationTemplateGroupByPayload<T extends NotificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    subject?: boolean
    htmlContent?: boolean
    textContent?: boolean
    variables?: boolean
    brevoTemplateId?: boolean
    isActive?: boolean
    createdBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | NotificationTemplate$notificationsArgs<ExtArgs>
    _count?: boolean | NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    subject?: boolean
    htmlContent?: boolean
    textContent?: boolean
    variables?: boolean
    brevoTemplateId?: boolean
    isActive?: boolean
    createdBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    subject?: boolean
    htmlContent?: boolean
    textContent?: boolean
    variables?: boolean
    brevoTemplateId?: boolean
    isActive?: boolean
    createdBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>

  export type NotificationTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    subject?: boolean
    htmlContent?: boolean
    textContent?: boolean
    variables?: boolean
    brevoTemplateId?: boolean
    isActive?: boolean
    createdBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "description" | "subject" | "htmlContent" | "textContent" | "variables" | "brevoTemplateId" | "isActive" | "createdBy" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationTemplate"]>
  export type NotificationTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | NotificationTemplate$notificationsArgs<ExtArgs>
    _count?: boolean | NotificationTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NotificationTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NotificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTemplate"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.TemplateType
      description: string | null
      subject: string | null
      htmlContent: string | null
      textContent: string
      variables: Prisma.JsonValue | null
      brevoTemplateId: number | null
      isActive: boolean
      createdBy: string | null
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationTemplate"]>
    composites: {}
  }

  type NotificationTemplateGetPayload<S extends boolean | null | undefined | NotificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$NotificationTemplatePayload, S>

  type NotificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationTemplateCountAggregateInputType | true
    }

  export interface NotificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTemplate'], meta: { name: 'NotificationTemplate' } }
    /**
     * Find zero or one NotificationTemplate that matches the filter.
     * @param {NotificationTemplateFindUniqueArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTemplateFindUniqueArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTemplateFindFirstArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany()
     * 
     * // Get first 10 NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTemplateFindManyArgs>(args?: SelectSubset<T, NotificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationTemplate.
     * @param {NotificationTemplateCreateArgs} args - Arguments to create a NotificationTemplate.
     * @example
     * // Create one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.create({
     *   data: {
     *     // ... data to create a NotificationTemplate
     *   }
     * })
     * 
     */
    create<T extends NotificationTemplateCreateArgs>(args: SelectSubset<T, NotificationTemplateCreateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationTemplates.
     * @param {NotificationTemplateCreateManyArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTemplateCreateManyArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationTemplates and returns the data saved in the database.
     * @param {NotificationTemplateCreateManyAndReturnArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationTemplates and only return the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationTemplate.
     * @param {NotificationTemplateDeleteArgs} args - Arguments to delete one NotificationTemplate.
     * @example
     * // Delete one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one NotificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends NotificationTemplateDeleteArgs>(args: SelectSubset<T, NotificationTemplateDeleteArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationTemplate.
     * @param {NotificationTemplateUpdateArgs} args - Arguments to update one NotificationTemplate.
     * @example
     * // Update one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTemplateUpdateArgs>(args: SelectSubset<T, NotificationTemplateUpdateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationTemplates.
     * @param {NotificationTemplateDeleteManyArgs} args - Arguments to filter NotificationTemplates to delete.
     * @example
     * // Delete a few NotificationTemplates
     * const { count } = await prisma.notificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTemplateDeleteManyArgs>(args?: SelectSubset<T, NotificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTemplateUpdateManyArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates and returns the data updated in the database.
     * @param {NotificationTemplateUpdateManyAndReturnArgs} args - Arguments to update many NotificationTemplates.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationTemplates and only return the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationTemplate.
     * @param {NotificationTemplateUpsertArgs} args - Arguments to update or create a NotificationTemplate.
     * @example
     * // Update or create a NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.upsert({
     *   create: {
     *     // ... data to create a NotificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTemplateUpsertArgs>(args: SelectSubset<T, NotificationTemplateUpsertArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateCountArgs} args - Arguments to filter NotificationTemplates to count.
     * @example
     * // Count the number of NotificationTemplates
     * const count = await prisma.notificationTemplate.count({
     *   where: {
     *     // ... the filter for the NotificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends NotificationTemplateCountArgs>(
      args?: Subset<T, NotificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTemplateAggregateArgs>(args: Subset<T, NotificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetNotificationTemplateAggregateType<T>>

    /**
     * Group by NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateGroupByArgs} args - Group by arguments.
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
      T extends NotificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTemplate model
   */
  readonly fields: NotificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends NotificationTemplate$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, NotificationTemplate$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NotificationTemplate model
   */
  interface NotificationTemplateFieldRefs {
    readonly id: FieldRef<"NotificationTemplate", 'String'>
    readonly name: FieldRef<"NotificationTemplate", 'String'>
    readonly type: FieldRef<"NotificationTemplate", 'TemplateType'>
    readonly description: FieldRef<"NotificationTemplate", 'String'>
    readonly subject: FieldRef<"NotificationTemplate", 'String'>
    readonly htmlContent: FieldRef<"NotificationTemplate", 'String'>
    readonly textContent: FieldRef<"NotificationTemplate", 'String'>
    readonly variables: FieldRef<"NotificationTemplate", 'Json'>
    readonly brevoTemplateId: FieldRef<"NotificationTemplate", 'Int'>
    readonly isActive: FieldRef<"NotificationTemplate", 'Boolean'>
    readonly createdBy: FieldRef<"NotificationTemplate", 'String'>
    readonly version: FieldRef<"NotificationTemplate", 'Int'>
    readonly createdAt: FieldRef<"NotificationTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTemplate findUnique
   */
  export type NotificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findUniqueOrThrow
   */
  export type NotificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findFirst
   */
  export type NotificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findFirstOrThrow
   */
  export type NotificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findMany
   */
  export type NotificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NotificationTemplates to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate create
   */
  export type NotificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationTemplate.
     */
    data: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
  }

  /**
   * NotificationTemplate createMany
   */
  export type NotificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate createManyAndReturn
   */
  export type NotificationTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationTemplate update
   */
  export type NotificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationTemplate.
     */
    data: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which NotificationTemplate to update.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate updateMany
   */
  export type NotificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
    /**
     * Limit how many NotificationTemplates to update.
     */
    limit?: number
  }

  /**
   * NotificationTemplate updateManyAndReturn
   */
  export type NotificationTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
    /**
     * Limit how many NotificationTemplates to update.
     */
    limit?: number
  }

  /**
   * NotificationTemplate upsert
   */
  export type NotificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationTemplate to update in case it exists.
     */
    where: NotificationTemplateWhereUniqueInput
    /**
     * In case the NotificationTemplate found by the `where` argument doesn't exist, create a new NotificationTemplate with this data.
     */
    create: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
    /**
     * In case the NotificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
  }

  /**
   * NotificationTemplate delete
   */
  export type NotificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
    /**
     * Filter which NotificationTemplate to delete.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate deleteMany
   */
  export type NotificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplates to delete
     */
    where?: NotificationTemplateWhereInput
    /**
     * Limit how many NotificationTemplates to delete.
     */
    limit?: number
  }

  /**
   * NotificationTemplate.notifications
   */
  export type NotificationTemplate$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * NotificationTemplate without action
   */
  export type NotificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationTemplateInclude<ExtArgs> | null
  }


  /**
   * Model NotificationQueue
   */

  export type AggregateNotificationQueue = {
    _count: NotificationQueueCountAggregateOutputType | null
    _avg: NotificationQueueAvgAggregateOutputType | null
    _sum: NotificationQueueSumAggregateOutputType | null
    _min: NotificationQueueMinAggregateOutputType | null
    _max: NotificationQueueMaxAggregateOutputType | null
  }

  export type NotificationQueueAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type NotificationQueueSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type NotificationQueueMinAggregateOutputType = {
    id: string | null
    queueName: string | null
    notificationId: string | null
    priority: $Enums.NotificationPriority | null
    attempts: number | null
    maxAttempts: number | null
    status: string | null
    processingStartedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    nextRetryAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationQueueMaxAggregateOutputType = {
    id: string | null
    queueName: string | null
    notificationId: string | null
    priority: $Enums.NotificationPriority | null
    attempts: number | null
    maxAttempts: number | null
    status: string | null
    processingStartedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    nextRetryAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationQueueCountAggregateOutputType = {
    id: number
    queueName: number
    notificationId: number
    priority: number
    attempts: number
    maxAttempts: number
    status: number
    processingStartedAt: number
    completedAt: number
    failedAt: number
    errorMessage: number
    nextRetryAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationQueueAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type NotificationQueueSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type NotificationQueueMinAggregateInputType = {
    id?: true
    queueName?: true
    notificationId?: true
    priority?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    processingStartedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationQueueMaxAggregateInputType = {
    id?: true
    queueName?: true
    notificationId?: true
    priority?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    processingStartedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationQueueCountAggregateInputType = {
    id?: true
    queueName?: true
    notificationId?: true
    priority?: true
    attempts?: true
    maxAttempts?: true
    status?: true
    processingStartedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationQueue to aggregate.
     */
    where?: NotificationQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationQueues to fetch.
     */
    orderBy?: NotificationQueueOrderByWithRelationInput | NotificationQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationQueues
    **/
    _count?: true | NotificationQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationQueueMaxAggregateInputType
  }

  export type GetNotificationQueueAggregateType<T extends NotificationQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationQueue[P]>
      : GetScalarType<T[P], AggregateNotificationQueue[P]>
  }




  export type NotificationQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationQueueWhereInput
    orderBy?: NotificationQueueOrderByWithAggregationInput | NotificationQueueOrderByWithAggregationInput[]
    by: NotificationQueueScalarFieldEnum[] | NotificationQueueScalarFieldEnum
    having?: NotificationQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationQueueCountAggregateInputType | true
    _avg?: NotificationQueueAvgAggregateInputType
    _sum?: NotificationQueueSumAggregateInputType
    _min?: NotificationQueueMinAggregateInputType
    _max?: NotificationQueueMaxAggregateInputType
  }

  export type NotificationQueueGroupByOutputType = {
    id: string
    queueName: string
    notificationId: string
    priority: $Enums.NotificationPriority
    attempts: number
    maxAttempts: number
    status: string
    processingStartedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    nextRetryAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationQueueCountAggregateOutputType | null
    _avg: NotificationQueueAvgAggregateOutputType | null
    _sum: NotificationQueueSumAggregateOutputType | null
    _min: NotificationQueueMinAggregateOutputType | null
    _max: NotificationQueueMaxAggregateOutputType | null
  }

  type GetNotificationQueueGroupByPayload<T extends NotificationQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationQueueGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationQueueGroupByOutputType[P]>
        }
      >
    >


  export type NotificationQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueName?: boolean
    notificationId?: boolean
    priority?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    processingStartedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationQueue"]>

  export type NotificationQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueName?: boolean
    notificationId?: boolean
    priority?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    processingStartedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationQueue"]>

  export type NotificationQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queueName?: boolean
    notificationId?: boolean
    priority?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    processingStartedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationQueue"]>

  export type NotificationQueueSelectScalar = {
    id?: boolean
    queueName?: boolean
    notificationId?: boolean
    priority?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    status?: boolean
    processingStartedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queueName" | "notificationId" | "priority" | "attempts" | "maxAttempts" | "status" | "processingStartedAt" | "completedAt" | "failedAt" | "errorMessage" | "nextRetryAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationQueue"]>
  export type NotificationQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }

  export type $NotificationQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationQueue"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queueName: string
      notificationId: string
      priority: $Enums.NotificationPriority
      attempts: number
      maxAttempts: number
      status: string
      processingStartedAt: Date | null
      completedAt: Date | null
      failedAt: Date | null
      errorMessage: string | null
      nextRetryAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationQueue"]>
    composites: {}
  }

  type NotificationQueueGetPayload<S extends boolean | null | undefined | NotificationQueueDefaultArgs> = $Result.GetResult<Prisma.$NotificationQueuePayload, S>

  type NotificationQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationQueueCountAggregateInputType | true
    }

  export interface NotificationQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationQueue'], meta: { name: 'NotificationQueue' } }
    /**
     * Find zero or one NotificationQueue that matches the filter.
     * @param {NotificationQueueFindUniqueArgs} args - Arguments to find a NotificationQueue
     * @example
     * // Get one NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationQueueFindUniqueArgs>(args: SelectSubset<T, NotificationQueueFindUniqueArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationQueueFindUniqueOrThrowArgs} args - Arguments to find a NotificationQueue
     * @example
     * // Get one NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueFindFirstArgs} args - Arguments to find a NotificationQueue
     * @example
     * // Get one NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationQueueFindFirstArgs>(args?: SelectSubset<T, NotificationQueueFindFirstArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueFindFirstOrThrowArgs} args - Arguments to find a NotificationQueue
     * @example
     * // Get one NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationQueues
     * const notificationQueues = await prisma.notificationQueue.findMany()
     * 
     * // Get first 10 NotificationQueues
     * const notificationQueues = await prisma.notificationQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationQueueWithIdOnly = await prisma.notificationQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationQueueFindManyArgs>(args?: SelectSubset<T, NotificationQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationQueue.
     * @param {NotificationQueueCreateArgs} args - Arguments to create a NotificationQueue.
     * @example
     * // Create one NotificationQueue
     * const NotificationQueue = await prisma.notificationQueue.create({
     *   data: {
     *     // ... data to create a NotificationQueue
     *   }
     * })
     * 
     */
    create<T extends NotificationQueueCreateArgs>(args: SelectSubset<T, NotificationQueueCreateArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationQueues.
     * @param {NotificationQueueCreateManyArgs} args - Arguments to create many NotificationQueues.
     * @example
     * // Create many NotificationQueues
     * const notificationQueue = await prisma.notificationQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationQueueCreateManyArgs>(args?: SelectSubset<T, NotificationQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationQueues and returns the data saved in the database.
     * @param {NotificationQueueCreateManyAndReturnArgs} args - Arguments to create many NotificationQueues.
     * @example
     * // Create many NotificationQueues
     * const notificationQueue = await prisma.notificationQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationQueues and only return the `id`
     * const notificationQueueWithIdOnly = await prisma.notificationQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationQueue.
     * @param {NotificationQueueDeleteArgs} args - Arguments to delete one NotificationQueue.
     * @example
     * // Delete one NotificationQueue
     * const NotificationQueue = await prisma.notificationQueue.delete({
     *   where: {
     *     // ... filter to delete one NotificationQueue
     *   }
     * })
     * 
     */
    delete<T extends NotificationQueueDeleteArgs>(args: SelectSubset<T, NotificationQueueDeleteArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationQueue.
     * @param {NotificationQueueUpdateArgs} args - Arguments to update one NotificationQueue.
     * @example
     * // Update one NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationQueueUpdateArgs>(args: SelectSubset<T, NotificationQueueUpdateArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationQueues.
     * @param {NotificationQueueDeleteManyArgs} args - Arguments to filter NotificationQueues to delete.
     * @example
     * // Delete a few NotificationQueues
     * const { count } = await prisma.notificationQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationQueueDeleteManyArgs>(args?: SelectSubset<T, NotificationQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationQueues
     * const notificationQueue = await prisma.notificationQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationQueueUpdateManyArgs>(args: SelectSubset<T, NotificationQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationQueues and returns the data updated in the database.
     * @param {NotificationQueueUpdateManyAndReturnArgs} args - Arguments to update many NotificationQueues.
     * @example
     * // Update many NotificationQueues
     * const notificationQueue = await prisma.notificationQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationQueues and only return the `id`
     * const notificationQueueWithIdOnly = await prisma.notificationQueue.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationQueue.
     * @param {NotificationQueueUpsertArgs} args - Arguments to update or create a NotificationQueue.
     * @example
     * // Update or create a NotificationQueue
     * const notificationQueue = await prisma.notificationQueue.upsert({
     *   create: {
     *     // ... data to create a NotificationQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationQueue we want to update
     *   }
     * })
     */
    upsert<T extends NotificationQueueUpsertArgs>(args: SelectSubset<T, NotificationQueueUpsertArgs<ExtArgs>>): Prisma__NotificationQueueClient<$Result.GetResult<Prisma.$NotificationQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueCountArgs} args - Arguments to filter NotificationQueues to count.
     * @example
     * // Count the number of NotificationQueues
     * const count = await prisma.notificationQueue.count({
     *   where: {
     *     // ... the filter for the NotificationQueues we want to count
     *   }
     * })
    **/
    count<T extends NotificationQueueCountArgs>(
      args?: Subset<T, NotificationQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationQueueAggregateArgs>(args: Subset<T, NotificationQueueAggregateArgs>): Prisma.PrismaPromise<GetNotificationQueueAggregateType<T>>

    /**
     * Group by NotificationQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationQueueGroupByArgs} args - Group by arguments.
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
      T extends NotificationQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationQueueGroupByArgs['orderBy'] }
        : { orderBy?: NotificationQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationQueue model
   */
  readonly fields: NotificationQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationQueue model
   */
  interface NotificationQueueFieldRefs {
    readonly id: FieldRef<"NotificationQueue", 'String'>
    readonly queueName: FieldRef<"NotificationQueue", 'String'>
    readonly notificationId: FieldRef<"NotificationQueue", 'String'>
    readonly priority: FieldRef<"NotificationQueue", 'NotificationPriority'>
    readonly attempts: FieldRef<"NotificationQueue", 'Int'>
    readonly maxAttempts: FieldRef<"NotificationQueue", 'Int'>
    readonly status: FieldRef<"NotificationQueue", 'String'>
    readonly processingStartedAt: FieldRef<"NotificationQueue", 'DateTime'>
    readonly completedAt: FieldRef<"NotificationQueue", 'DateTime'>
    readonly failedAt: FieldRef<"NotificationQueue", 'DateTime'>
    readonly errorMessage: FieldRef<"NotificationQueue", 'String'>
    readonly nextRetryAt: FieldRef<"NotificationQueue", 'DateTime'>
    readonly createdAt: FieldRef<"NotificationQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationQueue findUnique
   */
  export type NotificationQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter, which NotificationQueue to fetch.
     */
    where: NotificationQueueWhereUniqueInput
  }

  /**
   * NotificationQueue findUniqueOrThrow
   */
  export type NotificationQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter, which NotificationQueue to fetch.
     */
    where: NotificationQueueWhereUniqueInput
  }

  /**
   * NotificationQueue findFirst
   */
  export type NotificationQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter, which NotificationQueue to fetch.
     */
    where?: NotificationQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationQueues to fetch.
     */
    orderBy?: NotificationQueueOrderByWithRelationInput | NotificationQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationQueues.
     */
    cursor?: NotificationQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationQueues.
     */
    distinct?: NotificationQueueScalarFieldEnum | NotificationQueueScalarFieldEnum[]
  }

  /**
   * NotificationQueue findFirstOrThrow
   */
  export type NotificationQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter, which NotificationQueue to fetch.
     */
    where?: NotificationQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationQueues to fetch.
     */
    orderBy?: NotificationQueueOrderByWithRelationInput | NotificationQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationQueues.
     */
    cursor?: NotificationQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationQueues.
     */
    distinct?: NotificationQueueScalarFieldEnum | NotificationQueueScalarFieldEnum[]
  }

  /**
   * NotificationQueue findMany
   */
  export type NotificationQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter, which NotificationQueues to fetch.
     */
    where?: NotificationQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationQueues to fetch.
     */
    orderBy?: NotificationQueueOrderByWithRelationInput | NotificationQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationQueues.
     */
    cursor?: NotificationQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationQueues.
     */
    skip?: number
    distinct?: NotificationQueueScalarFieldEnum | NotificationQueueScalarFieldEnum[]
  }

  /**
   * NotificationQueue create
   */
  export type NotificationQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationQueue.
     */
    data: XOR<NotificationQueueCreateInput, NotificationQueueUncheckedCreateInput>
  }

  /**
   * NotificationQueue createMany
   */
  export type NotificationQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationQueues.
     */
    data: NotificationQueueCreateManyInput | NotificationQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationQueue createManyAndReturn
   */
  export type NotificationQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationQueues.
     */
    data: NotificationQueueCreateManyInput | NotificationQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationQueue update
   */
  export type NotificationQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationQueue.
     */
    data: XOR<NotificationQueueUpdateInput, NotificationQueueUncheckedUpdateInput>
    /**
     * Choose, which NotificationQueue to update.
     */
    where: NotificationQueueWhereUniqueInput
  }

  /**
   * NotificationQueue updateMany
   */
  export type NotificationQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationQueues.
     */
    data: XOR<NotificationQueueUpdateManyMutationInput, NotificationQueueUncheckedUpdateManyInput>
    /**
     * Filter which NotificationQueues to update
     */
    where?: NotificationQueueWhereInput
    /**
     * Limit how many NotificationQueues to update.
     */
    limit?: number
  }

  /**
   * NotificationQueue updateManyAndReturn
   */
  export type NotificationQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * The data used to update NotificationQueues.
     */
    data: XOR<NotificationQueueUpdateManyMutationInput, NotificationQueueUncheckedUpdateManyInput>
    /**
     * Filter which NotificationQueues to update
     */
    where?: NotificationQueueWhereInput
    /**
     * Limit how many NotificationQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationQueue upsert
   */
  export type NotificationQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationQueue to update in case it exists.
     */
    where: NotificationQueueWhereUniqueInput
    /**
     * In case the NotificationQueue found by the `where` argument doesn't exist, create a new NotificationQueue with this data.
     */
    create: XOR<NotificationQueueCreateInput, NotificationQueueUncheckedCreateInput>
    /**
     * In case the NotificationQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationQueueUpdateInput, NotificationQueueUncheckedUpdateInput>
  }

  /**
   * NotificationQueue delete
   */
  export type NotificationQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
    /**
     * Filter which NotificationQueue to delete.
     */
    where: NotificationQueueWhereUniqueInput
  }

  /**
   * NotificationQueue deleteMany
   */
  export type NotificationQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationQueues to delete
     */
    where?: NotificationQueueWhereInput
    /**
     * Limit how many NotificationQueues to delete.
     */
    limit?: number
  }

  /**
   * NotificationQueue without action
   */
  export type NotificationQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationQueue
     */
    select?: NotificationQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationQueue
     */
    omit?: NotificationQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationQueueInclude<ExtArgs> | null
  }


  /**
   * Model NotificationEvent
   */

  export type AggregateNotificationEvent = {
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  export type NotificationEventMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    eventType: string | null
    providerEventId: string | null
    createdAt: Date | null
  }

  export type NotificationEventMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    eventType: string | null
    providerEventId: string | null
    createdAt: Date | null
  }

  export type NotificationEventCountAggregateOutputType = {
    id: number
    notificationId: number
    eventType: number
    eventData: number
    providerEventId: number
    createdAt: number
    _all: number
  }


  export type NotificationEventMinAggregateInputType = {
    id?: true
    notificationId?: true
    eventType?: true
    providerEventId?: true
    createdAt?: true
  }

  export type NotificationEventMaxAggregateInputType = {
    id?: true
    notificationId?: true
    eventType?: true
    providerEventId?: true
    createdAt?: true
  }

  export type NotificationEventCountAggregateInputType = {
    id?: true
    notificationId?: true
    eventType?: true
    eventData?: true
    providerEventId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvent to aggregate.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationEvents
    **/
    _count?: true | NotificationEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationEventMaxAggregateInputType
  }

  export type GetNotificationEventAggregateType<T extends NotificationEventAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationEvent[P]>
      : GetScalarType<T[P], AggregateNotificationEvent[P]>
  }




  export type NotificationEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationEventWhereInput
    orderBy?: NotificationEventOrderByWithAggregationInput | NotificationEventOrderByWithAggregationInput[]
    by: NotificationEventScalarFieldEnum[] | NotificationEventScalarFieldEnum
    having?: NotificationEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationEventCountAggregateInputType | true
    _min?: NotificationEventMinAggregateInputType
    _max?: NotificationEventMaxAggregateInputType
  }

  export type NotificationEventGroupByOutputType = {
    id: string
    notificationId: string
    eventType: string
    eventData: JsonValue | null
    providerEventId: string | null
    createdAt: Date
    _count: NotificationEventCountAggregateOutputType | null
    _min: NotificationEventMinAggregateOutputType | null
    _max: NotificationEventMaxAggregateOutputType | null
  }

  type GetNotificationEventGroupByPayload<T extends NotificationEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationEventGroupByOutputType[P]>
        }
      >
    >


  export type NotificationEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    eventType?: boolean
    eventData?: boolean
    providerEventId?: boolean
    createdAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    eventType?: boolean
    eventData?: boolean
    providerEventId?: boolean
    createdAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    eventType?: boolean
    eventData?: boolean
    providerEventId?: boolean
    createdAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationEvent"]>

  export type NotificationEventSelectScalar = {
    id?: boolean
    notificationId?: boolean
    eventType?: boolean
    eventData?: boolean
    providerEventId?: boolean
    createdAt?: boolean
  }

  export type NotificationEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "eventType" | "eventData" | "providerEventId" | "createdAt", ExtArgs["result"]["notificationEvent"]>
  export type NotificationEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }
  export type NotificationEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }

  export type $NotificationEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationEvent"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      eventType: string
      eventData: Prisma.JsonValue | null
      providerEventId: string | null
      createdAt: Date
    }, ExtArgs["result"]["notificationEvent"]>
    composites: {}
  }

  type NotificationEventGetPayload<S extends boolean | null | undefined | NotificationEventDefaultArgs> = $Result.GetResult<Prisma.$NotificationEventPayload, S>

  type NotificationEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationEventCountAggregateInputType | true
    }

  export interface NotificationEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationEvent'], meta: { name: 'NotificationEvent' } }
    /**
     * Find zero or one NotificationEvent that matches the filter.
     * @param {NotificationEventFindUniqueArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationEventFindUniqueArgs>(args: SelectSubset<T, NotificationEventFindUniqueArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationEventFindUniqueOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationEventFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationEventFindFirstArgs>(args?: SelectSubset<T, NotificationEventFindFirstArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindFirstOrThrowArgs} args - Arguments to find a NotificationEvent
     * @example
     * // Get one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationEventFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany()
     * 
     * // Get first 10 NotificationEvents
     * const notificationEvents = await prisma.notificationEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationEventFindManyArgs>(args?: SelectSubset<T, NotificationEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationEvent.
     * @param {NotificationEventCreateArgs} args - Arguments to create a NotificationEvent.
     * @example
     * // Create one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.create({
     *   data: {
     *     // ... data to create a NotificationEvent
     *   }
     * })
     * 
     */
    create<T extends NotificationEventCreateArgs>(args: SelectSubset<T, NotificationEventCreateArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationEvents.
     * @param {NotificationEventCreateManyArgs} args - Arguments to create many NotificationEvents.
     * @example
     * // Create many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationEventCreateManyArgs>(args?: SelectSubset<T, NotificationEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationEvents and returns the data saved in the database.
     * @param {NotificationEventCreateManyAndReturnArgs} args - Arguments to create many NotificationEvents.
     * @example
     * // Create many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationEvents and only return the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationEventCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationEvent.
     * @param {NotificationEventDeleteArgs} args - Arguments to delete one NotificationEvent.
     * @example
     * // Delete one NotificationEvent
     * const NotificationEvent = await prisma.notificationEvent.delete({
     *   where: {
     *     // ... filter to delete one NotificationEvent
     *   }
     * })
     * 
     */
    delete<T extends NotificationEventDeleteArgs>(args: SelectSubset<T, NotificationEventDeleteArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationEvent.
     * @param {NotificationEventUpdateArgs} args - Arguments to update one NotificationEvent.
     * @example
     * // Update one NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationEventUpdateArgs>(args: SelectSubset<T, NotificationEventUpdateArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationEvents.
     * @param {NotificationEventDeleteManyArgs} args - Arguments to filter NotificationEvents to delete.
     * @example
     * // Delete a few NotificationEvents
     * const { count } = await prisma.notificationEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationEventDeleteManyArgs>(args?: SelectSubset<T, NotificationEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationEventUpdateManyArgs>(args: SelectSubset<T, NotificationEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationEvents and returns the data updated in the database.
     * @param {NotificationEventUpdateManyAndReturnArgs} args - Arguments to update many NotificationEvents.
     * @example
     * // Update many NotificationEvents
     * const notificationEvent = await prisma.notificationEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationEvents and only return the `id`
     * const notificationEventWithIdOnly = await prisma.notificationEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationEventUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationEvent.
     * @param {NotificationEventUpsertArgs} args - Arguments to update or create a NotificationEvent.
     * @example
     * // Update or create a NotificationEvent
     * const notificationEvent = await prisma.notificationEvent.upsert({
     *   create: {
     *     // ... data to create a NotificationEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationEvent we want to update
     *   }
     * })
     */
    upsert<T extends NotificationEventUpsertArgs>(args: SelectSubset<T, NotificationEventUpsertArgs<ExtArgs>>): Prisma__NotificationEventClient<$Result.GetResult<Prisma.$NotificationEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventCountArgs} args - Arguments to filter NotificationEvents to count.
     * @example
     * // Count the number of NotificationEvents
     * const count = await prisma.notificationEvent.count({
     *   where: {
     *     // ... the filter for the NotificationEvents we want to count
     *   }
     * })
    **/
    count<T extends NotificationEventCountArgs>(
      args?: Subset<T, NotificationEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationEventAggregateArgs>(args: Subset<T, NotificationEventAggregateArgs>): Prisma.PrismaPromise<GetNotificationEventAggregateType<T>>

    /**
     * Group by NotificationEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationEventGroupByArgs} args - Group by arguments.
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
      T extends NotificationEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationEventGroupByArgs['orderBy'] }
        : { orderBy?: NotificationEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationEvent model
   */
  readonly fields: NotificationEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationEvent model
   */
  interface NotificationEventFieldRefs {
    readonly id: FieldRef<"NotificationEvent", 'String'>
    readonly notificationId: FieldRef<"NotificationEvent", 'String'>
    readonly eventType: FieldRef<"NotificationEvent", 'String'>
    readonly eventData: FieldRef<"NotificationEvent", 'Json'>
    readonly providerEventId: FieldRef<"NotificationEvent", 'String'>
    readonly createdAt: FieldRef<"NotificationEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationEvent findUnique
   */
  export type NotificationEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent findUniqueOrThrow
   */
  export type NotificationEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent findFirst
   */
  export type NotificationEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent findFirstOrThrow
   */
  export type NotificationEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvent to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationEvents.
     */
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent findMany
   */
  export type NotificationEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter, which NotificationEvents to fetch.
     */
    where?: NotificationEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationEvents to fetch.
     */
    orderBy?: NotificationEventOrderByWithRelationInput | NotificationEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationEvents.
     */
    cursor?: NotificationEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationEvents.
     */
    skip?: number
    distinct?: NotificationEventScalarFieldEnum | NotificationEventScalarFieldEnum[]
  }

  /**
   * NotificationEvent create
   */
  export type NotificationEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationEvent.
     */
    data: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
  }

  /**
   * NotificationEvent createMany
   */
  export type NotificationEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationEvents.
     */
    data: NotificationEventCreateManyInput | NotificationEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationEvent createManyAndReturn
   */
  export type NotificationEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationEvents.
     */
    data: NotificationEventCreateManyInput | NotificationEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEvent update
   */
  export type NotificationEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationEvent.
     */
    data: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
    /**
     * Choose, which NotificationEvent to update.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent updateMany
   */
  export type NotificationEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationEvents.
     */
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEvents to update
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to update.
     */
    limit?: number
  }

  /**
   * NotificationEvent updateManyAndReturn
   */
  export type NotificationEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * The data used to update NotificationEvents.
     */
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyInput>
    /**
     * Filter which NotificationEvents to update
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationEvent upsert
   */
  export type NotificationEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationEvent to update in case it exists.
     */
    where: NotificationEventWhereUniqueInput
    /**
     * In case the NotificationEvent found by the `where` argument doesn't exist, create a new NotificationEvent with this data.
     */
    create: XOR<NotificationEventCreateInput, NotificationEventUncheckedCreateInput>
    /**
     * In case the NotificationEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationEventUpdateInput, NotificationEventUncheckedUpdateInput>
  }

  /**
   * NotificationEvent delete
   */
  export type NotificationEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
    /**
     * Filter which NotificationEvent to delete.
     */
    where: NotificationEventWhereUniqueInput
  }

  /**
   * NotificationEvent deleteMany
   */
  export type NotificationEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationEvents to delete
     */
    where?: NotificationEventWhereInput
    /**
     * Limit how many NotificationEvents to delete.
     */
    limit?: number
  }

  /**
   * NotificationEvent without action
   */
  export type NotificationEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationEvent
     */
    select?: NotificationEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationEvent
     */
    omit?: NotificationEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationEventInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSettings
   */

  export type AggregateNotificationSettings = {
    _count: NotificationSettingsCountAggregateOutputType | null
    _avg: NotificationSettingsAvgAggregateOutputType | null
    _sum: NotificationSettingsSumAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  export type NotificationSettingsAvgAggregateOutputType = {
    reminderTime: number | null
  }

  export type NotificationSettingsSumAggregateOutputType = {
    reminderTime: number | null
  }

  export type NotificationSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    emailEnabled: boolean | null
    smsEnabled: boolean | null
    pushEnabled: boolean | null
    immediateNotify: boolean | null
    reminderEnabled: boolean | null
    reminderTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    emailEnabled: boolean | null
    smsEnabled: boolean | null
    pushEnabled: boolean | null
    immediateNotify: boolean | null
    reminderEnabled: boolean | null
    reminderTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationSettingsCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    emailEnabled: number
    smsEnabled: number
    pushEnabled: number
    immediateNotify: number
    reminderEnabled: number
    reminderTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationSettingsAvgAggregateInputType = {
    reminderTime?: true
  }

  export type NotificationSettingsSumAggregateInputType = {
    reminderTime?: true
  }

  export type NotificationSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    emailEnabled?: true
    smsEnabled?: true
    pushEnabled?: true
    immediateNotify?: true
    reminderEnabled?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    emailEnabled?: true
    smsEnabled?: true
    pushEnabled?: true
    immediateNotify?: true
    reminderEnabled?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    emailEnabled?: true
    smsEnabled?: true
    pushEnabled?: true
    immediateNotify?: true
    reminderEnabled?: true
    reminderTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to aggregate.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSettings
    **/
    _count?: true | NotificationSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type GetNotificationSettingsAggregateType<T extends NotificationSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSettings[P]>
      : GetScalarType<T[P], AggregateNotificationSettings[P]>
  }




  export type NotificationSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSettingsWhereInput
    orderBy?: NotificationSettingsOrderByWithAggregationInput | NotificationSettingsOrderByWithAggregationInput[]
    by: NotificationSettingsScalarFieldEnum[] | NotificationSettingsScalarFieldEnum
    having?: NotificationSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSettingsCountAggregateInputType | true
    _avg?: NotificationSettingsAvgAggregateInputType
    _sum?: NotificationSettingsSumAggregateInputType
    _min?: NotificationSettingsMinAggregateInputType
    _max?: NotificationSettingsMaxAggregateInputType
  }

  export type NotificationSettingsGroupByOutputType = {
    id: string
    userId: string | null
    eventType: string
    emailEnabled: boolean
    smsEnabled: boolean
    pushEnabled: boolean
    immediateNotify: boolean
    reminderEnabled: boolean
    reminderTime: number | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationSettingsCountAggregateOutputType | null
    _avg: NotificationSettingsAvgAggregateOutputType | null
    _sum: NotificationSettingsSumAggregateOutputType | null
    _min: NotificationSettingsMinAggregateOutputType | null
    _max: NotificationSettingsMaxAggregateOutputType | null
  }

  type GetNotificationSettingsGroupByPayload<T extends NotificationSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSettingsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notificationSettings"]>

  export type NotificationSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventType" | "emailEnabled" | "smsEnabled" | "pushEnabled" | "immediateNotify" | "reminderEnabled" | "reminderTime" | "createdAt" | "updatedAt", ExtArgs["result"]["notificationSettings"]>

  export type $NotificationSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      eventType: string
      emailEnabled: boolean
      smsEnabled: boolean
      pushEnabled: boolean
      immediateNotify: boolean
      reminderEnabled: boolean
      reminderTime: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notificationSettings"]>
    composites: {}
  }

  type NotificationSettingsGetPayload<S extends boolean | null | undefined | NotificationSettingsDefaultArgs> = $Result.GetResult<Prisma.$NotificationSettingsPayload, S>

  type NotificationSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationSettingsCountAggregateInputType | true
    }

  export interface NotificationSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSettings'], meta: { name: 'NotificationSettings' } }
    /**
     * Find zero or one NotificationSettings that matches the filter.
     * @param {NotificationSettingsFindUniqueArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSettingsFindUniqueArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationSettingsFindUniqueOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSettingsFindFirstArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindFirstOrThrowArgs} args - Arguments to find a NotificationSettings
     * @example
     * // Get one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany()
     * 
     * // Get first 10 NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSettingsFindManyArgs>(args?: SelectSubset<T, NotificationSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationSettings.
     * @param {NotificationSettingsCreateArgs} args - Arguments to create a NotificationSettings.
     * @example
     * // Create one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.create({
     *   data: {
     *     // ... data to create a NotificationSettings
     *   }
     * })
     * 
     */
    create<T extends NotificationSettingsCreateArgs>(args: SelectSubset<T, NotificationSettingsCreateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationSettings.
     * @param {NotificationSettingsCreateManyArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSettingsCreateManyArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSettings and returns the data saved in the database.
     * @param {NotificationSettingsCreateManyAndReturnArgs} args - Arguments to create many NotificationSettings.
     * @example
     * // Create many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationSettings.
     * @param {NotificationSettingsDeleteArgs} args - Arguments to delete one NotificationSettings.
     * @example
     * // Delete one NotificationSettings
     * const NotificationSettings = await prisma.notificationSettings.delete({
     *   where: {
     *     // ... filter to delete one NotificationSettings
     *   }
     * })
     * 
     */
    delete<T extends NotificationSettingsDeleteArgs>(args: SelectSubset<T, NotificationSettingsDeleteArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationSettings.
     * @param {NotificationSettingsUpdateArgs} args - Arguments to update one NotificationSettings.
     * @example
     * // Update one NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSettingsUpdateArgs>(args: SelectSubset<T, NotificationSettingsUpdateArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationSettings.
     * @param {NotificationSettingsDeleteManyArgs} args - Arguments to filter NotificationSettings to delete.
     * @example
     * // Delete a few NotificationSettings
     * const { count } = await prisma.notificationSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSettingsDeleteManyArgs>(args?: SelectSubset<T, NotificationSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSettingsUpdateManyArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSettings and returns the data updated in the database.
     * @param {NotificationSettingsUpdateManyAndReturnArgs} args - Arguments to update many NotificationSettings.
     * @example
     * // Update many NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationSettings and only return the `id`
     * const notificationSettingsWithIdOnly = await prisma.notificationSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationSettings.
     * @param {NotificationSettingsUpsertArgs} args - Arguments to update or create a NotificationSettings.
     * @example
     * // Update or create a NotificationSettings
     * const notificationSettings = await prisma.notificationSettings.upsert({
     *   create: {
     *     // ... data to create a NotificationSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSettings we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSettingsUpsertArgs>(args: SelectSubset<T, NotificationSettingsUpsertArgs<ExtArgs>>): Prisma__NotificationSettingsClient<$Result.GetResult<Prisma.$NotificationSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsCountArgs} args - Arguments to filter NotificationSettings to count.
     * @example
     * // Count the number of NotificationSettings
     * const count = await prisma.notificationSettings.count({
     *   where: {
     *     // ... the filter for the NotificationSettings we want to count
     *   }
     * })
    **/
    count<T extends NotificationSettingsCountArgs>(
      args?: Subset<T, NotificationSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationSettingsAggregateArgs>(args: Subset<T, NotificationSettingsAggregateArgs>): Prisma.PrismaPromise<GetNotificationSettingsAggregateType<T>>

    /**
     * Group by NotificationSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSettingsGroupByArgs} args - Group by arguments.
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
      T extends NotificationSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSettingsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSettings model
   */
  readonly fields: NotificationSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NotificationSettings model
   */
  interface NotificationSettingsFieldRefs {
    readonly id: FieldRef<"NotificationSettings", 'String'>
    readonly userId: FieldRef<"NotificationSettings", 'String'>
    readonly eventType: FieldRef<"NotificationSettings", 'String'>
    readonly emailEnabled: FieldRef<"NotificationSettings", 'Boolean'>
    readonly smsEnabled: FieldRef<"NotificationSettings", 'Boolean'>
    readonly pushEnabled: FieldRef<"NotificationSettings", 'Boolean'>
    readonly immediateNotify: FieldRef<"NotificationSettings", 'Boolean'>
    readonly reminderEnabled: FieldRef<"NotificationSettings", 'Boolean'>
    readonly reminderTime: FieldRef<"NotificationSettings", 'Int'>
    readonly createdAt: FieldRef<"NotificationSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"NotificationSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSettings findUnique
   */
  export type NotificationSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findUniqueOrThrow
   */
  export type NotificationSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings findFirst
   */
  export type NotificationSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findFirstOrThrow
   */
  export type NotificationSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSettings.
     */
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings findMany
   */
  export type NotificationSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter, which NotificationSettings to fetch.
     */
    where?: NotificationSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSettings to fetch.
     */
    orderBy?: NotificationSettingsOrderByWithRelationInput | NotificationSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSettings.
     */
    cursor?: NotificationSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSettings.
     */
    skip?: number
    distinct?: NotificationSettingsScalarFieldEnum | NotificationSettingsScalarFieldEnum[]
  }

  /**
   * NotificationSettings create
   */
  export type NotificationSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationSettings.
     */
    data: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
  }

  /**
   * NotificationSettings createMany
   */
  export type NotificationSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSettings createManyAndReturn
   */
  export type NotificationSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationSettings.
     */
    data: NotificationSettingsCreateManyInput | NotificationSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSettings update
   */
  export type NotificationSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
    /**
     * Choose, which NotificationSettings to update.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings updateMany
   */
  export type NotificationSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSettings updateManyAndReturn
   */
  export type NotificationSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The data used to update NotificationSettings.
     */
    data: XOR<NotificationSettingsUpdateManyMutationInput, NotificationSettingsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSettings to update
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to update.
     */
    limit?: number
  }

  /**
   * NotificationSettings upsert
   */
  export type NotificationSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationSettings to update in case it exists.
     */
    where: NotificationSettingsWhereUniqueInput
    /**
     * In case the NotificationSettings found by the `where` argument doesn't exist, create a new NotificationSettings with this data.
     */
    create: XOR<NotificationSettingsCreateInput, NotificationSettingsUncheckedCreateInput>
    /**
     * In case the NotificationSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSettingsUpdateInput, NotificationSettingsUncheckedUpdateInput>
  }

  /**
   * NotificationSettings delete
   */
  export type NotificationSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
    /**
     * Filter which NotificationSettings to delete.
     */
    where: NotificationSettingsWhereUniqueInput
  }

  /**
   * NotificationSettings deleteMany
   */
  export type NotificationSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSettings to delete
     */
    where?: NotificationSettingsWhereInput
    /**
     * Limit how many NotificationSettings to delete.
     */
    limit?: number
  }

  /**
   * NotificationSettings without action
   */
  export type NotificationSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSettings
     */
    select?: NotificationSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSettings
     */
    omit?: NotificationSettingsOmit<ExtArgs> | null
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


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    priority: 'priority',
    recipient: 'recipient',
    recipientName: 'recipientName',
    recipientId: 'recipientId',
    subject: 'subject',
    message: 'message',
    templateId: 'templateId',
    templateData: 'templateData',
    provider: 'provider',
    providerMessageId: 'providerMessageId',
    providerResponse: 'providerResponse',
    eventType: 'eventType',
    orderId: 'orderId',
    paymentId: 'paymentId',
    eventId: 'eventId',
    metadata: 'metadata',
    sentAt: 'sentAt',
    deliveredAt: 'deliveredAt',
    openedAt: 'openedAt',
    clickedAt: 'clickedAt',
    bouncedAt: 'bouncedAt',
    failedAt: 'failedAt',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount',
    maxRetries: 'maxRetries',
    scheduledFor: 'scheduledFor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    subject: 'subject',
    htmlContent: 'htmlContent',
    textContent: 'textContent',
    variables: 'variables',
    brevoTemplateId: 'brevoTemplateId',
    isActive: 'isActive',
    createdBy: 'createdBy',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationTemplateScalarFieldEnum = (typeof NotificationTemplateScalarFieldEnum)[keyof typeof NotificationTemplateScalarFieldEnum]


  export const NotificationQueueScalarFieldEnum: {
    id: 'id',
    queueName: 'queueName',
    notificationId: 'notificationId',
    priority: 'priority',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    status: 'status',
    processingStartedAt: 'processingStartedAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    errorMessage: 'errorMessage',
    nextRetryAt: 'nextRetryAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationQueueScalarFieldEnum = (typeof NotificationQueueScalarFieldEnum)[keyof typeof NotificationQueueScalarFieldEnum]


  export const NotificationEventScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    eventType: 'eventType',
    eventData: 'eventData',
    providerEventId: 'providerEventId',
    createdAt: 'createdAt'
  };

  export type NotificationEventScalarFieldEnum = (typeof NotificationEventScalarFieldEnum)[keyof typeof NotificationEventScalarFieldEnum]


  export const NotificationSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    emailEnabled: 'emailEnabled',
    smsEnabled: 'smsEnabled',
    pushEnabled: 'pushEnabled',
    immediateNotify: 'immediateNotify',
    reminderEnabled: 'reminderEnabled',
    reminderTime: 'reminderTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationSettingsScalarFieldEnum = (typeof NotificationSettingsScalarFieldEnum)[keyof typeof NotificationSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationPriority'
   */
  export type EnumNotificationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPriority'>
    


  /**
   * Reference to a field of type 'NotificationPriority[]'
   */
  export type ListEnumNotificationPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationPriority[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TemplateType'
   */
  export type EnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType'>
    


  /**
   * Reference to a field of type 'TemplateType[]'
   */
  export type ListEnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFilter<"Notification"> | $Enums.NotificationPriority
    recipient?: StringFilter<"Notification"> | string
    recipientName?: StringNullableFilter<"Notification"> | string | null
    recipientId?: StringNullableFilter<"Notification"> | string | null
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    templateId?: StringNullableFilter<"Notification"> | string | null
    templateData?: JsonNullableFilter<"Notification">
    provider?: StringFilter<"Notification"> | string
    providerMessageId?: StringNullableFilter<"Notification"> | string | null
    providerResponse?: JsonNullableFilter<"Notification">
    eventType?: StringNullableFilter<"Notification"> | string | null
    orderId?: StringNullableFilter<"Notification"> | string | null
    paymentId?: StringNullableFilter<"Notification"> | string | null
    eventId?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    bouncedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    retryCount?: IntFilter<"Notification"> | number
    maxRetries?: IntFilter<"Notification"> | number
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    template?: XOR<NotificationTemplateNullableScalarRelationFilter, NotificationTemplateWhereInput> | null
    events?: NotificationEventListRelationFilter
    queueItems?: NotificationQueueListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    recipient?: SortOrder
    recipientName?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    templateId?: SortOrderInput | SortOrder
    templateData?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    clickedAt?: SortOrderInput | SortOrder
    bouncedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    template?: NotificationTemplateOrderByWithRelationInput
    events?: NotificationEventOrderByRelationAggregateInput
    queueItems?: NotificationQueueOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFilter<"Notification"> | $Enums.NotificationPriority
    recipient?: StringFilter<"Notification"> | string
    recipientName?: StringNullableFilter<"Notification"> | string | null
    recipientId?: StringNullableFilter<"Notification"> | string | null
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    templateId?: StringNullableFilter<"Notification"> | string | null
    templateData?: JsonNullableFilter<"Notification">
    provider?: StringFilter<"Notification"> | string
    providerMessageId?: StringNullableFilter<"Notification"> | string | null
    providerResponse?: JsonNullableFilter<"Notification">
    eventType?: StringNullableFilter<"Notification"> | string | null
    orderId?: StringNullableFilter<"Notification"> | string | null
    paymentId?: StringNullableFilter<"Notification"> | string | null
    eventId?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    bouncedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    retryCount?: IntFilter<"Notification"> | number
    maxRetries?: IntFilter<"Notification"> | number
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    template?: XOR<NotificationTemplateNullableScalarRelationFilter, NotificationTemplateWhereInput> | null
    events?: NotificationEventListRelationFilter
    queueItems?: NotificationQueueListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    recipient?: SortOrder
    recipientName?: SortOrderInput | SortOrder
    recipientId?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    templateId?: SortOrderInput | SortOrder
    templateData?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    paymentId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    openedAt?: SortOrderInput | SortOrder
    clickedAt?: SortOrderInput | SortOrder
    bouncedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityWithAggregatesFilter<"Notification"> | $Enums.NotificationPriority
    recipient?: StringWithAggregatesFilter<"Notification"> | string
    recipientName?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    recipientId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    subject?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    templateId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    templateData?: JsonNullableWithAggregatesFilter<"Notification">
    provider?: StringWithAggregatesFilter<"Notification"> | string
    providerMessageId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    providerResponse?: JsonNullableWithAggregatesFilter<"Notification">
    eventType?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    paymentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Notification">
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    openedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    clickedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    bouncedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    retryCount?: IntWithAggregatesFilter<"Notification"> | number
    maxRetries?: IntWithAggregatesFilter<"Notification"> | number
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationTemplateWhereInput = {
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    id?: StringFilter<"NotificationTemplate"> | string
    name?: StringFilter<"NotificationTemplate"> | string
    type?: EnumTemplateTypeFilter<"NotificationTemplate"> | $Enums.TemplateType
    description?: StringNullableFilter<"NotificationTemplate"> | string | null
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    htmlContent?: StringNullableFilter<"NotificationTemplate"> | string | null
    textContent?: StringFilter<"NotificationTemplate"> | string
    variables?: JsonNullableFilter<"NotificationTemplate">
    brevoTemplateId?: IntNullableFilter<"NotificationTemplate"> | number | null
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdBy?: StringNullableFilter<"NotificationTemplate"> | string | null
    version?: IntFilter<"NotificationTemplate"> | number
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    notifications?: NotificationListRelationFilter
  }

  export type NotificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    htmlContent?: SortOrderInput | SortOrder
    textContent?: SortOrder
    variables?: SortOrderInput | SortOrder
    brevoTemplateId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type NotificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    type?: EnumTemplateTypeFilter<"NotificationTemplate"> | $Enums.TemplateType
    description?: StringNullableFilter<"NotificationTemplate"> | string | null
    subject?: StringNullableFilter<"NotificationTemplate"> | string | null
    htmlContent?: StringNullableFilter<"NotificationTemplate"> | string | null
    textContent?: StringFilter<"NotificationTemplate"> | string
    variables?: JsonNullableFilter<"NotificationTemplate">
    brevoTemplateId?: IntNullableFilter<"NotificationTemplate"> | number | null
    isActive?: BoolFilter<"NotificationTemplate"> | boolean
    createdBy?: StringNullableFilter<"NotificationTemplate"> | string | null
    version?: IntFilter<"NotificationTemplate"> | number
    createdAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationTemplate"> | Date | string
    notifications?: NotificationListRelationFilter
  }, "id" | "name">

  export type NotificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    htmlContent?: SortOrderInput | SortOrder
    textContent?: SortOrder
    variables?: SortOrderInput | SortOrder
    brevoTemplateId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationTemplateCountOrderByAggregateInput
    _avg?: NotificationTemplateAvgOrderByAggregateInput
    _max?: NotificationTemplateMaxOrderByAggregateInput
    _min?: NotificationTemplateMinOrderByAggregateInput
    _sum?: NotificationTemplateSumOrderByAggregateInput
  }

  export type NotificationTemplateScalarWhereWithAggregatesInput = {
    AND?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    OR?: NotificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    name?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    type?: EnumTemplateTypeWithAggregatesFilter<"NotificationTemplate"> | $Enums.TemplateType
    description?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    subject?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    htmlContent?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    textContent?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    variables?: JsonNullableWithAggregatesFilter<"NotificationTemplate">
    brevoTemplateId?: IntNullableWithAggregatesFilter<"NotificationTemplate"> | number | null
    isActive?: BoolWithAggregatesFilter<"NotificationTemplate"> | boolean
    createdBy?: StringNullableWithAggregatesFilter<"NotificationTemplate"> | string | null
    version?: IntWithAggregatesFilter<"NotificationTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationTemplate"> | Date | string
  }

  export type NotificationQueueWhereInput = {
    AND?: NotificationQueueWhereInput | NotificationQueueWhereInput[]
    OR?: NotificationQueueWhereInput[]
    NOT?: NotificationQueueWhereInput | NotificationQueueWhereInput[]
    id?: StringFilter<"NotificationQueue"> | string
    queueName?: StringFilter<"NotificationQueue"> | string
    notificationId?: StringFilter<"NotificationQueue"> | string
    priority?: EnumNotificationPriorityFilter<"NotificationQueue"> | $Enums.NotificationPriority
    attempts?: IntFilter<"NotificationQueue"> | number
    maxAttempts?: IntFilter<"NotificationQueue"> | number
    status?: StringFilter<"NotificationQueue"> | string
    processingStartedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationQueue"> | string | null
    nextRetryAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationQueue"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationQueue"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }

  export type NotificationQueueOrderByWithRelationInput = {
    id?: SortOrder
    queueName?: SortOrder
    notificationId?: SortOrder
    priority?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    processingStartedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notification?: NotificationOrderByWithRelationInput
  }

  export type NotificationQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationQueueWhereInput | NotificationQueueWhereInput[]
    OR?: NotificationQueueWhereInput[]
    NOT?: NotificationQueueWhereInput | NotificationQueueWhereInput[]
    queueName?: StringFilter<"NotificationQueue"> | string
    notificationId?: StringFilter<"NotificationQueue"> | string
    priority?: EnumNotificationPriorityFilter<"NotificationQueue"> | $Enums.NotificationPriority
    attempts?: IntFilter<"NotificationQueue"> | number
    maxAttempts?: IntFilter<"NotificationQueue"> | number
    status?: StringFilter<"NotificationQueue"> | string
    processingStartedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationQueue"> | string | null
    nextRetryAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationQueue"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationQueue"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }, "id">

  export type NotificationQueueOrderByWithAggregationInput = {
    id?: SortOrder
    queueName?: SortOrder
    notificationId?: SortOrder
    priority?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    processingStartedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationQueueCountOrderByAggregateInput
    _avg?: NotificationQueueAvgOrderByAggregateInput
    _max?: NotificationQueueMaxOrderByAggregateInput
    _min?: NotificationQueueMinOrderByAggregateInput
    _sum?: NotificationQueueSumOrderByAggregateInput
  }

  export type NotificationQueueScalarWhereWithAggregatesInput = {
    AND?: NotificationQueueScalarWhereWithAggregatesInput | NotificationQueueScalarWhereWithAggregatesInput[]
    OR?: NotificationQueueScalarWhereWithAggregatesInput[]
    NOT?: NotificationQueueScalarWhereWithAggregatesInput | NotificationQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationQueue"> | string
    queueName?: StringWithAggregatesFilter<"NotificationQueue"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationQueue"> | string
    priority?: EnumNotificationPriorityWithAggregatesFilter<"NotificationQueue"> | $Enums.NotificationPriority
    attempts?: IntWithAggregatesFilter<"NotificationQueue"> | number
    maxAttempts?: IntWithAggregatesFilter<"NotificationQueue"> | number
    status?: StringWithAggregatesFilter<"NotificationQueue"> | string
    processingStartedAt?: DateTimeNullableWithAggregatesFilter<"NotificationQueue"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"NotificationQueue"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"NotificationQueue"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"NotificationQueue"> | string | null
    nextRetryAt?: DateTimeNullableWithAggregatesFilter<"NotificationQueue"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationQueue"> | Date | string
  }

  export type NotificationEventWhereInput = {
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    id?: StringFilter<"NotificationEvent"> | string
    notificationId?: StringFilter<"NotificationEvent"> | string
    eventType?: StringFilter<"NotificationEvent"> | string
    eventData?: JsonNullableFilter<"NotificationEvent">
    providerEventId?: StringNullableFilter<"NotificationEvent"> | string | null
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }

  export type NotificationEventOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    notification?: NotificationOrderByWithRelationInput
  }

  export type NotificationEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationEventWhereInput | NotificationEventWhereInput[]
    OR?: NotificationEventWhereInput[]
    NOT?: NotificationEventWhereInput | NotificationEventWhereInput[]
    notificationId?: StringFilter<"NotificationEvent"> | string
    eventType?: StringFilter<"NotificationEvent"> | string
    eventData?: JsonNullableFilter<"NotificationEvent">
    providerEventId?: StringNullableFilter<"NotificationEvent"> | string | null
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }, "id">

  export type NotificationEventOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationEventCountOrderByAggregateInput
    _max?: NotificationEventMaxOrderByAggregateInput
    _min?: NotificationEventMinOrderByAggregateInput
  }

  export type NotificationEventScalarWhereWithAggregatesInput = {
    AND?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    OR?: NotificationEventScalarWhereWithAggregatesInput[]
    NOT?: NotificationEventScalarWhereWithAggregatesInput | NotificationEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationEvent"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationEvent"> | string
    eventType?: StringWithAggregatesFilter<"NotificationEvent"> | string
    eventData?: JsonNullableWithAggregatesFilter<"NotificationEvent">
    providerEventId?: StringNullableWithAggregatesFilter<"NotificationEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationEvent"> | Date | string
  }

  export type NotificationSettingsWhereInput = {
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    id?: StringFilter<"NotificationSettings"> | string
    userId?: StringNullableFilter<"NotificationSettings"> | string | null
    eventType?: StringFilter<"NotificationSettings"> | string
    emailEnabled?: BoolFilter<"NotificationSettings"> | boolean
    smsEnabled?: BoolFilter<"NotificationSettings"> | boolean
    pushEnabled?: BoolFilter<"NotificationSettings"> | boolean
    immediateNotify?: BoolFilter<"NotificationSettings"> | boolean
    reminderEnabled?: BoolFilter<"NotificationSettings"> | boolean
    reminderTime?: IntNullableFilter<"NotificationSettings"> | number | null
    createdAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSettings"> | Date | string
  }

  export type NotificationSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    emailEnabled?: SortOrder
    smsEnabled?: SortOrder
    pushEnabled?: SortOrder
    immediateNotify?: SortOrder
    reminderEnabled?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_eventType?: NotificationSettingsUserIdEventTypeCompoundUniqueInput
    AND?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    OR?: NotificationSettingsWhereInput[]
    NOT?: NotificationSettingsWhereInput | NotificationSettingsWhereInput[]
    userId?: StringNullableFilter<"NotificationSettings"> | string | null
    eventType?: StringFilter<"NotificationSettings"> | string
    emailEnabled?: BoolFilter<"NotificationSettings"> | boolean
    smsEnabled?: BoolFilter<"NotificationSettings"> | boolean
    pushEnabled?: BoolFilter<"NotificationSettings"> | boolean
    immediateNotify?: BoolFilter<"NotificationSettings"> | boolean
    reminderEnabled?: BoolFilter<"NotificationSettings"> | boolean
    reminderTime?: IntNullableFilter<"NotificationSettings"> | number | null
    createdAt?: DateTimeFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationSettings"> | Date | string
  }, "id" | "userId_eventType">

  export type NotificationSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    emailEnabled?: SortOrder
    smsEnabled?: SortOrder
    pushEnabled?: SortOrder
    immediateNotify?: SortOrder
    reminderEnabled?: SortOrder
    reminderTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationSettingsCountOrderByAggregateInput
    _avg?: NotificationSettingsAvgOrderByAggregateInput
    _max?: NotificationSettingsMaxOrderByAggregateInput
    _min?: NotificationSettingsMinOrderByAggregateInput
    _sum?: NotificationSettingsSumOrderByAggregateInput
  }

  export type NotificationSettingsScalarWhereWithAggregatesInput = {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[]
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput | NotificationSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSettings"> | string
    userId?: StringNullableWithAggregatesFilter<"NotificationSettings"> | string | null
    eventType?: StringWithAggregatesFilter<"NotificationSettings"> | string
    emailEnabled?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    smsEnabled?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    pushEnabled?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    immediateNotify?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    reminderEnabled?: BoolWithAggregatesFilter<"NotificationSettings"> | boolean
    reminderTime?: IntNullableWithAggregatesFilter<"NotificationSettings"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NotificationSettings"> | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: NotificationTemplateCreateNestedOneWithoutNotificationsInput
    events?: NotificationEventCreateNestedManyWithoutNotificationInput
    queueItems?: NotificationQueueCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateId?: string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: NotificationEventUncheckedCreateNestedManyWithoutNotificationInput
    queueItems?: NotificationQueueUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: NotificationTemplateUpdateOneWithoutNotificationsNestedInput
    events?: NotificationEventUpdateManyWithoutNotificationNestedInput
    queueItems?: NotificationQueueUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: NotificationEventUncheckedUpdateManyWithoutNotificationNestedInput
    queueItems?: NotificationQueueUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateId?: string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateCreateInput = {
    id?: string
    name: string
    type: $Enums.TemplateType
    description?: string | null
    subject?: string | null
    htmlContent?: string | null
    textContent: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: number | null
    isActive?: boolean
    createdBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutTemplateInput
  }

  export type NotificationTemplateUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.TemplateType
    description?: string | null
    subject?: string | null
    htmlContent?: string | null
    textContent: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: number | null
    isActive?: boolean
    createdBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type NotificationTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutTemplateNestedInput
  }

  export type NotificationTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type NotificationTemplateCreateManyInput = {
    id?: string
    name: string
    type: $Enums.TemplateType
    description?: string | null
    subject?: string | null
    htmlContent?: string | null
    textContent: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: number | null
    isActive?: boolean
    createdBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueCreateInput = {
    id?: string
    queueName: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notification: NotificationCreateNestedOneWithoutQueueItemsInput
  }

  export type NotificationQueueUncheckedCreateInput = {
    id?: string
    queueName: string
    notificationId: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutQueueItemsNestedInput
  }

  export type NotificationQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueCreateManyInput = {
    id?: string
    queueName: string
    notificationId: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventCreateInput = {
    id?: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
    notification: NotificationCreateNestedOneWithoutEventsInput
  }

  export type NotificationEventUncheckedCreateInput = {
    id?: string
    notificationId: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutEventsNestedInput
  }

  export type NotificationEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventCreateManyInput = {
    id?: string
    notificationId: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsCreateInput = {
    id?: string
    userId?: string | null
    eventType: string
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUncheckedCreateInput = {
    id?: string
    userId?: string | null
    eventType: string
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    emailEnabled?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    immediateNotify?: BoolFieldUpdateOperationsInput | boolean
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    emailEnabled?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    immediateNotify?: BoolFieldUpdateOperationsInput | boolean
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsCreateManyInput = {
    id?: string
    userId?: string | null
    eventType: string
    emailEnabled?: boolean
    smsEnabled?: boolean
    pushEnabled?: boolean
    immediateNotify?: boolean
    reminderEnabled?: boolean
    reminderTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    emailEnabled?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    immediateNotify?: BoolFieldUpdateOperationsInput | boolean
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    emailEnabled?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    pushEnabled?: BoolFieldUpdateOperationsInput | boolean
    immediateNotify?: BoolFieldUpdateOperationsInput | boolean
    reminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    reminderTime?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type EnumNotificationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPriority | EnumNotificationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPriorityFilter<$PrismaModel> | $Enums.NotificationPriority
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

  export type NotificationTemplateNullableScalarRelationFilter = {
    is?: NotificationTemplateWhereInput | null
    isNot?: NotificationTemplateWhereInput | null
  }

  export type NotificationEventListRelationFilter = {
    every?: NotificationEventWhereInput
    some?: NotificationEventWhereInput
    none?: NotificationEventWhereInput
  }

  export type NotificationQueueListRelationFilter = {
    every?: NotificationQueueWhereInput
    some?: NotificationQueueWhereInput
    none?: NotificationQueueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    recipient?: SortOrder
    recipientName?: SortOrder
    recipientId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    templateId?: SortOrder
    templateData?: SortOrder
    provider?: SortOrder
    providerMessageId?: SortOrder
    providerResponse?: SortOrder
    eventType?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    eventId?: SortOrder
    metadata?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    bouncedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    retryCount?: SortOrder
    maxRetries?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    recipient?: SortOrder
    recipientName?: SortOrder
    recipientId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    templateId?: SortOrder
    provider?: SortOrder
    providerMessageId?: SortOrder
    eventType?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    eventId?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    bouncedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    recipient?: SortOrder
    recipientName?: SortOrder
    recipientId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    templateId?: SortOrder
    provider?: SortOrder
    providerMessageId?: SortOrder
    eventType?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    eventId?: SortOrder
    sentAt?: SortOrder
    deliveredAt?: SortOrder
    openedAt?: SortOrder
    clickedAt?: SortOrder
    bouncedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    maxRetries?: SortOrder
    scheduledFor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    retryCount?: SortOrder
    maxRetries?: SortOrder
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

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type EnumNotificationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPriority | EnumNotificationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.NotificationPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationPriorityFilter<$PrismaModel>
    _max?: NestedEnumNotificationPriorityFilter<$PrismaModel>
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

  export type EnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    htmlContent?: SortOrder
    textContent?: SortOrder
    variables?: SortOrder
    brevoTemplateId?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateAvgOrderByAggregateInput = {
    brevoTemplateId?: SortOrder
    version?: SortOrder
  }

  export type NotificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    htmlContent?: SortOrder
    textContent?: SortOrder
    brevoTemplateId?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    subject?: SortOrder
    htmlContent?: SortOrder
    textContent?: SortOrder
    brevoTemplateId?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationTemplateSumOrderByAggregateInput = {
    brevoTemplateId?: SortOrder
    version?: SortOrder
  }

  export type EnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationQueueCountOrderByAggregateInput = {
    id?: SortOrder
    queueName?: SortOrder
    notificationId?: SortOrder
    priority?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    processingStartedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationQueueAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type NotificationQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    queueName?: SortOrder
    notificationId?: SortOrder
    priority?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    processingStartedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationQueueMinOrderByAggregateInput = {
    id?: SortOrder
    queueName?: SortOrder
    notificationId?: SortOrder
    priority?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    status?: SortOrder
    processingStartedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationQueueSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type NotificationEventCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    providerEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationEventMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    eventType?: SortOrder
    providerEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationEventMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    eventType?: SortOrder
    providerEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSettingsUserIdEventTypeCompoundUniqueInput = {
    userId: string
    eventType: string
  }

  export type NotificationSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    emailEnabled?: SortOrder
    smsEnabled?: SortOrder
    pushEnabled?: SortOrder
    immediateNotify?: SortOrder
    reminderEnabled?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsAvgOrderByAggregateInput = {
    reminderTime?: SortOrder
  }

  export type NotificationSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    emailEnabled?: SortOrder
    smsEnabled?: SortOrder
    pushEnabled?: SortOrder
    immediateNotify?: SortOrder
    reminderEnabled?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    emailEnabled?: SortOrder
    smsEnabled?: SortOrder
    pushEnabled?: SortOrder
    immediateNotify?: SortOrder
    reminderEnabled?: SortOrder
    reminderTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSettingsSumOrderByAggregateInput = {
    reminderTime?: SortOrder
  }

  export type NotificationTemplateCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<NotificationTemplateCreateWithoutNotificationsInput, NotificationTemplateUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: NotificationTemplateCreateOrConnectWithoutNotificationsInput
    connect?: NotificationTemplateWhereUniqueInput
  }

  export type NotificationEventCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput> | NotificationEventCreateWithoutNotificationInput[] | NotificationEventUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutNotificationInput | NotificationEventCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationEventCreateManyNotificationInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationQueueCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput> | NotificationQueueCreateWithoutNotificationInput[] | NotificationQueueUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationQueueCreateOrConnectWithoutNotificationInput | NotificationQueueCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationQueueCreateManyNotificationInputEnvelope
    connect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
  }

  export type NotificationEventUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput> | NotificationEventCreateWithoutNotificationInput[] | NotificationEventUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutNotificationInput | NotificationEventCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationEventCreateManyNotificationInputEnvelope
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
  }

  export type NotificationQueueUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput> | NotificationQueueCreateWithoutNotificationInput[] | NotificationQueueUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationQueueCreateOrConnectWithoutNotificationInput | NotificationQueueCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationQueueCreateManyNotificationInputEnvelope
    connect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type EnumNotificationPriorityFieldUpdateOperationsInput = {
    set?: $Enums.NotificationPriority
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NotificationTemplateUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<NotificationTemplateCreateWithoutNotificationsInput, NotificationTemplateUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: NotificationTemplateCreateOrConnectWithoutNotificationsInput
    upsert?: NotificationTemplateUpsertWithoutNotificationsInput
    disconnect?: NotificationTemplateWhereInput | boolean
    delete?: NotificationTemplateWhereInput | boolean
    connect?: NotificationTemplateWhereUniqueInput
    update?: XOR<XOR<NotificationTemplateUpdateToOneWithWhereWithoutNotificationsInput, NotificationTemplateUpdateWithoutNotificationsInput>, NotificationTemplateUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationEventUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput> | NotificationEventCreateWithoutNotificationInput[] | NotificationEventUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutNotificationInput | NotificationEventCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutNotificationInput | NotificationEventUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationEventCreateManyNotificationInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutNotificationInput | NotificationEventUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutNotificationInput | NotificationEventUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationQueueUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput> | NotificationQueueCreateWithoutNotificationInput[] | NotificationQueueUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationQueueCreateOrConnectWithoutNotificationInput | NotificationQueueCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationQueueUpsertWithWhereUniqueWithoutNotificationInput | NotificationQueueUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationQueueCreateManyNotificationInputEnvelope
    set?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    disconnect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    delete?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    connect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    update?: NotificationQueueUpdateWithWhereUniqueWithoutNotificationInput | NotificationQueueUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationQueueUpdateManyWithWhereWithoutNotificationInput | NotificationQueueUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationQueueScalarWhereInput | NotificationQueueScalarWhereInput[]
  }

  export type NotificationEventUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput> | NotificationEventCreateWithoutNotificationInput[] | NotificationEventUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationEventCreateOrConnectWithoutNotificationInput | NotificationEventCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationEventUpsertWithWhereUniqueWithoutNotificationInput | NotificationEventUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationEventCreateManyNotificationInputEnvelope
    set?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    disconnect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    delete?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    connect?: NotificationEventWhereUniqueInput | NotificationEventWhereUniqueInput[]
    update?: NotificationEventUpdateWithWhereUniqueWithoutNotificationInput | NotificationEventUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationEventUpdateManyWithWhereWithoutNotificationInput | NotificationEventUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
  }

  export type NotificationQueueUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput> | NotificationQueueCreateWithoutNotificationInput[] | NotificationQueueUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationQueueCreateOrConnectWithoutNotificationInput | NotificationQueueCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationQueueUpsertWithWhereUniqueWithoutNotificationInput | NotificationQueueUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationQueueCreateManyNotificationInputEnvelope
    set?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    disconnect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    delete?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    connect?: NotificationQueueWhereUniqueInput | NotificationQueueWhereUniqueInput[]
    update?: NotificationQueueUpdateWithWhereUniqueWithoutNotificationInput | NotificationQueueUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationQueueUpdateManyWithWhereWithoutNotificationInput | NotificationQueueUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationQueueScalarWhereInput | NotificationQueueScalarWhereInput[]
  }

  export type NotificationCreateNestedManyWithoutTemplateInput = {
    create?: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput> | NotificationCreateWithoutTemplateInput[] | NotificationUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTemplateInput | NotificationCreateOrConnectWithoutTemplateInput[]
    createMany?: NotificationCreateManyTemplateInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput> | NotificationCreateWithoutTemplateInput[] | NotificationUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTemplateInput | NotificationCreateOrConnectWithoutTemplateInput[]
    createMany?: NotificationCreateManyTemplateInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumTemplateTypeFieldUpdateOperationsInput = {
    set?: $Enums.TemplateType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NotificationUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput> | NotificationCreateWithoutTemplateInput[] | NotificationUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTemplateInput | NotificationCreateOrConnectWithoutTemplateInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTemplateInput | NotificationUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: NotificationCreateManyTemplateInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTemplateInput | NotificationUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTemplateInput | NotificationUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput> | NotificationCreateWithoutTemplateInput[] | NotificationUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTemplateInput | NotificationCreateOrConnectWithoutTemplateInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTemplateInput | NotificationUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: NotificationCreateManyTemplateInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTemplateInput | NotificationUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTemplateInput | NotificationUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutQueueItemsInput = {
    create?: XOR<NotificationCreateWithoutQueueItemsInput, NotificationUncheckedCreateWithoutQueueItemsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutQueueItemsInput
    connect?: NotificationWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutQueueItemsNestedInput = {
    create?: XOR<NotificationCreateWithoutQueueItemsInput, NotificationUncheckedCreateWithoutQueueItemsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutQueueItemsInput
    upsert?: NotificationUpsertWithoutQueueItemsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutQueueItemsInput, NotificationUpdateWithoutQueueItemsInput>, NotificationUncheckedUpdateWithoutQueueItemsInput>
  }

  export type NotificationCreateNestedOneWithoutEventsInput = {
    create?: XOR<NotificationCreateWithoutEventsInput, NotificationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutEventsInput
    connect?: NotificationWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<NotificationCreateWithoutEventsInput, NotificationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutEventsInput
    upsert?: NotificationUpsertWithoutEventsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutEventsInput, NotificationUpdateWithoutEventsInput>, NotificationUncheckedUpdateWithoutEventsInput>
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

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPriority | EnumNotificationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPriorityFilter<$PrismaModel> | $Enums.NotificationPriority
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

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationPriority | EnumNotificationPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationPriority[] | ListEnumNotificationPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationPriorityWithAggregatesFilter<$PrismaModel> | $Enums.NotificationPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationPriorityFilter<$PrismaModel>
    _max?: NestedEnumNotificationPriorityFilter<$PrismaModel>
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

  export type NestedEnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationTemplateCreateWithoutNotificationsInput = {
    id?: string
    name: string
    type: $Enums.TemplateType
    description?: string | null
    subject?: string | null
    htmlContent?: string | null
    textContent: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: number | null
    isActive?: boolean
    createdBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    type: $Enums.TemplateType
    description?: string | null
    subject?: string | null
    htmlContent?: string | null
    textContent: string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: number | null
    isActive?: boolean
    createdBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationTemplateCreateOrConnectWithoutNotificationsInput = {
    where: NotificationTemplateWhereUniqueInput
    create: XOR<NotificationTemplateCreateWithoutNotificationsInput, NotificationTemplateUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationEventCreateWithoutNotificationInput = {
    id?: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationEventUncheckedCreateWithoutNotificationInput = {
    id?: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationEventCreateOrConnectWithoutNotificationInput = {
    where: NotificationEventWhereUniqueInput
    create: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationEventCreateManyNotificationInputEnvelope = {
    data: NotificationEventCreateManyNotificationInput | NotificationEventCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationQueueCreateWithoutNotificationInput = {
    id?: string
    queueName: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationQueueUncheckedCreateWithoutNotificationInput = {
    id?: string
    queueName: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationQueueCreateOrConnectWithoutNotificationInput = {
    where: NotificationQueueWhereUniqueInput
    create: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationQueueCreateManyNotificationInputEnvelope = {
    data: NotificationQueueCreateManyNotificationInput | NotificationQueueCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationTemplateUpsertWithoutNotificationsInput = {
    update: XOR<NotificationTemplateUpdateWithoutNotificationsInput, NotificationTemplateUncheckedUpdateWithoutNotificationsInput>
    create: XOR<NotificationTemplateCreateWithoutNotificationsInput, NotificationTemplateUncheckedCreateWithoutNotificationsInput>
    where?: NotificationTemplateWhereInput
  }

  export type NotificationTemplateUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: NotificationTemplateWhereInput
    data: XOR<NotificationTemplateUpdateWithoutNotificationsInput, NotificationTemplateUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationTemplateUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    htmlContent?: NullableStringFieldUpdateOperationsInput | string | null
    textContent?: StringFieldUpdateOperationsInput | string
    variables?: NullableJsonNullValueInput | InputJsonValue
    brevoTemplateId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationEventWhereUniqueInput
    update: XOR<NotificationEventUpdateWithoutNotificationInput, NotificationEventUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationEventCreateWithoutNotificationInput, NotificationEventUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationEventUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationEventWhereUniqueInput
    data: XOR<NotificationEventUpdateWithoutNotificationInput, NotificationEventUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationEventUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationEventScalarWhereInput
    data: XOR<NotificationEventUpdateManyMutationInput, NotificationEventUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationEventScalarWhereInput = {
    AND?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    OR?: NotificationEventScalarWhereInput[]
    NOT?: NotificationEventScalarWhereInput | NotificationEventScalarWhereInput[]
    id?: StringFilter<"NotificationEvent"> | string
    notificationId?: StringFilter<"NotificationEvent"> | string
    eventType?: StringFilter<"NotificationEvent"> | string
    eventData?: JsonNullableFilter<"NotificationEvent">
    providerEventId?: StringNullableFilter<"NotificationEvent"> | string | null
    createdAt?: DateTimeFilter<"NotificationEvent"> | Date | string
  }

  export type NotificationQueueUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationQueueWhereUniqueInput
    update: XOR<NotificationQueueUpdateWithoutNotificationInput, NotificationQueueUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationQueueCreateWithoutNotificationInput, NotificationQueueUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationQueueUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationQueueWhereUniqueInput
    data: XOR<NotificationQueueUpdateWithoutNotificationInput, NotificationQueueUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationQueueUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationQueueScalarWhereInput
    data: XOR<NotificationQueueUpdateManyMutationInput, NotificationQueueUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationQueueScalarWhereInput = {
    AND?: NotificationQueueScalarWhereInput | NotificationQueueScalarWhereInput[]
    OR?: NotificationQueueScalarWhereInput[]
    NOT?: NotificationQueueScalarWhereInput | NotificationQueueScalarWhereInput[]
    id?: StringFilter<"NotificationQueue"> | string
    queueName?: StringFilter<"NotificationQueue"> | string
    notificationId?: StringFilter<"NotificationQueue"> | string
    priority?: EnumNotificationPriorityFilter<"NotificationQueue"> | $Enums.NotificationPriority
    attempts?: IntFilter<"NotificationQueue"> | number
    maxAttempts?: IntFilter<"NotificationQueue"> | number
    status?: StringFilter<"NotificationQueue"> | string
    processingStartedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    errorMessage?: StringNullableFilter<"NotificationQueue"> | string | null
    nextRetryAt?: DateTimeNullableFilter<"NotificationQueue"> | Date | string | null
    createdAt?: DateTimeFilter<"NotificationQueue"> | Date | string
    updatedAt?: DateTimeFilter<"NotificationQueue"> | Date | string
  }

  export type NotificationCreateWithoutTemplateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: NotificationEventCreateNestedManyWithoutNotificationInput
    queueItems?: NotificationQueueCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutTemplateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: NotificationEventUncheckedCreateNestedManyWithoutNotificationInput
    queueItems?: NotificationQueueUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutTemplateInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput>
  }

  export type NotificationCreateManyTemplateInputEnvelope = {
    data: NotificationCreateManyTemplateInput | NotificationCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutTemplateInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTemplateInput, NotificationUncheckedUpdateWithoutTemplateInput>
    create: XOR<NotificationCreateWithoutTemplateInput, NotificationUncheckedCreateWithoutTemplateInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTemplateInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTemplateInput, NotificationUncheckedUpdateWithoutTemplateInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTemplateInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTemplateInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFilter<"Notification"> | $Enums.NotificationPriority
    recipient?: StringFilter<"Notification"> | string
    recipientName?: StringNullableFilter<"Notification"> | string | null
    recipientId?: StringNullableFilter<"Notification"> | string | null
    subject?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    templateId?: StringNullableFilter<"Notification"> | string | null
    templateData?: JsonNullableFilter<"Notification">
    provider?: StringFilter<"Notification"> | string
    providerMessageId?: StringNullableFilter<"Notification"> | string | null
    providerResponse?: JsonNullableFilter<"Notification">
    eventType?: StringNullableFilter<"Notification"> | string | null
    orderId?: StringNullableFilter<"Notification"> | string | null
    paymentId?: StringNullableFilter<"Notification"> | string | null
    eventId?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    openedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    clickedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    bouncedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    retryCount?: IntFilter<"Notification"> | number
    maxRetries?: IntFilter<"Notification"> | number
    scheduledFor?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationCreateWithoutQueueItemsInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: NotificationTemplateCreateNestedOneWithoutNotificationsInput
    events?: NotificationEventCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutQueueItemsInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateId?: string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: NotificationEventUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutQueueItemsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutQueueItemsInput, NotificationUncheckedCreateWithoutQueueItemsInput>
  }

  export type NotificationUpsertWithoutQueueItemsInput = {
    update: XOR<NotificationUpdateWithoutQueueItemsInput, NotificationUncheckedUpdateWithoutQueueItemsInput>
    create: XOR<NotificationCreateWithoutQueueItemsInput, NotificationUncheckedCreateWithoutQueueItemsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutQueueItemsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutQueueItemsInput, NotificationUncheckedUpdateWithoutQueueItemsInput>
  }

  export type NotificationUpdateWithoutQueueItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: NotificationTemplateUpdateOneWithoutNotificationsNestedInput
    events?: NotificationEventUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutQueueItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: NotificationEventUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateWithoutEventsInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    template?: NotificationTemplateCreateNestedOneWithoutNotificationsInput
    queueItems?: NotificationQueueCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutEventsInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateId?: string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queueItems?: NotificationQueueUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutEventsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutEventsInput, NotificationUncheckedCreateWithoutEventsInput>
  }

  export type NotificationUpsertWithoutEventsInput = {
    update: XOR<NotificationUpdateWithoutEventsInput, NotificationUncheckedUpdateWithoutEventsInput>
    create: XOR<NotificationCreateWithoutEventsInput, NotificationUncheckedCreateWithoutEventsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutEventsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutEventsInput, NotificationUncheckedUpdateWithoutEventsInput>
  }

  export type NotificationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: NotificationTemplateUpdateOneWithoutNotificationsNestedInput
    queueItems?: NotificationQueueUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queueItems?: NotificationQueueUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationEventCreateManyNotificationInput = {
    id?: string
    eventType: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    createdAt?: Date | string
  }

  export type NotificationQueueCreateManyNotificationInput = {
    id?: string
    queueName: string
    priority?: $Enums.NotificationPriority
    attempts?: number
    maxAttempts?: number
    status?: string
    processingStartedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationEventUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationEventUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationQueueUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queueName?: StringFieldUpdateOperationsInput | string
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    processingStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyTemplateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    priority?: $Enums.NotificationPriority
    recipient: string
    recipientName?: string | null
    recipientId?: string | null
    subject?: string | null
    message: string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider: string
    providerMessageId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: string | null
    orderId?: string | null
    paymentId?: string | null
    eventId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    deliveredAt?: Date | string | null
    openedAt?: Date | string | null
    clickedAt?: Date | string | null
    bouncedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    maxRetries?: number
    scheduledFor?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: NotificationEventUpdateManyWithoutNotificationNestedInput
    queueItems?: NotificationQueueUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: NotificationEventUncheckedUpdateManyWithoutNotificationNestedInput
    queueItems?: NotificationQueueUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    priority?: EnumNotificationPriorityFieldUpdateOperationsInput | $Enums.NotificationPriority
    recipient?: StringFieldUpdateOperationsInput | string
    recipientName?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    templateData?: NullableJsonNullValueInput | InputJsonValue
    provider?: StringFieldUpdateOperationsInput | string
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clickedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bouncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    maxRetries?: IntFieldUpdateOperationsInput | number
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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