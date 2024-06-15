import React, { useState, useContext, useEffect } from "react";
import SearchableSelect from "../pages/role/SearchSelectInput";
import { DataContext } from "../context/DataContext";
import { MdDeleteForever } from "react-icons/md";

const PlazaEntry = () => {
  const { data3 } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [date1, setDate1] = useState("");
  const [code, setCode] = useState("");
  const [openAmt, setOpenAmt] = useState("");
  const [data2, setData2] = useState([]);
  const [expenseOption, setExpenseOption] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      expense: "",
      amount: "",
      voucherNo: "",
      narration: "",
    },
  ]);

  // State variables for inputs
  const [advanceHO, setAdvanceHO] = useState(0);
  const [monthlyPassAmount, setMonthlyPassAmount] = useState(0);
  const [cash1, setCash1] = useState(0);
  const [onlineMonthlyPassAmount, setOnlineMonthlyPassAmount] = useState(0);
  const [cash2, setCash2] = useState(0);
  const [fastTagCollection, setFastTagCollection] = useState(0);
  const [cashDepositedByTc, setCashDepositedByTc] = useState(0);
  const [cashDepositedInBank, setCashDepositedInBank] = useState(0);
  const [cashDepositedInArcpl, setCashDepositedInArcpl] = useState(0);

  // Calculate closing amount based on inputs
  const closingAmount =
    parseFloat(openAmt) +
    parseFloat(advanceHO) +
    parseFloat(monthlyPassAmount) +
    parseFloat(cash1) +
    parseFloat(onlineMonthlyPassAmount) +
    parseFloat(cash2) +
    parseFloat(fastTagCollection) +
    parseFloat(cashDepositedByTc) +
    parseFloat(cashDepositedInBank) +
    parseFloat(cashDepositedInArcpl);

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform submission logic here
    console.log("Form submitted!");
  };

  // Function to handle fetching opening amount
  const onHandle = async (date1, code) => {
    const requestData = { date: date1, plaza: code };
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/getoa",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log("Data received from API:", responseData);
      setOpenAmt(responseData.io);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  // Function to fetch data2
  const fetchData2 = async () => {
    try {
      const res = await fetch(
        "http://192.168.1.131/toll_manage/appv1/expensehead"
      );
      if (res.ok) {
        const plaza = await res.json();
        setData2(plaza);
      } else {
        console.error("Error fetching expensehead data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (date1 && selectedOption) {
      onHandle(date1, selectedOption.value);
    }
  }, [date1, selectedOption]);

  useEffect(() => {
    fetchData2();
  }, []);

  // Function to add a new row in expenses table
  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      expense: "",
      amount: "",
      voucherNo: "",
      narration: "",
    };
    setRows([...rows, newRow]);
  };

  // Function to delete a row from expenses table
  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  // Function to handle input change in expenses table
  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  // Function to handle select change
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

  let selectedOpt = data2
    ? data2.map((eachdata) => ({
        label: eachdata.name,
        value: eachdata.id,
      }))
    : [];

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12 shadow">
            <nav className="pt-2 py-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Plaza Entry</div>
              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <a> Entry</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Plaza Entry
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-around px-lg-5">
        <form>
          <div className="row row-cols-2 mx-lg-n5">
            <div className="col px-lg-5">
              <div className="form-group">
                <span>
                  Date <span className="text-danger">*</span>
                </span>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setDate1(e.target.value)}
                />
              </div>
            </div>
            <div className="col px-lg-5">
              <div className="form-group">
                <span>Plaza</span>
                <SearchableSelect
                  options={plazaOption}
                  value={selectedOption}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container-md">
        <div className="row">
          <div className="col">
            <div className="border">
              <div className="col d-flex justify-content-center">
                Collection
              </div>
              <div className="row gx-5">
                <div className="col">
                  <div className="row p-2">
                    <label className="col-5">Advance From H.O</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={advanceHO}
                      onChange={(e) => setAdvanceHO(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex p-2">
                    <label className="col-5">Monthly Pass Amount</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={monthlyPassAmount}
                      onChange={(e) => setMonthlyPassAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col">
                  <div className="row p-2">
                    <label className="col-5">Cash 1</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={cash1}
                      onChange={(e) => setCash1(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex p-2">
                    <label className="col-5">Online Monthly Pass Amount</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={onlineMonthlyPassAmount}
                      onChange={(e) =>
                        setOnlineMonthlyPassAmount(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col">
                  <div className="row p-2">
                    <label className="col-5">Cash 2</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={cash2}
                      onChange={(e) => setCash2(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex p-2">
                    <label className="col-5">Cash Deposited By Tc</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={cashDepositedByTc}
                      onChange={(e) => setCashDepositedByTc(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col">
                  <div className="row p-2">
                    <label className="col-5">Fast Tag Collection</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={fastTagCollection}
                      onChange={(e) => setFastTagCollection(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex p-2">
                    <label className="col-5">Cash Deposited In Bank</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={cashDepositedInBank}
                      onChange={(e) => setCashDepositedInBank(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col">
                  <div className="row p-2">
                    <label className="col-5">Cash Deposited In Arcpl</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                      value={cashDepositedInArcpl}
                      onChange={(e) => setCashDepositedInArcpl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
            <div className="border">
              <div className="col d-flex justify-content-center">Expenses</div>
              <div className="p-2">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Expense</th>
                      <th>Amount</th>
                      <th>Voucher No</th>
                      <th>Naration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={row.id}>
                        <td>{index + 1}</td>
                        <td>
                          <SearchableSelect
                            options={selectedOpt}
                            value={row.expense}
                            onChange={(option) =>
                              handleInputChange(row.id, "expense", option)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Amount"
                            value={row.amount}
                            onChange={(e) =>
                              handleInputChange(
                                row.id,
                                "amount",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Voucher No"
                            value={row.voucherNo}
                            onChange={(e) =>
                              handleInputChange(
                                row.id,
                                "voucherNo",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            type="text"
                            className="form-control"
                            rows="1.9"
                            placeholder="Narration"
                            value={row.narration}
                            onChange={(e) =>
                              handleInputChange(
                                row.id,
                                "narration",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="">
                          <MdDeleteForever
                            onClick={() => deleteRow(row.id)}
                            style={{ cursor: "pointer", color: "red" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  className="btn btn-primary"
                  onClick={addRow}
                  type="button"
                >
                  Add Row
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 border">
            <div className="col d-flex justify-content-center">
              Summary Report
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Opening Amount:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Opening Amount"
                value={openAmt}
                readOnly
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Cash Received:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Cash Received"
                value={
                  parseFloat(advanceHO) +
                  parseFloat(cash1) +
                  parseFloat(cash2) +
                  parseFloat(fastTagCollection) +
                  parseFloat(cashDepositedByTc) +
                  parseFloat(cashDepositedInBank) +
                  parseFloat(cashDepositedInArcpl)
                }
                readOnly
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Fast Tag Receivable :</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Fast Tag Receivable"
                value={onlineMonthlyPassAmount}
                readOnly
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Collection:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Collection"
                value={
                  parseFloat(openAmt) +
                  parseFloat(advanceHO) +
                  parseFloat(monthlyPassAmount) +
                  parseFloat(cash1) +
                  parseFloat(onlineMonthlyPassAmount) +
                  parseFloat(cash2) +
                  parseFloat(fastTagCollection) +
                  parseFloat(cashDepositedByTc) +
                  parseFloat(cashDepositedInBank) +
                  parseFloat(cashDepositedInArcpl)
                }
                readOnly
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Expense:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Expense"
                value={rows.reduce(
                  (total, row) => total + parseFloat(row.amount || 0),
                  0
                )}
                readOnly
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Closing Amount:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Closing Amount"
                value={closingAmount}
                readOnly
              />
            </div>
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-warning" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlazaEntry;
