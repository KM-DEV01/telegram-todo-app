import { init } from "@/shared/lib/init";
import "./styles/index.scss";
import "@telegram-apps/telegram-ui/dist/styles.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { AppRouter } from "./providers/AppRouter";
import { EnvUnsupported } from "@/pages/EnvUnsupported";

const root = ReactDOM.createRoot(document.getElementById("root")!);

try {
  // Configure all application dependencies.
  init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

  root.render(
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
} catch (e) {
  console.error(e);
  root.render(<EnvUnsupported />);
}
