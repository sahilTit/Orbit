import { useState } from "react";
import "./PlazaReport.css";
// import Select from "../pages/role/SearchSelectInput";
// import SearchSelectedInput from "../pages/role/SearchSelectInput";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";

const PlazaReport = () => {
  const [data, setData] = useState("");

  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("2024");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/monthly_report_cons1",
        {
          method: "POST",
          body: JSON.stringify({
            month: month,
            year: year,
          }),
        }
      );
      if (response.ok) {
        const response1 = await response.json();
        // console.log(response1);
        setData(response1);
      }
      // console.log(response1);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">
                Consolidate Report II
              </div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Report</a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Consolidate Report
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
                    Choose Month <span className="text-danger">*</span>
                  </span>
                  <div className="form-group">
                    {/* <DatePicker
                      selected={startdate}
                      value={startdate}
                      onChange={(date) => {
                        setStartDate(date);
                        setDay1(date.target.value);
                      }}
                    /> */}
                    {/* <Select
                      options={yearOptions}
                      value="Year"
                      onChange={handleSelectChange}
                    ></Select> */}
                    <select
                      id="inputState"
                      onChange={(e) => {
                        setMonth(e.target.value);
                      }}
                      className=" form-control f-s-17"
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">Septemper</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>
                    To Date <span className="text-danger ">*</span>
                  </span>
                  <div className="form-group">
                    {/* <Select
                      options={monthOptions}
                      value={selctedPlazaOrMonth}
                      onChange={handleSelectChange}
                    ></Select> */}
                    <select
                      id=""
                      onChange={(e) => setYear(e.target.value)}
                      className="form-control f-s-17"
                    >
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
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

        <div className="row p-20">
          <div className="col">
            <div className="table-responsive" id="printData">
              <table
                className="table responsive table-hover table-bordered table-sm"
                cellSpacing="3"
                id="exportTable"
              >
                <thead className="thead-light">
                  {/* <tr>
                    <th
                      colSpan="22"
                      className="text-center border-top-0 border-bottom-0"
                    >
                      {setDayCons} : To {setDayCons1}
                    </th>
                  </tr> */}

                  <tr>
                    <th className="">Name</th>
                    <th>Toll Plaza Name</th>
                    <th>cash 1</th>
                    <th>CASH 2</th>
                    <th>MONTHLY PASS AMOUNT</th>
                    <th>Gross Cash Collection</th>
                    <th>Fast Tag Collection</th>
                    <th>Total Collection</th>
                    {/* <th>Salary</th> */}
                    <th>Agreed Remidance</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((eachData, index) => (
                      <tr key={eachData.cash_1}>
                        <td>{index + 1}</td>
                        <td>{eachData.name}</td>
                        <td>{eachData.cash_1}</td>
                        <td>{eachData.cash_2}</td>
                        <td>{eachData.monthly_pass_amount}</td>
                        <td>{eachData.gross_cash_rec}</td>
                        <td>{eachData.total_fast_tag_cl}</td>
                        <td>{eachData.total_coll}</td>
                        <td>{eachData.agreed_remittance}</td>
                        <td>Edit=I</td>
                      </tr>
                    ))}
                </tbody>
                {/* <tbody>
                  <tr>
                    <td colSpan="10">
                      Total
                    </td>
                    <td>
                      Parse
                    </td>
                    <td colSpan="2">
                      
                        <span style={{ float: "right" }}>0</span>
                      
                    </td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlazaReport;

// const [selctedPlazaOrMonth, setSelectedPlazaOrMonth] = useState(null);

// const handleSelectChange = (option) => {
//   setSelectedPlazaOrMonth(option);
// };

// const monthOptions = [
//   { label: "January", value: "01" },
//   { label: "February", value: "02" },
//   { label: "March", value: "03" },
//   { label: "April", value: "04" },
//   { label: "May", value: "05" },
//   { label: "June", value: "06" },
//   { label: "July", value: "07" },
//   { label: "August", value: "08" },
//   { label: "September", value: "09" },
//   { label: "October", value: "10" },
//   { label: "November", value: "11" },
//   { label: "December", value: "12" },
// ];

// const yearOptions = [
//   { year: "2024" },
//   { label: "2023" },
//   { label: "2022" },
//   { label: "2021" },
//   { label: "2020" },
//   { label: "2019" },
// ];
