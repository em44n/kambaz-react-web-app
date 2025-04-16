/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

const api = axios.create({
  withCredentials: true
});

export const fetchAllAssignments = async () => {
  const { data } = await api.get(ASSIGNMENTS_API);
  return data;
};

export const fetchAssignment = async (assignmentId: string) => {
  const { data } = await api.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await api.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await api.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return data;
};
      