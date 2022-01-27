/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContactInformation_submission = {
    readonly id: string;
    readonly externalId: string;
    readonly " $refType": "ContactInformation_submission";
};
export type ContactInformation_submission$data = ContactInformation_submission;
export type ContactInformation_submission$key = {
    readonly " $data"?: ContactInformation_submission$data;
    readonly " $fragmentRefs": FragmentRefs<"ContactInformation_submission">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContactInformation_submission",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalId",
      "storageKey": null
    }
  ],
  "type": "ConsignmentSubmission",
  "abstractKey": null
};
(node as any).hash = 'f1b8cd5439c34a59f3b6ebb416a211ca';
export default node;
