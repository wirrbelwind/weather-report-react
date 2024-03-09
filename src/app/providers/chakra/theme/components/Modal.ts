import { defineStyleConfig } from "@chakra-ui/react";

export const Modal = defineStyleConfig({
  defaultProps: {
    size: "2xl"
  },
  baseStyle: {
    header: {
      fontSize: "3rem",
      textAlign: "center"
    }
  }
})