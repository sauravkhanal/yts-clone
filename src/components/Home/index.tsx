import { Link } from "react-router-dom";
import MovieCards from "../MovieCards";

export default function Home() {
    return (
        <section className="bg-bgColor2 flex flex-col items-center">
            <span className="flex justify-between w-4/5 py-10">
                <p className=" font-bold text-white  ">Latest YIFY Movies Torrents</p>
                <Link to="/browse-movies" className="text-text2">Browse all</Link>
            </span>
            <MovieCards className="grid grid-cols-4 gap-x-16 gap-y-4" />
        </section>
    )
}