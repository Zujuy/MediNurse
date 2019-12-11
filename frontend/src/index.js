import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyles from "./style/GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Router />
  </>,
  document.getElementById("root")
);