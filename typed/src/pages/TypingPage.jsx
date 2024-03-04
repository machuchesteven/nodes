import React, { useState } from "react";
import { tests } from "../data/tests";
import TypingGame from "../components/TypingGame";
import { Box, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
const TypingPage = () => {
  const [test, setTest] = useState(tests[1]);
  const hasTest = test.value !== "";
  const { text = "", limit = 0 } = test;
  return (
    <>
      <Box>
        <Heading my={3} textAlign={"center"}>
          Welcome to TypeIQ
        </Heading>
        {hasTest && <TypingGame text={text} limit={limit} />}
        <hr />
      </Box>
    </>
  );
};

export default TypingPage;
