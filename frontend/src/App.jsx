import "./App.css";
import { Flex, Accordion, AccordionItem, Spacer } from "@chakra-ui/react";

import Groups from "./Groups";
import Lines from "./lines";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Filter from "./filter";

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
          borderTopRightRadius="0.5rem"
          borderBottomRightRadius="0.5rem"
          flexDirection="column"
          padding="1rem"
          boxShadow="dark-lg"
          borderWidth="1px"
          borderColor="transparent"
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
          borderColor="transparent"
        >
          <AccordionItem
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderTopLeftRadius="0.5rem"
            borderBottomLeftRadius="0.5rem"
            boxShadow="dark-lg"
            borderWidth="1px"
          >
            <Filter />
          </AccordionItem>
          <Spacer></Spacer>
          <AccordionItem
            marginTop="1rem"
            height="100%"
            width="100%"
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderRadius="0.5rem"
            padding="1rem"
            overflow="auto"
            boxShadow="dark-lg"
            borderWidth="1px"
            borderColor="transparent"
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
