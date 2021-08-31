import {
  AutocompleteInput,
  AutoCompleteInputOption,
  Box,
  Text,
} from "@artsy/palette"
import React, { useState } from "react"
import { graphql } from "relay-runtime"
import { useSystemContext } from "v2/System"
import { SystemQueryRenderer } from "v2/System/Relay/SystemQueryRenderer"
import { useRouter } from "v2/System/Router/useRouter"
import { extractNodes } from "v2/Utils/extractNodes"
import { NavBarSearchQuery } from "v2/__generated__/NavBarSearchQuery.graphql"

export const NavBarSearch: React.FC = () => {
  const [query, setQuery] = useState("")

  const { relayEnvironment } = useSystemContext()

  return (
    <SystemQueryRenderer<NavBarSearchQuery>
      environment={relayEnvironment}
      query={graphql`
        query NavBarSearchQuery($term: String!, $hasTerm: Boolean!) {
          viewer {
            searchConnection(query: $term, mode: AUTOSUGGEST, first: 7)
              @include(if: $hasTerm) {
              edges {
                node {
                  text: displayLabel
                  value: href
                  ... on SearchableItem {
                    subtitle: displayType
                  }
                }
              }
            }
          }
        }
      `}
      placeholder={
        <Box
          width="100%"
          as="form"
          // @ts-ignore
          action="/search"
          method="GET"
        >
          <NavBarSearchInput query={query} onChange={setQuery} results={[]} />
        </Box>
      }
      variables={{ hasTerm: true, term: query }}
      render={({ props, error }) => {
        if (error || !props || !props.viewer) {
          return (
            <NavBarSearchInput query={query} onChange={setQuery} results={[]} />
          )
        }

        const results = extractNodes(props.viewer.searchConnection).map(
          node => ({
            text: node.text!,
            value: node.value!,
            subtitle: node.subtitle,
          })
        )

        return (
          <NavBarSearchInput
            query={query}
            onChange={setQuery}
            results={results}
          />
        )
      }}
    />
  )
}

interface NavBarSearchInputProps {
  query: string
  results: (AutoCompleteInputOption & { subtitle?: string | null })[]
  onChange(query: string): void
}

const NavBarSearchInput: React.FC<NavBarSearchInputProps> = ({
  query,
  onChange,
  results: searchResults,
}) => {
  const { router } = useRouter()

  const results = [
    {
      text: `See full results for “${query}”`,
      value: query,
      subtitle: undefined,
    },
    ...searchResults,
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <AutocompleteInput
      height={40}
      width="100%"
      defaultValue={query}
      options={results}
      placeholder="Search by artist, gallery, style, theme, tag, etc."
      onChange={handleChange}
      onSubmit={query => {
        router.push(`/search?term=${query}`)
      }}
      onSelect={(option, i) => {
        if (i === 0) {
          router.push(`/search?term=${option.value}`)
          return
        }

        if (option.subtitle === "Artist") {
          router.push(`${option.value}/works-for-sale`)
          return
        }

        router.push(option.value)
      }}
      renderOption={(option, i) => {
        // Highlight substrings that match with query
        const matches = option.text.split(new RegExp(`(${query})`, "gi"))

        return (
          <Box
            px={2}
            py={i === 0 ? 2 : 1}
            {...(i === 0
              ? { borderBottom: "1px solid", borderColor: "black10" }
              : {})}
          >
            <Text variant="md">
              {matches.map(part =>
                i !== 0 && part.toLowerCase() === query.toLowerCase() ? (
                  <strong>{part}</strong>
                ) : (
                  part
                )
              )}
            </Text>

            {option.subtitle && (
              <Text variant="xs" color="black60">
                {option.subtitle}
              </Text>
            )}
          </Box>
        )
      }}
    />
  )
}
