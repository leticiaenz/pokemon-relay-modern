import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route path="/" exact component={Home} />
    <Route path="/details/:pokemonID" component={Details} />
  </BrowserRouter>
);

export default App;
