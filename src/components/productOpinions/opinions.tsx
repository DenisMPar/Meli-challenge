import { Icon, Stack, Text } from "@chakra-ui/react";

import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Stars from "../../ui/stars";


function Opinion(props) {
  return (
    <Stack>
      <Stars rate={props.item.rate}></Stars>
      <Stack spacing={0}>
        <Text as="h3" fontWeight="600">
          {props.item.title}
        </Text>
        <Text as="p">{props.item.content}</Text>
      </Stack>
      <Stack direction="row">
        <Stack as="button" direction="row" align="center">
          <Icon as={AiOutlineLike}></Icon>
          <div>{props.item.likes}</div>
        </Stack>
        <Stack as="button" direction="row" align="center">
          <Icon as={AiOutlineDislike}></Icon>
          <div>{props.item.dislikes}</div>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Opinion;
