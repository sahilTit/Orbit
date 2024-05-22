import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../SecLayout";

const SidePg = () => {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem("auth_token");
    navigate("/");
  };

  const openNav = () => {
    setSidebarWidth("250px");
  };

  const closeNav = () => {
    setSidebarWidth("0");
  };

  const toggleNav = () => {
    if (isSideBarOpen) {
      closeNav();
    } else {
      openNav();
    }
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="wrapper">
      <div id="mySidebar" className="sidebar" style={{ width: sidebarWidth }}>
        <NavLink to="/home">Home</NavLink>
        <div className="side-drop">
          <ul className="mb-1 ul.components">
            <button
              className="btn btn-toggle d-inline-flex align-items-center py-2 px-5 rounded border-0"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink
                    to="master"
                    className="text-decoration-none text-white rounded"
                  >
                    Master
                  </NavLink>
                </li>
                <li>
                  <NavLink to="table" className="text-decoration-none rounded">
                    Table
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="paginated"
                    className="text-decoration-none rounded"
                  >
                    Pagi
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div id="content">
        <div className="header bg-primary d-flex tertiary">
          <button className="openbtn bg-secondary" onClick={toggleNav}>
            ☰
          </button>
          <h2>Orbit Demo Pump (Fy-2024-2025)</h2>
          <div>
            <button className="bg-danger lgotbtn" onClick={handleLogout}>
              LogoOut
            </button>
          </div>
        </div>
        <div className="main-content">
          <h3>Dashboard</h3>
          <SecLayout />
        </div>
      </div>
    </div>
  );
};

export default SidePg;
