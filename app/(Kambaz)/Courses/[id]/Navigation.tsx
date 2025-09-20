// app/Courses/[id]/Navigation.tsx
import Link from "next/link";

export default function CourseNavigation({ id }: { id: string }) {
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${id}/Home`} id="wd-course-home-link">Home</Link><br/>
      <Link href={`/Courses/${id}/Modules`} id="wd-course-modules-link">Modules</Link><br/>
      <Link href={`/Courses/${id}/Piazza`} id="wd-course-piazza-link">Piazza</Link><br/>
      <Link href={`/Courses/${id}/Zoom`} id="wd-course-zoom-link">Zoom</Link><br/>
      <Link href={`/Courses/${id}/Assignments`} id="wd-course-assignments-link">Assignments</Link><br/>
      <Link href={`/Courses/${id}/Quizzes`} id="wd-course-quizzes-link">Quizzes</Link><br/>
      <Link href={`/Courses/${id}/Grades`} id="wd-course-grades-link">Grades</Link><br/>
      <Link href={`/Courses/${id}/People/Table`} id="wd-course-people-link">People</Link><br/>
    </div>
  );
}
