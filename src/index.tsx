import React from "react";
import "./style.css";
import ReactDOM from "react-dom";
import * as sw from "./serviceWorker";
import { Alphabet } from './components/Alphabet/Alphabet';
import { Version } from './components/Version/Version';

ReactDOM.render(
  <>
    <Alphabet />
    <Version />
  </>,
  document.getElementById("root")
);

sw.register();
