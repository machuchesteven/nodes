import React, { useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { Heading, Text, Stack, Box, Center, Button } from "@chakra-ui/react";

const animations = {};

function Animationspage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlip, setIsFlip] = useState(false);
  const controls = useAnimationControls();
  return (
    <>
      <Box>
        <Heading>Animations page</Heading>
        <Box overflowX={"clip"}>
          <Stack direction={"row"} gap={3} overflowX={"auto"}>
            <Box minW={200} minH={200} bg={"teal.100"}></Box>
            <Box minW={200} minH={200} bg={"teal.200"}></Box>
            <Box minW={200} minH={200} bg={"teal.100"}></Box>
            <Box minW={200} minH={200} bg={"teal.300"}></Box>
            <Box minW={200} minH={200} bg={"teal.100"}></Box>
            <Box minW={200} minH={200} bg={"teal.200"}></Box>
            <Box minW={200} minH={200} bg={"teal.100"}></Box>
            <Box minW={200} minH={200} bg={"teal.300"}></Box>
            <Box minW={200} minH={200} bg={"teal.100"}></Box>
          </Stack>
        </Box>
        <Text my={10} textAlign={"center"}>
          Fist Animation
        </Text>
        <Box mx={"auto"} as={motion.div} w={"80%"} minH={"100vh"}>
          <Center my={5}>
            <Button
              colorScheme={isVisible ? "green" : "blue"}
              as={motion.button}
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "Hide" : "Show"}
            </Button>
          </Center>
          <AnimatePresence>
            {isVisible && (
              <Box
                as={motion.div}
                w={150}
                h={150}
                my={"auto"}
                mx={"auto"}
                bg={"black"}
                // some props will be added as we add the motion.div
                initial={{
                  rotate: "-180deg",
                  scale: 0,
                  y: -1000,
                }}
                animate={{
                  rotate: "0deg",
                  scale: 1,
                  y: [-100, 100, 0],
                }}
                transition={{
                  duration: "3s",
                  ease: "easeIn",
                  times: [0, 0.6, 1],
                }}
                exit={{
                  scale: "0",
                  rotate: "180deg",
                  y: 100,
                }}
              ></Box>
            )}
          </AnimatePresence>
        </Box>
        <Text my={10} textAlign={"center"}>
          FLIP
        </Text>
        <Box
          mx={"auto"}
          as={motion.div}
          w={"80%"}
          minH={"100vh"}
          bg={"teal.100"}
        >
          <Button onClick={() => setIsFlip(!isFlip)}>Flipt it</Button>
          <AnimatePresence mode="wait">
            {isFlip && (
              <Box
                as={motion.div}
                variants={{
                  initial: {
                    scaleY: 1,
                  },
                  flip: {
                    rotate: "360deg",
                  },
                  animate: {
                    scaleY: "1",
                  },
                  exit: {
                    scaleY: "0",
                  },
                }}
                initial={{
                  scaleY: 1,
                }}
                animated="animate"
                exit="exit"
                transition={{ duration: "500ms", times: [0, 0.4, 1] }}
                height={200}
                width={200}
                mx={"auto"}
                my={"auto"}
                bg={"black"}
                whileInView="flip"
              ></Box>
            )}
          </AnimatePresence>
        </Box>
        <Text my={10} textAlign={"center"}>
          Using animation controls
        </Text>
        <Box
          mx={"auto"}
          as={motion.div}
          w={"80%"}
          minH={"100vh"}
          bg={"teal.200"}
          animate={controls}
        >
          <Box
            mx={"auto"}
            as={motion.div}
            w={"80%"}
            minH={"100vh"}
            bg={"teal.200"}
            animate={controls}
          ></Box>
        </Box>
        <Text my={10} textAlign={"center"}>
          View based animation
        </Text>
        <Box
          mx={"auto"}
          as={motion.div}
          w={"80%"}
          minH={"100vh"}
          bg={"teal.100"}
        ></Box>
        <Text my={10} textAlign={"center"}>
          Animation Name
        </Text>
        <Box
          mx={"auto"}
          as={motion.div}
          w={"80%"}
          minH={"100vh"}
          bg={"teal.300"}
        ></Box>
        <Text my={10} textAlign={"center"}>
          Animation Name
        </Text>
        <Box
          mx={"auto"}
          as={motion.div}
          w={"80%"}
          minH={"100vh"}
          bg={"teal.100"}
        ></Box>
      </Box>
    </>
  );
}

export default Animationspage;
