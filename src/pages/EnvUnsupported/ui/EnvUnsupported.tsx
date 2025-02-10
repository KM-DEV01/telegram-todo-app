import { Placeholder, AppRoot } from "@telegram-apps/telegram-ui";
import {
  retrieveLaunchParams,
  isColorDark,
  isRGB,
} from "@telegram-apps/sdk-react";
import { FC, useMemo } from "react";

export const EnvUnsupported: FC = () => {
  const [platform, isDark] = useMemo(() => {
    let platform = "base";
    let isDark = false;

    try {
      const { tgWebAppPlatform, tgWebAppThemeParams } = retrieveLaunchParams();
      const bgColor = tgWebAppThemeParams.bg_color;
      platform = tgWebAppPlatform;
      isDark = bgColor && isRGB(bgColor) ? isColorDark(bgColor) : false;
    } catch {
      /* empty */
    }

    return [platform, isDark];
  }, []);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(platform) ? "ios" : "base"}
    >
      <Placeholder
        header="Oops"
        description="You are using too old Telegram client to run this application"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    </AppRoot>
  );
};
