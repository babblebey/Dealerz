import { FC } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

interface TestimonialProps {
    
}
 
const Testimonial: FC<TestimonialProps> = ({ }) => {
    return (
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container relative flex items-center">
                {/* Carousel */}
                <OwlCarousel nav
                    navContainerClass="absolute -mt-5 top-1/2 left-0 z-30 flex w-full items-center justify-between"
                    navClass={['navClass -ml-5', 'navClass -mr-5']}
                    navText={[
                        `<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.07331 0.875L0.946777 9.00153L9.07331 17.1281L10.393 15.8083L3.58624 9.00153L10.393 2.19473L9.07331 0.875Z" fill="black"/>
                        </svg>`,
                        `<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.606445 2.19473L7.41325 9.00153L0.606445 15.8083L1.92618 17.1281L10.0527 9.00153L1.92618 0.875L0.606445 2.19473Z" fill="black"/>
                        </svg>`
                    ]}
                    dots={false}
                    items={1}
                    margin={10}
                    slideBy={3}
                >
                    <div className="bg-white flex items-center space-x-10 rounded p-16">
                        {/* Image */}
                        <div className="flex-none h-80 w-80 rounded bg-dgrey-medium" />

                        {/* Literature */}
                        <div className="space-y-6 flex-auto">
                            <h4 className="font-bold text-dorange-light text-5xl">
                                Good Seller
                            </h4>
                            <p className="text-dgrey-dark">
                                I am very happy with the services provided, it is very helpful, starting
                                from the insight that the company gave from the start that I did not
                                understand what it was so I got knowledge and made my website
                                look better
                            </p>
                            <span className="flex flex-col text-dblue-dark">
                                <span className="font-bold text-2xl">
                                    Anna Saraspova
                                </span>
                                <span>
                                    Your Beloved Buyer
                                </span>
                            </span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}
 
export default Testimonial;