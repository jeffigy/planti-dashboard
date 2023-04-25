import React, { useEffect } from "react";
import {
  Flex,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Get the current breakpoint value
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Close the Drawer if the screen size is above md
  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);

  return (
    <Flex flexDirection={"column"} minH={"100vh"} p={"20px"}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.100">
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Navbar btnRef={btnRef} onClick={onOpen} />
      <Flex flex={1} flexDirection={"column"} ml={{ base: 0, md: "260px" }}>
        {children}
      </Flex>
    </Flex>
  );
};
export default Layout;
