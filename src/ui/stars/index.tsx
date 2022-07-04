import { Box } from "@chakra-ui/react";
import React from "react";
import "./index.css";

const ProductQuestion: React.FC = () => {
  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{ width: "30" }}></div>
    </div>
  );
};

export default ProductQuestion;
