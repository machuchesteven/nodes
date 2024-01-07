import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import {
  Flex,
  Heading,
  Box,
  Stack,
  Icon,
  Avatar,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import SummaryCard from "../components/dashboard/SummaryCard";
import {
  FcCamcorderPro,
  FcCustomerSupport,
  FcPrint,
  FcSynchronize,
} from "react-icons/fc";
const Dashboard = () => {
  return (
    <>
      <Flex flexDir={"row"}>
        <Sidebar />
        <Box ml={[2, null, 5]} flexDir={"column"} w={"100%"}>
          <Flex
            flexDir={"row"}
            justify={"space-between"}
            p={2}
            bg={"#efefef"}
            m={1}
            borderRadius={"lg"}
          >
            <Heading size={"md"} as={"h2"}></Heading>
            <Stack direction={"row"} align={"center"} mr={[2, null, 5]}>
              <Icon
                h={8}
                w={8}
                p={1}
                borderRadius={"md"}
                bg={"blue.50"}
                as={FcCustomerSupport}
              />
              <Icon
                h={8}
                w={8}
                p={1}
                borderRadius={"md"}
                bg={"blue.50"}
                as={FcPrint}
              />
              <Icon
                h={8}
                w={8}
                p={1}
                borderRadius={"md"}
                bg={"blue.50"}
                as={FcSynchronize}
              />
              <Icon
                h={8}
                w={8}
                p={1}
                borderRadius={"md"}
                bg={"blue.50"}
                as={FcCamcorderPro}
              />
              <Avatar size={"sm"} />
            </Stack>
          </Flex>

          <Box bg={"blue.50"} m={1} borderRadius={"lg"} p={1}>
            <SimpleGrid
              direction={"row"}
              minH={75}
              gap={1}
              columns={[1, null, 4]}
            >
              <Box>
                <Stack direction={"row"} align={"center"}>
                  <Avatar size={"sm"} />
                  <Heading color={"#3f3f3f"} size={"lg"}>
                    Safari Request
                  </Heading>
                </Stack>
                <Text>
                  New Requests : <b>80</b>
                </Text>
                <Text>
                  Active Requests : <b>320</b>
                </Text>
              </Box>
              <Box>
                <Stack direction={"row"} align={"center"}>
                  <Avatar size={"sm"} />
                  <Heading color={"#3f3f3f"} size={"lg"}>
                    Visa Apps
                  </Heading>
                </Stack>
                <Text>
                  New Requests : <b>80</b>
                </Text>
                <Text>
                  Active Requests : <b>320</b>
                </Text>
              </Box>
              <Box>
                <Stack direction={"row"} align={"center"}>
                  <Avatar size={"sm"} />
                  <Heading color={"#3f3f3f"} size={"lg"}>
                    Cars Rent
                  </Heading>
                </Stack>
                <Text>
                  New Requests : <b>80</b>
                </Text>
                <Text>
                  Active Requests : <b>320</b>
                </Text>
              </Box>
              <Box>
                <Stack direction={"row"} align={"center"}>
                  <Avatar size={"sm"} />
                  <Heading color={"#3f3f3f"} size={"lg"}>
                    Flight Bookings
                  </Heading>
                </Stack>
                <Box textAlign={"center"}>
                  <Text>
                    New Requests : <b>80</b>
                  </Text>
                  <Text>
                    Active Requests : <b>320</b>
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
          {/* Summary section */}
          <SummaryCard color={"blue"} />
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
