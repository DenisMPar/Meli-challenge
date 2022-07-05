import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { useRecoilValue } from "recoil";
import { searchDescriptionState } from "../../atoms";

function ProductDescription(): ReactJSXElement {
  const description = useRecoilValue(searchDescriptionState);

  return (
    <Box px={{ base: 4, sm: 8 }} maxW="769px">
      <Text mb="24px" fontSize="20px">
        Descripción
      </Text>
      <Text color="#666">
        {description.plain_text
          ? description.plain_text
          : "El vendedor no incluyó una descripción del producto"}
      </Text>
    </Box>
  );
}

export default ProductDescription;
