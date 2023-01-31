"use client";

import { ListIcon, ListItem } from "@chakra-ui/react";
import { type Icon } from "@chakra-ui/icons";

const BenefitItem = ({ text, icon }: { text: string; icon: typeof Icon }) => {
  return (
    <ListItem>
      <ListIcon
        as={icon}
        color="#6134C4"
        mr={["1", null, "2", "5"]}
        boxSize={"5"}
      />
      {text}
    </ListItem>
  );
};

export default BenefitItem;
