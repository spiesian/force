/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type NavBarSearchQueryVariables = {
    term: string;
    hasTerm: boolean;
};
export type NavBarSearchQueryResponse = {
    readonly viewer: {
        readonly searchConnection?: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly text: string | null;
                    readonly value: string | null;
                    readonly subtitle?: string | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
};
export type NavBarSearchQuery = {
    readonly response: NavBarSearchQueryResponse;
    readonly variables: NavBarSearchQueryVariables;
};



/*
query NavBarSearchQuery(
  $term: String!
  $hasTerm: Boolean!
) {
  viewer {
    searchConnection(query: $term, mode: AUTOSUGGEST, first: 7) @include(if: $hasTerm) {
      edges {
        node {
          __typename
          text: displayLabel
          value: href
          ... on SearchableItem {
            subtitle: displayType
          }
          ... on Node {
            id
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "term",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "hasTerm",
    "type": "Boolean!"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 7
  },
  {
    "kind": "Literal",
    "name": "mode",
    "value": "AUTOSUGGEST"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "term"
  }
],
v2 = {
  "alias": "text",
  "args": null,
  "kind": "ScalarField",
  "name": "displayLabel",
  "storageKey": null
},
v3 = {
  "alias": "value",
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "subtitle",
      "args": null,
      "kind": "ScalarField",
      "name": "displayType",
      "storageKey": null
    }
  ],
  "type": "SearchableItem"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NavBarSearchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "condition": "hasTerm",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "SearchableConnection",
                "kind": "LinkedField",
                "name": "searchConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchableEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavBarSearchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "condition": "hasTerm",
            "kind": "Condition",
            "passingValue": true,
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "SearchableConnection",
                "kind": "LinkedField",
                "name": "searchConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SearchableEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "NavBarSearchQuery",
    "operationKind": "query",
    "text": "query NavBarSearchQuery(\n  $term: String!\n  $hasTerm: Boolean!\n) {\n  viewer {\n    searchConnection(query: $term, mode: AUTOSUGGEST, first: 7) @include(if: $hasTerm) {\n      edges {\n        node {\n          __typename\n          text: displayLabel\n          value: href\n          ... on SearchableItem {\n            subtitle: displayType\n          }\n          ... on Node {\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dfbb397bd786445562ea326984f9a5cf';
export default node;
