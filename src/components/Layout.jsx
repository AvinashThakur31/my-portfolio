import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <header className="mobile-header">
        <h2>Avinash</h2>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="main-content">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;