import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../SecLayout";
import SideBar from "../funcn/SideBar";

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
          {/* <Header></Header> */}
          <SideBar sidebarWidth={sidebarWidth}></SideBar>
        </div>
      </div>
      <div id="main">
        <div
          className="header navbar fieldset  bg-info1    "
          style={{ backgroundColor: "#009688" }}
        >
          <button className="openbtn btn-light " onClick={toggleNav}>
            ☰
          </button>
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
    </>
  );
};

export default SidePg;
