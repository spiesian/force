import React from "react"
import { SettingsPurchasesRoute_me } from "v2/__generated__/SettingsPurchasesRoute_me.graphql"
import { createFragmentContainer, graphql } from "react-relay"
import { SettingsPurchasesFragmentContainer } from "./Components/SettingsPurchases"

interface SettingsPurchasesRouteProps {
  me: SettingsPurchasesRoute_me
}

const SettingsPurchasesRoute: React.FC<SettingsPurchasesRouteProps> = ({
  me,
}) => {
  return <SettingsPurchasesFragmentContainer me={me} />
}

export const SettingsPurchasesRouteFragmentContainer = createFragmentContainer(
  SettingsPurchasesRoute,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    me: graphql`
      fragment SettingsPurchasesRoute_me on Me {
        ...SettingsPurchases_me
      }
    `,
  }
)
