import "./App.css";
import {
  Flex,
  Accordion,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Spacer,
} from "@chakra-ui/react";

import Groups from "./Groups";
import Lines from "./lines";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [selected, setSelected] = useState([]);
  const { isFetching, data, isSuccess, refetch } = useQuery({
    queryKey: ["pickUpLineData"],
    queryFn: async () =>
      await axios.post("http://localhost:3001/lines", {
        data: { where: { speaker: selected } },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [selected]);

  return (
    <Flex
      height="100vh" // 100% of the viewport height
      width="100vw" // 100% of the viewport width
      minH="100vh" // Minimum height to cover the viewport
      minW="100vw" // Minimum width to cover the viewport
      bgGradient="linear(to-br, #76dfff, #ffa8be)"
      align="center"
      justify="center"
    >
      <Flex height="90%" width="70%" justify="space-between">
        <Flex
          height="100%"
          width="30%"
          backgroundColor="rgb(255, 255, 255, 0.3)"
          borderRadius="0.5rem"
          flexDirection="column"
          padding="1rem"
        >
          <Groups
            selected={selected}
            setSelected={setSelected}
            isFetching={isFetching}
          ></Groups>
        </Flex>

        <Accordion
          height="100%"
          width="68%"
          allowToggle
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <AccordionItem
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderRadius="0.5rem"
            borderWidth="0rem"
          >
            <h2>
              <AccordionButton>
                <Box></Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>Filter option goes here.</AccordionPanel>
          </AccordionItem>
          <Spacer></Spacer>
          <AccordionItem
            marginTop="1rem"
            height="100%"
            width="100%"
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderRadius="0.5rem"
            borderWidth="0rem"
            padding="1rem"
            overflow="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "12px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Lines
              selected={selected}
              isFetching={isFetching}
              data={data}
              isSuccess={isSuccess}
              refetch={refetch}
            ></Lines>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default App;
