import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: "1",
      username: "adminUser",
      password: "Admin123",
      isAdmin: true,
    },
    {
      id: "2",
      username: "johnDoe",
      password: "jd2025pass",
      isAdmin: false,
    },
    {
      id: "3",
      username: "janeSmith",
      password: "jsSecure99",
      isAdmin: false,
    },
    {
      id: "4",
      username: "a",
      password: "a",
      isAdmin: true,
    },
    {
      id: "5",
      username: "b",
      password: "b",
      isAdmin: false,
    },
  ],
  currentUser: {
    id: undefined,
    username: undefined,
    password: undefined,
    isAdmin: false,
  },
  isLogged: false,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logInUser(state, action) {
      state.currentUser = action.payload;
      state.isLogged = true;
    },
    logOutUser(state) {
      state.currentUser = {
        id: undefined,
        username: undefined,
        password: undefined,
        isAdmin: false,
      };
      state.isLogged = false;
    },
    enterNewUser(state, action) {
      state.users.push({ ...action.payload, id: nanoid() });
    },
  },
});
export const { logInUser, logOutUser, enterNewUser } = userSlice.actions;

export default userSlice.reducer;
