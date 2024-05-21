import { Link } from "react-router-dom";
const Toast = () => {
  return (
    <div>
      <div className="login">
        {/* <h2>Login</h2> */}
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Login</h2>

          {validationMessage && (
            <p style={{ color: "red", textAlign: "left" }} className="error">
              {validationMessage}
            </p>
          )}

          <label htmlFor="email">Email:-</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="Email"
            value={email}
            autoComplete="off"
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            onClick={handleEmailClick}
          />
          {emailTouched && emailerrors && (
            <p style={{ color: "red", textAlign: "left" }} className="error">
              {emailerrors}
            </p>
          )}

          <label htmlFor="password">Password:-</label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={password}
            autoComplete="off"
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            onClick={handlePasswordClick}
          />
          {passwordTouched && passworderrors && (
            <p style={{ color: "red", textAlign: "left" }} className="error">
              {passworderrors}
            </p>
          )}

          <button type="login">Login</button>
          <p className="link">
            Don't have account?<Link to="/">Signup here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Toast;

// Plaza Master
// plaza_Name
//Address
// plaza_Validity - from.Date= to.Date
//Opening Balnce
//Remidance
//plaza Type "Regular" - "Limited"
//Contract Amount
// 