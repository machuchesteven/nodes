import React, { useState } from "react";
import { Box, Heading, Text, Divider, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedText from "../components/animated/AnimatedText";
import SlideUp from "../components/animated/SlideUp";
import SlideLeft from "../components/animated/SlideLeft";
import "../components/animated/hovercards.css";
import TextThrough from "../components/animated/TextThrough";
const AnimationsPage = () => {
  return (
    <Box>
      <Box
        w={["100%", null, "80%"]}
        mx={"auto"}
        boxShadow={"sm"}
        borderRadius={"lg"}
        py={3}
        my={2}
      >
        <Heading textAlign={"center"}>Animations Page</Heading>
        <Text>
          Here Goes a list of all transformations and animated effects that are
          included within the animated components page and renders themselves
          here
        </Text>
      </Box>
      <Box
        w={["100%", null, "80%"]}
        mx={"auto"}
        boxShadow={"sm"}
        borderRadius={"lg"}
        py={3}
        my={2}
        bg={"blue.50"}
      >
        <Heading size={"md"}>Slide Text Up Animations</Heading>
        <AnimatedText text={"Animations Page"} />
      </Box>
      <Box h={"100vh"} my={5} justify={"center"} align={"center"}>
        <SlideUp>
          <Box bg={"blue.100"} borderRadius={"md"}>
            <Heading>SlideUp Animations Once in view</Heading>
          </Box>
        </SlideUp>
      </Box>
      <Box
        my={5}
        h={"100vh"}
        justify={"center"}
        align={"center"}
        overflowX={"hidden"}
      >
        <SlideLeft once={false}>
          <Box bg={"blue.200"} borderRadius={"md"}>
            <Heading>SlideUp Animations Once in view</Heading>
          </Box>
        </SlideLeft>
      </Box>
      <Box h={"100vh"} w={"100hw"} justify={"center"} align={"center"}>
        <Box
          h={300}
          w={300}
          my={"auto"}
          mx={"auto"}
          bg={"blue.200"}
          borderRadius={"md"}
        >
          <Text
            as={motion.div}
            whileHover={{
              scaleY: -1,
              transition: {
                duration: 0.3,
                delay: 0.1,
                ease: "easeIn",
              },
            }}
            my={"auto"}
          >
            HOVER
          </Text>
        </Box>
      </Box>
      <Box my={5} h={"95vh"}>
        <Box
          w={["100%", null, "80%"]}
          mx={"auto"}
          boxShadow={"sm"}
          borderRadius={"lg"}
          py={3}
          my={2}
          bg={"blue.50"}
        >
          <Heading textAlign={"center"}>
            Spread Cards for Value on Our Site
          </Heading>
          <Text textAlign={"center"} my={2}>
            These could also be used for other functionalities like Skills Set,
            Certifications and More
          </Text>
          <Divider borderColor={"black"} />
        </Box>
        <Box w={"100hw"} h={"100vh"}>
          <Flex
            justify={"center"}
            align={"center"}
            bg={"#f84040"}
            minH={"100vh"}
          >
            <Flex
              as={motion.div}
              position={"relative"}
              justify={"center"}
              align={"center"}
              className="container"
            >
              {/* the container class with a glass wapper inside */}
              <Flex
                position={"relative"}
                w={300}
                h={280}
                dataText={"facebook"}
                borderRadius={15}
                bg={"linear-gradient(#fff2, transparent)"}
                border={"1px solid rgba(177, 177, 177, 0.2)"}
                boxShadow={"lg"}
                justify={"center"}
                align={"center"}
                transition={"0.5s"}
                margin={"0 -120px"}
                overflow={"hidden"}
                transform={"rotate(35deg)"}
                cursor={"pointer"}
                className="glass"
              >
                <Heading>F</Heading>
              </Flex>
              <Flex
                position={"relative"}
                w={300}
                h={280}
                dataText={"twitter"}
                borderRadius={15}
                bg={"linear-gradient(#fff2, transparent)"}
                border={"1px solid rgba(177, 177, 177, 0.2)"}
                boxShadow={"lg"}
                justify={"center"}
                align={"center"}
                transition={"0.5s"}
                margin={"0 -120px"}
                overflow={"hidden"}
                transform={"rotate(35deg)"}
                cursor={"pointer"}
                className="glass"
              >
                <Heading>T</Heading>
              </Flex>
              <Flex
                position={"relative"}
                w={300}
                h={280}
                dataText={"linkedin"}
                borderRadius={15}
                bg={"linear-gradient(#fff2, transparent)"}
                border={"1px solid rgba(177, 177, 177, 0.2)"}
                boxShadow={"lg"}
                justify={"center"}
                align={"center"}
                transition={"0.5s"}
                margin={"0 -120px"}
                overflow={"hidden"}
                transform={"rotate(35deg)"}
                cursor={"pointer"}
                className="glass"
              >
                <Heading>L</Heading>
              </Flex>
              <Flex
                position={"relative"}
                w={300}
                h={280}
                dataText={"github"}
                borderRadius={15}
                bg={"linear-gradient(#fff2, transparent)"}
                border={"1px solid rgba(177, 177, 177, 0.2)"}
                boxShadow={"lg"}
                justify={"center"}
                align={"center"}
                transition={"0.5s"}
                margin={"0 -120px"}
                overflow={"hidden"}
                transform={"rotate(35deg)"}
                cursor={"pointer"}
                className="glass"
              >
                <Heading>G</Heading>
              </Flex>
              {/* glass class inside */}
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box h={"100vh"} bg={"blue.300"}>
        <Heading>Another Animation</Heading>
      </Box>
      <TextThrough />
    </Box>
  );
};

export default AnimationsPage;
