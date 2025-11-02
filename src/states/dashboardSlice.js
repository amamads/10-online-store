import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModule: false,
};

const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    toggleShowDashboardModule(state){
      state.showModule = !state.showModule;
    }
  },
});

export const selectIsShowDashboradModule = s => s.dashboard.showModule;

export const {toggleShowDashboardModule} = dashboardSlice.actions;
export default dashboardSlice.reducer