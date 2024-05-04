import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { getMoviesData } from "../../../api";
import { Movie } from "../../../types";
import QuickSearchResult from "./QuickSearchResult";
import LoadingSVG from "./LoadingSVG";

const QuickSearchBox: React.FC = () => {
    const [queryParam, setQueryParam] = useState<string>("");
    const [movies, setMovies] = useState<Movie[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [quickSearchResultShown, setQuickSearchResultShown] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)



    async function fetch() {
        setLoading(true);
        const response = await getMoviesData({ query_term: queryParam })
        if (response?.movie_count ?? 0 > 0) {
            console.log(response?.movies)
            setMovies(response?.movies.slice(0, 5))
            setQuickSearchResultShown(true);
        }
        setLoading(false);
    }
    useEffect((() => {
        let timer: number;
        if (queryParam.length > 3) {
            timer = setTimeout(fetch, 1000) // wait for 1000ms before fetching
        }
        return () => clearTimeout(timer)
    }), [queryParam])


    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const param = event.target.value
        if (param.length > 3)
            setQueryParam(event.target.value);
        setQuickSearchResultShown(true)
        setMovies([])
    }

    return (
        <div className="hidden lg:flex rounded-full border-2 border-text2/40 text-text2 px-2 py-1 h-9 w-64 relative"
            ref={inputRef}
            onFocus={() => setQuickSearchResultShown(true)}
            onBlur={() => setTimeout(() => { setQuickSearchResultShown(false) }, 300)}
        >
            <div className="w-6 flex items-center">
                <FaSearch />
            </div>
            <input

                type="text"
                className="outline-none px-1 pr-2 bg-transparent font-semibold text-sm w-44 flex-grow group"
                placeholder="Quick Search"
                onChange={handleQueryChange}
            />
            {/* for loading icon when searching */}
            {loading && <div className="w-6 b-6 ">
                <LoadingSVG />
            </div>}
            {/* {quickSearchResultShown && <QuickSearchResult details={movies} className=" absolute top-12" />}
             */}

            <div className={`${(quickSearchResultShown && (movies?.length ?? 0 > 1)) ? "h-[505px]" : "h-0"} transition-all duration-250 ease-linear overflow-hidden absolute top-12`}>
                <QuickSearchResult details={movies} />
            </div>
        </div>
    );
}

export default QuickSearchBox;
