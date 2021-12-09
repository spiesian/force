/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type EnableSecondFactorInput = {
    clientMutationId?: string | null;
    code: string;
    password?: string | null;
    secondFactorID: string;
};
export type useEnableSettingsAppSecondFactorMutationVariables = {
    input: EnableSecondFactorInput;
};
export type useEnableSettingsAppSecondFactorMutationResponse = {
    readonly enableSecondFactor: {
        readonly recoveryCodes: ReadonlyArray<string> | null;
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
export type useEnableSettingsAppSecondFactorMutation = {
    readonly response: useEnableSettingsAppSecondFactorMutationResponse;
    readonly variables: useEnableSettingsAppSecondFactorMutationVariables;
};



/*
mutation useEnableSettingsAppSecondFactorMutation(
  $input: EnableSecondFactorInput!
) {
  enableSecondFactor(input: $input) {
    recoveryCodes
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
    "type": "EnableSecondFactorInput!"
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
    "concreteType": "EnableSecondFactorPayload",
    "kind": "LinkedField",
    "name": "enableSecondFactor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "recoveryCodes",
        "storageKey": null
      },
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
    "name": "useEnableSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useEnableSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "useEnableSettingsAppSecondFactorMutation",
    "operationKind": "mutation",
    "text": "mutation useEnableSettingsAppSecondFactorMutation(\n  $input: EnableSecondFactorInput!\n) {\n  enableSecondFactor(input: $input) {\n    recoveryCodes\n    secondFactorOrErrors {\n      __typename\n      ... on Errors {\n        errors {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1f9c03b749cc442cd20066d3e0c731a0';
export default node;
