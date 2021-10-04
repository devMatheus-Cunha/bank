import React from "react";

// container
import UserContent from "../../container/UserContent";

// component
import Header from "../../components/Header";
import { GlobalStyle } from "../../assets/styles/global";

const PageInfo = () => {
  return (
    <>
      <Header />
      <UserContent />
      <GlobalStyle />
    </>
  );
};

export default PageInfo;
