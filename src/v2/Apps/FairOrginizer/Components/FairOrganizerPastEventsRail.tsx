import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { FairOrganizerPastEventRailCellFragmentContainer as FairOrganizerPastEventRailCell } from "./FairOrganizerPastEventRailCell"
import { FairOrganizerPastEventsRail_fairOrganizer } from "v2/__generated__/FairOrganizerPastEventsRail_fairOrganizer.graphql"
import { extractNodes } from "v2/Utils/extractNodes"
import { Rail } from "v2/Components/Rail"

interface FairOrganizerPastEventsRailProps {
  fairOrganizer: FairOrganizerPastEventsRail_fairOrganizer
}

export const FairOrganizerPastEventsRail: React.FC<FairOrganizerPastEventsRailProps> = props => {
  const { fairOrganizer } = props
  const pastFairs = extractNodes(fairOrganizer.pastFairs)

  if (pastFairs.length === 0) {
    return null
  }

  return (
    <Rail
      title="Past Events"
      getItems={() => {
        return pastFairs.map(fair => {
          return <FairOrganizerPastEventRailCell key={fair.id} fair={fair} />
        })
      }}
    />
  )
}

export const FairOrganizerPastEventsRailFragmentContainer = createFragmentContainer(
  FairOrganizerPastEventsRail,
  {
    fairOrganizer: graphql`
      fragment FairOrganizerPastEventsRail_fairOrganizer on FairOrganizer {
        pastFairs: fairsConnection(
          first: 20
          sort: START_AT_DESC
          status: CLOSED
          hasFullFeature: true
        ) {
          edges {
            node {
              id
              ...FairOrganizerPastEventRailCell_fair
            }
          }
        }
      }
    `,
  }
)
