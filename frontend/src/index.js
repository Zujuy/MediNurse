import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./style/GlobalStyles";
import * as serviceWorker from './serviceWorker'
import MyProvider from "./context"
import Router from './Router'

ReactDOM.render(
  <MyProvider>
    <Router />
    <GlobalStyles/>
  </MyProvider>,
  document.getElementById('root')
)

serviceWorker.register()