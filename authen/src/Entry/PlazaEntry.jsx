import SearchableSelect from "../pages/role/SearchSelectInput";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const PlazaEntry = () => {
  const { data3, setCode } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [rows, setRows] = useState([
    {
      id: 1,
      expense: "1",
      amount: "",
      voucherNo: "",
      narration: "",
    },
  ]);

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

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

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
  return (
    <>
      <div className="container-fluid ">
        <div className="row mb-4 ">
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
            <div className="col px-lg-5  ">
              <div className="form-group">
                <span>
                  Date <span className="text-danger">*</span>
                </span>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col px-lg-5  ">
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
      <div className="container-md ">
        <div className="row">
          <div className="col">
            <div className="border ">
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
                    />
                  </div>
                </div>
                <div className="col">
                  {/* <div className="d-flex p-2">
                    <label className="col-5">Cash Deposited In Bank</label>
                    <input
                      className="col-5 form-control"
                      type="text"
                      placeholder="0"
                    />
                  </div> */}
                </div>
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
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td>{index + 1}</td>
                      <td>
                        <select
                          className="form-control"
                          value={row.expense}
                          onChange={(e) =>
                            handleSelectChange(
                              row.id,
                              "expense",
                              e.target.value
                            )
                          }
                        >
                          <option value="1">Ankadhal</option>
                          <option value="2">B</option>
                          <option value="3">C</option>
                        </select>
                      </td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Amount"
                          value={row.amount}
                          onChange={(e) =>
                            handleInputChange(row.id, "amount", e.target.value)
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
                          onChange={(e) => {
                            handleInputChange(
                              row.id,
                              "narration",
                              e.target.value
                            );
                          }}
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
                </table>
                <button className="btn btn-primary" onClick={addRow}>
                  Add Row{" "}
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
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6 ">Total Cash Recived:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Cash Recived"
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Fast Tag Recivable :</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Fast Tag Recivable"
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Collection:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Collection"
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Total Expense:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Total Expense"
              />
            </div>
            <div className="row justify-content-between p-2">
              <label className="col-6">Closing Amount:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Closing Amount"
              />
            </div>
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlazaEntry;
