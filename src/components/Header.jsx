import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Aplikasi Catatan</h1>
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/archives"}>Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
