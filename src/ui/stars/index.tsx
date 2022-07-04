import { Box } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import "./index.css";

type props = {
  rate?: number;
  prom?: number;
};

function Stars(props: props): ReactJSXElement {
  const calcRate = (rate) => {
    return (rate * 100) / 10;
  };
  const calcProm = (prom) => {
    return (prom * 100) / 5;
  };
  const rate = calcRate(props.rate);
  const prom = calcProm(props.prom);

  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{ width: `${rate | prom}%` }}></div>
    </div>
  );
}

export default Stars;
