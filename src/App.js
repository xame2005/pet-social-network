import React from "react";
import { ListOfCategories } from "./components/ListOfCategories/index";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/index";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}
