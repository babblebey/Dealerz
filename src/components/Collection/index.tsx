import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";

interface CollectionProps {
   categories: string[]
   products: Product[]
}
 
const Collection: FC<CollectionProps> = ({ categories, products }) => {
    // Initialising State with Products List
    const initState = products
    const [collProducts, setCollProducts] = useState(initState);

    // Filter Handler Function
    const filterByCategory = (category: string) => {
        // Duplicate Products
        const getProducts: Product[] = [...products];

        // console.log(category, getProducts);

        // Filter Products - Return Products where Catogories Matches
        const filteredProducts = getProducts.filter(prod => prod.category === category);

        // Set the Collection Products to Filtered Products
        setCollProducts(filteredProducts);
    }

    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container space-y-16">
                {/* Title */}
                <h3 className="font-bold text-dblue-dark text-5xl text-center">
                    Our Premium Collection
                </h3>

                {/* Categories */}
                <div className="text-dgrey-dark text-2xl font-bold text-center space-x-20">
                    {/* All - Sets the Collection Products State back to Initial State to view all products */}
                    <span className="cursor-pointer hover:text-dorange-light" 
                        onClick={() => setCollProducts(initState)}
                    >
                        All
                    </span>

                    {/* Other Cateogies - Set Collection Products State to where categories match with that of product's */}
                    {categories.map((category, i) => (
                        <span key={i} className="capitalize cursor-pointer hover:text-dorange-light"
                            onClick={() => filterByCategory(category)}
                        >
                            { category }
                        </span>
                    ))}
                </div>

                {/* Card List */}
                <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
                    {collProducts.slice(0, 6).map((product, i) => (
                        <div key={i} className="md:col-span-1 bg-white pt-44 md:pt-0 h-fit md:h-[640px] flex flex-col justify-end bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${ product.image })` }}
                        >
                            <div className="bg-white px-6 md:px-10 py-6 md:py-14 ">
                                <span className="text-dgrey-dark font-bold mb-2 capitalize">
                                    { product.category }
                                </span>
                                <p className="text-dblue-dark font-bold text-3xl mb-8 line-clamp-2">
                                    { product.title }
                                </p>
                                <Link to={`/product/${ product.id }`} role="button"
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-dorange-light"
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.293 1.70697L13.586 7.99997H0V9.99997H13.586L7.293 16.293L8.707 17.707L17.414 8.99997L8.707 0.292969L7.293 1.70697Z" fill="white"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Button */}
                <div className="text-center">
                    <Link to={`/shop`} role="button" className="py-5 px-6 rounded-lg bg-dorange-light text-white">
                        Find out More
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Collection;