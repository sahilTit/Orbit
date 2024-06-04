import { useEffect, useState } from "react";
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
          from: fromDate,
          plaza_code: "",
          to: toDate,
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
  // console.log(data);

  // const aggredData =
  //   data &&
  //   data.reduce((acc, curr) => {
  //     const name = curr.name;
  //     if (!acc[name]) {
  //       acc[name] = [];
  //     }
  //     acc[name].push(curr);
  //     return acc;
  //   }, {});

  // console.log(aggredData);
  // console.log(aggredData["BADEWADI "]);

  const groupAndSumData = (data) => {
    const groupedData =
      data &&
      data.reduce((acc, item) => {
        const key = item.name;
        if (!acc[key]) {
          acc[key] = {
            name: "",
            total_cash_1: 0,
            total_cash_2: 0,
            total_monthly_pass_amount: 0,
            total_gross_cash_rec: 0,
            total_fast_tag_cl: 0,
            total_expense_from_tp: 0,
            total_coll: 0,
            total_agreed_remittance: 0,
            total_total_expense_from_ho: 0,
            total_margin_without_expense: 0,
          };
        }
        acc[key].name = item.name;
        acc[key].total_cash_1 += parseFloat(item.cash_1);
        acc[key].total_cash_2 += parseFloat(item.cash_2);
        acc[key].total_monthly_pass_amount += parseFloat(
          item.monthly_pass_amount
        );
        acc[key].total_gross_cash_rec += parseFloat(item.gross_cash_rec);
        acc[key].total_fast_tag_cl += parseFloat(item.total_fast_tag_cl);
        acc[key].total_expense_from_tp += parseFloat(item.expense_from_tp);
        acc[key].total_coll += parseFloat(item.total_coll);
        acc[key].total_agreed_remittance += parseFloat(item.agreed_remittance);
        acc[key].total_total_expense_from_ho += parseFloat(
          item.total_expense_from_ho
        );
        acc[key].total_margin_without_expense += parseFloat(
          item.margin_without_expense
        );

        return acc;
      }, {});

    return Object.values(groupedData);
  };
  const wrap = groupAndSumData(data);
  console.log(wrap);
  // console.log(wrap.map((e)=>{e.name}))

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
                      value={fromDate}
                      onChange={(e) => {
                        setFromDate(e.target.value);
                      }}
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
                      value={toDate}
                      onChange={(e) => {
                        setToDate(e.target.value);
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
                    <th>Agreed Remidance</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {wrap &&
                    wrap.map((eachData, index) => (
                      <tr key={eachData.total_coll}>
                        <td>{index + 1}</td>
                        <td>{eachData.name}</td>
                        <td>{eachData.total_cash_1}</td>
                        <td>{eachData.total_cash_2}</td>
                        <td>{eachData.total_monthly_pass_amount}</td>
                        <td>{eachData.total_gross_cash_rec}</td>
                        <td>{eachData.total_fast_tag_cl}</td>
                        <td>{eachData.total_expense_from_tp}</td>
                        <td>{eachData.total_coll}</td>
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
