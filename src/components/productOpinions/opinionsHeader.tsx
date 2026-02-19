import { Stack, Text } from "@chakra-ui/react";
import Stars from "../../ui/stars";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useRecoilValue } from "recoil";
import { searchOpinionsState } from "../../atoms";

function OpinionsHeader(props): ReactJSXElement {
  const reviews = useRecoilValue(searchOpinionsState);

  return (
    <Stack p={4}>
      <Text as="h2" fontSize="20px" lineHeight="1">
        Opiniones sobre: {props.item.title}
      </Text>
      <Stack direction="row">
        <Text fontSize="64px" fontWeight="300" as="p">
          {reviews?.rating_average}
        </Text>
        <Stack>
          <Stars prom={reviews?.rating_average}></Stars>
          <Text color="rgba(0,0,0,.55)" fontSize="12px">
            Promedio entre {reviews?.paging?.total} opiniones
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OpinionsHeader;
