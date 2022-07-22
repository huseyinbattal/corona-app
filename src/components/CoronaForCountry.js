import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_TOKEN, API_URL } from "../consts/index";
import Card from "../components/Card";

function CoronaForCountry() {
  const [data, setData] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${API_URL}countriesData?country=${queryText}`,
      {
        headers: {
          authorization: API_TOKEN,
        },
      }
    );
    setLoading(false);
    setData(response.data.result);
    
    //console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, [queryText]);

  return (
    <>
      <div className="mb-4">
        <input
          placeholder="🔎 Search by country name"
          value={queryText}
          onChange={(e) => {
            setQueryText(e.target.value);
          }}
          className="text-purple-500 shadow border-2 appearance-none  rounded w-full py-2 px-3 font-bold text-2xl focus:outline-none focus:shadow-violet-600"
        />
      </div>
      {loading && <p>Loading</p>}
      <br />
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((item) => {
          return (
            <Card
              key={item.country}
              country={item.country}
              totalDeaths={item.totalDeaths}
              totalCase={item.totalCases}
              totalRecovered={item.totalRecovered}
            />
          );
        })}
      </div>
    </>
  );
}

export default CoronaForCountry;
