import { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import "../styles/dropdown.css";

export const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="dropdown_container">
      <div className="dropdown_box">
        <button
          className="button"
          onClick={() => {
            setShowMenu((preValue) => !preValue);
          }}>
          Click Me <MdArrowDropDown size={30} />{" "}
        </button>
        {showMenu && (
          <ul className="dropdown_menu">
            <li className="dropdown_item">active link</li>
            <li className="dropdown_item">another active link</li>
            <li className="dropdown_item">disable link</li>
          </ul>
        )}
      </div>
    </div>
  );
};
