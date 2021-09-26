import React from "react";

// components
import Header from "./components/Header";
import PageInfo from "./view/PageInfo";

// global styles
import { GlobalStyle } from "./assets/styles/global";


function App() {
  return (
    <>
      <Header />
      <PageInfo />
      <GlobalStyle />
    </>
  );
}

export default App;
