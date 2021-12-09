/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateAppSecondFactorInput = {
    attributes: AppSecondFactorAttributes;
    clientMutationId?: string | null;
    password: string;
};
export type AppSecondFactorAttributes = {
    name?: string | null;
};
export type useCreateSettingsAppSecondFactorMutationVariables = {
    input: CreateAppSecondFactorInput;
};
export type useCreateSettingsAppSecondFactorMutationResponse = {
    readonly createAppSecondFactor: {
        readonly secondFactorOrErrors: {
            readonly __typename: "AppSecondFactor";
            readonly internalID: string;
            readonly otpSecret: string | null;
            readonly otpProvisioningURI: string | null;
            readonly name: string | null;
        } | {
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
export type useCreateSettingsAppSecondFactorMutation = {
    readonly response: useCreateSettingsAppSecondFactorMutationResponse;
    readonly variables: useCreateSettingsAppSecondFactorMutationVariables;
};



/*
mutation useCreateSettingsAppSecondFactorMutation(
  $input: CreateAppSecondFactorInput!
) {
  createAppSecondFactor(input: $input) {
    secondFactorOrErrors {
      __typename
      ... on AppSecondFactor {
        internalID
        otpSecret
        otpProvisioningURI
        name
      }
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
    "type": "CreateAppSecondFactorInput!"
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
    "concreteType": "CreateAppSecondFactorPayload",
    "kind": "LinkedField",
    "name": "createAppSecondFactor",
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
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "otpSecret",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "otpProvisioningURI",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "type": "AppSecondFactor"
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
    "name": "useCreateSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateSettingsAppSecondFactorMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "useCreateSettingsAppSecondFactorMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateSettingsAppSecondFactorMutation(\n  $input: CreateAppSecondFactorInput!\n) {\n  createAppSecondFactor(input: $input) {\n    secondFactorOrErrors {\n      __typename\n      ... on AppSecondFactor {\n        internalID\n        otpSecret\n        otpProvisioningURI\n        name\n      }\n      ... on Errors {\n        errors {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eb303c96578e0eeab88858bb5fb79910';
export default node;
