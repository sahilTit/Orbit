import { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Api2 } from "../context/Apis";
import AddPlazaModal from "../funcn/modal/AddPlazaModal";
import EditPlazaModal from "../funcn/modal/EditPlazaModel";

const Usermaster = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [data2, setData2] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlaza, setSelectedPlaza] = useState(null);
  // const [plazaId, setPlazaId] = useState("");

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (plaza) => {
    setSelectedPlaza(plaza);
    setShowEditModal(true);
  };
  // const max = localStorage.getItem("auth_token");
  // console.log(max);

  // const decryptData = CryptoJS.AES.decrypt(max, "auth_token").toString(
  //   CryptoJS.enc.Utf8
  // );
  // console.log(JSON.parse(decryptData));

  const fetchData2 = async () => {
    try {
      const res = await fetch(Api2);
      if (res.ok) {
        const plaza = await res.json();
        setData2(plaza);
      } else {
        console.log("first error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (plazaData) => {
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/addplaza",
        {
          method: "POST",
          body: JSON.stringify(plazaData),
        }
      );
      if (response.ok) {
        fetchData2();
        handleCloseAddModal();
      } else {
        console.log("Error Adding Plaza");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = data2.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handleSearch = (e) => setSearch(e.target.value);
  const handleClear = () => setSearch("");
  const handleDelete = () =>
    alert(`Are you sure you want to delete this item?`);

  useEffect(() => {
    fetchData2();
  }, []);

  // const plazaId = data2.map((e) => e.plaza_id);
  // console.log(plazaId);
  // setPlazaId(data2.map((e) => e.plaza_id));
  // console.log(plazaId)

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-12 shadow">
              <nav className="pt-2 px-3">
                <div className="f-s-24 p-t-2 float-left">Plaza Master</div>
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
        <div className="row p-3">
          <div className="col-3">
            <input
              className="form-control"
              id="search"
              value={search}
              type="text"
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
          <div className="col-7">
            <button className="btn btn-success" onClick={handleClear}>
              Clear
            </button>
          </div>
          <button className="btn btn-primary" onClick={handleShowAddModal}>
            Add Plaza
          </button>
        </div>
        <div className="col">
          <table className="table table-hover">
            <thead className="table-dark fs-6">
              <tr>
                <th scope="col">sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contract Amount</th>
                <th scope="col">Remitance</th>
                <th scope="col">Opening Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="f-s-15">
              {currentItems.map((eachData, index) => (
                <tr key={eachData.plaza_id}>
                  <th scope="row">{indexOfFirstItem + index + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.addr}</td>
                  <td>{eachData.contract}</td>
                  <td>{eachData.remitance}</td>
                  <td>{eachData.opn_amt}</td>
                  <td className="d-none">{eachData.plaza_id}</td>
                  <td>
                    <MdDeleteForever
                      style={{ color: "red" }}
                      onClick={handleDelete}
                    />{" "}
                    /{" "}
                    <FaRegEdit
                      style={{ color: "green" }}
                      onClick={() => handleShowEditModal(eachData)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="">
            <ul className="pagination justify-content-end p-3">
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
      <AddPlazaModal
        show={showAddModal}
        handleClose={handleCloseAddModal}
        handleAdd={handleAdd}
      />
      <EditPlazaModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        plaza={selectedPlaza}
      />
    </>
  );
};

export default Usermaster;

// remitance * 365 = contract Amount

//updplaza
