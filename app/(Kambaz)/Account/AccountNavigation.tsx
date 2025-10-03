"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation({ id }: { id: string }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/Account/Profile`}
        id="wd-account-profile-link"
        className={`list-group-item border-0 ${isActive("/Account/Profile") ? "active" : "text-danger"}`}
      >
        Profile
      </Link>
      <br />
      <Link
        href={`/Account/Signin`}
        id="wd-account-signin-link"
        className={`list-group-item border-0 ${isActive("/Account/Signin") ? "active" : "text-danger"}`}
      >
        Sign in
      </Link>
      <br />
      <Link
        href={`/Account/Signup`}
        id="wd-account-signup-link"
        className={`list-group-item border-0 ${isActive("/Account/Signup") ? "active" : "text-danger"}`}
      >
        Sign up
      </Link>
    </div>
  );
}
