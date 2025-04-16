import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const initialState: { enrollments: Enrollment[] } = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload.filter(
        (item: any) => 
          typeof item === 'object' && 
          'user' in item && 
          'course' in item
      );
    },
    enrollCourse: (state, action: PayloadAction<Enrollment>) => {
      const isEnrolled = state.enrollments.some(
        (enrollment) =>
          enrollment.user === action.payload.user &&
          enrollment.course === action.payload.course
      );
      if (!isEnrolled) {
        state.enrollments.push(action.payload);
      }
    },
    unenrollCourse: (state, action: PayloadAction<{ user: string; course: string }>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === action.payload.user && enrollment.course === action.payload.course)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
