import { FC } from "react";
import CartProduct from "../components/CartProduct";
import Coupon from "../components/Coupon";
import Hero from "../components/Hero";
import TopItems from "../components/TopItems";

interface CartProps {
    
}
 
const Cart: FC<CartProps> = ({  }) => {
    return ( 
        <>
            <Hero 
                title="Our Gallery,Your Dreams!"
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

                    {/* Cart List & Total */}
                    <div className="md:grid md:grid-cols-2 md:gap-x-20">
                        {/* Cart Products */}
                        <div className="space-y-10">
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
                            <CartProduct />
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
                                            $150
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
                                                    Shipping to Syndey
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
                                            $150
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
                </div>
            </div>

            <TopItems />
        </>
    );
}
 
export default Cart;