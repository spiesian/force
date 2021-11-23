import { BorderBoxProps, Box, Button, Flex, Text } from "@artsy/palette"
import React, { useEffect, useState } from "react"

interface BackupSecondFactorReminderProps extends BorderBoxProps {
  backupSecondFactors: string[]
  factorTypeName: string
}

export const BackupSecondFactorReminder: React.FC<BackupSecondFactorReminderProps> = props => {
  const { backupSecondFactors, factorTypeName } = props
  const [supportsClipboard, setSupportsClipboard] = useState(false)

  useEffect(() => {
    // Only render the copy button if browser supports the Clipboard API
    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
    if ("clipboard" in navigator) setSupportsClipboard(true)
  }, [])

  function copyCodesToClipboard() {
    navigator.clipboard.writeText(props.backupSecondFactors.join("\n"))
  }

  function downloadCodes() {
    const codes = props.backupSecondFactors.join("\n")
    const element = document.createElement("a")
    const file = new Blob([codes], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "recovery_codes.txt"
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  return (
    <Box minHeight="280px">
      <Text color="black60">
        You can use these one-time codes to access your account if you lose
        access to your{" "}
        {factorTypeName === "AppSecondFactor"
          ? "authenticator application"
          : "phone"}
        .
      </Text>
      <Text mt={2} variant="mediumText" color="black80">
        Treat these codes like a password and store them in a safe place.
      </Text>
      <Flex mt={3} flexDirection="row" flexWrap="wrap">
        {backupSecondFactors.map((factor, index) => (
          <Box width="50%" key={index}>
            <Text
              variant="subtitle"
              color="black60"
              textAlign="center"
              py={0.5}
            >
              {factor}
            </Text>
          </Box>
        ))}
      </Flex>

      <Flex justifyContent="center">
        {supportsClipboard && (
          <Button
            onClick={copyCodesToClipboard}
            variant="secondaryOutline"
            size="small"
            mt={1}
            mb={1}
            data-test="copyButton"
          >
            Copy
          </Button>
        )}

        <Button
          onClick={downloadCodes}
          variant="secondaryOutline"
          size="small"
          m={1}
          data-test="downloadButton"
        >
          Download
        </Button>
      </Flex>
    </Box>
  )
}
