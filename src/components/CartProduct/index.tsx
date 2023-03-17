import { FC, useState } from "react";
import Currency from "react-currency-formatter";
import { Product } from "../../types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../app/features/cart";
import { Link } from "react-router-dom";

interface CartProductProps {
    data: Product
}
 
const CartProduct: FC<CartProductProps> = ({ data }) => {
    const [qty, setQty] = useState<number>(1);
    const dispatch = useDispatch();
    const { id, title, image, category, price, rating } = data;

    // Remove Item from Shopping Cart
    const removeItemFromCart = () => dispatch(removeFromCart({ id }))

    return (
        <div className="flex w-full items-center space-x-10">
            {/* Image */}
            <img src={ image } alt={ title } className="flex-none h-52 w-52 rounded object-contain bg-white p-2" />

            {/* Details */}
            <div className="grow space-y-6">
                {/* Name */}
                <Link to={`/product/${id}`} className="font-bold text-dblue-dark text-3xl line-clamp-2 hover:text-dorange-light">
                    { title }
                </Link>

                {/* Quantity */}
                <div className="flex items-center justify-between">
                    <p className="font-bold text-dblue-dark text-xl">
                        Quantity :
                    </p>
                    <div className="bg-white h-10 flex-none border flex rounded">
                        {/* Decrement Quantity */}
                        <button className="flex-none w-8 h-full text-lg"
                            // Deduct 1 from quantity onClick only if quantity is greater than 1
                            onClick={() => (qty > 1) && setQty(prevState => prevState - 1)}
                        >
                            -
                        </button>

                        {/* Field */}
                        <input 
                            className="flex-1 h-full w-12 text-center focus-visible:outline-none"
                            type="number" 
                            name=""
                            min={1}
                            readOnly
                            value={ qty }
                        />

                        {/* Increment Quantity */}
                        <button className="flex-none w-8 h-full text-lg"
                            // Add 1 to quantity onClick 
                            onClick={() => setQty(prevState => prevState + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Cost & Buttons */}
                <div className="flex items-center justify-between">
                    {/* Cost */}
                    <span className="block font-bold text-dorange-light md:text-3xl">
                        <Currency quantity={ price } currency="USD" />
                    </span>

                    {/* Buttons */}
                    <div className="flex space-x-6">
                        {/* Delete */}
                        <button className="h-10 w-10 flex items-center justify-center rounded-lg border-2 border-dorange-light text-dorange-light"
                            onClick={ removeItemFromCart }
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5H16V2H8V5H3V7H4.069L5.069 21H18.931L19.931 7H21V5ZM10 4H14V5H10V4ZM17.069 19H6.931L6.074 7H17.926L17.069 19Z" fill="#F86338"/>
                                <path d="M11 9H9V17H11V9Z" fill="#F86338"/>
                                <path d="M15 9H13V17H15V9Z" fill="#F86338"/>
                            </svg>
                        </button>

                        {/* Wishlist */}
                        <button className="flex items-center space-x-2 h-10 px-3 font-bold rounded-lg border-2 border-dorange-light text-dorange-light">
                            <span>
                                Wishlist
                            </span>
                            <span>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0005 19.5709L2.51547 11.0859C1.39015 9.96075 0.757906 8.43462 0.757813 6.84328C0.757719 5.25194 1.38979 3.72574 2.51497 2.60043C3.64015 1.47511 5.16627 0.842867 6.75761 0.842773C8.34895 0.84268 9.87515 1.47475 11.0005 2.59993C12.1263 1.47602 13.6521 0.844777 15.243 0.844777C16.8338 0.844777 18.3596 1.47602 19.4855 2.59993C20.6089 3.72604 21.2398 5.25177 21.2398 6.84243C21.2398 8.43309 20.6089 9.95881 19.4855 11.0849L11.0005 19.5709ZM6.75747 2.84293C5.96626 2.8429 5.19282 3.07752 4.53496 3.5171C3.87711 3.95669 3.3644 4.5815 3.06168 5.3125C2.75895 6.04351 2.67982 6.84787 2.83429 7.62385C2.98876 8.39983 3.36989 9.11257 3.92947 9.67193L11.0005 16.7429L18.0715 9.67193C18.4776 9.27484 18.7945 8.7958 19.0011 8.2667C19.2077 7.7376 19.2992 7.17056 19.2696 6.60333C19.24 6.0361 19.09 5.48167 18.8294 4.97695C18.5688 4.47224 18.2038 4.0288 17.7585 3.67614C17.3132 3.32349 16.798 3.06971 16.247 2.9317C15.696 2.79369 15.122 2.7746 14.563 2.87571C14.0041 2.97683 13.4731 3.19582 13.0054 3.51812C12.5377 3.84042 12.144 4.25863 11.8505 4.74493L11.0005 6.11693L10.1505 4.74493C9.79958 4.15996 9.30187 3.67688 8.7067 3.3436C8.11153 3.01032 7.43957 2.83841 6.75747 2.84493V2.84293Z" fill="#F86338"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CartProduct;