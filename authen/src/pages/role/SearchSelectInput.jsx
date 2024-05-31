// src/components/SearchableSelect.jsx

import { useContext, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";

const SearchableSelect = () => {
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ];
  // console.log(options)
  const { data3, setCode } = useContext(DataContext);
  // console.log(data3 && data3.map((e) => ({ value: e.plaza_id })));
  // const manage = data3 && data3.map((e) => ({ value: e.plaza_id }));
  // console.log(manage);

  let options = [
    data3 &&
      data3.map((eachData) => ({
        label: eachData.plaza,
        value: eachData.plaza_id,
      })),
  ];
  const Arry = options.flat();
  // console.log(Arry);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    setCode(option ? option.value : null);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={Arry}
      isSearchable
    />
  );
};

export default SearchableSelect;
