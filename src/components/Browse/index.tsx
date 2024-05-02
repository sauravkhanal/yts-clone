import { useState, useEffect } from "react";
import { getMoviesData } from "../../api";
import { MovieQuery, Data } from "../../types";
import MovieCards from "../MovieCards";
import Search from "./Search";

export default function Browse() {
    const [data, setData] = useState<Data>();
    const [query, setQuery] = useState<MovieQuery>({});


    useEffect(() => {
        async function fetchData() {
            const response = await getMoviesData(query);
            console.log("The received data is ")
            // console.log(data)
            setData(response);
        }
        fetchData();
    }, [query]);
    return (
        <>
            <Search setQuery={setQuery} />

            <section className="bg-bgColor2 flex flex-col items-center">
                <MovieCards className="grid grid-cols-4 gap-x-16 gap-y-4 bg-bgColor1" data={data?.movies}/>
            </section>

            {/* <button onClick={()=>setQuery({limit:5})}>click me</button> */}
        </>
    )
}