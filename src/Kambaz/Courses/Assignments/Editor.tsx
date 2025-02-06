import { Button, Form, FormControl, InputGroup, Table } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <InputGroup className="mb-3" id="wd-name">
          <FormControl value="A1" />
        </InputGroup>
        <InputGroup className="mb-3" id="wd-name">
          <FormControl as="textarea" value={"The assignment is available online \nSubmit a link to the landing page of your Web application running on Netlify. The landing page should include the following: \n• Your full name and section \n• Links to each of the lab assignments \n• Link to the Kanbas application \n• Links to all relevant source code repositories \nThe Kanbas application should include a link to navigate back to the landing page."} />
        </InputGroup>
        
      <Table className="no-table-border">
        <tbody>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-points">Points</Form.Label>
            </td>
            <td>
              <Form.Control id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
            </td>
            <td>
              <Form.Control as="select" id="wd-group" defaultValue="GroupA">
                <option value="GroupA">ASSIGNMENTS </option>
              </Form.Control>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
            </td>
            <td>
              <Form.Control as="select" id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Percentage">Percentage</option>
              </Form.Control>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-select-many-genre">Submission Type</Form.Label>
            </td>
            <td className="bordered-box">
              <Form.Control as="select" id="wd-display-grade-as" defaultValue="Percentage">
                <option value="Online">Online</option>
              </Form.Control>
              <p className="pt-3"><b>Online Form Options</b></p>
              <Form.Check className="pb-3"type="checkbox" id="wd-text-entry" label="Text Entry" />
              <Form.Check className="pb-3" type="checkbox" id="wd-website-url" label="Website URL" />
              <Form.Check className="pb-3" type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <Form.Check className="pb-3" type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
            </td>
          </tr>
          <br></br>
          <tr>
            <td align="right" valign="top">
              <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
            </td>
            <td className="bordered-box">
              <Form.Label htmlFor="wd-assign-to"><b>Assign to</b></Form.Label>
              <Form.Control id="wd-assign-to" type="text" value="Everyone" />
              <Form.Label className="pt-3" htmlFor="wd-due-date"><b>Due</b></Form.Label>
              <Form.Control type="date" id="wd-due-date" value="2024-05-13" />
              <Form.Label className="pt-3" htmlFor="wd-available-from"><b>Available from</b></Form.Label>
              <Form.Control type="date" id="wd-available-from" value="2024-05-06" />
              <Form.Label className="pt-3" htmlFor="wd-available-until"><b>Until</b></Form.Label>
              <Form.Control type="date" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button variant="secondary">Cancel</Button> <Button variant="danger">Save</Button>
    </div>
  );
}
