import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Avatar,
  Stack,
} from "@chakra-ui/react";

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box>
      <Heading textAlign={"center"}>Profile Pages Demos</Heading>
      <Text textAlign={"center"} my={5}>
        Tabs Based Profile Page:
      </Text>
      <Box bg={"blue.50"}>
        <Box maxW={["100%", null, "80%", "60%"]} mx={"auto"}>
          <Flex
            h={300}
            flexDir={"row"}
            align={"center"}
            justify={"space-around"}
          >
            <Box as={Stack} direction={"column"}>
              <Text textAlign={"center"}>Project</Text>
              <Heading textAlign={"center"}>47+</Heading>
            </Box>
            <Box>
              <Avatar size={"xl"} />
            </Box>
            <Box as={Stack} direction={"column"}>
              <Text textAlign={"center"}>Contributions</Text>
              <Heading textAlign={"center"}>554+</Heading>
            </Box>
          </Flex>
        </Box>
        <Box w={["100%", null, "75%", "60%"]} mx={"auto"}>
          <Tabs
            variant={"unstyled"}
            isFitted
            onChange={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Education</Tab>
              <Tab>Awards</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <p>one!</p>
                <Text>{tabIndex}</Text>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
                <Text>{tabIndex}</Text>
                <Text>
                  Create React Charts using a React Chart component for
                  ApexCharts. Build beautiful and interactive visualizations in
                  your react applications.
                </Text>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
                <Text>{tabIndex}</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Box h={100}>
        <Text textAlign={"center"}>Typed Profile Page</Text>
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
};

export default ProfilePage;
