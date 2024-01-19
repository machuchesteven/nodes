import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const chartOptions = {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
        }
      }
const chartSeries =  [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91,null, 125]
      }]

const ChartsPage = () => {
  return (
    <Box>
      <Heading>Charts For Data Visualization</Heading>
      <Text>Charts Page: Library of Choice is ApexCharts</Text>
      <Box maxW={"5xl"} mx={"auto"}>
        <Chart options={chartOptions} series={chartSeries} type="bar"  height={320} />
      </Box>
    </Box>
  );
};

export default ChartsPage;
