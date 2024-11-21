import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the user state
interface UserState {
    id: string | null;
    name: string | null;
    loading: boolean;
    error: boolean;
}

// Define the initial state
const initialState: UserState = {
    id: null,
    name: null,
    loading: false,
    error: false,
};

// Create the user slice
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<Omit<UserState, "loading" | "error">>) => {
            state.loading = false;
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        resetRedux: (state) => {
            state.id = null;
            state.name = null;
        },
        updateStaffName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

// Export actions and reducer
export const { loginStart, loginSuccess, loginFailure, resetRedux, updateStaffName } = userSlice.actions;
export default userSlice.reducer;