import React from "react";

const Footer = ({ data, deleteItems, markItems }) => {
  return (
    <div className="footer">
      <div className="footer-half">
        <span>
          You have{" "}
          {data === [] ? 0 : data.filter((item) => item.done === true).length}{" "}
          done tasks.
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteItems();
          }}
        >
          Clear all
        </button>
      </div>
      <div className="footer-half">
        <span>
          You have{" "}
          {data === [] ? 0 : data.filter((item) => item.done === false).length}{" "}
          pending tasks.
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            markItems();
          }}
        >
          Mark all
        </button>
      </div>
    </div>
  );
};

export default Footer;
