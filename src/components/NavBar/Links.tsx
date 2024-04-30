import { IClassName } from "../../types";

export default function Links({ className }: IClassName) {
    return (
        <ul className={`hidden lg:flex text-text2 font-bold text-sm  gap-5 justify-between  transition-all duration-1000 ${className}`}>
            <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-white">Home</a></li>
            <li><a href="" className="transition-colors ease-in-out duration-300 text-accent_green  hover:text-white">4K</a></li>
            <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-white">Trending</a></li>
            <li><a href="" className="transition-colors ease-in-out duration-300 hover:text-white">Browse Movies</a></li>
        </ul>
    )
}