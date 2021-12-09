/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SettingsEditSettingsTwoFactorAppAuthenticator_me = {
    readonly hasSecondFactorEnabled: boolean;
    readonly appSecondFactors: ReadonlyArray<({
        readonly __typename: "AppSecondFactor";
        readonly internalID: string;
        readonly name: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null> | null;
    readonly " $refType": "SettingsEditSettingsTwoFactorAppAuthenticator_me";
};
export type SettingsEditSettingsTwoFactorAppAuthenticator_me$data = SettingsEditSettingsTwoFactorAppAuthenticator_me;
export type SettingsEditSettingsTwoFactorAppAuthenticator_me$key = {
    readonly " $data"?: SettingsEditSettingsTwoFactorAppAuthenticator_me$data;
    readonly " $fragmentRefs": FragmentRefs<"SettingsEditSettingsTwoFactorAppAuthenticator_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SettingsEditSettingsTwoFactorAppAuthenticator_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasSecondFactorEnabled",
      "storageKey": null
    },
    {
      "alias": "appSecondFactors",
      "args": [
        {
          "kind": "Literal",
          "name": "kinds",
          "value": [
            "app"
          ]
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "secondFactors",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
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
            }
          ],
          "type": "AppSecondFactor"
        }
      ],
      "storageKey": "secondFactors(kinds:[\"app\"])"
    }
  ],
  "type": "Me"
};
(node as any).hash = '7be685e8d919a1d8fdf9f086cd25cad3';
export default node;
