import { ADD_ITEM, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  items: [{ value: "Walk the dog.", completed: false }]
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = { value: action.payload, completed: false };
      return {
        ...state,
        items: [...state.items, newItem]
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (action.payload === index) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    default:
      return state;
  }
};
