import { FaPlus } from "react-icons/fa6";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
 return (
  <div id="wd-modules-controls" className="d-flex justify-content-between">
  <InputGroup className="me-2" style={{ maxWidth: "300px" }}>
    <InputGroup.Text>
      <FaSearch />
    </InputGroup.Text>
    <FormControl
      type="search"
      placeholder="Search..."
    />
  </InputGroup>
  <div className="flex-end">
    <Button variant="secondary" size="lg" className="me-1" id="wd-add-group-btn">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group
    </Button>
    <Button variant="danger" size="lg" className="me-1" id="wd-add-assignment-btn">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Assignment
    </Button>
  </div>
</div>
);}
