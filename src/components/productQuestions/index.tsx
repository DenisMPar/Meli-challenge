import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSubdirectoryRight } from "react-icons/bi";

const ProductQuestion: React.FC = () => {
  return (
    <Box px={4}>
      <Text mb="24px" fontSize="20px">
        Preguntas y respuestas
      </Text>
      <Text mb="24px" fontSize="18px" fontWeight="600">
        Últimas realizadas
      </Text>
      <Stack spacing={5}>
        <Stack>
          <Text>Hola tiene renura sd?</Text>
          <Stack direction="row" color="rgba(0,0,0,.55)" pl={1}>
            <Icon as={BiSubdirectoryRight}></Icon>
            <Stack spacing={0}>
              <Text>Si tiene, gracias</Text>
              <Text fontSize="12px">Respondido por: Denis</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Text>Hola tiene renura sd?</Text>
          <Stack direction="row" color="rgba(0,0,0,.55)" pl={1}>
            <Icon as={BiSubdirectoryRight}></Icon>
            <Stack spacing={0}>
              <Text>Si tiene, gracias</Text>
              <Text fontSize="12px">Respondido por: Denis</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductQuestion;
