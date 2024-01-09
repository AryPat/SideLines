import "./App.css";
import {
  Flex,
  VStack,
  Accordion,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Spacer,
} from "@chakra-ui/react";

function App() {
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
        <VStack
          height="100%"
          width="30%"
          backgroundColor="white"
          opacity="0.25"
          borderRadius="0.5rem"
        ></VStack>

        <Accordion
          height="100%"
          width="68%"
          allowToggle
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <AccordionItem
            backgroundColor="white"
            opacity="0.25"
            borderRadius="0.5rem"
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
            maxH="100vh"
            backgroundColor="white"
            opacity="0.25"
            borderRadius="0.5rem"
          ></AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default App;
