import {
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Stars from "../../ui/stars";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Opinion from "./opinions";
import ButtonTabs from "./buttonsTab";
import OpinionsHeader from "./opinionsHeader";

const ProductOpinion: React.FC = () => {
  return (
    <Stack divider={<StackDivider></StackDivider>} spacing={0} mb={6}>
      <Stack>
        <OpinionsHeader></OpinionsHeader>
        <ButtonTabs></ButtonTabs>
      </Stack>
      <Stack p={4} spacing={2}>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
        <Opinion></Opinion>
      </Stack>
    </Stack>
  );
};

export default ProductOpinion;
