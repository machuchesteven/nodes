import React, { useEffect } from "react";
import { Heading, Box, Text, Stack, Button } from "@chakra-ui/react";
import "../App.css";
import { useSticky } from "../utils/hooks";
import { useScroll, motion } from "framer-motion";
function Homepage() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  console.log(scrollYProgress);
  const { sticky, stickyRef } = useSticky(true);
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }}></motion.div>
      <Box>
        <Text textAlign={"right"}>
          StoreName | Search Icon | CartItems | Cart Price | Buy button
        </Text>
      </Box>
      <Box
        h={"100vh"}
        bg={"teal.200"}
        my={10}
        clipPath={
          "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)"
        }
      ></Box>
      <Box
        ref={stickyRef}
        position={sticky ? "fixed" : null}
        top={sticky ? 0 : "auto"}
        w={"100%"}
        bg={"white"}
        boxShadow={sticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"}
        zIndex={sticky ? null : 10}
      >
        {/* This is the div that have to stick to the top */}
        <Stack direction={"row"} w={"50%"} mx={"auto"} my={2}>
          <Box w={"30%"} my={"auto"}>
            <Text>
              Items:{" "}
              <Text as={"span"} color={"blue"}>
                {" "}
                12
              </Text>
            </Text>
          </Box>
          <Text w={"30%"} my={"auto"}>
            Total: 34, 000/-
          </Text>

          <Box w={"20%"}>
            <Button>Pay Now</Button>
          </Box>
          <Text w="20%">Scroll progress</Text>
        </Stack>
      </Box>
      <Box
        as={motion.div}
        w={"80%"}
        mx={"auto"}
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        onViewportLeave={{ x: 500 }}
        viewport={{ once: false }}
        transition={{ ease: "linear", duration: 2 }}
      >
        <Heading textAlign={"center"} my={2}>
          Products for You!
        </Heading>
        <hr />
        <Box h={"100vh"} bg={"teal.200"} my={10}></Box>
        <Box h={"100vh"} bg={"teal.100"} my={10}></Box>
        <Box h={"100vh"} bg={"teal.300"} my={10}></Box>
      </Box>
      <Box w={"80%"} mx={"auto"}>
        <hr />
        <Text my={2} textAlign={"center"}>
          All Rights Reserved!
        </Text>
      </Box>
    </>
  );
}

export default Homepage;
