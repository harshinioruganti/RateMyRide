import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authReducer',
    initialState: { loggedIn: false, firstName: '' },
    reducers: {
        login(state, action) {
            const firstName = action.payload;
            state.loggedIn = true;
            state.firstName = firstName;
            console.log(state.firstName);
            console.log(state.loggedIn);
            console.log('logged in')
        },
        logout(state, action) {
            state.loggedIn = false;
            state.firstName = '';
            console.log('logged out')
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;