import { Button, Join, ModalDialog, Select, Spacer, Text } from "@artsy/palette"
import { createRefetchContainer, graphql, RelayRefetchProp } from "react-relay"
import { useRouter } from "v2/System/Router/useRouter"
import { AuctionBidRoute_sale } from "v2/__generated__/AuctionBidRoute_sale.graphql"
import { AuctionBidRoute_artwork } from "v2/__generated__/AuctionBidRoute_artwork.graphql"
import { AuctionBidRoute_me } from "v2/__generated__/AuctionBidRoute_me.graphql"
import { AuctionLotInfoFragmentContainer } from "./Components/AuctionLotInfo"
import { dropWhile } from "lodash"
import { Form, Formik } from "formik"
import { PricingTransparencyQueryRenderer } from "./Components/PricingTransparency"
import { Match } from "found"
import { useEffect } from "react"
import { useSubmitBid } from "./useSubmitBid"
import { AddressFormWithCreditCard } from "v2/Apps/Auction/Components/Form/AddressFormWithCreditCard"
import { ConditionsOfSaleCheckbox } from "v2/Apps/Auction/Components/Form/ConditionsOfSaleCheckbox"
import {
  biddingValidationSchemas,
  getSelectedBid,
  initialValuesForBidding,
} from "v2/Apps/Auction/Components/Form/Utils"
import { useAuctionTracking } from "v2/Apps/Auction/Hooks/useAuctionTracking"
import { CreditCardInputProvider } from "v2/Components/CreditCardInput"
import { ErrorStatus } from "../../Components/Form/ErrorStatus"

interface AuctionBidRouteProps {
  artwork: AuctionBidRoute_artwork
  me: AuctionBidRoute_me
  relay: RelayRefetchProp
  sale: AuctionBidRoute_sale
}

const AuctionBidRoute: React.FC<AuctionBidRouteProps> = ({
  artwork,
  me,
  relay,
  sale,
}) => {
  const { match, router } = useRouter()
  const { tracking } = useAuctionTracking()

  const {
    artworkSlug,
    bidderID,
    displayIncrements,
    modalWidth,
    requiresCheckbox,
    requiresPaymentInformation,
    selectedBid,
    validationSchema,
  } = computeProps({ artwork, match, me })

  const { submitBid } = useSubmitBid({
    artwork,
    bidderID,
    me,
    relay,
    requiresPaymentInformation,
    sale,
  })

  const handleBidSubmit = async (values, helpers) => {
    try {
      await submitBid(values, helpers)
    } catch (error) {
      // TODO: Connect to system errors
      console.error("handleBidSubmit", error)
    }
  }

  const handleModalClose = () => {
    router.push(`/auction/${sale.slug}`)
  }

  // Track initial load
  useEffect(() => {
    tracking.bidPageView({ artwork, me })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ModalDialog
      title="Confirm Your Bid"
      onClose={handleModalClose}
      width={modalWidth}
    >
      <Formik
        validateOnMount
        initialValues={{
          ...initialValuesForBidding,
          agreeToTerms: requiresPaymentInformation ? false : true,
          creditCard: requiresPaymentInformation ? false : true,
          selectedBid,
        }}
        validationSchema={validationSchema}
        onSubmit={handleBidSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          isValid,
          setFieldError,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <Form>
              <Join separator={<Spacer my={2} />}>
                <AuctionLotInfoFragmentContainer
                  saleArtwork={artwork.saleArtwork!}
                />

                <Text variant="lg">Set Your Max Bid</Text>

                <Select
                  selected={values.selectedBid}
                  onSelect={value => {
                    tracking.maxBidSelected({
                      bidderID: bidderID!,
                      maxBid: value,
                    })

                    setFieldError("selectedBid", undefined)
                    setFieldValue("selectedBid", value)
                    setFieldTouched("selectedBid")
                  }}
                  options={displayIncrements}
                  error={touched.selectedBid && (errors.selectedBid as string)}
                />

                <PricingTransparencyQueryRenderer
                  saleId={artwork.saleArtwork?.sale?.slug!}
                  artworkId={artworkSlug}
                />

                {requiresPaymentInformation && <AddressFormWithCreditCard />}
                {requiresCheckbox && <ConditionsOfSaleCheckbox />}

                <Button
                  width="100%"
                  loading={isSubmitting}
                  disabled={!isValid}
                  type="submit"
                >
                  Confirm Bid
                </Button>

                <ErrorStatus />
              </Join>
            </Form>
          )
        }}
      </Formik>
    </ModalDialog>
  )
}

export const AuctionBidRouteFragmentContainer = createRefetchContainer(
  (props: AuctionBidRouteProps) => {
    return (
      // Wrap the provider down here as we need it for our hooks
      <CreditCardInputProvider>
        <AuctionBidRoute {...props} />
      </CreditCardInputProvider>
    )
  },
  {
    sale: graphql`
      fragment AuctionBidRoute_sale on Sale {
        internalID
        slug
      }
    `,
    artwork: graphql`
      fragment AuctionBidRoute_artwork on Artwork {
        slug
        internalID
        saleArtwork {
          ...AuctionLotInfo_saleArtwork
            @arguments(imageWidth: 150, imageHeight: 150)
          minimumNextBid {
            cents
          }
          increments(useMyMaxBid: true) {
            cents
            display
          }
          sale {
            internalID
            bidder {
              id
            }
            slug
            registrationStatus {
              qualifiedForBidding
            }
          }
        }
      }
    `,
    me: graphql`
      fragment AuctionBidRoute_me on Me {
        internalID
        hasQualifiedCreditCards
      }
    `,
  },
  graphql`
    query AuctionBidRouteQuery($artworkID: String!, $saleID: String!) {
      artwork(id: $artworkID) {
        ...AuctionBidRoute_artwork
      }
      me {
        ...AuctionBidRoute_me
      }
      sale(id: $saleID) {
        ...AuctionBidRoute_sale
      }
    }
  `
)

const computeProps = ({
  artwork,
  match,
  me,
}: {
  artwork: AuctionBidRoute_artwork
  match: Match
  me: AuctionBidRoute_me
}) => {
  const artworkSlug = match.params.artworkSlug
  const bidder = artwork.saleArtwork?.sale?.bidder
  const bidderID = bidder?.id

  const displayIncrements = dropWhile(
    artwork.saleArtwork?.increments,
    increment => {
      // @ts-ignore
      return increment.cents < artwork.saleArtwork?.minimumNextBid!.cents!
    }
  ).map(increment => {
    return {
      value: increment!.cents!.toString(),
      text: increment!.display!,
    }
  })

  const initialSelectedBid = match?.location?.query?.bid

  const selectedBid = getSelectedBid({
    initialSelectedBid,
    displayIncrements,
  })

  const requiresCheckbox = !bidder
  const requiresPaymentInformation =
    requiresCheckbox && !me.hasQualifiedCreditCards

  const {
    validationSchemaForRegisteredUsers,
    validationSchemaForUnregisteredUsersWithCreditCard,
    validationSchemaForUnregisteredUsersWithoutCreditCard,
  } = biddingValidationSchemas

  const validationSchema = (() => {
    if (requiresCheckbox || requiresPaymentInformation) {
      if (requiresPaymentInformation) {
        return validationSchemaForUnregisteredUsersWithoutCreditCard
      } else {
        return validationSchemaForUnregisteredUsersWithCreditCard
      }
    } else {
      return validationSchemaForRegisteredUsers
    }
  })()

  const modalWidth = requiresPaymentInformation ? ["100%", 600] : null

  return {
    artworkSlug,
    bidderID: bidderID!,
    displayIncrements,
    modalWidth,
    requiresCheckbox,
    requiresPaymentInformation,
    selectedBid,
    validationSchema,
  }
}
