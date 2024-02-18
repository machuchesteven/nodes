import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Divider,
  Icon,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareDribbble,
  FaHeart,
} from "react-icons/fa6";
import { BsQuote } from "react-icons/bs";
const GlassMorphicPortfolio = () => {
  return (
    <Box>
      <Heading>Portfolios</Heading>
      <Divider my={2} />
      <Box>
        <Box w={["100%", null, "80%", "60%"]} mx={"auto"}>
          {/* navbar */}
          <Flex
            flexDir={"row"}
            justify={"space-between"}
            align={"center"}
            mb={2}
            px={2}
          >
            <Heading size={"md"} color={"black"}>
              SpaceSpring
            </Heading>
            <Stack
              as={"nav"}
              direction={"row"}
              spacing={5}
              display={{ sm: "none", md: "flex" }}
            >
              <Text px={2} fontWeight={"semibold"}>
                Projects
              </Text>
              <Text px={2} fontWeight={"semibold"}>
                Solutions
              </Text>
              <Text px={2} fontWeight={"semibold"}>
                Blog
              </Text>
              <Text px={2} fontWeight={"semibold"}>
                Company
              </Text>
            </Stack>
            <Button
              borderRadius={"sm"}
              color={"whitesmoke"}
              bg={"black"}
              _hover={{ bg: "#333333" }}
            >
              Register For Access
            </Button>
          </Flex>
          <Flex
            flexDir={["column-reverse", null, "row"]}
            minH={500}
            align={"center"}
            mb={10}
          >
            <Box w={["100%", null, "60%"]}>
              <Heading size={["xl", "3xl"]} mb={[3, null, 5]}>
                Make history <br />
                Don't just report on it
              </Heading>
              <Text mb={[3, null, 5]}>
                One key element in both methodologies is the concept of
                aggregates. In this article, we delve into the significance of
                aggregates and their role in facilitating modular and scalable
                software design within the realms of DDD and Clean Architecture.
              </Text>
              <Button
                borderRadius={"sm"}
                color={"whitesmoke"}
                bg={"black"}
                _hover={{ bg: "#333333" }}
              >
                Register For Access
              </Button>
              <Button ml={[2, null, 5]} borderRadius={"sm"}>
                Learn More
              </Button>
            </Box>
            <Box w={["100%", null, "40%"]}>
              <Heading textAlign={"right"}>Image PlaceHolder</Heading>
            </Box>
          </Flex>
          <Box
            w={"100%"}
            bg={"black"}
            px={[2, null, 5]}
            color={"whitesmoke"}
            borderRadius={"md"}
            py={[2, null, 5]}
          >
            <Stack direction={"row"} align={"center"}>
              <Box w={"30%"}>Placeholder img</Box>
              <Box w={"50%"}>
                <Text fontSize={"xx-large"}>
                  The Modern Cloud Data Intelligence
                  <br />
                  stack for your mission-critical business
                </Text>
                <Stack align={"baseline"} direction={"row"}>
                  <Text pb={1} my={3}>
                    Learn More
                  </Text>
                  <Icon pt={1} as={FaArrowRight} color={"whitesmoke"} />
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Flex
            mt={10}
            w={"100%"}
            justify={"center"}
            minH={400}
            align={"center"}
          >
            <SimpleGrid columns={[1, null, 2]} w={"100%"} spacing={5}>
              <Flex align={"center"} justify={"center"}>
                <Heading>Image PlaceHolder</Heading>
              </Flex>
              <Box>
                <Heading>
                  NetSpring Operational <br />
                  Intelligence
                </Heading>
                <Text fontWeight={"semibold"} my={[2, null, 5]}>
                  NetSpring is a cloud-native, real-time, streaming analytics
                  platform that enables you to collect, store, process, analyze,
                  and act on data at any scale, from any source, in any
                  environment.
                </Text>
                <Stack align={"baseline"} direction={"row"}>
                  <Text my={3} fontWeight={"bold"}>
                    Learn More
                  </Text>
                  <Icon pt={1} as={FaArrowRight} />
                </Stack>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
        <Box w={"100%"} bg={"black"} color={"whitesmoke"} py={[3, null, 10]}>
          <Heading textAlign={"center"} my={[2, null, 5]}>
            Why NetSpring?
          </Heading>
          <Box w={["100%", null, "80%", "60%"]} mx={"auto"}>
            <SimpleGrid columns={[1, null, 3]} spacing={5} mb={10}>
              <Box
                bg={"rgba(255, 255, 255, .1)"}
                p={[3, null, 5]}
                borderRadius={"md"}
              >
                <Box minH={100}></Box>
                <Heading
                  mb={2}
                  fontWeight={"regular"}
                  size={"lg"}
                  color={"white"}
                >
                  Analytics
                </Heading>
                <Text>
                  Gain unprecedented insights with advanced event flow and
                  dimensional slice-and-dice analytics, across data in motion
                  and data at rest
                </Text>
              </Box>
              <Box
                bg={"rgba(255, 255, 255, .1)"}
                p={[3, null, 5]}
                borderRadius={"md"}
              >
                <Box minH={100}></Box>
                <Heading
                  mb={2}
                  fontWeight={"regular"}
                  size={"lg"}
                  color={"white"}
                >
                  Scale
                </Heading>
                <Text>
                  Accelerate time to insights with high performance cloud stream
                  processing, alerting, and ad-hoc querying at extreme data
                  velocity and volume
                </Text>
              </Box>
              <Box
                bg={"rgba(255, 255, 255, .1)"}
                p={[3, null, 5]}
                borderRadius={"md"}
              >
                <Box minH={100}></Box>
                <Heading
                  mb={2}
                  fontWeight={"regular"}
                  size={"lg"}
                  color={"white"}
                >
                  Simplicity
                </Heading>
                <Text>
                  Empower business teams with self-service no-code application
                  development, in-a-low TCO, end-to-end managed SAS
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Box
          mt={[5, null, 10]}
          w={["100%", null, "80%", "60%"]}
          mx={"auto"}
          mb={10}
          py={5}
        >
          <Heading ml={[3, null, 14]} my={[3, null, 10]}>
            Hear From <br />
            Industry Experts
          </Heading>
          <Stack
            w={"85%"}
            bg={"#eeeeee"}
            p={5}
            mx={"auto"}
            direction={"row"}
            borderRadius={5}
          >
            <Box w={"35%"} my={"auto"}>
              <Heading textAlign={"center"}>
                Placeholder
                <br />
                Image
              </Heading>
            </Box>
            <Box my={4} w={"65%"}>
              <BsQuote size={50} color={"#555555"} />
              <Text>
                NetSpring is a modern cloud-native, real-time, streaming
                analytics platform that enables you to collect, store, process,
                analyze, and act on data at any scale, from any source, in any
                environment. We have accessed to speed up our Analysis of data
                for our platform with the tools provided by NetSpring.
              </Text>
              <Text mt={3} fontWeight={"semibold"}>
                Christian Nolen, Product Leader - Splunk, Interana CloudBees
              </Text>
            </Box>
          </Stack>
          <Box h={100}></Box>
        </Box>
        <Box
          pt={[5, null, 10]}
          w={["100%", null, "80%", "57%"]}
          mx={"auto"}
          pb={10}
          bg={"black"}
          borderRadius={5}
          mb={2}
          color={"whitesmoke"}
          px={[3, null, 14]}
        >
          <Heading>
            Getting Started{" "}
            <Text as={"span"} color={"green.300"}>
              is easy
            </Text>
          </Heading>
          <Text size={"lg"} mt={3}>
            Be up and running in an hour. Build an application on <br /> the
            NetSpring Platform in just a day
          </Text>
          <Button bg={"green.300"} mt={3} px={5} borderRadius={3}>
            Register for access <Icon ml={2} as={FaArrowRight} />
          </Button>
        </Box>
        <Box w={["100%", null, "80%", "65%"]} mx={"auto"} mb={5} mt={14} p={2}>
          <Stack direction={["column", null, "row"]} w={"100%"}>
            <Box w={["100%", null, "35%"]}>
              <Heading size={"lg"}>NetSpring</Heading>
              <Text my={5} fontWeight={"semibold"}>
                The Operational <br />
                Intelligence Platform
              </Text>
              <Flex flexDir={"row"} w={"60%"} my={[2, null, 5]} gap={3}>
                <FaGithub size={30} />
                <FaLinkedin size={30} />
                <FaSquareXTwitter size={30} />
                <FaSquareDribbble size={30} />
              </Flex>
            </Box>
            <SimpleGrid
              w={["100%", null, "65%"]}
              columns={[1, 2, 3]}
              spacingX={[2, null, 5]}
            >
              <Box>
                <Heading size={"md"} my={2}>
                  Product
                </Heading>
                <Text my={2}>Command Center</Text>
                <Text my={2}>Explorer</Text>
                <Text my={2}>Connect</Text>
                <Text my={2}>Workbench</Text>
                <Text my={2}>Metrics Store</Text>
                <Text my={2}>Operational Lakehouse</Text>
              </Box>
              <Box>
                <Heading size={"md"} my={2}>
                  Personas
                </Heading>
                <Text my={2}>Product & Growth Managers</Text>
                <Text my={2}>Business and Operations Analysis</Text>
                <Text my={2}>Customer Success & Support Managers</Text>
                <Text my={2}>Data Engineer & App Developers</Text>
              </Box>
              <Box>
                <Heading size={"md"} my={2}>
                  Use Cases
                </Heading>
                <Text my={2}>Products & Behavioural Analytics</Text>
                <Text my={2}>IoT</Text>
                <Text my={2}>Customer Experience 360</Text>
                <Text my={2}>Data Observability</Text>
                <Text my={2}>Risk, Fraud, Compliance</Text>
                <Text my={2}>Supply Demand Management</Text>
                <Text my={2}>Your Use Case</Text>
              </Box>
              <Box>
                <Heading size={"md"} my={2}>
                  Technology
                </Heading>
                <Text my={2}>Convereged Analytical Processing</Text>
                <Text my={2}>Relational Event Streams</Text>
                <Text my={2}>NetScript</Text>
              </Box>
              <Box>
                <Heading size={"md"} my={2}>
                  About Us
                </Heading>
                <Text my={2}>Team</Text>
                <Text my={2}>Investors</Text>
                <Text my={2}>Blog</Text>
                <Text my={2}>Careers</Text>
                <Text my={2}>Press</Text>
                <Text my={2}>Contact</Text>
              </Box>
              <Box>
                <Heading size={"md"} my={2}>
                  Resources
                </Heading>
                <Text my={2}>Built on NetSpring</Text>
                <Text my={2}>Support</Text>
                <Text my={2}>Legal</Text>
              </Box>
            </SimpleGrid>
          </Stack>
          <Flex
            mt={5}
            flexDir={["column", null, "row"]}
            justify={"space-between"}
            color={"#555555"}
          >
            <Stack direction={"row"} fontWeight={"semibold"}>
              <Text>Privacy</Text>
              <Text>EULA</Text>
              <Text>Terms of Services</Text>
            </Stack>
            <Text fontWeight={"semibold"}>
              All Rights Reserved, © 2021 Netspring.io
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
// the actual page implementation is the one above
const PortfolioPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Box bg={"black"} minH={"100vh"} color={"whitesmoke"}>
        <Heading textAlign={"center"} my={5}>
          Glassmorphic Texture
        </Heading>
        <Box width={["96%", null, "75%", "60%"]} mx={"auto"}>
          <SimpleGrid columns={[2, null, 3]} gap={[2, null, 5]}>
            <Box
              align="center"
              bg={"rgba(0, 255, 255, 0.1)"}
              backdropFilter={"blur(5px)"}
              p={{ base: 2, md: 5 }}
              borderRadius={3}
              borderWidth={1}
              borderColor={"rgba(255, 255, 255, 0.8)"}
            >
              <Flex flexDir={"row"} justify={"space-between"}>
                <Tag bg="red" color={"white"} px={2}>
                  -8%
                </Tag>
                <FaHeart color={liked ? "red" : "white"} />
              </Flex>
              <Heading size={"md"}>Monthly Flow</Heading>
              <Text my={2}>
                Flexible & unlimited access to thousands of materials to design
                services that talk to hearts
              </Text>
              <Heading mt={5} size={"lg"}>
                $5,000/m
              </Heading>
              <Button
                w={"80%"}
                onClick={() => setLiked(!liked)}
                bg={"rgba(0, 255, 255, 0.5)"}
                mx={"auto"}
              >
                Get Started
              </Button>
            </Box>
            <Box
              bg={"rgba(255, 255, 255, 0.4)"}
              backdropFilter={"blur(10px)"}
              p={{ base: 2, md: 5 }}
              borderRadius={3}
              borderWidth={1}
              borderColor={"rgba(255, 255, 255, 0.8)"}
            >
              <Heading size={"md"}>Monthly Flow</Heading>
              <Text my={2}>
                Flexible & unlimited access to thousands of materials to design
                services that talk to hearts
              </Text>
              <Heading mt={5} size={"lg"}>
                $5,000/m
              </Heading>
              <Button w={"80%"} mx={"auto"}>
                Get Started
              </Button>
            </Box>
            <Box
              bg={"rgba(255, 255, 255, 0.2)"}
              backdropFilter={"blur(10px)"}
              p={{ base: 2, md: 5 }}
              borderRadius={5}
              borderWidth={1}
              borderColor={"rgba(255, 255, 255, 0.8)"}
            >
              <Heading size={"md"}>Monthly Flow</Heading>
              <Text my={2}>
                Flexible & unlimited access to thousands of materials to design
                services that talk to hearts
              </Text>
              <Heading mt={5} size={"lg"}>
                $5,000/m
              </Heading>
              <Button w={"80%"} mx={"auto"}>
                Get Started
              </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

// bg={"rgba(255, 255, 255, 0.4)"}
//           px={{ base: null, md: 10 }}
//           spacing={{ base: "2", lg: "5" }}
//           display={{ base: "none", md: "flex" }}
//           backdropFilter={"blur(10px)"}
export default PortfolioPage;
