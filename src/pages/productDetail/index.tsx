import React, { useEffect, useState } from "react";

import ProductMainContainer from "../../components/productMainContainer";
import ProductAside from "../../components/productAside";
import ProductDescription from "../../components/productDescription";
import { Stack, StackDivider } from "@chakra-ui/react";
import ProductQuestion from "../../components/productQuestions";
import ProductOpinion from "../../components/productOpinions";
import { useParams } from "react-router-dom";

const DetailsScreen: React.FC = () => {
  const [results, setResults] = useState({});
  const params = useParams();

  async function pullResults(id) {
    const response = await fetch("https://api.mercadolibre.com/items/" + id);
    const json = await response.json();
    console.log(json);

    setResults(json);
    console.log(results);
  }

  useEffect(() => {
    pullResults(params.id);
  }, [params]);
  return (
    <div>
      <Stack divider={<StackDivider />} spacing={10} bg="#fff">
        <div>
          <ProductMainContainer />
          <ProductAside />
        </div>
        <ProductDescription />
        <ProductQuestion />
        <ProductOpinion />
      </Stack>
    </div>
  );
};

export default DetailsScreen;
