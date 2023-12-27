import React, { useState, useEffect, useRef } from "react";

const Nicepage = () => {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [typedText, setTypedText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    const pressedKey = e.key;
    const currentChar = text[cursorPosition];

    if (pressedKey === currentChar) {
      setTypedText((prevTypedText) => prevTypedText + currentChar);
      setCursorPosition((prevCursorPosition) => prevCursorPosition + 1);
    }
  };

  const renderText = () => {
    return text.split("").map((char, index) => {
      const textColor =
        index < typedText.length
          ? char === typedText[index]
            ? "blue"
            : "red"
          : "black";
      return (
        <span key={index} style={{ color: textColor }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <div>{renderText()}</div>
      <div>
        <textarea
          style={{ opacity: 0, height: 0, position: "absolute", top: "-100px" }}
          ref={textRef}
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Nicepage;
