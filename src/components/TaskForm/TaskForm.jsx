import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/tasksSlice";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";

export const TaskForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // dispatch();
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
