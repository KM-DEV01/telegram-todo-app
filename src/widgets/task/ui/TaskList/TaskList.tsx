import { useGetTasksQuery } from "@/entities/task/api/task";
import { TaskCard } from "@/entities/task/ui/TaskCard/TaskCard";
import { List } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import css from "./TaskList.module.scss";

export const TaskList: FC = () => {
  const { data = [] } = useGetTasksQuery();

  console.log(data);

  return (
    <List className={css.tasks} style={{ color: "var(--tgui--green)" }}>
      {data.map((task) => (
        <TaskCard task={task} />
      ))}
    </List>
  );
};
