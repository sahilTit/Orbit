import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../SecLayout";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdWindow } from "react-icons/md";
import { FaEmpire } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

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
    <>
      <div className="cont">
        <div id="mySidebar" className="sidebar" style={{ width: sidebarWidth }}>
          <NavLink to="/home">
            <div className="d-flex justify-content-around align-items-center fs-5">
              <MdWindow />
              Home
            </div>
          </NavLink>
          <div className="side-drop ">
            {/* <ul
              className="list-unstyled components pt-0 "
              style={{ boxShadow: "10px 5px 5px #dedcdc" }}
            >
              <button
                className="btn btn-toggle  rounded border-0 "
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                <div className=" faemp d-flex align-items-center justify-content-between"></div>
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="list-unstyled components pt-0 fs-6 faemp">
                  <li className="p-2">
                    <div className="oohover"></div>
                  </li>
                  <li className="p-2">
                    <NavLink to="table" className="fs-6">
                      Table
                    </NavLink>
                  </li>
                  <li className="p-2">
                    <NavLink
                      to="pagi"
                      className="fs-6"
                      activeclassname="active"
                    >
                      Dash
                    </NavLink>
                  </li>
                </ul>
              </div>
            </ul> */}
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaEmpire />
                  Home
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink to="master" className="fs-6">
                    Master
                  </NavLink>
                </Accordion.Body>
                <Accordion.Body>
                  <NavLink to="table" className="fs-6">
                    Table
                  </NavLink>
                </Accordion.Body>
                <Accordion.Body>
                  <NavLink to="main" className="fs-6">
                    Role
                  </NavLink>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Item #2</Accordion.Header>
                <Accordion.Body>Lorem i</Accordion.Body>
                <Accordion.Body>Lorem ii</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div id="main">
          <div
            className="header navbar  bg-info1 d-flex p-2 tertiary "
            style={{ backgroundColor: "#009688" }}
          >
            <button className="openbtn btn-light " onClick={toggleNav}>
              ☰
            </button>
            {/* <h2></h2> */}
            <div>
              <button className="bg-danger lgotbtn" onClick={handleLogout}>
                LogoOut
              </button>
            </div>
          </div>
          <div className="secla" style={{ marginLeft: marginLeft }}>
            <SecLayout />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePg;
