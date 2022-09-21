import { createSlice } from "@reduxjs/toolkit";
import Category from "../../models/Category";

export interface ThreadCategoriesAction {
    type: string;
    payload: Array<Category> | null;
}

type State = any;

export const ThreadCategorySlice = createSlice({
    name: 'ThreadCategory',
    initialState: null as State,
    reducers: {
        threadCategories: (state, action: ThreadCategoriesAction): Array<Category> | null => {
            return action.payload
        }
    }
});


export const { threadCategories } = ThreadCategorySlice.actions;

export default ThreadCategorySlice.reducer