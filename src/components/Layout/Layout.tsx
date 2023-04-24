import React from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"}>
      <Sidebar
        title={""}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Navbar />
      <Flex
        flex={1}
        flexDirection={"column"}
        ml={{ base: 0, md: 60 }}
        p={"20px"}
      >
        {children}
      </Flex>
    </Flex>
  );
};
export default Layout;
