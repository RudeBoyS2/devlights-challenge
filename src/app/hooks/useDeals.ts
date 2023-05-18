import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { calculateDiscountPercentage } from "../utils/utils";
import type { Deal } from "../types/types";

// Custom hook to fetch and filter deals
export const useDeals = () => {
  // STATE
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show85PercentOff, setShow85PercentOff] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [displayCount, setDisplayCount] = useState(15);
  const [hasMoreDeals, setHasMoreDeals] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // EFFECTS
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const filtered = deals.filter((deal) => {
      const lowerCaseTitle = deal.title.toLowerCase();
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const is85PercentOff = calculateDiscountPercentage(deal) >= 85;

      return (
        lowerCaseTitle.includes(lowerCaseSearchQuery) &&
        (!show85PercentOff || is85PercentOff)
      );
    });

    let sortedDeals = filtered;
    if (sortOrder === "ascendant") {
      sortedDeals = filtered
        .slice()
        .sort((a, b) => parseFloat(a.salePrice) - parseFloat(b.salePrice));
    } else if (sortOrder === "descendant") {
      sortedDeals = filtered
        .slice()
        .sort((a, b) => parseFloat(b.salePrice) - parseFloat(a.salePrice));
    }

    setFilteredDeals(sortedDeals.slice(0, displayCount));
    setHasMoreDeals(displayCount < sortedDeals.length);
  }, [deals, searchQuery, show85PercentOff, sortOrder, displayCount]);

  // HELPERS
  const handleSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/deals?${searchQuery}`);
      const data = await response.json();

      setDeals(data);
    } catch (error) {
      console.log("Error fetching deals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle85PercentOff = () => {
    setShow85PercentOff((prevState) => !prevState);
  };

  const handleSortByPriceAsc = () => {
    setSortOrder((prev) =>
      prev === "" || prev === "descendant" ? "ascendant" : ""
    );
  };

  const handleSortByPriceDesc = () => {
    setSortOrder((prev) =>
      prev === "" || prev === "ascendant" ? "descendant" : ""
    );
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 15);
  };


  return {
    filteredDeals,
    handleSearch,
    show85PercentOff,
    handleToggle85PercentOff,
    handleSortByPriceAsc,
    handleSortByPriceDesc,
    handleLoadMore,
    sortOrder,
    isLoading,
    hasMoreDeals
  };
};
