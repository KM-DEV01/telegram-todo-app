import { Button, Placeholder } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Placeholder
      action={
        <Button stretched onClick={() => navigate("/")}>
          Home
        </Button>
      }
      header="404"
      description="Page not found"
    />
  );
};
