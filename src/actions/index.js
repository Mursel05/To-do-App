export const makeData = (item) => {
  return { type: "makeData", payload: item };
};
export const itemMark = (id) => {
  return { type: "itemMark", id: id };
};
export const itemDelete = (id) => {
  return { type: "itemDelete", id: id };
};
export const itemsDelete = () => {
  return { type: "itemsDelete" };
};
export const itemsMark = () => {
  return { type: "itemsMark" };
};
