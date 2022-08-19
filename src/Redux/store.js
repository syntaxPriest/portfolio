import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import LoggedUser from "./loggedUser";

export default configureStore({
    reducer: {
        loggedUser: LoggedUser
    }
    
})
