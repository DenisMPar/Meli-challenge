import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import Stars from "../../ui/stars";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const OpinionsHeader: React.FC = () => {
  return (
    <Stack p={4}>
      <Text as="h2">Opiniones sobre producto</Text>
      <Stack direction="row">
        <Text fontSize="64px" fontWeight="300" as="p">
          4.5
        </Text>
        <Stack>
          <Stars></Stars>
          <Text color="rgba(0,0,0,.55)" fontSize="12px">
            Promedio entre 100 opiniones
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OpinionsHeader;
