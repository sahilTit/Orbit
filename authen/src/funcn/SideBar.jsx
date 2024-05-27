import { useState } from "react";
import { NavLink } from "react-router-dom";
function SideBar() {
  const [sidebarWidth, setSidebarWidth] = useState("0");
  const [marginLeft, setMarginLeft] = useState("0");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
      <nav id="sidebar" style={{ sidebarWidth: sidebarWidth }}>
        <ul className="list-unstyled components pt-0">
          <li>
            <NavLink to="/home">
              {/* <a></a> */}
              <i className="fa fa-dashboard mr-3"></i>Dashboards
            </NavLink>
          </li>

          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-widgets mr-3"></i> Master
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <NavLink to="master">
                  <i className="fa fa-list"></i> Master
                </NavLink>
              </li>

              <li>
                <NavLink to="table">
                  <i className="fa fa-list"></i> Table
                </NavLink>
              </li>

              <li>
                <NavLink to="main">
                  <i className="fa fa-list"></i> Role{" "}
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
