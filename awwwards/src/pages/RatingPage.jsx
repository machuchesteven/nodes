import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RatingStars = ({ ...props }) => {
  return (
    <Box {...props} w={100} mx={"auto"}>
      <Rating spaceInside={1} spaceBetween={2} value={2.4} />
    </Box>
  );
};

const RegisterPage = () => {
  return (
    <Box>
      <Text>Rating page</Text>
      <Text> This uses npm i @smastrom/react-rating </Text>
      <RatingStars />
    </Box>
  );
};

export default RegisterPage;
