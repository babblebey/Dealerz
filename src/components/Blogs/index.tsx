import { FC } from "react";

interface BlogsProps {
    
}
 
const Blogs: FC<BlogsProps> = ({  }) => {
    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container space-y-16">
                <div className="flex items-end justify-between">
                    {/* Title */}
                    <h3 className="font-bold text-5xl text-dblue-dark">
                        Get Better Insights 
                        <br className="hidden md:block" /> from Our Articles
                    </h3>

                    {/* Link */}
                    <a href="" className="text-dorange-light text-2xl font-bold">
                        See more
                    </a>
                </div>

                <div className="md:grid md:grid-cols-2 gap-4">
                    {[1,1,1,1].map((_, i) => (
                        <div key={i} className="space-y-4 mb-6">
                            <div className="h-96 w-full bg-dgrey-medium" />
                            <h5 className="text-3xl font-bold text-dblue-dark">
                                Best Summer Outfit Style
                            </h5>
                            <p className="text-dgrey-dark">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <a href="" className="block text-dorange-light font-bold">
                                Explore More
                            </a>
                        </div>
                    ))}
                </div>
            </div>  
        </div>
    );
}
 
export default Blogs;