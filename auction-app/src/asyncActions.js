import { loginUser } from "./actions";

export const login = (userData) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3030/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const user = await response.json();
    console.log("User logged in successfully:", user);
    dispatch(loginUser(user));
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
