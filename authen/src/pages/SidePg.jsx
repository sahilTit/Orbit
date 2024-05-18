import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePg.css";
import Table from "./Table";
const SidePg = () => {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [marginLeft, setMarginLeft] = useState("0");

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userData = localStorage.getItem("auth_token");
    if (userData) {
      const parsedData = JSON.parse(userData);
    //   console.log(parsedData);
      setUser(parsedData);
    }
  }, []);
  console.log(user.ResponseCode);
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
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div id="main" style={{ marginLeft: marginLeft }}>
        <div className="d-flex bg-primary">
          <button className="openbtn bg-secondary" onClick={openNav}>
            ☰
          </button>
          <h2>Orbit Demo Pump (Fy-2024-2025)</h2>
          <div>
            <button className="bg-danger" onClick={handleLogout}>
              LogoOut
            </button>
          </div>
        </div>
        <Table></Table>
      </div>
    </div>
  );
};

export default SidePg;
