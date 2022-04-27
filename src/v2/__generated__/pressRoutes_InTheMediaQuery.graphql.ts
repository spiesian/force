/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pressRoutes_InTheMediaQueryVariables = {};
export type pressRoutes_InTheMediaQueryResponse = {
    readonly page: {
        readonly " $fragmentRefs": FragmentRefs<"PressApp_page">;
    };
};
export type pressRoutes_InTheMediaQuery = {
    readonly response: pressRoutes_InTheMediaQueryResponse;
    readonly variables: pressRoutes_InTheMediaQueryVariables;
};



/*
query pressRoutes_InTheMediaQuery {
  page(id: "in-the-media") @principalField {
    ...PressApp_page
    id
  }
}

fragment PressApp_page on Page {
  internalID
  name
  content(format: HTML)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "in-the-media"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pressRoutes_InTheMediaQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Page",
        "kind": "LinkedField",
        "name": "page",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PressApp_page"
          }
        ],
        "storageKey": "page(id:\"in-the-media\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pressRoutes_InTheMediaQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Page",
        "kind": "LinkedField",
        "name": "page",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "HTML"
              }
            ],
            "kind": "ScalarField",
            "name": "content",
            "storageKey": "content(format:\"HTML\")"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "page(id:\"in-the-media\")"
      }
    ]
  },
  "params": {
    "cacheID": "3e95c4e8ef398018892fe07275c8c961",
    "id": null,
    "metadata": {},
    "name": "pressRoutes_InTheMediaQuery",
    "operationKind": "query",
    "text": "query pressRoutes_InTheMediaQuery {\n  page(id: \"in-the-media\") @principalField {\n    ...PressApp_page\n    id\n  }\n}\n\nfragment PressApp_page on Page {\n  internalID\n  name\n  content(format: HTML)\n}\n"
  }
};
})();
(node as any).hash = '375038273fedb117d441bffae18b23a5';
export default node;
