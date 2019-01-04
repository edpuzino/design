import React from "react";
import ReactDOM from "react-dom";
import "./style/design.scss";
import "./style/style.css";
import "./style/modal.css";

import App from "./app.js";

function Main() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);