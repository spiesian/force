/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebarAuctionProgressBar_artwork = {
    readonly sale: {
        readonly extendedBiddingPeriodMinutes: number | null;
    } | null;
    readonly saleArtwork: {
        readonly endAt: string | null;
        readonly extendedBiddingEndAt: string | null;
    } | null;
    readonly " $refType": "ArtworkSidebarAuctionProgressBar_artwork";
};
export type ArtworkSidebarAuctionProgressBar_artwork$data = ArtworkSidebarAuctionProgressBar_artwork;
export type ArtworkSidebarAuctionProgressBar_artwork$key = {
    readonly " $data"?: ArtworkSidebarAuctionProgressBar_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarAuctionProgressBar_artwork">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkSidebarAuctionProgressBar_artwork",
  "selections": [
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
          "name": "extendedBiddingPeriodMinutes",
          "storageKey": null
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
          "kind": "ScalarField",
          "name": "extendedBiddingEndAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
(node as any).hash = '53f30ac9d5d583ec48fe03dc31b18c49';
export default node;
