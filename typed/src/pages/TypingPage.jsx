import React, { useState } from "react";
import { tests } from "../data/tests";
import TypingGame from "../components/TypingGame";
import { Box, Heading } from "@chakra-ui/react";

const TypingPage = () => {
  const [test, setTest] = useState(tests[1]);
  const hasTest = test.value !== "";
  const { text = "", limit = 0 } = test;
  return (
    <>
      <Box>
        {hasTest && <TypingGame text={text} limit={limit} />}
        <Heading textAlign={"center"} mt={5} mb={2}>
          Other Features
        </Heading>
        <hr />
      </Box>
    </>
  );
};

export default TypingPage;
