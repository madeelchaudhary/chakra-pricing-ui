"use client";

import { Box, Container, Stack } from "@chakra-ui/react";
import Feature from "./Feature";

const FEATURESLIST = [
  "30 days money back Guarantee",
  "No setup fees 100% hassle-free",
  "No monthly subscription Pay once and for all",
];

const Features = () => {
  return (
    <Box pb={{ base: 12, md: 9 }} px={5} mt={[9, null, 14]}>
      <Container maxW={"940px"}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={["6", null, "12"]}
          justify={{ md: "space-between" }}
        >
          {FEATURESLIST.map((feature, index) => (
            <Feature
              imgSrc={`/feature_${index + 1}.svg`}
              text={feature}
              key={index}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
