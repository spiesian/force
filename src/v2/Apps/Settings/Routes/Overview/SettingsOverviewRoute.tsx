import { Text } from "@artsy/palette"
import React from "react"
import { SettingsOverviewRoute_me } from "v2/__generated__/SettingsOverviewRoute_me.graphql"
import { createFragmentContainer, graphql } from "react-relay"

interface SettingsOverviewRouteProps {
  me: SettingsOverviewRoute_me
}

const SettingsOverviewRoute: React.FC<SettingsOverviewRouteProps> = ({
  me,
}) => {
  return (
    <>
      <Text>Overview Route</Text>
    </>
  )
}

export const SettingsOverviewRouteFragmentContainer = createFragmentContainer(
  SettingsOverviewRoute,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    me: graphql`
      fragment SettingsOverviewRoute_me on Me {
        name
      }
    `,
  }
)
