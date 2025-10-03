"use client";
import { Form, Card, Button, Row, Col, Badge } from "react-bootstrap";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function AssignmentEditor() {
  const [assignees, setAssignees] = useState(["Everyone"]);
  const [newAssignee, setNewAssignee] = useState("");

  const removeAssignee = (assigneeToRemove: string) => {
    setAssignees(assignees.filter((assignee) => assignee !== assigneeToRemove));
  };

  const addAssignee = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newAssignee.trim()) {
      if (!assignees.includes(newAssignee.trim())) {
        setAssignees([...assignees, newAssignee.trim()]);
      }
      setNewAssignee("");
    }
  };
  return (
    <div id="wd-assignments-editor">
      <div className="mb-4">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control
          id="wd-name"
          type="text"
          defaultValue="A1"
          className="mt-2"
        />
      </div>

      {/* Assignment Description */}
      <Card className="mb-4">
        <div className="card-body">
          <div className="mb-3">
            <span>The assignment is </span>
            <span className="text-danger fw-bold">available online</span>
          </div>
          <div className="mb-3">
            Submit a link to the landing page of your Web application running on{" "}
            <u>Netlify</u>. The landing page should include the following:
          </div>
          <ul className="mb-3">
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>
              Link to the <u>Kambaz</u> application
            </li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <div>
            The <u>Kanbas</u> application should include a link to navigate back
            to the landing page.
          </div>
        </div>
      </Card>

      {/* Submission Settings */}
      <div className="mb-4">
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              id="wd-points"
              type="number"
              defaultValue={100}
              className="w-25"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-display-grade-as">
              Display Grade as
            </Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <div>Submission Type</div>
          </Col>
          <Col md={9}>
            <Card>
              <div className="card-body">
                <Row className="mb-3">
                  <Col md={9}>
                    <Form.Select id="wd-submission-type" defaultValue="Online">
                      <option value="Online">Online</option>
                      <option value="On Paper">On Paper</option>
                      <option value="No Submission">No Submission</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <div className="fw-bold mb-2">Online Entry Options</div>
                    <div className="d-flex flex-column gap-2">
                      <Form.Check
                        type="checkbox"
                        id="wd-text-entry"
                        label="Text Entry"
                      />
                      <Form.Check
                        type="checkbox"
                        id="wd-website-url"
                        label="Website URL"
                        defaultChecked
                      />
                      <Form.Check
                        type="checkbox"
                        id="wd-media-recordings"
                        label="Media Recordings"
                      />
                      <Form.Check
                        type="checkbox"
                        id="wd-student-annotation"
                        label="Student Annotation"
                      />
                      <Form.Check
                        type="checkbox"
                        id="wd-file-upload"
                        label="File Uploads"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={3}>
            <div>Assign</div>
          </Col>
          <Col md={9}>
            <Card>
              <div className="card-body">
                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                      Assign to
                    </Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      {assignees.map((assignee, index) => (
                        <Badge
                          key={index}
                          bg="secondary"
                          className="d-flex align-items-center gap-1"
                        >
                          {assignee}
                          <FaTimes
                            size={12}
                            style={{ cursor: "pointer" }}
                            onClick={() => removeAssignee(assignee)}
                          />
                        </Badge>
                      ))}
                      <Form.Control
                        id="wd-assign-to"
                        type="text"
                        placeholder="Search people"
                        className="flex-grow-1"
                        value={newAssignee}
                        onChange={(e) => setNewAssignee(e.target.value)}
                        onKeyPress={addAssignee}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="wd-due-date" className="fw-bold">
                      Due
                    </Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      id="wd-due-date"
                      type="datetime-local"
                      defaultValue="2024-05-13T23:59"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="wd-available-from" className="fw-bold">
                      Available from
                    </Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      id="wd-available-from"
                      type="datetime-local"
                      defaultValue="2024-05-06T00:00"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={3}>
                    <Form.Label
                      htmlFor="wd-available-until"
                      className="fw-bold"
                    >
                      Until
                    </Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      id="wd-available-until"
                      type="datetime-local"
                    />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="d-flex gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
