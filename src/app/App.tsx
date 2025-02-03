import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { init, miniApp } from "@telegram-apps/sdk";
import { AppRouter } from "./providers/router.tsx";

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log("miniApp is ready");
    }
  } catch (error) {
    console.error("error initializing Telegram SDK:", error);
  }
};

initializeTelegramSDK();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
