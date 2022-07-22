import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_TOKEN, API_URL } from "../consts";

function RecordedCorona() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(`${API_URL}totalData`, {
      headers: {
        authorization: API_TOKEN,
      },
    });

    setLoading(false);
    setData(response.data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-12">
      {loading ? (
        <p>Loading...</p>
      ) : (
          <>
            <h1 className="text-7xl mb-12 text-yellow-500">All Records</h1>
          <h1 className="text-6xl text-gray-600 mb-4">
            Total Cases:{" "}
            <span className="text-red-300 font-semibold">
              {data?.totalCases}
            </span>
          </h1>
          <h1 className="text-6xl text-gray-600 mb-4">
            Total Deaths:{" "}
            <span className="text-red-500 font-semibold">{data?.totalDeaths}</span>
          </h1>
          <h1 className="text-6xl text-gray-600">
            Total Recovered:{" "}
            <span className="text-green-600 font-semibold">{data?.totalRecovered}</span>
          </h1>
        </>
      )}
    </div>
  );
}

export default RecordedCorona;
