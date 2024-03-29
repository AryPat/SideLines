"use client";

import { Flex, Accordion, AccordionItem } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

import Groups from "./groups.jsx";
import Filter from "./filter.jsx";
import Lines from "./lines.jsx";
import Pagination from "./pagination.jsx";

const paginate = (query, { page, pageSize }) => {
  const offset = page * pageSize;
  const limit = pageSize;

  return {
    ...query,
    offset,
    limit,
  };
};

export default function Home() {
  const [selected, setSelected] = useState([]);

  const [pageIndex, setPageIndex] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [canPreviousPage, setCanPreviousPage] = useState(true);
  const [canNextPage, setCanNextPage] = useState(true);

  const { isFetching, data, isSuccess, refetch } = useQuery({
    queryKey: ["pickUpLineData"],
    queryFn: async () => {
      const { data } = await axios.post("/api/lines/count", {
        data: { where: { speaker: selected } },
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await axios.post("/api/lines", {
        data: paginate(
          { where: { speaker: selected } },
          { page: pageIndex, pageSize: pageSize }
        ),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMaxPage(Math.ceil(data.count / pageSize));
      setCanPreviousPage(pageIndex > 0);
      setCanNextPage(pageIndex < Math.ceil(data.count / pageSize) - 1);

      return { data: res.data, total_count: data.count };
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setPageIndex(0);
    refetch();
  }, [selected]);

  useEffect(() => {
    refetch();
  }, [pageIndex]);

  useEffect(() => {
    setPageIndex(0);
    refetch();
  }, [pageSize]);

  return (
    <Flex
      minH={["100vh", "100vh", "100vh", null, null, null]}
      height={["100%", "100%", "100%", "100vh", "100vh", "100vh"]}
      width="100vw"
      bgGradient="linear(to-br, #76dfff, #ffa8be)"
      align="center"
      justify="center"
      paddingTop={["1rem", "1rem", "1rem", "0rem", "0rem", "0rem"]}
      paddingBottom={["1rem", "1rem", "1rem", "0rem", "0rem", "0rem"]}
    >
      <Flex
        height="90%"
        width={["95%", "90%", "90%", "90%", "80%", "70%"]}
        justify="space-between"
        flexDirection={["column", "column", "column", "row", "row", "row"]}
      >
        <Flex
          height="100%"
          width={["100%", "100%", "100%", "30%", "30%", "30%"]}
          backgroundColor="rgb(255, 255, 255, 0.3)"
          borderRadius={"0.5rem"}
          flexDirection="column"
          padding="1rem"
          boxShadow="dark-lg"
          borderWidth="1px"
          borderColor="transparent"
        >
          <Groups
            selected={selected}
            setSelected={setSelected}
            isFetching={isFetching}
          ></Groups>
        </Flex>

        <Accordion
          height="100%"
          width={["100%", "100%", "100%", "68%", "68%", "68%"]}
          allowToggle
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderColor="transparent"
        >
          <AccordionItem
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderRadius={"0.5rem"}
            boxShadow="dark-lg"
            borderWidth="1px"
            marginTop={["1rem", "1rem", "1rem", "0rem", "0rem", "0rem"]}
          >
            <Filter />
          </AccordionItem>

          <AccordionItem
            marginTop="1rem"
            height="100%"
            width="100%"
            backgroundColor="rgb(255, 255, 255, 0.3)"
            borderRadius="0.5rem"
            padding="1rem"
            overflow="auto"
            boxShadow="dark-lg"
            borderWidth="1px"
            borderColor="transparent"
          >
            <Lines
              selected={selected}
              isFetching={isFetching}
              data={data}
              isSuccess={isSuccess}
              refetch={refetch}
              page={pageIndex}
              pageSize={pageSize}
            ></Lines>
          </AccordionItem>

          <Pagination
            pageIndex={pageIndex}
            maxPage={maxPage}
            pageSize={pageSize}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            setPageIndex={setPageIndex}
            setPageSize={setPageSize}
            isFetching={isFetching}
          />
        </Accordion>
      </Flex>
    </Flex>
  );
}
