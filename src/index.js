import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { firebase, FieldValue } from "./lib/firebase";
import App from "./App";
import FirebaseContext from "./context/firebase";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  rootElement
);

// NB : In context we need
//to pass value and be carefull to avoid element to re-render
