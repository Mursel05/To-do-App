 const transformImg = (state = "", action) => {
  if (action.type === "transformImgRotate") {
    return (state = "transform-img-enter");
  } else if (action.type === "notTransform") {
    return (state = "");
  } else {
    return state;
  }
};
export default transformImg;
