import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./app/store";
import router from "./router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={ store }>
            <RouterProvider router={ router } />
        </Provider>
    </React.StrictMode>
)
