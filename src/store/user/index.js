import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: {
        client: { name: "User Name" },
        balance: "0,00",
        agency: { number: "agency number" },
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAccount(state, action) {
            state.account = action.payload;
        },
        logoutUser(state) {
            state.account = {};
            state.token = "";
        },
        updadeBalance(state, action) {
            state.account.balance = action.payload;
        },
    },
});

export const { setAccount, logoutUser, updadeBalance } = userSlice.actions;
export default userSlice.reducer;
