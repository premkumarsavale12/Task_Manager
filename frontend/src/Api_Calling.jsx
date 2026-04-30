import React, { useEffect, useState } from "react";
import axios from "axios";

const Api_Calling = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const FetchApiData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(res.data);
    setFilteredData(res.data);
  };

  useEffect(() => {
    FetchApiData();
  }, []);

  const handleSearch = (value) => {
    setSearchVal(value);

    if (value === "") {
      setFilteredData(data);
    } else {
      const result = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(result);
    }
  };

  return (
    <>
      <h1>This is Api Calling ....</h1>

      <input
        type="text"
        placeholder="Search Here........"
        value={searchVal}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {filteredData.map((item) => (
        <div key={item.id}>
          <h2>Name :- {item.name}</h2>
          <h4>Email :- {item.email}</h4>
          <h5>Company Name :- {item.company.name}</h5>
        </div>
      ))}
    </>
  );
};

export default Api_Calling;