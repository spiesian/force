/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomStatementRoute_Test_QueryVariables = {
    slug: string;
};
export type ViewingRoomStatementRoute_Test_QueryResponse = {
    readonly viewingRoom: {
        readonly " $fragmentRefs": FragmentRefs<"ViewingRoomStatementRoute_viewingRoom">;
    } | null;
};
export type ViewingRoomStatementRoute_Test_QueryRawResponse = {
    readonly viewingRoom: ({
        readonly introStatement: string | null;
        readonly artworksConnection: ({
            readonly totalCount: number | null;
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly internalID: string;
                    readonly artistNames: string | null;
                    readonly date: string | null;
                    readonly saleMessage: string | null;
                    readonly title: string | null;
                    readonly image: ({
                        readonly resized: ({
                            readonly src: string;
                            readonly srcSet: string;
                            readonly width: number | null;
                            readonly height: number | null;
                        }) | null;
                    }) | null;
                    readonly id: string;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly pullQuote: string | null;
        readonly body: string | null;
        readonly subsections: ReadonlyArray<{
            readonly internalID: string;
            readonly title: string | null;
            readonly body: string | null;
            readonly image: ({
                readonly width: number | null;
                readonly height: number | null;
                readonly imageURLs: ({
                    readonly normalized: string | null;
                }) | null;
            }) | null;
            readonly caption: string | null;
        }>;
    }) | null;
};
export type ViewingRoomStatementRoute_Test_Query = {
    readonly response: ViewingRoomStatementRoute_Test_QueryResponse;
    readonly variables: ViewingRoomStatementRoute_Test_QueryVariables;
    readonly rawResponse: ViewingRoomStatementRoute_Test_QueryRawResponse;
};



/*
query ViewingRoomStatementRoute_Test_Query(
  $slug: ID!
) {
  viewingRoom(id: $slug) {
    ...ViewingRoomStatementRoute_viewingRoom
  }
}

fragment ViewingRoomBody_viewingRoom on ViewingRoom {
  body
}

fragment ViewingRoomIntro_viewingRoom on ViewingRoom {
  introStatement
}

fragment ViewingRoomPullQuote_viewingRoom on ViewingRoom {
  pullQuote
}

fragment ViewingRoomStatementRoute_viewingRoom on ViewingRoom {
  ...ViewingRoomIntro_viewingRoom
  ...ViewingRoomWorks_viewingRoom
  ...ViewingRoomPullQuote_viewingRoom
  ...ViewingRoomBody_viewingRoom
  ...ViewingRoomSubsections_viewingRoom
  artworksConnection(first: 2) {
    totalCount
  }
  subsections {
    internalID
  }
}

fragment ViewingRoomSubsections_viewingRoom on ViewingRoom {
  subsections {
    internalID
    title
    body
    image {
      width
      height
      imageURLs {
        normalized
      }
    }
    caption
  }
}

fragment ViewingRoomWorksArtwork_artwork on Artwork {
  artistNames
  date
  saleMessage
  title
  image {
    resized(width: 445) {
      src
      srcSet
      width
      height
    }
  }
}

fragment ViewingRoomWorks_viewingRoom on ViewingRoom {
  artworksConnection(first: 2) {
    totalCount
    edges {
      node {
        internalID
        ...ViewingRoomWorksArtwork_artwork
        id
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
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v9 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v10 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewingRoomStatementRoute_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ViewingRoomStatementRoute_viewingRoom"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewingRoomStatementRoute_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "introStatement",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2
              }
            ],
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
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
                "concreteType": "ArtworkEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "artistNames",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "date",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "saleMessage",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
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
                                "name": "width",
                                "value": 445
                              }
                            ],
                            "concreteType": "ResizedImageUrl",
                            "kind": "LinkedField",
                            "name": "resized",
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
                              },
                              (v4/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": "resized(width:445)"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworksConnection(first:2)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pullQuote",
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ViewingRoomSubsection",
            "kind": "LinkedField",
            "name": "subsections",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ARImage",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageURLs",
                    "kind": "LinkedField",
                    "name": "imageURLs",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "normalized",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "caption",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cfb84bd9d30f51d49c43da8b0feb49b2",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewingRoom": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ViewingRoom"
        },
        "viewingRoom.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "viewingRoom.artworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdge"
        },
        "viewingRoom.artworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "viewingRoom.artworksConnection.edges.node.artistNames": (v7/*: any*/),
        "viewingRoom.artworksConnection.edges.node.date": (v7/*: any*/),
        "viewingRoom.artworksConnection.edges.node.id": (v8/*: any*/),
        "viewingRoom.artworksConnection.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "viewingRoom.artworksConnection.edges.node.image.resized": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ResizedImageUrl"
        },
        "viewingRoom.artworksConnection.edges.node.image.resized.height": (v9/*: any*/),
        "viewingRoom.artworksConnection.edges.node.image.resized.src": (v10/*: any*/),
        "viewingRoom.artworksConnection.edges.node.image.resized.srcSet": (v10/*: any*/),
        "viewingRoom.artworksConnection.edges.node.image.resized.width": (v9/*: any*/),
        "viewingRoom.artworksConnection.edges.node.internalID": (v8/*: any*/),
        "viewingRoom.artworksConnection.edges.node.saleMessage": (v7/*: any*/),
        "viewingRoom.artworksConnection.edges.node.title": (v7/*: any*/),
        "viewingRoom.artworksConnection.totalCount": (v9/*: any*/),
        "viewingRoom.body": (v7/*: any*/),
        "viewingRoom.introStatement": (v7/*: any*/),
        "viewingRoom.pullQuote": (v7/*: any*/),
        "viewingRoom.subsections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "ViewingRoomSubsection"
        },
        "viewingRoom.subsections.body": (v7/*: any*/),
        "viewingRoom.subsections.caption": (v7/*: any*/),
        "viewingRoom.subsections.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ARImage"
        },
        "viewingRoom.subsections.image.height": (v9/*: any*/),
        "viewingRoom.subsections.image.imageURLs": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ImageURLs"
        },
        "viewingRoom.subsections.image.imageURLs.normalized": (v7/*: any*/),
        "viewingRoom.subsections.image.width": (v9/*: any*/),
        "viewingRoom.subsections.internalID": (v8/*: any*/),
        "viewingRoom.subsections.title": (v7/*: any*/)
      }
    },
    "name": "ViewingRoomStatementRoute_Test_Query",
    "operationKind": "query",
    "text": "query ViewingRoomStatementRoute_Test_Query(\n  $slug: ID!\n) {\n  viewingRoom(id: $slug) {\n    ...ViewingRoomStatementRoute_viewingRoom\n  }\n}\n\nfragment ViewingRoomBody_viewingRoom on ViewingRoom {\n  body\n}\n\nfragment ViewingRoomIntro_viewingRoom on ViewingRoom {\n  introStatement\n}\n\nfragment ViewingRoomPullQuote_viewingRoom on ViewingRoom {\n  pullQuote\n}\n\nfragment ViewingRoomStatementRoute_viewingRoom on ViewingRoom {\n  ...ViewingRoomIntro_viewingRoom\n  ...ViewingRoomWorks_viewingRoom\n  ...ViewingRoomPullQuote_viewingRoom\n  ...ViewingRoomBody_viewingRoom\n  ...ViewingRoomSubsections_viewingRoom\n  artworksConnection(first: 2) {\n    totalCount\n  }\n  subsections {\n    internalID\n  }\n}\n\nfragment ViewingRoomSubsections_viewingRoom on ViewingRoom {\n  subsections {\n    internalID\n    title\n    body\n    image {\n      width\n      height\n      imageURLs {\n        normalized\n      }\n    }\n    caption\n  }\n}\n\nfragment ViewingRoomWorksArtwork_artwork on Artwork {\n  artistNames\n  date\n  saleMessage\n  title\n  image {\n    resized(width: 445) {\n      src\n      srcSet\n      width\n      height\n    }\n  }\n}\n\nfragment ViewingRoomWorks_viewingRoom on ViewingRoom {\n  artworksConnection(first: 2) {\n    totalCount\n    edges {\n      node {\n        internalID\n        ...ViewingRoomWorksArtwork_artwork\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff6fa30c7a24fd5b06c3ff3ec9e030a4';
export default node;
