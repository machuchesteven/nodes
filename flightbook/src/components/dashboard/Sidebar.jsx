import React, { useState } from "react";
import {
  Button,
  Heading,
  Flex,
  Divider,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import NavItem from "./NavItem";
const Sidebar = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <>
      <Flex
        borderRadius={"xl"}
        position={"sticky"}
        left={2}
        h="95vh"
        marginTop={"2.5vh"}
        boxShadow={"0 5px 12px 0 rgba(0,0,0,0.1) "}
        w={navSize === "small" ? 75 : navSize === "large" ? 200 : 200}
        flexDirection={"column"}
        justifyContent={"space-between"}
        bg={"blue.100"}
      >
        <Flex flexDir={"column"} padding={5} alignItems={"flex-start"} as="nav">
          <IconButton
            background={"#000000"}
            mt={5}
            onClick={() => {
              if (navSize === "small") {
                changeNavSize("large");
              } else {
                changeNavSize("small");
              }
            }}
          />
          {/* Nav Items Here */}
          <NavItem
            title={"Dashboard"}
            icon={FiMenu}
            link={"/dashboard"}
            navSize={navSize}
            active={true}
            description={"This is a description"}
          />
          <NavItem
            title={"Dashboard"}
            icon={FiMenu}
            link={"/dashboard"}
            navSize={navSize}
            description={"This is a description"}
          />
          <NavItem
            title={"Dashboard"}
            icon={FiMenu}
            link={"/dashboard"}
            navSize={navSize}
            description={"This is a description"}
          />
          <NavItem
            title={"Dashboard"}
            icon={FiMenu}
            link={"/dashboard"}
            navSize={navSize}
            description={"This is a description"}
          />
        </Flex>
        <Flex
          p={"5%"}
          flexDir={"column"}
          alignItems={navSize === "small" ? "center" : "flex-start"}
          w={"100%"}
        >
          <Divider />
          <Flex mt={4} align={"center"} mb={navSize === "small" ? 2 : null}>
            <Avatar size={"sm"} />
            <Flex
              flexDir={"column"}
              display={navSize === "small" ? "none" : "block"}
            >
              <Heading as="h3" size={"sm"}>
                Admin: Vamos
              </Heading>
              <Button
                m={2}
                size={"sm"}
                borderColor={"blue.100"}
                borderWidth={1}
              >
                Logout
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
