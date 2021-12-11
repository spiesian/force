import { BoxProps } from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ShowLocationHoursFragmentContainer } from "./ShowLocationHours"
import { ShowHours_show } from "v2/__generated__/ShowHours_show.graphql"

export interface ShowHoursProps extends BoxProps {
  show: ShowHours_show
}

export const ShowHours: React.FC<ShowHoursProps> = ({ show, ...rest }) => {
  const location = show.location ?? show.fair?.location

  if (!location) {
    return null
  }

  return <ShowLocationHoursFragmentContainer location={location} {...rest} />
}

export const ShowHoursFragmentContainer = createFragmentContainer(ShowHours, {
  // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
  show: graphql`
    fragment ShowHours_show on Show {
      location {
        ...ShowLocationHours_location
      }
      fair {
        location {
          ...ShowLocationHours_location
        }
      }
    }
  `,
})
