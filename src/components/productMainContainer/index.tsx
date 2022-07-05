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
import { movilSettings, WebSettings } from "./sliderSettings";
import "./index.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Product } from "../../assets/types/types";

function showItemPictures(item, setter, thumb?) {
  const sliced = item?.pictures?.slice(0, 10);
  useEffect(() => {
    setter(sliced[0].secure_url);
  }, []);
  return sliced.map((pic, index) => (
    <Flex
      width="100%"
      height="100%"
      as={`${thumb ? "button" : "div"}`}
      key={pic.secure_url}
      border={`${thumb ? "solid 1px rgba(0,0,0,.1)" : "none"}`}
      alignItems="center"
      justify="center"
      pt={`${thumb ? 0 : 3}`}
      _focus={{ border: "solid 2px #3483fa" }}
      cursor={`${thumb ? "pointer" : ""}`}
    >
      <Image
        onClick={() => {
          setter(pic.secure_url);
        }}
        alt=""
        src={pic.secure_url}
        height={`${thumb ? "44px" : "100%"}`}
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
  const [imgUrl, setImgUrl] = useState(null);

  function setUrl(url) {
    setImgUrl(url);
  }

  const sliderEl = useRef(null);
  useEffect(() => {
    if (sliderEl.current)
      setTotalSlides(sliderEl.current.props.children?.length || 0);
  }, [sliderEl.current]);

  const addMovilSetting = {
    beforeChange: (current, next) => setCount(next + 1),
  };
  const finalSetting = { ...movilSettings, ...addMovilSetting };
  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row-reverse" }}
        align={{ lg: "center" }}
        p={4}
        width={{ lg: "100%" }}
        display={{ lg: "none" }}
      >
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
        <Stack direction="row">
          <Container pos="relative" width="100%">
            <Flex
              display={{ lg: "none" }}
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
              {showItemPictures(props.item, setUrl)}
            </Slider>
          </Container>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        display={{ base: "none", lg: "flex" }}
        width="100%"
      >
        <Stack width="44px" maxH="100px">
          {showItemPictures(props.item, setUrl, true)}
        </Stack>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={imgUrl} margin="20px auto"></Image>
        </Box>
      </Stack>
      {/* <Stack p={4} spacing={0}>
        {props.item.original_price ? (
          <Box color="gray.400" lineHeight={1}>
            <del>{"$ " + props.item.original_price}</del>
          </Box>
        ) : null}
        <Box fontSize="32px" fontWeight="300" lineHeight={1}>
          {"$ " + props.item.price}
        </Box>
      </Stack> */}
    </>
  );
}

export default ProductMainContainer;
