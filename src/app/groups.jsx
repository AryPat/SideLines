/* eslint-disable react/prop-types */
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
  Divider,
  Spacer,
  Link,
} from "@chakra-ui/react";

import { getSpeakerPhoto, groups } from "./people.js";

function Groups({ selected, setSelected, isFetching }) {
  const handleSelect = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
      return;
    }
    setSelected([...selected, name]);
  };

  return (
    <Flex width="100%" height="100%" direction="column" fontFamily="Poppins">
      <HStack width="100%" alignItems={"center"} justifyContent={"flex-start"}>
        <Text as="b" fontFamily="Poppins" fontSize={"2xl"}>
          SideLines
        </Text>

        <Badge colorScheme="green">Beta 1.0</Badge>
      </HStack>
      <Divider
        orientation="horizontal"
        marginBottom="1rem"
        border="1px solid"
        color="black"
      />
      <Box overflow="auto" paddingRight={"0.3rem"}>
        <Box height="100%">
          <Accordion allowToggle width="100%" borderColor="transparent">
            {Object.entries(groups).map((key) => (
              <AccordionItem key={key[0]}>
                <AccordionButton
                  background="rgb(255, 255, 255, 0.4)"
                  _hover={{
                    borderColor: "transparent",
                    background: "rgb(255, 255, 255, 0.6)",
                  }}
                  marginBottom="1rem"
                  boxShadow="base"
                  borderRadius={"0.5rem"}
                >
                  <Heading
                    fontSize="md"
                    as="i"
                    flex="1"
                    textAlign="left"
                    fontFamily="Poppins"
                  >
                    {key[0][0].toUpperCase() + key[0].slice(1)}
                  </Heading>
                  <AvatarGroup size="sm">
                    {Object.entries(groups[key[0]]).map(([name, src]) =>
                      selected.includes(name) ? (
                        <Avatar
                          key={name}
                          name={name}
                          border="2px solid #ff5883"
                          src={getSpeakerPhoto(key[0], name)}
                        />
                      ) : (
                        <Avatar
                          key={name}
                          name={name}
                          border="2px solid black"
                          src={getSpeakerPhoto(key[0], name)}
                        />
                      )
                    )}
                  </AvatarGroup>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  <VStack>
                    {Object.entries(groups[key[0]]).map(
                      ([name, src], index) => (
                        <Flex
                          key={key[0] + index}
                          width="100%"
                          backgroundColor="rgb(255, 255, 255, 0.4)"
                          padding="0.4rem"
                          borderRadius="0.5rem"
                          justifyContent="center"
                          borderWidth="1px"
                          borderColor="transparent"
                          _hover={{
                            background: "rgb(255, 255, 255, 0.6)",
                            cursor:
                              isFetching || key[0] !== "sidemen"
                                ? "not-allowed"
                                : "pointer",
                          }}
                          disabled={key[0] !== "sidemen" || isFetching}
                          onClick={() => {
                            if (isFetching || key[0] !== "sidemen") return;
                            handleSelect(name);
                          }}
                          boxShadow="base"
                          userSelect="none"
                        >
                          <Flex
                            width="90%"
                            justifyContent="space-between"
                            align="center"
                          >
                            <HStack>
                              <Avatar
                                name={name}
                                src={getSpeakerPhoto(key[0], name)}
                              />
                              <Text fontFamily="Poppins">{name}</Text>
                            </HStack>

                            {selected.includes(name) ? (
                              <Badge colorScheme="purple">Selected</Badge>
                            ) : (
                              <Badge>Select</Badge>
                            )}
                          </Flex>
                        </Flex>
                      )
                    )}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        border="1px solid"
        color="black"
        marginTop={"1rem"}
        marginBottom={"0.4rem"}
      />
      <Flex
        width="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Spacer></Spacer>
        <VStack spacing={0}>
          <Link href="https://www.buymeacoffee.com/arypat" isExternal>
            <Text
              as="b"
              fontFamily="Poppins"
              fontSize={"sm"}
              textAlign={"right"}
              width="100%"
            >
              ☕ Buy me a Coffee
            </Text>
          </Link>
          <Text
            fontFamily="Poppins"
            fontSize={"10px"}
            textAlign={"right"}
            width="100%"
          >
            if you like what you 👀
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Groups;
