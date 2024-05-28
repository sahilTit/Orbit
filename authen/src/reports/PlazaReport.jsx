import { useState } from "react";

const PlazaReport = () => {
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/generate_report",
        {
          method: "POST",
          body: JSON.stringify({
            from: "2024-02-01",
            plaza_code: "20",
            to: "2024-02-01",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setData(data);
        console.log(data);
      }
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

      <div className="container">
        <div className="row p-2">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-sm-2">
                  <span>
                    From Date <span className="text-danger">*</span>
                  </span>
                  <div className="form-group">
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>
                    To Date <span className="text-danger">*</span>
                  </span>
                  <div className="form-group ">
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="col-sm-2">
                  <span>Plaza</span>
                  <div className="form-group">
                    <select className="form-select form-control" name="" id="">
                      <option value="1">Select Plaza</option>
                      <option value="2">1april</option>
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
                      {/* <!---<option value="pdf">PDF</option><option value="csv">CSV</option>---> */}
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

        <div className="row">
          <div className="col">
            <div className="table-responsive" id="printData">
              <table
                className="table table-hover table-bordered table-sm"
                cellSpacing="0"
                width="100%"
                id="exportTable"
              >
                <thead className="thead-light">
                  <tr>
                    <th
                      colSpan="13"
                      className="text-center border-bottom-0 p-0 m-0"
                    >
                      <h2>
                        <b> pump</b>{" "}
                      </h2>
                    </th>
                  </tr>

                  <tr>
                    <th
                      colSpan="13"
                      className="text-center border-top-0 border-bottom-0"
                    >
                      {" "}
                      Pump
                      <br />
                      Phone : Pump
                    </th>
                  </tr>

                  <tr>
                    <th
                      colSpan="13"
                      className="text-center border-top-0 border-bottom-0"
                    >
                      Purchase Report
                    </th>
                  </tr>

                  <tr>
                    <th
                      colSpan="13"
                      className="text-center border-top-0 border-bottom-0"
                    >
                      {" "}
                      Date : To Date
                    </th>
                  </tr>

                  <tr>
                    <th>Sr. No</th>

                    <th>Date</th>

                    <th>Supplier Name</th>

                    <th>Inv No</th>

                    <th>Pur. Basic</th>

                    <th>DLY</th>

                    <th>Tax</th>

                    <th>CESS</th>

                    <th>LFR + SVT</th>

                    <th>Disc.</th>

                    <th>TCS</th>

                    <th>Round Up</th>

                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>1</b>
                    </td>

                    <td>
                      <b>Date</b>
                    </td>

                    <td>
                      <b>Name</b>
                    </td>

                    <td>
                      <b>Purchase</b>
                    </td>

                    <td>
                      <b>
                        <span>1 2 3</span>
                        <span>123</span>
                      </b>
                    </td>

                    <td>
                      <b>Dly</b>
                    </td>

                    <td>
                      <b>
                        <span>Row</span>
                        <span>Row</span>
                      </b>
                    </td>

                    <td>
                      <b>Cess</b>
                    </td>

                    <td>
                      <b>Pur</b>
                    </td>

                    <td>
                      <b>Row</b>
                    </td>

                    <td>
                      <b>T</b>
                    </td>

                    <td>
                      <b>R</b>
                    </td>

                    <td>
                      <b>
                        <span style={{ float: "right" }}>0</span>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>

                    <td></td>

                    <td>Name</td>

                    <td>Quantity</td>

                    <td>Amount</td>

                    <td>Detail</td>

                    <td>
                      <span>vat</span>
                      <span>Amt</span>
                    </td>

                    <td>0</td>

                    <td>0</td>

                    <td>7</td>

                    <td>0</td>

                    <td>0.00</td>

                    <td>
                      <span style={{ float: "right" }}>Am</span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlazaReport;
