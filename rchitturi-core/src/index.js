import React from "react";
import {hydrate,render} from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { icons } from "./assets/icons";

import { Provider } from "react-redux";
import store from "./stock";

 React.icons = icons;

 const rootElement = document.getElementById('root');
 if (rootElement.hasChildNodes()) {
     hydrate(<Provider store={store}>
      <App />
    </Provider>, rootElement);
 } else {
     render(<Provider store={store}>
      <App />
    </Provider>, rootElement);
 }
serviceWorker.unregister();
