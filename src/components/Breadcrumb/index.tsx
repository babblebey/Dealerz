import { FC } from "react";

interface BreadcrumbProps {
    
}
 
const Breadcrumb: FC<BreadcrumbProps> = () => {
    return ( 
        <div className="container">
            <span className="">
                Grocery > Fruits > Japan Oranges
            </span>
        </div>
    );
}
 
export default Breadcrumb;