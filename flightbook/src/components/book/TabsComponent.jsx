import React from "react";
import { Tabs, TabList, TabPanel, TabPanels, Tab, Button } from "@chakra-ui/react";

const TabsComponent = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Button mx={4}>Two</Button>
        <Button>Two</Button>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
