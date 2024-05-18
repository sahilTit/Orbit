import { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://65e993bdc9bf92ae3d3989a4..io/sahil-21/login-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, pass }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.error) {
        setErrMsg(data.error);
      } else {
        console.log(data);
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("User name taken");
      } else {
        errMsg("LoginFailure");
      }
    }
  };

  return (
    <div className={style.main}>
      <section className={style.sect}>
        <h1 className={style.log}>Login Into Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.iner}>
            {/* <input
              className={style.inp}
              type="text"
              id="username"
              /> */}
            <input
              value={user}
              autoComplete="off"
              required
              onChange={(e) => setUser(e.target.value)}
              placeholder="User Name"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
            <br />
            <input
              className={style.inp}
              type="password"
              id="password"
              required
              value={pass}
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <br />
          <button className={style.btn}>Login</button>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/signup">Sign In</Link>
            </span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
