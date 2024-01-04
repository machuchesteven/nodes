import React from "react";
import useTypingGame, { CharStateType } from "react-typing-game-hook";

const TypingGame = ({ text, limit = 0 }) => {
  const {
    states: { chars, charsState, endTime, startTime },
    actions: { insertTyping, resetTyping, deleteTyping, endTyping },
  } = useTypingGame(text);
  return (
    <>
      <p
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
            <span key={char + index} style={{ color }}>
              {char}
            </span>
          );
        })}
      </p>
      <button onClick={() => endTyping()}>End Typing</button>
      <h3>
        Start Time: {startTime}
        <br />
        End Time:{endTime}
      </h3>
    </>
  );
};

export default TypingGame;
