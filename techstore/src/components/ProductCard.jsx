import React from "react";
import { Box, Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";

function ProductCard() {
  return (
    <Box
      minW={"fit-content"}
      minH={200}
      p={2}
      borderWidth={1}
      borderColor={"grey"}
      borderRadius={"lg"}
    >
      <Heading>Item Heading</Heading>
      <Text my={"auto"}>Item Description</Text>
      <hr />
      <ButtonGroup>
        <Button>Add to Cart</Button>
        <Button>Buy Now</Button>
        {/* Love Icon below, adding to wishlist, for added the item should be color changed*/}
        <Button>Lvicon</Button>
      </ButtonGroup>
    </Box>
  );
}

export default ProductCard;
