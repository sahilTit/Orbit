import SearchableSelect from "../pages/role/SearchSelectInput";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useState } from "react";

const PlazaEntry = () => {
  const { data3, setCode } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);

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
      <div class="container d-flex justify-content-around px-lg-5">
        <form>
          <div class="row row-cols-2 mx-lg-n5">
            <div class="col px-lg-5  ">
              <div className="form-group">
                <span>
                  Date <span className="text-danger">*</span>
                </span>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div class="col px-lg-5  ">
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
      <div class="container">
        <div class="row">
          <div class="col-4 border">
            <div className="col d-flex justify-content-center">Summary Report</div>
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
              <label className="col-6">Closing Amount:</label>
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Closing Amount"
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
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
          <div class="col">
            <div className="border ">Collection</div>
            <div className="border">Expenses</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlazaEntry;
