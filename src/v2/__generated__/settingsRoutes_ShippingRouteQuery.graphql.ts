/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type settingsRoutes_ShippingRouteQueryVariables = {};
export type settingsRoutes_ShippingRouteQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"SettingsShippingRoute_me">;
    } | null;
};
export type settingsRoutes_ShippingRouteQuery = {
    readonly response: settingsRoutes_ShippingRouteQueryResponse;
    readonly variables: settingsRoutes_ShippingRouteQueryVariables;
};



/*
query settingsRoutes_ShippingRouteQuery {
  me {
    ...SettingsShippingRoute_me
    id
  }
}

fragment SettingsShippingAddress_address on UserAddress {
  internalID
  addressLine1
  addressLine2
  city
  country
  isDefault
  name
  phoneNumber
  postalCode
  region
}

fragment SettingsShippingAddresses_me on Me {
  addresses: addressConnection {
    edges {
      node {
        internalID
        ...SettingsShippingAddress_address
        id
      }
    }
  }
}

fragment SettingsShippingRoute_me on Me {
  ...SettingsShippingAddresses_me
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "settingsRoutes_ShippingRouteQuery",
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
            "name": "SettingsShippingRoute_me"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "settingsRoutes_ShippingRouteQuery",
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
            "alias": "addresses",
            "args": null,
            "concreteType": "UserAddressConnection",
            "kind": "LinkedField",
            "name": "addressConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserAddressEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserAddress",
                    "kind": "LinkedField",
                    "name": "node",
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
                        "name": "addressLine1",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "addressLine2",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "city",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "country",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isDefault",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "phoneNumber",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "postalCode",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "region",
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0841261953e6ed7b48526f70dbebb28",
    "id": null,
    "metadata": {},
    "name": "settingsRoutes_ShippingRouteQuery",
    "operationKind": "query",
    "text": "query settingsRoutes_ShippingRouteQuery {\n  me {\n    ...SettingsShippingRoute_me\n    id\n  }\n}\n\nfragment SettingsShippingAddress_address on UserAddress {\n  internalID\n  addressLine1\n  addressLine2\n  city\n  country\n  isDefault\n  name\n  phoneNumber\n  postalCode\n  region\n}\n\nfragment SettingsShippingAddresses_me on Me {\n  addresses: addressConnection {\n    edges {\n      node {\n        internalID\n        ...SettingsShippingAddress_address\n        id\n      }\n    }\n  }\n}\n\nfragment SettingsShippingRoute_me on Me {\n  ...SettingsShippingAddresses_me\n}\n"
  }
};
})();
(node as any).hash = 'cd31c14d8951d621c32fafc96271888b';
export default node;
