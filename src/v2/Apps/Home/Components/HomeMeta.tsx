import * as React from "react"
import { MetaTags } from "v2/Components/MetaTags"
import { useIntl } from "react-intl"

export const HomeMeta: React.FC = () => {
  const intl = useIntl()

  return (
    <MetaTags
      title={intl.formatMessage({ id: "home.metaTagsTitle" })}
      description={intl.formatMessage({ id: "home.metaTagsDescription" })}
    />
  )
}
