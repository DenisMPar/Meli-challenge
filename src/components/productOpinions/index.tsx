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
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useRecoilValue } from "recoil";
import { searchOpinionsState } from "../../atoms";

function showOpinions(reviews) {
  const res = reviews.map((item) => {
    console.log(item);

    return <Opinion key={item.id} item={item}></Opinion>;
  });

  return res;
}

function ProductOpinion(props): ReactJSXElement {
  const reviews = useRecoilValue(searchOpinionsState);
  return (
    <Stack divider={<StackDivider></StackDivider>} spacing={0} mb={6}>
      <Stack>
        <OpinionsHeader item={props.item}></OpinionsHeader>
        <ButtonTabs></ButtonTabs>
      </Stack>
      <Stack p={4} spacing={2}>
        {showOpinions(reviews.reviews)}
      </Stack>
    </Stack>
  );
}

export default ProductOpinion;
