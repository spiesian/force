import { Box, BoxProps, Flex, Shelf, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { ShowsRail_partner } from "v2/__generated__/ShowsRail_partner.graphql"
import { ViewAllButton } from "./ViewAllButton"
import { extractNodes } from "v2/Utils/extractNodes"
import { CellShowFragmentContainer } from "v2/Components/Cells/CellShow"

interface ShowsRailProps extends BoxProps {
  partner: ShowsRail_partner
}

const ShowsRail: React.FC<ShowsRailProps> = ({ partner, ...rest }) => {
  if (
    !partner?.showsConnection?.edges ||
    partner.showsConnection.edges.length === 0
  ) {
    return null
  }

  const { slug, showsConnection, displayFullPartnerPage } = partner
  const shows = extractNodes(showsConnection)

  return (
    <Box {...rest}>
      <Flex
        mb={4}
        justifyContent="space-between"
        alignItems="center"
        position="relative"
      >
        <Text variant="lg">All Events</Text>

        {displayFullPartnerPage && (
          <ViewAllButton to={`/partner/${slug}/shows`} />
        )}
      </Flex>

      <Shelf alignItems="flex-start">
        {shows.map(show => (
          <CellShowFragmentContainer
            key={show.internalID}
            show={show}
            displayKind
            displayPartner={false}
          />
        ))}
      </Shelf>
    </Box>
  )
}

export const ShowsRailFragmentContainer = createFragmentContainer(ShowsRail, {
  partner: graphql`
    fragment ShowsRail_partner on Partner {
      slug
      displayFullPartnerPage
      showsConnection(status: ALL, first: 20, isDisplayable: true) {
        totalCount
        edges {
          node {
            ...CellShow_show
            internalID
          }
        }
      }
    }
  `,
})
