import { test, error } from "../utils";
import { Schema } from "./schema";
import { SchemaTest } from "../types";

export class NumberSchema<A extends number> extends Schema<A> {
  constructor(
    validate: SchemaTest<A> = test(
      (obj) => typeof obj === "number",
      error`is not a number`
    )
  ) {
    super(validate);
  }

  gt(n: number): NumberSchema<A> {
    return this.chain(
      test((obj) => obj > n, error`is not greater than ${n}`),
      NumberSchema
    );
  }
  ge(n: number): NumberSchema<A> {
    return this.chain(
      test((obj) => obj >= n, error`is not greater than or equal to ${n}`),
      NumberSchema
    );
  }
  eq(n: number): NumberSchema<A> {
    return this.chain(
      test((obj) => obj === n, error`is not equal to ${n}`),
      NumberSchema
    );
  }
  le(n: number): NumberSchema<A> {
    return this.chain(
      test((obj) => obj <= n, error`is not less than or equal to ${n}`),
      NumberSchema
    );
  }
  lt(n: number): NumberSchema<A> {
    return this.chain(
      test((obj) => obj < n, error`is not less than ${n}`),
      NumberSchema
    );
  }
}
