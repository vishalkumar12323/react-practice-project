import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import "../styles/modal.css";

export const Modal = () => {
  const [isActiveted, setIsActiveted] = useState(false);

  const showModal = () => {
    const timeoutId = setTimeout(() => {
      setIsActiveted(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  };

  const hideModal = () => {
    const timeoutId = setTimeout(() => {
      setIsActiveted(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  };
  return (
    <>
      <div className="modal_container">
        {isActiveted ? (
          <div className="modal">
            <div className="top_section">
              <h2 className="modal_heading">This is modal heading</h2>
              <h4 className="modal_subheading">This is modal sub-heading</h4>
              <button className="close_button" onClick={hideModal}>
                <IoIosClose size={25} />
              </button>
            </div>

            <div className="mid_section">
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                laborum nesciunt magnam corporis distinctio provident nam,
                aspernatur earum quis quisquam? Beatae. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Libero laborum nesciunt
                magnam corporis distinctio provident nam, aspernatur earum quis
                quisquam? Beatae.
              </p>
            </div>
          </div>
        ) : (
          <button className="button" onClick={showModal}>
            Show Modal
          </button>
        )}
      </div>
    </>
  );
};
