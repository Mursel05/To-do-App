const data = localStorage.getItem("data");
const dataReducer = (
  state = localStorage.getItem("data") == undefined
    ? []
    : data && JSON.parse(data),
  action
) => {
  if (action.type === "makeData") {
    state = [...state, action.payload];
    localStorage.setItem("data", JSON.stringify(state));
    return state;
  } else if (action.type === "itemMark") {
    state = state.map((item) =>
      item.id === action.id ? { ...item, done: !item.done } : item
    );
    localStorage.setItem("data", JSON.stringify(state));
    return state;
  } else if (action.type === "itemDelete") {
    state = state.filter((item) => item.id !== action.id);
    localStorage.setItem("data", JSON.stringify(state));
    return state;
  } else if (action.type === "itemsDelete") {
    state = [];
    localStorage.setItem("data", JSON.stringify(state));
    return state;
  } else if (action.type === "itemsMark") {
    if (state != []) {
      state = state.map((item) => ({ ...item, done: true }));
      localStorage.setItem("data", JSON.stringify(state));
      return state;
    }
  } else {
    return state;
  }
};
export default dataReducer;
