import { useState } from "react";
import "./PlazaReport.css";
// import Select from "../pages/role/SearchSelectInput";
// import SearchSelectedInput from "../pages/role/SearchSelectInput";
import "react-datepicker/dist/react-datepicker.css";
import { Api8 } from "../context/Apis";
// import DatePicker from "react-datepicker";

const PlazaReport = () => {
  const [data, setData] = useState("");

  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(Api8, {
        method: "POST",
        body: JSON.stringify({
          from: "2024-01-04",
          plaza_code: "",
          to: "2024-06-04",
        }),
      });
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

  const gettotal = (value) => {
    const sums = {
      cash_1: 0,
      cash_2: 0,
      monthly_pass_amount: 0,
      gross_cash_rec: 0,
      total_fast_tag_cl: 0,
      expense_from_tp: 0,
      total_coll: 0,
      agreed_remittance: 0,
      total_expense_from_ho: 0,
      margin_without_expense: 0,
    };
  value &&  value.forEach((obj) => {
      for (const key in sums) {
        sums[key] += parseFloat(obj[key]) || 0;
      }
    })
    // console.log(sums['cash_1']);
    const total_sum = {
      cash_1: sums["cash_1"],
      cash_2: sums["cash_2"],
      monthly_pass_amount: sums["monthly_pass_amount"],
      gross_cash_rec: sums["gross_cash_rec"],
      total_fast_tag_cl: sums["total_fast_tag_cl"],
      expense_from_tp: sums["expense_from_tp"],
      total_coll: sums["total_coll"],
      agreed_remittance: sums["agreed_remittance"],
      total_expense_from_ho: sums["total_expense_from_ho"],
      margin_without_expense: parseFloat(
        parseFloat(sums["total_coll"]) - parseFloat(sums["agreed_remittance"])
      ),
      total_exp: parseFloat(
        parseFloat(sums["total_expense_from_ho"]) +
          parseFloat(sums["expense_from_tp"])
      ),
      net_coll: parseFloat(
        sums["total_coll"] -
          parseFloat(
            parseFloat(sums["total_expense_from_ho"]) +
              parseFloat(sums["expense_from_tp"])
          )
      ),
      non_fst_tg_pnlty: parseFloat(sums["cash_1"] / 2),
      "p/l": parseFloat(
        parseFloat(sums["total_coll"]) -
          parseFloat(sums["agreed_remittance"]) -
          parseFloat(
            parseFloat(sums["total_expense_from_ho"]) +
              parseFloat(sums["expense_from_tp"])
          ) -
          parseFloat(sums["cash_1"] / 2)
      ),
      per: parseFloat(
        parseFloat(
          parseFloat(
            parseFloat(
              parseFloat(sums["total_coll"]) -
                parseFloat(sums["agreed_remittance"])
            ) / parseFloat(sums["agreed_remittance"])
          )
        ) * 100
      ).toFixed(2),
      tcs: parseFloat(
        parseFloat(
          parseFloat(sums["cash_1"] / 2) + parseFloat(sums["agreed_remittance"])
        ) * 0.02
      ).toFixed(2),
    };
    // console.log(total_sum);
    return total_sum;
  };
  //   const TABLE_HEAD = ["Sr no","Toll Plaza Name","Remittance","TCS","TOTAL","NON FASTTAG CASH PENALTY","TCS ","TOTAL ","GRAND TOTAL","TOTAL COLLECTION"];

  const total_consolidate = gettotal(data);
  console.log(total_consolidate);

  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Weekly Remitance</div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Report</a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Weekly Report
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
                    From <span className="text-danger">*</span>
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
                    <input
                      type="date"
                      className="form-control"
                      value={toDate}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>
                    To <span className="text-danger ">*</span>
                  </span>
                  <div className="form-group">
                    {/* <Select
                      options={monthOptions}
                      value={selctedPlazaOrMonth}
                      onChange={handleSelectChange}
                    ></Select> */}
                    <input
                      type="date"
                      className="form-control"
                      value={fromDate}
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
