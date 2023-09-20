import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { itemDelete, itemMark } from "../actions/index.js";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [openSide, setOpenSide] = useState("item");
  return (
    <div
      className={openSide}
      onClick={() => setOpenSide(openSide === "item" ? "open item" : "item")}
    >
      <div className="check-job">
        <img
          onClick={(e) => {
            e.stopPropagation();
            dispatch(itemMark(item.id));
          }}
          src="images/icons8-unchecked-checkbox-50.png"
          alt="icon"
          className={item.done ? "hidden" : ""}
        />
        <img
          onClick={(e) => {
            e.stopPropagation();
            dispatch(itemMark(item.id));
          }}
          src="images/icons8-tick-50 (1).png"
          alt="icon"
          className={item.done ? "" : "hidden"}
        />
        <div className="job">
          <p className={item.done === true ? "line" : ""}>{item.job}</p>
        </div>
      </div>
      <img
        onClick={(e) => {
          e.stopPropagation();
          dispatch(itemDelete(item.id));
        }}
        src="images/icons8-trash-30.png"
        alt="icon"
        className="delete"
      />
    </div>
  );
};

export default Item;
