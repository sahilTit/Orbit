import { useState, useContext, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { DataContext } from "../context/DataContext";

const HoExpenses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  // const handleShowAddModal = () => setShowAddModal(true);

  // const [showAddModal, setShowAddModal] = useState(false);
  // const [showEditModal, setShowEditModal] = useState(false);
  // const [selectedPlaza, setSelectedPlaza] = useState(null);
  // const [plazaId, setPlazaId] = useState("");

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (plaza) => {
    setSelectedPlaza(plaza);
    setShowEditModal(true);
  };
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const { data3 } = useContext(DataContext);

  // console.log(data2.map((e)=>e.name))
  const fetchData2 = async () => {
    try {
      const res = await fetch(
        "http://192.168.1.131/toll_manage/appv1/hoexpense_report"
      );
      if (res.ok) {
        const plaza = await res.json();
        setData(plaza);
      } else {
        console.log("first error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  const handleAdd = async (plazaData) => {
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/hoexpense_report",
        {
          body: JSON.stringify(plazaData),
        }
      );
      if (response.ok) {
        // fetchData2();
        handleCloseAddModal();
      } else {
        console.log("Error Adding Plaza");
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData2();
  }, []);
  const filteredData =
    data &&
    data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / itemsPerPage);
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
          <button className="btn btn-primary" onClick={handleShowAddModal}>
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
                        onClick={() => handleShowEditModal(eachData)}
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
      {/* <AddUserModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
        handleAdd={handleAdd}
      />
      <EditUserModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        plaza={selectedPlaza}
      /> */}
    </>
  );
};

export default HoExpenses;
