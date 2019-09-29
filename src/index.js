import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/index";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// 1. create a redux store and a provider for our app
// 2. start hooking up components to the state they were receiving
//    beforehand via props to receive their state from the redux store
// 3. crete action creators to update our store and give them to our components
