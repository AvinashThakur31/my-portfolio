import { NavLink } from "react-router-dom";

function Sidebar({ menuOpen, setMenuOpen }) {

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>

      <div className="sidebar-logo">
        <h2>Avinash Thakur</h2>
      </div>

      <nav>

        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 <span>Home</span>
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          👤 <span>About</span>
        </NavLink>

        <NavLink
          to="/skills"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ⚙️ <span>Skills</span>
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          💻 <span>Projects</span>
        </NavLink>

        <NavLink
          to="/education"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🎓 <span>Education</span>
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ✉️ <span>Contact</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;