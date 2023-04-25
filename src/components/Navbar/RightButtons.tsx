import {
  Avatar,
  Flex,
  Grid,
  IconButton,
  WrapItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MessageSquare, Bell } from "react-feather";
import ColorModeSwitcher from "./ColorModeSwitcher";
type RightButtonsProps = {};

const RightButtons: React.FC<RightButtonsProps> = () => {
  return (
    <Flex>
      <ColorModeSwitcher />
      <IconButton
        border={"none"}
        aria-label="color-mode"
        variant={"outline"}
        icon={<MessageSquare size={"20px"} />}
        mr={"10px"}
        bg={useColorModeValue("white", "brand.500")}
      />
      <IconButton
        border={"none"}
        aria-label="color-mode"
        variant={"outline"}
        icon={<Bell size={"20px"} />}
        mr={"10px"}
        bg={useColorModeValue("white", "brand.500")}
      />
      <IconButton
        border={"none"}
        aria-label="color-mode"
        variant={"outline"}
        icon={
          <Avatar
            borderRadius={"10px"}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        }
      />
    </Flex>
  );
};
export default RightButtons;
