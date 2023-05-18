"use client";

import { Grid } from "@chakra-ui/react";
import DealCard from "./DealCard";
import { useDeals } from "../hooks/useDeals";
import { Deal } from "../types/types";
import SearchBar from "./SearchBar";

const CardsContainer = () => {
  const {
    filteredDeals,
    handleSearch,
    show85PercentOff,
    handleToggle85PercentOff,
    handleSortByPriceAsc,
    handleSortByPriceDesc,
    sortOrder
  } = useDeals();
  console.log(filteredDeals);
  
  return (
    <>
      <SearchBar
        handleSearch={handleSearch}
        show85PercentOff={show85PercentOff}
        handleToggle85PercentOff={handleToggle85PercentOff}
        handleSortByPriceAsc={handleSortByPriceAsc}
        handleSortByPriceDesc={handleSortByPriceDesc}
        sortOrder={sortOrder}
      />
      <Grid
        w="100%"
        minH="400px"
        templateColumns={"repeat(auto-fill, minmax(270px, 1fr))"}
        gap={6}
        px="8"
        pb="8"
        justifyItems="center"
      >
        {filteredDeals.map((deal: Deal) => (
          <DealCard key={deal.dealID} deal={deal} />
        ))}
      </Grid>
    </>
  );
};

export default CardsContainer;
