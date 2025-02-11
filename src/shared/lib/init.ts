import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  setDebug,
  init as initSDK,
} from "@telegram-apps/sdk-react";

/**
 * Initializes the application and configures its dependencies.
 */
export const init = (debug: boolean): void => {
  // Set @telegram-apps/sdk-react debug mode.
  setDebug(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error("ERR_NOT_SUPPORTED");
  }

  // Mount all components used in the project.
  backButton.mount();
  initData.restore();

  // Define components-related CSS variables.
  mounting()
    .then(() => {
      viewport.bindCssVars();
      miniApp.bindCssVars();
      themeParams.bindCssVars();
    })
    .catch((e) => {
      console.error(e);
    });
};

const mounting = async () => {
  await miniApp.mount();
  await themeParams.mount();
  await viewport.mount();
};
