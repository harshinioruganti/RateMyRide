import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authReducer',
    initialState: { loggedIn: false, name: '' },
    reducers: {
        login(state, action) {
            const name = action.payload;
            state.loggedIn = true;
            state.name = name;
            console.log('logged in')
        },
        logout(state, action) {
            state.loggedIn = false;
            state.name = '';
            console.log('logged out')
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;