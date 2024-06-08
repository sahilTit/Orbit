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
              <i className="fa fa-dashboard mr-3"></i>
              <span>Dashboards</span>
            </NavLink>
          </li>

          <li className="">
            <a
              href="#Master"
              data-toggle="collapse"
              aria-expanded="false"
              className={`dropdown-toggle ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              <i className="fa fa-widgets mr-3"></i> Master
            </a>
            <ul className="collapse list-unstyled " id="Master">
              {/* <li>
                <NavLink className="active" to="master">
                  <i className="fa fa-list"></i> Master
                </NavLink>
              </li> */}

              <li className="f-a-17">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="table"
                >
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Plaza Table</span>
                </NavLink>
              </li>

              <li>
                <NavLink className="" to="main">
                  <i className="fa fa-list"></i>

                  <span className="f-s-15 m-l-5">Role</span>
                </NavLink>
              </li>

              <li>
                <NavLink className="" to="expensehead">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Expense Head</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="usermaster">
                  <i className="fa fa-list"></i>

                  <span className="f-s-15 m-l-5">User Master</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="plazatable">
                  <i className="fa fa-list"></i>

                  <span className="f-s-15 m-l-5">Plaza Master</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="">
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
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="plazareport"
                >
                  <i className="fa fa-list"></i>

                  <span className="f-s-15 m-l-5">Plaza Report</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="consreport">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Consolid Report</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="consreport-2">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Consolid Report 2</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="horeport">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Ho Report</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="weekrem">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Weekly Remitance</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="dailyrem">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Daily Remitance</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="closebalance">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Closing Balance</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="collection">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Collection</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="">
            <a
              href="#Entry"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-widgets mr-3"></i> Entry
            </a>
            <ul className="collapse list-unstyled" id="Entry">
              {/* <li>
                <NavLink className="active" to="master">
                  <i className="fa fa-list"></i> Master
                </NavLink>
              </li> */}

              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="plazaentry"
                >
                  <i className="fa fa-list"></i>

                  <span className="f-s-15 m-l-5">Plaza Entry</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="expenseho">
                  <i className="fa fa-list"></i>
                  <span className="f-s-15 m-l-5">Ho. Expenses</span>
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
