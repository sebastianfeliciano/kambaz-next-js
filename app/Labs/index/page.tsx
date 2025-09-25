import Link from "next/link";
export default function LabsIndex() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Sebastian Feliciano - Section 01</p>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-lab3-link">
            Kambaz{" "}
          </Link>
        </li>
      </ul>
      <p>
        <a
          href="https://github.com/sebastianfeliciano/kambaz-next-js"
          id="wd-github"
        >
          GitHub Repository
        </a>
      </p>
    </div>
  );
}
