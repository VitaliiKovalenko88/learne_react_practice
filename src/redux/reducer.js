import { statusFilters } from "./constants";
import { addTask, deleteTask, setStatusFilter, toggleCompleted } from "./actions";
import { createReducer } from "@reduxjs/toolkit";




// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

export const tasksReducer = createReducer(tasksInitialState, builder => {
  console.log(builder);
  builder
    .addCase(addTask, (state, action) => { state.push(action.payload) })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    })
});

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = {
//   tasks: tasksReducer,
//   filters: filtersReducer,
// };
export const filtersReducer = createReducer(filtersInitialState, builder => builder.addCase(setStatusFilter, (state, action) => {
  state.status = action.payload
}));