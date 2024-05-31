import { NavLink } from "react-router-dom";
function SideBar({ sidebarWidth }) {
  // const [marginLeft, setMarginLeft] = useState("0");
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <nav className="sidebar" style={{ width: sidebarWidth }}>
        <ul
          className="list-unstyled components pt-0"
          // style={{ width: sidebarWidth }}
        >
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
              {/* <li>
                <NavLink className="active" to="master">
                  <i className="fa fa-list"></i> Master
                </NavLink>
              </li> */}

              <li>
                <NavLink className="active" to="table">
                  <i className="fa fa-list"></i>Plaza Table
                </NavLink>
              </li>

              <li>
                <NavLink className="active" to="main">
                  <i className="fa fa-list"></i> Role
                </NavLink>
              </li>

              <li>
                <NavLink className="active" to="expensehead">
                  <i className="fa fa-list"></i> Expense Head
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="usermaster">
                  <i className="fa fa-list"></i>User Master
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="plazatable">
                  <i className="fa fa-list"></i>Plaza Master
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="active">
            <a
              href="#reports"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-widgets mr-3"></i> Reports
            </a>
            <ul className="collapse list-unstyled" id="reports">
              {/* <li>
                <NavLink className="active" to="master">
                  <i className="fa fa-list"></i> Master
                </NavLink>
              </li> */}

              <li>
                <NavLink className="active" to="plazareport">
                  <i className="fa fa-list"></i>Plaza Report
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
