import React from "react";
import PropTypes from "prop-types";

function Logo({ logo, title,onMenuChange}) {
  return (
    <div className="flex items-center p-1">
      <img onClick={() => {
        onMenuChange(1)
      }} src={logo} alt={title} className="hover:shadow-lg hover:scale-110 transition-all cursor-pointer mr-3 h-12 rounded-xl" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        {title}
      </span>
    </div>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};

Logo.defaultProps = {
  title: "Corona App",
  logo: "https://media.istockphoto.com/vectors/stop-virus-corona-virus-monster-vector-logo-character-design-corona-vector-id1251479382",
};

export default Logo;
