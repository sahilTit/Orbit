import { useEffect, useState } from "react";
import "./Table.css";
import * as XLSX from "xlsx/xlsx.mjs";

const Table = () => {
  const [user, setUser] = useState([]);

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

  return (
    <>
      <div>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">sr.No</th>
              <th scope="col">Plaza id</th>
              <th scope="col">name</th>
              {/* <th scope="col">email</th>
              <th scope="col">mobile</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((eachData, index) => (
              <tr key={eachData.plaza_id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">{eachData.plaza_id}</th>
                <td>{eachData.name}</td>
                {/* <td>{eachData.email}</td> */}
                {/* <td>{eachData.mobile}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={downloadExcel}>
          Download Excel
        </button>
      </div>
    </>
  );
};

export default Table;
