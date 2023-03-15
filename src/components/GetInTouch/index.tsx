import { FC } from "react";

interface GetInTouchProps {
    
}

const GetInTouch: FC<GetInTouchProps> = ({  }) => {
    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container flex space-x-8 items-center">
                {/* Image */}
                <div className="rounded h-[600px] w-full md:w-6/12 bg-dgrey-medium" />

                {/* Description */}
                <div className="space-y-8 w-full md:w-6/12">
                    <h3 className="text-5xl text-dblue-dark font-bold">
                        Story about
                        <br/> Our Brand
                    </h3>
                    <p>
                        Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
                    </p>
                    <button className="font-bold text-dorange-light">
                        Read full story
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default GetInTouch;