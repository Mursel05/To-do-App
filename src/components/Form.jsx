import React, { useEffect, useState } from "react";
import Item from "./Item.jsx";
import Footer from "./Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { makeData } from "../actions/index.js";

const Form = () => {
  const [error, setError] = useState("hidden error");
  const [job, setJob] = useState("");
  const data = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("data") == undefined) {
      localStorage.setItem("data", []);
    }
  }, []);
  const item = {
    id: Date.now(),
    job: job,
    done: false,
  };

  function handleForm(e) {
    e.preventDefault();
    setJob("");
    if (item.job === "") {
      setError("error");
    } else {
      dispatch(makeData(item));
      setError("hidden error");
    }
  }

  return (
    <div>
      <form action="/" onSubmit={handleForm}>
        <span className="head">Todo App</span>
        <div className="input-error">
          <div className="input">
            <input
              type="text"
              placeholder="Add your new todo"
              value={job}
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
            <button>
              <img src="images/icons8-plus-24.png" alt="icon-plus" />
            </button>
          </div>
          <span className={error}>Task can't be empty.</span>
        </div>
        <div className="items">
          {data && data.map((item) => <Item key={item.id} item={item} />)}
        </div>
        <Footer />
      </form>
    </div>
  );
};

export default Form;
