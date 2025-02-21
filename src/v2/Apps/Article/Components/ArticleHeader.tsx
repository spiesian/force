import { FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import {
  FullBleedHeader,
  FullBleedHeaderOverlay,
  MIN_HEIGHT,
} from "v2/Components/FullBleedHeader"
import {
  Box,
  FullBleed,
  Image,
  ResponsiveBox,
  Spacer,
  Text,
} from "@artsy/palette"
import { ArticleHeader_article } from "v2/__generated__/ArticleHeader_article.graphql"
import { useNavBarHeight } from "v2/Components/NavBar/useNavBarHeight"
import styled from "styled-components"
import { RouterLink } from "v2/System/Router/RouterLink"

interface ArticleHeaderProps {
  article: ArticleHeader_article
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  const { desktop, mobile } = useNavBarHeight()

  if (!article.hero) {
    return (
      <>
        <Spacer mt={4} />

        <Text variant="xs" textTransform="uppercase">
          {article.vertical}
        </Text>

        <RouterLink to={article.href} display="block" textDecoration="none">
          <Text variant="xxl">{article.title}</Text>

          <Text variant="lg" color="black60">
            {article.byline}
          </Text>
        </RouterLink>
      </>
    )
  }

  switch (article.hero.layout) {
    case "FULLSCREEN": {
      return (
        <FullBleedHeader
          {...(article.hero.media
            ? { src: article.hero.media, mode: "VIDEO" }
            : { src: article.hero.image?.url!, mode: "IMAGE" })}
        >
          <FullBleedHeaderOverlay
            alignItems="flex-start"
            flexDirection="column"
            color="white100"
            p={4}
          >
            <Text variant="xs" textTransform="uppercase">
              {article.vertical}
            </Text>

            <Text variant="xxl">{article.title}</Text>

            <Text variant="lg" color="rgba(255, 255, 255, 0.8)">
              {article.byline}
            </Text>
          </FullBleedHeaderOverlay>
        </FullBleedHeader>
      )
    }

    case "SPLIT": {
      const image = article.hero.image?.split

      return (
        <FullBleed display="flex" flexDirection={["column-reverse", "row"]}>
          <Box flex={1} p={[2, 4]}>
            <Text variant="xs" textTransform="uppercase">
              {article.vertical}
            </Text>

            <Text variant="xxl" flex={1}>
              {article.title}
            </Text>

            <Text variant="lg" color="black60">
              {article.byline}
            </Text>
          </Box>

          <Box flex={1} bg="black10">
            {article.hero.media && (
              <Box
                display="block"
                width="100%"
                height={[
                  `max(calc(50vh - ${mobile}px), ${MIN_HEIGHT}px)`,
                  `max(calc(90vh - ${desktop}px), ${MIN_HEIGHT}px)`,
                ]}
                style={{ objectFit: "cover" }}
                as="video"
                // @ts-ignore
                src={article.hero.media}
                autoPlay
                loop
                playsInline
                muted
              />
            )}

            {image && (
              <Image
                src={image.src}
                srcSet={image.srcSet}
                width="100%"
                height={[
                  `max(calc(50vh - ${mobile}px), ${MIN_HEIGHT}px)`,
                  `max(calc(90vh - ${desktop}px), ${MIN_HEIGHT}px)`,
                ]}
                style={{ objectFit: "cover" }}
                alt=""
                lazyLoad
              />
            )}
          </Box>
        </FullBleed>
      )
    }

    case "BASIC": {
      return (
        <>
          <Spacer mt={4} />

          <Box textAlign="center">
            {article.hero.embed && (
              <ResponsiveBox
                aspectWidth={16}
                aspectHeight={9}
                maxWidth="100%"
                bg="black10"
                mb={4}
              >
                <Embed
                  dangerouslySetInnerHTML={{ __html: article.hero.embed }}
                />
              </ResponsiveBox>
            )}

            {article.vertical && (
              <Text variant="xs" textTransform="uppercase">
                {article.vertical}
              </Text>
            )}

            <Text variant="xxl" flex={1}>
              {article.title}
            </Text>

            <Text variant="lg" color="black60" mb={2}>
              {article.byline}
            </Text>
          </Box>
        </>
      )
    }

    case "TEXT": {
      const image = article.hero.image?.text

      return (
        <FullBleed>
          <Box mb={12} p={[2, 4]}>
            <Text variant="xs" textTransform="uppercase">
              {article.vertical}
            </Text>

            <Text variant="xxl" flex={1}>
              {article.title}
            </Text>

            <Text variant="lg" color="black60">
              {article.byline}
            </Text>
          </Box>

          {image && (
            <Box mx={[2, 4]}>
              <ResponsiveBox aspectWidth={16} aspectHeight={9} maxWidth="100%">
                <Image
                  src={image.src}
                  srcSet={image.srcSet}
                  width="100%"
                  height="100%"
                  alt=""
                  lazyLoad
                />
              </ResponsiveBox>
            </Box>
          )}
        </FullBleed>
      )
    }

    default:
      return null
  }
}

export const ArticleHeaderFragmentContainer = createFragmentContainer(
  ArticleHeader,
  {
    article: graphql`
      fragment ArticleHeader_article on Article {
        title
        href
        vertical
        byline
        hero {
          ... on ArticleFeatureSection {
            layout
            embed
            media
            image {
              url
              split: resized(width: 900) {
                src
                srcSet
              }
              text: cropped(width: 1600, height: 900) {
                src
                srcSet
              }
            }
          }
        }
      }
    `,
  }
)

const Embed = styled.div`
  width: 100%;
  height: 100%;

  > iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
`
