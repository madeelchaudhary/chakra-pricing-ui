"use client";

import { Box, Button } from "@chakra-ui/react";

const Btn = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Button
        mt={"6"}
        bg={"purple.500"}
        color="gray.50"
        fontWeight={"700"}
        minW="282"
        h={"51"}
        _hover={{ color: "purple.500", bg: "gray.50" }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default Btn;
