import { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface RootProps {
    
}
 
const Root: FC<RootProps> = ({  }) => {
    return ( 
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    );
}
 
export default Root;