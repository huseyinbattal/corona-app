import React from "react";
const countryImage="https://okanhastanesi.com.tr/upload/icerik/corona-virusu-nedir-nasil-bulasir_20200124152509.jpg"


function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
      <img className="w-full" src={countryImage} alt="country" />
    </div>
  );
}

export default Card;
