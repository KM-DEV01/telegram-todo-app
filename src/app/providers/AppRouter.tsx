import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { TaskPage } from "@/pages/TaskPage";
import { ROUTES } from "@/shared/const/routes";
import { HashRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TASK} element={<TaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};
