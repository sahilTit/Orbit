import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

const App = () => {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [marginLeft, setMarginLeft] = useState("0");

  const openNav = () => {
    setSidebarWidth("250px");
    setMarginLeft("250px");
  };

  const closeNav = () => {
    setSidebarWidth("0");
    setMarginLeft("0");
  };

  return (
    <Router>
      <div>
        <div id="mySidebar" className="sidebar" style={{ width: sidebarWidth }}>
          <a className="closebtn" onClick={closeNav}>
            ×
          </a>
          <Link to="/about" onClick={closeNav}>
            About
          </Link>
          <Link to="/services" onClick={closeNav}>
            Services
          </Link>
          <Link to="/clients" onClick={closeNav}>
            Clients
          </Link>
          <Link to="/contact" onClick={closeNav}>
            Contact
          </Link>
        </div>

        <div id="main" style={{ marginLeft: marginLeft }}>
          <button className="openbtn" onClick={openNav}>
            ☰ Open Sidebar
          </button>
          <h2>Collapsed Sidebar</h2>
          <p>
            Click on the hamburger menu/bar icon to open the sidebar, and push
            this content to the right.
          </p>

          <div className="content">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/clients" component={Clients} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
