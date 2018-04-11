// @flow

export type Id = number

export type RouteContext = {
  params: { [string]: any }
}

export type Router = {
  redirect: string => void
}

export type Css = {
  [string]: string
}

export type Props = {
  [string]: any
}
