import React, { useRef } from "react";
import { Box, Heading, Stack, Center } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "../components/animated/AnimatedText";
import SlideUp from "../components/animated/SlideUp";

const myText = "Hello";
const cards = [
  {
    id: 1,
    title: "Blue card",
    color: "blue.100",
    text: "This is a blue card",
  },
  {
    id: 2,
    title: "Green card",
    color: "green.100",
    text: "This is a Green card",
  },
  {
    id: 3,
    title: "Yellow card",
    color: "yellow.100",
    text: "This is a Yellow card",
  },
  {
    id: 4,
    title: "Purple card",
    color: "purple",
    text: "This is a Purple card",
  },
  {
    id: 5,
    title: "Yellow card",
    color: "yellow.100",
    text: "This is a Yellow card",
  },
  {
    id: 6,
    title: "Purple card",
    color: "purple",
    text: "This is a Purple card",
  },
  {
    id: 7,
    title: "Yellow card",
    color: "yellow.100",
    text: "This is a Yellow card",
  },
];

const animations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 4,
      delay: 5,
    },
  },
};

const childAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const docWidth = document;
  const containerHeight = cards.length * 300;
  const xRange = [0, -containerHeight];
  const x = useTransform(scrollYProgress, [0, 1], xRange);
  return (
    <Box
      ref={targetRef}
      as="section"
      display={"relative"}
      h={"300vh"}
      bg={"blue.100"}
    >
      <Box
        top={0}
        width={"max-content"}
        position={"sticky"}
        h={"100vh"}
        bg={"blue.200"}
        display={"flex"}
        alignItems={"center"}
        spacing={5}
        as={motion.div}
        style={{ x }}
        overflowX="hidden" // Enable horizontal scrolling
        sx={{
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
          },
        }}
      >
        {cards.map((card) => {
          return (
            <Box
              key={card.id}
              bg={card.color}
              height={300}
              width={400}
              borderRadius={"md"}
            >
              <Heading>{card.title}</Heading>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export const HorizontalScrollPage = () => {
  const ref = useRef(null);
  return (
    <Stack direction={"column"} spacing={3}>
      <Box h={"100vh"} w={"100hw"}>
        <Heading
          as={motion.h1}
          initial={"hidden"}
          animate={"visible"}
          textAlign={"center"}
          variants={childAnimations}
          my={5}
        >
          {myText.split("").map((char) => (
            <motion.span variants={childAnimations}>{char}</motion.span>
          ))}
        </Heading>
      </Box>
      <AnimatedText text={"Actual One!"} />
      <Box h={"100vh"} bg={"cyan"} w={"100hw"}>
        <Heading>First Division</Heading>
        <Box
          mx={"auto"}
          bg={"#0D0B0C"}
          width={400}
          height={200}
          borderRadius={"lg"}
          borderColor={"#F4F4F3"}
          borderWidth={1}
        >
          <Box
            bg={"rgba(200, 200, 200, .2)"}
            h={"100%"}
            w={"100%"}
            backdropFilter={"blur 5px "}
          >
            <Center>
              <Heading textAlign={"center"} color={"#F4F4F3AA"}>
                Funded Engineers
              </Heading>
            </Center>
          </Box>
        </Box>
      </Box>
      {/* <HorizontalScrollCarousel /> */}
      <Box
        as={motion.div}
        variants={animations}
        h={"100vh"}
        bg={"blue.50"}
        w={"100hw"}
        py={5}
      >
        <Box
          as={motion.div}
          initial={"hidden"}
          animate={"visible"}
          variants={animations}
          w={{ md: "80%" }}
          mx={"auto"}
        >
          <Heading>First Division</Heading>
        </Box>
      </Box>
      <SlideUp w={"80%"} mx={"auto"} h={"100vh"} mt={5}>
        <Heading textAlign={"center"}>Hello its me Again</Heading>
      </SlideUp>
    </Stack>
  );
};

export default HorizontalScrollPage;
