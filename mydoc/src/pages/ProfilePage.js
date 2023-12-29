import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";
import Profile from "../components/Profile";
import Login from "../components/Login";
import ChangeColor from "../components/ChangeColor";
import { useSelector, useDispatch } from "react-redux";
import ToppingItem from "../components/ToppingItem";
import { useState } from "react";
import { addTopping } from "../utils/toppings";

function ProfilePage() {
  const themeColor = useSelector((state) => state.theme.value);
  const toppings = useSelector((state) => state.toppings.value);
  const [currentTopping, setCurrentTopping] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <Box color={themeColor}>
        <Heading>Profile Page</Heading>
        <Login />
        <Profile />
        <ChangeColor />
        {toppings.map((topping, index) => (
          <Box key={index}>
            <ToppingItem name={topping} />
          </Box>
        ))}
        <Input
          value={currentTopping}
          onChange={(e) => setCurrentTopping(e.target.value)}
        />
        <Button
          onClick={() => {
            dispatch(addTopping(currentTopping));
            setCurrentTopping("");
          }}
        >
          Add Topping
        </Button>
      </Box>
    </>
  );
}

export default ProfilePage;
