import { Button, Form } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between align-items-center mb-4"
    >
      <div className="position-relative" style={{ width: "300px" }}>
        <Form.Control
          type="text"
          placeholder="Search for Assignments"
          id="wd-search-assignment"
          className="ps-5"
        />
        <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
      </div>
      <div className="d-flex gap-2">
        <Button
          variant="secondary"
          size="lg"
          className="d-flex align-items-center"
        >
          <FaPlus className="me-2" />
          Group
        </Button>
        <Button
          variant="danger"
          size="lg"
          className="d-flex align-items-center"
        >
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}
