const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li className="nav-link">
          <a href="/login" rel="noreferrer">
            Log In
          </a>
        </li>
        <li className="nav-link">
          <a href="/register" rel="noreferrer">
            Register
          </a>
        </li>
        <li className="nav-link">
          <a href="/overview" rel="noreferrer">
            Overview
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
