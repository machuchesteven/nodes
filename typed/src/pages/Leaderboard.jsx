import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
const Leaderboard = () => {
  return (
    <Box>
      <Heading>See Who is On Your Top</Heading>
      <SimpleGrid columns={3} spacing={10} mx={"auto"}>
        <Flex flexDir={"column"}>
          <Heading size={"md"}>Top 10</Heading>
          <Text>1. John Doe</Text>
          <Text>2. Jane Doe</Text>
          <Text>3. John Doe</Text>
          <Text>4. Jane Doe</Text>
          <Text>5. John Doe</Text>
          <Text>6. Jane Doe</Text>
          <Text>7. John Doe</Text>
          <Text>8. Jane Doe</Text>
          <Text>9. John Doe</Text>
          <Text>10. Jane Doe</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading size={"md"}>Top 20</Heading>
          <Text>11. John Doe</Text>
          <Text>12. Jane Doe</Text>
          <Text>13. John Doe</Text>
          <Text>14. Jane Doe</Text>
          <Text>15. John Doe</Text>
          <Text>16. Jane Doe</Text>
          <Text>17. John Doe</Text>
          <Text>18. Jane Doe</Text>
          <Text>19. John Doe</Text>
          <Text>20. Jane Doe</Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading size={"md"}>Top 30</Heading>
          <Text>21. John Doe</Text>
          <Text>22. Jane Doe</Text>
          <Text>23. John Doe</Text>
          <Text>24. Jane Doe</Text>
          <Text>25. John Doe</Text>
          <Text>26. Jane Doe</Text>
          <Text>27. John Doe</Text>
          <Text>28. Jane Doe</Text>
          <Text>29. John Doe</Text>
          <Text>30. Jane Doe</Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Leaderboard;
