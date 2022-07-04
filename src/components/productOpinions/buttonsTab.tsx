import { Flex, Button } from "@chakra-ui/react";
import React from "react";

import Stars from "../../ui/stars";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";

const ButtonTabs: React.FC = () => {
  const button = useRef(null);
  useEffect(() => {
    button.current.focus({ preventScroll: true });
  }, []);
  return (
    <Flex>
      <Button
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
};

export default ButtonTabs;
