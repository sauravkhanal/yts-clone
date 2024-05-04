import { Link } from "react-router-dom";
import { IClassName } from "../../types";

export default function Links({ className }: IClassName) {
    return (
        <ul className={`hidden lg:flex text-text2 font-bold text-sm  gap-5 justify-between  transition-all duration-1000 ${className}`}>
            {/* <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-text1">Home</a></li> */}
            <li><Link to="/" className="transition-colors ease-in-out duration-300 hover:text-text1">Home</Link></li>
            <li><a href="" className="transition-colors ease-in-out duration-300 text-accent_green  hover:text-text1">4K</a></li>
            <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-text1">Trending</a></li>
            {/* <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-text1">Browse Movies</a></li> */}
            <li><Link to="/browse-movies" className="transition-colors ease-in-out duration-300 hover:text-text1">Browse Movies</Link></li>
        </ul>
    )
}