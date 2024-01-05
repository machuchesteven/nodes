import React from "react";
import {
  Flex,
  Menu,
  Link,
  MenuButton,
  MenuList,
  Text,
  Icon,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";

const NavItem = ({
  navSize,
  title,
  icon,
  link,
  active = false,
  description,
  ...props
}) => {
  return (
    <Flex
      mt={[5, null, 30]}
      flexDir={"column"}
      w={navSize === "large" ? "100%" : "100%"}
      alignItems={navSize === "small" ? "center" : "flex-start"}
      {...props}
      backgroundColor={active && "#AEC8CA"}
      borderRadius={"md"}
      _hover={{
        textDecoration: "none",
        backgroundColor: active ? "blue.200" : "#AEC8CA",
      }}
    >
      <Menu placement="right" w>
        <Link px={3} py={2} w={"100%"}>
          <MenuButton w={"100%"}>
            <Flex align={"center"} justify={"space-around"} flexDir={"row"}>
              <Icon as={icon} />
              <Text ml={2} display={navSize === "small" ? "none" : "block"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList p={0} border={"none"} w={200} h={200} m={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavItem;
