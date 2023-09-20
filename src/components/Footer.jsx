import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsDelete, itemsMark } from "../actions";

const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer);
  return (
    <div className="footer">
      <div className="footer-half">
        <span>
          You have
          {data
            ? ` ${data.filter((item) => item.done === true).length} `
            : " 0 "}
          done tasks.
        </span>
        <button type="button" onClick={() => dispatch(itemsDelete())}>
          Clear all
        </button>
      </div>
      <div className="footer-half">
        <span>
          You have
          {data
            ? ` ${data.filter((item) => item.done === false).length} `
            : " 0 "}
          pending tasks.
        </span>
        <button type="button" onClick={() => dispatch(itemsMark())}>
          Mark all
        </button>
      </div>
    </div>
  );
};

export default Footer;
