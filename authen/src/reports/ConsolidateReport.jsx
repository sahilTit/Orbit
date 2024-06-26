import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./PlazaReport.css";
// import SearchSelectedInput from "../pages/role/SearchSelectInput";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";

const PlazaReport = () => {
  const { handlePostRequest1, postData1, setDayCons, setDayCons1 } =
    useContext(DataContext);

  // console.log(postData1);
  // State for date inputs
  // const [startdate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFromDate(today);
    setToDate(today);
    setDayCons(today);
    setDayCons1(today);
  }, [setDayCons, setDayCons1]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDayCons(fromDate);
    setDayCons1(toDate);
    handlePostRequest1();
  };
  // console.log(postData1);
  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">
                Consolidate Report I
              </div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Report</a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Report
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
                    From Date <span className="text-danger">*</span>
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
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                        setDayCons(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>
                    To Date <span className="text-danger">*</span>
                  </span>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      value={toDate}
                      onChange={(e) => {
                        setToDate(e.target.value);
                        setDayCons1(e.target.value);
                      }}
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

        <div className="row p-20">
          <div className="col">
            <div className="" id="printData">
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
                      {postData1[0].date_rep} : To {setDayCons1}
                    </th>
                  </tr> */}

                  <tr>
                    <th className="">Date</th>
                    <th>OPENING AMOUNT</th>
                    <th>ADVANCE FROM H.O</th>
                    <th>CASH 1</th>
                    <th>CASH 2</th>
                    <th>MONTHLY PASS AMOUN</th>
                    <th>ONLINE MONTHLY PASS AMOUNT</th>
                    <th>GROSS CASH RECEIVABLE FROM TOLL PLAZA</th>
                    <th>m-1</th>
                    <th>m-2</th>
                    <th>OPERATOR</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {postData1 &&
                    postData1.map((eachData) => (
                      <tr key={eachData.id}>
                        <td>{eachData.date_rep}</td>
                        <td>{eachData.initial_opn}</td>
                        <td>{eachData.cash_1}</td>
                        <td>{eachData.cash_2}</td>
                        <td>{eachData.monthly_pass_amount}</td>
                        <td>{eachData.gross_cash_rec}</td>
                        <td>{eachData.total_coll}</td>
                        <td>{eachData.total_coll}</td>
                        <td>{eachData.total_expense_from_ho}</td>
                        <td>{eachData.expense_from_tp}</td>
                        <td>{eachData.total_fast_tag_cl}</td>
                        {/* <td>{eachData.}</td> */}
                        {/* <td>{eachData.cash_dep_arcpl}</td>
                        <td>{eachData.cash_kpt}</td>
                        <td>{eachData.salary}</td>
                        <td>{eachData.diff_reciev}</td>
                        <td>{eachData.total_fast_tag_cl}</td>
                        <td>{eachData.total_coll}</td>
                        <td>{eachData.operator}</td> */}
                        <td>edit</td>
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
