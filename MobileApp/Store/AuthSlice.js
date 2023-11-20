import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authReducer',
    initialState: {
        loggedIn: false,
        firstName: '',
        lastName: '',
        userID: null
    },
    reducers: {
        login(state, action) {
            const { firstName, lastName, userID } = action.payload;
            state.loggedIn = true;
            state.firstName = firstName;
            state.lastName = lastName;
            state.userID = userID;
            console.log(state);
            console.log('logged in');
        },
        logout(state, action) {
            state.loggedIn = false;
            state.firstName = '';
            state.lastName = '';
            state.userID = null;
            console.log(state);
            console.log('logged out')
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;