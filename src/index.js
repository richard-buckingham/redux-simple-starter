import React from "react";
import ReactDom from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBnE_nY5cJoe-IY6dgjy2pIx-3IhH1Xy0Y";

// create a new component. this component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated html, and put it onto the page
ReactDom.render(<App />, document.querySelector(".container"));
