import React from "react";
import { Heading, Text, Flex, Divider } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Divider my={2} />
      <Flex w={"70%"} mx={"auto"} my={3} justify={"space-between"}>
        <Flex flexDir={"column"}>
          <Heading mb={2} size={"md"}>
            About
          </Heading>
          <Text>How it works</Text>
          <Text>Testimonials</Text>
          <Text>Careers</Text>
          <Text>Investors</Text>
          <Text>Terms of Service</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading mb={2} size={"md"}>
            Contact
          </Heading>
          <Text>Contact Us</Text>
          <Text>Support</Text>
          <Text>Destinations</Text>
          <Text>Sponsorships</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading mb={2} size={"md"}>
            Social Media
          </Heading>
          <Text>Instagram</Text>
          <Text>Facebook</Text>
          <Text>Youtube</Text>
          <Text>Twitter</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text mx={"auto"}>© 2023 Typed. All rights reserved</Text>
      </Flex>
    </>
  );
};

export default Footer;
