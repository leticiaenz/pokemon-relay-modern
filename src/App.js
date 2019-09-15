import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Details from "./pages/Details";
import New from "./pages/New";
import Nav from "./components/Nav";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/details/:pokemonID" component={Details} />
    <Route path="/new" component={New} />
  </BrowserRouter>
);

export default App;
