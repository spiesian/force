/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UploadPhotos_submission = {
    readonly id: string;
    readonly externalId: string;
    readonly assets: ReadonlyArray<{
        readonly id: string;
        readonly imageUrls: unknown | null;
        readonly geminiToken: string | null;
        readonly size: string | null;
        readonly filename: string | null;
    } | null> | null;
    readonly " $refType": "UploadPhotos_submission";
};
export type UploadPhotos_submission$data = UploadPhotos_submission;
export type UploadPhotos_submission$key = {
    readonly " $data"?: UploadPhotos_submission$data;
    readonly " $fragmentRefs": FragmentRefs<"UploadPhotos_submission">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UploadPhotos_submission",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ConsignmentSubmissionCategoryAsset",
      "kind": "LinkedField",
      "name": "assets",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageUrls",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "geminiToken",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "size",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "filename",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ConsignmentSubmission",
  "abstractKey": null
};
})();
(node as any).hash = '16503f1f65c3bcc1be9ae1e7120964eb';
export default node;
