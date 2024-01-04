import React, { useRef } from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <Box h={"100vh"} bg={"purple"} w={"100hw"}>
        <Heading>First Division</Heading>
      </Box>
      <Box h={"100vh"} bg={"cyan"} w={"100hw"}>
        <Heading>First Division</Heading>
      </Box>
      <HorizontalScrollCarousel />
      <Box h={"100vh"} bg={"purple"} w={"100hw"}>
        <Heading>First Division</Heading>
      </Box>
    </Stack>
  );
};

export default HorizontalScrollPage;
