import React from "react";
import { Box, Card, Text, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navlink from "./Navlink";
import { LogIn, LogOut } from "react-feather";
type SidebarProps = {
  display?: any;
  title: string;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onClose, title, display }) => {
  const router = useRouter();
  return (
    <Card
      //   borderRightColor={{ base: "transparent", md: "gray.400" }}
      h={"calc(100vh - 40px)"}
      //   border={"1px solid"}
      w={{ base: "full", md: "240px" }}
      pos={"fixed"}
      display={display}
    >
      <Flex justifyContent={"center"} align={"center"} h={"80px"}>
        <Text color={"brand.200"} fontWeight={"bold"} fontSize={"30px"}>
          Planti
        </Text>
      </Flex>
      <Stack>
        <Navlink icon={LogIn} name={"Login"} to={"/login"} />
        <Navlink icon={LogOut} name={"Register"} to={"/register"} />
      </Stack>
    </Card>
  );
};
export default Sidebar;
