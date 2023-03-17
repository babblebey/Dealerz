import { FC } from "react";
import { Link } from "react-router-dom";
import Products from "../../types/Product";

interface CollectionProps {
   categories: string[]
   products: Products[]
}
 
const Collection: FC<CollectionProps> = ({ categories, products }) => {
    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container space-y-16">
                {/* Title */}
                <h3 className="font-bold text-dblue-dark text-5xl text-center">
                    Our Premium Collection
                </h3>

                {/* Categories */}
                <div className="text-dgrey-dark text-2xl font-bold text-center space-x-20">
                    <a href="">
                        All
                    </a>

                    {categories.map((item, i) => (
                        <a key={i} className={ `${(i === 0) && `text-dorange`} capitalize` }>
                            { item }
                        </a>
                    ))}
                </div>

                {/* Card List */}
                <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
                    {products.map((item, i) => (
                        <div key={i} className="md:col-span-1 bg-white pt-44 md:pt-0 h-fit md:h-[640px] flex flex-col justify-end bg-contain bg-no-repeat"
                            style={{ backgroundImage: `url(${ item.image })` }}
                        >
                            <div className="bg-white px-6 md:px-10 py-6 md:py-14 ">
                                <span className="text-dgrey-dark font-bold mb-2 capitalize">
                                    { item.category }
                                </span>
                                <p className="text-dblue-dark font-bold text-3xl mb-8 line-clamp-2">
                                    { item.title }
                                </p>
                                <Link to={`/product/${ item.id }`} role="button"
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
                    <button className="py-5 px-6 rounded-lg bg-dorange-light text-white">
                        Find out More
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Collection;