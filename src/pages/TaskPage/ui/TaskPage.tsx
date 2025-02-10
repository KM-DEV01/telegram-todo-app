import { ROUTES } from "@/shared/const/routes";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const TaskPage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <p>TaskPage</p>
      <button onClick={onClick}>To home page</button>
    </div>
  );
};
