// @flow

export type Id = number

export type RouteContext = {
  params: { [string]: any }
}

export type Router = {
  redirect: string => void
}

export type NextFunction = (err?: ?Error) => mixed

export type Css = {
  [string]: string
}

export type Props = {
  [string]: any
}

export type Ok<T> = {| ok: true, value: T |}
export type Err = {| ok: false, error: Error |}
export type Result<T> = Ok<T> | Err
