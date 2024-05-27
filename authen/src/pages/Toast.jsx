// import Card from "react-bootstrap/Card";
import { BsCashCoin } from "react-icons/bs";

import { useEffect, useState } from "react";
const Toast = () => {
  const [ions, setIons] = useState([]);
  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const post = await fetch(
          "http://192.168.1.131/toll_manage/appv1/detailfst"
        ).then((res) => res.json());
        // console.log(post.data);
        const result = post.data;
        // console.log(result);
        // const num = new Array(result.total_collection);
        // console.log(num);

        if (post) {
          const data = await result;
          setIons(data);
          // const data = await result.json();
          // console.log(data)
          // setIons(data);
          // setItems(data);
        } else {
          console.log("data not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPlazaData();
  }, []);
  // const array = new Array(
  //   ions.map((each) => {
  //     each.total_collection;
  //   })
  // );
  const array = ions.map((each) => parseFloat(each.total_collection));
  console.log(array);
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  console.log(sumWithInitial);
  // console.log(ions.map((each) => each.total_collection));
  // console.log(ions[0]);

  return (
    <>
      <div className="container-fluid  ">
        <div className="row mb-4">
          <div className="col-12 shadow">
            <nav className="pt-2 px-3">
              <div className="f-s-24 p-t-2 float-left">Home</div>

              <ul className="breadcrumb float-right bg-transparent m-b-1">
                <li className="breadcrumb-item">
                  <h6>Home</h6>
                </li>
                {/* <li className="breadcrumb-item active" aria-current="page">
                  Role
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col mt-2">
            <div className="card ">
              <div className="card-body text-center d-flex align-items-center ">
                <div className="fs-2 me-5">
                  <BsCashCoin />
                </div>
                <div>
                  <p>Total Collection</p>
                  <h5 className="card-title">{sumWithInitial}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card ">
              <div className="card-body text-center d-flex align-items-center ">
                <div className="fs-2 me-5">
                  <BsCashCoin />
                </div>
                <div>
                  <p>Total Collection</p>
                  <h5 className="card-title">{sumWithInitial}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card ">
              <div className="card-body text-center d-flex align-items-center ">
                <div className="fs-2 me-5">
                  <BsCashCoin />
                </div>
                <div>
                  <p>Total Collection</p>
                  <h5 className="card-title">{sumWithInitial}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card ">
              <div className="card-body text-center d-flex align-items-center ">
                <div className="fs-2 me-5">
                  <BsCashCoin />
                </div>
                <div>
                  <p className="">Total Collection</p>
                  <h5 className="fs-5 card-title">{sumWithInitial}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card ">
              <div className="card-body text-center d-flex align-items-center ">
                <div className="fs-2 me-5">
                  <BsCashCoin />
                </div>
                <div>
                  <p>Total Collection</p>
                  <h5 className="card-title">{sumWithInitial}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
