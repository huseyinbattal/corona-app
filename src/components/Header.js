import React, { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function Header({ activeTitle, onMenuChange }) {
  const [_activeTitle, setActiveTitle] = useState(activeTitle);
  const [menuItems] = useState([
    {
      title: "Countries",
      value: 1,
    },
  
    {
      title: "Continents",
      value: 3,
    },
    {
      title: "All Records",
      value: 2,
    },
  ]);
  return (
    <nav className="bg-purple-600 border-gray-200 px-2 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo onMenuChange={ onMenuChange} />
        <div className="w-auto block">
          <ul className="flex flex-row font-semibold text-xs space-x-8 mt-0 ">
            {menuItems.map((item) => {
              return (
                <MenuItem
                  active={item.title === _activeTitle}
                  key={item.value}
                  title={item.title}
                  onClick={(title) => {
                    setActiveTitle(title);
                    onMenuChange(item.value);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  activeTitle: PropTypes.string,
  onMenuChange: PropTypes.func,
};

Header.defaultProps = {
  activeTitle: "Corona values by country",
  onMenuChange: () => null,
};

export default Header;
