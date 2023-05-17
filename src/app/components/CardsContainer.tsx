"use client";

import { Grid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const CardsContainer = () => {
  return (
    <Grid
      w="100%"
      minH="400px"
      templateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
      gap={6}
      p="8"
      justifyItems="center"
    >
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </Grid>
  );
};

export default CardsContainer;
