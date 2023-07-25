const dataReducer = (state = [], action) => {
  if (action.type === "makeData") {
    state.push(action.payload);
    return state;
  } else if (action.type === "imageHidden") {
    state = action.data.map((item) =>
      item.id === action.id
        ? item.click === false
          ? (item = {
              id: action.id,
              job: item.job,
              done: item.done,
              click: true,
            })
          : (item = {
              id: action.id,
              job: item.job,
              done: item.done,
              click: false,
            })
        : item
    );
    return state;
  } else if (action.type === "itemMark") {
    return (state = action.data.map((item) =>
      item.id === action.id
        ? item.done === false
          ? (item = {
              id: action.id,
              job: item.job,
              done: true,
              click: item.click,
            })
          : (item = {
              id: action.id,
              job: item.job,
              done: false,
              click: item.click,
            })
        : item
    ));
  } else if (action.type === "itemDelete") {
    return (state = action.data.filter((item) => item.id !== action.id));
  } else if (action.type === "itemsDelete") {
    return (state = []);
  } else if (action.type === "itemsMark") {
    if (state !== []) {
      return (state = action.data.map(
        (item) =>
          (item = {
            id: item.id,
            job: item.job,
            done: true,
            click: item.click,
          })
      ));
    }
  } else {
    return state;
  }
};
export default dataReducer;
