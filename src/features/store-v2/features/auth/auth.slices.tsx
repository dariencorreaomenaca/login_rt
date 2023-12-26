import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthActionTypes, AuthState, AuthUser } from "./types";

const initialState : AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    error: null
};

export const signIN = createAsyncThunk(
    `auth/${AuthActionTypes.SIGN_IN}`,
    async (payload: {mail:string, password: string}, thunkAPI) =>{
        try {
            console.warn(payload)
            const data: AuthUser | null = {
                token: '1091202',
            }
            return data;
        } catch (error: unknown) {
            // const errorMessage = error.message;
            return thunkAPI.rejectWithValue({error:error})
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(
            signIN.pending, (state) =>{
                state.isLoading = true;
            }
        )
        .addCase(
            signIN.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            }
        )
        .addCase(
            signIN.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            }
        )
    }

})

export default authSlice.reducer;