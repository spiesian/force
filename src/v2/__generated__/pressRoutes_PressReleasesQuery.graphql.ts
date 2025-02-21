/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pressRoutes_PressReleasesQueryVariables = {};
export type pressRoutes_PressReleasesQueryResponse = {
    readonly page: {
        readonly " $fragmentRefs": FragmentRefs<"PressApp_page">;
    };
};
export type pressRoutes_PressReleasesQuery = {
    readonly response: pressRoutes_PressReleasesQueryResponse;
    readonly variables: pressRoutes_PressReleasesQueryVariables;
};



/*
query pressRoutes_PressReleasesQuery {
  page(id: "news-and-press-releases") @principalField {
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
    "value": "news-and-press-releases"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pressRoutes_PressReleasesQuery",
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
        "storageKey": "page(id:\"news-and-press-releases\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pressRoutes_PressReleasesQuery",
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
        "storageKey": "page(id:\"news-and-press-releases\")"
      }
    ]
  },
  "params": {
    "cacheID": "ad8db60858a7e0158a8acb4cffdbecdf",
    "id": null,
    "metadata": {},
    "name": "pressRoutes_PressReleasesQuery",
    "operationKind": "query",
    "text": "query pressRoutes_PressReleasesQuery {\n  page(id: \"news-and-press-releases\") @principalField {\n    ...PressApp_page\n    id\n  }\n}\n\nfragment PressApp_page on Page {\n  internalID\n  name\n  content(format: HTML)\n}\n"
  }
};
})();
(node as any).hash = '61a3ee7d1b971c6f537512f2539921f0';
export default node;
