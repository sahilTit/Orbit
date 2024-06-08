import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { data } from "jquery";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { DataContext } from "../context/DataContext";

const Usermaster = () => {
  // const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { data3 } = useContext(DataContext);

  const filteredData =
    data3 &&
    data3.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data3.length / itemsPerPage);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };
  const handleDelete = () => {
    alert(`Are you sure you want to delete this item?`);
  };
  return (
    <>
      <div className="container-fluid  ">
        <div className="container-fluid  ">
          <div className="row mb-4">
            <div className="col-12 shadow">
              <nav className="pt-2 px-3">
                <div className="f-s-24 p-t-2 float-left">User Master</div>

                <ul className="breadcrumb float-right bg-transparent m-b-1">
                  <li className="breadcrumb-item">
                    <h6 className="f-s-18">Master</h6>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="row p-3 ">
          <div className="col-3">
            <input
              className="form-control "
              id="search"
              // value={search}
              value={search}
              type="text"
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
          <div className="col-7">
            <button className="btn btn-success " onClick={handleClear}>
              Clear
            </button>
          </div>
          <button className="btn btn-primary" onClick={handleShow}>
            Add User
          </button>
        </div>
        <div className="col ">
          <table className="table table-hover">
            <thead className="table-dark fs-6">
              <tr>
                <th scope="col">sr.No</th>
                <th scope="col">User Name </th>
                <th scope="col">Plaza Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
                {/* <th scope="col">mobile</th> */}
              </tr>
            </thead>
            <tbody className="f-s-15">
              {currentItems &&
                currentItems.map((eachData, index) => (
                  <tr key={eachData.email}>
                    <th scope="row">{indexOfFirstItem + index + 1}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.plaza}</td>
                    <td>{eachData.email}</td>
                    <td>{eachData.mobile}</td>
                    <td>
                      <MdDeleteForever
                        style={{ color: "red" }}
                        onClick={handleDelete}
                      />{" "}
                      /{" "}
                      <FaRegEdit
                        style={{ color: "green" }}
                        // onClick={console.log("Edit")}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <nav className="">
            <ul className="pagination  justify-content-end p-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="Name  " placeholder="Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="number" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <FloatingLabel className="mb-3 " controlId="floatingSelect">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Select Role</option>
                <option value="1">Toll Operator</option>
                <option value="2">Accounts Reports</option>
                <option value="3">Supervisor</option>
                <option value="4">Admin</option>
              </select>
            </FloatingLabel>

            <FloatingLabel className="mb-3 " controlId="floatingSelect">
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Select Plaza</option>
                {data3 &&
                  data3.map((eachData) => (
                    <option key={eachData.id} value={eachData.id}>
                      {eachData.plaza}
                    </option>
                  ))}
              </select>
            </FloatingLabel>
            <Form.Group
              className="mb-3"
              //   controlId="exampleForm.ControlPassword"
            >
              <Form.Label> Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Usermaster;
