import React, { useState } from "react";
import { tests } from "../data/tests";
import TypingGame from "../components/TypingGame";

const TypingPage = () => {
  const [test, setTest] = useState(tests[1]);
  const hasTest = test.value !== "";
  const { text = "", limit = 0 } = test;
  return <>{hasTest && <TypingGame text={text} limit={limit} />}</>;
};

export default TypingPage;
