import { UserPanel } from "@/entities/user";
import { ROUTES } from "@/shared/const/routes";
import { TaskList } from "@/widgets/task";
import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <UserPanel />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 24px",
          gap: "24px",
        }}
      >
        <TaskList />
        <Button onClick={() => navigate(ROUTES.TASK)}>To task page</Button>
      </div>
    </div>
  );
};
