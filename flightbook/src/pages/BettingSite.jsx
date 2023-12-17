import React from "react";
import { Heading, SimpleGrid, Text, Box, Stack } from "@chakra-ui/react";

function BettingSite() {
  return (
    <>
      <Heading>Navbar with icons including sports, wallet, and bets</Heading>
      <Heading>Jackpot up to Tzs 500,000,000/-</Heading>
      {/* Box below for a match has the following, Odds, Time, Other options button */}
      <Box></Box>
      <SimpleGrid columns={2}>
        <Stack></Stack>
      </SimpleGrid>
    </>
  );
}

export default BettingSite;
