import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
    return (
        <span className="hidden lg:flex rounded-full border-2 border-text2/40 text-text2 px-2 py-1 h-9 w-64">
            <div className="w-6 flex items-center">
                <FaSearch />
            </div>
            <input type="text" className="outline-none px-1 pr-2 bg-transparent font-semibold text-sm w-48" placeholder="Quick Search" />
            {/* for loading icon when searching */}
            <div className="w-8 b-8 border border-red-500"></div>
        </span>
    )
}