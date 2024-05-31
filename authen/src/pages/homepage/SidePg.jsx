import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePg.css";
import SecLayout from "../../layout/SecLayout";
import SideBar from "../../funcn/sidebar/SideBar";
import Header from "../../funcn/header/Header";

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
        <div id="sidebar" className="sidebar">
          <SideBar sidebarWidth={sidebarWidth}></SideBar>
        </div>
      </div>
      <Header handleLogout={handleLogout}></Header>
      <div id="main">
        <Header toggleNav={toggleNav}></Header>
        <div
          className="secla"
          style={{ marginLeft: marginLeft, marginTop: "5%" }}
        >
          <SecLayout />
        </div>
      </div>
    </>
  );
};

export default SidePg;
