import { useContext,  useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";

const Table = () => {
  // const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShown(false);
  const handleShow1 = () => setShown(true);
  const { data4 } = useContext(DataContext);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data4 &&
        data4.map((eachData, index) => ({
          "sr.No": index + 1,
          "Plaza id": eachData.plaza_id,
          name: eachData.name,
        }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Plaza Data");

    // Generate and download the Excel file
    XLSX.writeFile(workbook, "PlazaData.xlsx");
  };

  const filteredData =
    data4 &&
    data4.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };

  return (
    <>
      <div className="container-fluid">
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
                    Table
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col  m-3">
          <div className="row ">
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
            <div className="col-2">
              <button className="btn btn-success btn-sm" onClick={handleClear}>
                Clear
              </button>
            </div>
            <div className="col-4">
              <button
                className="btn btn-primary btn-sm"
                onClick={downloadExcel}
              >
                Download Excel
              </button>
            </div>
            <div className="col-2">
              <Button onClick={handleShow1}>Add</Button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col ">
              <table className="table table-hover">
                <thead className="table-dark fs-6">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Plaza id</th>
                    <th scope="col">Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="f-s-15 ">
                  {currentItems &&
                    currentItems.map((eachData, index) => (
                      <tr key={eachData.plaza_id}>
                        <th scope="row">{indexOfFirstItem + index + 1}</th>
                        <th scope="row">{eachData.plaza_id}</th>
                        <td>{eachData.name}</td>
                        <td>
                          <div className="">
                            <Button variant="primary p-1" onClick={handleShow}>
                              <FaRegEdit />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <nav>
            <ul className="pagination .ngx-pagination justify-content-end p-3">
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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="name" autoFocus />
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
          <Modal show={shown} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Add </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="name" autoFocus />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose1}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose1}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Table;
