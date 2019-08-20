import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Nav from "./components/Nav";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/details/:pokemonID" component={Details} />
  </BrowserRouter>
);

export default App;
