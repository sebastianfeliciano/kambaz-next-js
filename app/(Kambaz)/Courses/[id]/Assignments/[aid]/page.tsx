export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
  
        <textarea
          id="wd-description"
          defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.`}
        />
        <br />
  
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECTS">PROJECTS</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as" defaultValue="Percentage">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                  <option value="Complete/Incomplete">Complete/Incomplete</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type" defaultValue="Online">
                  <option value="Online">Online</option>
                  <option value="On Paper">On Paper</option>
                  <option value="No Submission">No Submission</option>
                </select>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">Online Entry Options</td>
              <td>
                <div>
                  <label htmlFor="wd-text-entry">
                    <input type="checkbox" id="wd-text-entry" /> Text Entry
                  </label>
                </div>
                <div>
                  <label htmlFor="wd-website-url">
                    <input type="checkbox" id="wd-website-url" /> Website URL
                  </label>
                </div>
                <div>
                  <label htmlFor="wd-media-recordings">
                    <input type="checkbox" id="wd-media-recordings" /> Media Recordings
                  </label>
                </div>
                <div>
                  <label htmlFor="wd-student-annotation">
                    <input type="checkbox" id="wd-student-annotation" /> Student Annotation
                  </label>
                </div>
                <div>
                  <label htmlFor="wd-file-upload">
                    <input type="checkbox" id="wd-file-upload" /> File Uploads
                  </label>
                </div>
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign Assign to</label>
              </td>
              <td>
                <input id="wd-assign-to" defaultValue="Everyone" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                {/* input[type=date] expects YYYY-MM-DD */}
                <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
              </td>
            </tr>
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" defaultValue="2024-05-06" />{" "}
                <label htmlFor="wd-available-until" style={{ margin: "0 6px" }}>Until</label>
                <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
              </td>
            </tr>
  
            <tr>
              <td />
              <td>
                <hr />
                <button type="button">Cancel</button>{" "}
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  