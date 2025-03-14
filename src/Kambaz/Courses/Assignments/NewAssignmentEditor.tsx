import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Form, Button, Table } from "react-bootstrap";
import { addAssignment } from "./reducer";

export default function NewAssignmentEditor() {
  const { cid } = useParams();
  const [assignment, setAssignment] = useState({
    name: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(addAssignment(assignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.name}
            onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="assignmentDescription">
          <Form.Control
            as="textarea"
            rows={3}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>
        <br></br>
        
        <Table className="no-table-border">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-points">Points</Form.Label>
            </td>
            <td>
            <Form.Control
            type="number"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
            </td>
            <td className="bordered-box">
              <Form.Label className="pt-3" htmlFor="wd-due-date"><b>Due</b></Form.Label>
              <Form.Control
            type="date"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />              <Form.Label className="pt-3" htmlFor="wd-available-from"><b>Available from</b></Form.Label>
            <Form.Control
            type="date"
            value={assignment.availableFrom}
            onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
          />              
          <Form.Label className="pt-3" htmlFor="wd-available-until"><b>Until</b></Form.Label>
            <Form.Control
            type="date"
            value={assignment.availableUntil}
            onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
          />
            </td>
          </tr>
        </tbody>
      </Table>

        <Button variant="secondary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="danger" onClick={handleCancel} className="ms-2">
          Cancel
        </Button>
      </Form>
    </div>
  );
}
