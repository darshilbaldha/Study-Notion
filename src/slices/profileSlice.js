import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
      // Retrieve existing user data from localStorage
      if (localStorage.getItem("user")) {
      const storedUser = localStorage.getItem("user");
      const existingUser = storedUser ? JSON.parse(storedUser) : {};

      // Merge existing user data with the new user data
        const mergedUser = { ...existingUser, ...value.payload };
        // Store the merged user data back in localStorage
        localStorage.setItem("user", JSON.stringify(mergedUser));
      }
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
