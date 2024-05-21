import { useEffect, useState } from "react";
const About = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.131/toll_manage/appv1/manage_user"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
          // console.log(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPlazaData();
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(user.length / itemsPerPage);

  return (
    <>
      <div className="col">
        <table className="table ">
          <thead className="">
            <tr>
              <th scope="col">sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Plaza</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              {/* <th scope="col">mobile</th> */}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((eachData, index) => (
              <tr key={eachData.email}>
                <th scope="row">{indexOfFirstItem + index + 1}</th>
                <td>{eachData.name}</td>
                <td>{eachData.plaza}</td>
                <td>{eachData.email}</td>
                <td>{eachData.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="">
          <ul className="pagination  ">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className="page-item">
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default About;

// auth token
// verify
