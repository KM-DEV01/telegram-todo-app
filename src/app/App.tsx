import { init } from "@/shared/lib/init";
import "@telegram-apps/telegram-ui/dist/styles.css";
import "./styles/index.scss";

import { EnvUnsupported } from "@/pages/EnvUnsupportedPage";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AppRouter } from "./providers/AppRouter";
import { store } from "./providers/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);

try {
  // Configure all application dependencies.
  init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <AppRoot>
          <AppRouter />
        </AppRoot>
      </Provider>
    </StrictMode>,
  );
} catch (e) {
  console.error(e);
  root.render(<EnvUnsupported />);
}
