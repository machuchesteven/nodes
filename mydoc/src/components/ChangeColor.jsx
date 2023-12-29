import React, { useState } from "react";
import { Button, Input, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeColor } from "../utils/theme";
function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Input
          type="text"
          placeholder="Enter color code"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button
          onClick={() => {
            dispatch(changeColor(color));
          }}
        >
          Change Color
        </Button>
      </Box>
    </>
  );
}

export default ChangeColor;
