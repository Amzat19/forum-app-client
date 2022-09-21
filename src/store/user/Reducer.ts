import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

export interface UserProfileAction {
    type: string;
    payload: User | null;
}

type State = any;

export const UserProfileSlice = createSlice({
    name: 'userProfile',
    initialState: null as State,
    reducers: {
        setUserProfile: (state, action: UserProfileAction): User | null => {
            return action.payload
        }
    }
});


export const { setUserProfile } = UserProfileSlice.actions;

export default UserProfileSlice.reducer