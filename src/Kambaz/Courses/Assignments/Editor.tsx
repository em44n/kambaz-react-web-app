export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option selected value="GroupA">
                        ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option selected value="Percentage">
                        Percentage</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td valign="top">
            <label  htmlFor="wd-select-many-genre"> Online Entry Options </label>
            </td>
            <td>
                <input type="checkbox" id="wd-text-entry"/>
                <label>Text Entry</label><br/>

                <input type="checkbox" id="wd-website-url"/>
                <label>Website URL</label><br/>

                <input type="checkbox" id="wd-media-recordings"/>
                <label>Media Recordings</label><br/>

                <input type="checkbox" id="wd-student-annotation"/>
                <label>Student Annotation</label><br/>

                <input type="checkbox" id="wd-file-upload"/>
                <label>File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td valign="top" align="right">
            <label  htmlFor="wd-assign-to"> Assign</label>
            </td>
            <label  htmlFor="wd-assign-to"> Assign to </label><br/>
            <input id="wd-assign-to" value="Everyone"/>
          </tr>
          <br />
          <tr>
            <td valign="top" align="right">
            </td>
            <label  htmlFor="wd-due-date"> Due </label><br/>
            <input type="date"
                value="2024-05-13"
                id="wd-due-date"/><br/>
          </tr>
          <br />
          <tr>
            <td valign="top" align="right">
            </td>
            <label  htmlFor="wd-available-from"> Available from</label><br/>
            <input type="date"
                value="2024-05-06"
                id="wd-available-from"/><br/>
            <td></td><label  htmlFor="wd-available-until"> Until </label><br/>
            <input type="date"
                value="2024-05-20"
                id="wd-available-until"/><br/>
          </tr>
        </table>
        <br />
        <button>Cancel</button>   <button>Save</button>
      </div>
  );}
  