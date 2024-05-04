import { useState, useEffect } from "react";
import { getMoviesData } from "../../api";
import { MovieQuery, Data } from "../../types";
import MovieCards from "../MovieCardBrowse";
import Search from "./Search";
import Pagination from "../Pagination";

export default function Browse() {
    const [data, setData] = useState<Data>({ movie_count: 0, limit: 0, page_number: 0, movies: [] });
    const [query, setQuery] = useState<MovieQuery>({});


    useEffect(() => {
        async function fetchData() {
            // console.log("Fetching data with query: ", + JSON.stringify(query))
            const response = await getMoviesData(query);
            // console.log(" and the The received data is ")
            // console.log(data)
            if(response) setData(response); //handle case such that resp0nse may 
        }
        fetchData();
    }, [query]);
    return (
        <div className="flex flex-col flex-grow">
            <Search setQuery={setQuery} />

            <section className="bg-bgColor1 flex flex-col gap-10 items-center py-5 flex-grow">
                {data.movie_count > 0 && <p className="text-2xl text-accent_green">YIFY Movies - page {data.page_number}</p>}
                <Pagination page_number={data.page_number} limit={data.limit} movie_count={data.movie_count} setQuery={setQuery} />
                <MovieCards className="grid grid-cols-5 gap-x-16 gap-y-4 bg-bgColor1 my-4" data={data?.movies} />
                <Pagination page_number={data.page_number} limit={data.limit} movie_count={data.movie_count} setQuery={setQuery} />
            </section>

            {/* <button onClick={()=>setQuery({limit:5})}>click me</button> */}
        </div>
    )
}