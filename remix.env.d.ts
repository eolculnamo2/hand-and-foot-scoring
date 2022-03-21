/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare-pages/globals" />
/// <reference types="@cloudflare/workers-types" />

type Nullable<T> = null | T;

type Result<Ok = undefined, Err = undefined> =
  | { readonly res: "ok"; readonly payload: Ok }
  | { readonly res: "err"; readonly payload?: Err };
