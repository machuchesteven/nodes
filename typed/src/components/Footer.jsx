import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box>
      <Flex>
        <SimpleGrid columns={3} spacing={10} mx={"auto"}>
          <Flex flexDir={"column"}>
            <Heading size={"md"}>About</Heading>
            <Text>How it works</Text>
            <Text>Testimonials</Text>
            <Text>Careers</Text>
            <Text>Investors</Text>
            <Text>Terms of Service</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Heading size={"md"}>Contact</Heading>
            <Text>Contact Us</Text>
            <Text>Support</Text>
            <Text>Destinations</Text>
            <Text>Sponsorships</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Heading size={"md"}>Social Media</Heading>
            <Text>Instagram</Text>
            <Text>Facebook</Text>
            <Text>Youtube</Text>
            <Text>Twitter</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Flex>
        <Text mx={"auto"}>© 2023 Typed. All rights reserved</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
