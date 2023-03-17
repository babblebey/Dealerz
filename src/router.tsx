import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Shop from "./routes/shop";
import Cart from "./routes/cart";
import ProductDetails from "./routes/productDetails";

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
]);

export default router;