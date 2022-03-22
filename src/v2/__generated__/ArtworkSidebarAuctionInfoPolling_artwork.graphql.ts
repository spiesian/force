/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebarAuctionInfoPolling_artwork = {
    readonly internalID: string;
    readonly sale: {
        readonly cascadingEndTimeInterval: number | null;
        readonly isClosed: boolean | null;
        readonly startAt: string | null;
        readonly " $fragmentRefs": FragmentRefs<"AuctionTimer_sale">;
    } | null;
    readonly saleArtwork: {
        readonly endAt: string | null;
        readonly currentBid: {
            readonly display: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"LotTimer_saleArtwork">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarCurrentBidInfo_artwork" | "ArtworkSidebarBidAction_artwork" | "ArtworkSidebarAuctionTimer_artwork">;
    readonly " $refType": "ArtworkSidebarAuctionInfoPolling_artwork";
};
export type ArtworkSidebarAuctionInfoPolling_artwork$data = ArtworkSidebarAuctionInfoPolling_artwork;
export type ArtworkSidebarAuctionInfoPolling_artwork$key = {
    readonly " $data"?: ArtworkSidebarAuctionInfoPolling_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarAuctionInfoPolling_artwork">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkSidebarAuctionInfoPolling_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cascadingEndTimeInterval",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startAt",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AuctionTimer_sale"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtworkCurrentBid",
          "kind": "LinkedField",
          "name": "currentBid",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "display",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LotTimer_saleArtwork"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarCurrentBidInfo_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarBidAction_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkSidebarAuctionTimer_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
(node as any).hash = 'ab6eceb615b0e06e670e2cf211f3c773';
export default node;
