/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuctionDetailsStartTimeQueryVariables = {
    id: string;
};
export type AuctionDetailsStartTimeQueryResponse = {
    readonly sale: {
        readonly cascadingEndTimeIntervalMinutes: number | null;
        readonly formattedStartDateTime: string | null;
        readonly cascadingEndTime: {
            readonly formattedStartDateTime: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"AuctionDetailsStartTime_sale">;
    } | null;
};
export type AuctionDetailsStartTimeQuery = {
    readonly response: AuctionDetailsStartTimeQueryResponse;
    readonly variables: AuctionDetailsStartTimeQueryVariables;
};



/*
query AuctionDetailsStartTimeQuery(
  $id: String!
) {
  sale(id: $id) {
    ...AuctionDetailsStartTime_sale
    cascadingEndTimeIntervalMinutes
    formattedStartDateTime
    cascadingEndTime {
      formattedStartDateTime
    }
    id
  }
}

fragment AuctionDetailsStartTime_sale on Sale {
  cascadingEndTime {
    formattedStartDateTime
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cascadingEndTimeIntervalMinutes",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedStartDateTime",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleCascadingEndTime",
  "kind": "LinkedField",
  "name": "cascadingEndTime",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionDetailsStartTimeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionDetailsStartTime_sale"
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
    "name": "AuctionDetailsStartTimeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "921c748d1407535ba067514ecc89a7d6",
    "id": null,
    "metadata": {},
    "name": "AuctionDetailsStartTimeQuery",
    "operationKind": "query",
    "text": "query AuctionDetailsStartTimeQuery(\n  $id: String!\n) {\n  sale(id: $id) {\n    ...AuctionDetailsStartTime_sale\n    cascadingEndTimeIntervalMinutes\n    formattedStartDateTime\n    cascadingEndTime {\n      formattedStartDateTime\n    }\n    id\n  }\n}\n\nfragment AuctionDetailsStartTime_sale on Sale {\n  cascadingEndTime {\n    formattedStartDateTime\n  }\n}\n"
  }
};
})();
(node as any).hash = '531fbde1ac6c06cfbf4d7e24a4bff263';
export default node;
