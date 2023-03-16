import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import { fakeStoreApi } from "./services/FakeStoreAPI";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    }
});