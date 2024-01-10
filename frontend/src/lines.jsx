/* eslint-disable react/prop-types */
import {
  Flex,
  Avatar,
  HStack,
  Text,
  Grid,
  GridItem,
  Link,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { ViewIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import axios from "axios";

const example = {
  id: 15,
  video_title: "SIDEMEN TINDER IN REAL LIFE 2",
  speaker: "KSI",
  speaker_age: 25,
  speakee: "Abbie",
  speakee_age: 24,
  pickup_line: "You're such a fucking hoe",
  video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
  start_time: "5:03",
  end_time: "5:28",
  result: "Again",
};

const getSeconds = (time) => {
  const [minutes, seconds] = time.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

function Lines({ selected }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pickUpLines, setPickUpLines] = useState([]);

  // startTimeInSeconds.endTimeInSeconds
  const [time, setTime] = useState("");

  const setVideoTime = (startTime, endTime) => {
    setTime(getSeconds(startTime) + "." + getSeconds(endTime));
  };

  useEffect(() => {
    onOpen();
  }, [time]);

  useEffect(() => {
    if (selected) {
      const getSelectedPeople = async () => {
        try {
          const res = await axios.post("http://localhost:3001/lines", {
            data: { where: { speaker: selected } },
            headers: {
              "Content-Type": "application/json",
            },
          });
          setPickUpLines(res.data.result);
        } catch (err) {
          console.log(err);
        }
      };

      getSelectedPeople();
    }
  }, [selected]);

  useEffect(() => {}, [pickUpLines]);

  const PickUpLine = ({ PickUplineInfo, order }) => {
    return (
      <GridItem
        width="100%"
        borderRadius="0.5rem"
        backgroundColor="rgb(255, 255, 255, 0.4)"
        padding="0.4rem"
        justifyContent="center"
        cursor="default"
      >
        <Flex height="100%" direction="column" justifyContent="space-between">
          <Flex justifyContent="space-between" padding="0.3rem">
            <div>#{order}</div>
            <HStack>
              <StarIcon cursor="not-allowed"></StarIcon>
              <ViewIcon
                onClick={() => {
                  setVideoTime(
                    PickUplineInfo["start_time"],
                    PickUplineInfo["end_time"]
                  );
                }}
                cursor="pointer"
              ></ViewIcon>
              <Link
                href={
                  "https://youtu.be/aAOC71qqXxM?si=YGLpMbd0rY46zq3r&t=" +
                  getSeconds(PickUplineInfo["start_time"])
                }
                isExternal
              >
                <ExternalLinkIcon />
              </Link>
            </HStack>
          </Flex>
          <Flex
            justifyContent="space-around"
            padding="0.3rem"
            alignItems="center"
          >
            <Avatar
              name={PickUplineInfo["speaker"]}
              src={"https://google.ca"}
            />
            <Text fontSize="sm" as="i" width="60%">
              {PickUplineInfo["pickup_line"]}
            </Text>
            <Avatar
              name={PickUplineInfo["speaker"]}
              src={"https://google.ca"}
            />
          </Flex>
          <Flex justifyContent="space-between" padding="0.3rem">
            <div>{PickUplineInfo["video_title"]}</div>
            <div>
              {PickUplineInfo["start_time"]} - {PickUplineInfo["end_time"]}
            </div>
          </Flex>
        </Flex>
      </GridItem>
    );
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      height="100%"
      width="100%"
      alignContent="flex-start"
    >
      {pickUpLines.map((line, index) => (
        <PickUpLine
          key={index}
          PickUplineInfo={line}
          order={index + 1}
        ></PickUpLine>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} margins="10rem">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody width="100%" height="100%">
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/aAOC71qqXxM?start=${
                time.split(".")[0]
              }&end=${time.split(".")[1]}`}
              allowFullScreen
            ></iframe>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
}

export default Lines;
