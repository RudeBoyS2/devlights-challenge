"use client";

import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Flex w="100%" align="center" justify="center" my="14">
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
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
