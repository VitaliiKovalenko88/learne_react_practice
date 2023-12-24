import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import {
  selectStatusFilter,
  selectTasks,
  selectVisibleTasks,
} from "../../redux/selectors";

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.length &&
        tasks.map((task) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        ))}
    </ul>
  );
};
