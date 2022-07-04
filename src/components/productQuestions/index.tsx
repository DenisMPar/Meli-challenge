import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { BiSubdirectoryRight } from "react-icons/bi";
import { useSearchQuestions } from "../../hooks";

function showQuestions(questions): ReactJSXElement {
  const res = questions.map((item) => (
    <Stack key={item.id}>
      <Text>{item.text}</Text>
      <Stack direction="row" color="rgba(0,0,0,.55)" pl={1}>
        <Icon as={BiSubdirectoryRight}></Icon>
        <Stack spacing={0} minW="0">
          <Text width="100%">{item.answer?.text}</Text>
        </Stack>
      </Stack>
    </Stack>
  ));
  return res;
}

function ProductQuestion(props): ReactJSXElement {
  return (
    <Box px={4}>
      <Text mb="24px" fontSize="20px">
        Preguntas y respuestas
      </Text>
      <Text mb="24px" fontSize="18px" fontWeight="600">
        Últimas realizadas
      </Text>
      <Stack spacing={5}>{showQuestions(props.question)}</Stack>
    </Box>
  );
}

export default ProductQuestion;
