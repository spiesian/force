/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebarAuctionProgressBar_Test_QueryVariables = {};
export type ArtworkSidebarAuctionProgressBar_Test_QueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarAuctionProgressBar_artwork">;
    } | null;
};
export type ArtworkSidebarAuctionProgressBar_Test_QueryRawResponse = {
    readonly artwork: ({
        readonly sale: ({
            readonly extendedBiddingPeriodMinutes: number | null;
            readonly id: string;
        }) | null;
        readonly saleArtwork: ({
            readonly endAt: string | null;
            readonly extendedBiddingEndAt: string | null;
            readonly id: string;
        }) | null;
        readonly id: string;
    }) | null;
};
export type ArtworkSidebarAuctionProgressBar_Test_Query = {
    readonly response: ArtworkSidebarAuctionProgressBar_Test_QueryResponse;
    readonly variables: ArtworkSidebarAuctionProgressBar_Test_QueryVariables;
    readonly rawResponse: ArtworkSidebarAuctionProgressBar_Test_QueryRawResponse;
};



/*
query ArtworkSidebarAuctionProgressBar_Test_Query {
  artwork(id: "auction_artwork_estimate_premium") {
    ...ArtworkSidebarAuctionProgressBar_artwork
    id
  }
}

fragment ArtworkSidebarAuctionProgressBar_artwork on Artwork {
  sale {
    extendedBiddingPeriodMinutes
    id
  }
  saleArtwork {
    endAt
    extendedBiddingEndAt
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "auction_artwork_estimate_premium"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkSidebarAuctionProgressBar_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworkSidebarAuctionProgressBar_artwork"
          }
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkSidebarAuctionProgressBar_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
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
              },
              (v1/*: any*/)
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
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ]
  },
  "params": {
    "cacheID": "ec48241f245724a5234cc8a30c9eb5ac",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v2/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.extendedBiddingPeriodMinutes": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "artwork.sale.id": (v2/*: any*/),
        "artwork.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.saleArtwork.endAt": (v3/*: any*/),
        "artwork.saleArtwork.extendedBiddingEndAt": (v3/*: any*/),
        "artwork.saleArtwork.id": (v2/*: any*/)
      }
    },
    "name": "ArtworkSidebarAuctionProgressBar_Test_Query",
    "operationKind": "query",
    "text": "query ArtworkSidebarAuctionProgressBar_Test_Query {\n  artwork(id: \"auction_artwork_estimate_premium\") {\n    ...ArtworkSidebarAuctionProgressBar_artwork\n    id\n  }\n}\n\nfragment ArtworkSidebarAuctionProgressBar_artwork on Artwork {\n  sale {\n    extendedBiddingPeriodMinutes\n    id\n  }\n  saleArtwork {\n    endAt\n    extendedBiddingEndAt\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0439d08255fa8eadbd3beeb78686c203';
export default node;
