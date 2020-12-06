import React from "react";
import {hydrate,render} from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import store from "./stock";

React.icons = icons;
 const rootElement = document.getElementById('root');
 if (rootElement.hasChildNodes()) {
     hydrate(
      <BrowserRouter>
      <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>, rootElement);
 } else {
     render(
      <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>, rootElement);
 }
serviceWorker.unregister();
