import React from "react";
import { Heading, Box, Text, SimpleGrid, Select } from "@chakra-ui/react";

function Ecommerce() {
  return (
    <>
      <Heading>
        Selling Navbar with cart and Icons Profile, Notifications
      </Heading>
      <Box>
        <Heading>Up to 50% off On Christmas Sells</Heading>
      </Box>
      <Heading>Select Catergory</Heading>
      <Select>
        <option value="1" selected>
          Gifts
        </option>
        <option value="2">School</option>
        <option value="3">Home Decor</option>
        <option value="4">Office Material</option>
      </Select>
      {/* Products list below in 3 columns */}
      <SimpleGrid columns={3}></SimpleGrid>
    </>
  );
}

export default Ecommerce;
