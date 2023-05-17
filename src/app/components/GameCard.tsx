'use client'

import { Box, Flex, Heading } from "@chakra-ui/react";
import ChakraNextImage from "./ChakraNextImage";

const GameCard = () => {
  return (
    <Flex w="250px" h="300px" bg="green" align="center" flexDir="column">
      <Flex
        h="120px"
        w="100%"
        position="relative"
        align="center"
        justify="center"
        mt="2"
      >
        <Box
          position="absolute"
          bg="secondary"
          color="font"
          p="2"
          borderRadius="full"
          top="1"
          right="4"
          zIndex={100}
        >
          -20%
        </Box>
        <ChakraNextImage
          src="/images/navbarlogo.png"
          alt="banner"
          fit="cover"
          h="80%"
          w="80%"
        />
      </Flex>
      <Heading as="h2" fontSize="xl">
        Nombre
      </Heading>
    </Flex>
  );
};

export default GameCard;
