import React, { useEffect, useState } from "react";

import ProductMainContainer from "../../components/productMainContainer";
import ProductAside from "../../components/productAside";
import ProductDescription from "../../components/productDescription";
import { Stack, StackDivider } from "@chakra-ui/react";
import ProductQuestion from "../../components/productQuestions";
import ProductOpinion from "../../components/productOpinions";
import { useParams } from "react-router-dom";
import { useSearchQuestions } from "../../hooks";

const DetailsScreen: React.FC = () => {
  const [results, setResults] = useState(null);
  const params = useParams();
  const questions = useSearchQuestions();

  async function pullResults(id) {
    const response = await fetch("https://api.mercadolibre.com/items/" + id);
    const json = await response.json();
    setResults(json);
  }

  useEffect(() => {
    pullResults(params.id);
  }, [params]);
  return (
    <div>
      {results ? (
        <Stack
          divider={<StackDivider />}
          spacing={10}
          bg="#fff"
          maxW="1100px"
          m="0 auto"
        >
          <Stack direction={{ base: "column", lg: "row" }} p={{ lg: 4 }}>
            <ProductMainContainer item={results}></ProductMainContainer>
            <ProductAside item={results} />
          </Stack>
          <ProductDescription />
          <ProductQuestion question={questions} />
          <ProductOpinion item={results} />
        </Stack>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );
};

export default DetailsScreen;
