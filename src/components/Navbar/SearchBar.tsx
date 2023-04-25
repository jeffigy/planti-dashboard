import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Sliders, Search } from "react-feather";
type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <Flex
      flexGrow={1}
      align={"center"}
      display={{ base: "none", lg: "flex" }}
      maxW={{ md: "200px", lg: "400px" }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents={"none"} children={<Search />} />
        <Input
          bg={useColorModeValue("white", "#2d3748")}
          focusBorderColor={useColorModeValue("gray.700", "white")}
          border={"none"}
        />
        <InputRightElement pointerEvents={"none"} children={<Sliders />} />
      </InputGroup>
    </Flex>
  );
};
export default SearchBar;
