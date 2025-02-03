import { ROUTES } from "@/shared/config";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTES.TASK);
  };

  return (
    <div>
      <p>HomePage</p>
      <button onClick={onClick}>To task page</button>
    </div>
  );
};
