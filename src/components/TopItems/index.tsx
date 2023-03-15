import { FC } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface TopItemsProps {
    
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
 
const TopItems: FC<TopItemsProps> = ({  }) => {
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
            <div className="">
                <OwlCarousel dots
                    dotClass="h-4 w-4 bg-[#E0E0E0] rounded-full"
                    dotsClass="dots w-full flex items-center justify-center space-x-4 py-6 mt-20"
                    nav={false}
                    responsive={responsive} 
                    slideBy={3}
                >
                    {[1,1,1,1,1,1].map((_, i) => (
                        // Item
                        <div key={i} className="bg-dgrey-medium rounded-md py-4 px-3 h-[450px] flex flex-col justify-between">
                            {/* Sale Badge */}
                            <span className="uppercase w-fit text-dorange-light text-sm p-1 bg-white rounded">
                                Sale
                            </span>
        
                            {/* More Info */}
                            <div className="text-center space-y-1">
                                {/* Title */}
                                <p className="font-bold text-2xl">
                                    Tracksuit Hyped
                                </p>
        
                                {/* Category */}
                                <p className="text-xs text-dgrey-dark">
                                    Apple Cherry
                                </p>
        
                                {/* Price */}
                                <div className="space-x-2">
                                    <span className="text-dorange-light">
                                        $384
                                    </span>
                                    <span className="text-dgrey-dark line-through">
                                        $725
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