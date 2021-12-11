/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import {  } from "relay-runtime";
export type SettingsEditSettingsRoute_me = {
    readonly " $fragmentRefs": FragmentRefs<"SettingsEditSettingsInformation_me" | "SettingsEditSettingsTwoFactor_me" | "SettingsEditSettingsEmailPreferences_me">;
    readonly " $refType": "SettingsEditSettingsRoute_me";
};
export type SettingsEditSettingsRoute_me$data = SettingsEditSettingsRoute_me;
export type SettingsEditSettingsRoute_me$key = {
    readonly " $data"?: SettingsEditSettingsRoute_me$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SettingsEditSettingsRoute_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SettingsEditSettingsRoute_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SettingsEditSettingsInformation_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SettingsEditSettingsTwoFactor_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SettingsEditSettingsEmailPreferences_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
(node as any).hash = '07b2dfa7211803df622fb745662ff6f4';
export default node;
