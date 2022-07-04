import { atom, selector } from "recoil";

export const searchQueryAtom = atom({
  key: "searchQueryAtom",
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
