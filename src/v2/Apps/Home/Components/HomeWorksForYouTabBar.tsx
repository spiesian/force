import { Tab, Tabs } from "@artsy/palette"
import * as React from "react"
import { useSystemContext } from "v2/System"
import { HomeRecentlyViewedRailQueryRenderer } from "./HomeRecentlyViewedRail"
import { HomeWorksByArtistsYouFollowRailQueryRenderer } from "./HomeWorksByArtistsYouFollowRail"
import { useIntl } from "react-intl"

export const HomeWorksForYouTabBar: React.FC = () => {
  const { user } = useSystemContext()
  const intl = useIntl()

  if (!user) {
    return null
  }

  return (
    <Tabs>
      <Tab name={intl.formatMessage({ id: "home.newWorksByArtistsYouFollow" })}>
        <HomeWorksByArtistsYouFollowRailQueryRenderer />
      </Tab>
      <Tab name={intl.formatMessage({ id: "home.recentlyViewed" })}>
        <HomeRecentlyViewedRailQueryRenderer />
      </Tab>
    </Tabs>
  )
}
