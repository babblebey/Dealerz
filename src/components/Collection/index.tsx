import { FC } from "react";

interface CollectionProps {
    
}
 
const Collection: FC<CollectionProps> = () => {
    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container space-y-16">
                {/* Title */}
                <h3 className="font-bold text-dblue-dark text-5xl text-center">
                    Our Premium Collection
                </h3>

                {/* Categories */}
                <div className="text-dgrey-dark text-2xl font-bold text-center space-x-20">
                    {[ {name: 'All Products', link: ''},
                    {name: 'Coats & Jackets', link: ''},
                    {name: 'Dressed', link: ''},
                    {name: 'Playsuit', link: ''},
                    {name: 'Short', link: ''},
                    {name: 'Skirt', link: ''},
                    {name: 'T-Shirt', link: ''},
                    ].map((item, i) => (
                        <a key={i} href={ item.link } className={ `${(i === 0) && `text-dorange`}` }>
                            { item.name }
                        </a>
                    ))}
                </div>

                {/* Card List */}
                <div className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
                    {[1,1,1,1,1,1].map((_, i) => (
                        <div key={i} className="md:col-span-1 bg-white px-6 md:px-10 pb-6 md:pb-14 pt-44 md:pt-0 h-fit md:h-[640px] flex flex-col justify-end">
                            <span className="text-dgrey-dark font-bold mb-2">
                                Category Dress
                            </span>
                            <p className="text-dblue-dark font-bold text-5xl mb-8">
                                Tropical Suit
                            </p>
                            <button className="h-10 w-10 flex items-center justify-center rounded-full bg-dorange-light">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.293 1.70697L13.586 7.99997H0V9.99997H13.586L7.293 16.293L8.707 17.707L17.414 8.99997L8.707 0.292969L7.293 1.70697Z" fill="white"/>
                                </svg>
                            </button>
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