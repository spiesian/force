import { Select } from "@artsy/palette"
import { PositionProps, SpaceProps } from "styled-system"

export interface LanguageSelectProps extends PositionProps, SpaceProps {
  selected?: string
  disabled?: boolean
  error?: string
  onSelect?: (value) => void
}

export const LanguageSelect = (props: LanguageSelectProps) => {
  return <Select {...props} options={LANGUAGE_SELECT_OPTIONS} />
}

const LANGUAGE_SELECT_OPTIONS = [
  { text: "English (US)", value: "en-US" },
  { text: "Portuguese (BR)", value: "pt-BR" },
  { text: "Romanian (RO)", value: "ro-RO" },
  { text: "Korean (KR)", value: "ko-KR" },
]

export const LANGUAGE_CODE_TO_LANGUAGE_NAME = LANGUAGE_SELECT_OPTIONS.reduce(
  (acc, option) => Object.assign(acc, { [option.value]: option.text }),
  {}
)
