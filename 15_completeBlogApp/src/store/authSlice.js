import {createSlice} from '@reduxjs/toolkit';

//slice bna rhe yaha pe to authenticate the user, check krenge  ki user authenticated hai ki nhi, yeh mai har baar store se ouchunga.

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            //yaha pe spread wagera krne ki need nhi as redux hi.
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})


export const {login, logout} = authSlice.actions; //reducers ke andar ke cheezon ko actions bolte hai, toh login logout are the actions, inko export krte hai actions ko.


export default authSlice.reducer;

//jaise hum auth ka slice daale hai, waise hi ek new file mei post ka bnayenge, values add krenge.
//actually values yhi se state mei jayegi.

