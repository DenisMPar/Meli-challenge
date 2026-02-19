import { Flex, Button } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import "./index.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Opinion from "./opinions";

function ButtonTabs(props): ReactJSXElement {
  const button = useRef(null);
  const toggle = props.toggle;
  useEffect(() => {
    button.current.focus({ preventScroll: true });
  }, []);

  function showPositiveOpinions(reviews) {
    const filtered = reviews?.filter((item) => item.rate >= 3);
    const res = filtered.map((item) => {
      if (item.rate >= 3) {
        return <Opinion key={item.id} item={item}></Opinion>;
      }
    });
    toggle(res);
  }
  function showNegativeOpinions(reviews) {
    const filtered = reviews?.filter((item) => item.rate < 3);
    const res = filtered.map((item) => {
      if (item.rate < 3) {
        return <Opinion key={item.id} item={item}></Opinion>;
      }
    });

    toggle(res);
  }
  function showAllOpinions(reviews) {
    const res = reviews?.map((item) => {
      return <Opinion key={item.id} item={item}></Opinion>;
    });
    toggle(res);
  }

  return (
    <Flex>
      <Button
        onClick={() => {
          showAllOpinions(props.reviews);
        }}
        _focus={{
          borderBottom: "solid 3px #3483fa",
          backgroundColor: "#fff",
          outline: "none",
          boxShadow: "none",
        }}
        bg="#fff"
        borderRadius={0}
        width="100%"
        ref={button}
      >
        Todas
      </Button>
      <Button
        onClick={() => {
          showPositiveOpinions(props.reviews);
        }}
        _focus={{
          borderBottom: "solid 3px #3483fa",
          backgroundColor: "#fff",
        }}
        bg="#fff"
        borderRadius={0}
        width="100%"
      >
        Positivas
      </Button>
      <Button
        onClick={() => {
          showNegativeOpinions(props.reviews);
        }}
        _focus={{
          borderBottom: "solid 3px #3483fa",
          backgroundColor: "#fff",
        }}
        bg="#fff"
        borderRadius={0}
        width="100%"
      >
        Negativas
      </Button>
    </Flex>
  );
}

export default ButtonTabs;
