import { IClassName } from "../../types";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";

export default function SmallScreenLinkIcons({ className }: IClassName) {
    return (
        <ul className={`flex items-center gap-2 text-white text-xl md:text-2xl lg:hidden ${className}`}>
            <li><a href="#"><FaSearch /></a></li>
            <li><a href="#" className="font-bold text-accent_green text-3xl">4K</a></li>
            <li><a href="#"><IoStatsChartSharp /></a></li>
            <li><a href="#"><FaListAlt /></a></li>
            <li><a href="#"><FaUser /></a></li>
        </ul>
    );
}
