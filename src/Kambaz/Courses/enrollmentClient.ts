/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchEnrollments = async (userId: string) => {
    const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/current/courses`);
    return data.map((course: any) => ({
        _id: `${course._id}-enrollment`,
        user: userId,
        course: course._id
    }));
};

export const enrollInCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/users/current/courses/${courseId}/enroll`);
    return data;
};

export const unenrollFromCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/users/current/courses/${courseId}`);
    return data;
};