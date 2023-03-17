import { FC } from "react";
import CartProduct from "../components/CartProduct";
import Coupon from "../components/Coupon";
import Currency from "react-currency-formatter";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TopItems from "../components/TopItems";
import { useSelector } from "react-redux";
import { cartItems, cartItemsTotalPrice, cartItemsCount } from "../app/features/cart";
import { useGetProductsQuery } from "../app/services/FakeStoreAPI";

interface CartProps {
    
}
 
const Cart: FC<CartProps> = ({  }) => {
    const items = useSelector(cartItems);
    const itemsTotalPrice = useSelector(cartItemsTotalPrice);
    const itemsCount = useSelector(cartItemsCount);

    const { data: products, error, isLoading, isFetching } = useGetProductsQuery();

    // console.log(itemsTotalPrice);
    
    return ( 
        <>
            <Hero 
                title="Our Gallery, Your Dreams!"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."    
            />

            {/* Cart Content */}
            <div className="bg-dgrey-light py-8 md:py-28">
                <div className="container space-y-10">
                    {/* Title */}
                    <h2 className="font-bold text-dblue-dark text-5xl">
                        My Cart
                    </h2>

                    { (itemsCount < 1 ) ? (
                        <>
                            {/* Renders when No Item is found in Cart */}
                            <p className="text-2xl text-dgrey-dark">
                                Your Shopping Cart is Empty
                            </p>
                        </>
                    ) : (
                        <>
                            {/* Cart List & Total */}
                            <div className="md:grid md:grid-cols-2 md:gap-x-20">
                                {/* Cart Products */}
                                <div className="space-y-10">
                                    { items.map((item, i) => (
                                        <CartProduct key={i} data={ item } />
                                    )) }
                                </div>

                                {/* Coupon & Cart Total */}
                                <div className="space-y-20">
                                    <Coupon />
                                    
                                    {/* Cart Total */}
                                    <div className="space-y-10">
                                        {/* Title */}
                                        <p className="font-bold text-dblue-dark text-3xl">
                                            Total
                                        </p>

                                        {/* Cost Breakdown */}
                                        <div className="space-y-6">
                                            {/* Subtotal */}
                                            <div className="grid grid-cols-4">
                                                <span className="col-span-1 font-bold">
                                                    Subtotal
                                                </span>
                                                <span className="col-span-3">  
                                                    <Currency quantity={ Number(itemsTotalPrice) } currency="USD" />
                                                </span>
                                            </div>

                                            {/* Shipping */}
                                            <div className="grid grid-cols-4">
                                                <span className="col-span-1 font-bold">
                                                    Shipping
                                                </span>
                                                <span className="col-span-3 flex flex-col space-y-4">
                                                    <span>
                                                        Free Shipping
                                                    </span>
                                                    <span className="flex justify-between">
                                                        <span>
                                                            Shipping to Your Location
                                                        </span>
                                                        <a href="" className="text-dorange-light">
                                                            Change
                                                        </a>
                                                    </span>
                                                </span>
                                            </div>

                                            {/* Total */}
                                            <div className="grid grid-cols-4 font-bold">
                                                <span className="col-span-1">
                                                    Total
                                                </span>
                                                <span className="col-span-3">
                                                    <Currency quantity={ Number(itemsTotalPrice) } currency="USD" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Checkout */}
                                        <button className="w-full bg-dorange-light py-6 text-white rounded-lg text-center font-bold">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) }
                </div>
            </div>

            { (!isLoading && products) && (
                <TopItems items={ products } />
            ) }

            <Newsletter />
        </>
    );
}
 
export default Cart;