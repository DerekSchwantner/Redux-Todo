export const ADD_ITEM = "ADD_ITEM";
export const addItem = item => {
  console.log(item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const toggleComplete = index => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
};
