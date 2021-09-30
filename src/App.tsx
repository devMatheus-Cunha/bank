import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import PageInfo from "./view/PageInfo";

// contexts
import GetIdProvider from "./contexts/getIdProvider";

// global styles
import { GlobalStyle } from "./assets/styles/global";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <GetIdProvider>
        <Switch>
          <Route path="/" component={PageInfo} />
          <GlobalStyle />
        </Switch>
      </GetIdProvider>
    </BrowserRouter>
  );
}
export default App;
