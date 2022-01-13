import * as React from "react"
import styled from "styled-components"
import { Media } from "v2/Utils/Responsive"
import {
  ArtsyMarkIcon,
  Box,
  boxMixin,
  BoxProps,
  Column,
  FacebookIcon,
  Flex,
  GridColumns,
  InstagramIcon,
  Separator,
  Text,
  TextVariant,
  TwitterIcon,
  useThemeConfig,
  WeChatIcon,
} from "@artsy/palette"
import { CCPARequest } from "../CCPARequest"
import { FooterDownloadAppBanner } from "./FooterDownloadAppBanner"
import { RouterLink, RouterLinkProps } from "v2/System/Router/RouterLink"
import { FormattedMessage } from "react-intl"
import { LanguageSelect } from "v2/Components/LanguageSelect"
import { getClientParam } from "v2/Utils/getClientParam"

interface FooterProps extends BoxProps {}

export const Footer: React.FC<FooterProps> = props => {
  const tokens = useThemeConfig({
    v2: {
      header: "mediumText" as TextVariant,
      body: "text" as TextVariant,
      pt: 2,
      pb: 4,
    },
    v3: {
      header: "md" as TextVariant,
      body: "sm" as TextVariant,
      pt: 4,
      pb: 6,
    },
  })

  return (
    <Box
      id="download-app-banner"
      mt={6}
      borderTop="1px solid"
      borderColor="black10"
      {...props}
    >
      <FooterDownloadAppBanner />

      <footer>
        <GridColumns pt={tokens.pt} pb={tokens.pb} gridRowGap={[4, 0]}>
          <Column span={3}>
            <Text variant={tokens.header} fontWeight="bold" mb={2}>
              <FormattedMessage id="footer.aboutUs" />
            </Text>

            <Text variant={tokens.body}>
              <FooterLink my={2} to="/about">
                <FormattedMessage id="footer.about" />
              </FooterLink>

              <FooterLink my={2} to="/about/jobs">
                <FormattedMessage id="footer.jobs" />
              </FooterLink>

              <FooterLink my={2} to="/about/press">
                <FormattedMessage id="footer.press" />
              </FooterLink>

              <FooterLink mt={2} to="/contact">
                <FormattedMessage id="footer.contact" />
              </FooterLink>
            </Text>
          </Column>

          <Column span={3}>
            <Text variant={tokens.header} fontWeight="bold" mb={2}>
              <FormattedMessage id="footer.resources" />
            </Text>

            <Text variant={tokens.body}>
              <FooterLink my={2} to="https://artsy.github.io/open-source">
                <FormattedMessage id="footer.openSource" />
              </FooterLink>

              <FooterLink my={2} to="https://medium.com/artsy-blog">
                <FormattedMessage id="footer.blog" />
              </FooterLink>

              <FooterLink my={2} to="/categories">
                <FormattedMessage id="footer.artGenomeProject" />
              </FooterLink>

              <FooterLink mt={2} to="/artsy-education">
                <FormattedMessage id="footer.education" />
              </FooterLink>
            </Text>
          </Column>

          <Column span={3}>
            <Text variant={tokens.header} fontWeight="bold" mb={2}>
              <FormattedMessage id="footer.partnerships" />
            </Text>

            <Text variant={tokens.body}>
              <FooterLink my={2} to="https://partners.artsy.net">
                <FormattedMessage id="footer.artsyForGalleries" />
              </FooterLink>

              <FooterLink my={2} to="/institution-partnerships">
                <FormattedMessage id="footer.artsyForMuseums" />
              </FooterLink>

              <FooterLink mt={2} to="/auction-partnerships">
                <FormattedMessage id="footer.artsyForAuctions" />
              </FooterLink>

              <FooterLink
                mt={2}
                to="https://partners.artsy.net/artsy-fair-partnerships/"
              >
                <FormattedMessage id="footer.artsyForFairs" />
              </FooterLink>
            </Text>
          </Column>

          <Column span={3} wrap>
            <Text variant={tokens.header} fontWeight="bold" mb={2}>
              <FormattedMessage id="footer.support" />
            </Text>

            <Text variant={tokens.body}>
              <FooterLink my={2} to="https://support.artsy.net">
                <FormattedMessage id="footer.visitOurHelpCenter" />
              </FooterLink>

              <FooterLink
                mt={2}
                to="https://support.artsy.net/hc/en-us/categories/360003689513-Buy"
              >
                <FormattedMessage id="footer.buyingOnArtsy" />
              </FooterLink>
            </Text>

            <Media greaterThan="xs">
              <Text variant={tokens.header} fontWeight="bold" mt={4} mb={1}>
                <FormattedMessage id="footer.getTheApp" />
              </Text>

              <Text variant={tokens.body}>
                <FooterLink
                  mt={2}
                  to="https://apps.apple.com/us/app/artsy-buy-sell-original-art/id703796080"
                >
                  <FormattedMessage id="footer.iosApp" />
                </FooterLink>

                <FooterLink
                  mt={2}
                  to="https://play.google.com/store/apps/details?id=net.artsy.app"
                >
                  <FormattedMessage id="footer.androidApp" />
                </FooterLink>
              </Text>
            </Media>
          </Column>

          <Column span={12} display={["flex", "none"]} flexWrap="wrap">
            <PolicyLinks />
          </Column>
        </GridColumns>

        <Separator />

        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          m="auto"
          py={2}
        >
          <Media at="xs">
            <Flex flexShrink={0}>
              <ArtsyMarkIcon title="Artsy" width={20} height={20} mr={2} />
            </Flex>
          </Media>

          <Media greaterThan="xs">
            <Flex alignItems="center">
              <Flex flexShrink={0}>
                <ArtsyMarkIcon title="Artsy" width={30} height={30} mr={2} />
              </Flex>

              <Flex flexDirection="row">
                <PolicyLinks />
              </Flex>
            </Flex>
          </Media>

          <Flex alignItems="center">
            <WeChat>
              <WeChatIcon width={20} height={20} mr={2} />
            </WeChat>

            <FooterLink to="https://twitter.com/artsy">
              <TwitterIcon width={20} height={20} mr={2} />
            </FooterLink>

            <FooterLink to="https://www.facebook.com/artsy">
              <FacebookIcon width={20} height={20} mr={2} />
            </FooterLink>

            <FooterLink to="https://www.instagram.com/artsy/">
              <InstagramIcon width={20} height={20} />
            </FooterLink>
          </Flex>
        </Flex>
      </footer>
    </Box>
  )
}

const WeChat = styled(Flex)`
  > a {
    display: flex;
  }
`

const appendLocaleToParams = locale => {
  window.history.pushState({}, "", `?locale=${locale}`)
  window.location.reload()
}

const selectedLocale = () => {
  const locale = getClientParam("locale")
  return locale || "en-US"
}

const PolicyLinks = () => {
  const tokens = useThemeConfig({
    v2: {
      variant: "caption" as TextVariant,
    },
    v3: {
      variant: "xs" as TextVariant,
    },
  })

  return (
    <Text
      variant={tokens.variant}
      color="black60"
      display="flex"
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex mr={1}>© {new Date().getFullYear()} Artsy</Flex>

      <FooterLink color="black60" mr={1} to="/terms">
        <FormattedMessage id="footer.termsOfUse" />
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/privacy">
        <FormattedMessage id="footer.privacyPolicy" />
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/security">
        <FormattedMessage id="footer.security" />
      </FooterLink>

      <FooterLink color="black60" mr={1} to="/conditions-of-sale">
        <FormattedMessage id="footer.conditionsOfSale" />
      </FooterLink>

      <FooterLink
        color="black60"
        mr={1}
        to="/page/artsy-curated-auctions-listing-agreement"
      >
        <FormattedMessage id="footer.acaSellersAgreement" />
      </FooterLink>

      <Flex mr={1}>
        <CCPARequest />
      </Flex>

      <Flex mr={1}>
        <LanguageSelect
          selected={selectedLocale()}
          onSelect={value => appendLocaleToParams(value)}
        />
      </Flex>
    </Text>
  )
}

export const FooterLink = styled(RouterLink)<RouterLinkProps & BoxProps>`
  display: flex;
  text-decoration: none;
  white-space: nowrap;
  ${boxMixin}
`

FooterLink.displayName = "FooterLink"
