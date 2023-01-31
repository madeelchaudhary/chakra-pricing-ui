"use client";

import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Btn from "../UI/Button";
import BenefitsList from "./BenefitsList";

const BENEFITS = [
  "International calling and messaging API",
  "Additional phone numbers",
  "Automated messages via Zapier",
  "24/7 support and consulting",
];

const PriceCard = () => {
  return (
    <Box as="article" zIndex={"overlay"} mt={"-36"}>
      <Container maxW={"container.lg"}>
        <SimpleGrid
          columns={{ md: 10 }}
          borderRadius={"xl"}
          overflow="hidden"
          p={0}
          bg="white"
          boxShadow={"lg"}
        >
          <GridItem colSpan={{ md: 4 }}>
            <Box
              bg={"rgba(101, 44, 211, 0.1)"}
              color="gray.900"
              py={["8", "9", "12", "14"]}
              textAlign="center"
              lineHeight={"normal"}
            >
              <Heading fontSize={"2xl"} fontWeight="800" mb={"4"}>
                Premium PRO
              </Heading>
              <Text mb="3" fontWeight={"800"} fontSize={["5xl", null, "6xl"]}>
                $329
              </Text>
              <Text>billed just once</Text>
              <Btn>Get Started</Btn>
            </Box>
          </GridItem>
          <GridItem colSpan={{ md: 6 }}>
            <Box py={["8", "9", "12"]} px={["2", "4", null, "10"]}>
              <Text color={"gray.700"} fontSize="lg">
                Access these features when you get this pricing package for your
                business.
              </Text>
              <BenefitsList items={BENEFITS} />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default PriceCard;
