import { Nav } from "react-bootstrap";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userData = localStorage.getItem("auth_token");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log(parsedData);
      setUser(parsedData);
    }
  }, []);
  console.log(user.ResponseCode);
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.removeItem("auth_token");
    navigate("/");
  };
  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <button className="close-btn" onClick={handleClose}>
        ×
      </button>
      <Nav className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <button className="danger" onClick={handleLogout}>
          Logout
        </button>
      </Nav>
    </div>
  );
};

export default Sidebar;

// const static  =propsTypes = {
//   show :propTypes.any,
//   handleClose :propTypes.any,
// }
