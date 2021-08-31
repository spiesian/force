import { useCallback, useContext, useMemo } from "react"
import { RouterContext } from "found"

export const useIsSupportedInRouter = (to?: string | null) => {
  const context = useContext(RouterContext)

  const routes = context?.router?.matcher?.routeConfig ?? []
  const matcher = context?.router?.matcher

  const checkIsSupportedInRouter = useCallback(
    (to?: string | null) => {
      return !!matcher?.matchRoutes(routes, to)
    },
    [matcher, routes]
  )

  const isSupportedInRouter = useMemo(() => checkIsSupportedInRouter(to), [
    checkIsSupportedInRouter,
    to,
  ])

  return { isSupportedInRouter, checkIsSupportedInRouter }
}
