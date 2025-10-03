import Link from "next/link";
import { use } from "react";
import { ListGroup, ListGroupItem, Button, Badge } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <div>
      <AssignmentsControls />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center gap-2">
              <Badge bg="secondary" className="rounded-pill px-3 py-2">
                40% of Total
              </Badge>
              <Button variant="secondary" size="sm">
                <FaPlus />
              </Button>
            </div>
          </div>
          <ListGroup className="wd-assignment-items rounded-0">
            <ListGroupItem className="wd-assignment-item p-3 ps-1 border-start border-success border-5 border-0">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3 text-success" />
                  <div>
                    <Link
                      href={`/Courses/${id}/Assignments/A1`}
                      className="text-decoration-none fw-bold text-dark"
                    >
                      A1
                    </Link>
                    <div className="text-muted small mt-1">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 6 at 12:00am |{" "}
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1 border-start border-success border-5 border-0">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3 text-success" />
                  <div>
                    <Link
                      href={`/Courses/${id}/Assignments/A2`}
                      className="text-decoration-none fw-bold text-dark"
                    >
                      A2
                    </Link>
                    <div className="text-muted small mt-1">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 13 at 12:00am |{" "}
                      <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
            <ListGroupItem className="wd-assignment-item p-3 ps-1 border-start border-success border-5 border-0">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center flex-grow-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 fs-3 text-success" />
                  <div>
                    <Link
                      href={`/Courses/${id}/Assignments/A3`}
                      className="text-decoration-none fw-bold text-dark"
                    >
                      A3
                    </Link>
                    <div className="text-muted small mt-1">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 20 at 12:00am |{" "}
                      <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
