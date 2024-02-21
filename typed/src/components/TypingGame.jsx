import React, { useState } from "react";
import useTypingGame, {
  CharStateType,
  PhaseType,
} from "react-typing-game-hook";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
const TypingGame = ({ text, limit = 0 }) => {
  const {
    states: { chars, charsState, endTime, startTime, phase },
    actions: { insertTyping, resetTyping, deleteTyping, endTyping },
  } = useTypingGame(text);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Box w={["96%", "88%", "70%", "65%"]} mx={"auto"}>
        <Heading my={3} textAlign={"center"}>
          Welcome to TypeIQ
        </Heading>
        {!isFocused && (
          <Text my={3} textAlign={"center"}>
            Click the box below and start typing!
          </Text>
        )}
        <Box
          p={5}
          borderRadius={"lg"}
          bgColor={"gray.100"}
          mt={3}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        >
          <Text
            p={5}
            onKeyDown={(e) => {
              e.preventDefault();
              const key = e.key;
              if (key === "Escape") {
                resetTyping();
                return;
              }
              if (key === "Backspace") {
                deleteTyping(false);
                return;
              }
              if (key.length === 1) {
                insertTyping(key);
              }
            }}
            tabIndex={0}
          >
            {chars.split("").map((char, index) => {
              let state = charsState[index];
              let color =
                state === CharStateType.Incomplete
                  ? "inherit"
                  : state === CharStateType.Correct
                  ? "green"
                  : "red";
              return (
                <Text
                  style={{ fontWeight: "bold" }}
                  as={"span"}
                  key={char + index}
                  color={color}
                >
                  {char}
                </Text>
              );
            })}
          </Text>
        </Box>
        <Stack direction={"row"} px={5} mx={"auto"} w={"max-content"}>
          <Button my={2} onClick={() => endTyping()}>
            End Typing
          </Button>
          <Button my={2} onClick={() => resetTyping()}>
            Start Over
          </Button>
        </Stack>
        <Stack direction={"row"} px={5}>
          <Box w={"50%"}>
            <Text>Start Time: {startTime}</Text>
          </Box>
          <Box w={"50%"}>
            <Text>End Time:{endTime}</Text>
          </Box>
        </Stack>
        <Box>
          <Heading>
            {isFocused === true ? "Is Focused Now" : "Not Focused"}
            {phase === PhaseType.NotStarted
              ? "Not Started"
              : phase === PhaseType.Started
              ? "Started"
              : phase === PhaseType.Ended
              ? "Ended"
              : "Unknown"}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default TypingGame;
