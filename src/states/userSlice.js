import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: undefined,
        username: undefined,
        password: undefined,
        isAdmin: false
    },
    isLogged: false,
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        enterUser: (state, action) => {
            state.user = action.payload;
            state.isLogged = true;
        },
        logOutUser: (state) => {
            state.user = {
                id: undefined,
                username: undefined,
                password: undefined,
                isAdmin: false
            };
            state.isLogged = false;
        }
    }
})
export const { enterUser, logOutUser } = userSlice.actions;


export default userSlice.reducer;