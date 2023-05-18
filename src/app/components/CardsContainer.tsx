"use client";

import { Button, Flex, Grid, Heading, Spinner } from "@chakra-ui/react";
import DealCard from "./DealCard";
import { useDeals } from "../hooks/useDeals";
import { Deal } from "../types/types";
import SearchBar from "./SearchBar";

const CardsContainer = () => {
  const {
    filteredDeals,
    handleSearch,
    show85PercentOff,
    sortOrder,
    isLoading,
    hasMoreDeals,
    handleToggle85PercentOff,
    handleSortByPriceAsc,
    handleSortByPriceDesc,
    handleLoadMore,
  } = useDeals();
  console.log(filteredDeals);

  return (
    <>
      <SearchBar
        handleSearch={handleSearch}
        show85PercentOff={show85PercentOff}
        sortOrder={sortOrder}
        handleToggle85PercentOff={handleToggle85PercentOff}
        handleSortByPriceAsc={handleSortByPriceAsc}
        handleSortByPriceDesc={handleSortByPriceDesc}
      />
      {isLoading ? (
        <Flex w="100%" justify="center" my="8">
          <Spinner size="xl" color="secondary" />
        </Flex>
      ) : filteredDeals.length === 0 && !isLoading ? (
        <Flex w="100%" justify="center" my="8">
          <Heading color="font">No hay deals disponibles</Heading>
        </Flex>
      ) : (
        <>
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
          {hasMoreDeals && (
            <Flex w="100%" justify="center" my="8">
              <Button
                disabled={isLoading}
                cursor="pointer"
                variant="outline"
                color="secondary"
                borderColor="secondary"
                _hover={{ bg: "secondary", color: "font" }}
                _active={{ bg: "secondary", color: "font" }}
                onClick={handleLoadMore}
              >
                Mostrar más
              </Button>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default CardsContainer;
