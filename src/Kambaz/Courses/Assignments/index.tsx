import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { LuNotebookPen } from "react-icons/lu";


export default function Assignments() {
  return (
    <div id="wd-assignments">
    <AssignmentControls /> <br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="fs-3" /> 
        <FaCaretDown className="me-2 fs-3" />ASSIGNMENTS <AssignmentsControlButtons />
      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <p className="a-padding"><a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link"><b>A1</b></a></p>
          <BsGripVertical className="me-2 fs-3" /> 
      <LuNotebookPen className="notebook fs-3 me-3"/>   <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am |
      <AssignmentControlButtons />
      <p className="due-date-padding"><b>Due</b> May 13 at 11:59pm | 100 pts</p>
        </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <p className="a-padding"><a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link"><b>A2</b></a></p>
          <BsGripVertical className="me-2 fs-3" /> 
      <LuNotebookPen className="notebook fs-3 me-3"/>   <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am |
      <AssignmentControlButtons />
      <p className="due-date-padding"><b>Due</b> May 20 at 11:59pm | 100 pts</p>
        </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <p className="a-padding"><a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link"><b>A3</b></a></p>
          <BsGripVertical className="me-2 fs-3" /> 
      <LuNotebookPen className="notebook fs-3 me-3"/>   <span className="text-danger">Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am |
      <AssignmentControlButtons />
      <p className="due-date-padding"><b>Due</b> May 27 at 11:59pm | 100 pts</p>
        </ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
  </div>
  );
}