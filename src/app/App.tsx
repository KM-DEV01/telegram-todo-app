import { init, isTMA, viewport } from "@telegram-apps/sdk-react";
import "./styles/index.scss";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./providers/router";

const initialize = () => {
  if (isTMA()) {
    console.log("'It's Telegram Mini Apps'");
    init();

    viewport.mount();
    viewport.expand();
  }
};

initialize();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
