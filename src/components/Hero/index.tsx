import { FC } from "react";
import heroBg from "../../assets/hero.svg"

interface HeroProps {
    
}
 
const Hero: FC<HeroProps> = () => {
    return ( 
        <div className="py-5">
            <div className="container h-[640px] flex items-center bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="w-full md:w-6/12 space-y-8">
                    <h2 className="font-bold text-6xl text-dblue-dark">
                        Your Premium Sound, Unplugged!
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <button className="py-5 px-6 rounded-lg bg-dorange text-white">
                        Find out More
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;