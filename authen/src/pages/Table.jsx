import { useEffect, useState } from "react";
import "./Table.css";
const Table = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userData = localStorage.getItem("auth_token");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  return (
    <>
      <div >
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">mobile</th>
            </tr>
          </thead>
          <tbody>
            {user && user.user && (
              <tr>
                <th scope="row">{user.user.id}</th>
                <td>{user.user.name}</td>
                <td>{user.user.email}</td>
                <td>{user.user.mobile}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
