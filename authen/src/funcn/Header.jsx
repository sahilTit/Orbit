import "./header.css";
const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-default top-fix-nav">
          <div className="container-fluid">
            <button
              type="button"
              // onClick={toggleNav}
              id="sidebarCollapse"
              className="btn btn-light text-dark"
            >
              <i className="fa fa-bars"></i>
            </button>
            <span className="text-left text-light mr-auto ml-3 h4 text-light bg-muted mb-0">
              PETRO
            </span>
            <li className="nav-item dropdown list-unstyled m-0 h6 text-light">
              name{" "}
            </li>

            <li className="nav-item dropdown list-unstyled m-l-7">
              <img
                src="../../../assets/admin/images/bookingSystem/2.png"
                alt="user"
                className="img-fluid rounded-circle mr-auto bg-info dropdown-toggle user_img"
                data-toggle="dropdown"
              />
              <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                <ul className="list-group text-muted">
                  <a href="" className="user_menu">
                    <li className="list-group-item py-2 pl-3 f-s-14">
                      <i className="fa fa-user mr-2"></i>Profile
                    </li>
                  </a>

                  <a href="" className="user_menu">
                    <li className="list-group-item py-2 pl-3 f-s-14">
                      <i className="fa fa-bell-o mr-2"></i>Notifivation
                    </li>
                  </a>

                  <a href="" className="user_menu">
                    <li className="list-group-item py-2 pl-3 f-s-14">
                      <i className="fa fa-envelope mr-2"></i>Inbox
                    </li>
                  </a>

                  <a href="" className="user_menu">
                    <li className="list-group-item py-2 pl-3 f-s-14">
                      <i className="fa fa-cog mr-2"></i>Settings
                    </li>
                  </a>

                  <a className="user_menu">
                    <li className="list-group-item py-2 pl-3 f-s-14">
                      <i className="fa fa-power-off mr-2"></i>Sign-out
                    </li>
                  </a>
                </ul>
              </div>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
