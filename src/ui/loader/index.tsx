import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Spinner as Loader } from "@chakra-ui/react";
import "./index.css";

function Spinner(): ReactJSXElement {
  return (
    <div className="container">
      <Loader width={"100px"} height={"100px"}></Loader>
    </div>
  );
}

export default Spinner;
