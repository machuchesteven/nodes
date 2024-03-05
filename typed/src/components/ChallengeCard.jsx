import React from "react";
import {
  Heading,
  Box,
  Text,
  Button,
  Stack,
  Tag,
  TagLeftIcon,
} from "@chakra-ui/react";
import { FaLaughSquint } from "react-icons/fa";
import { IoSkullOutline } from "react-icons/io5";
import { MdOutlineChildCare } from "react-icons/md";

const matchTagColor = (rated) => {
  if (rated === "easy") {
    return "green";
  } else if (rated === "medium") {
    return "orange";
  }
  return "red";
};

/**
 * Returns an Icon based on the Rating standard used
 * These icons are predefined by the UI / UX team for the lookup
 * @rated {string}
 */
const matchTagIcon = (rated) => {
  if (rated === "easy") {
    return FaLaughSquint;
  } else if (rated === "medium") {
    return MdOutlineChildCare;
  }
  return IoSkullOutline;
};

const ChallengeCard = ({ title, description, completion, rated }) => {
  return (
    <Box
      mt={2}
      w={"100%"}
      shadow={"sm"}
      borderRadius={"md"}
      p={[2, null, 4]}
      bg={"whitesmoke"}
    >
      <Stack direction={"row"} justify={"space-between"}>
        <Box>
          <Heading size={"md"} mt={2}>
            {title}
          </Heading>
          <Text my={1}>{description}</Text>
        </Box>
        <Box>
          <Heading size={"lg"} mt={2} textAlign={"center"}>
            {completion}+
          </Heading>
          <Text my={1}>Completed</Text>
          <Tag size={"md"} mt={2} color={matchTagColor(rated)}>
            <TagLeftIcon as={matchTagIcon(rated)} />
            {rated}
          </Tag>
        </Box>
      </Stack>
      <Button mb={2} mr={2}>
        Play A Challenge
      </Button>
      <Button mb={2} mr={2}>
        Waitlist +
      </Button>
    </Box>
  );
};

export default ChallengeCard;
