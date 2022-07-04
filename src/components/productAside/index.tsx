import { Button, Icon, Portal, Stack, Text } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ProductAside(props): ReactJSXElement {
  return (
    <Stack p={4} spacing="30px">
      <Stack>
        <span>Stock disponible</span>
        <Stack
          align="center"
          bg="#f5f5f5"
          borderRadius={6}
          direction="row"
          justify="space-between"
          p={3}
        >
          <Stack direction="row" spacing={3}>
            <Text>Cantidad: 1</Text>
            <Text color="gray.400">
              ({props.item.available_quantity} disponibles)
            </Text>
          </Stack>
          <Icon
            as={MdOutlineKeyboardArrowRight}
            color="secondary.500"
            h="26px"
            w="26px"
          />
        </Stack>
      </Stack>
      <Stack>
        <Button bg="secondary.400" color="white" size="lg">
          Comprar ahora
        </Button>
        <Button color="secondary.500" size="lg">
          Agregar al carrito
        </Button>
      </Stack>
    </Stack>
  );
}

export default ProductAside;
