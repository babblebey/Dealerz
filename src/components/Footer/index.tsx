import { FC } from "react";
import logo from "../../assets/logo.svg";

interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        <div className="pt-8 md:pt-16 space-y-10">
            <div className="container">
                <div className="flex justify-between">
                    {/* Logo & Bookmark */}
                    <div className="space-y-10">
                        {/* Logo */}
                        <img src={ logo } alt="Dealerz" />

                        {/* Bookmark */}
                        <ul className="space-y-4 font-bold">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms and Condition</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <span>
                            
                        </span>
                    </div>
                </div>
            </div>

            {/* Copyrights */}
            <div className="border-t border-dgrey-light py-4">
                <div className="container">
                    <p>
                        © 2023 Dealerz. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;