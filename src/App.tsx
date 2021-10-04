import React from "react";
import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// view
import Auth from "./view/auth";
import PageInfo from "./view/home";
import Create from "./view/auth/Create";

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
          <Route path="/" exact component={Auth} />
          <Route path="/create" exact component={Create} />
          <Route path="/home/:id" component={PageInfo} />
          <GlobalStyle />
        </Switch>
      </GetIdProvider>
    </BrowserRouter>
  );
}
export default App;
