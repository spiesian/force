/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityHeaderGeneFragmentContainer_Test_QueryVariables = {};
export type EntityHeaderGeneFragmentContainer_Test_QueryResponse = {
    readonly gene: {
        readonly " $fragmentRefs": FragmentRefs<"EntityHeaderGene_gene">;
    } | null;
};
export type EntityHeaderGeneFragmentContainer_Test_Query = {
    readonly response: EntityHeaderGeneFragmentContainer_Test_QueryResponse;
    readonly variables: EntityHeaderGeneFragmentContainer_Test_QueryVariables;
};



/*
query EntityHeaderGeneFragmentContainer_Test_Query {
  gene(id: "example") {
    ...EntityHeaderGene_gene
    id
  }
}

fragment EntityHeaderGene_gene on Gene {
  ...FollowGeneButton_gene
  internalID
  href
  name
  avatar: image {
    cropped(width: 45, height: 45, version: ["big_and_tall", "tall"]) {
      src
      srcSet
    }
  }
  filterArtworksConnection(first: 1) {
    counts {
      total
    }
    id
  }
}

fragment FollowGeneButton_gene on Gene {
  id
  slug
  name
  internalID
  isFollowed
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "example"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityHeaderGeneFragmentContainer_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Gene",
        "kind": "LinkedField",
        "name": "gene",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityHeaderGene_gene"
          }
        ],
        "storageKey": "gene(id:\"example\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EntityHeaderGeneFragmentContainer_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Gene",
        "kind": "LinkedField",
        "name": "gene",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
            "name": "isFollowed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
            "storageKey": null
          },
          {
            "alias": "avatar",
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 45
                  },
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": [
                      "big_and_tall",
                      "tall"
                    ]
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 45
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "kind": "LinkedField",
                "name": "cropped",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "src",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "srcSet",
                    "storageKey": null
                  }
                ],
                "storageKey": "cropped(height:45,version:[\"big_and_tall\",\"tall\"],width:45)"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "total",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(first:1)"
          }
        ],
        "storageKey": "gene(id:\"example\")"
      }
    ]
  },
  "params": {
    "cacheID": "63747b4d25fec733d070020f937072b4",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "gene": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Gene"
        },
        "gene.avatar": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "gene.avatar.cropped": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "CroppedImageUrl"
        },
        "gene.avatar.cropped.src": (v2/*: any*/),
        "gene.avatar.cropped.srcSet": (v2/*: any*/),
        "gene.filterArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "gene.filterArtworksConnection.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "gene.filterArtworksConnection.counts.total": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "gene.filterArtworksConnection.id": (v3/*: any*/),
        "gene.href": (v4/*: any*/),
        "gene.id": (v3/*: any*/),
        "gene.internalID": (v3/*: any*/),
        "gene.isFollowed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "gene.name": (v4/*: any*/),
        "gene.slug": (v3/*: any*/)
      }
    },
    "name": "EntityHeaderGeneFragmentContainer_Test_Query",
    "operationKind": "query",
    "text": "query EntityHeaderGeneFragmentContainer_Test_Query {\n  gene(id: \"example\") {\n    ...EntityHeaderGene_gene\n    id\n  }\n}\n\nfragment EntityHeaderGene_gene on Gene {\n  ...FollowGeneButton_gene\n  internalID\n  href\n  name\n  avatar: image {\n    cropped(width: 45, height: 45, version: [\"big_and_tall\", \"tall\"]) {\n      src\n      srcSet\n    }\n  }\n  filterArtworksConnection(first: 1) {\n    counts {\n      total\n    }\n    id\n  }\n}\n\nfragment FollowGeneButton_gene on Gene {\n  id\n  slug\n  name\n  internalID\n  isFollowed\n}\n"
  }
};
})();
(node as any).hash = '9f3eaa15e0b5f7ff66469db07d3ae335';
export default node;
