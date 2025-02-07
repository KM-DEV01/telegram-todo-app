import { ROUTES } from "@/shared/config/routes";
import { postEvent } from "@telegram-apps/sdk-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(ROUTES.TASK);
  };

  const onClose = () => {
    postEvent("web_app_close");
  };

  return (
    <div>
      <p>HomePage</p>
      <button onClick={onClick}>To task page</button>
      <button onClick={onClose}>close app</button>
    </div>
  );
};
