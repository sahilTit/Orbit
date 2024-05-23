const Paginated = () => {
  return (
    <div>
      <div className="col-12">
        <div className="card1 m-2">
          <div className="card-body">
            <div className="card-deck">
              <div
                className="card bg-primary1"
                style="background-color: cadetblue;"
              >
                <div className="card-body text-center">
                  <p className="card-text text-white f-s-18">Sales</p>
                  <h5 className="card-title">285926.53</h5>
                </div>
              </div>
              <div
                className="card bg-warning1"
                style="background-color: #17b580;"
              >
                <div className="card-body text-center">
                  <p className="card-text text-light1 text-white f-s-18">
                    OutStanding
                  </p>
                  <h5 className="card-title">0</h5>
                </div>
              </div>
              <div
                className="card bg-success1"
                style="background-color: #5180bb;"
              >
                <div className="card-body text-center">
                  <p className="card-text text-light1 text-white f-s-18">
                    Petrol Sales
                  </p>
                  <h5 className="card-title">117845.28</h5>
                </div>
              </div>
              <div
                className="card bg-secondary1"
                style="background-color: rgb(226, 91, 91);"
              >
                <div className="card-body text-center">
                  <p className="card-text text-light1 text-white f-s-18">
                    Diesel Sales
                  </p>
                  <h5 className="card-title">188431.25</h5>
                </div>
              </div>
              <div
                className="card bg-secondary1"
                style="background-color: rgba(241, 133, 45, 0.918);"
              >
                <div className="card-body text-center">
                  <p className="card-text text-light1 text-white f-s-18">
                    Other Sales
                  </p>
                  <h5 className="card-title">300</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginated;
