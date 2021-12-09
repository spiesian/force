/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateAppSecondFactorInput = {
    attributes: AppSecondFactorAttributes;
    clientMutationId?: string | null;
    secondFactorID: string;
};
export type AppSecondFactorAttributes = {
    name?: string | null;
};
export type useUpdateSettingsAppSecondFactorMutationVariables = {
    input: UpdateAppSecondFactorInput;
};
export type useUpdateSettingsAppSecondFactorMutationResponse = {
    readonly updateAppSecondFactor: {
        readonly secondFactorOrErrors: {
            readonly __typename: "Errors";
            readonly errors: ReadonlyArray<{
                readonly message: string;
            }>;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        };
    } | null;
};
export type useUpdateSettingsAppSecondFactorMutation = {
    readonly response: useUpdateSettingsAppSecondFactorMutationResponse;
    readonly variables: useUpdateSettingsAppSecondFactorMutationVariables;
};



/*
mutation useUpdateSettingsAppSecondFactorMutation(
  $input: UpdateAppSecondFactorInput!
) {
  updateAppSecondFactor(input: $input) {
    secondFactorOrErrors {
      __typename
      ... on Errors {
        errors {
          message
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
    "name": "input",
    "type": "UpdateAppSecondFactorInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateAppSecondFactorPayload",
    "kind": "LinkedField",
    "name": "updateAppSecondFactor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "secondFactorOrErrors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Error",
                "kind": "LinkedField",
                "name": "errors",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "message",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Errors"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "useUpdateSettingsAppSecondFactorMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateSettingsAppSecondFactorMutation(\n  $input: UpdateAppSecondFactorInput!\n) {\n  updateAppSecondFactor(input: $input) {\n    secondFactorOrErrors {\n      __typename\n      ... on Errors {\n        errors {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '12a9c99bb46ac1be168cbd300bb5c5be';
export default node;
