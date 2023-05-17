'use client'

import { Box } from "@chakra-ui/react"
import ChakraNextImage from "./ChakraNextImage"

const Banner = () => {
  return (
    <Box w="100%">
        <ChakraNextImage src="/images/herobanner.jpg" alt="banner" fit="cover" h={{base: "250px", lg: "400px", "2xl": "520px"}} w="100%" />
    </Box>
  )
}

export default Banner