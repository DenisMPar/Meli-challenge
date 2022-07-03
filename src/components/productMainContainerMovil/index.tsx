import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { settings } from "./sliderSettings";
import "./index.css";

function showItemDetails(item) {
  return (
    <>
      {item.pictures.map((pic) => (
        <div key={pic.secure_url} className="item-details__image-container">
          <img className="item-details__image" src={pic.secure_url} />
        </div>
      ))}
    </>
  );
}

const ProductMainContainer: React.FC = () => {
  return (
    <>
      <Stack direction="column" p={4}>
        <Stack direction="column">
          <Stack direction="column">
            <Stack
              color="gray.400"
              direction="row"
              divider={<StackDivider />}
              fontSize="12px"
            >
              <span>Nuevo</span>
              <span>500 vendidos</span>
            </Stack>
            <h1>Auriculares inalámbricos Noga Aris NG-BT469 rojo y negro</h1>
          </Stack>
        </Stack>
        <Stack direction="column">
          <Container>
            <Slider {...settings}>
              {/* <Box objectFit="contain">
                <img
                  alt=""
                  src="https://http2.mlstatic.com/D_NQ_NP_827646-MLA42763680088_072020-O.webp"
                />
              </Box>
              <Box>
                <img
                  alt=""
                  src="https://http2.mlstatic.com/D_NQ_NP_827646-MLA42763680088_072020-O.webp"
                />
              </Box> */}
            </Slider>
          </Container>
          <Flex
            bg="#f5f5f5"
            borderRadius={8}
            direction="column"
            p={4}
            position="relative"
          >
            <span style={{ lineHeight: "1" }}>Color:</span>
            <span style={{ lineHeight: "1" }}>Rojo</span>
            <Image
              height="32px"
              pos="absolute"
              right={3}
              src="https://http2.mlstatic.com/D_Q_NP_827646-MLA42763680088_072020-R.webp"
              width="32px"
            />
          </Flex>
        </Stack>
      </Stack>
      <Stack p={4} spacing={0}>
        <Box color="gray.400" lineHeight={1}>
          <del>$6000</del>
        </Box>
        <Box fontSize="32px" fontWeight="300" lineHeight={1}>
          $5000
        </Box>
      </Stack>
    </>
  );
};

export default ProductMainContainer;
