import { useState } from "react";
import "./Logt.css";
import { useNavigate } from "react-router-dom";
const Logt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log();
    try {
      const res = await fetch("http://192.168.1.131/toll_manage/appv1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(res);

      const data = await res.json();
      const token = data;
      console.log(data.ResponseCode);
      if (data.ResponseCode) {
        if (data.ResponseCode == 200) {
          localStorage.setItem("auth_token", JSON.stringify(token));
          navigate("/home");
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
      <div className="container">
        <div className="row mt-5">
          {/* {user && user.ResponseCode &&<div className="alert alert-danger">{user.ResponseMsg}</div>} */}

          <div className="spContainer card mx-auto p-5">
            <div className="card px-4 py-5 border-0 shadow">
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
        </div>
      </div>
    </>
  );
};

export default Logt;

//80 port number not seen all can be seen