import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/reducer";
import coursesReducer from "../Courses/reducer";
import accountReducer from "../Account/reducer";
import enrollmentReducer from "../Courses/enrollmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    coursesReducer,
    accountReducer,
    enrollmentReducer,
  },
});

export default store;