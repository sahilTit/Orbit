import { useEffect, useState } from "react";
const About = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.131/toll_manage/appv1/manage_user"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
          console.log(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPlazaData();
  }, []);


  return (
    <>
      <div>
        <table className="table ">
          <thead className="">
            <tr>
              <th scope="col">sr.No</th>
              <th scope="col">name</th>
              <th scope="col">Plaza</th>
              <th scope="col">email</th>
              <th scope="col">mobile</th>
             {/* <th scope="col">mobile</th> */}
            </tr>
          </thead>
          <tbody>
            {user.map((eachData, index) => (
              <tr key={eachData.plaza_id}>
                <th scope="row">{index + 1}</th>
                <td>{eachData.name}</td>
                <td>{eachData.plaza}</td>
                <td>{eachData.email}</td>
                <td>{eachData.mobile}</td>
                {/* <td>{eachData.email}</td> */}
                {/* <td>{eachData.mobile}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default About;

// auth token
// verify
