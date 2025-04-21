/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const fetchEnrollments = async (userId: string) => {
    const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/current/courses`);
    return data.map((course: any) => ({
        _id: `${course._id}-enrollment`,
        user: userId,
        course: course._id
    }));
};

export const enrollIntoCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
   };

   export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
   };
   