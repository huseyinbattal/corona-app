import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_TOKEN, API_URL } from "../consts/index";

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
      
      setData(response.data.result)
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, [queryText]);

    return (
        <>
            <div className="mb-4">
                <input value={queryText}/>
            </div>
        </>
    )

}

export default CoronaForCountry;
