import { FC } from "react";
import img1 from "../../assets/coLtd.svg"
import img from "../../assets/coLt.svg"

interface AchievementsProps {
    
}
 
const Achievements: FC<AchievementsProps> = ({ }) => {
    return ( 
        <div className="bg-dgrey-light py-8 md:py-28">
            <div className="container">
                {/* Title */}
                <h3 className="text-5xl text-dblue-dark font-bold text-center">
                    Our Achievement
                </h3>

                {/* Logos */}
                <div className="flex items-center justify-center space-x-14 mt-20">
                    {[1,1,1,1,1,1].map((item, i) => (
                        <img key={i} src={img1} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Achievements;