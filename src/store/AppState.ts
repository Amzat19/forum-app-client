import { combineReducers } from "@reduxjs/toolkit";
import ThreadCategoriesReducer from "./categories/Reducer";
import userProfileReducer from './user/Reducer';

export const rootReducer = combineReducers({
    user: userProfileReducer,
    categories: ThreadCategoriesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;