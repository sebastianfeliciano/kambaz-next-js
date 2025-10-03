import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl id="wd-username" defaultValue="alice" className="mb-2" />
      <FormControl
        id="wd-password"
        defaultValue="123"
        type="password"
        className="mb-2"
      />
      <FormControl id="wd-first-name" defaultValue="Alice" className="mb-2" />
      <FormControl
        id="wd-last-name"
        defaultValue="Wonderland"
        className="mb-2"
      />
      <div className="position-relative mb-2">
        <FormControl id="wd-dob" placeholder="mm/dd/yyyy" className="pe-5" />
        <FaCalendarAlt className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
      </div>
      <FormControl
        id="wd-email"
        defaultValue="alice@wonderland.com"
        className="mb-2"
      />
      <FormControl id="wd-role" defaultValue="User" className="mb-2" />
      <Link
        id="wd-signout-btn"
        href="/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Signout
      </Link>
    </div>
  );
}
