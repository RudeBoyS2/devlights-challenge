"use client";

import { Divider, Flex, Text } from "@chakra-ui/react";
import ChakraNextImage from "./ChakraNextImage";

const Footer = () => {
  return (
    <Flex
      bg="footer"
      w="100%"
      align="center"
      justify="space-around"
      flexDir={{ base: "column", lg: "row" }}
    >
      <ChakraNextImage
        src="/images/navbarlogo.png"
        alt="logo"
        fit="cover"
        h="80px"
        w="120px"
      />
      <Flex
        gap={{ base: "6", lg: "3" }}
        h={{ lg: "25px" }}
        my={{ base: "10" }}
        fontSize="sm"
        align="center"
        color="font"
        borderColor="font"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Acerca de Valve
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Steamworks
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Empleo
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Distribución de Steam
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Tarjetas regalo
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />

        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          Steam
        </Text>
        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
        />
        <Text _hover={{ color: "secondary" }} transition="0.1s ease">
          @steam
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
