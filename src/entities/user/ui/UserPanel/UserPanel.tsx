import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { FC } from "react";

export const UserPanel: FC = () => {
  const { tgWebAppData } = retrieveLaunchParams();

  const fullName = `${tgWebAppData?.user?.first_name ?? "Имя"} ${
    tgWebAppData?.user?.last_name ?? "Фамилия"
  }`;

  console.log(fullName);

  return <div>test</div>;
};
