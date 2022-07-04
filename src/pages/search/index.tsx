import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import { SearchResultItem } from "../../components/searchResultItem";
import { useSearchResults } from "../../hooks";

function SearchResults() {
  const results = useSearchResults();

  return (
    <>
      {results?.length > 1 ? (
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          autoRows="minmax(300px, auto)"
          gap={6}
          padding={{ base: 2, sm: 4 }}
        >
          {results?.map((item) => (
            <SearchResultItem
              id={item.id}
              thumbnail={item.thumbnail}
              price={item.price}
              title={item.title}
              key={item.id}
            ></SearchResultItem>
          ))}
        </SimpleGrid>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </>
  );
}
export { SearchResults };
