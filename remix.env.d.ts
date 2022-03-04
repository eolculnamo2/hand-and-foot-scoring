/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare-pages/globals" />
/// <reference types="@cloudflare/workers-types" />

type Nullable<T> = null | T

type Result<Ok = undefined, Err = undefined> = { res: 'ok', payload?: Ok} | { res: 'err', payload?: Err}