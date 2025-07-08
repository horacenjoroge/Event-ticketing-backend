
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
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model SagaExecution
 * 
 */
export type SagaExecution = $Result.DefaultSelection<Prisma.$SagaExecutionPayload>
/**
 * Model SagaStep
 * 
 */
export type SagaStep = $Result.DefaultSelection<Prisma.$SagaStepPayload>
/**
 * Model OrderEvent
 * 
 */
export type OrderEvent = $Result.DefaultSelection<Prisma.$OrderEventPayload>
/**
 * Model CompensationLog
 * 
 */
export type CompensationLog = $Result.DefaultSelection<Prisma.$CompensationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const OrderItemType: {
  TICKET: 'TICKET',
  MERCHANDISE: 'MERCHANDISE',
  SERVICE: 'SERVICE'
};

export type OrderItemType = (typeof OrderItemType)[keyof typeof OrderItemType]


export const SagaStatus: {
  STARTED: 'STARTED',
  COMPENSATING: 'COMPENSATING',
  COMPENSATED: 'COMPENSATED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type SagaStatus = (typeof SagaStatus)[keyof typeof SagaStatus]


export const SagaStepStatus: {
  PENDING: 'PENDING',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  COMPENSATED: 'COMPENSATED'
};

export type SagaStepStatus = (typeof SagaStepStatus)[keyof typeof SagaStepStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type OrderItemType = $Enums.OrderItemType

export const OrderItemType: typeof $Enums.OrderItemType

export type SagaStatus = $Enums.SagaStatus

export const SagaStatus: typeof $Enums.SagaStatus

export type SagaStepStatus = $Enums.SagaStepStatus

export const SagaStepStatus: typeof $Enums.SagaStepStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
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
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
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
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sagaExecution`: Exposes CRUD operations for the **SagaExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SagaExecutions
    * const sagaExecutions = await prisma.sagaExecution.findMany()
    * ```
    */
  get sagaExecution(): Prisma.SagaExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sagaStep`: Exposes CRUD operations for the **SagaStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SagaSteps
    * const sagaSteps = await prisma.sagaStep.findMany()
    * ```
    */
  get sagaStep(): Prisma.SagaStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderEvent`: Exposes CRUD operations for the **OrderEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderEvents
    * const orderEvents = await prisma.orderEvent.findMany()
    * ```
    */
  get orderEvent(): Prisma.OrderEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compensationLog`: Exposes CRUD operations for the **CompensationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompensationLogs
    * const compensationLogs = await prisma.compensationLog.findMany()
    * ```
    */
  get compensationLog(): Prisma.CompensationLogDelegate<ExtArgs, ClientOptions>;
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
    Order: 'Order',
    OrderItem: 'OrderItem',
    Cart: 'Cart',
    CartItem: 'CartItem',
    SagaExecution: 'SagaExecution',
    SagaStep: 'SagaStep',
    OrderEvent: 'OrderEvent',
    CompensationLog: 'CompensationLog'
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
      modelProps: "order" | "orderItem" | "cart" | "cartItem" | "sagaExecution" | "sagaStep" | "orderEvent" | "compensationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      SagaExecution: {
        payload: Prisma.$SagaExecutionPayload<ExtArgs>
        fields: Prisma.SagaExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SagaExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SagaExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          findFirst: {
            args: Prisma.SagaExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SagaExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          findMany: {
            args: Prisma.SagaExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>[]
          }
          create: {
            args: Prisma.SagaExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          createMany: {
            args: Prisma.SagaExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SagaExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>[]
          }
          delete: {
            args: Prisma.SagaExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          update: {
            args: Prisma.SagaExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          deleteMany: {
            args: Prisma.SagaExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SagaExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SagaExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>[]
          }
          upsert: {
            args: Prisma.SagaExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaExecutionPayload>
          }
          aggregate: {
            args: Prisma.SagaExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSagaExecution>
          }
          groupBy: {
            args: Prisma.SagaExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SagaExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SagaExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<SagaExecutionCountAggregateOutputType> | number
          }
        }
      }
      SagaStep: {
        payload: Prisma.$SagaStepPayload<ExtArgs>
        fields: Prisma.SagaStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SagaStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SagaStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          findFirst: {
            args: Prisma.SagaStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SagaStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          findMany: {
            args: Prisma.SagaStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>[]
          }
          create: {
            args: Prisma.SagaStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          createMany: {
            args: Prisma.SagaStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SagaStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>[]
          }
          delete: {
            args: Prisma.SagaStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          update: {
            args: Prisma.SagaStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          deleteMany: {
            args: Prisma.SagaStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SagaStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SagaStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>[]
          }
          upsert: {
            args: Prisma.SagaStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SagaStepPayload>
          }
          aggregate: {
            args: Prisma.SagaStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSagaStep>
          }
          groupBy: {
            args: Prisma.SagaStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<SagaStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.SagaStepCountArgs<ExtArgs>
            result: $Utils.Optional<SagaStepCountAggregateOutputType> | number
          }
        }
      }
      OrderEvent: {
        payload: Prisma.$OrderEventPayload<ExtArgs>
        fields: Prisma.OrderEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          findFirst: {
            args: Prisma.OrderEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          findMany: {
            args: Prisma.OrderEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          create: {
            args: Prisma.OrderEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          createMany: {
            args: Prisma.OrderEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          delete: {
            args: Prisma.OrderEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          update: {
            args: Prisma.OrderEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          deleteMany: {
            args: Prisma.OrderEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>[]
          }
          upsert: {
            args: Prisma.OrderEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderEventPayload>
          }
          aggregate: {
            args: Prisma.OrderEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderEvent>
          }
          groupBy: {
            args: Prisma.OrderEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderEventCountArgs<ExtArgs>
            result: $Utils.Optional<OrderEventCountAggregateOutputType> | number
          }
        }
      }
      CompensationLog: {
        payload: Prisma.$CompensationLogPayload<ExtArgs>
        fields: Prisma.CompensationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompensationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompensationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          findFirst: {
            args: Prisma.CompensationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompensationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          findMany: {
            args: Prisma.CompensationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>[]
          }
          create: {
            args: Prisma.CompensationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          createMany: {
            args: Prisma.CompensationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompensationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>[]
          }
          delete: {
            args: Prisma.CompensationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          update: {
            args: Prisma.CompensationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          deleteMany: {
            args: Prisma.CompensationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompensationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompensationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>[]
          }
          upsert: {
            args: Prisma.CompensationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationLogPayload>
          }
          aggregate: {
            args: Prisma.CompensationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompensationLog>
          }
          groupBy: {
            args: Prisma.CompensationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompensationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompensationLogCountArgs<ExtArgs>
            result: $Utils.Optional<CompensationLogCountAggregateOutputType> | number
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
    order?: OrderOmit
    orderItem?: OrderItemOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    sagaExecution?: SagaExecutionOmit
    sagaStep?: SagaStepOmit
    orderEvent?: OrderEventOmit
    compensationLog?: CompensationLogOmit
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
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
    cartItems: number
    orderEvents: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
    cartItems?: boolean | OrderCountOutputTypeCountCartItemsArgs
    orderEvents?: boolean | OrderCountOutputTypeCountOrderEventsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderEventWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type SagaExecutionCountOutputType
   */

  export type SagaExecutionCountOutputType = {
    steps: number
  }

  export type SagaExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | SagaExecutionCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * SagaExecutionCountOutputType without action
   */
  export type SagaExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecutionCountOutputType
     */
    select?: SagaExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SagaExecutionCountOutputType without action
   */
  export type SagaExecutionCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SagaStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    totalAmount: Decimal | null
    currency: string | null
    status: $Enums.OrderStatus | null
    paymentId: string | null
    paymentStatus: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    totalAmount: Decimal | null
    currency: string | null
    status: $Enums.OrderStatus | null
    paymentId: string | null
    paymentStatus: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    totalAmount: number
    currency: number
    status: number
    paymentId: number
    paymentStatus: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    totalAmount?: true
    currency?: true
    status?: true
    paymentId?: true
    paymentStatus?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    totalAmount?: true
    currency?: true
    status?: true
    paymentId?: true
    paymentStatus?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    totalAmount?: true
    currency?: true
    status?: true
    paymentId?: true
    paymentStatus?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    totalAmount: Decimal
    currency: string
    status: $Enums.OrderStatus
    paymentId: string | null
    paymentStatus: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    items?: boolean | Order$itemsArgs<ExtArgs>
    cartItems?: boolean | Order$cartItemsArgs<ExtArgs>
    sagaExecution?: boolean | Order$sagaExecutionArgs<ExtArgs>
    orderEvents?: boolean | Order$orderEventsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    paymentStatus?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "totalAmount" | "currency" | "status" | "paymentId" | "paymentStatus" | "expiresAt" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Order$itemsArgs<ExtArgs>
    cartItems?: boolean | Order$cartItemsArgs<ExtArgs>
    sagaExecution?: boolean | Order$sagaExecutionArgs<ExtArgs>
    orderEvents?: boolean | Order$orderEventsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
      sagaExecution: Prisma.$SagaExecutionPayload<ExtArgs> | null
      orderEvents: Prisma.$OrderEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      totalAmount: Prisma.Decimal
      currency: string
      status: $Enums.OrderStatus
      paymentId: string | null
      paymentStatus: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends Order$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sagaExecution<T extends Order$sagaExecutionArgs<ExtArgs> = {}>(args?: Subset<T, Order$sagaExecutionArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderEvents<T extends Order$orderEventsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly eventId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly paymentId: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly expiresAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly completedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.cartItems
   */
  export type Order$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Order.sagaExecution
   */
  export type Order$sagaExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    where?: SagaExecutionWhereInput
  }

  /**
   * Order.orderEvents
   */
  export type Order$orderEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    where?: OrderEventWhereInput
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    cursor?: OrderEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemType: $Enums.OrderItemType | null
    itemId: string | null
    itemName: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemType: $Enums.OrderItemType | null
    itemId: string | null
    itemName: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    itemType: number
    itemId: number
    itemName: number
    quantity: number
    unitPrice: number
    totalPrice: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    metadata: JsonValue | null
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    metadata?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "itemType" | "itemId" | "itemName" | "quantity" | "unitPrice" | "totalPrice" | "metadata" | "createdAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      itemType: $Enums.OrderItemType
      itemId: string
      itemName: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly itemType: FieldRef<"OrderItem", 'OrderItemType'>
    readonly itemId: FieldRef<"OrderItem", 'String'>
    readonly itemName: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly metadata: FieldRef<"OrderItem", 'Json'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly expiresAt: FieldRef<"Cart", 'DateTime'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    orderId: string | null
    userId: string | null
    itemType: $Enums.OrderItemType | null
    itemId: string | null
    itemName: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    reservationId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    orderId: string | null
    userId: string | null
    itemType: $Enums.OrderItemType | null
    itemId: string | null
    itemName: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    reservationId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    orderId: number
    userId: number
    itemType: number
    itemId: number
    itemName: number
    quantity: number
    unitPrice: number
    totalPrice: number
    reservationId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    orderId?: true
    userId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    reservationId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    orderId?: true
    userId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    reservationId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    orderId?: true
    userId?: true
    itemType?: true
    itemId?: true
    itemName?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    reservationId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    cartId: string | null
    orderId: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    reservationId: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    orderId?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    reservationId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    orderId?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    reservationId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    orderId?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    reservationId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    orderId?: boolean
    userId?: boolean
    itemType?: boolean
    itemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    reservationId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "orderId" | "userId" | "itemType" | "itemId" | "itemName" | "quantity" | "unitPrice" | "totalPrice" | "reservationId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartItem$cartArgs<ExtArgs>
    order?: boolean | CartItem$orderArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string | null
      orderId: string | null
      userId: string
      itemType: $Enums.OrderItemType
      itemId: string
      itemName: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      reservationId: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartItem$cartArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends CartItem$orderArgs<ExtArgs> = {}>(args?: Subset<T, CartItem$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly cartId: FieldRef<"CartItem", 'String'>
    readonly orderId: FieldRef<"CartItem", 'String'>
    readonly userId: FieldRef<"CartItem", 'String'>
    readonly itemType: FieldRef<"CartItem", 'OrderItemType'>
    readonly itemId: FieldRef<"CartItem", 'String'>
    readonly itemName: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly unitPrice: FieldRef<"CartItem", 'Decimal'>
    readonly totalPrice: FieldRef<"CartItem", 'Decimal'>
    readonly reservationId: FieldRef<"CartItem", 'String'>
    readonly expiresAt: FieldRef<"CartItem", 'DateTime'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem.cart
   */
  export type CartItem$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
  }

  /**
   * CartItem.order
   */
  export type CartItem$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model SagaExecution
   */

  export type AggregateSagaExecution = {
    _count: SagaExecutionCountAggregateOutputType | null
    _avg: SagaExecutionAvgAggregateOutputType | null
    _sum: SagaExecutionSumAggregateOutputType | null
    _min: SagaExecutionMinAggregateOutputType | null
    _max: SagaExecutionMaxAggregateOutputType | null
  }

  export type SagaExecutionAvgAggregateOutputType = {
    currentStep: number | null
    totalSteps: number | null
  }

  export type SagaExecutionSumAggregateOutputType = {
    currentStep: number | null
    totalSteps: number | null
  }

  export type SagaExecutionMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    sagaType: string | null
    status: $Enums.SagaStatus | null
    currentStep: number | null
    totalSteps: number | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
  }

  export type SagaExecutionMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    sagaType: string | null
    status: $Enums.SagaStatus | null
    currentStep: number | null
    totalSteps: number | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
  }

  export type SagaExecutionCountAggregateOutputType = {
    id: number
    orderId: number
    sagaType: number
    status: number
    currentStep: number
    totalSteps: number
    startedAt: number
    completedAt: number
    failedAt: number
    compensatedAt: number
    errorMessage: number
    compensationData: number
    _all: number
  }


  export type SagaExecutionAvgAggregateInputType = {
    currentStep?: true
    totalSteps?: true
  }

  export type SagaExecutionSumAggregateInputType = {
    currentStep?: true
    totalSteps?: true
  }

  export type SagaExecutionMinAggregateInputType = {
    id?: true
    orderId?: true
    sagaType?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
  }

  export type SagaExecutionMaxAggregateInputType = {
    id?: true
    orderId?: true
    sagaType?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
  }

  export type SagaExecutionCountAggregateInputType = {
    id?: true
    orderId?: true
    sagaType?: true
    status?: true
    currentStep?: true
    totalSteps?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
    compensationData?: true
    _all?: true
  }

  export type SagaExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SagaExecution to aggregate.
     */
    where?: SagaExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaExecutions to fetch.
     */
    orderBy?: SagaExecutionOrderByWithRelationInput | SagaExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SagaExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SagaExecutions
    **/
    _count?: true | SagaExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SagaExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SagaExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SagaExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SagaExecutionMaxAggregateInputType
  }

  export type GetSagaExecutionAggregateType<T extends SagaExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateSagaExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSagaExecution[P]>
      : GetScalarType<T[P], AggregateSagaExecution[P]>
  }




  export type SagaExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SagaExecutionWhereInput
    orderBy?: SagaExecutionOrderByWithAggregationInput | SagaExecutionOrderByWithAggregationInput[]
    by: SagaExecutionScalarFieldEnum[] | SagaExecutionScalarFieldEnum
    having?: SagaExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SagaExecutionCountAggregateInputType | true
    _avg?: SagaExecutionAvgAggregateInputType
    _sum?: SagaExecutionSumAggregateInputType
    _min?: SagaExecutionMinAggregateInputType
    _max?: SagaExecutionMaxAggregateInputType
  }

  export type SagaExecutionGroupByOutputType = {
    id: string
    orderId: string
    sagaType: string
    status: $Enums.SagaStatus
    currentStep: number
    totalSteps: number
    startedAt: Date
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
    compensationData: JsonValue | null
    _count: SagaExecutionCountAggregateOutputType | null
    _avg: SagaExecutionAvgAggregateOutputType | null
    _sum: SagaExecutionSumAggregateOutputType | null
    _min: SagaExecutionMinAggregateOutputType | null
    _max: SagaExecutionMaxAggregateOutputType | null
  }

  type GetSagaExecutionGroupByPayload<T extends SagaExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SagaExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SagaExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SagaExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], SagaExecutionGroupByOutputType[P]>
        }
      >
    >


  export type SagaExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    sagaType?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    compensationData?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    steps?: boolean | SagaExecution$stepsArgs<ExtArgs>
    _count?: boolean | SagaExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaExecution"]>

  export type SagaExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    sagaType?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    compensationData?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaExecution"]>

  export type SagaExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    sagaType?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    compensationData?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaExecution"]>

  export type SagaExecutionSelectScalar = {
    id?: boolean
    orderId?: boolean
    sagaType?: boolean
    status?: boolean
    currentStep?: boolean
    totalSteps?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    compensationData?: boolean
  }

  export type SagaExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "sagaType" | "status" | "currentStep" | "totalSteps" | "startedAt" | "completedAt" | "failedAt" | "compensatedAt" | "errorMessage" | "compensationData", ExtArgs["result"]["sagaExecution"]>
  export type SagaExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    steps?: boolean | SagaExecution$stepsArgs<ExtArgs>
    _count?: boolean | SagaExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SagaExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type SagaExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $SagaExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SagaExecution"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      steps: Prisma.$SagaStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      sagaType: string
      status: $Enums.SagaStatus
      currentStep: number
      totalSteps: number
      startedAt: Date
      completedAt: Date | null
      failedAt: Date | null
      compensatedAt: Date | null
      errorMessage: string | null
      compensationData: Prisma.JsonValue | null
    }, ExtArgs["result"]["sagaExecution"]>
    composites: {}
  }

  type SagaExecutionGetPayload<S extends boolean | null | undefined | SagaExecutionDefaultArgs> = $Result.GetResult<Prisma.$SagaExecutionPayload, S>

  type SagaExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SagaExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SagaExecutionCountAggregateInputType | true
    }

  export interface SagaExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SagaExecution'], meta: { name: 'SagaExecution' } }
    /**
     * Find zero or one SagaExecution that matches the filter.
     * @param {SagaExecutionFindUniqueArgs} args - Arguments to find a SagaExecution
     * @example
     * // Get one SagaExecution
     * const sagaExecution = await prisma.sagaExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SagaExecutionFindUniqueArgs>(args: SelectSubset<T, SagaExecutionFindUniqueArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SagaExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SagaExecutionFindUniqueOrThrowArgs} args - Arguments to find a SagaExecution
     * @example
     * // Get one SagaExecution
     * const sagaExecution = await prisma.sagaExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SagaExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, SagaExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SagaExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionFindFirstArgs} args - Arguments to find a SagaExecution
     * @example
     * // Get one SagaExecution
     * const sagaExecution = await prisma.sagaExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SagaExecutionFindFirstArgs>(args?: SelectSubset<T, SagaExecutionFindFirstArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SagaExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionFindFirstOrThrowArgs} args - Arguments to find a SagaExecution
     * @example
     * // Get one SagaExecution
     * const sagaExecution = await prisma.sagaExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SagaExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, SagaExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SagaExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SagaExecutions
     * const sagaExecutions = await prisma.sagaExecution.findMany()
     * 
     * // Get first 10 SagaExecutions
     * const sagaExecutions = await prisma.sagaExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sagaExecutionWithIdOnly = await prisma.sagaExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SagaExecutionFindManyArgs>(args?: SelectSubset<T, SagaExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SagaExecution.
     * @param {SagaExecutionCreateArgs} args - Arguments to create a SagaExecution.
     * @example
     * // Create one SagaExecution
     * const SagaExecution = await prisma.sagaExecution.create({
     *   data: {
     *     // ... data to create a SagaExecution
     *   }
     * })
     * 
     */
    create<T extends SagaExecutionCreateArgs>(args: SelectSubset<T, SagaExecutionCreateArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SagaExecutions.
     * @param {SagaExecutionCreateManyArgs} args - Arguments to create many SagaExecutions.
     * @example
     * // Create many SagaExecutions
     * const sagaExecution = await prisma.sagaExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SagaExecutionCreateManyArgs>(args?: SelectSubset<T, SagaExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SagaExecutions and returns the data saved in the database.
     * @param {SagaExecutionCreateManyAndReturnArgs} args - Arguments to create many SagaExecutions.
     * @example
     * // Create many SagaExecutions
     * const sagaExecution = await prisma.sagaExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SagaExecutions and only return the `id`
     * const sagaExecutionWithIdOnly = await prisma.sagaExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SagaExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, SagaExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SagaExecution.
     * @param {SagaExecutionDeleteArgs} args - Arguments to delete one SagaExecution.
     * @example
     * // Delete one SagaExecution
     * const SagaExecution = await prisma.sagaExecution.delete({
     *   where: {
     *     // ... filter to delete one SagaExecution
     *   }
     * })
     * 
     */
    delete<T extends SagaExecutionDeleteArgs>(args: SelectSubset<T, SagaExecutionDeleteArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SagaExecution.
     * @param {SagaExecutionUpdateArgs} args - Arguments to update one SagaExecution.
     * @example
     * // Update one SagaExecution
     * const sagaExecution = await prisma.sagaExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SagaExecutionUpdateArgs>(args: SelectSubset<T, SagaExecutionUpdateArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SagaExecutions.
     * @param {SagaExecutionDeleteManyArgs} args - Arguments to filter SagaExecutions to delete.
     * @example
     * // Delete a few SagaExecutions
     * const { count } = await prisma.sagaExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SagaExecutionDeleteManyArgs>(args?: SelectSubset<T, SagaExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SagaExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SagaExecutions
     * const sagaExecution = await prisma.sagaExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SagaExecutionUpdateManyArgs>(args: SelectSubset<T, SagaExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SagaExecutions and returns the data updated in the database.
     * @param {SagaExecutionUpdateManyAndReturnArgs} args - Arguments to update many SagaExecutions.
     * @example
     * // Update many SagaExecutions
     * const sagaExecution = await prisma.sagaExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SagaExecutions and only return the `id`
     * const sagaExecutionWithIdOnly = await prisma.sagaExecution.updateManyAndReturn({
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
    updateManyAndReturn<T extends SagaExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, SagaExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SagaExecution.
     * @param {SagaExecutionUpsertArgs} args - Arguments to update or create a SagaExecution.
     * @example
     * // Update or create a SagaExecution
     * const sagaExecution = await prisma.sagaExecution.upsert({
     *   create: {
     *     // ... data to create a SagaExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SagaExecution we want to update
     *   }
     * })
     */
    upsert<T extends SagaExecutionUpsertArgs>(args: SelectSubset<T, SagaExecutionUpsertArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SagaExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionCountArgs} args - Arguments to filter SagaExecutions to count.
     * @example
     * // Count the number of SagaExecutions
     * const count = await prisma.sagaExecution.count({
     *   where: {
     *     // ... the filter for the SagaExecutions we want to count
     *   }
     * })
    **/
    count<T extends SagaExecutionCountArgs>(
      args?: Subset<T, SagaExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SagaExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SagaExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SagaExecutionAggregateArgs>(args: Subset<T, SagaExecutionAggregateArgs>): Prisma.PrismaPromise<GetSagaExecutionAggregateType<T>>

    /**
     * Group by SagaExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaExecutionGroupByArgs} args - Group by arguments.
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
      T extends SagaExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SagaExecutionGroupByArgs['orderBy'] }
        : { orderBy?: SagaExecutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SagaExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSagaExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SagaExecution model
   */
  readonly fields: SagaExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SagaExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SagaExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends SagaExecution$stepsArgs<ExtArgs> = {}>(args?: Subset<T, SagaExecution$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SagaExecution model
   */
  interface SagaExecutionFieldRefs {
    readonly id: FieldRef<"SagaExecution", 'String'>
    readonly orderId: FieldRef<"SagaExecution", 'String'>
    readonly sagaType: FieldRef<"SagaExecution", 'String'>
    readonly status: FieldRef<"SagaExecution", 'SagaStatus'>
    readonly currentStep: FieldRef<"SagaExecution", 'Int'>
    readonly totalSteps: FieldRef<"SagaExecution", 'Int'>
    readonly startedAt: FieldRef<"SagaExecution", 'DateTime'>
    readonly completedAt: FieldRef<"SagaExecution", 'DateTime'>
    readonly failedAt: FieldRef<"SagaExecution", 'DateTime'>
    readonly compensatedAt: FieldRef<"SagaExecution", 'DateTime'>
    readonly errorMessage: FieldRef<"SagaExecution", 'String'>
    readonly compensationData: FieldRef<"SagaExecution", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SagaExecution findUnique
   */
  export type SagaExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter, which SagaExecution to fetch.
     */
    where: SagaExecutionWhereUniqueInput
  }

  /**
   * SagaExecution findUniqueOrThrow
   */
  export type SagaExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter, which SagaExecution to fetch.
     */
    where: SagaExecutionWhereUniqueInput
  }

  /**
   * SagaExecution findFirst
   */
  export type SagaExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter, which SagaExecution to fetch.
     */
    where?: SagaExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaExecutions to fetch.
     */
    orderBy?: SagaExecutionOrderByWithRelationInput | SagaExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SagaExecutions.
     */
    cursor?: SagaExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SagaExecutions.
     */
    distinct?: SagaExecutionScalarFieldEnum | SagaExecutionScalarFieldEnum[]
  }

  /**
   * SagaExecution findFirstOrThrow
   */
  export type SagaExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter, which SagaExecution to fetch.
     */
    where?: SagaExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaExecutions to fetch.
     */
    orderBy?: SagaExecutionOrderByWithRelationInput | SagaExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SagaExecutions.
     */
    cursor?: SagaExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SagaExecutions.
     */
    distinct?: SagaExecutionScalarFieldEnum | SagaExecutionScalarFieldEnum[]
  }

  /**
   * SagaExecution findMany
   */
  export type SagaExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter, which SagaExecutions to fetch.
     */
    where?: SagaExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaExecutions to fetch.
     */
    orderBy?: SagaExecutionOrderByWithRelationInput | SagaExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SagaExecutions.
     */
    cursor?: SagaExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaExecutions.
     */
    skip?: number
    distinct?: SagaExecutionScalarFieldEnum | SagaExecutionScalarFieldEnum[]
  }

  /**
   * SagaExecution create
   */
  export type SagaExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a SagaExecution.
     */
    data: XOR<SagaExecutionCreateInput, SagaExecutionUncheckedCreateInput>
  }

  /**
   * SagaExecution createMany
   */
  export type SagaExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SagaExecutions.
     */
    data: SagaExecutionCreateManyInput | SagaExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SagaExecution createManyAndReturn
   */
  export type SagaExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many SagaExecutions.
     */
    data: SagaExecutionCreateManyInput | SagaExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SagaExecution update
   */
  export type SagaExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a SagaExecution.
     */
    data: XOR<SagaExecutionUpdateInput, SagaExecutionUncheckedUpdateInput>
    /**
     * Choose, which SagaExecution to update.
     */
    where: SagaExecutionWhereUniqueInput
  }

  /**
   * SagaExecution updateMany
   */
  export type SagaExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SagaExecutions.
     */
    data: XOR<SagaExecutionUpdateManyMutationInput, SagaExecutionUncheckedUpdateManyInput>
    /**
     * Filter which SagaExecutions to update
     */
    where?: SagaExecutionWhereInput
    /**
     * Limit how many SagaExecutions to update.
     */
    limit?: number
  }

  /**
   * SagaExecution updateManyAndReturn
   */
  export type SagaExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * The data used to update SagaExecutions.
     */
    data: XOR<SagaExecutionUpdateManyMutationInput, SagaExecutionUncheckedUpdateManyInput>
    /**
     * Filter which SagaExecutions to update
     */
    where?: SagaExecutionWhereInput
    /**
     * Limit how many SagaExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SagaExecution upsert
   */
  export type SagaExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the SagaExecution to update in case it exists.
     */
    where: SagaExecutionWhereUniqueInput
    /**
     * In case the SagaExecution found by the `where` argument doesn't exist, create a new SagaExecution with this data.
     */
    create: XOR<SagaExecutionCreateInput, SagaExecutionUncheckedCreateInput>
    /**
     * In case the SagaExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SagaExecutionUpdateInput, SagaExecutionUncheckedUpdateInput>
  }

  /**
   * SagaExecution delete
   */
  export type SagaExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
    /**
     * Filter which SagaExecution to delete.
     */
    where: SagaExecutionWhereUniqueInput
  }

  /**
   * SagaExecution deleteMany
   */
  export type SagaExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SagaExecutions to delete
     */
    where?: SagaExecutionWhereInput
    /**
     * Limit how many SagaExecutions to delete.
     */
    limit?: number
  }

  /**
   * SagaExecution.steps
   */
  export type SagaExecution$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    where?: SagaStepWhereInput
    orderBy?: SagaStepOrderByWithRelationInput | SagaStepOrderByWithRelationInput[]
    cursor?: SagaStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SagaStepScalarFieldEnum | SagaStepScalarFieldEnum[]
  }

  /**
   * SagaExecution without action
   */
  export type SagaExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaExecution
     */
    select?: SagaExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaExecution
     */
    omit?: SagaExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaExecutionInclude<ExtArgs> | null
  }


  /**
   * Model SagaStep
   */

  export type AggregateSagaStep = {
    _count: SagaStepCountAggregateOutputType | null
    _avg: SagaStepAvgAggregateOutputType | null
    _sum: SagaStepSumAggregateOutputType | null
    _min: SagaStepMinAggregateOutputType | null
    _max: SagaStepMaxAggregateOutputType | null
  }

  export type SagaStepAvgAggregateOutputType = {
    stepNumber: number | null
  }

  export type SagaStepSumAggregateOutputType = {
    stepNumber: number | null
  }

  export type SagaStepMinAggregateOutputType = {
    id: string | null
    sagaExecutionId: string | null
    stepNumber: number | null
    stepName: string | null
    status: $Enums.SagaStepStatus | null
    serviceType: string | null
    actionType: string | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
  }

  export type SagaStepMaxAggregateOutputType = {
    id: string | null
    sagaExecutionId: string | null
    stepNumber: number | null
    stepName: string | null
    status: $Enums.SagaStepStatus | null
    serviceType: string | null
    actionType: string | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
  }

  export type SagaStepCountAggregateOutputType = {
    id: number
    sagaExecutionId: number
    stepNumber: number
    stepName: number
    status: number
    serviceType: number
    actionType: number
    requestData: number
    responseData: number
    compensationData: number
    startedAt: number
    completedAt: number
    failedAt: number
    compensatedAt: number
    errorMessage: number
    _all: number
  }


  export type SagaStepAvgAggregateInputType = {
    stepNumber?: true
  }

  export type SagaStepSumAggregateInputType = {
    stepNumber?: true
  }

  export type SagaStepMinAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepNumber?: true
    stepName?: true
    status?: true
    serviceType?: true
    actionType?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
  }

  export type SagaStepMaxAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepNumber?: true
    stepName?: true
    status?: true
    serviceType?: true
    actionType?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
  }

  export type SagaStepCountAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepNumber?: true
    stepName?: true
    status?: true
    serviceType?: true
    actionType?: true
    requestData?: true
    responseData?: true
    compensationData?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    compensatedAt?: true
    errorMessage?: true
    _all?: true
  }

  export type SagaStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SagaStep to aggregate.
     */
    where?: SagaStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaSteps to fetch.
     */
    orderBy?: SagaStepOrderByWithRelationInput | SagaStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SagaStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SagaSteps
    **/
    _count?: true | SagaStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SagaStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SagaStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SagaStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SagaStepMaxAggregateInputType
  }

  export type GetSagaStepAggregateType<T extends SagaStepAggregateArgs> = {
        [P in keyof T & keyof AggregateSagaStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSagaStep[P]>
      : GetScalarType<T[P], AggregateSagaStep[P]>
  }




  export type SagaStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SagaStepWhereInput
    orderBy?: SagaStepOrderByWithAggregationInput | SagaStepOrderByWithAggregationInput[]
    by: SagaStepScalarFieldEnum[] | SagaStepScalarFieldEnum
    having?: SagaStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SagaStepCountAggregateInputType | true
    _avg?: SagaStepAvgAggregateInputType
    _sum?: SagaStepSumAggregateInputType
    _min?: SagaStepMinAggregateInputType
    _max?: SagaStepMaxAggregateInputType
  }

  export type SagaStepGroupByOutputType = {
    id: string
    sagaExecutionId: string
    stepNumber: number
    stepName: string
    status: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData: JsonValue | null
    responseData: JsonValue | null
    compensationData: JsonValue | null
    startedAt: Date
    completedAt: Date | null
    failedAt: Date | null
    compensatedAt: Date | null
    errorMessage: string | null
    _count: SagaStepCountAggregateOutputType | null
    _avg: SagaStepAvgAggregateOutputType | null
    _sum: SagaStepSumAggregateOutputType | null
    _min: SagaStepMinAggregateOutputType | null
    _max: SagaStepMaxAggregateOutputType | null
  }

  type GetSagaStepGroupByPayload<T extends SagaStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SagaStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SagaStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SagaStepGroupByOutputType[P]>
            : GetScalarType<T[P], SagaStepGroupByOutputType[P]>
        }
      >
    >


  export type SagaStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepNumber?: boolean
    stepName?: boolean
    status?: boolean
    serviceType?: boolean
    actionType?: boolean
    requestData?: boolean
    responseData?: boolean
    compensationData?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaStep"]>

  export type SagaStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepNumber?: boolean
    stepName?: boolean
    status?: boolean
    serviceType?: boolean
    actionType?: boolean
    requestData?: boolean
    responseData?: boolean
    compensationData?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaStep"]>

  export type SagaStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepNumber?: boolean
    stepName?: boolean
    status?: boolean
    serviceType?: boolean
    actionType?: boolean
    requestData?: boolean
    responseData?: boolean
    compensationData?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sagaStep"]>

  export type SagaStepSelectScalar = {
    id?: boolean
    sagaExecutionId?: boolean
    stepNumber?: boolean
    stepName?: boolean
    status?: boolean
    serviceType?: boolean
    actionType?: boolean
    requestData?: boolean
    responseData?: boolean
    compensationData?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    compensatedAt?: boolean
    errorMessage?: boolean
  }

  export type SagaStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sagaExecutionId" | "stepNumber" | "stepName" | "status" | "serviceType" | "actionType" | "requestData" | "responseData" | "compensationData" | "startedAt" | "completedAt" | "failedAt" | "compensatedAt" | "errorMessage", ExtArgs["result"]["sagaStep"]>
  export type SagaStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }
  export type SagaStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }
  export type SagaStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sagaExecution?: boolean | SagaExecutionDefaultArgs<ExtArgs>
  }

  export type $SagaStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SagaStep"
    objects: {
      sagaExecution: Prisma.$SagaExecutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sagaExecutionId: string
      stepNumber: number
      stepName: string
      status: $Enums.SagaStepStatus
      serviceType: string
      actionType: string
      requestData: Prisma.JsonValue | null
      responseData: Prisma.JsonValue | null
      compensationData: Prisma.JsonValue | null
      startedAt: Date
      completedAt: Date | null
      failedAt: Date | null
      compensatedAt: Date | null
      errorMessage: string | null
    }, ExtArgs["result"]["sagaStep"]>
    composites: {}
  }

  type SagaStepGetPayload<S extends boolean | null | undefined | SagaStepDefaultArgs> = $Result.GetResult<Prisma.$SagaStepPayload, S>

  type SagaStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SagaStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SagaStepCountAggregateInputType | true
    }

  export interface SagaStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SagaStep'], meta: { name: 'SagaStep' } }
    /**
     * Find zero or one SagaStep that matches the filter.
     * @param {SagaStepFindUniqueArgs} args - Arguments to find a SagaStep
     * @example
     * // Get one SagaStep
     * const sagaStep = await prisma.sagaStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SagaStepFindUniqueArgs>(args: SelectSubset<T, SagaStepFindUniqueArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SagaStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SagaStepFindUniqueOrThrowArgs} args - Arguments to find a SagaStep
     * @example
     * // Get one SagaStep
     * const sagaStep = await prisma.sagaStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SagaStepFindUniqueOrThrowArgs>(args: SelectSubset<T, SagaStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SagaStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepFindFirstArgs} args - Arguments to find a SagaStep
     * @example
     * // Get one SagaStep
     * const sagaStep = await prisma.sagaStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SagaStepFindFirstArgs>(args?: SelectSubset<T, SagaStepFindFirstArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SagaStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepFindFirstOrThrowArgs} args - Arguments to find a SagaStep
     * @example
     * // Get one SagaStep
     * const sagaStep = await prisma.sagaStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SagaStepFindFirstOrThrowArgs>(args?: SelectSubset<T, SagaStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SagaSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SagaSteps
     * const sagaSteps = await prisma.sagaStep.findMany()
     * 
     * // Get first 10 SagaSteps
     * const sagaSteps = await prisma.sagaStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sagaStepWithIdOnly = await prisma.sagaStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SagaStepFindManyArgs>(args?: SelectSubset<T, SagaStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SagaStep.
     * @param {SagaStepCreateArgs} args - Arguments to create a SagaStep.
     * @example
     * // Create one SagaStep
     * const SagaStep = await prisma.sagaStep.create({
     *   data: {
     *     // ... data to create a SagaStep
     *   }
     * })
     * 
     */
    create<T extends SagaStepCreateArgs>(args: SelectSubset<T, SagaStepCreateArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SagaSteps.
     * @param {SagaStepCreateManyArgs} args - Arguments to create many SagaSteps.
     * @example
     * // Create many SagaSteps
     * const sagaStep = await prisma.sagaStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SagaStepCreateManyArgs>(args?: SelectSubset<T, SagaStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SagaSteps and returns the data saved in the database.
     * @param {SagaStepCreateManyAndReturnArgs} args - Arguments to create many SagaSteps.
     * @example
     * // Create many SagaSteps
     * const sagaStep = await prisma.sagaStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SagaSteps and only return the `id`
     * const sagaStepWithIdOnly = await prisma.sagaStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SagaStepCreateManyAndReturnArgs>(args?: SelectSubset<T, SagaStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SagaStep.
     * @param {SagaStepDeleteArgs} args - Arguments to delete one SagaStep.
     * @example
     * // Delete one SagaStep
     * const SagaStep = await prisma.sagaStep.delete({
     *   where: {
     *     // ... filter to delete one SagaStep
     *   }
     * })
     * 
     */
    delete<T extends SagaStepDeleteArgs>(args: SelectSubset<T, SagaStepDeleteArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SagaStep.
     * @param {SagaStepUpdateArgs} args - Arguments to update one SagaStep.
     * @example
     * // Update one SagaStep
     * const sagaStep = await prisma.sagaStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SagaStepUpdateArgs>(args: SelectSubset<T, SagaStepUpdateArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SagaSteps.
     * @param {SagaStepDeleteManyArgs} args - Arguments to filter SagaSteps to delete.
     * @example
     * // Delete a few SagaSteps
     * const { count } = await prisma.sagaStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SagaStepDeleteManyArgs>(args?: SelectSubset<T, SagaStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SagaSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SagaSteps
     * const sagaStep = await prisma.sagaStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SagaStepUpdateManyArgs>(args: SelectSubset<T, SagaStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SagaSteps and returns the data updated in the database.
     * @param {SagaStepUpdateManyAndReturnArgs} args - Arguments to update many SagaSteps.
     * @example
     * // Update many SagaSteps
     * const sagaStep = await prisma.sagaStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SagaSteps and only return the `id`
     * const sagaStepWithIdOnly = await prisma.sagaStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends SagaStepUpdateManyAndReturnArgs>(args: SelectSubset<T, SagaStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SagaStep.
     * @param {SagaStepUpsertArgs} args - Arguments to update or create a SagaStep.
     * @example
     * // Update or create a SagaStep
     * const sagaStep = await prisma.sagaStep.upsert({
     *   create: {
     *     // ... data to create a SagaStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SagaStep we want to update
     *   }
     * })
     */
    upsert<T extends SagaStepUpsertArgs>(args: SelectSubset<T, SagaStepUpsertArgs<ExtArgs>>): Prisma__SagaStepClient<$Result.GetResult<Prisma.$SagaStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SagaSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepCountArgs} args - Arguments to filter SagaSteps to count.
     * @example
     * // Count the number of SagaSteps
     * const count = await prisma.sagaStep.count({
     *   where: {
     *     // ... the filter for the SagaSteps we want to count
     *   }
     * })
    **/
    count<T extends SagaStepCountArgs>(
      args?: Subset<T, SagaStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SagaStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SagaStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SagaStepAggregateArgs>(args: Subset<T, SagaStepAggregateArgs>): Prisma.PrismaPromise<GetSagaStepAggregateType<T>>

    /**
     * Group by SagaStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SagaStepGroupByArgs} args - Group by arguments.
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
      T extends SagaStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SagaStepGroupByArgs['orderBy'] }
        : { orderBy?: SagaStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SagaStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSagaStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SagaStep model
   */
  readonly fields: SagaStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SagaStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SagaStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sagaExecution<T extends SagaExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SagaExecutionDefaultArgs<ExtArgs>>): Prisma__SagaExecutionClient<$Result.GetResult<Prisma.$SagaExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SagaStep model
   */
  interface SagaStepFieldRefs {
    readonly id: FieldRef<"SagaStep", 'String'>
    readonly sagaExecutionId: FieldRef<"SagaStep", 'String'>
    readonly stepNumber: FieldRef<"SagaStep", 'Int'>
    readonly stepName: FieldRef<"SagaStep", 'String'>
    readonly status: FieldRef<"SagaStep", 'SagaStepStatus'>
    readonly serviceType: FieldRef<"SagaStep", 'String'>
    readonly actionType: FieldRef<"SagaStep", 'String'>
    readonly requestData: FieldRef<"SagaStep", 'Json'>
    readonly responseData: FieldRef<"SagaStep", 'Json'>
    readonly compensationData: FieldRef<"SagaStep", 'Json'>
    readonly startedAt: FieldRef<"SagaStep", 'DateTime'>
    readonly completedAt: FieldRef<"SagaStep", 'DateTime'>
    readonly failedAt: FieldRef<"SagaStep", 'DateTime'>
    readonly compensatedAt: FieldRef<"SagaStep", 'DateTime'>
    readonly errorMessage: FieldRef<"SagaStep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SagaStep findUnique
   */
  export type SagaStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter, which SagaStep to fetch.
     */
    where: SagaStepWhereUniqueInput
  }

  /**
   * SagaStep findUniqueOrThrow
   */
  export type SagaStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter, which SagaStep to fetch.
     */
    where: SagaStepWhereUniqueInput
  }

  /**
   * SagaStep findFirst
   */
  export type SagaStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter, which SagaStep to fetch.
     */
    where?: SagaStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaSteps to fetch.
     */
    orderBy?: SagaStepOrderByWithRelationInput | SagaStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SagaSteps.
     */
    cursor?: SagaStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SagaSteps.
     */
    distinct?: SagaStepScalarFieldEnum | SagaStepScalarFieldEnum[]
  }

  /**
   * SagaStep findFirstOrThrow
   */
  export type SagaStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter, which SagaStep to fetch.
     */
    where?: SagaStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaSteps to fetch.
     */
    orderBy?: SagaStepOrderByWithRelationInput | SagaStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SagaSteps.
     */
    cursor?: SagaStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SagaSteps.
     */
    distinct?: SagaStepScalarFieldEnum | SagaStepScalarFieldEnum[]
  }

  /**
   * SagaStep findMany
   */
  export type SagaStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter, which SagaSteps to fetch.
     */
    where?: SagaStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SagaSteps to fetch.
     */
    orderBy?: SagaStepOrderByWithRelationInput | SagaStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SagaSteps.
     */
    cursor?: SagaStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SagaSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SagaSteps.
     */
    skip?: number
    distinct?: SagaStepScalarFieldEnum | SagaStepScalarFieldEnum[]
  }

  /**
   * SagaStep create
   */
  export type SagaStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * The data needed to create a SagaStep.
     */
    data: XOR<SagaStepCreateInput, SagaStepUncheckedCreateInput>
  }

  /**
   * SagaStep createMany
   */
  export type SagaStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SagaSteps.
     */
    data: SagaStepCreateManyInput | SagaStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SagaStep createManyAndReturn
   */
  export type SagaStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * The data used to create many SagaSteps.
     */
    data: SagaStepCreateManyInput | SagaStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SagaStep update
   */
  export type SagaStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * The data needed to update a SagaStep.
     */
    data: XOR<SagaStepUpdateInput, SagaStepUncheckedUpdateInput>
    /**
     * Choose, which SagaStep to update.
     */
    where: SagaStepWhereUniqueInput
  }

  /**
   * SagaStep updateMany
   */
  export type SagaStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SagaSteps.
     */
    data: XOR<SagaStepUpdateManyMutationInput, SagaStepUncheckedUpdateManyInput>
    /**
     * Filter which SagaSteps to update
     */
    where?: SagaStepWhereInput
    /**
     * Limit how many SagaSteps to update.
     */
    limit?: number
  }

  /**
   * SagaStep updateManyAndReturn
   */
  export type SagaStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * The data used to update SagaSteps.
     */
    data: XOR<SagaStepUpdateManyMutationInput, SagaStepUncheckedUpdateManyInput>
    /**
     * Filter which SagaSteps to update
     */
    where?: SagaStepWhereInput
    /**
     * Limit how many SagaSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SagaStep upsert
   */
  export type SagaStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * The filter to search for the SagaStep to update in case it exists.
     */
    where: SagaStepWhereUniqueInput
    /**
     * In case the SagaStep found by the `where` argument doesn't exist, create a new SagaStep with this data.
     */
    create: XOR<SagaStepCreateInput, SagaStepUncheckedCreateInput>
    /**
     * In case the SagaStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SagaStepUpdateInput, SagaStepUncheckedUpdateInput>
  }

  /**
   * SagaStep delete
   */
  export type SagaStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
    /**
     * Filter which SagaStep to delete.
     */
    where: SagaStepWhereUniqueInput
  }

  /**
   * SagaStep deleteMany
   */
  export type SagaStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SagaSteps to delete
     */
    where?: SagaStepWhereInput
    /**
     * Limit how many SagaSteps to delete.
     */
    limit?: number
  }

  /**
   * SagaStep without action
   */
  export type SagaStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SagaStep
     */
    select?: SagaStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SagaStep
     */
    omit?: SagaStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SagaStepInclude<ExtArgs> | null
  }


  /**
   * Model OrderEvent
   */

  export type AggregateOrderEvent = {
    _count: OrderEventCountAggregateOutputType | null
    _avg: OrderEventAvgAggregateOutputType | null
    _sum: OrderEventSumAggregateOutputType | null
    _min: OrderEventMinAggregateOutputType | null
    _max: OrderEventMaxAggregateOutputType | null
  }

  export type OrderEventAvgAggregateOutputType = {
    version: number | null
  }

  export type OrderEventSumAggregateOutputType = {
    version: number | null
  }

  export type OrderEventMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    eventType: string | null
    userId: string | null
    occurredAt: Date | null
    version: number | null
  }

  export type OrderEventMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    eventType: string | null
    userId: string | null
    occurredAt: Date | null
    version: number | null
  }

  export type OrderEventCountAggregateOutputType = {
    id: number
    orderId: number
    eventType: number
    eventData: number
    userId: number
    occurredAt: number
    version: number
    _all: number
  }


  export type OrderEventAvgAggregateInputType = {
    version?: true
  }

  export type OrderEventSumAggregateInputType = {
    version?: true
  }

  export type OrderEventMinAggregateInputType = {
    id?: true
    orderId?: true
    eventType?: true
    userId?: true
    occurredAt?: true
    version?: true
  }

  export type OrderEventMaxAggregateInputType = {
    id?: true
    orderId?: true
    eventType?: true
    userId?: true
    occurredAt?: true
    version?: true
  }

  export type OrderEventCountAggregateInputType = {
    id?: true
    orderId?: true
    eventType?: true
    eventData?: true
    userId?: true
    occurredAt?: true
    version?: true
    _all?: true
  }

  export type OrderEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEvent to aggregate.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderEvents
    **/
    _count?: true | OrderEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderEventMaxAggregateInputType
  }

  export type GetOrderEventAggregateType<T extends OrderEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderEvent[P]>
      : GetScalarType<T[P], AggregateOrderEvent[P]>
  }




  export type OrderEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderEventWhereInput
    orderBy?: OrderEventOrderByWithAggregationInput | OrderEventOrderByWithAggregationInput[]
    by: OrderEventScalarFieldEnum[] | OrderEventScalarFieldEnum
    having?: OrderEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderEventCountAggregateInputType | true
    _avg?: OrderEventAvgAggregateInputType
    _sum?: OrderEventSumAggregateInputType
    _min?: OrderEventMinAggregateInputType
    _max?: OrderEventMaxAggregateInputType
  }

  export type OrderEventGroupByOutputType = {
    id: string
    orderId: string
    eventType: string
    eventData: JsonValue
    userId: string | null
    occurredAt: Date
    version: number
    _count: OrderEventCountAggregateOutputType | null
    _avg: OrderEventAvgAggregateOutputType | null
    _sum: OrderEventSumAggregateOutputType | null
    _min: OrderEventMinAggregateOutputType | null
    _max: OrderEventMaxAggregateOutputType | null
  }

  type GetOrderEventGroupByPayload<T extends OrderEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderEventGroupByOutputType[P]>
            : GetScalarType<T[P], OrderEventGroupByOutputType[P]>
        }
      >
    >


  export type OrderEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    occurredAt?: boolean
    version?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    occurredAt?: boolean
    version?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    occurredAt?: boolean
    version?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderEvent"]>

  export type OrderEventSelectScalar = {
    id?: boolean
    orderId?: boolean
    eventType?: boolean
    eventData?: boolean
    userId?: boolean
    occurredAt?: boolean
    version?: boolean
  }

  export type OrderEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "eventType" | "eventData" | "userId" | "occurredAt" | "version", ExtArgs["result"]["orderEvent"]>
  export type OrderEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderEvent"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      eventType: string
      eventData: Prisma.JsonValue
      userId: string | null
      occurredAt: Date
      version: number
    }, ExtArgs["result"]["orderEvent"]>
    composites: {}
  }

  type OrderEventGetPayload<S extends boolean | null | undefined | OrderEventDefaultArgs> = $Result.GetResult<Prisma.$OrderEventPayload, S>

  type OrderEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderEventCountAggregateInputType | true
    }

  export interface OrderEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderEvent'], meta: { name: 'OrderEvent' } }
    /**
     * Find zero or one OrderEvent that matches the filter.
     * @param {OrderEventFindUniqueArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderEventFindUniqueArgs>(args: SelectSubset<T, OrderEventFindUniqueArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderEventFindUniqueOrThrowArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindFirstArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderEventFindFirstArgs>(args?: SelectSubset<T, OrderEventFindFirstArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindFirstOrThrowArgs} args - Arguments to find a OrderEvent
     * @example
     * // Get one OrderEvent
     * const orderEvent = await prisma.orderEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderEvents
     * const orderEvents = await prisma.orderEvent.findMany()
     * 
     * // Get first 10 OrderEvents
     * const orderEvents = await prisma.orderEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderEventFindManyArgs>(args?: SelectSubset<T, OrderEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderEvent.
     * @param {OrderEventCreateArgs} args - Arguments to create a OrderEvent.
     * @example
     * // Create one OrderEvent
     * const OrderEvent = await prisma.orderEvent.create({
     *   data: {
     *     // ... data to create a OrderEvent
     *   }
     * })
     * 
     */
    create<T extends OrderEventCreateArgs>(args: SelectSubset<T, OrderEventCreateArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderEvents.
     * @param {OrderEventCreateManyArgs} args - Arguments to create many OrderEvents.
     * @example
     * // Create many OrderEvents
     * const orderEvent = await prisma.orderEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderEventCreateManyArgs>(args?: SelectSubset<T, OrderEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderEvents and returns the data saved in the database.
     * @param {OrderEventCreateManyAndReturnArgs} args - Arguments to create many OrderEvents.
     * @example
     * // Create many OrderEvents
     * const orderEvent = await prisma.orderEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderEvents and only return the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderEvent.
     * @param {OrderEventDeleteArgs} args - Arguments to delete one OrderEvent.
     * @example
     * // Delete one OrderEvent
     * const OrderEvent = await prisma.orderEvent.delete({
     *   where: {
     *     // ... filter to delete one OrderEvent
     *   }
     * })
     * 
     */
    delete<T extends OrderEventDeleteArgs>(args: SelectSubset<T, OrderEventDeleteArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderEvent.
     * @param {OrderEventUpdateArgs} args - Arguments to update one OrderEvent.
     * @example
     * // Update one OrderEvent
     * const orderEvent = await prisma.orderEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderEventUpdateArgs>(args: SelectSubset<T, OrderEventUpdateArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderEvents.
     * @param {OrderEventDeleteManyArgs} args - Arguments to filter OrderEvents to delete.
     * @example
     * // Delete a few OrderEvents
     * const { count } = await prisma.orderEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderEventDeleteManyArgs>(args?: SelectSubset<T, OrderEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderEvents
     * const orderEvent = await prisma.orderEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderEventUpdateManyArgs>(args: SelectSubset<T, OrderEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderEvents and returns the data updated in the database.
     * @param {OrderEventUpdateManyAndReturnArgs} args - Arguments to update many OrderEvents.
     * @example
     * // Update many OrderEvents
     * const orderEvent = await prisma.orderEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderEvents and only return the `id`
     * const orderEventWithIdOnly = await prisma.orderEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderEvent.
     * @param {OrderEventUpsertArgs} args - Arguments to update or create a OrderEvent.
     * @example
     * // Update or create a OrderEvent
     * const orderEvent = await prisma.orderEvent.upsert({
     *   create: {
     *     // ... data to create a OrderEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderEvent we want to update
     *   }
     * })
     */
    upsert<T extends OrderEventUpsertArgs>(args: SelectSubset<T, OrderEventUpsertArgs<ExtArgs>>): Prisma__OrderEventClient<$Result.GetResult<Prisma.$OrderEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventCountArgs} args - Arguments to filter OrderEvents to count.
     * @example
     * // Count the number of OrderEvents
     * const count = await prisma.orderEvent.count({
     *   where: {
     *     // ... the filter for the OrderEvents we want to count
     *   }
     * })
    **/
    count<T extends OrderEventCountArgs>(
      args?: Subset<T, OrderEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderEventAggregateArgs>(args: Subset<T, OrderEventAggregateArgs>): Prisma.PrismaPromise<GetOrderEventAggregateType<T>>

    /**
     * Group by OrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderEventGroupByArgs} args - Group by arguments.
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
      T extends OrderEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderEventGroupByArgs['orderBy'] }
        : { orderBy?: OrderEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderEvent model
   */
  readonly fields: OrderEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderEvent model
   */
  interface OrderEventFieldRefs {
    readonly id: FieldRef<"OrderEvent", 'String'>
    readonly orderId: FieldRef<"OrderEvent", 'String'>
    readonly eventType: FieldRef<"OrderEvent", 'String'>
    readonly eventData: FieldRef<"OrderEvent", 'Json'>
    readonly userId: FieldRef<"OrderEvent", 'String'>
    readonly occurredAt: FieldRef<"OrderEvent", 'DateTime'>
    readonly version: FieldRef<"OrderEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderEvent findUnique
   */
  export type OrderEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent findUniqueOrThrow
   */
  export type OrderEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent findFirst
   */
  export type OrderEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderEvents.
     */
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent findFirstOrThrow
   */
  export type OrderEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvent to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderEvents.
     */
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent findMany
   */
  export type OrderEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter, which OrderEvents to fetch.
     */
    where?: OrderEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderEvents to fetch.
     */
    orderBy?: OrderEventOrderByWithRelationInput | OrderEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderEvents.
     */
    cursor?: OrderEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderEvents.
     */
    skip?: number
    distinct?: OrderEventScalarFieldEnum | OrderEventScalarFieldEnum[]
  }

  /**
   * OrderEvent create
   */
  export type OrderEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderEvent.
     */
    data: XOR<OrderEventCreateInput, OrderEventUncheckedCreateInput>
  }

  /**
   * OrderEvent createMany
   */
  export type OrderEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderEvents.
     */
    data: OrderEventCreateManyInput | OrderEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderEvent createManyAndReturn
   */
  export type OrderEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * The data used to create many OrderEvents.
     */
    data: OrderEventCreateManyInput | OrderEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderEvent update
   */
  export type OrderEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderEvent.
     */
    data: XOR<OrderEventUpdateInput, OrderEventUncheckedUpdateInput>
    /**
     * Choose, which OrderEvent to update.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent updateMany
   */
  export type OrderEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderEvents.
     */
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyInput>
    /**
     * Filter which OrderEvents to update
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to update.
     */
    limit?: number
  }

  /**
   * OrderEvent updateManyAndReturn
   */
  export type OrderEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * The data used to update OrderEvents.
     */
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyInput>
    /**
     * Filter which OrderEvents to update
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderEvent upsert
   */
  export type OrderEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderEvent to update in case it exists.
     */
    where: OrderEventWhereUniqueInput
    /**
     * In case the OrderEvent found by the `where` argument doesn't exist, create a new OrderEvent with this data.
     */
    create: XOR<OrderEventCreateInput, OrderEventUncheckedCreateInput>
    /**
     * In case the OrderEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderEventUpdateInput, OrderEventUncheckedUpdateInput>
  }

  /**
   * OrderEvent delete
   */
  export type OrderEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
    /**
     * Filter which OrderEvent to delete.
     */
    where: OrderEventWhereUniqueInput
  }

  /**
   * OrderEvent deleteMany
   */
  export type OrderEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderEvents to delete
     */
    where?: OrderEventWhereInput
    /**
     * Limit how many OrderEvents to delete.
     */
    limit?: number
  }

  /**
   * OrderEvent without action
   */
  export type OrderEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderEvent
     */
    select?: OrderEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderEvent
     */
    omit?: OrderEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderEventInclude<ExtArgs> | null
  }


  /**
   * Model CompensationLog
   */

  export type AggregateCompensationLog = {
    _count: CompensationLogCountAggregateOutputType | null
    _min: CompensationLogMinAggregateOutputType | null
    _max: CompensationLogMaxAggregateOutputType | null
  }

  export type CompensationLogMinAggregateOutputType = {
    id: string | null
    sagaExecutionId: string | null
    stepName: string | null
    compensationAction: string | null
    success: boolean | null
    errorMessage: string | null
    executedAt: Date | null
  }

  export type CompensationLogMaxAggregateOutputType = {
    id: string | null
    sagaExecutionId: string | null
    stepName: string | null
    compensationAction: string | null
    success: boolean | null
    errorMessage: string | null
    executedAt: Date | null
  }

  export type CompensationLogCountAggregateOutputType = {
    id: number
    sagaExecutionId: number
    stepName: number
    compensationAction: number
    originalData: number
    compensationData: number
    success: number
    errorMessage: number
    executedAt: number
    _all: number
  }


  export type CompensationLogMinAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepName?: true
    compensationAction?: true
    success?: true
    errorMessage?: true
    executedAt?: true
  }

  export type CompensationLogMaxAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepName?: true
    compensationAction?: true
    success?: true
    errorMessage?: true
    executedAt?: true
  }

  export type CompensationLogCountAggregateInputType = {
    id?: true
    sagaExecutionId?: true
    stepName?: true
    compensationAction?: true
    originalData?: true
    compensationData?: true
    success?: true
    errorMessage?: true
    executedAt?: true
    _all?: true
  }

  export type CompensationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationLog to aggregate.
     */
    where?: CompensationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationLogs to fetch.
     */
    orderBy?: CompensationLogOrderByWithRelationInput | CompensationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompensationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompensationLogs
    **/
    _count?: true | CompensationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompensationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompensationLogMaxAggregateInputType
  }

  export type GetCompensationLogAggregateType<T extends CompensationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCompensationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompensationLog[P]>
      : GetScalarType<T[P], AggregateCompensationLog[P]>
  }




  export type CompensationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompensationLogWhereInput
    orderBy?: CompensationLogOrderByWithAggregationInput | CompensationLogOrderByWithAggregationInput[]
    by: CompensationLogScalarFieldEnum[] | CompensationLogScalarFieldEnum
    having?: CompensationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompensationLogCountAggregateInputType | true
    _min?: CompensationLogMinAggregateInputType
    _max?: CompensationLogMaxAggregateInputType
  }

  export type CompensationLogGroupByOutputType = {
    id: string
    sagaExecutionId: string
    stepName: string
    compensationAction: string
    originalData: JsonValue | null
    compensationData: JsonValue | null
    success: boolean
    errorMessage: string | null
    executedAt: Date
    _count: CompensationLogCountAggregateOutputType | null
    _min: CompensationLogMinAggregateOutputType | null
    _max: CompensationLogMaxAggregateOutputType | null
  }

  type GetCompensationLogGroupByPayload<T extends CompensationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompensationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompensationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompensationLogGroupByOutputType[P]>
            : GetScalarType<T[P], CompensationLogGroupByOutputType[P]>
        }
      >
    >


  export type CompensationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepName?: boolean
    compensationAction?: boolean
    originalData?: boolean
    compensationData?: boolean
    success?: boolean
    errorMessage?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["compensationLog"]>

  export type CompensationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepName?: boolean
    compensationAction?: boolean
    originalData?: boolean
    compensationData?: boolean
    success?: boolean
    errorMessage?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["compensationLog"]>

  export type CompensationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sagaExecutionId?: boolean
    stepName?: boolean
    compensationAction?: boolean
    originalData?: boolean
    compensationData?: boolean
    success?: boolean
    errorMessage?: boolean
    executedAt?: boolean
  }, ExtArgs["result"]["compensationLog"]>

  export type CompensationLogSelectScalar = {
    id?: boolean
    sagaExecutionId?: boolean
    stepName?: boolean
    compensationAction?: boolean
    originalData?: boolean
    compensationData?: boolean
    success?: boolean
    errorMessage?: boolean
    executedAt?: boolean
  }

  export type CompensationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sagaExecutionId" | "stepName" | "compensationAction" | "originalData" | "compensationData" | "success" | "errorMessage" | "executedAt", ExtArgs["result"]["compensationLog"]>

  export type $CompensationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompensationLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sagaExecutionId: string
      stepName: string
      compensationAction: string
      originalData: Prisma.JsonValue | null
      compensationData: Prisma.JsonValue | null
      success: boolean
      errorMessage: string | null
      executedAt: Date
    }, ExtArgs["result"]["compensationLog"]>
    composites: {}
  }

  type CompensationLogGetPayload<S extends boolean | null | undefined | CompensationLogDefaultArgs> = $Result.GetResult<Prisma.$CompensationLogPayload, S>

  type CompensationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompensationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompensationLogCountAggregateInputType | true
    }

  export interface CompensationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompensationLog'], meta: { name: 'CompensationLog' } }
    /**
     * Find zero or one CompensationLog that matches the filter.
     * @param {CompensationLogFindUniqueArgs} args - Arguments to find a CompensationLog
     * @example
     * // Get one CompensationLog
     * const compensationLog = await prisma.compensationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompensationLogFindUniqueArgs>(args: SelectSubset<T, CompensationLogFindUniqueArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompensationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompensationLogFindUniqueOrThrowArgs} args - Arguments to find a CompensationLog
     * @example
     * // Get one CompensationLog
     * const compensationLog = await prisma.compensationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompensationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CompensationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogFindFirstArgs} args - Arguments to find a CompensationLog
     * @example
     * // Get one CompensationLog
     * const compensationLog = await prisma.compensationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompensationLogFindFirstArgs>(args?: SelectSubset<T, CompensationLogFindFirstArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogFindFirstOrThrowArgs} args - Arguments to find a CompensationLog
     * @example
     * // Get one CompensationLog
     * const compensationLog = await prisma.compensationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompensationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CompensationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompensationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompensationLogs
     * const compensationLogs = await prisma.compensationLog.findMany()
     * 
     * // Get first 10 CompensationLogs
     * const compensationLogs = await prisma.compensationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compensationLogWithIdOnly = await prisma.compensationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompensationLogFindManyArgs>(args?: SelectSubset<T, CompensationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompensationLog.
     * @param {CompensationLogCreateArgs} args - Arguments to create a CompensationLog.
     * @example
     * // Create one CompensationLog
     * const CompensationLog = await prisma.compensationLog.create({
     *   data: {
     *     // ... data to create a CompensationLog
     *   }
     * })
     * 
     */
    create<T extends CompensationLogCreateArgs>(args: SelectSubset<T, CompensationLogCreateArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompensationLogs.
     * @param {CompensationLogCreateManyArgs} args - Arguments to create many CompensationLogs.
     * @example
     * // Create many CompensationLogs
     * const compensationLog = await prisma.compensationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompensationLogCreateManyArgs>(args?: SelectSubset<T, CompensationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompensationLogs and returns the data saved in the database.
     * @param {CompensationLogCreateManyAndReturnArgs} args - Arguments to create many CompensationLogs.
     * @example
     * // Create many CompensationLogs
     * const compensationLog = await prisma.compensationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompensationLogs and only return the `id`
     * const compensationLogWithIdOnly = await prisma.compensationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompensationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CompensationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompensationLog.
     * @param {CompensationLogDeleteArgs} args - Arguments to delete one CompensationLog.
     * @example
     * // Delete one CompensationLog
     * const CompensationLog = await prisma.compensationLog.delete({
     *   where: {
     *     // ... filter to delete one CompensationLog
     *   }
     * })
     * 
     */
    delete<T extends CompensationLogDeleteArgs>(args: SelectSubset<T, CompensationLogDeleteArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompensationLog.
     * @param {CompensationLogUpdateArgs} args - Arguments to update one CompensationLog.
     * @example
     * // Update one CompensationLog
     * const compensationLog = await prisma.compensationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompensationLogUpdateArgs>(args: SelectSubset<T, CompensationLogUpdateArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompensationLogs.
     * @param {CompensationLogDeleteManyArgs} args - Arguments to filter CompensationLogs to delete.
     * @example
     * // Delete a few CompensationLogs
     * const { count } = await prisma.compensationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompensationLogDeleteManyArgs>(args?: SelectSubset<T, CompensationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompensationLogs
     * const compensationLog = await prisma.compensationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompensationLogUpdateManyArgs>(args: SelectSubset<T, CompensationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationLogs and returns the data updated in the database.
     * @param {CompensationLogUpdateManyAndReturnArgs} args - Arguments to update many CompensationLogs.
     * @example
     * // Update many CompensationLogs
     * const compensationLog = await prisma.compensationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompensationLogs and only return the `id`
     * const compensationLogWithIdOnly = await prisma.compensationLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompensationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CompensationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompensationLog.
     * @param {CompensationLogUpsertArgs} args - Arguments to update or create a CompensationLog.
     * @example
     * // Update or create a CompensationLog
     * const compensationLog = await prisma.compensationLog.upsert({
     *   create: {
     *     // ... data to create a CompensationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompensationLog we want to update
     *   }
     * })
     */
    upsert<T extends CompensationLogUpsertArgs>(args: SelectSubset<T, CompensationLogUpsertArgs<ExtArgs>>): Prisma__CompensationLogClient<$Result.GetResult<Prisma.$CompensationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompensationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogCountArgs} args - Arguments to filter CompensationLogs to count.
     * @example
     * // Count the number of CompensationLogs
     * const count = await prisma.compensationLog.count({
     *   where: {
     *     // ... the filter for the CompensationLogs we want to count
     *   }
     * })
    **/
    count<T extends CompensationLogCountArgs>(
      args?: Subset<T, CompensationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompensationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompensationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompensationLogAggregateArgs>(args: Subset<T, CompensationLogAggregateArgs>): Prisma.PrismaPromise<GetCompensationLogAggregateType<T>>

    /**
     * Group by CompensationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationLogGroupByArgs} args - Group by arguments.
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
      T extends CompensationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompensationLogGroupByArgs['orderBy'] }
        : { orderBy?: CompensationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompensationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompensationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompensationLog model
   */
  readonly fields: CompensationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompensationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompensationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CompensationLog model
   */
  interface CompensationLogFieldRefs {
    readonly id: FieldRef<"CompensationLog", 'String'>
    readonly sagaExecutionId: FieldRef<"CompensationLog", 'String'>
    readonly stepName: FieldRef<"CompensationLog", 'String'>
    readonly compensationAction: FieldRef<"CompensationLog", 'String'>
    readonly originalData: FieldRef<"CompensationLog", 'Json'>
    readonly compensationData: FieldRef<"CompensationLog", 'Json'>
    readonly success: FieldRef<"CompensationLog", 'Boolean'>
    readonly errorMessage: FieldRef<"CompensationLog", 'String'>
    readonly executedAt: FieldRef<"CompensationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompensationLog findUnique
   */
  export type CompensationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter, which CompensationLog to fetch.
     */
    where: CompensationLogWhereUniqueInput
  }

  /**
   * CompensationLog findUniqueOrThrow
   */
  export type CompensationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter, which CompensationLog to fetch.
     */
    where: CompensationLogWhereUniqueInput
  }

  /**
   * CompensationLog findFirst
   */
  export type CompensationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter, which CompensationLog to fetch.
     */
    where?: CompensationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationLogs to fetch.
     */
    orderBy?: CompensationLogOrderByWithRelationInput | CompensationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationLogs.
     */
    cursor?: CompensationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationLogs.
     */
    distinct?: CompensationLogScalarFieldEnum | CompensationLogScalarFieldEnum[]
  }

  /**
   * CompensationLog findFirstOrThrow
   */
  export type CompensationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter, which CompensationLog to fetch.
     */
    where?: CompensationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationLogs to fetch.
     */
    orderBy?: CompensationLogOrderByWithRelationInput | CompensationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationLogs.
     */
    cursor?: CompensationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationLogs.
     */
    distinct?: CompensationLogScalarFieldEnum | CompensationLogScalarFieldEnum[]
  }

  /**
   * CompensationLog findMany
   */
  export type CompensationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter, which CompensationLogs to fetch.
     */
    where?: CompensationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationLogs to fetch.
     */
    orderBy?: CompensationLogOrderByWithRelationInput | CompensationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompensationLogs.
     */
    cursor?: CompensationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationLogs.
     */
    skip?: number
    distinct?: CompensationLogScalarFieldEnum | CompensationLogScalarFieldEnum[]
  }

  /**
   * CompensationLog create
   */
  export type CompensationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * The data needed to create a CompensationLog.
     */
    data: XOR<CompensationLogCreateInput, CompensationLogUncheckedCreateInput>
  }

  /**
   * CompensationLog createMany
   */
  export type CompensationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompensationLogs.
     */
    data: CompensationLogCreateManyInput | CompensationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompensationLog createManyAndReturn
   */
  export type CompensationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * The data used to create many CompensationLogs.
     */
    data: CompensationLogCreateManyInput | CompensationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompensationLog update
   */
  export type CompensationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * The data needed to update a CompensationLog.
     */
    data: XOR<CompensationLogUpdateInput, CompensationLogUncheckedUpdateInput>
    /**
     * Choose, which CompensationLog to update.
     */
    where: CompensationLogWhereUniqueInput
  }

  /**
   * CompensationLog updateMany
   */
  export type CompensationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompensationLogs.
     */
    data: XOR<CompensationLogUpdateManyMutationInput, CompensationLogUncheckedUpdateManyInput>
    /**
     * Filter which CompensationLogs to update
     */
    where?: CompensationLogWhereInput
    /**
     * Limit how many CompensationLogs to update.
     */
    limit?: number
  }

  /**
   * CompensationLog updateManyAndReturn
   */
  export type CompensationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * The data used to update CompensationLogs.
     */
    data: XOR<CompensationLogUpdateManyMutationInput, CompensationLogUncheckedUpdateManyInput>
    /**
     * Filter which CompensationLogs to update
     */
    where?: CompensationLogWhereInput
    /**
     * Limit how many CompensationLogs to update.
     */
    limit?: number
  }

  /**
   * CompensationLog upsert
   */
  export type CompensationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * The filter to search for the CompensationLog to update in case it exists.
     */
    where: CompensationLogWhereUniqueInput
    /**
     * In case the CompensationLog found by the `where` argument doesn't exist, create a new CompensationLog with this data.
     */
    create: XOR<CompensationLogCreateInput, CompensationLogUncheckedCreateInput>
    /**
     * In case the CompensationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompensationLogUpdateInput, CompensationLogUncheckedUpdateInput>
  }

  /**
   * CompensationLog delete
   */
  export type CompensationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
    /**
     * Filter which CompensationLog to delete.
     */
    where: CompensationLogWhereUniqueInput
  }

  /**
   * CompensationLog deleteMany
   */
  export type CompensationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationLogs to delete
     */
    where?: CompensationLogWhereInput
    /**
     * Limit how many CompensationLogs to delete.
     */
    limit?: number
  }

  /**
   * CompensationLog without action
   */
  export type CompensationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationLog
     */
    select?: CompensationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationLog
     */
    omit?: CompensationLogOmit<ExtArgs> | null
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


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    totalAmount: 'totalAmount',
    currency: 'currency',
    status: 'status',
    paymentId: 'paymentId',
    paymentStatus: 'paymentStatus',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    itemType: 'itemType',
    itemId: 'itemId',
    itemName: 'itemName',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    orderId: 'orderId',
    userId: 'userId',
    itemType: 'itemType',
    itemId: 'itemId',
    itemName: 'itemName',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    reservationId: 'reservationId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const SagaExecutionScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    sagaType: 'sagaType',
    status: 'status',
    currentStep: 'currentStep',
    totalSteps: 'totalSteps',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    compensatedAt: 'compensatedAt',
    errorMessage: 'errorMessage',
    compensationData: 'compensationData'
  };

  export type SagaExecutionScalarFieldEnum = (typeof SagaExecutionScalarFieldEnum)[keyof typeof SagaExecutionScalarFieldEnum]


  export const SagaStepScalarFieldEnum: {
    id: 'id',
    sagaExecutionId: 'sagaExecutionId',
    stepNumber: 'stepNumber',
    stepName: 'stepName',
    status: 'status',
    serviceType: 'serviceType',
    actionType: 'actionType',
    requestData: 'requestData',
    responseData: 'responseData',
    compensationData: 'compensationData',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    compensatedAt: 'compensatedAt',
    errorMessage: 'errorMessage'
  };

  export type SagaStepScalarFieldEnum = (typeof SagaStepScalarFieldEnum)[keyof typeof SagaStepScalarFieldEnum]


  export const OrderEventScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    eventType: 'eventType',
    eventData: 'eventData',
    userId: 'userId',
    occurredAt: 'occurredAt',
    version: 'version'
  };

  export type OrderEventScalarFieldEnum = (typeof OrderEventScalarFieldEnum)[keyof typeof OrderEventScalarFieldEnum]


  export const CompensationLogScalarFieldEnum: {
    id: 'id',
    sagaExecutionId: 'sagaExecutionId',
    stepName: 'stepName',
    compensationAction: 'compensationAction',
    originalData: 'originalData',
    compensationData: 'compensationData',
    success: 'success',
    errorMessage: 'errorMessage',
    executedAt: 'executedAt'
  };

  export type CompensationLogScalarFieldEnum = (typeof CompensationLogScalarFieldEnum)[keyof typeof CompensationLogScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderItemType'
   */
  export type EnumOrderItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderItemType'>
    


  /**
   * Reference to a field of type 'OrderItemType[]'
   */
  export type ListEnumOrderItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderItemType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SagaStatus'
   */
  export type EnumSagaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SagaStatus'>
    


  /**
   * Reference to a field of type 'SagaStatus[]'
   */
  export type ListEnumSagaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SagaStatus[]'>
    


  /**
   * Reference to a field of type 'SagaStepStatus'
   */
  export type EnumSagaStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SagaStepStatus'>
    


  /**
   * Reference to a field of type 'SagaStepStatus[]'
   */
  export type ListEnumSagaStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SagaStepStatus[]'>
    


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


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    eventId?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentId?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringNullableFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    items?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
    sagaExecution?: XOR<SagaExecutionNullableScalarRelationFilter, SagaExecutionWhereInput> | null
    orderEvents?: OrderEventListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    items?: OrderItemOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
    sagaExecution?: SagaExecutionOrderByWithRelationInput
    orderEvents?: OrderEventOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    eventId?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    paymentId?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringNullableFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    completedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    items?: OrderItemListRelationFilter
    cartItems?: CartItemListRelationFilter
    sagaExecution?: XOR<SagaExecutionNullableScalarRelationFilter, SagaExecutionWhereInput> | null
    orderEvents?: OrderEventListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    eventId?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    paymentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentStatus?: StringNullableWithAggregatesFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemType?: EnumOrderItemTypeFilter<"OrderItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    metadata?: JsonNullableFilter<"OrderItem">
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    itemType?: EnumOrderItemTypeFilter<"OrderItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    metadata?: JsonNullableFilter<"OrderItem">
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    itemType?: EnumOrderItemTypeWithAggregatesFilter<"OrderItem"> | $Enums.OrderItemType
    itemId?: StringWithAggregatesFilter<"OrderItem"> | string
    itemName?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    metadata?: JsonNullableWithAggregatesFilter<"OrderItem">
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    expiresAt?: DateTimeNullableFilter<"Cart"> | Date | string | null
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    expiresAt?: DateTimeNullableFilter<"Cart"> | Date | string | null
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    items?: CartItemListRelationFilter
  }, "id" | "userId">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringWithAggregatesFilter<"Cart"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Cart"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringNullableFilter<"CartItem"> | string | null
    orderId?: StringNullableFilter<"CartItem"> | string | null
    userId?: StringFilter<"CartItem"> | string
    itemType?: EnumOrderItemTypeFilter<"CartItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"CartItem"> | string
    itemName?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    reservationId?: StringNullableFilter<"CartItem"> | string | null
    expiresAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cart?: CartOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: StringNullableFilter<"CartItem"> | string | null
    orderId?: StringNullableFilter<"CartItem"> | string | null
    userId?: StringFilter<"CartItem"> | string
    itemType?: EnumOrderItemTypeFilter<"CartItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"CartItem"> | string
    itemName?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    reservationId?: StringNullableFilter<"CartItem"> | string | null
    expiresAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    cartId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    userId?: StringWithAggregatesFilter<"CartItem"> | string
    itemType?: EnumOrderItemTypeWithAggregatesFilter<"CartItem"> | $Enums.OrderItemType
    itemId?: StringWithAggregatesFilter<"CartItem"> | string
    itemName?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    reservationId?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CartItem"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type SagaExecutionWhereInput = {
    AND?: SagaExecutionWhereInput | SagaExecutionWhereInput[]
    OR?: SagaExecutionWhereInput[]
    NOT?: SagaExecutionWhereInput | SagaExecutionWhereInput[]
    id?: StringFilter<"SagaExecution"> | string
    orderId?: StringFilter<"SagaExecution"> | string
    sagaType?: StringFilter<"SagaExecution"> | string
    status?: EnumSagaStatusFilter<"SagaExecution"> | $Enums.SagaStatus
    currentStep?: IntFilter<"SagaExecution"> | number
    totalSteps?: IntFilter<"SagaExecution"> | number
    startedAt?: DateTimeFilter<"SagaExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    compensatedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    errorMessage?: StringNullableFilter<"SagaExecution"> | string | null
    compensationData?: JsonNullableFilter<"SagaExecution">
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    steps?: SagaStepListRelationFilter
  }

  export type SagaExecutionOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    sagaType?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    compensatedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
    steps?: SagaStepOrderByRelationAggregateInput
  }

  export type SagaExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: SagaExecutionWhereInput | SagaExecutionWhereInput[]
    OR?: SagaExecutionWhereInput[]
    NOT?: SagaExecutionWhereInput | SagaExecutionWhereInput[]
    sagaType?: StringFilter<"SagaExecution"> | string
    status?: EnumSagaStatusFilter<"SagaExecution"> | $Enums.SagaStatus
    currentStep?: IntFilter<"SagaExecution"> | number
    totalSteps?: IntFilter<"SagaExecution"> | number
    startedAt?: DateTimeFilter<"SagaExecution"> | Date | string
    completedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    compensatedAt?: DateTimeNullableFilter<"SagaExecution"> | Date | string | null
    errorMessage?: StringNullableFilter<"SagaExecution"> | string | null
    compensationData?: JsonNullableFilter<"SagaExecution">
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    steps?: SagaStepListRelationFilter
  }, "id" | "orderId">

  export type SagaExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    sagaType?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    compensatedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    _count?: SagaExecutionCountOrderByAggregateInput
    _avg?: SagaExecutionAvgOrderByAggregateInput
    _max?: SagaExecutionMaxOrderByAggregateInput
    _min?: SagaExecutionMinOrderByAggregateInput
    _sum?: SagaExecutionSumOrderByAggregateInput
  }

  export type SagaExecutionScalarWhereWithAggregatesInput = {
    AND?: SagaExecutionScalarWhereWithAggregatesInput | SagaExecutionScalarWhereWithAggregatesInput[]
    OR?: SagaExecutionScalarWhereWithAggregatesInput[]
    NOT?: SagaExecutionScalarWhereWithAggregatesInput | SagaExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SagaExecution"> | string
    orderId?: StringWithAggregatesFilter<"SagaExecution"> | string
    sagaType?: StringWithAggregatesFilter<"SagaExecution"> | string
    status?: EnumSagaStatusWithAggregatesFilter<"SagaExecution"> | $Enums.SagaStatus
    currentStep?: IntWithAggregatesFilter<"SagaExecution"> | number
    totalSteps?: IntWithAggregatesFilter<"SagaExecution"> | number
    startedAt?: DateTimeWithAggregatesFilter<"SagaExecution"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SagaExecution"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"SagaExecution"> | Date | string | null
    compensatedAt?: DateTimeNullableWithAggregatesFilter<"SagaExecution"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"SagaExecution"> | string | null
    compensationData?: JsonNullableWithAggregatesFilter<"SagaExecution">
  }

  export type SagaStepWhereInput = {
    AND?: SagaStepWhereInput | SagaStepWhereInput[]
    OR?: SagaStepWhereInput[]
    NOT?: SagaStepWhereInput | SagaStepWhereInput[]
    id?: StringFilter<"SagaStep"> | string
    sagaExecutionId?: StringFilter<"SagaStep"> | string
    stepNumber?: IntFilter<"SagaStep"> | number
    stepName?: StringFilter<"SagaStep"> | string
    status?: EnumSagaStepStatusFilter<"SagaStep"> | $Enums.SagaStepStatus
    serviceType?: StringFilter<"SagaStep"> | string
    actionType?: StringFilter<"SagaStep"> | string
    requestData?: JsonNullableFilter<"SagaStep">
    responseData?: JsonNullableFilter<"SagaStep">
    compensationData?: JsonNullableFilter<"SagaStep">
    startedAt?: DateTimeFilter<"SagaStep"> | Date | string
    completedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    compensatedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    errorMessage?: StringNullableFilter<"SagaStep"> | string | null
    sagaExecution?: XOR<SagaExecutionScalarRelationFilter, SagaExecutionWhereInput>
  }

  export type SagaStepOrderByWithRelationInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepNumber?: SortOrder
    stepName?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    actionType?: SortOrder
    requestData?: SortOrderInput | SortOrder
    responseData?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    compensatedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sagaExecution?: SagaExecutionOrderByWithRelationInput
  }

  export type SagaStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sagaExecutionId_stepNumber?: SagaStepSagaExecutionIdStepNumberCompoundUniqueInput
    AND?: SagaStepWhereInput | SagaStepWhereInput[]
    OR?: SagaStepWhereInput[]
    NOT?: SagaStepWhereInput | SagaStepWhereInput[]
    sagaExecutionId?: StringFilter<"SagaStep"> | string
    stepNumber?: IntFilter<"SagaStep"> | number
    stepName?: StringFilter<"SagaStep"> | string
    status?: EnumSagaStepStatusFilter<"SagaStep"> | $Enums.SagaStepStatus
    serviceType?: StringFilter<"SagaStep"> | string
    actionType?: StringFilter<"SagaStep"> | string
    requestData?: JsonNullableFilter<"SagaStep">
    responseData?: JsonNullableFilter<"SagaStep">
    compensationData?: JsonNullableFilter<"SagaStep">
    startedAt?: DateTimeFilter<"SagaStep"> | Date | string
    completedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    compensatedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    errorMessage?: StringNullableFilter<"SagaStep"> | string | null
    sagaExecution?: XOR<SagaExecutionScalarRelationFilter, SagaExecutionWhereInput>
  }, "id" | "sagaExecutionId_stepNumber">

  export type SagaStepOrderByWithAggregationInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepNumber?: SortOrder
    stepName?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    actionType?: SortOrder
    requestData?: SortOrderInput | SortOrder
    responseData?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    compensatedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: SagaStepCountOrderByAggregateInput
    _avg?: SagaStepAvgOrderByAggregateInput
    _max?: SagaStepMaxOrderByAggregateInput
    _min?: SagaStepMinOrderByAggregateInput
    _sum?: SagaStepSumOrderByAggregateInput
  }

  export type SagaStepScalarWhereWithAggregatesInput = {
    AND?: SagaStepScalarWhereWithAggregatesInput | SagaStepScalarWhereWithAggregatesInput[]
    OR?: SagaStepScalarWhereWithAggregatesInput[]
    NOT?: SagaStepScalarWhereWithAggregatesInput | SagaStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SagaStep"> | string
    sagaExecutionId?: StringWithAggregatesFilter<"SagaStep"> | string
    stepNumber?: IntWithAggregatesFilter<"SagaStep"> | number
    stepName?: StringWithAggregatesFilter<"SagaStep"> | string
    status?: EnumSagaStepStatusWithAggregatesFilter<"SagaStep"> | $Enums.SagaStepStatus
    serviceType?: StringWithAggregatesFilter<"SagaStep"> | string
    actionType?: StringWithAggregatesFilter<"SagaStep"> | string
    requestData?: JsonNullableWithAggregatesFilter<"SagaStep">
    responseData?: JsonNullableWithAggregatesFilter<"SagaStep">
    compensationData?: JsonNullableWithAggregatesFilter<"SagaStep">
    startedAt?: DateTimeWithAggregatesFilter<"SagaStep"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"SagaStep"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"SagaStep"> | Date | string | null
    compensatedAt?: DateTimeNullableWithAggregatesFilter<"SagaStep"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"SagaStep"> | string | null
  }

  export type OrderEventWhereInput = {
    AND?: OrderEventWhereInput | OrderEventWhereInput[]
    OR?: OrderEventWhereInput[]
    NOT?: OrderEventWhereInput | OrderEventWhereInput[]
    id?: StringFilter<"OrderEvent"> | string
    orderId?: StringFilter<"OrderEvent"> | string
    eventType?: StringFilter<"OrderEvent"> | string
    eventData?: JsonFilter<"OrderEvent">
    userId?: StringNullableFilter<"OrderEvent"> | string | null
    occurredAt?: DateTimeFilter<"OrderEvent"> | Date | string
    version?: IntFilter<"OrderEvent"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderEventOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    version?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderEventWhereInput | OrderEventWhereInput[]
    OR?: OrderEventWhereInput[]
    NOT?: OrderEventWhereInput | OrderEventWhereInput[]
    orderId?: StringFilter<"OrderEvent"> | string
    eventType?: StringFilter<"OrderEvent"> | string
    eventData?: JsonFilter<"OrderEvent">
    userId?: StringNullableFilter<"OrderEvent"> | string | null
    occurredAt?: DateTimeFilter<"OrderEvent"> | Date | string
    version?: IntFilter<"OrderEvent"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderEventOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    version?: SortOrder
    _count?: OrderEventCountOrderByAggregateInput
    _avg?: OrderEventAvgOrderByAggregateInput
    _max?: OrderEventMaxOrderByAggregateInput
    _min?: OrderEventMinOrderByAggregateInput
    _sum?: OrderEventSumOrderByAggregateInput
  }

  export type OrderEventScalarWhereWithAggregatesInput = {
    AND?: OrderEventScalarWhereWithAggregatesInput | OrderEventScalarWhereWithAggregatesInput[]
    OR?: OrderEventScalarWhereWithAggregatesInput[]
    NOT?: OrderEventScalarWhereWithAggregatesInput | OrderEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderEvent"> | string
    orderId?: StringWithAggregatesFilter<"OrderEvent"> | string
    eventType?: StringWithAggregatesFilter<"OrderEvent"> | string
    eventData?: JsonWithAggregatesFilter<"OrderEvent">
    userId?: StringNullableWithAggregatesFilter<"OrderEvent"> | string | null
    occurredAt?: DateTimeWithAggregatesFilter<"OrderEvent"> | Date | string
    version?: IntWithAggregatesFilter<"OrderEvent"> | number
  }

  export type CompensationLogWhereInput = {
    AND?: CompensationLogWhereInput | CompensationLogWhereInput[]
    OR?: CompensationLogWhereInput[]
    NOT?: CompensationLogWhereInput | CompensationLogWhereInput[]
    id?: StringFilter<"CompensationLog"> | string
    sagaExecutionId?: StringFilter<"CompensationLog"> | string
    stepName?: StringFilter<"CompensationLog"> | string
    compensationAction?: StringFilter<"CompensationLog"> | string
    originalData?: JsonNullableFilter<"CompensationLog">
    compensationData?: JsonNullableFilter<"CompensationLog">
    success?: BoolFilter<"CompensationLog"> | boolean
    errorMessage?: StringNullableFilter<"CompensationLog"> | string | null
    executedAt?: DateTimeFilter<"CompensationLog"> | Date | string
  }

  export type CompensationLogOrderByWithRelationInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepName?: SortOrder
    compensationAction?: SortOrder
    originalData?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    executedAt?: SortOrder
  }

  export type CompensationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompensationLogWhereInput | CompensationLogWhereInput[]
    OR?: CompensationLogWhereInput[]
    NOT?: CompensationLogWhereInput | CompensationLogWhereInput[]
    sagaExecutionId?: StringFilter<"CompensationLog"> | string
    stepName?: StringFilter<"CompensationLog"> | string
    compensationAction?: StringFilter<"CompensationLog"> | string
    originalData?: JsonNullableFilter<"CompensationLog">
    compensationData?: JsonNullableFilter<"CompensationLog">
    success?: BoolFilter<"CompensationLog"> | boolean
    errorMessage?: StringNullableFilter<"CompensationLog"> | string | null
    executedAt?: DateTimeFilter<"CompensationLog"> | Date | string
  }, "id">

  export type CompensationLogOrderByWithAggregationInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepName?: SortOrder
    compensationAction?: SortOrder
    originalData?: SortOrderInput | SortOrder
    compensationData?: SortOrderInput | SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    executedAt?: SortOrder
    _count?: CompensationLogCountOrderByAggregateInput
    _max?: CompensationLogMaxOrderByAggregateInput
    _min?: CompensationLogMinOrderByAggregateInput
  }

  export type CompensationLogScalarWhereWithAggregatesInput = {
    AND?: CompensationLogScalarWhereWithAggregatesInput | CompensationLogScalarWhereWithAggregatesInput[]
    OR?: CompensationLogScalarWhereWithAggregatesInput[]
    NOT?: CompensationLogScalarWhereWithAggregatesInput | CompensationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompensationLog"> | string
    sagaExecutionId?: StringWithAggregatesFilter<"CompensationLog"> | string
    stepName?: StringWithAggregatesFilter<"CompensationLog"> | string
    compensationAction?: StringWithAggregatesFilter<"CompensationLog"> | string
    originalData?: JsonNullableWithAggregatesFilter<"CompensationLog">
    compensationData?: JsonNullableWithAggregatesFilter<"CompensationLog">
    success?: BoolWithAggregatesFilter<"CompensationLog"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"CompensationLog"> | string | null
    executedAt?: DateTimeWithAggregatesFilter<"CompensationLog"> | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemCreateNestedManyWithoutOrderInput
    cartItems?: CartItemCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionUncheckedCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUncheckedUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderItemCreateInput = {
    id?: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartCreateNestedOneWithoutItemsInput
    order?: OrderCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    cartId?: string | null
    orderId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneWithoutItemsNestedInput
    order?: OrderUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: string
    cartId?: string | null
    orderId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SagaExecutionCreateInput = {
    id?: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutSagaExecutionInput
    steps?: SagaStepCreateNestedManyWithoutSagaExecutionInput
  }

  export type SagaExecutionUncheckedCreateInput = {
    id?: string
    orderId: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepUncheckedCreateNestedManyWithoutSagaExecutionInput
  }

  export type SagaExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutSagaExecutionNestedInput
    steps?: SagaStepUpdateManyWithoutSagaExecutionNestedInput
  }

  export type SagaExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepUncheckedUpdateManyWithoutSagaExecutionNestedInput
  }

  export type SagaExecutionCreateManyInput = {
    id?: string
    orderId: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SagaExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SagaExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SagaStepCreateInput = {
    id?: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    sagaExecution: SagaExecutionCreateNestedOneWithoutStepsInput
  }

  export type SagaStepUncheckedCreateInput = {
    id?: string
    sagaExecutionId: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SagaStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sagaExecution?: SagaExecutionUpdateOneRequiredWithoutStepsNestedInput
  }

  export type SagaStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SagaStepCreateManyInput = {
    id?: string
    sagaExecutionId: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SagaStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SagaStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderEventCreateInput = {
    id?: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
    order: OrderCreateNestedOneWithoutOrderEventsInput
  }

  export type OrderEventUncheckedCreateInput = {
    id?: string
    orderId: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
  }

  export type OrderEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderEventsNestedInput
  }

  export type OrderEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type OrderEventCreateManyInput = {
    id?: string
    orderId: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
  }

  export type OrderEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type OrderEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CompensationLogCreateInput = {
    id?: string
    sagaExecutionId: string
    stepName: string
    compensationAction: string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success: boolean
    errorMessage?: string | null
    executedAt?: Date | string
  }

  export type CompensationLogUncheckedCreateInput = {
    id?: string
    sagaExecutionId: string
    stepName: string
    compensationAction: string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success: boolean
    errorMessage?: string | null
    executedAt?: Date | string
  }

  export type CompensationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepName?: StringFieldUpdateOperationsInput | string
    compensationAction?: StringFieldUpdateOperationsInput | string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepName?: StringFieldUpdateOperationsInput | string
    compensationAction?: StringFieldUpdateOperationsInput | string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationLogCreateManyInput = {
    id?: string
    sagaExecutionId: string
    stepName: string
    compensationAction: string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success: boolean
    errorMessage?: string | null
    executedAt?: Date | string
  }

  export type CompensationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepName?: StringFieldUpdateOperationsInput | string
    compensationAction?: StringFieldUpdateOperationsInput | string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaExecutionId?: StringFieldUpdateOperationsInput | string
    stepName?: StringFieldUpdateOperationsInput | string
    compensationAction?: StringFieldUpdateOperationsInput | string
    originalData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    executedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type SagaExecutionNullableScalarRelationFilter = {
    is?: SagaExecutionWhereInput | null
    isNot?: SagaExecutionWhereInput | null
  }

  export type OrderEventListRelationFilter = {
    every?: OrderEventWhereInput
    some?: OrderEventWhereInput
    none?: OrderEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    paymentStatus?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
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

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
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

  export type EnumOrderItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemType | EnumOrderItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemTypeFilter<$PrismaModel> | $Enums.OrderItemType
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumOrderItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemType | EnumOrderItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderItemTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderItemTypeFilter<$PrismaModel>
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

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    reservationId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    reservationId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    itemType?: SortOrder
    itemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    reservationId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumSagaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStatus | EnumSagaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStatusFilter<$PrismaModel> | $Enums.SagaStatus
  }

  export type SagaStepListRelationFilter = {
    every?: SagaStepWhereInput
    some?: SagaStepWhereInput
    none?: SagaStepWhereInput
  }

  export type SagaStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SagaExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    sagaType?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
    compensationData?: SortOrder
  }

  export type SagaExecutionAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    totalSteps?: SortOrder
  }

  export type SagaExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    sagaType?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SagaExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    sagaType?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    totalSteps?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SagaExecutionSumOrderByAggregateInput = {
    currentStep?: SortOrder
    totalSteps?: SortOrder
  }

  export type EnumSagaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStatus | EnumSagaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStatusWithAggregatesFilter<$PrismaModel> | $Enums.SagaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSagaStatusFilter<$PrismaModel>
    _max?: NestedEnumSagaStatusFilter<$PrismaModel>
  }

  export type EnumSagaStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStepStatus | EnumSagaStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStepStatusFilter<$PrismaModel> | $Enums.SagaStepStatus
  }

  export type SagaExecutionScalarRelationFilter = {
    is?: SagaExecutionWhereInput
    isNot?: SagaExecutionWhereInput
  }

  export type SagaStepSagaExecutionIdStepNumberCompoundUniqueInput = {
    sagaExecutionId: string
    stepNumber: number
  }

  export type SagaStepCountOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepNumber?: SortOrder
    stepName?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    actionType?: SortOrder
    requestData?: SortOrder
    responseData?: SortOrder
    compensationData?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SagaStepAvgOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type SagaStepMaxOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepNumber?: SortOrder
    stepName?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    actionType?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SagaStepMinOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepNumber?: SortOrder
    stepName?: SortOrder
    status?: SortOrder
    serviceType?: SortOrder
    actionType?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    compensatedAt?: SortOrder
    errorMessage?: SortOrder
  }

  export type SagaStepSumOrderByAggregateInput = {
    stepNumber?: SortOrder
  }

  export type EnumSagaStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStepStatus | EnumSagaStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.SagaStepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSagaStepStatusFilter<$PrismaModel>
    _max?: NestedEnumSagaStepStatusFilter<$PrismaModel>
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

  export type OrderEventCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventType?: SortOrder
    eventData?: SortOrder
    userId?: SortOrder
    occurredAt?: SortOrder
    version?: SortOrder
  }

  export type OrderEventAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type OrderEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    occurredAt?: SortOrder
    version?: SortOrder
  }

  export type OrderEventMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    eventType?: SortOrder
    userId?: SortOrder
    occurredAt?: SortOrder
    version?: SortOrder
  }

  export type OrderEventSumOrderByAggregateInput = {
    version?: SortOrder
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

  export type CompensationLogCountOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepName?: SortOrder
    compensationAction?: SortOrder
    originalData?: SortOrder
    compensationData?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    executedAt?: SortOrder
  }

  export type CompensationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepName?: SortOrder
    compensationAction?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    executedAt?: SortOrder
  }

  export type CompensationLogMinOrderByAggregateInput = {
    id?: SortOrder
    sagaExecutionId?: SortOrder
    stepName?: SortOrder
    compensationAction?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    executedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput> | CartItemCreateWithoutOrderInput[] | CartItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutOrderInput | CartItemCreateOrConnectWithoutOrderInput[]
    createMany?: CartItemCreateManyOrderInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type SagaExecutionCreateNestedOneWithoutOrderInput = {
    create?: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutOrderInput
    connect?: SagaExecutionWhereUniqueInput
  }

  export type OrderEventCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput> | CartItemCreateWithoutOrderInput[] | CartItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutOrderInput | CartItemCreateOrConnectWithoutOrderInput[]
    createMany?: CartItemCreateManyOrderInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type SagaExecutionUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutOrderInput
    connect?: SagaExecutionWhereUniqueInput
  }

  export type OrderEventUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
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

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
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

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput> | CartItemCreateWithoutOrderInput[] | CartItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutOrderInput | CartItemCreateOrConnectWithoutOrderInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutOrderInput | CartItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CartItemCreateManyOrderInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutOrderInput | CartItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutOrderInput | CartItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type SagaExecutionUpdateOneWithoutOrderNestedInput = {
    create?: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutOrderInput
    upsert?: SagaExecutionUpsertWithoutOrderInput
    disconnect?: SagaExecutionWhereInput | boolean
    delete?: SagaExecutionWhereInput | boolean
    connect?: SagaExecutionWhereUniqueInput
    update?: XOR<XOR<SagaExecutionUpdateToOneWithWhereWithoutOrderInput, SagaExecutionUpdateWithoutOrderInput>, SagaExecutionUncheckedUpdateWithoutOrderInput>
  }

  export type OrderEventUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    upsert?: OrderEventUpsertWithWhereUniqueWithoutOrderInput | OrderEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    set?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    disconnect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    delete?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    update?: OrderEventUpdateWithWhereUniqueWithoutOrderInput | OrderEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderEventUpdateManyWithWhereWithoutOrderInput | OrderEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput> | CartItemCreateWithoutOrderInput[] | CartItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutOrderInput | CartItemCreateOrConnectWithoutOrderInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutOrderInput | CartItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CartItemCreateManyOrderInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutOrderInput | CartItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutOrderInput | CartItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type SagaExecutionUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutOrderInput
    upsert?: SagaExecutionUpsertWithoutOrderInput
    disconnect?: SagaExecutionWhereInput | boolean
    delete?: SagaExecutionWhereInput | boolean
    connect?: SagaExecutionWhereUniqueInput
    update?: XOR<XOR<SagaExecutionUpdateToOneWithWhereWithoutOrderInput, SagaExecutionUpdateWithoutOrderInput>, SagaExecutionUncheckedUpdateWithoutOrderInput>
  }

  export type OrderEventUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput> | OrderEventCreateWithoutOrderInput[] | OrderEventUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderEventCreateOrConnectWithoutOrderInput | OrderEventCreateOrConnectWithoutOrderInput[]
    upsert?: OrderEventUpsertWithWhereUniqueWithoutOrderInput | OrderEventUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderEventCreateManyOrderInputEnvelope
    set?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    disconnect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    delete?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    connect?: OrderEventWhereUniqueInput | OrderEventWhereUniqueInput[]
    update?: OrderEventUpdateWithWhereUniqueWithoutOrderInput | OrderEventUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderEventUpdateManyWithWhereWithoutOrderInput | OrderEventUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumOrderItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderItemType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<OrderCreateWithoutCartItemsInput, OrderUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCartItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type CartUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateOneWithoutCartItemsNestedInput = {
    create?: XOR<OrderCreateWithoutCartItemsInput, OrderUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutCartItemsInput
    upsert?: OrderUpsertWithoutCartItemsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutCartItemsInput, OrderUpdateWithoutCartItemsInput>, OrderUncheckedUpdateWithoutCartItemsInput>
  }

  export type OrderCreateNestedOneWithoutSagaExecutionInput = {
    create?: XOR<OrderCreateWithoutSagaExecutionInput, OrderUncheckedCreateWithoutSagaExecutionInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSagaExecutionInput
    connect?: OrderWhereUniqueInput
  }

  export type SagaStepCreateNestedManyWithoutSagaExecutionInput = {
    create?: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput> | SagaStepCreateWithoutSagaExecutionInput[] | SagaStepUncheckedCreateWithoutSagaExecutionInput[]
    connectOrCreate?: SagaStepCreateOrConnectWithoutSagaExecutionInput | SagaStepCreateOrConnectWithoutSagaExecutionInput[]
    createMany?: SagaStepCreateManySagaExecutionInputEnvelope
    connect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
  }

  export type SagaStepUncheckedCreateNestedManyWithoutSagaExecutionInput = {
    create?: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput> | SagaStepCreateWithoutSagaExecutionInput[] | SagaStepUncheckedCreateWithoutSagaExecutionInput[]
    connectOrCreate?: SagaStepCreateOrConnectWithoutSagaExecutionInput | SagaStepCreateOrConnectWithoutSagaExecutionInput[]
    createMany?: SagaStepCreateManySagaExecutionInputEnvelope
    connect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
  }

  export type EnumSagaStatusFieldUpdateOperationsInput = {
    set?: $Enums.SagaStatus
  }

  export type OrderUpdateOneRequiredWithoutSagaExecutionNestedInput = {
    create?: XOR<OrderCreateWithoutSagaExecutionInput, OrderUncheckedCreateWithoutSagaExecutionInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSagaExecutionInput
    upsert?: OrderUpsertWithoutSagaExecutionInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSagaExecutionInput, OrderUpdateWithoutSagaExecutionInput>, OrderUncheckedUpdateWithoutSagaExecutionInput>
  }

  export type SagaStepUpdateManyWithoutSagaExecutionNestedInput = {
    create?: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput> | SagaStepCreateWithoutSagaExecutionInput[] | SagaStepUncheckedCreateWithoutSagaExecutionInput[]
    connectOrCreate?: SagaStepCreateOrConnectWithoutSagaExecutionInput | SagaStepCreateOrConnectWithoutSagaExecutionInput[]
    upsert?: SagaStepUpsertWithWhereUniqueWithoutSagaExecutionInput | SagaStepUpsertWithWhereUniqueWithoutSagaExecutionInput[]
    createMany?: SagaStepCreateManySagaExecutionInputEnvelope
    set?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    disconnect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    delete?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    connect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    update?: SagaStepUpdateWithWhereUniqueWithoutSagaExecutionInput | SagaStepUpdateWithWhereUniqueWithoutSagaExecutionInput[]
    updateMany?: SagaStepUpdateManyWithWhereWithoutSagaExecutionInput | SagaStepUpdateManyWithWhereWithoutSagaExecutionInput[]
    deleteMany?: SagaStepScalarWhereInput | SagaStepScalarWhereInput[]
  }

  export type SagaStepUncheckedUpdateManyWithoutSagaExecutionNestedInput = {
    create?: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput> | SagaStepCreateWithoutSagaExecutionInput[] | SagaStepUncheckedCreateWithoutSagaExecutionInput[]
    connectOrCreate?: SagaStepCreateOrConnectWithoutSagaExecutionInput | SagaStepCreateOrConnectWithoutSagaExecutionInput[]
    upsert?: SagaStepUpsertWithWhereUniqueWithoutSagaExecutionInput | SagaStepUpsertWithWhereUniqueWithoutSagaExecutionInput[]
    createMany?: SagaStepCreateManySagaExecutionInputEnvelope
    set?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    disconnect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    delete?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    connect?: SagaStepWhereUniqueInput | SagaStepWhereUniqueInput[]
    update?: SagaStepUpdateWithWhereUniqueWithoutSagaExecutionInput | SagaStepUpdateWithWhereUniqueWithoutSagaExecutionInput[]
    updateMany?: SagaStepUpdateManyWithWhereWithoutSagaExecutionInput | SagaStepUpdateManyWithWhereWithoutSagaExecutionInput[]
    deleteMany?: SagaStepScalarWhereInput | SagaStepScalarWhereInput[]
  }

  export type SagaExecutionCreateNestedOneWithoutStepsInput = {
    create?: XOR<SagaExecutionCreateWithoutStepsInput, SagaExecutionUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutStepsInput
    connect?: SagaExecutionWhereUniqueInput
  }

  export type EnumSagaStepStatusFieldUpdateOperationsInput = {
    set?: $Enums.SagaStepStatus
  }

  export type SagaExecutionUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<SagaExecutionCreateWithoutStepsInput, SagaExecutionUncheckedCreateWithoutStepsInput>
    connectOrCreate?: SagaExecutionCreateOrConnectWithoutStepsInput
    upsert?: SagaExecutionUpsertWithoutStepsInput
    connect?: SagaExecutionWhereUniqueInput
    update?: XOR<XOR<SagaExecutionUpdateToOneWithWhereWithoutStepsInput, SagaExecutionUpdateWithoutStepsInput>, SagaExecutionUncheckedUpdateWithoutStepsInput>
  }

  export type OrderCreateNestedOneWithoutOrderEventsInput = {
    create?: XOR<OrderCreateWithoutOrderEventsInput, OrderUncheckedCreateWithoutOrderEventsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderEventsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderEventsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderEventsInput, OrderUncheckedCreateWithoutOrderEventsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderEventsInput
    upsert?: OrderUpsertWithoutOrderEventsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderEventsInput, OrderUpdateWithoutOrderEventsInput>, OrderUncheckedUpdateWithoutOrderEventsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
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

  export type NestedEnumOrderItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemType | EnumOrderItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemTypeFilter<$PrismaModel> | $Enums.OrderItemType
  }

  export type NestedEnumOrderItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemType | EnumOrderItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemType[] | ListEnumOrderItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderItemTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderItemTypeFilter<$PrismaModel>
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

  export type NestedEnumSagaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStatus | EnumSagaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStatusFilter<$PrismaModel> | $Enums.SagaStatus
  }

  export type NestedEnumSagaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStatus | EnumSagaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStatus[] | ListEnumSagaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStatusWithAggregatesFilter<$PrismaModel> | $Enums.SagaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSagaStatusFilter<$PrismaModel>
    _max?: NestedEnumSagaStatusFilter<$PrismaModel>
  }

  export type NestedEnumSagaStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStepStatus | EnumSagaStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStepStatusFilter<$PrismaModel> | $Enums.SagaStepStatus
  }

  export type NestedEnumSagaStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SagaStepStatus | EnumSagaStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SagaStepStatus[] | ListEnumSagaStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSagaStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.SagaStepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSagaStepStatusFilter<$PrismaModel>
    _max?: NestedEnumSagaStepStatusFilter<$PrismaModel>
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

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutOrderInput = {
    id?: string
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutOrderInput = {
    id?: string
    cartId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutOrderInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput>
  }

  export type CartItemCreateManyOrderInputEnvelope = {
    data: CartItemCreateManyOrderInput | CartItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type SagaExecutionCreateWithoutOrderInput = {
    id?: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepCreateNestedManyWithoutSagaExecutionInput
  }

  export type SagaExecutionUncheckedCreateWithoutOrderInput = {
    id?: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepUncheckedCreateNestedManyWithoutSagaExecutionInput
  }

  export type SagaExecutionCreateOrConnectWithoutOrderInput = {
    where: SagaExecutionWhereUniqueInput
    create: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventCreateWithoutOrderInput = {
    id?: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
  }

  export type OrderEventUncheckedCreateWithoutOrderInput = {
    id?: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
  }

  export type OrderEventCreateOrConnectWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    create: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventCreateManyOrderInputEnvelope = {
    data: OrderEventCreateManyOrderInput | OrderEventCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemType?: EnumOrderItemTypeFilter<"OrderItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    metadata?: JsonNullableFilter<"OrderItem">
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutOrderInput, CartItemUncheckedUpdateWithoutOrderInput>
    create: XOR<CartItemCreateWithoutOrderInput, CartItemUncheckedCreateWithoutOrderInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutOrderInput, CartItemUncheckedUpdateWithoutOrderInput>
  }

  export type CartItemUpdateManyWithWhereWithoutOrderInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringNullableFilter<"CartItem"> | string | null
    orderId?: StringNullableFilter<"CartItem"> | string | null
    userId?: StringFilter<"CartItem"> | string
    itemType?: EnumOrderItemTypeFilter<"CartItem"> | $Enums.OrderItemType
    itemId?: StringFilter<"CartItem"> | string
    itemName?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    unitPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"CartItem"> | Decimal | DecimalJsLike | number | string
    reservationId?: StringNullableFilter<"CartItem"> | string | null
    expiresAt?: DateTimeNullableFilter<"CartItem"> | Date | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type SagaExecutionUpsertWithoutOrderInput = {
    update: XOR<SagaExecutionUpdateWithoutOrderInput, SagaExecutionUncheckedUpdateWithoutOrderInput>
    create: XOR<SagaExecutionCreateWithoutOrderInput, SagaExecutionUncheckedCreateWithoutOrderInput>
    where?: SagaExecutionWhereInput
  }

  export type SagaExecutionUpdateToOneWithWhereWithoutOrderInput = {
    where?: SagaExecutionWhereInput
    data: XOR<SagaExecutionUpdateWithoutOrderInput, SagaExecutionUncheckedUpdateWithoutOrderInput>
  }

  export type SagaExecutionUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepUpdateManyWithoutSagaExecutionNestedInput
  }

  export type SagaExecutionUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    steps?: SagaStepUncheckedUpdateManyWithoutSagaExecutionNestedInput
  }

  export type OrderEventUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    update: XOR<OrderEventUpdateWithoutOrderInput, OrderEventUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderEventCreateWithoutOrderInput, OrderEventUncheckedCreateWithoutOrderInput>
  }

  export type OrderEventUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderEventWhereUniqueInput
    data: XOR<OrderEventUpdateWithoutOrderInput, OrderEventUncheckedUpdateWithoutOrderInput>
  }

  export type OrderEventUpdateManyWithWhereWithoutOrderInput = {
    where: OrderEventScalarWhereInput
    data: XOR<OrderEventUpdateManyMutationInput, OrderEventUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderEventScalarWhereInput = {
    AND?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
    OR?: OrderEventScalarWhereInput[]
    NOT?: OrderEventScalarWhereInput | OrderEventScalarWhereInput[]
    id?: StringFilter<"OrderEvent"> | string
    orderId?: StringFilter<"OrderEvent"> | string
    eventType?: StringFilter<"OrderEvent"> | string
    eventData?: JsonFilter<"OrderEvent">
    userId?: StringNullableFilter<"OrderEvent"> | string | null
    occurredAt?: DateTimeFilter<"OrderEvent"> | Date | string
    version?: IntFilter<"OrderEvent"> | number
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    cartItems?: CartItemCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    cartItems?: CartItemUncheckedCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionUncheckedCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartItems?: CartItemUncheckedUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUncheckedUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    orderId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type OrderCreateWithoutCartItemsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCartItemsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionUncheckedCreateNestedOneWithoutOrderInput
    orderEvents?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCartItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCartItemsInput, OrderUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutCartItemsInput = {
    update: XOR<OrderUpdateWithoutCartItemsInput, OrderUncheckedUpdateWithoutCartItemsInput>
    create: XOR<OrderCreateWithoutCartItemsInput, OrderUncheckedCreateWithoutCartItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutCartItemsInput, OrderUncheckedUpdateWithoutCartItemsInput>
  }

  export type OrderUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCartItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUncheckedUpdateOneWithoutOrderNestedInput
    orderEvents?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutSagaExecutionInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemCreateNestedManyWithoutOrderInput
    cartItems?: CartItemCreateNestedManyWithoutOrderInput
    orderEvents?: OrderEventCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSagaExecutionInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutOrderInput
    orderEvents?: OrderEventUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSagaExecutionInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSagaExecutionInput, OrderUncheckedCreateWithoutSagaExecutionInput>
  }

  export type SagaStepCreateWithoutSagaExecutionInput = {
    id?: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SagaStepUncheckedCreateWithoutSagaExecutionInput = {
    id?: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SagaStepCreateOrConnectWithoutSagaExecutionInput = {
    where: SagaStepWhereUniqueInput
    create: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput>
  }

  export type SagaStepCreateManySagaExecutionInputEnvelope = {
    data: SagaStepCreateManySagaExecutionInput | SagaStepCreateManySagaExecutionInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutSagaExecutionInput = {
    update: XOR<OrderUpdateWithoutSagaExecutionInput, OrderUncheckedUpdateWithoutSagaExecutionInput>
    create: XOR<OrderCreateWithoutSagaExecutionInput, OrderUncheckedCreateWithoutSagaExecutionInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutSagaExecutionInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutSagaExecutionInput, OrderUncheckedUpdateWithoutSagaExecutionInput>
  }

  export type OrderUpdateWithoutSagaExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUpdateManyWithoutOrderNestedInput
    orderEvents?: OrderEventUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSagaExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutOrderNestedInput
    orderEvents?: OrderEventUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SagaStepUpsertWithWhereUniqueWithoutSagaExecutionInput = {
    where: SagaStepWhereUniqueInput
    update: XOR<SagaStepUpdateWithoutSagaExecutionInput, SagaStepUncheckedUpdateWithoutSagaExecutionInput>
    create: XOR<SagaStepCreateWithoutSagaExecutionInput, SagaStepUncheckedCreateWithoutSagaExecutionInput>
  }

  export type SagaStepUpdateWithWhereUniqueWithoutSagaExecutionInput = {
    where: SagaStepWhereUniqueInput
    data: XOR<SagaStepUpdateWithoutSagaExecutionInput, SagaStepUncheckedUpdateWithoutSagaExecutionInput>
  }

  export type SagaStepUpdateManyWithWhereWithoutSagaExecutionInput = {
    where: SagaStepScalarWhereInput
    data: XOR<SagaStepUpdateManyMutationInput, SagaStepUncheckedUpdateManyWithoutSagaExecutionInput>
  }

  export type SagaStepScalarWhereInput = {
    AND?: SagaStepScalarWhereInput | SagaStepScalarWhereInput[]
    OR?: SagaStepScalarWhereInput[]
    NOT?: SagaStepScalarWhereInput | SagaStepScalarWhereInput[]
    id?: StringFilter<"SagaStep"> | string
    sagaExecutionId?: StringFilter<"SagaStep"> | string
    stepNumber?: IntFilter<"SagaStep"> | number
    stepName?: StringFilter<"SagaStep"> | string
    status?: EnumSagaStepStatusFilter<"SagaStep"> | $Enums.SagaStepStatus
    serviceType?: StringFilter<"SagaStep"> | string
    actionType?: StringFilter<"SagaStep"> | string
    requestData?: JsonNullableFilter<"SagaStep">
    responseData?: JsonNullableFilter<"SagaStep">
    compensationData?: JsonNullableFilter<"SagaStep">
    startedAt?: DateTimeFilter<"SagaStep"> | Date | string
    completedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    compensatedAt?: DateTimeNullableFilter<"SagaStep"> | Date | string | null
    errorMessage?: StringNullableFilter<"SagaStep"> | string | null
  }

  export type SagaExecutionCreateWithoutStepsInput = {
    id?: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutSagaExecutionInput
  }

  export type SagaExecutionUncheckedCreateWithoutStepsInput = {
    id?: string
    orderId: string
    sagaType: string
    status?: $Enums.SagaStatus
    currentStep?: number
    totalSteps: number
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SagaExecutionCreateOrConnectWithoutStepsInput = {
    where: SagaExecutionWhereUniqueInput
    create: XOR<SagaExecutionCreateWithoutStepsInput, SagaExecutionUncheckedCreateWithoutStepsInput>
  }

  export type SagaExecutionUpsertWithoutStepsInput = {
    update: XOR<SagaExecutionUpdateWithoutStepsInput, SagaExecutionUncheckedUpdateWithoutStepsInput>
    create: XOR<SagaExecutionCreateWithoutStepsInput, SagaExecutionUncheckedCreateWithoutStepsInput>
    where?: SagaExecutionWhereInput
  }

  export type SagaExecutionUpdateToOneWithWhereWithoutStepsInput = {
    where?: SagaExecutionWhereInput
    data: XOR<SagaExecutionUpdateWithoutStepsInput, SagaExecutionUncheckedUpdateWithoutStepsInput>
  }

  export type SagaExecutionUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutSagaExecutionNestedInput
  }

  export type SagaExecutionUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    sagaType?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStatusFieldUpdateOperationsInput | $Enums.SagaStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    totalSteps?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    compensationData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OrderCreateWithoutOrderEventsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemCreateNestedManyWithoutOrderInput
    cartItems?: CartItemCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderEventsInput = {
    id?: string
    userId: string
    eventId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.OrderStatus
    paymentId?: string | null
    paymentStatus?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutOrderInput
    sagaExecution?: SagaExecutionUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderEventsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderEventsInput, OrderUncheckedCreateWithoutOrderEventsInput>
  }

  export type OrderUpsertWithoutOrderEventsInput = {
    update: XOR<OrderUpdateWithoutOrderEventsInput, OrderUncheckedUpdateWithoutOrderEventsInput>
    create: XOR<OrderCreateWithoutOrderEventsInput, OrderUncheckedCreateWithoutOrderEventsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderEventsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderEventsInput, OrderUncheckedUpdateWithoutOrderEventsInput>
  }

  export type OrderUpdateWithoutOrderEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutOrderNestedInput
    sagaExecution?: SagaExecutionUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CartItemCreateManyOrderInput = {
    id?: string
    cartId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderEventCreateManyOrderInput = {
    id?: string
    eventType: string
    eventData: JsonNullValueInput | InputJsonValue
    userId?: string | null
    occurredAt?: Date | string
    version?: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartUpdateOneWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderEventUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type OrderEventUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type OrderEventUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    eventData?: JsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemCreateManyCartInput = {
    id?: string
    orderId?: string | null
    userId: string
    itemType: $Enums.OrderItemType
    itemId: string
    itemName: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    reservationId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    itemType?: EnumOrderItemTypeFieldUpdateOperationsInput | $Enums.OrderItemType
    itemId?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SagaStepCreateManySagaExecutionInput = {
    id?: string
    stepNumber: number
    stepName: string
    status?: $Enums.SagaStepStatus
    serviceType: string
    actionType: string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    compensatedAt?: Date | string | null
    errorMessage?: string | null
  }

  export type SagaStepUpdateWithoutSagaExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SagaStepUncheckedUpdateWithoutSagaExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SagaStepUncheckedUpdateManyWithoutSagaExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepNumber?: IntFieldUpdateOperationsInput | number
    stepName?: StringFieldUpdateOperationsInput | string
    status?: EnumSagaStepStatusFieldUpdateOperationsInput | $Enums.SagaStepStatus
    serviceType?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    requestData?: NullableJsonNullValueInput | InputJsonValue
    responseData?: NullableJsonNullValueInput | InputJsonValue
    compensationData?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compensatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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