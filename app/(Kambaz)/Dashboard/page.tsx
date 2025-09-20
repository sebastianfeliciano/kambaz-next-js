import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/101" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS101 Intro to Computer Science </h5>
          <p className="wd-dashboard-course-title">
            Introduction to Computer Science
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/102" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS102 Data Structures & Algorithms </h5>
          <p className="wd-dashboard-course-title">
            Data Structures & Algorithms
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/201" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS201 Database Systems </h5>
          <p className="wd-dashboard-course-title">
             Database Systems
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/202" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS202 Operating Systems </h5>
          <p className="wd-dashboard-course-title">
            Operating Systems
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
            <div className="wd-dashboard-course"> 
            <Link href="/Courses/301" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
            <div>
            <h5> CS301 Computer Networks </h5>
            <p className="wd-dashboard-course-title">
                Computer Networks
            </p>
            <button> Go </button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/302" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS302 Artificial Intelligence </h5>
          <p className="wd-dashboard-course-title">
          Artificial Intelligence
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
        <div className="wd-dashboard-course"> 
        <Link href="/Courses/401" className="wd-dashboard-course-link">
          <Image src="/images/reactjs.jpg" alt="course image" width={200} height={150} />
          <div>
          <h5> CS401 Software Engineering </h5>
          <p className="wd-dashboard-course-title">
          Software Engineering
          </p>
          <button> Go </button>
          </div>
        </Link>
        </div>
    </div>
    </div>
);}
