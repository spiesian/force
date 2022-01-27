import loadable from "@loadable/component"
import { Redirect, RedirectException } from "found"
import { graphql } from "react-relay"
import { AppRouteConfig } from "v2/System/Router/Route"
import { getENV } from "v2/Utils/getENV"
import { getRedirect } from "./Routes/SubmissionFlow/Utils/redirects"

const MarketingLandingApp = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/MarketingLanding/MarketingLandingApp"
    ),
  {
    resolveComponent: component => component.MarketingLandingApp,
  }
)
const OfferDetailApp = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/Offer/OfferDetailApp"
    ),
  {
    resolveComponent: component => component.OfferDetailAppFragmentContainer,
  }
)

const SubmissionLayout = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/SubmissionLayout"
    ),
  {
    resolveComponent: component => component.SubmissionLayout,
  }
)

const ArtworkDetailsFragmentContainer = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ArtworkDetails/ArtworkDetails"
    ),
  {
    resolveComponent: component => component.ArtworkDetailsFragmentContainer,
  }
)

const ArtworkDetails = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ArtworkDetails/ArtworkDetails"
    ),
  {
    resolveComponent: component => component.ArtworkDetails,
  }
)

const UploadPhotosFragmentContainer = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/UploadPhotos/UploadPhotos"
    ),
  {
    resolveComponent: component => component.UploadPhotosFragmentContainer,
  }
)

const ContactInformation = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ContactInformation/ContactInformation"
    ),
  {
    resolveComponent: component =>
      component.ContactInformationFragmentContainer,
  }
)

const ThankYou = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ThankYou/ThankYou"
    ),
  {
    resolveComponent: component => component.ThankYou,
  }
)

const renderSubmissionFlowStep = ({ Component, props, match, resolving }) => {
  if (!(Component && props)) {
    return undefined
  }

  if (resolving) {
    const { submission } = props as any
    const redirectTo = getRedirect(props.router, match, submission)

    if (redirectTo) {
      throw new RedirectException(redirectTo)
    }
  }

  return <Component {...props} />
}

const prepareSubmissionFlowStepVariables = data => {
  // logic to detect id/uuid
  // in data there will be an :id key
  const reg = new RegExp(/^\d+$/)
  let searchFields = { id: data.id, externalId: null }
  if (!reg.test(data.id)) {
    searchFields.externalId = data.id
    searchFields.id = null
  }

  return {
    ...data,
    ...searchFields,
    sessionID: getENV("SESSION_ID"),
  }
}

export const consignRoutes: AppRouteConfig[] = [
  {
    path: "/consign",
    getComponent: () => MarketingLandingApp,
    onClientSideRender: () => {
      MarketingLandingApp.preload()
    },
  },
  {
    path: "/consign/submission",
    getComponent: () => SubmissionLayout,
    children: [
      new Redirect({
        from: "/",
        to: "/consign/submission/artwork-details",
      }) as any,
      {
        path: "artwork-details",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ArtworkDetails,
        onClientSideRender: () => {
          ArtworkDetails.preload()
        },
      },
      {
        path: ":id/artwork-details",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ArtworkDetailsFragmentContainer,
        onClientSideRender: () => {
          ArtworkDetailsFragmentContainer.preload()
        },
        query: graphql`
          query consignRoutes_artworkDetailsQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...ArtworkDetails_submission
              ...redirects_submission @relay(mask: false)
            }
          }
        `,
        prepareVariables: prepareSubmissionFlowStepVariables,
        render: renderSubmissionFlowStep,
      },
      {
        path: ":id/upload-photos",
        hideNav: true,
        hideFooter: true,
        getComponent: () => UploadPhotosFragmentContainer,
        onClientSideRender: () => {
          UploadPhotosFragmentContainer.preload()
        },
        query: graphql`
          query consignRoutes_uploadPhotosQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...UploadPhotos_submission
              ...redirects_submission @relay(mask: false)
            }
          }
        `,
        prepareVariables: prepareSubmissionFlowStepVariables,
        render: renderSubmissionFlowStep,
      },
      {
        path: ":id/contact-information",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ContactInformation,
        onClientSideRender: () => {
          ContactInformation.preload()
        },
        query: graphql`
          query consignRoutes_contactInformationQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...ContactInformation_submission
              ...redirects_submission @relay(mask: false)
            }
            me {
              ...ContactInformation_me
            }
          }
        `,
        render: renderSubmissionFlowStep,
        prepareVariables: prepareSubmissionFlowStepVariables,
      },
      {
        path: ":id/thank-you",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ThankYou,
        onClientSideRender: () => {
          ThankYou.preload()
        },
      },
    ],
  },
  {
    path: "/consign/offer/:offerID",
    theme: "v2",
    getComponent: () => OfferDetailApp,
    onClientSideRender: () => {
      OfferDetailApp.preload()
    },
    query: graphql`
      query consignRoutes_OfferDetailQuery($offerID: ID!) {
        offer(id: $offerID) {
          ...OfferDetailApp_offer
        }
      }
    `,
  },
]
