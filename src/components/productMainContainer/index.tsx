import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { settings } from "./sliderSettings";
import "./index.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Product } from "../../assets/types/types";

function showItemDetails(item) {
  const sliced = item?.pictures?.slice(0, 10);
  return sliced.map((pic, index) => (
    <Flex
      width="100%"
      height="100%"
      as="div"
      key={pic.secure_url}
      border="none"
      alignItems="center"
      justify="center"
      pt={3}
    >
      <Image
        alt=""
        src={pic.secure_url}
        height="100%"
        maxHeight="250px"
        objectFit="contain"
        margin="0 auto"
      ></Image>
    </Flex>
  ));
}
type props = {
  item: Product;
};

function ProductMainContainer(props: props): ReactJSXElement {
  const [count, setCount] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const sliderEl = useRef(null);
  useEffect(() => {
    if (sliderEl.current)
      setTotalSlides(sliderEl.current.props.children?.length || 0);
  }, [sliderEl.current]);

  const addSetting = {
    beforeChange: (current, next) => setCount(next + 1),
    // customPaging: (i) => <span>{i}</span>,
  };
  const finalSetting = { ...settings, ...addSetting };
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
              <span>{props.item.condition == "new" ? "Nuevo" : "Usado"}</span>
              <span>{props.item.sold_quantity + " Vendidos"}</span>
            </Stack>
            <h1>{props.item.title}</h1>
          </Stack>
        </Stack>
        <Stack direction="column">
          <Container pos="relative">
            <Flex
              direction="row"
              position="absolute"
              left="0"
              zIndex={2}
              backgroundColor="#ededed"
              px={2}
              py={1}
              borderRadius="12px"
              fontSize="12px"
              fontWeight="600"
              gap={1}
            >
              <span>{count}</span>/<span>{totalSlides}</span>
            </Flex>
            <Slider ref={sliderEl} {...finalSetting}>
              {showItemDetails(props.item)}
            </Slider>
          </Container>
          {/* <Flex
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
          </Flex> */}
        </Stack>
      </Stack>
      <Stack p={4} spacing={0}>
        {props.item.original_price ? (
          <Box color="gray.400" lineHeight={1}>
            <del>{"$ " + props.item.original_price}</del>
          </Box>
        ) : null}
        <Box fontSize="32px" fontWeight="300" lineHeight={1}>
          {"$ " + props.item.price}
        </Box>
      </Stack>
    </>
  );
}

export default ProductMainContainer;
