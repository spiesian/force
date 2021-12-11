import loadable from "@loadable/component"
import { graphql } from "react-relay"
import { AppRouteConfig } from "v2/System/Router/Route"

const UnsubscribeApp = loadable(
  () => import(/* webpackChunkName: "unsubscribeBundle" */ "./UnsubscribeApp"),
  { resolveComponent: component => component.UnsubscribeAppFragmentContainer }
)

export const unsubscribeRoutes: AppRouteConfig[] = [
  {
    path: "/unsubscribe",
    getComponent: () => UnsubscribeApp,
    onClientSideRender: () => {
      UnsubscribeApp.preload()
    },
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    query: graphql`
      query unsubscribeRoutes_UnsubscribeQuery {
        me {
          ...UnsubscribeApp_me
        }
      }
    `,
  },
]
