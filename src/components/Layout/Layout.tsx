import React from "react";
import { Flex, Card, Grid, SimpleGrid, GridItem } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"} p={"20px"}>
      <Sidebar
        title={""}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <Navbar />
      <Card
        // border={"1px solid red"}
        flex={1}
        flexDirection={"column"}
        ml={{ base: 0, md: "260px" }}
        p={"20px"}
      >
        {children}
      </Card>
    </Flex>
  );
};
export default Layout;
