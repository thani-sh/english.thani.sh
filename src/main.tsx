import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Alphabet } from "./components/Alphabet/Alphabet";
import { Version } from "./components/Version/Version";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Alphabet />
    <Version />
  </StrictMode>
);
