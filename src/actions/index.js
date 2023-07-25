export const event = (e) => {
  return { type: "event", payload: e };
};
export const empty = () => {
  return { type: "empty" };
};
export const makeData = (item) => {
  return { type: "makeData", payload: item };
};
export const imageHidden = (data, id) => {
  return { type: "imageHidden", data, id };
};
export const itemMark = (data, id) => {
  return { type: "itemMark", data: data, id: id };
};
export const itemDelete = (data, id) => {
  return { type: "itemDelete", data: data, id: id };
};
export const itemsDelete = () => {
  return { type: "itemsDelete" };
};
export const itemsMark = (data) => {
  return { type: "itemsMark", data: data };
};
export const hiddenError = () => {
  return { type: "hiddenError" };
};
export const errorInput = () => {
  return { type: "errorInput" };
};
export const transformImgRotate = () => {
  return { type: "transformImgRotate" };
};
export const notTransform = () => {
  return { type: "notTransform" };
};
