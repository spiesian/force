import * as React from "react"
import { Separator, FullBleed, Marquee } from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { NavigationTabsFragmentContainer as NavigationTabs } from "v2/Apps/Partner/Components/NavigationTabs"
import { PartnerHeaderFragmentContainer as PartnerHeader } from "./Components/PartnerHeader"
import { PartnerApp_partner } from "v2/__generated__/PartnerApp_partner.graphql"
import { PartnerHeaderImageFragmentContainer as PartnerHeaderImage } from "./Components/PartnerHeader/PartnerHeaderImage"
import { PartnerMetaFragmentContainer } from "./Components/PartnerMeta"
import { StickyProvider } from "v2/Components/Sticky"
import { PartnerArtistsLoadingContextProvider } from "./Utils/PartnerArtistsLoadingContext"
import { HttpError } from "found"

export interface PartnerAppProps {
  partner: PartnerApp_partner
}

export const PartnerApp: React.FC<PartnerAppProps> = ({
  partner,
  children,
}) => {
  const {
    profile,
    partnerType,
    displayFullPartnerPage,
    isDefaultProfilePublic,
    partnerPageEligible,
    categories,
  } = partner

  if (!isDefaultProfilePublic || !partnerPageEligible) {
    throw new HttpError(404)
  }

  const galleryBadges = ["Black Owned", "Women Owned"]

  const eligibleCategories = (categories || []).filter(Boolean)
  const categoryNames: string[] = eligibleCategories.map(
    category => category?.name || ""
  )
  const firstEligibleBadgeName: string | undefined = galleryBadges.find(badge =>
    categoryNames.includes(badge)
  )

  return (
    <PartnerArtistsLoadingContextProvider>
      <StickyProvider>
        {profile && displayFullPartnerPage && (
          <PartnerHeaderImage profile={profile} />
        )}

        <PartnerMetaFragmentContainer partner={partner} />

        <PartnerHeader partner={partner} />

        <FullBleed mb={[2, 4]}>
          {firstEligibleBadgeName ? (
            <Marquee speed="static" marqueeText={firstEligibleBadgeName} />
          ) : (
            <Separator />
          )}
        </FullBleed>

        {(displayFullPartnerPage || partnerType === "Brand") && (
          <NavigationTabs partner={partner} />
        )}

        {children}
      </StickyProvider>
    </PartnerArtistsLoadingContextProvider>
  )
}

export const PartnerAppFragmentContainer = createFragmentContainer(PartnerApp, {
  partner: graphql`
    fragment PartnerApp_partner on Partner {
      partnerType
      displayFullPartnerPage
      partnerPageEligible
      isDefaultProfilePublic
      categories {
        id
        name
      }
      profile {
        ...PartnerHeaderImage_profile
      }
      ...PartnerMeta_partner
      ...PartnerHeader_partner
      ...NavigationTabs_partner
    }
  `,
})
