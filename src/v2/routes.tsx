import { AppRouteConfig } from "v2/System/Router/Route"
import { buildAppRoutes } from "v2/System/Router/buildAppRoutes"

export async function getAppRoutes(): Promise<AppRouteConfig[]> {
  const { artistRoutes } = await import(
    /* webpackChunkName: "artistRoutes" */ "v2/Apps/Artist/artistRoutes"
  )
  const { artistSeriesRoutes } = await import(
    /* webpackChunkName: "artistSeriesRoutes" */ "v2/Apps/ArtistSeries/artistSeriesRoutes"
  )
  const { artistsRoutes } = await import(
    /* webpackChunkName: "artistsRoutes" */ "v2/Apps/Artists/artistsRoutes"
  )
  const { artworkRoutes } = await import(
    /* webpackChunkName: "artworkRoutes" */ "v2/Apps/Artwork/artworkRoutes"
  )
  const { auctionsRoutes } = await import(
    /* webpackChunkName: "auctionsRoutes" */ "v2/Apps/Auctions/auctionsRoutes"
  )
  const { buyerGuaranteeRoutes } = await import(
    /* webpackChunkName: "buyerGuaranteeRoutes" */ "v2/Apps/BuyerGuarantee/buyerGuaranteeRoutes"
  )
  const { collectRoutes } = await import(
    /* webpackChunkName: "collectRoutes" */ "v2/Apps/Collect/collectRoutes"
  )
  const { consignRoutes } = await import(
    /* webpackChunkName: "consignRoutes" */ "v2/Apps/Consign/consignRoutes"
  )
  const { conversationRoutes } = await import(
    /* webpackChunkName: "conversationRoutes" */ "v2/Apps/Conversation/conversationRoutes"
  )
  const { debugRoutes } = await import(
    /* webpackChunkName: "debugRoutes" */ "v2/Apps/Debug/debugRoutes"
  )
  const { exampleRoutes } = await import(
    /* webpackChunkName: "exampleRoutes" */ "v2/Apps/Example/exampleRoutes"
  )
  const { fairRoutes } = await import(
    /* webpackChunkName: "fairRoutes" */ "v2/Apps/Fair/fairRoutes"
  )
  const { fairsRoutes } = await import(
    /* webpackChunkName: "fairsRoutes" */ "v2/Apps/Fairs/fairsRoutes"
  )
  const { featureRoutes } = await import(
    /* webpackChunkName: "featureRoutes" */ "v2/Apps/Feature/featureRoutes"
  )
  const { geneRoutes } = await import(
    /* webpackChunkName: "geneRoutes" */ "v2/Apps/Gene/geneRoutes"
  )
  const { homeRoutes } = await import(
    /* webpackChunkName: "homeRoutes" */ "v2/Apps/Home/homeRoutes"
  )
  const { identityVerificationRoutes } = await import(
    /* webpackChunkName: "identityVerificationRoutes" */ "v2/Apps/IdentityVerification/identityVerificationRoutes"
  )
  const { orderRoutes } = await import(
    /* webpackChunkName: "orderRoutes" */ "v2/Apps/Order/orderRoutes"
  )
  const { partnerRoutes } = await import(
    /* webpackChunkName: "partnerRoutes" */ "v2/Apps/Partner/partnerRoutes"
  )
  const { paymentRoutes } = await import(
    /* webpackChunkName: "paymentRoutes" */ "v2/Apps/Payment/paymentRoutes"
  )
  const { purchaseRoutes } = await import(
    /* webpackChunkName: "purchaseRoutes" */ "v2/Apps/Purchase/purchaseRoutes"
  )
  const { searchRoutes } = await import(
    /* webpackChunkName: "searchRoutes" */ "v2/Apps/Search/searchRoutes"
  )
  const { showRoutes } = await import(
    /* webpackChunkName: "showRoutes" */ "v2/Apps/Show/showRoutes"
  )
  const { tagRoutes } = await import(
    /* webpackChunkName: "tagRoutes" */ "./Apps/Tag/tagRoutes"
  )
  const { unsubscribeRoutes } = await import(
    /* webpackChunkName: "unsubscribeRoutes" */ "./Apps/Unsubscribe/unsubscribeRoutes"
  )
  const { viewingRoomRoutes } = await import(
    /* webpackChunkName: "viewingRoomRoutes" */ "v2/Apps/ViewingRoom/viewingRoomRoutes"
  )

  return buildAppRoutes([
    { routes: artistRoutes },
    { routes: artistSeriesRoutes },
    { routes: artistsRoutes },
    { routes: artworkRoutes },
    { routes: auctionsRoutes },
    { routes: buyerGuaranteeRoutes },
    { routes: collectRoutes },
    { routes: consignRoutes },
    { routes: conversationRoutes },
    { routes: exampleRoutes },
    { routes: fairRoutes },
    { routes: fairsRoutes },
    { routes: featureRoutes },
    { routes: geneRoutes },
    { routes: homeRoutes },
    { routes: identityVerificationRoutes },
    { routes: orderRoutes },
    { routes: partnerRoutes },
    { routes: paymentRoutes },
    { routes: purchaseRoutes },
    { routes: searchRoutes },
    { routes: showRoutes },
    { routes: tagRoutes },
    { routes: unsubscribeRoutes },
    { routes: viewingRoomRoutes },

    // For debugging baseline app shell stuff
    { routes: debugRoutes },
  ])
}
