import React, { useState } from "react";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { event } from "../actions/index.js";
import { empty } from "../actions/index.js";
import { makeData } from "../actions/index.js";
import { imageHidden } from "../actions/index.js";
import { itemMark } from "../actions/index.js";
import { itemDelete } from "../actions/index.js";
import { itemsDelete } from "../actions/index.js";
import { itemsMark } from "../actions/index.js";
import { hiddenError } from "../actions/index.js";
import { errorInput } from "../actions/index.js";
import { transformImgRotate } from "../actions/index.js";
import { notTransform } from "../actions/index.js";

const Form = () => {
  // const [job, setJob] = useState("");
  // const [data, setData] = useState([]);
  // const [error, setError] = useState("hidden error");
  // const [transformImg, setTransformImg] = useState("");

  const job = useSelector((state) => state.job);
  const data = useSelector((state) => state.dataReducer);
  const error = useSelector((state) => state.error);
  const transformImg = useSelector((state) => state.transformImg);

  const item = {
    id: Date.now(),
    job: job,
    done: false,
    click: false,
  };
  const dispatch = useDispatch();
  const setTransformImgInterval = () => {
    dispatch(transformImgRotate());
    // setTransformImg("transform-img-enter");
  };

  function addItem(newItem) {
    dispatch(makeData(newItem));
    // setData((item) => [...item, newItem]);
    dispatch(hiddenError());
    // setError("hidden error");
  }

  function checkData(newItem) {
    newItem.job === ""
      ? // setError("error")
        dispatch(errorInput())
      : addItem(newItem);
  }

  const hiddenImg = (id) => {
    dispatch(imageHidden(data, id));
    // setData(
    //   data.map((item) =>
    //     item.id === id
    //       ? item.click === false
    //         ? (item = {
    //             id: id,
    //             job: item.job,
    //             done: item.done,
    //             click: true,
    //           })
    //         : (item = {
    //             id: id,
    //             job: item.job,
    //             done: item.done,
    //             click: false,
    //           })
    //       : item
    //   )
    // );
  };

  const markDone = (id) => {
    dispatch(itemMark(data, id));
    // setData(
    //   data.map((item) =>
    //     item.id === id
    //       ? item.done === false
    //         ? (item = {
    //             id: id,
    //             job: item.job,
    //             done: true,
    //             click: item.click,
    //           })
    //         : (item = {
    //             id: id,
    //             job: item.job,
    //             done: false,
    //             click: item.click,
    //           })
    //       : item
    //   )
    // );
  };

  const deleteItem = (id) => {
    dispatch(itemDelete(data, id));
    // setData(data.filter((item) => item.id !== id));
  };

  const deleteItems = () => {
    dispatch(itemsDelete());
    // setData([]);
  };

  const markItems = () => {
    dispatch(itemsMark(data));
    // setData(
    //   data.map(
    //     (item) =>
    //       (item = {
    //         id: item.id,
    //         job: item.job,
    //         done: true,
    //         click: item.click,
    //       })
    //   )
    // );
  };

  return (
    <div>
      <form action="/">
        <span className="head">Todo App</span>
        <div className="input-error">
          <div className="input">
            <input
              type="text"
              placeholder="Add your new todo"
              value={job}
              onChange={(e) => {
                e.preventDefault();
                dispatch(event(e));
                // setJob(e.target.value);
              }}
            />
            <button
              onMouseEnter={(e) => {
                e.preventDefault();
                dispatch(transformImgRotate());
                // setTransformImg("transform-img-enter");
              }}
              onMouseOut={(e) => {
                e.preventDefault();

                dispatch(notTransform());
                // setTransformImg("");
              }}
              onClick={(e) => {
                e.preventDefault();
                checkData(item);
                dispatch(empty());
                // setJob("");
              }}
            >
              <img
                src="images/icons8-plus-24.png"
                alt="icon-plus"
                className={transformImg}
                onMouseOver={() => {
                  dispatch(transformImgRotate());
                  // setTransformImg("transform-img-enter");
                }}
                onMouseOut={() => {
                  setTimeout(setTransformImgInterval, 1);
                }}
              />
            </button>
          </div>
          <span className={error}>Task can't be empty.</span>
        </div>
        <div className="items">
          <Item
            data={data}
            hiddenImg={hiddenImg}
            markDone={markDone}
            deleteItem={deleteItem}
          />
        </div>
        <Footer data={data} deleteItems={deleteItems} markItems={markItems} />
      </form>
    </div>
  );
};

export default Form;
