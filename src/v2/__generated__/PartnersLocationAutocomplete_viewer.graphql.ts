/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PartnersLocationAutocomplete_viewer = {
    readonly featuredCities: ReadonlyArray<{
        readonly text: string;
        readonly value: string;
        readonly coordinates: {
            readonly lat: number | null;
            readonly lng: number | null;
        } | null;
    }>;
    readonly allCities: ReadonlyArray<{
        readonly text: string;
        readonly value: string;
        readonly coordinates: {
            readonly lat: number | null;
            readonly lng: number | null;
        } | null;
    }>;
    readonly " $refType": "PartnersLocationAutocomplete_viewer";
};
export type PartnersLocationAutocomplete_viewer$data = PartnersLocationAutocomplete_viewer;
export type PartnersLocationAutocomplete_viewer$key = {
    readonly " $data"?: PartnersLocationAutocomplete_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"PartnersLocationAutocomplete_viewer">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": "text",
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": "value",
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "LatLng",
    "kind": "LinkedField",
    "name": "coordinates",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lat",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lng",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PartnersLocationAutocomplete_viewer",
  "selections": [
    {
      "alias": "featuredCities",
      "args": [
        {
          "kind": "Literal",
          "name": "featured",
          "value": true
        }
      ],
      "concreteType": "City",
      "kind": "LinkedField",
      "name": "cities",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": "cities(featured:true)"
    },
    {
      "alias": "allCities",
      "args": null,
      "concreteType": "City",
      "kind": "LinkedField",
      "name": "cities",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
})();
(node as any).hash = '41d52d035e41c3b3153e08652a283937';
export default node;
