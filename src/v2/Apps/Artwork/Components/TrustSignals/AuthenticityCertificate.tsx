import {
  CertificateIcon,
  Flex,
  Modal,
  Text,
  Link,
  Spacer,
} from "@artsy/palette"
import { AuthenticityCertificate_artwork } from "v2/__generated__/AuthenticityCertificate_artwork.graphql"
import { useState } from "react"
import * as React from "react"
import { createFragmentContainer } from "react-relay"
import { graphql } from "react-relay"
import { TrustSignal, TrustSignalProps } from "./TrustSignal"
import { useIntl, FormattedMessage } from "react-intl"

interface AuthenticityCertificateProps
  extends Omit<TrustSignalProps, "Icon" | "label" | "description"> {
  artwork: AuthenticityCertificate_artwork
}

export const AuthenticityCertificate: React.FC<AuthenticityCertificateProps> = ({
  artwork,
  ...rest
}) => {
  const [isShowingModal, setIsShowingModal] = useState(false)

  const handleClose = () => {
    setIsShowingModal(false)
  }

  const handleClick = () => {
    setIsShowingModal(true)
  }

  const intl = useIntl()

  return artwork.hasCertificateOfAuthenticity && !artwork.is_biddable ? (
    <>
      <TrustSignal
        onClick={handleClick}
        Icon={<CertificateIcon />}
        label={intl.formatMessage({
          id: "artwork.authenticitycertificate.certificateofauthenticity",
        })}
        description="This work includes a certificate of authenticity."
        {...rest}
      />

      <Modal
        show={isShowingModal}
        onClose={handleClose}
        title="Certificate of Authenticity"
      >
        <Flex flexGrow={1} flexDirection="column">
          <Text variant="sm">
            <FormattedMessage id="artwork.authenticitycertificate.certificateofauthenticitydescription" />
          </Text>

          <Spacer mt={2} />

          <Text variant="sm">
            <FormattedMessage id="artwork.authenticitycertificate.coadescription" />
          </Text>

          <Spacer mt={2} />

          <Text variant="sm">
            <FormattedMessage id="artwork.authenticitycertificate.readmore" />{" "}
            <Link
              href="https://support.artsy.net/hc/en-us/articles/360058123933-What-Counts-as-an-Artwork-s-Proof-of-Authenticity-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="artwork.authenticitycertificate.helpcenter" />{" "}
            </Link>
            .
          </Text>
        </Flex>
      </Modal>
    </>
  ) : null
}

export const AuthenticityCertificateFragmentContainer = createFragmentContainer(
  AuthenticityCertificate,
  {
    artwork: graphql`
      fragment AuthenticityCertificate_artwork on Artwork {
        hasCertificateOfAuthenticity
        is_biddable: isBiddable
      }
    `,
  }
)
