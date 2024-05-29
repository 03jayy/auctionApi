import { createStore } from "redux";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: "",
          email: "",
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
