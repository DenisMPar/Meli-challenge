import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProductDescription: React.FC = () => {
  return (
    <Box px={4}>
      <Text mb="24px" fontSize="20px">
        Descripción
      </Text>
      <Text>
        En la calle, en el colectivo o en la oficina, tené siempre a mano tus
        auriculares Noga y ¡escapate de la rutina por un rato! Vas a poder
        disfrutar de la música que más te gusta y de tus podcasts favoritos
        cuando quieras y donde quieras
      </Text>
    </Box>
  );
};

export default ProductDescription;
