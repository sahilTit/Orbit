import { Navbar, Button } from "react-bootstrap";
import "./Header.css";

const Header = ( ) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="header">
      <Navbar.Brand href="#home">My Application</Navbar.Brand>
      <Button variant="outline-light" >
        Toggle Sidebar
      </Button>
    </Navbar>
  );
};

export default Header;
