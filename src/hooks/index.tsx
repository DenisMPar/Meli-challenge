import {
  itemIdAtom,
  searchQueryAtom,
  searchQuestionsState,
  searchResultsState,
} from "../atoms";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

export function useSearchResults() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
  useEffect(() => {
    setSearchQuery(params.query);
  }, [params.query]);
  const searchResults = useRecoilValue(searchResultsState);
  return searchResults;
}

export function useSearchQuestions() {
  const params = useParams();
  const [id, setItemId] = useRecoilState(itemIdAtom);
  useEffect(() => {
    setItemId(params.id);
  }, [params.id]);
  const searchResults = useRecoilValue(searchQuestionsState);
  return searchResults;
}
