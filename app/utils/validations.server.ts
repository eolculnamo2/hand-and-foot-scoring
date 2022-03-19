import { json } from "remix";
import { match } from "ts-pattern";

export const assertType = <T>(value: unknown, type: string): Result<T> => {
  if (typeof value !== type) {
    console.error(
      `Wrong Type Error: expected ${type} but received ${typeof value}`
    );
    return { res: "err" };
  }
  return { res: "ok", payload: value as T };
};

// add as needed
type Status = 400 | 404 | 500;
export const throwByStatus = (status: Status, customMessage?: string) => {
  match(status)
    .with(400, () => {
      throw json(customMessage ?? "Bad request", 400);
    })
    .with(404, () => {
      throw json(customMessage ?? "Not found", 404);
    })
    .with(500, () => {
      throw json(customMessage ?? "Not found", 500);
    })
    .otherwise(() => {
      throw json("Unexpected error thrown");
    });
};

export const assertEmail = (email: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const minLength = (text: string, length: number) =>
  text.length >= length;
