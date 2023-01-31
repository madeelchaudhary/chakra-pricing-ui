"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box px={"5"} py="0.5" as={"header"} bg={"purple.600"} minH={"96"}>
      <VStack spacing={"4"} color={"gray.50"} mt={["14", null, "16", "88"]}>
        <Heading fontSize={["3xl", null, "4xl", "5xl"]} fontWeight={"800"}>
          Simple pricing for your business
        </Heading>
        <Text
          fontSize={["lg", null, "xl", "2xl"]}
          fontWeight={"500"}
          opacity={".84"}
          m={0}
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </VStack>
    </Box>
  );
};

export default Header;
