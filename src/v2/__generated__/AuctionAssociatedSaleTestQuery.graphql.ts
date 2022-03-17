/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuctionAssociatedSaleTestQueryVariables = {};
export type AuctionAssociatedSaleTestQueryResponse = {
    readonly sale: {
        readonly " $fragmentRefs": FragmentRefs<"AuctionAssociatedSale_sale">;
    } | null;
};
export type AuctionAssociatedSaleTestQuery = {
    readonly response: AuctionAssociatedSaleTestQueryResponse;
    readonly variables: AuctionAssociatedSaleTestQueryVariables;
};



/*
query AuctionAssociatedSaleTestQuery {
  sale(id: "foo") {
    ...AuctionAssociatedSale_sale
    id
  }
}

fragment AuctionAssociatedSale_sale on Sale {
  associatedSale {
    coverImage {
      cropped(width: 260, height: 110) {
        src
        srcSet
        width
        height
      }
    }
    displayTimelyAt
    href
    slug
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionAssociatedSaleTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionAssociatedSale_sale"
          }
        ],
        "storageKey": "sale(id:\"foo\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuctionAssociatedSaleTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "associatedSale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "coverImage",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 110
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 260
                      }
                    ],
                    "concreteType": "CroppedImageUrl",
                    "kind": "LinkedField",
                    "name": "cropped",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "src",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "srcSet",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "width",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "height",
                        "storageKey": null
                      }
                    ],
                    "storageKey": "cropped(height:110,width:260)"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "displayTimelyAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
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
                "name": "name",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "sale(id:\"foo\")"
      }
    ]
  },
  "params": {
    "cacheID": "d02c6cee6097c3abc6fabb36be15763a",
    "id": null,
    "metadata": {},
    "name": "AuctionAssociatedSaleTestQuery",
    "operationKind": "query",
    "text": "query AuctionAssociatedSaleTestQuery {\n  sale(id: \"foo\") {\n    ...AuctionAssociatedSale_sale\n    id\n  }\n}\n\nfragment AuctionAssociatedSale_sale on Sale {\n  associatedSale {\n    coverImage {\n      cropped(width: 260, height: 110) {\n        src\n        srcSet\n        width\n        height\n      }\n    }\n    displayTimelyAt\n    href\n    slug\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '0d1848e2e0a0704b80b53f864f746be6';
export default node;
