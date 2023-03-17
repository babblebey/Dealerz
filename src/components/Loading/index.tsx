import { FC } from "react";

interface LoadingProps {
    variant: 'full' | 'mini'
    className?: string
}
 
const Loading: FC<LoadingProps> = ({ variant, className }) => {
    const full: boolean = variant === "full";
    const mini: boolean = variant === "mini";

    return ( 
        <div className={`w-full ${ full ? 'min-h-[60vh]' : 'min-h-50' } ${ className } flex items-center justify-center`}>
            <div className="w-20 h-20 rounded-full border-4 border-gray-200 border-t-dorange-light animate-spin" />
        </div>
    );
}
 
export default Loading;