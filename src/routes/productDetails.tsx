import { FC } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import TopItems from "../components/TopItems";

interface ProductDetailsProps {
    
}
 
const ProductDetails: FC<ProductDetailsProps> = () => {
    return ( 
        <>
            {/* Product Information */}
            <div className="container py-8 md:py-28">
                {/* Image */}
                <div className="w-full md:w-6/12">
                    <div />
                    
                </div>

                {/* Information */}
                <div className="w-full md:w-6/12 space-y-8">
                    {/* Title */}
                    <h3 className="font-bold text-5xl text-ddark-dark">
                        Urbano Jacket
                    </h3>

                    {/* Rating */}
                    <ReactStarsRating 
                        value={Number(Math.round(Math.random() * 5))}
                        className="flex mr-2 space-x-1"
                        size={20}
                        isEdit={false}
                        primaryColor="#F86338"
                        secondaryColor="#e5e7eb" 
                    />

                    {/* Price */}
                    <span className="block font-bold text-dorange-light md:text-5xl">
                        $99
                    </span>

                    {/* Summary */}
                    <div className="prose space-y-4 text-ddark-light">
                        <h5 className="font-bold text-2xl text-dblue-dark">
                            Details
                        </h5>
                        <p>
                            Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                        </p>
                        <p>
                            Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                        </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-dblue-dark text-xl">
                            Quantity
                        </p>
                        <div className="bg-white h-10 flex-none border flex rounded">
                            <button className="flex-none w-8 h-full text-lg">
                                -
                            </button>
                            <input 
                                className="flex-1 h-full w-12 text-center focus-visible:outline-none"
                                type="number" 
                                name="" 
                                id="" 
                            />
                            <button className="flex-none w-8 h-full text-lg">
                                +
                            </button>
                        </div>
                        <a href="" className="font-bold text-xl text-dorange-light">
                            Add note
                        </a>
                    </div>

                    {/* Sub-Total */}
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-dblue-dark text-xl">
                            Sub Total
                        </p>
                        <p className="font-bold text-dblue-dark text-xl">
                            $10
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center font-bold space-x-6">
                        {/* Wishlist */}
                        <button className="flex items-center space-x-2 py-5 px-6 rounded-lg border-2 border-dorange-light text-dorange-light">
                            <span>
                                Wishlist
                            </span>
                            <span>
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0005 19.5709L2.51547 11.0859C1.39015 9.96075 0.757906 8.43462 0.757813 6.84328C0.757719 5.25194 1.38979 3.72574 2.51497 2.60043C3.64015 1.47511 5.16627 0.842867 6.75761 0.842773C8.34895 0.84268 9.87515 1.47475 11.0005 2.59993C12.1263 1.47602 13.6521 0.844777 15.243 0.844777C16.8338 0.844777 18.3596 1.47602 19.4855 2.59993C20.6089 3.72604 21.2398 5.25177 21.2398 6.84243C21.2398 8.43309 20.6089 9.95881 19.4855 11.0849L11.0005 19.5709ZM6.75747 2.84293C5.96626 2.8429 5.19282 3.07752 4.53496 3.5171C3.87711 3.95669 3.3644 4.5815 3.06168 5.3125C2.75895 6.04351 2.67982 6.84787 2.83429 7.62385C2.98876 8.39983 3.36989 9.11257 3.92947 9.67193L11.0005 16.7429L18.0715 9.67193C18.4776 9.27484 18.7945 8.7958 19.0011 8.2667C19.2077 7.7376 19.2992 7.17056 19.2696 6.60333C19.24 6.0361 19.09 5.48167 18.8294 4.97695C18.5688 4.47224 18.2038 4.0288 17.7585 3.67614C17.3132 3.32349 16.798 3.06971 16.247 2.9317C15.696 2.79369 15.122 2.7746 14.563 2.87571C14.0041 2.97683 13.4731 3.19582 13.0054 3.51812C12.5377 3.84042 12.144 4.25863 11.8505 4.74493L11.0005 6.11693L10.1505 4.74493C9.79958 4.15996 9.30187 3.67688 8.7067 3.3436C8.11153 3.01032 7.43957 2.83841 6.75747 2.84493V2.84293Z" fill="#F86338"/>
                                </svg>
                            </span>
                        </button>

                        {/* Add to Cart */}
                        <button className="flex items-center space-x-2 py-5 px-6 rounded-lg bg-dorange-light text-white">
                            <span>
                                Add to Cart
                            </span>
                            <span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 13H5.388L5.721 12H15.754L18.326 3H3.644L2.744 0H0V2H1.256L3.951 10.985L3.243 13.109C2.70161 13.2514 2.21097 13.5427 1.82676 13.9499C1.44254 14.3571 1.18013 14.8637 1.06929 15.4125C0.958456 15.9612 1.00363 16.53 1.19969 17.0544C1.39576 17.5787 1.73486 18.0376 2.17852 18.379C2.62219 18.7204 3.15266 18.9307 3.70975 18.9859C4.26684 19.041 4.82824 18.939 5.33027 18.6913C5.83229 18.4436 6.25485 18.0601 6.54998 17.5844C6.84511 17.1087 7.00102 16.5598 7 16C6.99669 15.6586 6.93444 15.3203 6.816 15H11.184C11.0656 15.3203 11.0033 15.6586 11 16C11 16.5933 11.1759 17.1734 11.5056 17.6667C11.8352 18.1601 12.3038 18.5446 12.8519 18.7716C13.4001 18.9987 14.0033 19.0581 14.5853 18.9424C15.1672 18.8266 15.7018 18.5409 16.1213 18.1213C16.5409 17.7018 16.8266 17.1672 16.9424 16.5853C17.0581 16.0033 16.9987 15.4001 16.7716 14.8519C16.5446 14.3038 16.1601 13.8352 15.6667 13.5056C15.1734 13.1759 14.5933 13 14 13ZM15.674 5L14.246 10H5.746L4.246 5H15.674ZM5 16C5 16.1978 4.94135 16.3911 4.83147 16.5556C4.72159 16.72 4.56541 16.8482 4.38268 16.9239C4.19996 16.9996 3.99889 17.0194 3.80491 16.9808C3.61093 16.9422 3.43275 16.847 3.29289 16.7071C3.15304 16.5673 3.0578 16.3891 3.01921 16.1951C2.98063 16.0011 3.00043 15.8 3.07612 15.6173C3.15181 15.4346 3.27998 15.2784 3.44443 15.1685C3.60888 15.0586 3.80222 15 4 15C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16ZM14 17C13.8022 17 13.6089 16.9414 13.4444 16.8315C13.28 16.7216 13.1518 16.5654 13.0761 16.3827C13.0004 16.2 12.9806 15.9989 13.0192 15.8049C13.0578 15.6109 13.153 15.4327 13.2929 15.2929C13.4327 15.153 13.6109 15.0578 13.8049 15.0192C13.9989 14.9806 14.2 15.0004 14.3827 15.0761C14.5654 15.1518 14.7216 15.28 14.8315 15.4444C14.9414 15.6089 15 15.8022 15 16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17Z" fill="white"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Description/Reviews */}
            <div className="relative bg-dgrey-light pb-16 md:-top-[512px] md:-mb-[512px] md:-z-10">
                <div className="hidden md:block h-[512px] w-full" />

                <div className="container space-y-10">
                    <h3 className="font-bold text-5xl text-ddark-dark">
                        Description
                    </h3>

                    <div className="md:grid md:grid-cols-2 gap-x-10">
                        {/* Right/Top Side */}
                        <div className="w-full space-y-10">
                            {/* Decription Texts */}
                            <div className="text-dgrey-dark space-y-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="space-y-6">
                                <h3 className="font-bold text-5xl text-ddark-dark">
                                    Reviews (2)
                                </h3>

                                <div className="space-y-8">
                                    {[1,1].map((_, i) => (
                                        <div key={i} className="flex space-x-6">
                                            {/* Image */}
                                            <div className="flex-none rounded-full bg-dgrey-medium h-14 w-14" />

                                            {/* Content */}
                                            <div className="space-y-3">
                                                {/* Name & Rating */}
                                                <div className="flex items-center space-x-4">
                                                    <p className="font-bold text-2xl">
                                                        Alex Iwobi
                                                    </p>
                                                    <ReactStarsRating 
                                                        value={Number(Math.round(Math.random() * 5))}
                                                        className="flex mr-2 space-x-1"
                                                        size={20}
                                                        isEdit={false}
                                                        primaryColor="#F86338"
                                                        secondaryColor="#e5e7eb" 
                                                    />
                                                </div>

                                                {/* Date */}
                                                <p className="text-dgrey-dark">
                                                    2 March 2021 at 06.30 pm
                                                </p>

                                                {/* Gallery */}
                                                <div className="grid grid-cols-4 gap-x-2">
                                                    {[1,1,1,1].map((_, i) => (
                                                        <div key={i} className="w-24 h-24 bg-dgrey-medium rounded" />
                                                    ))}
                                                </div>

                                                {/* Text */}
                                                <p className="text-ddark-medium text-sm">
                                                    Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left/Bottom Side */}
                        <div className="">
                            <div className="bg-dgrey-medium rounded border w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <TopItems />
        </>
    );
}
 
export default ProductDetails;