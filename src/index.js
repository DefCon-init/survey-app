import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { getPersistor } from '@rematch/persist'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/es/integration/react'
import store from "./store";
import Routes from "./routes";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
