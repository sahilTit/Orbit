import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../SecLayout";
import { MdOutlineArrowDropDown } from "react-icons/md";

const SidePg = () => {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [marginLeft, setMarginLeft] = useState("0");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
  const toggleNav = () => {
    if (isSideBarOpen) {
      openNav();
    } else {
      closeNav();
    }
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <div
        id="mySidebar"
        className="sidebar "
        style={{ width: sidebarWidth, border: "1px" }}
      >
        <NavLink to="/home">Home</NavLink>
        <div className="side-drop">
          <ul className="mb-1 ul.components">
            <button
              className="btn btn-toggle d-inline-flex align-items-center  py-2 px-5 rounded border-0 "
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
              <MdOutlineArrowDropDown />
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none  text-white rounded"
                  >
                    <NavLink to="master">Master</NavLink>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <NavLink to="table">Table</NavLink>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <NavLink to="paginated">Pagi</NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div id="main" style={{ marginLeft: marginLeft }}>
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
        <h3>Dashboard</h3>
        <SecLayout />
      </div>
    </div>
  );
};

export default SidePg;
