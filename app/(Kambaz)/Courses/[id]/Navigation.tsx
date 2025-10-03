"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ id }: { id: string }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path.includes("/Assignments")) {
      return pathname.startsWith(`/Courses/${id}/Assignments`);
    }
    return pathname === path;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/Courses/${id}/Home`}
        id="wd-course-home-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Home`) ? "active" : "text-danger"}`}
      >
        {" "}
        Home{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Modules`}
        id="wd-course-modules-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Modules`) ? "active" : "text-danger"}`}
      >
        {" "}
        Modules{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Piazza`}
        id="wd-course-piazza-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Piazza`) ? "active" : "text-danger"}`}
      >
        {" "}
        Piazza{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Zoom`}
        id="wd-course-zoom-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Zoom`) ? "active" : "text-danger"}`}
      >
        {" "}
        Zoom{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Assignments`}
        id="wd-course-assignments-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Assignments`) ? "active" : "text-danger"}`}
      >
        {" "}
        Assignments{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Quizzes`}
        id="wd-course-quizzes-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Quizzes`) ? "active" : "text-danger"}`}
      >
        {" "}
        Quizzes{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/Grades`}
        id="wd-course-grades-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/Grades`) ? "active" : "text-danger"}`}
      >
        {" "}
        Grades{" "}
      </Link>
      <br />
      <Link
        href={`/Courses/${id}/People/Table`}
        id="wd-course-people-link"
        className={`list-group-item border-0 ${isActive(`/Courses/${id}/People/Table`) ? "active" : "text-danger"}`}
      >
        {" "}
        People{" "}
      </Link>
      <br />
    </div>
  );
}
