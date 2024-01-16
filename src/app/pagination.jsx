/* eslint-disable react/prop-types */
import { Flex, Text, Tooltip, IconButton, Select } from "@chakra-ui/react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function Pagination({
  pageIndex,
  maxPage,
  pageSize,
  canPreviousPage,
  canNextPage,
  setPageIndex,
  setPageSize,
  isFetching,
}) {
  if (pageIndex == maxPage) return <></>;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex direction="row" justifyContent={"space-between"} paddingTop={"1rem"}>
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            backgroundColor={"#dee9f4"}
            onClick={() => setPageIndex(0)}
            isDisabled={!canPreviousPage || isFetching}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            backgroundColor={"#dee9f4"}
            onClick={() => {
              setPageIndex(pageIndex - 1);
            }}
            isDisabled={!canPreviousPage || isFetching}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      <Flex alignItems="center" justifyContent={"center"}>
        <Text fontFamily="Poppins" fontSize="md">
          Page&nbsp;
        </Text>
        <Text fontFamily="Poppins" fontWeight="bold" as="span">
          {pageIndex + 1}&nbsp;
        </Text>
        <Text fontFamily="Poppins" fontSize="md">
          of&nbsp;
        </Text>
        <Text fontFamily="Poppins" fontWeight="bold" as="span">
          {maxPage}
        </Text>
        {windowWidth > 500 && (
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            fontFamily="Poppins"
            backgroundColor="#e5cdde"
            borderColor="transparent"
            paddingLeft={"0.5rem"}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                <Text textAlign="center">Limit {pageSize}</Text>
              </option>
            ))}
          </Select>
        )}
      </Flex>

      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            backgroundColor={"#dee9f4"}
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
            isDisabled={!canNextPage || isFetching}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            backgroundColor={"#dee9f4"}
            onClick={() => setPageIndex(maxPage - 1)}
            isDisabled={!canNextPage || isFetching}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default Pagination;
