import {
  Box,
  Button,
  Icon,
  Portal,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ProductAside(props): ReactJSXElement {
  return (
    <Stack
      px={4}
      py={{ base: 4, lg: 6 }}
      spacing="30px"
      border={{ lg: "solid 1px rgba(0,0,0,.1)" }}
      borderRadius={{ lg: "8px" }}
    >
      <Stack direction="column" display={{ base: "none", lg: "initial" }}>
        <Stack
          color="gray.400"
          direction="row"
          divider={<StackDivider />}
          fontSize="12px"
        >
          <span>{props.item.condition == "new" ? "Nuevo" : "Usado"}</span>
          <span>{props.item.sold_quantity + " Vendidos"}</span>
        </Stack>
        <Text as="h1" fontWeight={{ lg: "600" }} fontSize={{ lg: "22px" }}>
          {props.item.title}
        </Text>
      </Stack>
      <Stack p={4} spacing={0}>
        {props.item.original_price ? (
          <Box color="gray.400" lineHeight={1}>
            <del>
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumSignificantDigits: 3,
              }).format(props.item.original_price)}
            </del>
          </Box>
        ) : null}
        <Box fontSize="32px" fontWeight="300" lineHeight={1}>
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumSignificantDigits: 3,
          }).format(props.item.price)}
        </Box>
      </Stack>
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
      <Stack maxW="500px" width="100%" mx="auto !important">
        <Button
          _hover={{ bg: "secondary.700" }}
          _focus={{ bg: "secondary.700" }}
          bg="secondary.400"
          color="white"
          size="lg"
        >
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
