/* eslint-disable react/prop-types */
import {
  Flex,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

function Filter() {
  return (
    <>
      <AccordionButton
        _hover={{
          borderColor: "transparent",
          background: "rgb(255, 255, 255, 0.4)",
          borderRadius: "0rem",
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
        }}
      >
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="space-between" // This property places children on the left and right
        >
          <Text fontFamily="Poppins" fontSize="lg" fontWeight="bold">
            Filter
          </Text>
          <AccordionIcon />
        </Flex>
      </AccordionButton>
      <AccordionPanel fontFamily="Poppins" fontSize="sm">
        Coming Soon.
      </AccordionPanel>
    </>
  );
}

export default Filter;
