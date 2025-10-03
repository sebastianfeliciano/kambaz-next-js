"use client";
import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import AccountNavigation from "./AccountNavigation";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-account">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Account
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation id="account" />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
