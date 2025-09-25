// app/Courses/[id]/Navigation.tsx
import Link from "next/link";

export default function CourseNavigation({ id }: { id: string }) {
  return (
    <div id="wd-courses-navigation">
      <ul>
        <li>
          <Link href={`/Courses/${id}/Home`} id="wd-course-home-link">
            Home
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/Modules`} id="wd-course-modules-link">
            Modules
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/Piazza`} id="wd-course-piazza-link">
            Piazza
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/Zoom`} id="wd-course-zoom-link">
            Zoom
          </Link>
        </li>
        <li>
          <Link
            href={`/Courses/${id}/Assignments`}
            id="wd-course-assignments-link"
          >
            Assignments
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/Quizzes`} id="wd-course-quizzes-link">
            Quizzes
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/Grades`} id="wd-course-grades-link">
            Grades
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${id}/People/Table`} id="wd-course-people-link">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
}
