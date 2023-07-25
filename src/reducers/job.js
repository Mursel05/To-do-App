 const job = (state = "", action) => {
  if (action.type === "event") {
    return (state = action.payload.target.value);
  } else if (action.type === "empty") {
    return (state = "");
  } else {
    return state;
  }
};
export default job;
