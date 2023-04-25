import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
type NavlinkProps = {
  name: string;
  icon?: any;
  to: string;
};

const Navlink: React.FC<NavlinkProps> = ({ name, icon, to }) => {
  const color = useColorModeValue("gray.500", "gray.200");
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <Link href={to}>
      <Flex color={isActive ? "brand.200" : color} align={"center"} my={"5px"}>
        <Flex
          w={"5px"}
          bg={isActive ? "brand.200" : "transparent"}
          h={"45px"}
          mr={"20px"}
          borderRadius={" 0px 5px 5px 0px"}
        />
        <Flex py={"10px"}>
          {icon && <Icon boxSize={"20px"} as={icon} mr={"20px"} />}
          <Text fontSize={"15px"}>{name}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};
export default Navlink;
