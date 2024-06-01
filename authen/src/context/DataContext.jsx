import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { Api1, Api2, Api3, Api4, Api5, Api6 } from "./Apis";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");

  const [dayCons, setDayCons] = useState("");
  const [dayCons1, setDayCons1] = useState("");

  const [day, setDay] = useState("");
  const [day1, setDay1] = useState("");
  const [code, setCode] = useState("");

  const [postData, setPostData] = useState("");
  const [postData1, setPostData1] = useState("");

  useEffect(() => {
    // Fetch data from multiple APIs
    const fetchData1 = async () => {
      try {
        const response = await fetch(Api1);
        if (response.ok) {
          const data = await response.json();
          setData1(data);
          // console.log(data);
        } else {
          console.error("failed to fetch");
        }
      } catch (error) {
        console.log("Error Fetching Data", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const res = await fetch(Api2);
        if (res) {
          const plaza = await res.json();
          setData2(plaza);
          //   console.log(plaza);
        } else {
          console.log("first error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData3 = async () => {
      try {
        const response = await fetch(Api3);
        if (response.ok) {
          const result = await response.json();
          setData3(result.data);
          // console.log(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData4 = async () => {
      try {
        const response = await fetch(Api5);
        if (response.ok) {
          const data = await response.json();
          setData4(data);
          // console.log(data)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData2();
    fetchData1();
    fetchData3();
    fetchData4();
  }, []);

  const handlePostRequest = useCallback(async () => {
    try {
      const response = await fetch(Api4, {
        method: "POST",
        body: JSON.stringify({
          from: day,
          plaza_code: code,
          to: day1,
        }),
      });
      if (response.ok) {
        const result2 = await response.json();
        setPostData(result2);
        // console.log(result2);
      }
    } catch (error) {
      console.log(error);
    }
  }, [day, code, day1]);

  const handlePostRequest1 = useCallback(async () => {
    try {
      const response = await fetch(Api6, {
        method: "POST",
        body: JSON.stringify({
          from: dayCons,
          plaza_code: "",
          to: dayCons1,
        }),
      });
      if (response.ok) {
        const result2 = await response.json();
        setPostData1(result2);
        console.log(result2);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dayCons, dayCons1]);

  const contextValue = useMemo(
    () => ({
      handlePostRequest,
      handlePostRequest1,
      postData,
      postData1,
      data1,
      data2,
      data3,
      data4,
      setCode,
      setDay,
      setDay1,
      setDayCons1,
      setDayCons,
      setPostData,
      setPostData1,
    }),
    [
      handlePostRequest,
      handlePostRequest1,
      postData,
      postData1,
      data1,
      data2,
      data3,
      data4,
      setCode,
      setDay,
      setDay1,
      setDayCons1,
      setDayCons,
      setPostData,
      setPostData1,
    ]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
