// src/components/SearchableSelect.jsx

import { useEffect, useState } from "react";
import Select from "react-select";

const SearchableSelect = ({ options = [], value, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleChange = (option) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable
    />
  );
};

export default SearchableSelect;
