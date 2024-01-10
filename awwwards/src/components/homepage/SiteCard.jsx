import React from "react";
import { Flex, Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SiteCard = ({ head, description, btnText, link, ...props }) => {
  return (
    <Flex
      flexDir={"row"}
      align={"center"}
      justify={"space-between"}
      py={2}
      px={[2, null, 5]}
      borderRadius={"lg"}
      borderWidth={1}
      my={2}
      boxShadow={"sm"}
      {...props}
    >
      <Box as={Stack} direction={"column"} gap={2} w={["70%", null, "60%"]}>
        <Heading as={"h3"} size={"md"}>
          {head}
        </Heading>
        <hr />
        <Text>{description}</Text>
      </Box>
      <Button as={Link} to={link}>
        {btnText ? btnText : "Browse Page"}
      </Button>
    </Flex>
  );
};

export default SiteCard;
