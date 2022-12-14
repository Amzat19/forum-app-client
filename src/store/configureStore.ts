import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './AppState';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>;

export default store;