"use client";

import { List } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import BenefitItem from "./BenefitItem";

const BenefitsList = ({ items }: { items: string[] }) => {
  return (
    <List spacing={"4"} mt={{ base: 4, md: 5, lg: 6 }} color="gray.700">
      {items.map((item, index) => (
        <BenefitItem text={item} key={index} icon={CheckCircleIcon} />
      ))}
    </List>
  );
};

export default BenefitsList;
