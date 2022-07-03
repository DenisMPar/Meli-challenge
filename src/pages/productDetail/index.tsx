import React from "react";

import ProductMainContainer from "../../components/productMainContainerMovil";
import ProductAside from "../../components/productAside";

const DetailsScreen: React.FC = () => {
  return (
    <div>
      <ProductMainContainer />
      <ProductAside />
    </div>
  );
};

export default DetailsScreen;
