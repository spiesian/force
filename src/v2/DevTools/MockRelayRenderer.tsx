/* eslint-disable jest/no-commented-out-tests */
import { SystemContextProvider } from "v2/System"
import { SystemContextConsumer } from "v2/System"
import { renderWithLoadProgress } from "v2/System/Relay/renderWithLoadProgress"
import { SystemQueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
import { IMocks } from "graphql-tools/dist/Interfaces"
import * as React from "react"
/* tslint:disable-next-line:no-query-renderer-import */
import { QueryRenderer } from "react-relay"
import {
  Environment,
  GraphQLTaggedNode,
  INetwork,
  OperationType,
  RecordSource,
  Store,
} from "relay-runtime"
import {
  createMockNetworkLayer,
  createMockNetworkLayer2,
} from "./createMockNetworkLayer"

export interface MockRelayRendererProps<T extends OperationType> {
  Component: React.ComponentType<any>
  componentProps?: object
  variables?: T["variables"]
  query: GraphQLTaggedNode
  /**
   * @deprecated use mockData and mockMutationResults
   */
  mockResolvers?: IMocks
  /**
   * @example
   * mockData={{order: {id: "my-order-id", lineItems: {...}}}}
   */
  mockData?: object
  /**
   * @example
   * mockMutationResults={{
   *   commerceCreateOrderWithArtworkId: {
   *     orderOrError: {
   *       order: {id: "my-order-id"}
   *     }
   *   }
   * }}
   */
  mockMutationResults?: object
  mockNetwork?: INetwork
}

export interface MockRelayRendererState {
  caughtError: {
    error: any
    errorInfo: any
  }
}

/**
 * Renders a tree of Relay containers with a mocked local instance of the
 * metaphysics schema.
 *
 * @note
 * Use this component in storybooks, but not tests. Because Relay works
 * asynchronously _and_ a tree may contain nested `QueryRenderer` components,
 * for tests you should usually use {@link renderRelayTree}.
 *
 * @param params.Component
 * The component that either is a Relay container or has children that are Relay
 * containers.
 *
 * @param params.variables
 * The optional variables that should be used in the operation. In most cases
 * you should be able to just hardcode these into the root query.
 *
 * @param params.query
 * The root GraphQL query.
 *
 * @param params.mockResolvers
 * @deprecated use params.mockData and params.mockMutationResults
 * A list of types/fields, that are part of metaphysics’ schema, and the data to
 * return for those. See {@link https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks}
 *
 * @example
 *
   ```tsx
   jest.unmock("react-relay")

   const Artwork = createFragmentContainer(
     props => (
       <div>
         <span>{props.artwork.title}}</span>
         <img src={props.artwork.image.url} />
       </div>
     ),
     graphql`
       fragment MockRelayRenderer_artwork on Artwork {
         image {
           url
         }
       }
     `
   )

   it("renders a Relay tree", done => {
     const wrapper = mount(
       <MockRelayRenderer
         Component={Artwork}
         query={graphql`
           query AnotherMockRelayRendererQuery {
             artwork(id: "mona-lisa") {
               ...MockRelayRenderer_artwork
             }
           }
         `}
         mockResolvers={{
           Artwork: () => ({
             title: "Mona Lisa",
             image: {
               url: "http://test/image.jpg",
             },
           }),
         }}
       />
     )
     setTimeout(() => {
       expect(wrapper.find("span").text()).toEqual("Mona Lisa")
       expect(wrapper.find("img").props().src).toEqual("http://test/image.jpg")
       done()
     }, 10)
   })
   ```
  * @param params.mockMutationResults
  * @param params.mockData
  *
  */
export class MockRelayRenderer<T extends OperationType> extends React.Component<
  MockRelayRendererProps<T>,
  MockRelayRendererState
> {
  // @ts-expect-error PLEASE_FIX_ME_STRICT_NULL_CHECK_MIGRATION
  state = {
    caughtError: undefined,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ caughtError: { error, errorInfo } })
  }

  getRelayNetwork() {
    const {
      mockResolvers,
      mockData,
      mockMutationResults,
      mockNetwork,
    } = this.props

    if (mockNetwork) {
      if (mockResolvers || mockData || mockMutationResults) {
        throw new Error(
          "You cannot use mockNetwork with mockResolvers, mockData, or mockMutationResults"
        )
      }
      return mockNetwork
    }

    if ((mockData || mockMutationResults) && mockResolvers) {
      throw new Error(
        "You cannot use mockResolvers with either mockData or mockMutationResults"
      )
    }

    if (!mockData && !mockResolvers && !mockMutationResults) {
      throw new Error("You must supply mockData and/or mockMutationResults")
    }

    return mockData
      ? createMockNetworkLayer2({
          mockData,
          mockMutationResults,
        })
      : createMockNetworkLayer({
          Query: () => ({}),
          ...mockResolvers,
        })
  }

  render() {
    // TODO: When extracting these test utils to their own package, this check
    //       should probably become a custom TSLint rule, as there’s no good way
    //       to test this in a generic way, plus with the rule we get fixes.
    if (
      typeof __webpack_require__ === "undefined" &&
      // eslint-disable-next-line jest/no-mocks-import
      QueryRenderer === require("../../../__mocks__/react-relay").QueryRenderer
    ) {
      throw new Error(
        "The `react-relay` module has been mocked, be sure to unmock it with: " +
          '`jest.unmock("react-relay")`'
      )
    }

    if (this.state.caughtError) {
      // @ts-ignore
      const { error, errorInfo } = this.state.caughtError
      console.error({ error, errorInfo })
      return `Error occurred while rendering Relay component: ${error}`
    }

    const { Component, variables, query } = this.props

    const network = this.getRelayNetwork()
    const source = new RecordSource()
    const store = new Store(source)
    const environment = new Environment({
      network,
      store,
    })

    return (
      <SystemContextConsumer>
        {contextProps => (
          <SystemContextProvider
            {...contextProps}
            relayEnvironment={environment}
          >
            <SystemQueryRenderer
              // tslint:disable-next-line relay-operation-generics
              query={query}
              environment={environment}
              variables={variables || {}}
              // We rely on renderWithLoadProgress to throw an error in the test
              // env ASAP. When we extract these test helpers to their own package
              // that will need to be handled explicitly.
              render={renderWithLoadProgress(
                Component as any,
                this.props.componentProps
              )}
            />
          </SystemContextProvider>
        )}
      </SystemContextConsumer>
    )
  }
}
