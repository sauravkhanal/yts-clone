import { useState, useEffect } from "react";
import { getMoviesData } from "../../api";
import { Data } from "../../types";
import MovieCards from "../MovieCards";
import { Link } from "react-router-dom";

interface IMovieSection {
    title: string;
    sort_by?: 'title' | 'year' | 'rating' | 'peers' | 'seeds' | 'download_count' | 'like_count' | 'date_added';
    limit?: number;
    bgColor?: "bg-bgColor2" | "bg-bgColor1";
}

export default function MovieSection({title, sort_by, limit = 8, bgColor}: IMovieSection) {
    const [data, setData] = useState<Data>();


    useEffect(() => {
        async function fetchData() {
            const response = await getMoviesData({ sort_by: sort_by, limit: limit });
            // console.log("The received data is ")
            // console.log(data)
            setData(response);
        }
        fetchData();
    }, []);
    
    return (
        <section className={`flex flex-col items-center py-10 bg-bgColor1 ${bgColor}`}>
            <span className="flex justify-between w-4/5 pb-10">
                <p className=" font-bold text-white  ">{title}</p>
                <Link to="/browse-movies" className="text-text2">Browse all</Link>
            </span>
            {/* latest movies */}
            {/* <MovieCards className="grid grid-cols-4 gap-x-16 gap-y-4" /> */}

            <section className={`flex flex-col items-center bg-bgColor1 ${bgColor}`}>
                <MovieCards className={`grid grid-cols-4 gap-x-16 gap-y-4 bg-bgColor1 ${bgColor}`} data={data?.movies} />
            </section>
        </section>

    )
}