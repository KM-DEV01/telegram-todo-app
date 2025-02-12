import { Text } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { Task } from "../../model/task";
import css from "./TaskCard.module.scss";
type Props = {
  task: Task;
};

export const TaskCard: FC<Props> = ({ task }) => {
  return (
    <div className={css.task}>
      <Text style={{ fontSize: "12px" }}>{task.id}</Text>
      <Text>{task.title}</Text>
    </div>
  );
};
