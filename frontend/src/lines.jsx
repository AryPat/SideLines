import {
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  AvatarGroup,
  Avatar,
  VStack,
  HStack,
  Text,
  Badge,
  Box,
  Grid,
  GridItem,
  Card,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

example = {
  id: 1,
  video_title: "SIDEMEN TINDER IN REAL LIFE 2",
  speaker: "KSI",
  speaker_age: 25,
  speakee: "Lidia",
  speakee_age: 25,
  pickup_line:
    "Today, I dont feel like doing anything, except you, I'd do you",
  video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
  start_time: "0:11",
  end_time: "0:25",
  result: "No",
};

function Lines() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      height="100%"
      width="100%"
      alignContent="flex-start"
    >
      <GridItem
        width="100%"
        height="8rem"
        borderRadius="0.5rem"
        backgroundColor="rgb(255, 255, 255, 0.4)"
        padding="0.4rem"
        justifyContent="center"
      >
        <p>Card 1 Content</p>
      </GridItem>
    </Grid>
  );
}

export default Lines;
