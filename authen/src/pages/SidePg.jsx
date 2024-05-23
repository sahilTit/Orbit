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
                  <NavLink to="master">Master</NavLink>
                </li>
                <li>
                  <NavLink to="table">Table</NavLink>
                </li>
                <li>
                  <NavLink to=""></NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div id="main" style={{ marginLeft: marginLeft }}>
        <div className="header bg-info1 d-flex tertiary ">
          <button className="openbtn bg-secondary" onClick={toggleNav}>
            ☰
          </button>
          <h2></h2>
          <div>
            <button className="bg-danger lgotbtn" onClick={handleLogout}>
              LogoOut
            </button>
          </div>
        </div>
        <h3>Dashboard</h3>
        {/* <Toast></Toast> */}
        <SecLayout />
      </div>
    </div>
  );
};

export default SidePg;
