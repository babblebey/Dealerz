import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import Root from "./routes/root";
import Shop from "./routes/shop";
import Cart from "./routes/cart";
import ProductDetails from "./routes/productDetails";
import Home from "./routes/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/cart', element: <Cart /> },
            { path: '/product/:productId', element: <ProductDetails /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={ store }>
            <RouterProvider router={ router } />
        </Provider>
    </React.StrictMode>
)
