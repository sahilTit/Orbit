import { useEffect, useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";

const Table = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  // const data = {
  //   node:name.filter()
  // }

  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.131/toll_manage/appv1/get_plaza"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPlazaData();
  }, []);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      user.map((eachData, index) => ({
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

  const filteredData = user.filter((item) =>
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

  return (
    <>
      <div className="row  m-3">
        <div className="row ">
          <div className="col-3">
            <input
              className="form-control "
              id="search"
              value={search}
              type="text"
              onChange={handleSearch}
              placeholder="search"
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary btn-sm" onClick={downloadExcel}>
              Download Excel
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col ">
            <table className="table table-hover  ">
              <thead className="table-dark fs-6">
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Plaza id</th>
                  <th scope="col">Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((eachData, index) => (
                  <tr key={eachData.plaza_id}>
                    <th scope="row">{indexOfFirstItem + index + 1}</th>
                    <th scope="row">{eachData.plaza_id}</th>
                    <td>{eachData.name}</td>
                    <td>Del - Edit</td>
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
      </div>
    </>
  );
};

export default Table;
