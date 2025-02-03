import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { HomePage } from "@/pages/HomePage";
import { TaskPage } from "@/pages/TaskPage";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TASK} element={<TaskPage />} />
      </Routes>
    </HashRouter>
  );
};
