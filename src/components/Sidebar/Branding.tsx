import { CloseButton, Flex, Text } from "@chakra-ui/react";
import React from "react";

type BrandingProps = { onClose: () => void };

const Branding: React.FC<BrandingProps> = ({ onClose }) => {
  return (
    <Flex
      px={"20px"}
      mb={"50px"}
      justifyContent={{ base: "space-between", md: "center" }}
      align={"center"}
      h={"80px"}
    >
      <Text color={"brand.200"} fontWeight={"bold"} fontSize={"30px"}>
        Planti.
      </Text>
      <CloseButton
        display={{ base: "flex", md: "none" }}
        border={"1px solid"}
        onClick={onClose}
      />
    </Flex>
  );
};
export default Branding;
