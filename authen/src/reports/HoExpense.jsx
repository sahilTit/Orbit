import { useContext, useState } from "react";
import "./PlazaReport.css";
import "react-datepicker/dist/react-datepicker.css";
import { DataContext } from "../context/DataContext";
import SearchableSelect from "../pages/role/SearchSelectInput";

const HoExpense = () => {
  const [data, setData] = useState("");

  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [selectedOption, setSelectedOption] = useState(null);
  const [code, setCode] = useState("");

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setCode(option ? option.value : null);
  };

  const { data3 } = useContext(DataContext);

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
        "http://192.168.1.131/toll_manage/appv1/hoexpense_detail",
        {
          method: "POST",
          body: JSON.stringify({
            plaza_code: code,
            to: fromDate,
            form: toDate,
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
              <div className="f-s-24 p-t-2 float-left">Ho Expense</div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Report</a>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Ho Expense Report
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
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="form-control"
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
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <div className="form-group">
                    <span>Plaza</span> <span className="text-danger ">*</span>
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
                    <th>Sr</th>
                    <th className="">Plaza Name</th>
                    <th>Date</th>
                    <th> Expense No</th>
                    <th>Amount </th>
                    <th>Narration</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((eachData, index) => (
                      <tr key={eachData.cash_1}>
                        <td>{index + 1}</td>
                        <td>{eachData.plaza}</td>
                        <td>{eachData.date_rep}</td>
                        <td>{eachData.name}</td>
                        <td>{eachData.amount}</td>
                        <td>{eachData.narration}</td>
                        {/* <td>Edit=I</td> */}
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

export default HoExpense;
