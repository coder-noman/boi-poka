import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Routess from "./routes/Routess";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <StrictMode>
        <Routess></Routess>
      </StrictMode>
  </BrowserRouter>
);
