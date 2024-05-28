import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { data } from "jquery";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Usermaster = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // const fetchPlazaData = async () => {
    //   try {
    //     const response = await fetch(
    //       "http://192.168.1.131/toll_manage/appv1/manage_user"
    //     );
    //     if (response.ok) {
    //       const data = await response.json();
    //       setUser(data.data);
    //       // console.log(data.data);
    //     } else {
    //       console.error("Failed to fetch data");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchPlazaData();
    const fetchGetPlaza = async () => {
      try {
        const res = await fetch(
          "http://192.168.1.131/toll_manage/appv1/getplazadata"
        );
        if (res) {
          const plaza = await res.json();
          setUser(plaza);
        //   console.log(plaza);
        } else {
          console.log("first error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetPlaza();
  }, []);

  // const res = fetch("http://192.168.1.131/toll_manage/appv1/get_plaza");

  const filteredData = user.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(user.length / itemsPerPage);
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
                <div className="f-s-24 p-t-2 float-left">Plaza Table</div>

                <ul className="breadcrumb float-right bg-transparent m-b-1">
                  <li className="breadcrumb-item">
                    <h6 className="f-s-18">Master</h6>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Plaza
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
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contract Amount</th>
                <th scope="col">Remitance</th>
                <th scope="col">Opening Amount </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="f-s-15">
              {currentItems.map((eachData, index) => (
                <tr key={eachData.addr}>
                  <th scope="row">{indexOfFirstItem + index + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.addr}</td>
                  <td>{eachData.contract}</td>
                  <td>{eachData.remitance}</td>
                  <td>{eachData.opn_amt}</td>
                  <td>
                    <MdDeleteForever
                      style={{ color: "red" }}
                      onClick={handleDelete}
                    />{" "}
                    /{" "}
                    <FaRegEdit
                      style={{ color: "green" }}
                    //   onClick={console.log("Edit")}
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
          <Modal.Title>Add Plaza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Valid From</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Valid To</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name  " placeholder="Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control type="Address" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Remitance</Form.Label>
              <Form.Control type="Remitance" placeholder="Remitance" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Contract Amount</Form.Label>
              <Form.Control type="Remitance" placeholder="Remitance" />
            </Form.Group>

            <FloatingLabel className="mb-3 " controlId="floatingSelect">
              <Form.Label> Plaza Type</Form.Label>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Select Type</option>
                <option value="1">Regular Plaza</option>
                <option value="2">Limited Plaza</option>
              </select>
            </FloatingLabel>
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
