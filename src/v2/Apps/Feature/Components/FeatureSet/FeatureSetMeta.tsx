import * as React from "react"
import { Box, BoxProps, HTML, Text } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { FeatureSetMeta_set } from "v2/__generated__/FeatureSetMeta_set.graphql"

export interface FeatureSetMetaProps extends BoxProps {
  set: FeatureSetMeta_set
}

export const FeatureSetMeta: React.FC<FeatureSetMetaProps> = ({
  set,
  ...rest
}) => {
  return (
    <Box {...rest}>
      {set.name && (
        <Text variant={["lg", "xl"]} mb={4}>
          {set.name}
        </Text>
      )}

      {set.description && (
        <HTML variant="text" color="black60" html={set.description} mt={1} />
      )}
    </Box>
  )
}

export const FeatureSetMetaFragmentContainer = createFragmentContainer(
  FeatureSetMeta,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    set: graphql`
      fragment FeatureSetMeta_set on OrderedSet {
        name
        description(format: HTML)
      }
    `,
  }
)
