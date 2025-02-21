import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { SettingsPaymentsMethodsFragmentContainer } from "./Components/SettingsPaymentsMethods"
import { SettingsPaymentsRoute_me } from "v2/__generated__/SettingsPaymentsRoute_me.graphql"

interface SettingsPaymentsRouteProps {
  me: SettingsPaymentsRoute_me
}

const SettingsPaymentsRoute: React.FC<SettingsPaymentsRouteProps> = ({
  me,
}) => {
  return <SettingsPaymentsMethodsFragmentContainer me={me} />
}

export const SettingsPaymentsRouteFragmentContainer = createFragmentContainer(
  SettingsPaymentsRoute,
  {
    me: graphql`
      fragment SettingsPaymentsRoute_me on Me {
        ...SettingsPaymentsMethods_me
      }
    `,
  }
)
