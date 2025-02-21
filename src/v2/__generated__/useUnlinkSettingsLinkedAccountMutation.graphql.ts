/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AuthenticationProvider = "APPLE" | "FACEBOOK" | "GOOGLE" | "%future added value";
export type UnlinkAuthenticationMutationInput = {
    clientMutationId?: string | null;
    provider: AuthenticationProvider;
};
export type useUnlinkSettingsLinkedAccountMutationVariables = {
    input: UnlinkAuthenticationMutationInput;
};
export type useUnlinkSettingsLinkedAccountMutationResponse = {
    readonly unlinkAuthentication: {
        readonly me: {
            readonly " $fragmentRefs": FragmentRefs<"SettingsEditSettingsLinkedAccounts_me">;
        };
    } | null;
};
export type useUnlinkSettingsLinkedAccountMutation = {
    readonly response: useUnlinkSettingsLinkedAccountMutationResponse;
    readonly variables: useUnlinkSettingsLinkedAccountMutationVariables;
};



/*
mutation useUnlinkSettingsLinkedAccountMutation(
  $input: UnlinkAuthenticationMutationInput!
) {
  unlinkAuthentication(input: $input) {
    me {
      ...SettingsEditSettingsLinkedAccounts_me
      id
    }
  }
}

fragment SettingsEditSettingsLinkedAccounts_me on Me {
  authentications {
    provider
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
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
    "name": "useUnlinkSettingsLinkedAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "unlinkAuthentication",
        "plural": false,
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
                "name": "SettingsEditSettingsLinkedAccounts_me"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUnlinkSettingsLinkedAccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnlinkAuthenticationMutationPayload",
        "kind": "LinkedField",
        "name": "unlinkAuthentication",
        "plural": false,
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
                "args": null,
                "concreteType": "AuthenticationType",
                "kind": "LinkedField",
                "name": "authentications",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "provider",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0d93dd39b9e7eb1a49d2b4c73bd27579",
    "id": null,
    "metadata": {},
    "name": "useUnlinkSettingsLinkedAccountMutation",
    "operationKind": "mutation",
    "text": "mutation useUnlinkSettingsLinkedAccountMutation(\n  $input: UnlinkAuthenticationMutationInput!\n) {\n  unlinkAuthentication(input: $input) {\n    me {\n      ...SettingsEditSettingsLinkedAccounts_me\n      id\n    }\n  }\n}\n\nfragment SettingsEditSettingsLinkedAccounts_me on Me {\n  authentications {\n    provider\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2d4d6f192a2ea7f57809f354ba7fd0fb';
export default node;
