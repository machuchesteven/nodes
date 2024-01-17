import React from "react";
import { Box, Heading, Text, useColorMode, Button } from "@chakra-ui/react";
import SiteCard from "../components/homepage/SiteCard";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Box
        w={["100%", null, "80%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        bg={"#fafafa"}
        borderRadius={"lg"}
      >
        <Heading textAlign={"center"}>Hello, These are the Demo Sites</Heading>
        <Text my={1} textAlign={"center"}>
          Please take a look
        </Text>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Box>
      <Box
        w={["100%", null, "80%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <SiteCard
          head={"Animations Page"}
          description={"Frame motion sample animations"}
          btnText={"ViewPage"}
          link={"/animations"}
        />
        <SiteCard
          head={"Betting Page"}
          description={"Sample betting page for components"}
          btnText={"View Page"}
          link={"/bet"}
        />
        <SiteCard
          head={"Blog Page"}
          description={"Blog Pages UIs for blog like projects"}
          btnText={"View Page"}
          link={"/blog"}
        />
        <SiteCard
          head={"Booking Page"}
          description={
            "Events Bookings Page UIs for booking like projects and events"
          }
          btnText={"View Page"}
          link={"/book"}
        />
        <SiteCard
          head={"Chatbot Page"}
          description={
            "A sample demo page for chat and interactive chatbot like projects"
          }
          btnText={"View Page"}
          link={"/chatbot"}
        />
        <SiteCard
          head={"Dashoards Page"}
          description={
            "For management purposes and administration tasks including analytics and data visualizations"
          }
          btnText={"View Page"}
          link={"/dashboards"}
        />{" "}
        <SiteCard
          head={"ECommerce UIs Page"}
          description={
            "For ECommerce projects and online shopping and products catalog systems"
          }
          btnText={"View Page"}
          link={"/ecommerce"}
        />{" "}
        <SiteCard
          head={"E-Learning UIs Page"}
          description={
            "For Leanring systems and solutions and academic projects"
          }
          btnText={"View Page"}
          link={"/elearn"}
        />
        <SiteCard
          head={"Heros Page"}
          description={
            "Composed of hero sections and landing pages hero components from various designs cloned"
          }
          btnText={"View Page"}
          link={"/heros"}
        />
        <SiteCard
          head={"Hospital Page"}
          description={
            "For Hospital and medical projects and systems and solutions"
          }
          btnText={"View Page"}
          link={"/hospital"}
        />
        <SiteCard
          head={"Hotels UIs Page"}
          description={
            "Comprise of Hotel UI and Menu like UIs for Hotel and restaurants"
          }
          btnText={"View Page"}
          link={"/hotel"}
        />
        <SiteCard
          head={"Logins UIs Page"}
          description={"Login Pages and Designs Components for Login Pages"}
          btnText={"View Page"}
          link={"/logins"}
        />
        <SiteCard
          head={"Modals Designs"}
          description={"Composed of Modals and Popovers for various projects"}
          btnText={"View Page"}
          link={"/modals"}
        />
        <SiteCard
          head={"Newspage Ui Designs"}
          description={"For news pages agencies and services"}
          btnText={"View Page"}
          link={"/news"}
        />
        <SiteCard
          head={"Portfolio Uis"}
          description={
            "For User Personalized Portfolios and Landing page features"
          }
          btnText={"View Page"}
          link={"/portfolio"}
        />
        <SiteCard
          head={"Product UIs"}
          description={
            "For User Personalized Portfolios and Landing page features"
          }
          btnText={"View Page"}
          link={"/product"}
        />
        <SiteCard
          head={"Profiles UIs for user pages"}
          description={
            "For User Personalized Portfolios and Landing page features"
          }
          btnText={"View Page"}
          link={"/profile"}
        />
        <SiteCard
          head={"Registration UIs"}
          description={
            "The first place for new users to witness before everything else"
          }
          btnText={"View Page"}
          link={"/register"}
        />
        <SiteCard
          head={"Schools UI"}
          description={"School and academic projects and systems and solutions"}
          btnText={"View Page"}
          link={"/school"}
        />
        <SiteCard
          head={"Web3 UIs"}
          description={
            "Components rich web3 projects for agencies and movements supporting web3 and decentralization"
          }
          btnText={"View Page"}
          link={"/web3"}
        />
      </Box>
      <Box
        w={["100%", null, "80%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Components</Heading>
      </Box>
      <Box
        w={["100%", null, "80%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Animations and UI Effects</Heading>
      </Box>
      <Box
        w={["100%", null, "90%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Navbars</Heading>
      </Box>
      <Box
        w={["100%", null, "90%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Footers</Heading>
      </Box>
      <Box
        w={["100%", null, "90%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Newsletters</Heading>
      </Box>
      <Box
        w={["100%", null, "90%"]}
        my={3}
        mx={"auto"}
        p={[2, null, 5]}
        borderRadius={"lg"}
      >
        <Heading>Contacts</Heading>
      </Box>
    </Box>
  );
};

export default Homepage;
