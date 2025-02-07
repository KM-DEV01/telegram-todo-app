import {
  isTMA,
  init,
  viewport,
  postEvent,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";

export const initialize = () => {
  if (isTMA()) {
    console.log("'It's Telegram Mini Apps'");
    init();

    viewport.mount();
    viewport.expand();

    postEvent("web_app_setup_closing_behavior", { need_confirmation: true });

    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    console.log("TWA version: " + params.get("tgWebAppVersion"));

    const { tgWebAppData, tgWebAppThemeParams } = retrieveLaunchParams();

    console.log(tgWebAppData);

    console.log(tgWebAppThemeParams);

    return true;
  }

  return false;
};
