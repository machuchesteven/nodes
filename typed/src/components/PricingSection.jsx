import React from "react";
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import PricingCard from "./PricingCard";
import { data_source } from "../data/data_source";

const PricingSection = () => {
  return (
    <Box
      w={["95%", null, "75%", "60%"]}
      py={[2, null, 5]}
      mx="auto"
      my={[2, null, 5]}
    >
      <Heading textAlign={"center"} mb={[2, null, 5]}>
        Our Pricing Model
      </Heading>
      <Text textAlign={"center"} my={[2, null, 3]}>
        We are having both the free training model and the paid model with both
        having several features
      </Text>
      <SimpleGrid
        columns={[1, null, 3]}
        columnGap={2}
        justify={"space-around"}
        rowGap={2}
      >
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
