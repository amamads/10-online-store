import { createSlice } from "@reduxjs/toolkit";

const webModeSlice = createSlice({
  name: "webModeSlice",
  initialState: { isDark: true },
  reducers: {
    changeMode(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const selectIsDark = s => s.webMode.isDark

export const {changeMode} = webModeSlice.actions;
export default webModeSlice.reducer
