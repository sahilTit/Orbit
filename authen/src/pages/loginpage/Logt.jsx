import { useState } from "react";
import "./Logt.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../context/Apis";
import CryptoJS from "crypto-js";

const Logt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  // const encryptAndStoreData = (data, key) => {
  //   localStorage.clear();
  //   let encryptedData = CryptoJS.AES.encrypt(data, key).toString();
  //   localStorage.setItem("encryptedData", encryptedData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(Login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      const token = data;
      // encryptAndStoreData(data, "auth_token");
      console.log(JSON.stringify(data));
      if (data.ResponseCode) {
        if (data.ResponseCode == 200) {
          const encryptedToken = JSON.stringify(token);
          var encrypt = CryptoJS.AES.encrypt(
            encryptedToken,
            "auth_token"
          ).toString();
          localStorage.setItem("auth_token", encrypt);
          navigate("/home");
          // localStorage.setItem("auth_token", JSON.stringify(token));
          // console.log(encryptedToken);
          // console.log(encrypt)
          // encryptAndStoreData(encryptedToken, "auth_token");
          // encryptAndStoreData(JSON.stringify(data), "auth_token");
          sessionStorage.setItem("auth_token", JSON.stringify(token));
        } else if (data.ResponseCode == 401) {
          setErrMsg(`${data.ResponseMsg}`);
        } else if (data.ResponseCode == 402) {
          setErrMsg(`${data.ResponseMsg}`);
        }
        return;
      }
    } catch (err) {
      setErrMsg(`No Server Response`);
    }
  };

  return (
    <>
      <div className="maindiv">
        <div className="card px-5 py-5  shadow">
          <div className="d-inline text-left mb-5">
            <h3 className="font-weight-bold text-center">Login</h3>
            {errMsg && <div className="alert alert-danger">{errMsg}</div>}
          </div>
          <form
            className="d-inline text-center mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="d-inline text-center mb-2">
              <div className="form-group mx-auto pb-3">
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control inpSp"
                  type="email"
                  placeholder="User-Email"
                />
              </div>
            </div>
            <div className="d-inline text-center mb-3">
              <div className="form-group mx-auto  pb-3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control inpSp"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="d-inline text-left mb-3">
              <div className="form-group mx-auto">
                <button className="btn btn-danger">Confirm</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logt;
