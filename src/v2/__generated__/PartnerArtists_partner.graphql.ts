/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type PartnerArtists_partner = {
    readonly slug: string;
    readonly distinguishRepresentedArtists: boolean | null;
    readonly displayFullPartnerPage: boolean | null;
    readonly allArtistsConnection: {
        readonly edges: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"PartnerArtistList_artists">;
        } | null> | null;
    } | null;
    readonly " $refType": "PartnerArtists_partner";
};
export type PartnerArtists_partner$data = PartnerArtists_partner;
export type PartnerArtists_partner$key = {
    readonly " $data"?: PartnerArtists_partner$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PartnerArtists_partner">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnerArtists_partner",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "distinguishRepresentedArtists",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayFullPartnerPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "displayOnPartnerProfile",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "hasNotRepresentedArtistWithPublishedArtworks",
          "value": true
        }
      ],
      "concreteType": "ArtistPartnerConnection",
      "kind": "LinkedField",
      "name": "allArtistsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistPartnerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "PartnerArtistList_artists"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "allArtistsConnection(displayOnPartnerProfile:true,hasNotRepresentedArtistWithPublishedArtworks:true)"
    }
  ],
  "type": "Partner",
  "abstractKey": null
};
(node as any).hash = '5f41d4058851de113ca32253ee7c3f2c';
export default node;
