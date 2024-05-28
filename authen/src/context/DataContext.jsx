import { Children, createContext, useEffect, useState } from "react";

export const DataContext = createContext("");

const DataProvider = ({ Children }) => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [postData, setPostData] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = async (postData) => {
    postData.preventDefault();
    try {
      const response = await fetch(
        "http://192.168.1.131/toll_manage/appv1/generate_report",
        {
          method: "POST",
          body: JSON.stringify({
            from: "2024-02-01",
            plaza_code: "20",
            to: "2024-02-01",
          }),
        }
      );
      if (response.ok) {
        const result2 = await response.json();
        setPostData(result2);
        console.log(result2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ handleSubmit, postData }}>
      {Children}
    </DataContext.Provider>
  );
};
