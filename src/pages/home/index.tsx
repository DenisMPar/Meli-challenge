import React from "react";
import { Box, calc, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import source from "../../assets/homeImage.svg";

const HomeScreen: React.FC = () => {
  return (
    <Stack height={"85vh"} justify="center" align="center" spacing={20}>
      <Box textAlign={"center"}>
        <Text fontSize={"25px"} as="h1">
          Bienvenido al buscador de Mercado Libre
        </Text>
        <Text>
          Usa el buscador para encontrar tus productos y luego clickealos para
          ver sus detalles
        </Text>
      </Box>
      <Image width="100%" height="300px" src={source}></Image>
    </Stack>
  );
};

export default HomeScreen;
