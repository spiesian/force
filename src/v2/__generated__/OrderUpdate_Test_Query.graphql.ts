/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrderUpdate_Test_QueryVariables = {};
export type OrderUpdate_Test_QueryResponse = {
    readonly me: {
        readonly conversation: {
            readonly conversationEventConnection: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly __typename: string;
                        readonly " $fragmentRefs": FragmentRefs<"OrderUpdate_event">;
                    } | null;
                } | null> | null;
            } | null;
        } | null;
    } | null;
};
export type OrderUpdate_Test_Query = {
    readonly response: OrderUpdate_Test_QueryResponse;
    readonly variables: OrderUpdate_Test_QueryVariables;
};



/*
query OrderUpdate_Test_Query {
  me {
    conversation(id: "1234") {
      conversationEventConnection {
        edges {
          node {
            __typename
            ...OrderUpdate_event
            ... on Node {
              __isNode: __typename
              id
            }
          }
        }
      }
      id
    }
    id
  }
}

fragment OrderUpdate_event on ConversationEvent {
  __isConversationEvent: __typename
  ... on ConversationOrderStateChanged {
    __typename
    createdAt
    stateReason
    state
  }
  ... on ConversationOfferSubmitted {
    __typename
    createdAt
    amount
    fromParticipant
    offerAmountChanged
    respondsTo {
      fromParticipant
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1234"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fromParticipant",
  "storageKey": null
},
v4 = {
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
    "name": "OrderUpdate_Test_Query",
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
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationEventConnection",
                "kind": "LinkedField",
                "name": "conversationEventConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ConversationEventEdge",
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
                          (v1/*: any*/),
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "OrderUpdate_event"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "conversation(id:\"1234\")"
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
    "name": "OrderUpdate_Test_Query",
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
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "Conversation",
            "kind": "LinkedField",
            "name": "conversation",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationEventConnection",
                "kind": "LinkedField",
                "name": "conversationEventConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ConversationEventEdge",
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
                          (v1/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isConversationEvent"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "stateReason",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "state",
                                "storageKey": null
                              }
                            ],
                            "type": "ConversationOrderStateChanged",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "amount",
                                "storageKey": null
                              },
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "offerAmountChanged",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ConversationOfferSubmitted",
                                "kind": "LinkedField",
                                "name": "respondsTo",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "ConversationOfferSubmitted",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v4/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": "conversation(id:\"1234\")"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "125c645c8e4fef234606171cad96e381",
    "id": null,
    "metadata": {},
    "name": "OrderUpdate_Test_Query",
    "operationKind": "query",
    "text": "query OrderUpdate_Test_Query {\n  me {\n    conversation(id: \"1234\") {\n      conversationEventConnection {\n        edges {\n          node {\n            __typename\n            ...OrderUpdate_event\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment OrderUpdate_event on ConversationEvent {\n  __isConversationEvent: __typename\n  ... on ConversationOrderStateChanged {\n    __typename\n    createdAt\n    stateReason\n    state\n  }\n  ... on ConversationOfferSubmitted {\n    __typename\n    createdAt\n    amount\n    fromParticipant\n    offerAmountChanged\n    respondsTo {\n      fromParticipant\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aa943f25145d786203fd9f8f73a48b59';
export default node;
