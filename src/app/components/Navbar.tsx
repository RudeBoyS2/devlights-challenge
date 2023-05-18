'use client'

import { Button, Flex, Text } from "@chakra-ui/react"
import ChakraNextImage from "./ChakraNextImage"

import { FaShoppingCart } from "react-icons/fa"

const Navbar = () => {
  return (
    <Flex color="font" w="100%" h="80px" alignItems="center" justifyContent="space-around">
        <ChakraNextImage src="/images/navbarlogo.png" alt="logo" fit="cover" h={{base: "45px", lg: "60px"}} w={{base: "65px", lg: "80px"}} />
        <Flex>
        <Button bg="none" _hover={{bg: "none", color: "secondary"}} _active={{bg: "none"}}>Home</Button>
        <Button bg="none" _hover={{bg: "none", color: "secondary"}} _active={{bg: "none"}}>Browse</Button>
        </Flex>
        <Button display="flex" gap="1" cursor="pointer" variant="outline" color="secondary" borderColor="secondary" _hover={{bg: "secondary", color: "font"}} _active={{bg: "secondary", color: "font"}}>
            <FaShoppingCart size={20} />
            <Text>Cart</Text>
        </Button>
    </Flex>
  )
}

export default Navbar