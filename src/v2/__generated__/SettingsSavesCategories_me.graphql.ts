/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SettingsSavesCategories_me = {
    readonly followsAndSaves: {
        readonly categoriesConnection: {
            readonly totalCount: number | null;
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly internalID: string;
                    readonly category: {
                        readonly internalID: string;
                        readonly " $fragmentRefs": FragmentRefs<"CategoryRail_category">;
                    } | null;
                } | null;
            } | null> | null;
        } | null;
    } | null;
    readonly " $refType": "SettingsSavesCategories_me";
};
export type SettingsSavesCategories_me$data = SettingsSavesCategories_me;
export type SettingsSavesCategories_me$key = {
    readonly " $data"?: SettingsSavesCategories_me$data;
    readonly " $fragmentRefs": FragmentRefs<"SettingsSavesCategories_me">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "after",
        "direction": "forward",
        "path": [
          "followsAndSaves",
          "categoriesConnection"
        ]
      }
    ]
  },
  "name": "SettingsSavesCategories_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FollowsAndSaves",
      "kind": "LinkedField",
      "name": "followsAndSaves",
      "plural": false,
      "selections": [
        {
          "alias": "categoriesConnection",
          "args": null,
          "concreteType": "FollowGeneConnection",
          "kind": "LinkedField",
          "name": "__SettingsSavesCategories_categoriesConnection_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FollowGeneEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "FollowGene",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    {
                      "alias": "category",
                      "args": null,
                      "concreteType": "Gene",
                      "kind": "LinkedField",
                      "name": "gene",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "CategoryRail_category"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();
(node as any).hash = '6de6e05d5dbe69b4e8f089ba0d9a9636';
export default node;
