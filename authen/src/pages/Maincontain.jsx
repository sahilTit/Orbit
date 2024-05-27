const Maincontain = () => {
  //   const [search, setSearch] = useState("");
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage] = useState(7);
  //   const [user, setUser] = useState([]);

  //   const user = {
  //     name: "Sahil",
  //     email: "Sahil",
  //     password: "123",
  //     role: "admin",
  //   };
  //   const filteredData = user.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   );
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  //   const handleSearch = (e) => {
  //     setSearch(e.target.value);
  //   };

  //   const handleClear = () => {
  //     setSearch("");
  //   };

  return (
    <>
      <div className="container-fluid  ">
        <div className="row mb-4">
          <div className="col-12 shadow">
            <nav className="pt-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Role</div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <h6>role</h6>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Role
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row p-2">
          <div className="col-10">
            <form>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <input
                      // onChange={handleSearch}
                      type="text"
                      className="form-control f-s-14"
                      placeholder="Enter Role Name"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <button
                      //   onClick={handleSearch}
                      type="submit"
                      className="btn btn-primary mr-2 btn-sm"
                    >
                      Search
                    </button>
                    <button
                      className="btn btn-info btn-sm"
                      //   onClick={handleClear}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-primary btn-sm pull-right"
              data-toggle="modal"
              data-target="#addRoleModal"
            >
              Add Role
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-success alert-dismissible">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Success!</strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-danger alert-dismissible">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              Error message
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table
                className="table table-hover table-bordered table-sm"
                cellSpacing="0"
                width="100%"
              >
                <thead className="thead-light">
                  <tr>
                    <th>Sr. No.</th>

                    <th>Role Name</th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Current Page</td>

                    <td className="align-middle">UpperCase</td>

                    <td>
                      <div>
                        <button className="btn btn-warning btn-sm mr-1">
                          <i className="fa fa-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <pagination-controls></pagination-controls>
          </div>
        </div>
      </div>
      <div className="modal fade" id="addRoleModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="data_loading">
              <img src="../../../assets/images/loading.gif" />
            </div>
            <div className="modal-header">
              <h4 className="modal-title">Add Role</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="alert alert-danger alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert">
                    &times;
                  </button>
                  <strong>Error !</strong> Error.
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="name">
                      Role name <span className="text-danger">*</span>
                    </label>
                    <input
                      //   formControlName="name"
                      autoComplete="off"
                      type="text"
                      //   maxlength="30"
                      className="form-control rounded-0"
                      placeholder="Enter Name"
                    />

                    <div className="invalid-feedback">
                      <div>Please enter role name</div>
                      <div>Please enter valid role name.</div>
                      <div>role already exist.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="modal fade" id="editRoleModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Role</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="alert alert-danger alert-dismissible">
                  <button type="button" className="close" data-dismiss="alert">
                    &times;
                  </button>
                  <strong>Error !</strong> console.error
                </div>

                <div className="form-group">
                  <label htmlFor="name"> Name:</label>
                  <input type="hidden" />

                  <input />
                  <div className="invalid-feedback">
                    <div>Please enter role name</div>
                    <div>Please enter valid role name.</div>
                    <div>role already exist.</div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontain;
