/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useSelector } from "react-redux";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-assignments">
    {currentUser.role === 'FACULTY' && <><AssignmentControls /><br /><br /><br /></>}
  <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-3" /> 
            <FaCaretDown className="me-2 fs-3" /> ASSIGNMENTS <AssignmentsControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
              <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                <p className="a-padding">
                  <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                    <b>{assignment.title}</b>
                  </a>
                </p>
                <BsGripVertical className="me-2 fs-3" /> 
                <LuNotebookPen className="notebook fs-3 me-3"/> 
                <span className="text-danger">Multiple Modules </span> | 
                <b> Not available until</b> {assignment.releaseDate} at 12:00am |
                {currentUser.role === 'FACULTY' && <AssignmentControlButtons assignmentId={assignment._id} />}
                <p className="due-date-padding">
                  <b>Due</b> {assignment.dueDate} at 11:59pm | {assignment.points} pts
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
  </div>
  );
}