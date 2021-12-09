/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateBackupSecondFactorsInput = {
    clientMutationId?: string | null;
    password?: string | null;
};
export type useCreateSettingsBackupSecondFactorsMutationVariables = {
    input: CreateBackupSecondFactorsInput;
};
export type useCreateSettingsBackupSecondFactorsMutationResponse = {
    readonly createBackupSecondFactors: {
        readonly secondFactorsOrErrors: {
            readonly __typename: "BackupSecondFactors";
            readonly secondFactors: ReadonlyArray<{
                readonly code: string;
            }>;
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
export type useCreateSettingsBackupSecondFactorsMutation = {
    readonly response: useCreateSettingsBackupSecondFactorsMutationResponse;
    readonly variables: useCreateSettingsBackupSecondFactorsMutationVariables;
};



/*
mutation useCreateSettingsBackupSecondFactorsMutation(
  $input: CreateBackupSecondFactorsInput!
) {
  createBackupSecondFactors(input: $input) {
    secondFactorsOrErrors {
      __typename
      ... on BackupSecondFactors {
        secondFactors {
          code
        }
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
    "type": "CreateBackupSecondFactorsInput!"
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
    "concreteType": "CreateBackupSecondFactorsPayload",
    "kind": "LinkedField",
    "name": "createBackupSecondFactors",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "secondFactorsOrErrors",
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
                "concreteType": "BackupSecondFactor",
                "kind": "LinkedField",
                "name": "secondFactors",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "code",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "BackupSecondFactors"
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
    "name": "useCreateSettingsBackupSecondFactorsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateSettingsBackupSecondFactorsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "useCreateSettingsBackupSecondFactorsMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateSettingsBackupSecondFactorsMutation(\n  $input: CreateBackupSecondFactorsInput!\n) {\n  createBackupSecondFactors(input: $input) {\n    secondFactorsOrErrors {\n      __typename\n      ... on BackupSecondFactors {\n        secondFactors {\n          code\n        }\n      }\n      ... on Errors {\n        errors {\n          message\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8eed491172b95de47934cbf9463a72d4';
export default node;
