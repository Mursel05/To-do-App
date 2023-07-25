 const error = (state = "hidden error", action) => {
  if (action.type === "hiddenError") {
    return (state = "hidden error");
  } else if (action.type === "errorInput") {
    return (state = "error");
  } else {
    return state;
  }
};
export default error;
