// hoexpense_report
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Expensehead = () => {
  const [user, setUser] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShown(false);
  const handleShow1 = () => setShown(true);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.131/toll_manage/appv1/hoexpense_report"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.log(data[0]);
        } else {
          console.error("failed to fetch");
        }
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };
    fetchTableData();
  }, []);
  //   fetchTableData();

  const filteredData =
    user &&
    user.filter((item) =>
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
                <div className="f-s-24 p-t-2 float-left">Expense Head</div>
                <ul className="breadcrumb float-right bg-transparent m-b-1">
                  <li className="breadcrumb-item">
                    <h6 className="f-s-18">Master</h6>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Expense Head
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
          <button className="btn btn-primary" onClick={handleShow1}>
            Add
          </button>
        </div>
        <div className="col ">
          <table className="table table-hover  ">
            <thead className="table-dark fs-6">
              <tr>
                <th scope="col">Sr.No</th>
                {/* <th scope="col">Date</th> */}
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="f-s-15">
              {currentItems &&
                currentItems.map((eachData, index) => (
                  <tr key={eachData.id}>
                    <th scope="row">{index + 1}</th>
                    {/* <th scope="row">{eachData.date_rep}</th> */}
                    <td>{eachData.name}</td>
                    <td>
                      <Button variant="primary p-1" onClick={handleShow}>
                        <FaRegEdit />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name  " placeholder="Name" autoFocus />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
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
          <Modal.Title>Add Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name  " placeholder="Name" autoFocus />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
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
    </>
  );
};

export default Expensehead;
