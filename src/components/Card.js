import React from "react";
import PropTypes from "prop-types"
import cardImg from "../img/card-img.jpg";

// const countryImage="https://okanhastanesi.com.tr/upload/icerik/corona-virusu-nedir-nasil-bulasir_20200124152509.jpg"

function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
      <img className="w-full" src={cardImg} alt="country" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p className="text-gray-700 text-base">Total Case: 5000</p>
          <p className="text-gray-700 text-base">Total Deaths: 5000</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #5000
            </span>
      </div>
    </div>
  );
}

Card.propTypes = {
  country: PropTypes.string,
  onMenuChange: PropTypes.func,
};

Card.defaultProps = {
  country: "Corona values by country",
  onMenuChange: () => null,
};

export default Card;
