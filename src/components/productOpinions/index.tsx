import {
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { FcSearch } from "react-icons/fc";
import Opinion from "./opinions";
import ButtonTabs from "./buttonsTab";
import OpinionsHeader from "./opinionsHeader";
import { useRecoilValue } from "recoil";
import { searchOpinionsState } from "../../atoms";

function showOpinions(reviews) {
  const res = reviews.map((item) => {
    return <Opinion key={item.id} item={item}></Opinion>;
  });

  return res;
}

function ProductOpinion(props){
  const reviews = useRecoilValue(searchOpinionsState);

  const [reviewsState, setReviewsState] = useState(
    showOpinions(reviews.reviews || [])
  );

  return (
    <Stack
      px={{ sm: 8 }}
      divider={<StackDivider></StackDivider>}
      spacing={0}
      mb={6}
      maxW="769px"
    >
      <Stack>
        <OpinionsHeader item={props.item}></OpinionsHeader>
        <ButtonTabs
          toggle={setReviewsState}
          reviews={reviews?.reviews}
        ></ButtonTabs>
      </Stack>
      <Stack p={4} spacing={2}>
        {reviewsState[0] ? (
          reviewsState
        ) : (
          <Stack minHeight="150px" p={{ md: 8 }} align="center">
            <Text textAlign="center" fontSize="20px">
              No hay opiniones
            </Text>
            <Icon
              as={FcSearch}
              height="100%"
              width="100%"
              maxW="400px"
              p={10}
            ></Icon>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default ProductOpinion;
