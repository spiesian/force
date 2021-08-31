import React, { Dispatch, useContext, useReducer } from "react"
import { createContext } from "react"
import { Environment, fetchQuery, graphql } from "react-relay"
import { useSystemContext } from "v2/System"

import { ConsignPriceEstimateContext_SearchConnection_Query } from "v2/__generated__/ConsignPriceEstimateContext_SearchConnection_Query.graphql"
import { ConsignPriceEstimateContext_ArtistInsights_Query } from "v2/__generated__/ConsignPriceEstimateContext_ArtistInsights_Query.graphql"

interface PriceEstimateContextProps {
  artistInsights?: ArtistInsights | null
  fetchArtistInsights?: (artistInternalID: string) => void
  fetchSuggestions?: (searchQuery: string) => void
  isFetching?: boolean
  medium?: string
  mediums?: string[]
  searchQuery?: string
  selectSuggestion?: (suggestion: Suggestion) => void
  selectedSuggestion?: Suggestion
  setFetching?: (isFetching: boolean) => void
  setMedium?: (medium: string) => void
  setMediums?: (mediums: string[]) => void
  setSearchQuery?: (searchQuery: string) => void
  suggestions?: Suggestions
}

type ArtistInsights = NonNullable<
  NonNullable<
    ConsignPriceEstimateContext_ArtistInsights_Query["response"]["priceInsights"]
  >["edges"]
>

type Suggestions = NonNullable<
  NonNullable<
    ConsignPriceEstimateContext_SearchConnection_Query["response"]["searchConnection"]
  >["edges"]
>

export type Suggestion = Suggestions[0]

type State = Pick<
  PriceEstimateContextProps,
  | "artistInsights"
  | "isFetching"
  | "medium"
  | "mediums"
  | "searchQuery"
  | "selectedSuggestion"
  | "suggestions"
>

type Actions = Pick<
  PriceEstimateContextProps,
  | "fetchArtistInsights"
  | "fetchSuggestions"
  | "selectSuggestion"
  | "setFetching"
  | "setMedium"
  | "setMediums"
  | "setSearchQuery"
>

type Action = {
  type: keyof State
  payload: {
    [P in keyof State]: State[P]
  }
}

const initialState: State = {
  artistInsights: null,
  isFetching: false,
  // @ts-expect-error STRICT_NULL_CHECK
  medium: null,
  mediums: [],
  searchQuery: "",
  selectedSuggestion: null,
  suggestions: [],
}

const PriceEstimateContext = createContext<PriceEstimateContextProps>(
  initialState
)

function getActions(dispatch: Dispatch<Action>, relayEnvironment: Environment) {
  const actions: Actions = {
    /**
     * Fetch artist insights based on artist's internalID.
     */
    fetchArtistInsights: async artistInternalID => {
      actions.setFetching?.(true)

      const response = await fetchQuery<
        ConsignPriceEstimateContext_ArtistInsights_Query
      >(
        relayEnvironment,
        graphql`
          query ConsignPriceEstimateContext_ArtistInsights_Query(
            $artistInternalID: ID!
          ) {
            priceInsights(
              artistId: $artistInternalID
              sort: DEMAND_RANK_DESC
              first: 20
            ) {
              edges {
                node {
                  artistName
                  medium
                  lowRangeCents
                  midRangeCents
                  highRangeCents
                }
              }
            }
          }
        `,
        {
          artistInternalID,
        }
      )

      const artistInsights = response?.priceInsights?.edges || []

      if (artistInsights.length) {
        const mediums = artistInsights.map(edge => edge?.node?.medium)
        const medium = artistInsights[0]?.node?.medium

        actions.setMediums?.(mediums as string[])
        actions.setMedium?.(String(medium))
      }

      dispatch({
        payload: { artistInsights },
        type: "artistInsights",
      })

      actions.setFetching?.(false)
    },

    /**
     * Fetches artist search suggestions based on searchQuery
     */
    fetchSuggestions: async searchQuery => {
      const response = await fetchQuery<
        ConsignPriceEstimateContext_SearchConnection_Query
      >(
        relayEnvironment,
        graphql`
          query ConsignPriceEstimateContext_SearchConnection_Query(
            $searchQuery: String!
          ) {
            searchConnection(
              query: $searchQuery
              entities: ARTIST
              mode: AUTOSUGGEST
              first: 7
            ) {
              edges {
                node {
                  displayLabel
                  ... on Artist {
                    slug
                    internalID
                    imageUrl
                  }
                }
              }
            }
          }
        `,
        { searchQuery }
      )

      const suggestions = response.searchConnection?.edges!

      dispatch({
        payload: { suggestions },
        type: "suggestions",
      })
    },

    /**
     * Handler for when a drop down item is selected
     */
    selectSuggestion: selectedSuggestion => {
      dispatch({
        payload: { selectedSuggestion },
        type: "selectedSuggestion",
      })

      actions.fetchArtistInsights?.(selectedSuggestion?.node?.internalID!)
    },

    setFetching: isFetching => {
      dispatch({
        payload: { isFetching },
        type: "isFetching",
      })
    },

    setMedium: medium => {
      dispatch({
        payload: { medium },
        type: "medium",
      })
    },

    setMediums: mediums => {
      dispatch({
        payload: { mediums },
        type: "mediums",
      })
    },

    /**
     * Updates state with current search query
     */
    setSearchQuery: searchQuery => {
      dispatch({
        payload: { searchQuery },
        type: "searchQuery",
      })
    },
  }

  return actions
}

function reducer(state: State, action: Action): State {
  return {
    ...state,
    [action.type]: action.payload[action.type],
  }
}

export const PriceEstimateContextProvider: React.FC = ({ children }) => {
  const { relayEnvironment } = useSystemContext()
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = getActions(dispatch, relayEnvironment!)
  const values = {
    ...state,
    ...actions,
  }

  return (
    <PriceEstimateContext.Provider value={values}>
      {children}
    </PriceEstimateContext.Provider>
  )
}

export const usePriceEstimateContext = () => {
  const context = useContext(PriceEstimateContext)
  return context
}

export const tests = {
  getActions,
  reducer,
}
