import { searchQueryAtom, searchResultsState } from "../atoms";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selector, useRecoilState, useRecoilValue } from "recoil";

export function useSearchResults() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
  useEffect(() => {
    setSearchQuery(params.query);
  }, [params.query]);
  const searchResults = useRecoilValue(searchResultsState);
  return searchResults;
}

export async function useGetItems(id) {
  const data = await fetch("https://api.mercadolibre.com/items/" + id);
}
