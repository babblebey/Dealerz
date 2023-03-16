import { FC } from "react";
import Achievements from "../components/Achievement";
import Blogs from "../components/Blogs";
import Collection from "../components/Collection";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Testimonial from "../components/Testimonial";
import TopItems from "../components/TopItems";

interface HomeProps {
    
}
 
const Home: FC<HomeProps> = () => {
    return ( 
        <>
            <Hero 
                title="Your Premium Sound, Unplugged!"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."   
                ctaButton={ {
                    label: 'Find out More'
                } } 
            />

            <Collection />

            <TopItems />

            <GetInTouch />

            <Achievements />

            <Testimonial />

            <Blogs />

            <Newsletter />
        </>
    );
}
 
export default Home;