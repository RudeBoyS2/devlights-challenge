"use client";

import {
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  handleSearch: any;
  show85PercentOff: boolean;
  handleToggle85PercentOff: () => void;
  handleSortByPriceAsc: () => void;
  handleSortByPriceDesc: () => void;
  sortOrder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  handleSearch,
  show85PercentOff,
  handleToggle85PercentOff,
  handleSortByPriceAsc,
  handleSortByPriceDesc,
  sortOrder,
}) => {
  const handleSortChange = (sortType: string) => {
    if (sortType === "ascendant") {
      handleSortByPriceAsc();
    } else if (sortType === "descendant") {
      handleSortByPriceDesc();
    }
  };

  console.log(sortOrder);

  return (
    <Flex w="100%" align="center" justify="center" my="14" color="font" gap="4">
      <InputGroup w="300px">
        <InputRightElement pointerEvents="none" mr="1">
          <FaSearch color="#f25a25" size={24} />
        </InputRightElement>
        <Input
          color="font"
          placeholder="Search"
          borderColor="secondary"
          _placeholder={{ color: "secondary" }}
          _hover={{ borderColor: "none" }}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </InputGroup>
      <Checkbox
        colorScheme="orange"
        checked={show85PercentOff}
        onChange={handleToggle85PercentOff}
      >
        +85% off
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        isChecked={sortOrder === "ascendant"}
        onChange={handleSortByPriceAsc}
      >
        Cheaper
      </Checkbox>
      <Checkbox
        colorScheme="orange"
        isChecked={sortOrder === "descendant"}
        onChange={handleSortByPriceDesc}
      >
        Expensive
      </Checkbox>
    </Flex>
  );
};

export default SearchBar;
