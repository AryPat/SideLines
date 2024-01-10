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
} from "@chakra-ui/react";

const members = {
  Sidemen: {
    Vikk: "https://bit.ly/ryan-florence",
    Ksi: "https://bit.ly/ryan-florence",
    Simon: "https://bit.ly/ryan-florence",
    Harry: "https://bit.ly/ryan-florence",
    Tobi: "https://bit.ly/ryan-florence",
    Ethan: "https://bit.ly/ryan-florence",
    Josh: "https://bit.ly/ryan-florence",
  },
  Troops: {
    Stephen: "https://bit.ly/ryan-florence",
    Calfreezy: "https://bit.ly/ryan-florence",
    Callux: "https://bit.ly/ryan-florence",
  },
  Betasquad: {
    Chunks: "https://bit.ly/ryan-florence",
    Filly: "https://bit.ly/ryan-florence",
  },

  Friends: {
    Logan: "https://bit.ly/ryan-florence",
    Mike: "https://bit.ly/ryan-florence",
    George: "https://bit.ly/ryan-florence",
    HarryP: "https://bit.ly/ryan-florence",
  },
};

function Groups({ selected, setSelected, isFetching }) {
  const handleSelect = (name) => {
    // check if select is in selected if so remove it else add it
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
      return;
    }
    setSelected([...selected, name]);
  };

  return (
    <Flex width="100%" height="100%" direction="column">
      <Heading
        fontSize="20px"
        as="b"
        color="Black"
        width="100%"
        opacity="100"
        paddingBottom="1rem"
        textAlign="left"
      >
        The Groups
      </Heading>
      <Box height="100%" overflow="auto">
        <Accordion allowToggle width="100%" defaultIndex={[0]}>
          {Object.entries(members).map((key) => (
            <AccordionItem key={key[0]}>
              <AccordionButton>
                <Heading fontSize="md" as="i" flex="1" textAlign="left">
                  {key[0]}
                </Heading>
                <AvatarGroup size="sm">
                  {Object.entries(members[key[0]]).map(([name, src]) =>
                    // if selected includes name then add a border thats hot pink
                    selected.includes(name) ? (
                      <Avatar
                        key={name}
                        name={name}
                        src={src}
                        border="2px solid #ff5883"
                      />
                    ) : (
                      <Avatar key={name} name={name} src={src} />
                    )
                  )}
                </AvatarGroup>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <VStack>
                  {Object.entries(members[key[0]]).map(
                    ([name, src], index) => (
                      <Flex
                        key={key[0] + index}
                        width="100%"
                        backgroundColor="rgb(255, 255, 255, 0.4)"
                        padding="0.4rem"
                        borderRadius="0.5rem"
                        justifyContent="center"
                        borderWidth="1px"
                        _hover={{
                          background: "rgb(255, 255, 255, 0.6)",
                          cursor: isFetching ? "not-allowed" : "pointer",
                        }}
                        disabled={isFetching}
                        onClick={() => {
                          if (isFetching) return;
                          handleSelect(name);
                        }}
                      >
                        <Flex
                          width="90%"
                          justifyContent="space-between"
                          align="center"
                        >
                          <HStack>
                            <Avatar name={name} src={src} />
                            <Text>{name}</Text>
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
    </Flex>
  );
}

export default Groups;
