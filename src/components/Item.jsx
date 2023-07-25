import React from "react";

const Item = ({ data, hiddenImg, markDone, deleteItem }) => {
  return data.map((item, id) => {
    return (
      <div className="item" key={id}>
        <div
          className={item.click === false ? "image" : "image ad"}
          onClick={() => markDone(item.id)}
        >
          <img
            src="images/icons8-unchecked-checkbox-50.png"
            alt="icon"
            className={
              item.done === false
                ? item.click === false
                  ? ""
                  : "ad"
                : "hidden"
            }
          />
          <img
            src="images/icons8-tick-50 (1).png"
            alt="icon"
            className={
              item.done === true ? (item.click === false ? "" : "ad") : "hidden"
            }
          />
        </div>

        <div
          onClick={(e) => {
            e.preventDefault();
            hiddenImg(item.id);
          }}
          className={
            item.click === false ? "job-click-false job" : "job-click-true job"
          }
        >
          <span className={item.done === true ? "line" : ""}>{item.job}</span>
        </div>

        <div
          className={item.click === false ? "image" : "image ad"}
          onClick={() => deleteItem(item.id)}
        >
          <img
            src="images/icons8-trash-30.png"
            alt="icon"
            className={item.click === false ? "" : "ad"}
          />
        </div>
      </div>
    );
  });
};

export default Item;
