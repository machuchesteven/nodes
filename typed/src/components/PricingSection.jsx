import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import PricingCard from "./PricingCard";
import { data_source } from "../data/data_source";

const PricingSection = () => {
  return (
    <Box w={["95%", null, "75%", "60%"]} py={[2, null, 5]} mx="auto">
      <SimpleGrid columns={[1, null, 3]} columnGap={2} rowGap={2}>
        {data_source.pricing.map((item, index) => (
          <PricingCard
            description={item.description}
            key={index}
            title={item.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingSection;
