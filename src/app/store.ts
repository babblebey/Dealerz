import { configureStore } from "@reduxjs/toolkit";
import { fakeStoreApi } from "./services/FakeStoreAPI";
import cartReducer from "./features/cart";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(fakeStoreApi.middleware)
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;