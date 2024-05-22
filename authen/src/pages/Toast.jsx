import { useEffect, useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";

const Table = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = user.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="col">
        <div className="d-flex justify-content-between mb-3">
          <label htmlFor="search">
            Search:
            <input id="search" type="text" value={search} onChange={handleSearch} />
          </label>
          <button className="btn btn-primary" onClick={downloadExcel}>
            Download Excel
          </button>
        </div>
        <table className="table">
          <thead>
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
        <nav>
          <ul className="pagination .ngx-pagination">
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


// Plaza Master
// plaza_Name
//Address
// plaza_Validity - from.Date= to.Date
//Opening Balnce
//Remidance
//plaza Type "Regular" - "Limited"
//Contract Amount
// 