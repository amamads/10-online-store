import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showAddProductModule: false,
  showUsersListModule: false,
  showProductsListModule: false,
  dashboardTest: true
};

const dashboardSlice = createSlice({
  name: 'dashboardSlice',
  initialState,
  reducers: {
    toggleAddProductModule(state) {
      state.showAddProductModule = !state.showAddProductModule;
    },
    toggleShowUsersListModule(state) {
      state.showUsersListModule = !state.showUsersListModule;
    },
    toggleShowProductsListModule(state) {
      state.showProductsListModule = !state.showAddProductModule;
    },
  },
});

export const selectShowAddProductModule = s => s.dashboard.showAddProductModule;
export const selectShowUsersListModule = s => s.dashboard.showUsersListModule;
export const selectShowProductsListModule = s => s.dashboard.showProductsListModule;

export const {
  toggleAddProductModule,
  toggleShowUsersListModule,
  toggleShowProductsListModule
} = dashboardSlice.actions;

export default dashboardSlice.reducer