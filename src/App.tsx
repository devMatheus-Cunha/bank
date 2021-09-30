import React from "react";
import Modal from "react-modal";

// components
import Header from "./components/Header";
import PageInfo from "./view/PageInfo";

// global styles
import { GlobalStyle } from "./assets/styles/global";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Header />
      <PageInfo />
      <GlobalStyle />
    </>
  );
}
console.log("Bernardo aqui")
export default App;
