import { FC } from "react";

interface CouponProps {
    
}
 
const Coupon: FC<CouponProps> = () => {
    return ( 
        <div className="bg-white rounded p-10 space-y-6">
            {/* Title */}
            <p className="font-bold text-dblue-dark text-3xl">
                Have a Coupon?
            </p>

            {/* Input Field */}
            <div className="w-full h-14 px-4 rounded-lg border-2 border-dorange-light">
                <input type="text"
                    className="w-full h-full outline-none focus-visible:outline-none"
                    placeholder="Enter code here"
                />
            </div>

            {/* Button */}
            <button className="font-bold py-4 px-6 rounded-lg bg-dorange-light text-white">
                <span>
                    Apply
                </span>
            </button>
        </div>
    );
}
 
export default Coupon;