import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

import Stars from "../../ui/stars";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Opinion: React.FC = () => {
  return (
    <Stack>
      <Stars></Stars>
      <Stack spacing={0}>
        <Text as="h3" fontWeight="600">
          Titulo
        </Text>
        <Text as="p">Muy buen producto la verdad</Text>
      </Stack>
      <Stack direction="row">
        <Stack as="button" direction="row" align="center">
          <Icon as={AiOutlineLike}></Icon>
          <div>10</div>
        </Stack>
        <Stack as="button" direction="row" align="center">
          <Icon as={AiOutlineDislike}></Icon>
          <div>30</div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Opinion;
