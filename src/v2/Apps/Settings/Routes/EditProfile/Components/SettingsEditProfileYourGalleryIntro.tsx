import { Text } from "@artsy/palette"
import { FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { SettingsEditProfileYourGalleryIntro_me } from "v2/__generated__/SettingsEditProfileYourGalleryIntro_me.graphql"

interface SettingsEditProfileYourGalleryIntroProps {
  me: SettingsEditProfileYourGalleryIntro_me
}

const SettingsEditProfileYourGalleryIntro: FC<SettingsEditProfileYourGalleryIntroProps> = ({
  me,
}) => {
  return (
    <>
      <Text variant="lg" mb={4}>
        Your Gallery Intro
      </Text>

      <Text variant="xs" textTransform="uppercase" mb={1}>
        Preview
      </Text>

      <Text variant="lg" color="black60">
        {me.inquiryIntroduction}
      </Text>
    </>
  )
}

export const SettingsEditProfileYourGalleryIntroFragmentContainer = createFragmentContainer(
  SettingsEditProfileYourGalleryIntro,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    me: graphql`
      fragment SettingsEditProfileYourGalleryIntro_me on Me {
        inquiryIntroduction
      }
    `,
  }
)
