/* eslint-disable @typescript-eslint/no-explicit-any */
import Modules from "./Modules/index.tsx";
import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table.tsx";
import NewAssignmentEditor from "./Assignments/NewAssignmentEditor.tsx";
import { useEffect, useState } from "react";
import * as client from "../Account/client";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
   const [users, setUsers] = useState<any[]>([]);
   const { uid } = useParams();
   const fetchUsers = async () => {
      const users = await client.findAllUsers();
      setUsers(users);
    };
    useEffect(() => {
      fetchUsers();
    }, [uid]);

    return (
      <div id="wd-courses">
        <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]} </h2> <hr />
      <div className="d-flex">
    <div className="d-none d-md-block">
            <CourseNavigation />
            </div>
    <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Assignments/Editor" element={<NewAssignmentEditor />} />
              <Route path="People" element={<PeopleTable users={users} />} />
            </Routes>
            </div></div>
      </div>
  );}
  