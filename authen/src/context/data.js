// src/context/DataContext.js
import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    // Fetch data from multiple APIs
    const fetchData1 = async () => {
      try {
        const response = await fetch('https://api.example.com/data1');
        const result = await response.json();
        setData1(result);
      } catch (error) {
        console.error('Error fetching data1:', error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await fetch('https://api.example.com/data2');
        const result = await response.json();
        setData2(result);
      } catch (error) {
        console.error('Error fetching data2:', error);
      }
    };

    fetchData1();
    fetchData2();
  }, []);

  const handlePostRequest = async (postData) => {
    try {
      const response = await fetch('https://api.example.com/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const result = await response.json();
      setPostData(result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <DataContext.Provider value={{ data1, data2, postData, handlePostRequest }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
