import React from "react";
import { Card, Stack } from "@chakra-ui/react";
import Navlink from "./Navlink";
import {
  Archive,
  Layout,
  LogIn,
  LogOut,
  Map,
  ShoppingBag,
  Trello,
} from "react-feather";
import Branding from "./Branding";
type SidebarProps = {
  display?: any;
  onClose: () => void;
};
const NavItems = [
  { name: "Dashboard", icon: Layout, to: "/" },
  { name: "My Orders", icon: ShoppingBag, to: "/orders" },
  { name: "Explore", icon: Map, to: "/explore" },
  { name: "Featured Products", icon: Archive, to: "/featured" },
];
const Sidebar: React.FC<SidebarProps> = ({ onClose, display }) => {
  return (
    <Card
      borderRadius={{ base: "none", md: "md" }}
      h={{ base: "100vh", md: "calc(100vh - 40px)" }}
      w={{ base: "full", md: "240px" }}
      pos={"fixed"}
      display={display}
    >
      <Branding onClose={onClose} />
      <Stack>
        {NavItems.map((item) => (
          <Navlink
            key={item.name}
            icon={item.icon}
            name={item.name}
            to={item.to}
          />
        ))}
      </Stack>
    </Card>
  );
};
export default Sidebar;
