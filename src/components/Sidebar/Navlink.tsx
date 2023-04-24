import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Flex, Icon, Text } from "@chakra-ui/react";
type NavlinkProps = {
  name: string;
  icon?: any;
  to: string;
};

const Navlink: React.FC<NavlinkProps> = ({ name, icon, to }) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <Link href={to}>
      <Flex
        p={"10px 20px"}
        borderLeft={"5px solid"}
        borderColor={isActive ? "brand.200" : "transparent"}
        color={isActive ? "brand.200" : "black"}
        align={"center"}
        mb={"10px"}
      >
        {icon && <Icon boxSize={"25px"} as={icon} mr={"20px"} />}
        <Text fontSize={"20px"}>{name}</Text>
      </Flex>
    </Link>
  );
};
export default Navlink;
