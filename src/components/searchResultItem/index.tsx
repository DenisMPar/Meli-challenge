import {
  Box,
  Container,
  GridItem,
  Image,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
function SearchResultItem(props) {
  let navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/item/" + props.id);
  }
  return (
    <GridItem
      background="white"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      width="100%"
      height="100%"
    >
      <Box onClick={handleClick} height="100%" cursor="pointer">
        <Stack width="100%" height="100%" divider={<StackDivider />}>
          <Container
            width="100%"
            height="100%"
            maxHeight={{ base: "250px" }}
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            <Image objectFit="scale-down" src={props.thumbnail} margin={0} />
          </Container>
          <Stack minH={{ md: "104px" }} padding={3}>
            <div className="container-el-name">
              <h2 className="name-prod">{props.title}</h2>
            </div>
            <div className="container-element-price">
              <span className="price">${props.price}</span>
            </div>
          </Stack>
        </Stack>
      </Box>
    </GridItem>
  );
}

export { SearchResultItem };
