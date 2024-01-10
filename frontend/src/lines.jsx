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
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import { ViewIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getSeconds = (time) => {
  const [minutes, seconds] = time.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

const YoutubeModel = ({ PickUplineInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ViewIcon onClick={onOpen} cursor="pointer"></ViewIcon>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} margins="10rem">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
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

const SkeletonLines = () => {
  return (
    <GridItem
      width="100%"
      borderRadius="0.5rem"
      backgroundColor="rgb(255, 255, 255, 0.4)"
      padding="0.4rem"
      justifyContent="center"
    >
      <Flex height="100%" direction="column" justifyContent="space-between">
        <SkeletonText noOfLines={2} padding="0.3rem"></SkeletonText>
        <Flex
          justifyContent="space-around"
          padding="0.3rem"
          alignItems="center"
        >
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} padding="0.3rem" mt="4"></SkeletonText>
          <SkeletonCircle size="10" />
        </Flex>
        <SkeletonText noOfLines={2} padding="0.3rem"></SkeletonText>
      </Flex>
    </GridItem>
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
            <YoutubeModel PickUplineInfo={PickUplineInfo} />
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
          <Avatar name={PickUplineInfo["speaker"]} src={"https://google.ca"} />
          <Text fontSize="sm" as="i" width="60%">
            {PickUplineInfo["pickup_line"]}
          </Text>
          <Avatar name={PickUplineInfo["speaker"]} src={"https://google.ca"} />
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

function Lines({ selected }) {
  const { isFetching, isLoading, isRefetchError, error, data, refetch } =
    useQuery({
      queryKey: ["pickUpLineData"],
      queryFn: async () =>
        await axios.post("http://localhost:3001/lines", {
          data: { where: { speaker: selected } },
          headers: {
            "Content-Type": "application/json",
          },
        }),
    });

  useEffect(() => {
    refetch();
  }, [selected]);

  const commonGridProps = {
    templateColumns: "repeat(2, 1fr)",
    gap: 4,
    height: "100%",
    width: "100%",
    alignContent: "flex-start",
  };

  if (isLoading || isFetching || error || isRefetchError) {
    return (
      <Grid {...commonGridProps}>
        <SkeletonLines />
        <SkeletonLines />
        <SkeletonLines />
      </Grid>
    );
  }

  return (
    <Grid {...commonGridProps}>
      {data.data.result.map((line, index) => (
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
