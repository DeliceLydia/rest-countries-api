import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Country from "./components/Country";

const App = () => {
  return (
    <Router>
      <>
      <Header />
      <Route exact path="">
        <Filter />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  );
};

export default App;
