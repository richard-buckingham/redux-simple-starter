import React from "react";
import ReactDom from "react-dom";

// create a new component. this component should produce some html
const App = () => {
  return <div>Hi !</div>;
};

// take this component's generated html, and put it onto the page
ReactDom.render(<App />, document.querySelector(".container"));
