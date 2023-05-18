"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ChakraNextImage from "./ChakraNextImage";
import {
  calculateDiscountPercentage,
  calculateStarRating,
} from "../utils/utils";
import type { Deal } from "../types/types";
import StarIcon from "./StarIcon";

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const starRating = calculateStarRating(deal);

  return (
    <Flex
      w="270px"
      h="300px"
      border="1px solid"
      borderColor="secondary"
      align="center"
      flexDir="column"
      color="font"
      justify="space-between"
      pb="4"
    >
      <Flex
        h="120px"
        w="100%"
        position="relative"
        align="center"
        justify="center"
      >
        <Box
          position="absolute"
          bg="secondary"
          color="font"
          p="2"          
          top="1"
          right="1"
          zIndex={100}
          fontSize="12px"
        >
          %{calculateDiscountPercentage(deal)}
        </Box>
        <ChakraNextImage
          src={deal.thumb || "/images/navbarlogo.png"}
          alt="banner"
          fit="cover"
          h="100%"
          w="100%"
        />
      </Flex>
      <Heading as="h2" fontSize="xl" textAlign="center">
        {deal.title}
      </Heading>
      <Flex flexDir="column" align="center" gap="1">
        <Text>Steam review</Text>
        <Flex>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} filled={index < starRating} />
          ))}
        </Flex>
      </Flex>
      <Button cursor="pointer"
              variant="outline"
              color="secondary"
              borderColor="secondary"
              _hover={{ bg: "secondary", color: "font" }}
              _active={{ bg: "secondary", color: "font" }}>
        {deal.salePrice && (
          <>
            <Text textDecoration="line-through" fontSize="12px">
              ${deal.normalPrice}
            </Text>
            <Text ml="2">${deal.salePrice}</Text>
          </>
        )}
      </Button>
    </Flex>
  );
};

export default DealCard;
