export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-publish-options" defaultValue="all">
        <option value="publish-some">Selected</option>
        <option value="publish">Publish</option>
        <option value="all">Publish All</option>
      </select>

      <button>+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Course Syllabus</li>
                <li className="wd-content-item">Web Dev Overview Article</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">HTML BASICS</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Structure</li>
                <li className="wd-content-item">Headings & Paragraphs</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">PRACTICE</span>
              <ul className="wd-content">
                <li className="wd-content-item">Build a Simple Webpage</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS INTRODUCTION</span>
              <ul className="wd-content">
                <li className="wd-content-item">Selectors & Properties</li>
                <li className="wd-content-item">Colors & Fonts</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ACTIVITY</span>
              <ul className="wd-content">
                <li className="wd-content-item">Style a Blog Page</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">ADVANCED CSS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Flexbox Layout</li>
                <li className="wd-content-item">CSS Grid</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">PROJECT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Responsive Portfolio Page</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 5</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">JAVASCRIPT BASICS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Variables & Data Types</li>
                <li className="wd-content-item">Functions & Events</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ACTIVITY</span>
              <ul className="wd-content">
                <li className="wd-content-item">Interactive Web Page</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
