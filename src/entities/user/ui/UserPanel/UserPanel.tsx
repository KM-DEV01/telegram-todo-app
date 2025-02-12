import { RootState } from "@/app/providers/store";
import { setUser } from "@/entities/user/model/slice";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { Avatar, Cell } from "@telegram-apps/telegram-ui";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserPanel: FC = () => {
  const { tgWebAppData } = retrieveLaunchParams();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        id: tgWebAppData?.user?.id ?? 0,
        first_name: tgWebAppData?.user?.first_name ?? "Имя",
        last_name: tgWebAppData?.user?.last_name ?? "Фамилия",
      }),
    );
  }, [tgWebAppData?.user?.id]);

  return (
    <Cell
      className="user-panel"
      before={
        <Avatar
          size={48}
          acronym={user.first_name[0] + user.last_name[0]}
          src={tgWebAppData?.user?.photo_url}
        />
      }
      interactiveAnimation="opacity"
      description="This's your profile"
    >
      {user.first_name} {user.last_name}
    </Cell>
  );
};
