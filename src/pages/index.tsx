import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stack h={"200px"} gap={"30px"} direction={{ base: "column", md: "row" }}>
        <Flex
          flexDirection={"column"}
          p={"30px"}
          borderRadius={"xl"}
          bg={"black"}
          flexGrow={1}
          shadow={"xl"}
        >
          <Text
            mb={"10px"}
            color={"brand.200"}
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            Create and sell extraordinary products
          </Text>
          <Text mb={"20px"} color={"gray.400"} fontSize={"15px"}>
            The world first and largest handmade products marketplace
          </Text>
          <Flex>
            <Button bg={"white"} mr={"20px"} color={"brand.200"}>
              Explore More
            </Button>
            <Button bg="transparent" color={"white"} border={"1px solid white"}>
              Top Sellers
            </Button>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          p={"30px"}
          borderRadius={"xl"}
          bg={"brand.100"}
          w={"400px"}
        >
          <Text
            mb={"10px"}
            color={"brand.500"}
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            {" "}
            My Stats
          </Text>
          <StatGroup flexGrow={1}>
            <Stat>
              <StatLabel>Today</StatLabel>
              <StatNumber fontSize={"15px"}>4 orders</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>This month</StatLabel>
              <StatNumber fontSize={"15px"}>173 orders</StatNumber>
            </Stat>
          </StatGroup>
          <Button
            variant={"link"}
            fontSize={"15px"}
            color={"brand.500"}
            w={"150px"}
            rightIcon={<ArrowForwardIcon />}
          >
            Go to my orders
          </Button>
        </Flex>
      </Stack>
    </>
  );
}
