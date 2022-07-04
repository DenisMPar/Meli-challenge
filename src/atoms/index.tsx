import { atom, selector } from "recoil";

export const searchQueryAtom = atom({
  key: "searchQueryAtom",
  default: "",
});
export const itemIdAtom = atom({
  key: "itemIdAtom",
  default: "",
});

export const searchResultsState = selector({
  key: "searchResultsState",
  get: async ({ get }) => {
    const query = get(searchQueryAtom);
    if (query != "") {
      const response = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=$" + query
      );
      const json = await response.json();
      return json.results;
    }
  },
});
export const searchQuestionsState = selector({
  key: "searchQuestionsState",
  get: async ({ get }) => {
    const id = get(itemIdAtom);
    if (id != "") {
      const response = await fetch(
        "https://api.mercadolibre.com/questions/search?item=" +
          id +
          "&api_version=4&limit=8"
      );

      const json = await response.json();
      return json.questions;
    }
  },
});
export const searchOpinionsState = selector({
  key: "searchOpinionsState",
  get: async ({ get }) => {
    const id = get(itemIdAtom);
    if (id != "") {
      const response = await fetch(
        "https://api.mercadolibre.com/reviews/item/" + id + "?limit=10"
      );

      const json = await response.json();
      return json;
    }
  },
});
