import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type WelcomeMessageProps = {};

const WelcomeMessage: React.FC<WelcomeMessageProps> = () => {
  return (
    <Flex flexDirection={"column"}>
      <Text fontSize={"25px"} fontWeight={"bold"}>
        Welcome to Planti
      </Text>
      <Text color={"gray.400"} fontSize={"15px"}>
        Hello user, welcome back
      </Text>
    </Flex>
  );
};
export default WelcomeMessage;
