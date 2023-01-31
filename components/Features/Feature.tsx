"use client";

import { Box, HStack, Image, Text } from "@chakra-ui/react";

const Feature = ({ text, imgSrc }: { text: string; imgSrc: string }) => {
  return (
    <Box as="article">
      <HStack spacing={[8, null, 6]}>
        <Box>
          <Image
            src={imgSrc}
            alt=""
            w={[8, null, 10]}
            h={[8, null, 10]}
            maxW="none"
          ></Image>
        </Box>
        <Text color={"gray.900"} fontWeight="700" fontSize={"lg"}>
          {text}
        </Text>
      </HStack>
    </Box>
  );
};

export default Feature;
