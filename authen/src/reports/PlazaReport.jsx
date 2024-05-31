import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import "./PlazaReport.css";
// import SearchSelectedInput from "../pages/role/SearchSelectInput";
import SearchableSelect from "../pages/role/SearchSelectInput";
const PlazaReport = () => {
  const { handlePostRequest, postData, setDay, setDay1 } =
    useContext(DataContext);

  // State for date inputs
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];
    setFromDate(today);
    setToDate(today);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDay(fromDate);
    setFromDate(toDate);
    handlePostRequest();
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Purchase Report</div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a>Stock Report</a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Purchase Report
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="">
        <div className="row p-2">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-sm-2">
                  <span>
                    From Date <span className="text-danger">*</span>
                  </span>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                        setDay(e.target.value);
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
                        setDay1(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>Plaza</span>
                  <div className="form-group">
                    <SearchableSelect />
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
                className="table table-responsive table-hover table-bordered table-sm"
                cellSpacing="0"
                width="100%"
                id="exportTable"
              >
                <thead className="thead-light">
                  <tr>
                    <th
                      colSpan="22"
                      className="text-center border-top-0 border-bottom-0"
                    >
                      Date : To Date
                    </th>
                  </tr>

                  <tr>
                    <th>Sr. No</th>
                    <th>Date</th>
                    <th>OPENING AMOUNT</th>
                    <th>ADVANCE FROM H.O</th>
                    <th>CASH 1</th>
                    <th>CASH 2</th>
                    <th>MONTHLY PASS AMOUN</th>
                    <th>ONLINE MONTHLY PASS AMOUNT</th>
                    <th>GROSS CASH RECEIVABLE FROM TOLL PLAZA</th>
                    <th>
                      TOTAL CASH RECEIVED FROM TC INCLUDING BALAJI CASH RECEIPTS
                    </th>
                    <th>TOTAL RECEPTS FROM TC</th>
                    <th>SHORT/EXCESS COLLECTION FROM TC</th>
                    <th>CASH DEPOSITED DIRECTLY TO BANK</th>
                    <th>CASH DEPOSITED IN ARCPL OFFICE</th>
                    <th>TOTAL EXPENSES</th>
                    <th>SALARY</th>
                    <th>DIFFERENCE CASH IN TOLL PLAZA</th>
                    <th>TOTAL FAST TAG COLLECTION</th>
                    <th>TOTAL COLLECTION</th>
                    <th>OPERATOR</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {postData.data &&
                    postData.data.map((eachData, index) => (
                      <tr key={eachData.id}>
                        <td>
                          <b>{index + 1}</b>
                        </td>
                        <td>
                          <b>{eachData.date_rep}</b>
                        </td>
                        <td>
                          <b>{eachData.initial_opn}</b>
                        </td>
                        <td>
                          <b>{eachData.adv_from_ho}</b>
                        </td>
                        <td>
                          <b>{eachData.total_cash_recievable}</b>
                        </td>
                        <td>
                          <b>{eachData.balaji}</b>
                        </td>
                        <td>
                          <b>{eachData.monthly_pass_amt}</b>
                        </td>
                        <td>
                          <b>{eachData.cash_dep_bank}</b>
                        </td>
                        <td>
                          <b>{eachData.total_cash}</b>
                        </td>
                        <td>
                          <b>{eachData.total_cash}</b>
                        </td>
                        <td>
                          <b>{eachData.total_cash}</b>
                        </td>
                        <td>
                          <b>{eachData.short_excess_tc}</b>
                        </td>
                        <td>
                          <b>{eachData.cash_dep_bank}</b>
                        </td>
                        <td>
                          <b>{eachData.cash_dep_arcpl}</b>
                        </td>
                        <td>
                          <b>{eachData.cash_kpt}</b>
                        </td>
                        <td>
                          <b>{eachData.salary}</b>
                        </td>
                        <td>
                          <b>{eachData.diff_reciev}</b>
                        </td>
                        <td>
                          <b>{eachData.total_fast_tag_cl}</b>
                        </td>
                        <td>
                          <b>{eachData.total_coll}</b>
                        </td>
                        <td>
                          <b>{eachData.operator}</b>
                        </td>
                        <td>
                          <b>edit</b>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {/* <tbody>
                  <tr>
                    <td colSpan="10">
                      <b>Total</b>
                    </td>
                    <td>
                      <b>Parse</b>
                    </td>
                    <td colSpan="2">
                      <b>
                        <span style={{ float: "right" }}>0</span>
                      </b>
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
