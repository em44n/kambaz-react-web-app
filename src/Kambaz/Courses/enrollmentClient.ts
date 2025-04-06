import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export const fetchEnrollments = async () => {
    const { data } = await axios.get(`${REMOTE_SERVER}/api/users/current/courses`);
    return data;
  };

export const enrollInCourse = async (courseId: string) => {
    const { data } = await axios.post(`${REMOTE_SERVER}/api/users/current/courses/${courseId}/enroll`);
    return data;
  };

export const unenrollFromCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${REMOTE_SERVER}/api/users/current/courses/${courseId}`);
  return data;
};