/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkSidebarPartnerInfo_Test_QueryVariables = {};
export type ArtworkSidebarPartnerInfo_Test_QueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"ArtworkSidebarPartnerInfo_artwork">;
    } | null;
};
export type ArtworkSidebarPartnerInfo_Test_Query = {
    readonly response: ArtworkSidebarPartnerInfo_Test_QueryResponse;
    readonly variables: ArtworkSidebarPartnerInfo_Test_QueryVariables;
};



/*
query ArtworkSidebarPartnerInfo_Test_Query {
  artwork(id: "artwork_from_partner_with_locations") {
    ...ArtworkSidebarPartnerInfo_artwork
    id
  }
}

fragment ArtworkSidebarPartnerInfo_artwork on Artwork {
  internalID
  slug
  isOfferable
  isInquireable
  isPriceRange
  partner {
    name
    href
    locations {
      city
      id
    }
    id
  }
  sale {
    name
    href
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artwork_from_partner_with_locations"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v6 = {
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
    "name": "ArtworkSidebarPartnerInfo_Test_Query",
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
            "name": "ArtworkSidebarPartnerInfo_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artwork_from_partner_with_locations\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworkSidebarPartnerInfo_Test_Query",
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
            "kind": "ScalarField",
            "name": "internalID",
            "storageKey": null
          },
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
            "name": "isOfferable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isInquireable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceRange",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Partner",
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "locations",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "city",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "artwork(id:\"artwork_from_partner_with_locations\")"
      }
    ]
  },
  "params": {
    "cacheID": "a2f4e0fb0bedc27ed00015023ae8d047",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v4/*: any*/),
        "artwork.internalID": (v4/*: any*/),
        "artwork.isInquireable": (v5/*: any*/),
        "artwork.isOfferable": (v5/*: any*/),
        "artwork.isPriceRange": (v5/*: any*/),
        "artwork.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artwork.partner.href": (v6/*: any*/),
        "artwork.partner.id": (v4/*: any*/),
        "artwork.partner.locations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Location"
        },
        "artwork.partner.locations.city": (v6/*: any*/),
        "artwork.partner.locations.id": (v4/*: any*/),
        "artwork.partner.name": (v6/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.href": (v6/*: any*/),
        "artwork.sale.id": (v4/*: any*/),
        "artwork.sale.name": (v6/*: any*/),
        "artwork.slug": (v4/*: any*/)
      }
    },
    "name": "ArtworkSidebarPartnerInfo_Test_Query",
    "operationKind": "query",
    "text": "query ArtworkSidebarPartnerInfo_Test_Query {\n  artwork(id: \"artwork_from_partner_with_locations\") {\n    ...ArtworkSidebarPartnerInfo_artwork\n    id\n  }\n}\n\nfragment ArtworkSidebarPartnerInfo_artwork on Artwork {\n  internalID\n  slug\n  isOfferable\n  isInquireable\n  isPriceRange\n  partner {\n    name\n    href\n    locations {\n      city\n      id\n    }\n    id\n  }\n  sale {\n    name\n    href\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c28fcd12678374ea3678a8b3c41e5dbc';
export default node;
