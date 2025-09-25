// app/(Kambaz)/Courses/[id]/layout.tsx
import { ReactNode, use } from "react";
import KambazNavigation from "../../Account/Navigation";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <div id="wd-courses">
      <table
        role="presentation"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            {/* Top-left fixed column */}
            <td valign="top" width="160">
              <KambazNavigation />
            </td>

            {/* Right side: header + inner 2-col layout */}
            <td valign="top" style={{ width: "100%" }}>
              <h2>Courses {id}</h2>
              <hr />
              <table
                role="presentation"
                style={{ width: "100%", borderCollapse: "collapse" }}
              >
                <tbody>
                  <tr>
                    <td valign="top" width="200">
                      <CourseNavigation id={id} />
                    </td>
                    <td valign="top" style={{ width: "100%" }}>
                      {children}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
