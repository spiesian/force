/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type auctionRoutes_RegisterRouteQueryVariables = {
    slug: string;
};
export type auctionRoutes_RegisterRouteQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"AuctionRegistrationRoute_me">;
    } | null;
    readonly sale: {
        readonly " $fragmentRefs": FragmentRefs<"AuctionRegistrationRoute_sale">;
    } | null;
};
export type auctionRoutes_RegisterRouteQuery = {
    readonly response: auctionRoutes_RegisterRouteQueryResponse;
    readonly variables: auctionRoutes_RegisterRouteQueryVariables;
};



/*
query auctionRoutes_RegisterRouteQuery(
  $slug: String!
) {
  me {
    ...AuctionRegistrationRoute_me
    id
  }
  sale(id: $slug) @principalField {
    ...AuctionRegistrationRoute_sale
    id
  }
}

fragment AuctionRegistrationRoute_me on Me {
  internalID
  identityVerified
  hasQualifiedCreditCards
}

fragment AuctionRegistrationRoute_sale on Sale {
  slug
  name
  internalID
  status
  requireIdentityVerification
  isClosed
  isLiveOpen
  bidder {
    qualifiedForBidding
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "auctionRoutes_RegisterRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionRegistrationRoute_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionRegistrationRoute_sale"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "auctionRoutes_RegisterRouteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identityVerified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasQualifiedCreditCards",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
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
            "name": "name",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "requireIdentityVerification",
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
            "name": "isLiveOpen",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Bidder",
            "kind": "LinkedField",
            "name": "bidder",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "qualifiedForBidding",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "efd89b639accdfc0db7af7e653659edd",
    "id": null,
    "metadata": {},
    "name": "auctionRoutes_RegisterRouteQuery",
    "operationKind": "query",
    "text": "query auctionRoutes_RegisterRouteQuery(\n  $slug: String!\n) {\n  me {\n    ...AuctionRegistrationRoute_me\n    id\n  }\n  sale(id: $slug) @principalField {\n    ...AuctionRegistrationRoute_sale\n    id\n  }\n}\n\nfragment AuctionRegistrationRoute_me on Me {\n  internalID\n  identityVerified\n  hasQualifiedCreditCards\n}\n\nfragment AuctionRegistrationRoute_sale on Sale {\n  slug\n  name\n  internalID\n  status\n  requireIdentityVerification\n  isClosed\n  isLiveOpen\n  bidder {\n    qualifiedForBidding\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f45c56e22e4f94984b01ca7d156bc67d';
export default node;
