const Paginated = () => {
  return (
    <>
      <div className="col-12 mb-4 pt-3">
        <div className="col-12 me-2 shadow d-flex justify-content-between align-items-center">
          <div className="fs-3 p-2">Dashboard</div>
          <ul className="breadcrumb  bg-transparent mb-1 fs-6 p-2">
            <li className="breadcrumb-item">
              <a>Home</a>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              Dash
            </li>
          </ul>
        </div>
      </div>

      <div className="container text-center">
        <div className="row g-2">
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
          <div className="col-6">
            <div className="p-3">Custom column padding</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paginated;
