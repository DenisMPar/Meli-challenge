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

  const mockItems = {
    MLA1234567890: {
      id: "MLA1234567890",
      title: "Apple iPhone 15 128GB - Negro",
      price: 1299999,
      original_price: 1499999,
      currency_id: "ARS",
      condition: "new",
      sold_quantity: 1250,
      available_quantity: 48,
      pictures: [
        { id: "1", url: "https://http2.mlstatic.com/D_NQ_NP_784557-MLA95493924244_102025-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_784557-MLA95493924244_102025-O.webp" },
        { id: "2", url: "https://http2.mlstatic.com/D_NQ_NP_656795-MLA95933404611_102025-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_656795-MLA95933404611_102025-O.webp" },
      ],
    },
    MLA9876543210: {
      id: "MLA9876543210",
      title: "Samsung Galaxy S24 Ultra 256GB",
      price: 1899999,
      original_price: 2099999,
      currency_id: "ARS",
      condition: "new",
      sold_quantity: 870,
      available_quantity: 23,
      pictures: [
        { id: "1", url: "https://http2.mlstatic.com/D_NQ_NP_928817-MLA99445918686_112025-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_928817-MLA99445918686_112025-O.webp" },
        { id: "2", url: "https://http2.mlstatic.com/D_NQ_NP_755855-MLA77739817627_072024-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_755855-MLA77739817627_072024-O.webp" },
      ],
    },
    MLA1122334455: {
      id: "MLA1122334455",
      title: "Motorola Edge 40 Neo 256GB",
      price: 549999,
      currency_id: "ARS",
      condition: "new",
      sold_quantity: 430,
      available_quantity: 15,
      pictures: [
        { id: "1", url: "https://http2.mlstatic.com/D_NQ_NP_950923-MLA100042427767_122025-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_950923-MLA100042427767_122025-O.webp" },
        { id: "2", url: "https://http2.mlstatic.com/D_NQ_NP_931407-MLU74432131748_022024-O.webp", secure_url: "https://http2.mlstatic.com/D_NQ_NP_931407-MLU74432131748_022024-O.webp" },
      ],
    },
  };

  useEffect(() => {
    setResults(mockItems[params.id] || null);
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
