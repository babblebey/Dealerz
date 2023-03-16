import { FC } from "react";
import heroBg from "../../assets/hero.svg";
import parse from "html-react-parser";

interface HeroProps {
    title: string;
    description: string;
    ctaButton?: { label: string, url?: string }
}
 
const Hero: FC<HeroProps> = ({ title, description, ctaButton }) => {
    return ( 
        <div className="py-5">
            <div className={`container ${ctaButton ? `h-[640px]` : `h-[320px] bg-repeat-x`} flex items-center bg-no-repeat bg-center bg-contain`}
                style={{ backgroundImage: `url(${ heroBg })` }}
            >
                <div className="w-full md:w-6/12 space-y-8">
                    {/* Title */}
                    <h2 className="font-bold text-6xl text-dblue-dark">
                        { title }
                    </h2>

                    {/* Description */}
                    <p>
                        { parse(description) }
                    </p>

                    {/* Call-to-action Button - If Found */}
                    { ctaButton && (
                        <a href={ ctaButton.url || '#' }>
                            <button className="py-5 px-6 rounded-lg bg-dorange-light text-white">
                                { ctaButton.label }
                            </button>
                        </a>
                    ) }
                </div>
            </div>
        </div>
    );
}
 
export default Hero;