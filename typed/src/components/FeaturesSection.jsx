import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import { data_source } from "../data/data_source";
const FeaturesSection = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 3 }}
        maxW={["100%", null, "80%", "70%", "60%"]}
        mx={"auto"}
        gap={2}
      >
        {data_source.features.map((feature, index) => {
          return (
            <FeatureCard
              key={index}
              header={feature.title}
              description={feature.description}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default FeaturesSection;
