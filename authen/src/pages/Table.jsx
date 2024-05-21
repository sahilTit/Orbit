import { useEffect, useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";

const Table = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  return (
    <>
      <div className="col">
        <table className="table ">
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
        <button className="btn btn-primary" onClick={downloadExcel}>
          Download Excel
        </button>
      </div>
    </>
  );
};

export default Table;
