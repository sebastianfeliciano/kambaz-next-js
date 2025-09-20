export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button>Unpublish</button>
      <button>Publish</button>

      {<div className="button-group">
        <button>Import Existing Content</button>
        <button>Import From Commons</button>
        <button>Choose Home Page</button>
        <button>View Course Stream</button>
        <button>New Announcements</button>
        <button>New Analytics</button>
        <button>View Course Notifications</button>
      </div>}
    </div>
  );
}