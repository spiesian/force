/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SecurePaymentTestQueryVariables = {};
export type SecurePaymentTestQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"SecurePayment_artwork">;
    } | null;
};
export type SecurePaymentTestQuery = {
    readonly response: SecurePaymentTestQueryResponse;
    readonly variables: SecurePaymentTestQueryVariables;
};



/*
query SecurePaymentTestQuery {
  artwork(id: "whatevs") {
    ...SecurePayment_artwork
    id
  }
}

fragment SecurePayment_artwork on Artwork {
  is_acquireable: isAcquireable
  is_offerable: isOfferable
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "whatevs"
  }
],
v1 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SecurePaymentTestQuery",
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
            "name": "SecurePayment_artwork"
          }
        ],
        "storageKey": "artwork(id:\"whatevs\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SecurePaymentTestQuery",
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
            "alias": "is_acquireable",
            "args": null,
            "kind": "ScalarField",
            "name": "isAcquireable",
            "storageKey": null
          },
          {
            "alias": "is_offerable",
            "args": null,
            "kind": "ScalarField",
            "name": "isOfferable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artwork(id:\"whatevs\")"
      }
    ]
  },
  "params": {
    "cacheID": "a6174e5f4a3c77e88f3c06d269b84758",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "artwork.is_acquireable": (v1/*: any*/),
        "artwork.is_offerable": (v1/*: any*/)
      }
    },
    "name": "SecurePaymentTestQuery",
    "operationKind": "query",
    "text": "query SecurePaymentTestQuery {\n  artwork(id: \"whatevs\") {\n    ...SecurePayment_artwork\n    id\n  }\n}\n\nfragment SecurePayment_artwork on Artwork {\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n}\n"
  }
};
})();
(node as any).hash = 'aea04d3bc45239212a2e4d66598b5aa3';
export default node;
