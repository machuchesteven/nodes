import React from "react";
import { Box, Heading, Stack, Divider } from "@chakra-ui/react";
import ChallengeCard from "../components/ChallengeCard";
import { challenges } from "../data/data_source";
const ChallengesPage = () => {
  return (
    <Box width={["100%", null, "70%"]} mx={"auto"} py={3}>
      <Stack direction={"row"}>
        <Box width={["100%", null, "70%"]}>
          <Heading>Challenges</Heading>
          <Divider />
          {challenges.map((challenge, index) => {
            return (
              <ChallengeCard
                key={index}
                title={challenge.title}
                description={challenge.description}
                completion={challenge.completion}
                rated={challenge.rated}
              />
            );
          })}
        </Box>
        <Box width={["100%", null, "30%"]}>
          <Heading size={"md"}>Challenges RightBar</Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChallengesPage;
