import { createStore, applyMiddleware } from "redux";

const initialState = {
  isLoggedIn: false,
  user: {
    email: "",
    password: "",
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
          email: "",
          password: "",
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, applyMiddleware());

export default store;
