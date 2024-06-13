import { useState, useContext } from "react";
import "./PlazaReport.css";
import "react-datepicker/dist/react-datepicker.css";
import { DataContext } from "../context/DataContext";
import SearchableSelect from "../pages/role/SearchSelectInput";

const groupAndSumData = (data) => {
  const groupedData =
    data &&
    data.reduce((acc, item) => {
      const key = item.name;
      if (!acc[key]) {
        acc[key] = {
          name: "",
          total_collection: 0,
          total_agreed_remittance: 0,
        };
      }
      acc[key].name = item.name;
      acc[key].total_collection += parseFloat(item.total_coll);
      acc[key].total_agreed_remittance += parseFloat(item.remittance);

      return acc;
    }, {});

  return Object.values(groupedData);
};

const PlazaReport = () => {
  const [data, setData] = useState([]);
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const { data3 } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [code, setCode] = useState(null);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setCode(option ? option.value : null);
  };

  let plazaOption = data3
    ? data3.map((eachData) => ({
        label: eachData.plaza,
        value: eachData.plaza_id,
      }))
    : [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/fremi",
        {
          method: "POST",
          body: JSON.stringify({
            plaza_code: code,
            to: "2024-06-07",
            from: "2024-01-07",
            date: "2024-06-07",
          }),
        }
      );
      if (response) {
        const response1 = await response.json();
        setData(response1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const groupData = groupAndSumData(data?.Data || []);
  // console.log(groupData)

  const renderTableA = () => {
    return (
      <div className="row p-20">
        <div className="col">
          <div className="table-responsive" id="printData">
            <table
              className="table responsive table-hover table-bordered table-sm"
              cellSpacing="3"
              id="exportTable"
            >
              <thead className="thead-light">
                <tr>
                  <th className="">Sr No</th>
                  <th>Name</th>
                  <th>Total Remitance</th>
                  <th>Total Collection</th>
                </tr>
              </thead>
              <tbody>
                {groupData &&
                  groupData.map((eachData, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{eachData.name}</td>
                      <td>{eachData.total_agreed_remittance}</td>
                      <td>{eachData.total_collection}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderTableB = () => (
    <div className="row p-20">
      <div className="col">
        <div className="table-responsive" id="printData">
          <table
            className="table responsive table-hover table-bordered table-sm"
            cellSpacing="3"
            id="exportTable"
          >
            <thead className="thead-light">
              <tr>
                <th className="">Sr No</th>
                <th>Date</th>
                <th>Remi</th>
                <th>Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {data?.Data &&
                data.Data.map((eachData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{eachData.date_rep}</td>
                    <td>{eachData.remittance}</td>
                    <td>{eachData.total_coll}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTable = () =>
    data.ResponseCode == 201 ? renderTableA() : renderTableB();

  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Collection </div>
              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Report</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Collection
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="">
        <div className="row p-l-50">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-sm-2">
                  <span>
                    Date <span className="text-danger">*</span>
                  </span>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                        setToDate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>
                    To <span className="text-danger ">*</span>
                  </span>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      value={toDate}
                      onChange={(e) => {
                        setToDate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>Plaza</span>
                  <div className="form-group">
                    <SearchableSelect
                      options={plazaOption}
                      value={selectedOption}
                      onChange={handleSelectChange}
                    />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary mr-2 btn-sm"
                      onClick={handleSubmit}
                    >
                      Search
                    </button>{" "}
                    <button className="btn btn-warning mr-2 btn-sm ">
                      Print
                    </button>
                    <select className="btn btn-warning btn-sm p-t-8 p-b-8">
                      <option value="">Export As</option>
                      <option value="xlsx">XLSX</option>
                      <option value="xls">XLS</option>
                      <option value="png">PNG</option>
                      <option value="txt">TXT</option>
                      <option value="json">JSON</option>
                      <option value="xml">XML</option>
                      <option value="doc">DOC</option>
                      <option value="docx">DOCX</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>{renderTable()}</div>
      </div>
    </>
  );
};

export default PlazaReport;

