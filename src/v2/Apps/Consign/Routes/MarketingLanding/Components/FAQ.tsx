import React, { useState } from "react"
import { Box, Clickable, Flex, Text } from "@artsy/palette"
import { SectionContainer } from "./SectionContainer"

export const FAQ: React.FC = () => {
  return (
    <SectionContainer>
      <Text width="100%" textAlign="left" mb={4} variant="largeTitle">
        Frequently Asked Questions
      </Text>
      <Box>
        <ToggleButton label="What does it cost to sell with Artsy?">
          <TextItem>
            We offer no upfront fees. When the artwork sells, we charge a
            nominal seller’s commission as a percentage of the sale price. The
            commission is determined based on the total value of works you sell
            with us. You won’t be asked to cover any additional costs, such as
            shipping, insurance, or photography. <br />
          </TextItem>
        </ToggleButton>

        <ToggleButton label="What happens once I submit an artwork?">
          <TextItem>
            Based on our proprietary market data, we will let you know within 48
            hours whether your artwork has sufficient demand within the
            secondary market. If so, your work will be approved. Once approved,
            you will receive an offer from Artsy to include your work in an
            upcoming online auction. The offer will have an estimated artwork
            range and auction details. If you are interested in selling your
            work based on the offer, you can accept it or ask further questions
            to our specialists, who will guide you through the process.
          </TextItem>
        </ToggleButton>

        <ToggleButton label="How is selling with Artsy different from consigning with a traditional auction house?">
          <TextItem>
            Unlike a consignment with a traditional auction house, Artsy does
            not require any upfront costs of shipping, insurance, or marketing.
            This means no upfront fees for you. This also allows you to sell
            your work in an online auction faster, as we hold multiple auctions
            a month. In case your work doesn’t find a buyer right away, the
            auction results won’t be published and the work won’t get “burned.”
          </TextItem>
        </ToggleButton>

        <ToggleButton label="How long does it take to sell art with Artsy?">
          <TextItem>
            We hold multiple themed auctions per month, which means that your
            artwork can be sold within 2–6 weeks.
          </TextItem>
        </ToggleButton>

        <ToggleButton label="I am an artist. Can I sell my art with Artsy?">
          {/* TODO: Add line breaks and email links and anchor tags to text */}
          <TextItem>
            {`At this time, Artsy does not partner directly with artists.
            Instead, we offer partnerships for galleries, museums, and other
            institutions. If you work with a gallery, we ask you to get in touch
            with us at partners@artsy.net. Otherwise, we recommend reaching out
            to your gallery and asking them to join Artsy by visiting
            partners.artsy.net.\nArtsy has a Sell with Artsy program in which
            we currently accept consignments of works by artists that are
            already in our database who have a resale market and substantial
            collector demand. To learn more about our Sell with Artsy program,
            please visit our Help Center article on What do we look for in
            consignment submissions? Please note that not being accepted for our
            Sell with Artsy program is in no way a reflection or judgement of
            artistic ability, potential now or in the future, or commitment to
            the discipline; it is simply a result of the assessment of the
            information that we were given at the time and possible services we
            are able to currently provide. \n We'd also like to bring to your
            attention The Working Artist’s Guide which is a resource for artists
            put together by our Editorial team. We hope it can assist you and
            that you continue to enjoy exploring Artsy.`}
          </TextItem>
        </ToggleButton>

        <ToggleButton label="Can I edit my submission?">
          <TextItem>
            To edit your existing submissions or add further details, please
            contact consign@artsy.net with the subject line “Edit my submission”
            and one of our specialists will assist you. In the body of your
            email, please include the submission ID number, which can be found
            in the email receipt you received from Artsy.
          </TextItem>
        </ToggleButton>

        <ToggleButton label="How do I contact an Artsy specialist?">
          <TextItem>
            You can contact an Artsy specialist at any time by emailing
            consign@artsy.net.
          </TextItem>
        </ToggleButton>
      </Box>
    </SectionContainer>
  )
}

const ToggleButton: React.FC<{
  expanded?: boolean
  label: string
}> = ({ expanded, label, children }) => {
  const [isExpanded, toggleExpand] = useState(expanded)

  return (
    <Box mb={2}>
      <Clickable onClick={() => toggleExpand(!isExpanded)}>
        <Flex alignContent="center" alignItems="baseline">
          {isExpanded ? (
            <PlusMinusIcon>-</PlusMinusIcon>
          ) : (
            <PlusMinusIcon>+</PlusMinusIcon>
          )}
          <Text variant="subtitle" textAlign="left">
            {label}
          </Text>
        </Flex>
      </Clickable>

      {isExpanded && (
        <Box mt={2} ml="24px">
          {children}
        </Box>
      )}
    </Box>
  )
}

const PlusMinusIcon: React.FC = ({ children }) => (
  <Flex
    width={13}
    mr={1}
    justifyContent="center"
    alignContent="center"
    textAlign="center"
  >
    <Text
      variant="largeTitle"
      fontWeight="medium"
      color="black60"
      position="relative"
      top="2px"
    >
      {children}
    </Text>
  </Flex>
)

const TextItem: React.FC = ({ children }) => {
  return (
    <Text variant="text" color="black60" maxWidth={650}>
      {children}
    </Text>
  )
}
