import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";

const { active, completed } = statusFilters;

const getVisibleTasks = (tasks, statusFilters) => {
  switch (statusFilters) {
    case active:
      return tasks.filter(({ completed }) => completed);

    case completed:
      return tasks.filter(({ completed }) => !completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
