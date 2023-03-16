import { FC } from "react";
import { Link } from "react-router-dom";
import Currency from "react-currency-formatter";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Product } from "../../types";

interface TopItemsProps {
    items: Product[]
}

const responsive = {
    0: {
        items: 1,
        margin: 15,
        stagePadding: 20
    },
    768: {
        items: 2,
        margin: 16,
        stagePadding: 20
    },
    1000: {
        items: 3,
        margin: 16,
        stagePadding: 100
    },
    1500: {
        items: 4,
        margin: 16,
        stagePadding: 100
    }
}
 
const TopItems: FC<TopItemsProps> = ({ items }) => {
    return ( 
        <div className="py-8 md:pt-28 mb:pb-14 space-y-20">
            {/* Heading */}
            <div className="container space-y-6">
                {/* Title */}
                <h3 className="font-bold text-dblue-dark text-5xl text-center">
                    Top Items
                </h3>

                {/* Description */}
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                    <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>

            {/* Items Carousel */}
            <div className="overflow-hidden">
                <OwlCarousel dots
                    dotClass="h-4 w-4 bg-[#E0E0E0] rounded-full"
                    dotsClass="dots w-full flex items-center justify-center space-x-4 py-6 mt-20"
                    stageOuterClass="py-2"
                    nav={false}
                    responsive={responsive} 
                    slideBy={3}
                >
                    {items?.map((item, i) => (
                        // Item
                        <div key={i} 
                            className="bg-white overflow-hidden border border-dgrey-light rounded-md h-[450px] flex flex-col justify-between bg-center bg-no-repeat bg-contain"
                            style={{ backgroundImage: `url(${ item.image })` }}
                        >
                            {/* Sale Badge */}
                            <span className="uppercase w-fit text-white bg-dorange-light text-sm p-1 m-3 rounded">
                                Sale
                            </span>
        
                            {/* More Info */}
                            <div className="text-center space-y-1 p-3 bg-white w-full bg-opacity-90">
                                {/* Title */}
                                <Link to={`/product/${ item.id }`} className="font-bold text-2xl line-clamp-2 hover:text-dorange-light">
                                    { item.title }
                                </Link>
        
                                {/* Category */}
                                <p className="text-xs text-dgrey-dark">
                                    { item.category }
                                </p>
        
                                {/* Price */}
                                <div className="space-x-2">
                                    <span className="text-dorange-light">
                                        <Currency quantity={ item.price } currency="USD" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
}
 
export default TopItems;