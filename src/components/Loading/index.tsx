import { FC } from "react";

interface LoadingProps {
    
}
 
const Loading: FC<LoadingProps> = () => {
    return ( 
        <div className="w-full min-h-[60vh] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-dorange-light animate-spin" />
        </div>
    );
}
 
export default Loading;