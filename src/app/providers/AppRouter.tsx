import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/shared/const/routes";
import { HomePage } from "@/pages/HomePage";
import { TaskPage } from "@/pages/TaskPage";
import { AppRoot } from "@telegram-apps/telegram-ui";

export const AppRouter = () => {
  return (
    <AppRoot>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.TASK} element={<TaskPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AppRoot>
  );
};
