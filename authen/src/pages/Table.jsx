import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
const Table = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userData = localStorage.getItem("auth_token");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log(parsedData);
      setUser(parsedData);
    }
  }, []);
  console.log(user.ResponseCode);
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };
  return (
    <>
      <div className="">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">mobile</th>
              {/* <th scope="col">role</th> */}
            </tr>
          </thead>
          <tbody>
            {user && user.user && (
              <tr>
                <th scope="row">{user.user.id}</th>
                <td>{user.user.name}</td>
                <td>{user.user.email}</td>
                <td>{user.user.mobile}</td>
                {/* <td>{user.user.role}</td> */}
              </tr>
            )}
          </tbody>
        </table>
        {/* <button onClick={handleLogout}>logOut</button> */}
        {/* {user && user.ResponseCode && (
          <div className="alert alert-danger">{user.ResponseMsg}</div>
        )} */}
      </div>
    </>
  );
};

export default Table;
