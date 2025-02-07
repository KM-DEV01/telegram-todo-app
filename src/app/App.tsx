import "./styles/index.scss";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./providers/router";
import { initialize } from "@/shared/config/initialize";

initialize();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
