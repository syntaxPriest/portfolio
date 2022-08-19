import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Helpers from ".././js/functions";

export const getLoggedUser = createAsyncThunk(
    "loggedUser/getLoggedUser", 
    async () => {
        return Helpers.get_request("user/details", true)
            .then((res) => res.msg )
            .catch((err) => err)
    }
)

const LoggedUser = createSlice({
    name:"loggedUser",
    initialState: {
        userData: [],
        loading: false,
    },
    extraReducers: {
        [getLoggedUser.pending]: (state, action) => {
            state.userData = []
        },
        [getLoggedUser.fulfilled] : (state, {payload}) => {
            state.userData = payload
        }
    } 
})

export default LoggedUser.reducer;