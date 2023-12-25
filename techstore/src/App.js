import React, { useRef, useEffect, useState } from "react";
import {
  Heading,
  Box,
  Text,
  Stack,
  Input,
  FormControl,
  Button,
  Center,
} from "@chakra-ui/react";
import ProductCard from "./components/ProductCard";
import "./App.css";
function App() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyDiv = useRef(null);
  const handleScroll = () => {
    const divOffset = stickyDiv.current.getBoundingClientRect().top;
    setIsSticky(divOffset <= 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Box>
        <Text textAlign={"right"}>
          StoreName | Search Icon | CartItems | Cart Price | Buy button
        </Text>
      </Box>
      <Box>
        <Heading textAlign={"center"} my={2}>
          Heading for store
        </Heading>
        <Text textAlign={"center"} my={1}>
          A minor value our store offers
        </Text>
        <FormControl maxW={"40%"} mx={"auto"} mb={2}>
          <Input
            type="text"
            textAlign={"center"}
            placeholder="search for a product"
          />
        </FormControl>
        <Center>
          <Button mx={"auto"} color={"blue"}>
            Search for product
          </Button>
        </Center>
        <Heading textAlign={"center"}>Under Offer!</Heading>
        <Stack
          direction={"row"}
          overflow={"auto"}
          id={"offer-products-scrollx"}
        >
          {/* Some horizontally scrolling products on offer */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Stack>
      </Box>
      <Box
        ref={stickyDiv}
        position={isSticky ? "fixed" : "static"}
        top={isSticky ? "0" : "auto"}
        zIndex={10}
        boxShadow={isSticky ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"}
        width="100%"
        background="white"
        mx={"auto"}
      >
        {/* This is the div that have to stick to the top */}
        <Stack direction={"row"} w={"50%"} mx={"auto"} my={2}>
          <Box w={"30%"} my={"auto"}>
            <Text>
              Items:{" "}
              <Text as={"span"} color={"blue"}>
                {" "}
                12
              </Text>
            </Text>
          </Box>
          <Text w={"30%"} my={"auto"}>
            Total: 34, 000/-
          </Text>
          <Box w={"20"}>
            <Button>Pay Now</Button>
          </Box>
        </Stack>
      </Box>
      <Box w={"80%"} mx={"auto"}>
        <Heading textAlign={"center"} my={2}>
          Products for You!
        </Heading>
        <hr />
        <Box h={"100vh"} bg={"teal.200"} my={10}></Box>
        <Box h={"100vh"} bg={"teal.100"} my={10}></Box>
        <Box h={"100vh"} bg={"teal.300"} my={10}></Box>
      </Box>
      <Box w={"80%"} mx={"auto"}>
        <hr />
        <Text my={2} textAlign={"center"}>
          All Rights Reserved!
        </Text>
      </Box>
    </>
  );
}

export default App;
