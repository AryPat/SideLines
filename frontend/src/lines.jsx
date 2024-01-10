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

const getSeconds = (time) => {
  const [minutes, seconds] = time.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

function Lines({ selected }) {
  const [pickUpLines, setPickUpLines] = useState([]);

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

  const Test = ({ PickUplineInfo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <ViewIcon onClick={onOpen} cursor="pointer"></ViewIcon>

        <Modal isOpen={isOpen} onClose={onClose} size={"xl"} margins="10rem">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Hello {PickUplineInfo["start_time"]} {PickUplineInfo["end_time"]}
            </ModalHeader>
            <ModalBody width="100%" height="100%">
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/aAOC71qqXxM?start=${getSeconds(
                  PickUplineInfo["start_time"]
                )}&end=${getSeconds(PickUplineInfo["end_time"])}`}
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
      </>
    );
  };

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
              <Test PickUplineInfo={PickUplineInfo}></Test>
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
      {pickUpLines.map((line, index) => (
        <PickUpLine
          key={index}
          PickUplineInfo={line}
          order={index + 1}
        ></PickUpLine>
      ))}
    </Grid>
  );
}

export default Lines;
