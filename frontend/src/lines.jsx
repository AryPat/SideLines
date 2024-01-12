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
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Spacer,
  Center,
  VStack,
} from "@chakra-ui/react";

import { ViewIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";

const getSeconds = (time) => {
  const [minutes, seconds] = time.split(":");
  return parseInt(minutes) * 60 + parseInt(seconds);
};

const YoutubeModel = ({ PickUplineInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ViewIcon
        onClick={onOpen}
        cursor="pointer"
        _hover={{
          color: "blue.500",
        }}
      ></ViewIcon>

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

const AvatarPopOver = ({ name, avatarProp }) => {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <Avatar
          {...avatarProp(name)}
          _hover={{
            cursor: "pointer",
          }}
          userSelect="none"
        ></Avatar>
      </PopoverTrigger>
      <PopoverContent
        borderTopLeftRadius="0.5rem"
        borderTopRightRadius="0.5rem"
      >
        <PopoverHeader
          backgroundColor="#ececec"
          borderTopLeftRadius="0.5rem"
          borderTopRightRadius="0.5rem"
        >
          <Flex flex="1">
            <Text fontFamily="Poppins" fontSize="sm" as="b">
              {name}, 25
            </Text>
            <Spacer></Spacer>
            <Text fontFamily="Poppins" fontSize="sm" as="b">
              Stoke
            </Text>
          </Flex>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          <HStack justify="center" align="center">
            <Avatar size="sm" src="./src/assets/insta.png"></Avatar>
            <Link
              href={"https://youtu.be/aAOC71qqXxM?si=YGLpMbd0rY46zq3r&t="}
              isExternal
            >
              <Text fontFamily="Poppins" fontSize="sm" as="b">
                @insta_name
              </Text>
            </Link>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const LineResult = ({ speaker, speakee, pickUpLine, result }) => {
  let resultColor = "";

  const avatarProp = (name) => {
    switch (result) {
      case "Yes":
        resultColor = "#006400;";
        break;
      case "No":
        resultColor = "#f05959";
        break;
      default:
        resultColor = "grey";
    }

    return {
      name: name,
      src: "https://google.ca",
      borderColor: resultColor,
      borderWidth: "3px",
    };
  };

  return (
    <>
      <Avatar {...avatarProp(speaker)} />
      <Text
        fontFamily="Poppins"
        fontSize="sm"
        as="i"
        width="60%"
        fontWeight="bold"
        color={resultColor}
      >
        &quot;{pickUpLine}&quot;
      </Text>
      <AvatarPopOver name={speakee} avatarProp={avatarProp} />
    </>
  );
};

const PickUpLine = ({ PickUplineInfo, order }) => {
  return (
    <GridItem
      width="100%"
      borderRadius="0.5rem"
      backgroundColor="rgb(255, 255, 255, 0.4)"
      padding="0.3rem"
      justifyContent="center"
      boxShadow="base"
    >
      <Flex height="100%" direction="column" justifyContent="space-between">
        <Flex justifyContent="space-between" padding="0.3rem">
          <Text fontFamily="Poppins" fontSize="sm" as="b">
            #{PickUplineInfo["id"]}
          </Text>
          <HStack>
            <StarIcon
              cursor="not-allowed"
              _hover={{
                color: "yellow.600",
              }}
            ></StarIcon>
            <YoutubeModel PickUplineInfo={PickUplineInfo} />
            <Link
              href={
                "https://youtu.be/aAOC71qqXxM?si=YGLpMbd0rY46zq3r&t=" +
                getSeconds(PickUplineInfo["start_time"])
              }
              isExternal
              _hover={{
                color: "blue.500",
              }}
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
          <LineResult
            speaker={PickUplineInfo["speaker"]}
            speakee={PickUplineInfo["speakee"]}
            pickUpLine={PickUplineInfo["pickup_line"]}
            result={PickUplineInfo["result"]}
          ></LineResult>
        </Flex>
        <Flex justifyContent="space-between" padding="0.3rem">
          <Text fontFamily="Poppins" as="kbd" fontSize="sm" fontWeight="500">
            {PickUplineInfo["video_title"]}
          </Text>
          <Text fontFamily="Poppins" as="em" fontSize="sm" fontWeight="500">
            {PickUplineInfo["start_time"]} - {PickUplineInfo["end_time"]}
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};

function Lines({ isFetching, isLoading, data, isSuccess }) {
  const commonGridProps = {
    templateColumns: "repeat(2, 1fr)",
    gap: 4,
    height: "100%",
    width: "100%",
    alignContent: "flex-start",
  };

  if (!isSuccess || isLoading || isFetching) {
    return (
      <Grid {...commonGridProps}>
        <SkeletonLines />
        <SkeletonLines />
        <SkeletonLines />
      </Grid>
    );
  }

  if (data.data.result.length === 0) {
    return (
      <Center height="100%">
        <VStack>
          <img width="50%" src="./src/assets/looking-around.gif" />
          <Text fontFamily="Poppins" fontSize="lg">
            {" "}
            Where da pickup lines at?
          </Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Box>
      <Grid {...commonGridProps}>
        {data.data.result.map((line, index) => (
          <PickUpLine
            key={index}
            PickUplineInfo={line}
            order={index + 1}
          ></PickUpLine>
        ))}
      </Grid>
    </Box>
  );
}

export default Lines;
