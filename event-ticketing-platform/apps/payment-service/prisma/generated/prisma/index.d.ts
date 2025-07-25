
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>
/**
 * Model PaymentEvent
 * 
 */
export type PaymentEvent = $Result.DefaultSelection<Prisma.$PaymentEventPayload>
/**
 * Model WebhookLog
 * 
 */
export type WebhookLog = $Result.DefaultSelection<Prisma.$WebhookLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED',
  DISPUTED: 'DISPUTED',
  EXPIRED: 'EXPIRED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentProvider: {
  STRIPE: 'STRIPE',
  MPESA: 'MPESA',
  PAYPAL: 'PAYPAL',
  BANK_TRANSFER: 'BANK_TRANSFER',
  FLUTTERWAVE: 'FLUTTERWAVE'
};

export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider]


export const PaymentMethod: {
  CARD: 'CARD',
  MOBILE_MONEY: 'MOBILE_MONEY',
  BANK_TRANSFER: 'BANK_TRANSFER',
  DIGITAL_WALLET: 'DIGITAL_WALLET',
  CRYPTO: 'CRYPTO'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Currency: {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  KES: 'KES',
  NGN: 'NGN',
  GHS: 'GHS',
  UGX: 'UGX',
  TZS: 'TZS'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const RefundStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentProvider = $Enums.PaymentProvider

export const PaymentProvider: typeof $Enums.PaymentProvider

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Payments
 * const payments = await prisma.payment.findMany()
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
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentEvent`: Exposes CRUD operations for the **PaymentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentEvents
    * const paymentEvents = await prisma.paymentEvent.findMany()
    * ```
    */
  get paymentEvent(): Prisma.PaymentEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookLog`: Exposes CRUD operations for the **WebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookLogs
    * const webhookLogs = await prisma.webhookLog.findMany()
    * ```
    */
  get webhookLog(): Prisma.WebhookLogDelegate<ExtArgs, ClientOptions>;
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
    Payment: 'Payment',
    Refund: 'Refund',
    PaymentEvent: 'PaymentEvent',
    WebhookLog: 'WebhookLog'
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
      modelProps: "payment" | "refund" | "paymentEvent" | "webhookLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
      PaymentEvent: {
        payload: Prisma.$PaymentEventPayload<ExtArgs>
        fields: Prisma.PaymentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          findFirst: {
            args: Prisma.PaymentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          findMany: {
            args: Prisma.PaymentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          create: {
            args: Prisma.PaymentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          createMany: {
            args: Prisma.PaymentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          delete: {
            args: Prisma.PaymentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          update: {
            args: Prisma.PaymentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          deleteMany: {
            args: Prisma.PaymentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          upsert: {
            args: Prisma.PaymentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          aggregate: {
            args: Prisma.PaymentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentEvent>
          }
          groupBy: {
            args: Prisma.PaymentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentEventCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentEventCountAggregateOutputType> | number
          }
        }
      }
      WebhookLog: {
        payload: Prisma.$WebhookLogPayload<ExtArgs>
        fields: Prisma.WebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findFirst: {
            args: Prisma.WebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          findMany: {
            args: Prisma.WebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          create: {
            args: Prisma.WebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          createMany: {
            args: Prisma.WebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          delete: {
            args: Prisma.WebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          update: {
            args: Prisma.WebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.WebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>[]
          }
          upsert: {
            args: Prisma.WebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookLogPayload>
          }
          aggregate: {
            args: Prisma.WebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookLog>
          }
          groupBy: {
            args: Prisma.WebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookLogCountAggregateOutputType> | number
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
    payment?: PaymentOmit
    refund?: RefundOmit
    paymentEvent?: PaymentEventOmit
    webhookLog?: WebhookLogOmit
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
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    refunds: number
    paymentEvents: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refunds?: boolean | PaymentCountOutputTypeCountRefundsArgs
    paymentEvents?: boolean | PaymentCountOutputTypeCountPaymentEventsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountRefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountPaymentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod | null
    providerTransactionId: string | null
    providerPaymentMethodId: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerName: string | null
    customerId: string | null
    redirectUrl: string | null
    returnUrl: string | null
    qrCode: string | null
    instructions: string | null
    description: string | null
    idempotencyKey: string | null
    errorMessage: string | null
    expiresAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod | null
    providerTransactionId: string | null
    providerPaymentMethodId: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerName: string | null
    customerId: string | null
    redirectUrl: string | null
    returnUrl: string | null
    qrCode: string | null
    instructions: string | null
    description: string | null
    idempotencyKey: string | null
    errorMessage: string | null
    expiresAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    currency: number
    status: number
    provider: number
    paymentMethod: number
    providerTransactionId: number
    providerPaymentMethodId: number
    providerResponse: number
    customerEmail: number
    customerPhone: number
    customerName: number
    customerId: number
    redirectUrl: number
    returnUrl: number
    qrCode: number
    instructions: number
    description: number
    metadata: number
    idempotencyKey: number
    errorMessage: number
    expiresAt: number
    completedAt: number
    failedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    paymentMethod?: true
    providerTransactionId?: true
    providerPaymentMethodId?: true
    customerEmail?: true
    customerPhone?: true
    customerName?: true
    customerId?: true
    redirectUrl?: true
    returnUrl?: true
    qrCode?: true
    instructions?: true
    description?: true
    idempotencyKey?: true
    errorMessage?: true
    expiresAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    paymentMethod?: true
    providerTransactionId?: true
    providerPaymentMethodId?: true
    customerEmail?: true
    customerPhone?: true
    customerName?: true
    customerId?: true
    redirectUrl?: true
    returnUrl?: true
    qrCode?: true
    instructions?: true
    description?: true
    idempotencyKey?: true
    errorMessage?: true
    expiresAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    paymentMethod?: true
    providerTransactionId?: true
    providerPaymentMethodId?: true
    providerResponse?: true
    customerEmail?: true
    customerPhone?: true
    customerName?: true
    customerId?: true
    redirectUrl?: true
    returnUrl?: true
    qrCode?: true
    instructions?: true
    description?: true
    metadata?: true
    idempotencyKey?: true
    errorMessage?: true
    expiresAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    amount: Decimal
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId: string | null
    providerPaymentMethodId: string | null
    providerResponse: JsonValue | null
    customerEmail: string
    customerPhone: string | null
    customerName: string | null
    customerId: string | null
    redirectUrl: string | null
    returnUrl: string | null
    qrCode: string | null
    instructions: string | null
    description: string | null
    metadata: JsonValue | null
    idempotencyKey: string | null
    errorMessage: string | null
    expiresAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    paymentMethod?: boolean
    providerTransactionId?: boolean
    providerPaymentMethodId?: boolean
    providerResponse?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerName?: boolean
    customerId?: boolean
    redirectUrl?: boolean
    returnUrl?: boolean
    qrCode?: boolean
    instructions?: boolean
    description?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    paymentEvents?: boolean | Payment$paymentEventsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    paymentMethod?: boolean
    providerTransactionId?: boolean
    providerPaymentMethodId?: boolean
    providerResponse?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerName?: boolean
    customerId?: boolean
    redirectUrl?: boolean
    returnUrl?: boolean
    qrCode?: boolean
    instructions?: boolean
    description?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    paymentMethod?: boolean
    providerTransactionId?: boolean
    providerPaymentMethodId?: boolean
    providerResponse?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerName?: boolean
    customerId?: boolean
    redirectUrl?: boolean
    returnUrl?: boolean
    qrCode?: boolean
    instructions?: boolean
    description?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    paymentMethod?: boolean
    providerTransactionId?: boolean
    providerPaymentMethodId?: boolean
    providerResponse?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerName?: boolean
    customerId?: boolean
    redirectUrl?: boolean
    returnUrl?: boolean
    qrCode?: boolean
    instructions?: boolean
    description?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    expiresAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "currency" | "status" | "provider" | "paymentMethod" | "providerTransactionId" | "providerPaymentMethodId" | "providerResponse" | "customerEmail" | "customerPhone" | "customerName" | "customerId" | "redirectUrl" | "returnUrl" | "qrCode" | "instructions" | "description" | "metadata" | "idempotencyKey" | "errorMessage" | "expiresAt" | "completedAt" | "failedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    paymentEvents?: boolean | Payment$paymentEventsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      refunds: Prisma.$RefundPayload<ExtArgs>[]
      paymentEvents: Prisma.$PaymentEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: Prisma.Decimal
      currency: $Enums.Currency
      status: $Enums.PaymentStatus
      provider: $Enums.PaymentProvider | null
      paymentMethod: $Enums.PaymentMethod
      providerTransactionId: string | null
      providerPaymentMethodId: string | null
      providerResponse: Prisma.JsonValue | null
      customerEmail: string
      customerPhone: string | null
      customerName: string | null
      customerId: string | null
      redirectUrl: string | null
      returnUrl: string | null
      qrCode: string | null
      instructions: string | null
      description: string | null
      metadata: Prisma.JsonValue | null
      idempotencyKey: string | null
      errorMessage: string | null
      expiresAt: Date | null
      completedAt: Date | null
      failedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refunds<T extends Payment$refundsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentEvents<T extends Payment$paymentEventsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$paymentEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'Currency'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly provider: FieldRef<"Payment", 'PaymentProvider'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly providerTransactionId: FieldRef<"Payment", 'String'>
    readonly providerPaymentMethodId: FieldRef<"Payment", 'String'>
    readonly providerResponse: FieldRef<"Payment", 'Json'>
    readonly customerEmail: FieldRef<"Payment", 'String'>
    readonly customerPhone: FieldRef<"Payment", 'String'>
    readonly customerName: FieldRef<"Payment", 'String'>
    readonly customerId: FieldRef<"Payment", 'String'>
    readonly redirectUrl: FieldRef<"Payment", 'String'>
    readonly returnUrl: FieldRef<"Payment", 'String'>
    readonly qrCode: FieldRef<"Payment", 'String'>
    readonly instructions: FieldRef<"Payment", 'String'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly metadata: FieldRef<"Payment", 'Json'>
    readonly idempotencyKey: FieldRef<"Payment", 'String'>
    readonly errorMessage: FieldRef<"Payment", 'String'>
    readonly expiresAt: FieldRef<"Payment", 'DateTime'>
    readonly completedAt: FieldRef<"Payment", 'DateTime'>
    readonly failedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.refunds
   */
  export type Payment$refundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    cursor?: RefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Payment.paymentEvents
   */
  export type Payment$paymentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    where?: PaymentEventWhereInput
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    cursor?: PaymentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    providerRefundId: string | null
    reason: string | null
    idempotencyKey: string | null
    errorMessage: string | null
    processedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    providerRefundId: string | null
    reason: string | null
    idempotencyKey: string | null
    errorMessage: string | null
    processedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundCountAggregateOutputType = {
    id: number
    paymentId: number
    amount: number
    currency: number
    status: number
    provider: number
    providerRefundId: number
    providerResponse: number
    reason: number
    metadata: number
    idempotencyKey: number
    errorMessage: number
    processedAt: number
    completedAt: number
    failedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amount?: true
  }

  export type RefundSumAggregateInputType = {
    amount?: true
  }

  export type RefundMinAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    providerRefundId?: true
    reason?: true
    idempotencyKey?: true
    errorMessage?: true
    processedAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundMaxAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    providerRefundId?: true
    reason?: true
    idempotencyKey?: true
    errorMessage?: true
    processedAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundCountAggregateInputType = {
    id?: true
    paymentId?: true
    amount?: true
    currency?: true
    status?: true
    provider?: true
    providerRefundId?: true
    providerResponse?: true
    reason?: true
    metadata?: true
    idempotencyKey?: true
    errorMessage?: true
    processedAt?: true
    completedAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    id: string
    paymentId: string
    amount: Decimal
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId: string | null
    providerResponse: JsonValue | null
    reason: string | null
    metadata: JsonValue | null
    idempotencyKey: string | null
    errorMessage: string | null
    processedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    providerRefundId?: boolean
    providerResponse?: boolean
    reason?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    processedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    providerRefundId?: boolean
    providerResponse?: boolean
    reason?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    processedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    providerRefundId?: boolean
    providerResponse?: boolean
    reason?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    processedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    id?: boolean
    paymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    provider?: boolean
    providerRefundId?: boolean
    providerResponse?: boolean
    reason?: boolean
    metadata?: boolean
    idempotencyKey?: boolean
    errorMessage?: boolean
    processedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "amount" | "currency" | "status" | "provider" | "providerRefundId" | "providerResponse" | "reason" | "metadata" | "idempotencyKey" | "errorMessage" | "processedAt" | "completedAt" | "failedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["refund"]>
  export type RefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type RefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type RefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      amount: Prisma.Decimal
      currency: $Enums.Currency
      status: $Enums.PaymentStatus
      provider: $Enums.PaymentProvider
      providerRefundId: string | null
      providerResponse: Prisma.JsonValue | null
      reason: string | null
      metadata: Prisma.JsonValue | null
      idempotencyKey: string | null
      errorMessage: string | null
      processedAt: Date | null
      completedAt: Date | null
      failedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundWithIdOnly = await prisma.refund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
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
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Refund model
   */
  interface RefundFieldRefs {
    readonly id: FieldRef<"Refund", 'String'>
    readonly paymentId: FieldRef<"Refund", 'String'>
    readonly amount: FieldRef<"Refund", 'Decimal'>
    readonly currency: FieldRef<"Refund", 'Currency'>
    readonly status: FieldRef<"Refund", 'PaymentStatus'>
    readonly provider: FieldRef<"Refund", 'PaymentProvider'>
    readonly providerRefundId: FieldRef<"Refund", 'String'>
    readonly providerResponse: FieldRef<"Refund", 'Json'>
    readonly reason: FieldRef<"Refund", 'String'>
    readonly metadata: FieldRef<"Refund", 'Json'>
    readonly idempotencyKey: FieldRef<"Refund", 'String'>
    readonly errorMessage: FieldRef<"Refund", 'String'>
    readonly processedAt: FieldRef<"Refund", 'DateTime'>
    readonly completedAt: FieldRef<"Refund", 'DateTime'>
    readonly failedAt: FieldRef<"Refund", 'DateTime'>
    readonly createdAt: FieldRef<"Refund", 'DateTime'>
    readonly updatedAt: FieldRef<"Refund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund updateManyAndReturn
   */
  export type RefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
  }


  /**
   * Model PaymentEvent
   */

  export type AggregatePaymentEvent = {
    _count: PaymentEventCountAggregateOutputType | null
    _min: PaymentEventMinAggregateOutputType | null
    _max: PaymentEventMaxAggregateOutputType | null
  }

  export type PaymentEventMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    provider: $Enums.PaymentProvider | null
    eventType: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type PaymentEventMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    provider: $Enums.PaymentProvider | null
    eventType: string | null
    processedAt: Date | null
    createdAt: Date | null
  }

  export type PaymentEventCountAggregateOutputType = {
    id: number
    paymentId: number
    provider: number
    eventType: number
    eventData: number
    processedAt: number
    createdAt: number
    _all: number
  }


  export type PaymentEventMinAggregateInputType = {
    id?: true
    paymentId?: true
    provider?: true
    eventType?: true
    processedAt?: true
    createdAt?: true
  }

  export type PaymentEventMaxAggregateInputType = {
    id?: true
    paymentId?: true
    provider?: true
    eventType?: true
    processedAt?: true
    createdAt?: true
  }

  export type PaymentEventCountAggregateInputType = {
    id?: true
    paymentId?: true
    provider?: true
    eventType?: true
    eventData?: true
    processedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvent to aggregate.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentEvents
    **/
    _count?: true | PaymentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentEventMaxAggregateInputType
  }

  export type GetPaymentEventAggregateType<T extends PaymentEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentEvent[P]>
      : GetScalarType<T[P], AggregatePaymentEvent[P]>
  }




  export type PaymentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEventWhereInput
    orderBy?: PaymentEventOrderByWithAggregationInput | PaymentEventOrderByWithAggregationInput[]
    by: PaymentEventScalarFieldEnum[] | PaymentEventScalarFieldEnum
    having?: PaymentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentEventCountAggregateInputType | true
    _min?: PaymentEventMinAggregateInputType
    _max?: PaymentEventMaxAggregateInputType
  }

  export type PaymentEventGroupByOutputType = {
    id: string
    paymentId: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonValue
    processedAt: Date | null
    createdAt: Date
    _count: PaymentEventCountAggregateOutputType | null
    _min: PaymentEventMinAggregateOutputType | null
    _max: PaymentEventMaxAggregateOutputType | null
  }

  type GetPaymentEventGroupByPayload<T extends PaymentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentEventGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentEventGroupByOutputType[P]>
        }
      >
    >


  export type PaymentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    provider?: boolean
    eventType?: boolean
    eventData?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    provider?: boolean
    eventType?: boolean
    eventData?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    provider?: boolean
    eventType?: boolean
    eventData?: boolean
    processedAt?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectScalar = {
    id?: boolean
    paymentId?: boolean
    provider?: boolean
    eventType?: boolean
    eventData?: boolean
    processedAt?: boolean
    createdAt?: boolean
  }

  export type PaymentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "provider" | "eventType" | "eventData" | "processedAt" | "createdAt", ExtArgs["result"]["paymentEvent"]>
  export type PaymentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $PaymentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentEvent"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      provider: $Enums.PaymentProvider
      eventType: string
      eventData: Prisma.JsonValue
      processedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["paymentEvent"]>
    composites: {}
  }

  type PaymentEventGetPayload<S extends boolean | null | undefined | PaymentEventDefaultArgs> = $Result.GetResult<Prisma.$PaymentEventPayload, S>

  type PaymentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentEventCountAggregateInputType | true
    }

  export interface PaymentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentEvent'], meta: { name: 'PaymentEvent' } }
    /**
     * Find zero or one PaymentEvent that matches the filter.
     * @param {PaymentEventFindUniqueArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentEventFindUniqueArgs>(args: SelectSubset<T, PaymentEventFindUniqueArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentEventFindUniqueOrThrowArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindFirstArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentEventFindFirstArgs>(args?: SelectSubset<T, PaymentEventFindFirstArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindFirstOrThrowArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentEvents
     * const paymentEvents = await prisma.paymentEvent.findMany()
     * 
     * // Get first 10 PaymentEvents
     * const paymentEvents = await prisma.paymentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentEventFindManyArgs>(args?: SelectSubset<T, PaymentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentEvent.
     * @param {PaymentEventCreateArgs} args - Arguments to create a PaymentEvent.
     * @example
     * // Create one PaymentEvent
     * const PaymentEvent = await prisma.paymentEvent.create({
     *   data: {
     *     // ... data to create a PaymentEvent
     *   }
     * })
     * 
     */
    create<T extends PaymentEventCreateArgs>(args: SelectSubset<T, PaymentEventCreateArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentEvents.
     * @param {PaymentEventCreateManyArgs} args - Arguments to create many PaymentEvents.
     * @example
     * // Create many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentEventCreateManyArgs>(args?: SelectSubset<T, PaymentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentEvents and returns the data saved in the database.
     * @param {PaymentEventCreateManyAndReturnArgs} args - Arguments to create many PaymentEvents.
     * @example
     * // Create many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentEvents and only return the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentEvent.
     * @param {PaymentEventDeleteArgs} args - Arguments to delete one PaymentEvent.
     * @example
     * // Delete one PaymentEvent
     * const PaymentEvent = await prisma.paymentEvent.delete({
     *   where: {
     *     // ... filter to delete one PaymentEvent
     *   }
     * })
     * 
     */
    delete<T extends PaymentEventDeleteArgs>(args: SelectSubset<T, PaymentEventDeleteArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentEvent.
     * @param {PaymentEventUpdateArgs} args - Arguments to update one PaymentEvent.
     * @example
     * // Update one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentEventUpdateArgs>(args: SelectSubset<T, PaymentEventUpdateArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentEvents.
     * @param {PaymentEventDeleteManyArgs} args - Arguments to filter PaymentEvents to delete.
     * @example
     * // Delete a few PaymentEvents
     * const { count } = await prisma.paymentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentEventDeleteManyArgs>(args?: SelectSubset<T, PaymentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentEventUpdateManyArgs>(args: SelectSubset<T, PaymentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvents and returns the data updated in the database.
     * @param {PaymentEventUpdateManyAndReturnArgs} args - Arguments to update many PaymentEvents.
     * @example
     * // Update many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentEvents and only return the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentEvent.
     * @param {PaymentEventUpsertArgs} args - Arguments to update or create a PaymentEvent.
     * @example
     * // Update or create a PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.upsert({
     *   create: {
     *     // ... data to create a PaymentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentEvent we want to update
     *   }
     * })
     */
    upsert<T extends PaymentEventUpsertArgs>(args: SelectSubset<T, PaymentEventUpsertArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventCountArgs} args - Arguments to filter PaymentEvents to count.
     * @example
     * // Count the number of PaymentEvents
     * const count = await prisma.paymentEvent.count({
     *   where: {
     *     // ... the filter for the PaymentEvents we want to count
     *   }
     * })
    **/
    count<T extends PaymentEventCountArgs>(
      args?: Subset<T, PaymentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentEventAggregateArgs>(args: Subset<T, PaymentEventAggregateArgs>): Prisma.PrismaPromise<GetPaymentEventAggregateType<T>>

    /**
     * Group by PaymentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventGroupByArgs} args - Group by arguments.
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
      T extends PaymentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentEventGroupByArgs['orderBy'] }
        : { orderBy?: PaymentEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentEvent model
   */
  readonly fields: PaymentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentEvent model
   */
  interface PaymentEventFieldRefs {
    readonly id: FieldRef<"PaymentEvent", 'String'>
    readonly paymentId: FieldRef<"PaymentEvent", 'String'>
    readonly provider: FieldRef<"PaymentEvent", 'PaymentProvider'>
    readonly eventType: FieldRef<"PaymentEvent", 'String'>
    readonly eventData: FieldRef<"PaymentEvent", 'Json'>
    readonly processedAt: FieldRef<"PaymentEvent", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentEvent findUnique
   */
  export type PaymentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent findUniqueOrThrow
   */
  export type PaymentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent findFirst
   */
  export type PaymentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvents.
     */
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent findFirstOrThrow
   */
  export type PaymentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvents.
     */
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent findMany
   */
  export type PaymentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvents to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent create
   */
  export type PaymentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentEvent.
     */
    data: XOR<PaymentEventCreateInput, PaymentEventUncheckedCreateInput>
  }

  /**
   * PaymentEvent createMany
   */
  export type PaymentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentEvents.
     */
    data: PaymentEventCreateManyInput | PaymentEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentEvent createManyAndReturn
   */
  export type PaymentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentEvents.
     */
    data: PaymentEventCreateManyInput | PaymentEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvent update
   */
  export type PaymentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentEvent.
     */
    data: XOR<PaymentEventUpdateInput, PaymentEventUncheckedUpdateInput>
    /**
     * Choose, which PaymentEvent to update.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent updateMany
   */
  export type PaymentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentEvents.
     */
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvents to update
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to update.
     */
    limit?: number
  }

  /**
   * PaymentEvent updateManyAndReturn
   */
  export type PaymentEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * The data used to update PaymentEvents.
     */
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvents to update
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvent upsert
   */
  export type PaymentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentEvent to update in case it exists.
     */
    where: PaymentEventWhereUniqueInput
    /**
     * In case the PaymentEvent found by the `where` argument doesn't exist, create a new PaymentEvent with this data.
     */
    create: XOR<PaymentEventCreateInput, PaymentEventUncheckedCreateInput>
    /**
     * In case the PaymentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentEventUpdateInput, PaymentEventUncheckedUpdateInput>
  }

  /**
   * PaymentEvent delete
   */
  export type PaymentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter which PaymentEvent to delete.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent deleteMany
   */
  export type PaymentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvents to delete
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to delete.
     */
    limit?: number
  }

  /**
   * PaymentEvent without action
   */
  export type PaymentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
  }


  /**
   * Model WebhookLog
   */

  export type AggregateWebhookLog = {
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  export type WebhookLogAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type WebhookLogSumAggregateOutputType = {
    retryCount: number | null
  }

  export type WebhookLogMinAggregateOutputType = {
    id: string | null
    provider: $Enums.PaymentProvider | null
    eventId: string | null
    eventType: string | null
    signature: string | null
    processed: boolean | null
    processedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookLogMaxAggregateOutputType = {
    id: string | null
    provider: $Enums.PaymentProvider | null
    eventId: string | null
    eventType: string | null
    signature: string | null
    processed: boolean | null
    processedAt: Date | null
    errorMessage: string | null
    retryCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookLogCountAggregateOutputType = {
    id: number
    provider: number
    eventId: number
    eventType: number
    payload: number
    signature: number
    processed: number
    processedAt: number
    errorMessage: number
    retryCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookLogAvgAggregateInputType = {
    retryCount?: true
  }

  export type WebhookLogSumAggregateInputType = {
    retryCount?: true
  }

  export type WebhookLogMinAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    signature?: true
    processed?: true
    processedAt?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookLogMaxAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    signature?: true
    processed?: true
    processedAt?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookLogCountAggregateInputType = {
    id?: true
    provider?: true
    eventId?: true
    eventType?: true
    payload?: true
    signature?: true
    processed?: true
    processedAt?: true
    errorMessage?: true
    retryCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLog to aggregate.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookLogs
    **/
    _count?: true | WebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookLogMaxAggregateInputType
  }

  export type GetWebhookLogAggregateType<T extends WebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookLog[P]>
      : GetScalarType<T[P], AggregateWebhookLog[P]>
  }




  export type WebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookLogWhereInput
    orderBy?: WebhookLogOrderByWithAggregationInput | WebhookLogOrderByWithAggregationInput[]
    by: WebhookLogScalarFieldEnum[] | WebhookLogScalarFieldEnum
    having?: WebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookLogCountAggregateInputType | true
    _avg?: WebhookLogAvgAggregateInputType
    _sum?: WebhookLogSumAggregateInputType
    _min?: WebhookLogMinAggregateInputType
    _max?: WebhookLogMaxAggregateInputType
  }

  export type WebhookLogGroupByOutputType = {
    id: string
    provider: $Enums.PaymentProvider
    eventId: string
    eventType: string
    payload: JsonValue
    signature: string | null
    processed: boolean
    processedAt: Date | null
    errorMessage: string | null
    retryCount: number
    createdAt: Date
    updatedAt: Date
    _count: WebhookLogCountAggregateOutputType | null
    _avg: WebhookLogAvgAggregateOutputType | null
    _sum: WebhookLogSumAggregateOutputType | null
    _min: WebhookLogMinAggregateOutputType | null
    _max: WebhookLogMaxAggregateOutputType | null
  }

  type GetWebhookLogGroupByPayload<T extends WebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type WebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    payload?: boolean
    signature?: boolean
    processed?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    payload?: boolean
    signature?: boolean
    processed?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    payload?: boolean
    signature?: boolean
    processed?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookLog"]>

  export type WebhookLogSelectScalar = {
    id?: boolean
    provider?: boolean
    eventId?: boolean
    eventType?: boolean
    payload?: boolean
    signature?: boolean
    processed?: boolean
    processedAt?: boolean
    errorMessage?: boolean
    retryCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "eventId" | "eventType" | "payload" | "signature" | "processed" | "processedAt" | "errorMessage" | "retryCount" | "createdAt" | "updatedAt", ExtArgs["result"]["webhookLog"]>

  export type $WebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: $Enums.PaymentProvider
      eventId: string
      eventType: string
      payload: Prisma.JsonValue
      signature: string | null
      processed: boolean
      processedAt: Date | null
      errorMessage: string | null
      retryCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhookLog"]>
    composites: {}
  }

  type WebhookLogGetPayload<S extends boolean | null | undefined | WebhookLogDefaultArgs> = $Result.GetResult<Prisma.$WebhookLogPayload, S>

  type WebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookLogCountAggregateInputType | true
    }

  export interface WebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookLog'], meta: { name: 'WebhookLog' } }
    /**
     * Find zero or one WebhookLog that matches the filter.
     * @param {WebhookLogFindUniqueArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookLogFindUniqueArgs>(args: SelectSubset<T, WebhookLogFindUniqueArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookLogFindUniqueOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookLogFindFirstArgs>(args?: SelectSubset<T, WebhookLogFindFirstArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindFirstOrThrowArgs} args - Arguments to find a WebhookLog
     * @example
     * // Get one WebhookLog
     * const webhookLog = await prisma.webhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany()
     * 
     * // Get first 10 WebhookLogs
     * const webhookLogs = await prisma.webhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookLogFindManyArgs>(args?: SelectSubset<T, WebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookLog.
     * @param {WebhookLogCreateArgs} args - Arguments to create a WebhookLog.
     * @example
     * // Create one WebhookLog
     * const WebhookLog = await prisma.webhookLog.create({
     *   data: {
     *     // ... data to create a WebhookLog
     *   }
     * })
     * 
     */
    create<T extends WebhookLogCreateArgs>(args: SelectSubset<T, WebhookLogCreateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookLogs.
     * @param {WebhookLogCreateManyArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookLogCreateManyArgs>(args?: SelectSubset<T, WebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookLogs and returns the data saved in the database.
     * @param {WebhookLogCreateManyAndReturnArgs} args - Arguments to create many WebhookLogs.
     * @example
     * // Create many WebhookLogs
     * const webhookLog = await prisma.webhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookLog.
     * @param {WebhookLogDeleteArgs} args - Arguments to delete one WebhookLog.
     * @example
     * // Delete one WebhookLog
     * const WebhookLog = await prisma.webhookLog.delete({
     *   where: {
     *     // ... filter to delete one WebhookLog
     *   }
     * })
     * 
     */
    delete<T extends WebhookLogDeleteArgs>(args: SelectSubset<T, WebhookLogDeleteArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookLog.
     * @param {WebhookLogUpdateArgs} args - Arguments to update one WebhookLog.
     * @example
     * // Update one WebhookLog
     * const webhookLog = await prisma.webhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookLogUpdateArgs>(args: SelectSubset<T, WebhookLogUpdateArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookLogs.
     * @param {WebhookLogDeleteManyArgs} args - Arguments to filter WebhookLogs to delete.
     * @example
     * // Delete a few WebhookLogs
     * const { count } = await prisma.webhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookLogDeleteManyArgs>(args?: SelectSubset<T, WebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookLogUpdateManyArgs>(args: SelectSubset<T, WebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookLogs and returns the data updated in the database.
     * @param {WebhookLogUpdateManyAndReturnArgs} args - Arguments to update many WebhookLogs.
     * @example
     * // Update many WebhookLogs
     * const webhookLog = await prisma.webhookLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookLogs and only return the `id`
     * const webhookLogWithIdOnly = await prisma.webhookLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebhookLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookLog.
     * @param {WebhookLogUpsertArgs} args - Arguments to update or create a WebhookLog.
     * @example
     * // Update or create a WebhookLog
     * const webhookLog = await prisma.webhookLog.upsert({
     *   create: {
     *     // ... data to create a WebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends WebhookLogUpsertArgs>(args: SelectSubset<T, WebhookLogUpsertArgs<ExtArgs>>): Prisma__WebhookLogClient<$Result.GetResult<Prisma.$WebhookLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogCountArgs} args - Arguments to filter WebhookLogs to count.
     * @example
     * // Count the number of WebhookLogs
     * const count = await prisma.webhookLog.count({
     *   where: {
     *     // ... the filter for the WebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends WebhookLogCountArgs>(
      args?: Subset<T, WebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebhookLogAggregateArgs>(args: Subset<T, WebhookLogAggregateArgs>): Prisma.PrismaPromise<GetWebhookLogAggregateType<T>>

    /**
     * Group by WebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookLogGroupByArgs} args - Group by arguments.
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
      T extends WebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: WebhookLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookLog model
   */
  readonly fields: WebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WebhookLog model
   */
  interface WebhookLogFieldRefs {
    readonly id: FieldRef<"WebhookLog", 'String'>
    readonly provider: FieldRef<"WebhookLog", 'PaymentProvider'>
    readonly eventId: FieldRef<"WebhookLog", 'String'>
    readonly eventType: FieldRef<"WebhookLog", 'String'>
    readonly payload: FieldRef<"WebhookLog", 'Json'>
    readonly signature: FieldRef<"WebhookLog", 'String'>
    readonly processed: FieldRef<"WebhookLog", 'Boolean'>
    readonly processedAt: FieldRef<"WebhookLog", 'DateTime'>
    readonly errorMessage: FieldRef<"WebhookLog", 'String'>
    readonly retryCount: FieldRef<"WebhookLog", 'Int'>
    readonly createdAt: FieldRef<"WebhookLog", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookLog findUnique
   */
  export type WebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findUniqueOrThrow
   */
  export type WebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog findFirst
   */
  export type WebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findFirstOrThrow
   */
  export type WebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which WebhookLog to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookLogs.
     */
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog findMany
   */
  export type WebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter, which WebhookLogs to fetch.
     */
    where?: WebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookLogs to fetch.
     */
    orderBy?: WebhookLogOrderByWithRelationInput | WebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookLogs.
     */
    cursor?: WebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookLogs.
     */
    skip?: number
    distinct?: WebhookLogScalarFieldEnum | WebhookLogScalarFieldEnum[]
  }

  /**
   * WebhookLog create
   */
  export type WebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookLog.
     */
    data: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
  }

  /**
   * WebhookLog createMany
   */
  export type WebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog createManyAndReturn
   */
  export type WebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookLogs.
     */
    data: WebhookLogCreateManyInput | WebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookLog update
   */
  export type WebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookLog.
     */
    data: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
    /**
     * Choose, which WebhookLog to update.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog updateMany
   */
  export type WebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
  }

  /**
   * WebhookLog updateManyAndReturn
   */
  export type WebhookLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The data used to update WebhookLogs.
     */
    data: XOR<WebhookLogUpdateManyMutationInput, WebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which WebhookLogs to update
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to update.
     */
    limit?: number
  }

  /**
   * WebhookLog upsert
   */
  export type WebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookLog to update in case it exists.
     */
    where: WebhookLogWhereUniqueInput
    /**
     * In case the WebhookLog found by the `where` argument doesn't exist, create a new WebhookLog with this data.
     */
    create: XOR<WebhookLogCreateInput, WebhookLogUncheckedCreateInput>
    /**
     * In case the WebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookLogUpdateInput, WebhookLogUncheckedUpdateInput>
  }

  /**
   * WebhookLog delete
   */
  export type WebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
    /**
     * Filter which WebhookLog to delete.
     */
    where: WebhookLogWhereUniqueInput
  }

  /**
   * WebhookLog deleteMany
   */
  export type WebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookLogs to delete
     */
    where?: WebhookLogWhereInput
    /**
     * Limit how many WebhookLogs to delete.
     */
    limit?: number
  }

  /**
   * WebhookLog without action
   */
  export type WebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookLog
     */
    select?: WebhookLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookLog
     */
    omit?: WebhookLogOmit<ExtArgs> | null
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


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    provider: 'provider',
    paymentMethod: 'paymentMethod',
    providerTransactionId: 'providerTransactionId',
    providerPaymentMethodId: 'providerPaymentMethodId',
    providerResponse: 'providerResponse',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    customerName: 'customerName',
    customerId: 'customerId',
    redirectUrl: 'redirectUrl',
    returnUrl: 'returnUrl',
    qrCode: 'qrCode',
    instructions: 'instructions',
    description: 'description',
    metadata: 'metadata',
    idempotencyKey: 'idempotencyKey',
    errorMessage: 'errorMessage',
    expiresAt: 'expiresAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    provider: 'provider',
    providerRefundId: 'providerRefundId',
    providerResponse: 'providerResponse',
    reason: 'reason',
    metadata: 'metadata',
    idempotencyKey: 'idempotencyKey',
    errorMessage: 'errorMessage',
    processedAt: 'processedAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const PaymentEventScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    provider: 'provider',
    eventType: 'eventType',
    eventData: 'eventData',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
  };

  export type PaymentEventScalarFieldEnum = (typeof PaymentEventScalarFieldEnum)[keyof typeof PaymentEventScalarFieldEnum]


  export const WebhookLogScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventId: 'eventId',
    eventType: 'eventType',
    payload: 'payload',
    signature: 'signature',
    processed: 'processed',
    processedAt: 'processedAt',
    errorMessage: 'errorMessage',
    retryCount: 'retryCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookLogScalarFieldEnum = (typeof WebhookLogScalarFieldEnum)[keyof typeof WebhookLogScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProvider'
   */
  export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>
    


  /**
   * Reference to a field of type 'PaymentProvider[]'
   */
  export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Deep Input Types
   */


  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableFilter<"Payment"> | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    providerTransactionId?: StringNullableFilter<"Payment"> | string | null
    providerPaymentMethodId?: StringNullableFilter<"Payment"> | string | null
    providerResponse?: JsonNullableFilter<"Payment">
    customerEmail?: StringFilter<"Payment"> | string
    customerPhone?: StringNullableFilter<"Payment"> | string | null
    customerName?: StringNullableFilter<"Payment"> | string | null
    customerId?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    returnUrl?: StringNullableFilter<"Payment"> | string | null
    qrCode?: StringNullableFilter<"Payment"> | string | null
    instructions?: StringNullableFilter<"Payment"> | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    metadata?: JsonNullableFilter<"Payment">
    idempotencyKey?: StringNullableFilter<"Payment"> | string | null
    errorMessage?: StringNullableFilter<"Payment"> | string | null
    expiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    refunds?: RefundListRelationFilter
    paymentEvents?: PaymentEventListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    providerTransactionId?: SortOrderInput | SortOrder
    providerPaymentMethodId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    returnUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refunds?: RefundOrderByRelationAggregateInput
    paymentEvents?: PaymentEventOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    idempotencyKey?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableFilter<"Payment"> | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    providerTransactionId?: StringNullableFilter<"Payment"> | string | null
    providerPaymentMethodId?: StringNullableFilter<"Payment"> | string | null
    providerResponse?: JsonNullableFilter<"Payment">
    customerEmail?: StringFilter<"Payment"> | string
    customerPhone?: StringNullableFilter<"Payment"> | string | null
    customerName?: StringNullableFilter<"Payment"> | string | null
    customerId?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    returnUrl?: StringNullableFilter<"Payment"> | string | null
    qrCode?: StringNullableFilter<"Payment"> | string | null
    instructions?: StringNullableFilter<"Payment"> | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    metadata?: JsonNullableFilter<"Payment">
    errorMessage?: StringNullableFilter<"Payment"> | string | null
    expiresAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    refunds?: RefundListRelationFilter
    paymentEvents?: PaymentEventListRelationFilter
  }, "id" | "orderId" | "idempotencyKey">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    paymentMethod?: SortOrder
    providerTransactionId?: SortOrderInput | SortOrder
    providerPaymentMethodId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    returnUrl?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyWithAggregatesFilter<"Payment"> | $Enums.Currency
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableWithAggregatesFilter<"Payment"> | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    providerTransactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    providerPaymentMethodId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    providerResponse?: JsonNullableWithAggregatesFilter<"Payment">
    customerEmail?: StringWithAggregatesFilter<"Payment"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    redirectUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    returnUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    description?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Payment">
    idempotencyKey?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Refund"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Refund"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFilter<"Refund"> | $Enums.PaymentProvider
    providerRefundId?: StringNullableFilter<"Refund"> | string | null
    providerResponse?: JsonNullableFilter<"Refund">
    reason?: StringNullableFilter<"Refund"> | string | null
    metadata?: JsonNullableFilter<"Refund">
    idempotencyKey?: StringNullableFilter<"Refund"> | string | null
    errorMessage?: StringNullableFilter<"Refund"> | string | null
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type RefundOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    providerRefundId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    paymentId?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Refund"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Refund"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFilter<"Refund"> | $Enums.PaymentProvider
    providerRefundId?: StringNullableFilter<"Refund"> | string | null
    providerResponse?: JsonNullableFilter<"Refund">
    reason?: StringNullableFilter<"Refund"> | string | null
    metadata?: JsonNullableFilter<"Refund">
    errorMessage?: StringNullableFilter<"Refund"> | string | null
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id" | "idempotencyKey">

  export type RefundOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    providerRefundId?: SortOrderInput | SortOrder
    providerResponse?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refund"> | string
    paymentId?: StringWithAggregatesFilter<"Refund"> | string
    amount?: DecimalWithAggregatesFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyWithAggregatesFilter<"Refund"> | $Enums.Currency
    status?: EnumPaymentStatusWithAggregatesFilter<"Refund"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderWithAggregatesFilter<"Refund"> | $Enums.PaymentProvider
    providerRefundId?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    providerResponse?: JsonNullableWithAggregatesFilter<"Refund">
    reason?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Refund">
    idempotencyKey?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"Refund"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Refund"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Refund"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
  }

  export type PaymentEventWhereInput = {
    AND?: PaymentEventWhereInput | PaymentEventWhereInput[]
    OR?: PaymentEventWhereInput[]
    NOT?: PaymentEventWhereInput | PaymentEventWhereInput[]
    id?: StringFilter<"PaymentEvent"> | string
    paymentId?: StringFilter<"PaymentEvent"> | string
    provider?: EnumPaymentProviderFilter<"PaymentEvent"> | $Enums.PaymentProvider
    eventType?: StringFilter<"PaymentEvent"> | string
    eventData?: JsonFilter<"PaymentEvent">
    processedAt?: DateTimeNullableFilter<"PaymentEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type PaymentEventOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentEventWhereInput | PaymentEventWhereInput[]
    OR?: PaymentEventWhereInput[]
    NOT?: PaymentEventWhereInput | PaymentEventWhereInput[]
    paymentId?: StringFilter<"PaymentEvent"> | string
    provider?: EnumPaymentProviderFilter<"PaymentEvent"> | $Enums.PaymentProvider
    eventType?: StringFilter<"PaymentEvent"> | string
    eventData?: JsonFilter<"PaymentEvent">
    processedAt?: DateTimeNullableFilter<"PaymentEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type PaymentEventOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentEventCountOrderByAggregateInput
    _max?: PaymentEventMaxOrderByAggregateInput
    _min?: PaymentEventMinOrderByAggregateInput
  }

  export type PaymentEventScalarWhereWithAggregatesInput = {
    AND?: PaymentEventScalarWhereWithAggregatesInput | PaymentEventScalarWhereWithAggregatesInput[]
    OR?: PaymentEventScalarWhereWithAggregatesInput[]
    NOT?: PaymentEventScalarWhereWithAggregatesInput | PaymentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentEvent"> | string
    paymentId?: StringWithAggregatesFilter<"PaymentEvent"> | string
    provider?: EnumPaymentProviderWithAggregatesFilter<"PaymentEvent"> | $Enums.PaymentProvider
    eventType?: StringWithAggregatesFilter<"PaymentEvent"> | string
    eventData?: JsonWithAggregatesFilter<"PaymentEvent">
    processedAt?: DateTimeNullableWithAggregatesFilter<"PaymentEvent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentEvent"> | Date | string
  }

  export type WebhookLogWhereInput = {
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    id?: StringFilter<"WebhookLog"> | string
    provider?: EnumPaymentProviderFilter<"WebhookLog"> | $Enums.PaymentProvider
    eventId?: StringFilter<"WebhookLog"> | string
    eventType?: StringFilter<"WebhookLog"> | string
    payload?: JsonFilter<"WebhookLog">
    signature?: StringNullableFilter<"WebhookLog"> | string | null
    processed?: BoolFilter<"WebhookLog"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    retryCount?: IntFilter<"WebhookLog"> | number
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }

  export type WebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    signature?: SortOrderInput | SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_eventId?: WebhookLogProviderEventIdCompoundUniqueInput
    AND?: WebhookLogWhereInput | WebhookLogWhereInput[]
    OR?: WebhookLogWhereInput[]
    NOT?: WebhookLogWhereInput | WebhookLogWhereInput[]
    provider?: EnumPaymentProviderFilter<"WebhookLog"> | $Enums.PaymentProvider
    eventId?: StringFilter<"WebhookLog"> | string
    eventType?: StringFilter<"WebhookLog"> | string
    payload?: JsonFilter<"WebhookLog">
    signature?: StringNullableFilter<"WebhookLog"> | string | null
    processed?: BoolFilter<"WebhookLog"> | boolean
    processedAt?: DateTimeNullableFilter<"WebhookLog"> | Date | string | null
    errorMessage?: StringNullableFilter<"WebhookLog"> | string | null
    retryCount?: IntFilter<"WebhookLog"> | number
    createdAt?: DateTimeFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookLog"> | Date | string
  }, "id" | "provider_eventId">

  export type WebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    signature?: SortOrderInput | SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookLogCountOrderByAggregateInput
    _avg?: WebhookLogAvgOrderByAggregateInput
    _max?: WebhookLogMaxOrderByAggregateInput
    _min?: WebhookLogMinOrderByAggregateInput
    _sum?: WebhookLogSumOrderByAggregateInput
  }

  export type WebhookLogScalarWhereWithAggregatesInput = {
    AND?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    OR?: WebhookLogScalarWhereWithAggregatesInput[]
    NOT?: WebhookLogScalarWhereWithAggregatesInput | WebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookLog"> | string
    provider?: EnumPaymentProviderWithAggregatesFilter<"WebhookLog"> | $Enums.PaymentProvider
    eventId?: StringWithAggregatesFilter<"WebhookLog"> | string
    eventType?: StringWithAggregatesFilter<"WebhookLog"> | string
    payload?: JsonWithAggregatesFilter<"WebhookLog">
    signature?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    processed?: BoolWithAggregatesFilter<"WebhookLog"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"WebhookLog"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WebhookLog"> | string | null
    retryCount?: IntWithAggregatesFilter<"WebhookLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookLog"> | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutPaymentInput
    paymentEvents?: PaymentEventCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
    paymentEvents?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
    paymentEvents?: PaymentEventUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
    paymentEvents?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRefundsInput
  }

  export type RefundUncheckedCreateInput = {
    id?: string
    paymentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRefundsNestedInput
  }

  export type RefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateManyInput = {
    id?: string
    paymentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventCreateInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutPaymentEventsInput
  }

  export type PaymentEventUncheckedCreateInput = {
    id?: string
    paymentId: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutPaymentEventsNestedInput
  }

  export type PaymentEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventCreateManyInput = {
    id?: string
    paymentId: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    signature?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUncheckedCreateInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    signature?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogCreateManyInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventId: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    signature?: string | null
    processed?: boolean
    processedAt?: Date | string | null
    errorMessage?: string | null
    retryCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
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

  export type RefundListRelationFilter = {
    every?: RefundWhereInput
    some?: RefundWhereInput
    none?: RefundWhereInput
  }

  export type PaymentEventListRelationFilter = {
    every?: PaymentEventWhereInput
    some?: PaymentEventWhereInput
    none?: PaymentEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    paymentMethod?: SortOrder
    providerTransactionId?: SortOrder
    providerPaymentMethodId?: SortOrder
    providerResponse?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerName?: SortOrder
    customerId?: SortOrder
    redirectUrl?: SortOrder
    returnUrl?: SortOrder
    qrCode?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    paymentMethod?: SortOrder
    providerTransactionId?: SortOrder
    providerPaymentMethodId?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerName?: SortOrder
    customerId?: SortOrder
    redirectUrl?: SortOrder
    returnUrl?: SortOrder
    qrCode?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    paymentMethod?: SortOrder
    providerTransactionId?: SortOrder
    providerPaymentMethodId?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerName?: SortOrder
    customerId?: SortOrder
    redirectUrl?: SortOrder
    returnUrl?: SortOrder
    qrCode?: SortOrder
    instructions?: SortOrder
    description?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    expiresAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
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

  export type EnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type RefundCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    providerRefundId?: SortOrder
    providerResponse?: SortOrder
    reason?: SortOrder
    metadata?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    providerRefundId?: SortOrder
    reason?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    providerRefundId?: SortOrder
    reason?: SortOrder
    idempotencyKey?: SortOrder
    errorMessage?: SortOrder
    processedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
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

  export type PaymentEventCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentEventMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type WebhookLogProviderEventIdCompoundUniqueInput = {
    provider: $Enums.PaymentProvider
    eventId: string
  }

  export type WebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    signature?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type WebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    signature?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    signature?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    errorMessage?: SortOrder
    retryCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookLogSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RefundCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type PaymentEventCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
  }

  export type RefundUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type PaymentEventUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider | null
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefundUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type PaymentEventUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentEventUpsertWithWhereUniqueWithoutPaymentInput | PaymentEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    set?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    disconnect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    delete?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    update?: PaymentEventUpdateWithWhereUniqueWithoutPaymentInput | PaymentEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentEventUpdateManyWithWhereWithoutPaymentInput | PaymentEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
  }

  export type RefundUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentEventUpsertWithWhereUniqueWithoutPaymentInput | PaymentEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    set?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    disconnect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    delete?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    update?: PaymentEventUpdateWithWhereUniqueWithoutPaymentInput | PaymentEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentEventUpdateManyWithWhereWithoutPaymentInput | PaymentEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutRefundsInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider
  }

  export type PaymentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    upsert?: PaymentUpsertWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRefundsInput, PaymentUpdateWithoutRefundsInput>, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentCreateNestedOneWithoutPaymentEventsInput = {
    create?: XOR<PaymentCreateWithoutPaymentEventsInput, PaymentUncheckedCreateWithoutPaymentEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentEventsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutPaymentEventsNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentEventsInput, PaymentUncheckedCreateWithoutPaymentEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentEventsInput
    upsert?: PaymentUpsertWithoutPaymentEventsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPaymentEventsInput, PaymentUpdateWithoutPaymentEventsInput>, PaymentUncheckedUpdateWithoutPaymentEventsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
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

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
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

  export type NestedEnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RefundCreateWithoutPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUncheckedCreateWithoutPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundCreateOrConnectWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundCreateManyPaymentInputEnvelope = {
    data: RefundCreateManyPaymentInput | RefundCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentEventCreateWithoutPaymentInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentEventUncheckedCreateWithoutPaymentInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PaymentEventCreateOrConnectWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    create: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentEventCreateManyPaymentInputEnvelope = {
    data: PaymentEventCreateManyPaymentInput | PaymentEventCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type RefundUpsertWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    update: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundUpdateWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    data: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
  }

  export type RefundUpdateManyWithWhereWithoutPaymentInput = {
    where: RefundScalarWhereInput
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyWithoutPaymentInput>
  }

  export type RefundScalarWhereInput = {
    AND?: RefundScalarWhereInput | RefundScalarWhereInput[]
    OR?: RefundScalarWhereInput[]
    NOT?: RefundScalarWhereInput | RefundScalarWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Refund"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"Refund"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFilter<"Refund"> | $Enums.PaymentProvider
    providerRefundId?: StringNullableFilter<"Refund"> | string | null
    providerResponse?: JsonNullableFilter<"Refund">
    reason?: StringNullableFilter<"Refund"> | string | null
    metadata?: JsonNullableFilter<"Refund">
    idempotencyKey?: StringNullableFilter<"Refund"> | string | null
    errorMessage?: StringNullableFilter<"Refund"> | string | null
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
  }

  export type PaymentEventUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    update: XOR<PaymentEventUpdateWithoutPaymentInput, PaymentEventUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentEventUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    data: XOR<PaymentEventUpdateWithoutPaymentInput, PaymentEventUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentEventUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentEventScalarWhereInput
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentEventScalarWhereInput = {
    AND?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
    OR?: PaymentEventScalarWhereInput[]
    NOT?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
    id?: StringFilter<"PaymentEvent"> | string
    paymentId?: StringFilter<"PaymentEvent"> | string
    provider?: EnumPaymentProviderFilter<"PaymentEvent"> | $Enums.PaymentProvider
    eventType?: StringFilter<"PaymentEvent"> | string
    eventData?: JsonFilter<"PaymentEvent">
    processedAt?: DateTimeNullableFilter<"PaymentEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
  }

  export type PaymentCreateWithoutRefundsInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentEvents?: PaymentEventCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRefundsInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentEvents?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutRefundsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
  }

  export type PaymentUpsertWithoutRefundsInput = {
    update: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentEvents?: PaymentEventUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentEvents?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutPaymentEventsInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPaymentEventsInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    paymentMethod: $Enums.PaymentMethod
    providerTransactionId?: string | null
    providerPaymentMethodId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail: string
    customerPhone?: string | null
    customerName?: string | null
    customerId?: string | null
    redirectUrl?: string | null
    returnUrl?: string | null
    qrCode?: string | null
    instructions?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    expiresAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPaymentEventsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPaymentEventsInput, PaymentUncheckedCreateWithoutPaymentEventsInput>
  }

  export type PaymentUpsertWithoutPaymentEventsInput = {
    update: XOR<PaymentUpdateWithoutPaymentEventsInput, PaymentUncheckedUpdateWithoutPaymentEventsInput>
    create: XOR<PaymentCreateWithoutPaymentEventsInput, PaymentUncheckedCreateWithoutPaymentEventsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutPaymentEventsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutPaymentEventsInput, PaymentUncheckedUpdateWithoutPaymentEventsInput>
  }

  export type PaymentUpdateWithoutPaymentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPaymentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerPaymentMethodId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type RefundCreateManyPaymentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider
    providerRefundId?: string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: string | null
    errorMessage?: string | null
    processedAt?: Date | string | null
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentEventCreateManyPaymentInput = {
    id?: string
    provider: $Enums.PaymentProvider
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    processedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RefundUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    providerResponse?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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