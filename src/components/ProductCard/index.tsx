import { FC } from "react";
import ReactStarsRating from "react-awesome-stars-rating";

interface ProductCardProps {
    
}
 
const ProductCard: FC<ProductCardProps> = () => {
    return ( 
        <div className="relative h-[375px] flex align-bottom justify-center p-2 bg-white rounded">
            {/* Wishlist Button */}
            <button className="absolute top-0 right-0 m-2 bg-[#FFDDD3] p-2 rounded-md">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99982 14.3809L2.34316 8.72428C1.59295 7.97416 1.17145 6.95674 1.17139 5.89585C1.17132 4.83495 1.5927 3.81749 2.34282 3.06728C3.09294 2.31707 4.11036 1.89557 5.17125 1.89551C6.23215 1.89545 7.24961 2.31682 7.99982 3.06694C8.75039 2.31767 9.76761 1.89684 10.8282 1.89684C11.8887 1.89684 12.9059 2.31767 13.6565 3.06694C14.4054 3.81769 14.826 4.83484 14.826 5.89528C14.826 6.95572 14.4054 7.97287 13.6565 8.72361L7.99982 14.3809ZM5.17116 3.22894C4.64369 3.22892 4.12806 3.38534 3.68949 3.67839C3.25092 3.97145 2.90911 4.38799 2.7073 4.87533C2.50548 5.36266 2.45273 5.8989 2.55571 6.41622C2.65868 6.93355 2.91277 7.40871 3.28582 7.78161L7.99982 12.4956L12.7138 7.78161C12.9846 7.51688 13.1959 7.19753 13.3336 6.84479C13.4713 6.49206 13.5323 6.11403 13.5126 5.73588C13.4929 5.35772 13.3928 4.98811 13.2191 4.65163C13.0454 4.31515 12.802 4.01952 12.5052 3.78442C12.2083 3.54932 11.8648 3.38013 11.4975 3.28813C11.1302 3.19612 10.7475 3.18339 10.3749 3.2508C10.0022 3.31821 9.64824 3.4642 9.33644 3.67907C9.02463 3.89394 8.76216 4.17274 8.56649 4.49694L7.99982 5.41161L7.43316 4.49694C7.19923 4.10697 6.86743 3.78491 6.47065 3.56272C6.07386 3.34054 5.62589 3.22593 5.17116 3.23028V3.22894Z" fill="#F3692E"/>
                </svg>
            </button>

            {/* Details */}
            <div className="mt-auto flex flex-col items-center space-y-1">
                {/* Title */}
                <p className="font-bold text-dblue-dark text-2xl">
                    Urbano Jacket
                </p>

                {/* Rating */}
                <ReactStarsRating 
                    value={Number(Math.round(Math.random() * 5))}
                    className="flex mr-2 space-x-1"
                    size={16}
                    isEdit={false}
                    primaryColor="#F86338"
                    secondaryColor="#e5e7eb" 
                />

                {/* Category */}
                <p className="text-dgrey-dark">
                    category
                </p>

                {/* Price */}
                <span className="block font-medium text-dorange-light md:text-xl">
                    $99
                </span>
            </div>
        </div>
    );
}
 
export default ProductCard;