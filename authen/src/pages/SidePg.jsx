import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../SecLayout";

const SidePg = () => {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [marginLeft, setMarginLeft] = useState("0");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem("auth_token");
    navigate("/");
  };

  const openNav = () => {
    setSidebarWidth("250px");
    setMarginLeft("250px");
  };

  const closeNav = () => {
    setSidebarWidth("0");
    setMarginLeft("0");
  };
  return (
    <div>
      <div id="mySidebar" className="sidebar" style={{ width: sidebarWidth }}>
        <a className="closebtn" onClick={closeNav}>
          ×
        </a>
        <NavLink to="/home">Link</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="table">Table</NavLink>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main" style={{ marginLeft: marginLeft }}>
        <div className="header d-flex bg-success">
          <button className="openbtn bg-secondary" onClick={openNav}>
            ☰
          </button>
          <h2>Orbit Demo Pump (Fy-2024-2025)</h2>
          <div>
            <button className="bg-danger lgotbtn" onClick={handleLogout}>
              LogoOut
            </button>
          </div>
        </div>
        <h3>Dashboard</h3>

        <SecLayout />
      </div>
    </div>
  );
};

export default SidePg;
