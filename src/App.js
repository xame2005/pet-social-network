import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { GlobalStyle } from "./GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  );
}
