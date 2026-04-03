import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>LearnFlix</h1>

      <nav>
        <Link to="/">Aluno</Link>
        <Link to="/professor">Professor</Link>
      </nav>
    </header>
  );
}

export default Header;
