import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import HomeScreen from "../pages/home";
import DetailsScreen from "../pages/productDetail";
import { SearchResults } from "../pages/search";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomeScreen />}></Route>
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="item/:id" element={<DetailsScreen />}></Route>
      </Route>
    </Routes>
  );
}
export { AppRoutes };
