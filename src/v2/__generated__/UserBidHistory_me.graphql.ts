/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserBidHistory_me = {
    readonly inactiveLotStandings: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SettingsAuctionsLotStanding_lotStanding">;
    } | null> | null;
    readonly " $refType": "UserBidHistory_me";
};
export type UserBidHistory_me$data = UserBidHistory_me;
export type UserBidHistory_me$key = {
    readonly " $data"?: UserBidHistory_me$data;
    readonly " $fragmentRefs": FragmentRefs<"UserBidHistory_me">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserBidHistory_me",
  "selections": [
    {
      "alias": "inactiveLotStandings",
      "args": [
        {
          "kind": "Literal",
          "name": "live",
          "value": false
        }
      ],
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "lotStandings",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SettingsAuctionsLotStanding_lotStanding"
        }
      ],
      "storageKey": "lotStandings(live:false)"
    }
  ],
  "type": "Me",
  "abstractKey": null
};
(node as any).hash = 'e30334054ea3018f848981a65e226f56';
export default node;
