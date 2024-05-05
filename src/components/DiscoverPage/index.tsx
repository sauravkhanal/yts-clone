import { useState, useEffect } from "react";
import { getAxios } from "../../api";
import { Movie, MovieQuery, Root } from "../../types";
import MovieCards from "../MovieCards";
import { AxiosResponse } from "axios";
import { FaArrowAltCircleUp } from "react-icons/fa";
import LoadingSVG from "../NavBar/QuickSearch/LoadingSVG";
import {debounceLeading } from "../../utils/debounce";
import scrollToTop from "../../utils/ScrollToTop";


export default function DiscoverPage(): JSX.Element {
    const [data, setData] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(2)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{ message: string } | null>(null)
    const limit = 20;

    function increasePageCount(): void {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    /**
     * Fetches movie data from the API.
     * @param {number} currentPage - The page number to fetch.
     * @returns {Promise<void>} A Promise that resolves when the data is fetched.
     */
    async function fetchData(currentPage: number): Promise<void> {
        setLoading(true)
        setError(null)
        try {

            const params: MovieQuery = {
                limit,
                page: currentPage,
                // query_term: "the"
            };
            const response: AxiosResponse<Root> = await getAxios.get("/list_movies.json", { params, timeout: 5000 });
            setData(prev => ([...prev, ...response.data.data.movies]));
            setTotalPages(Math.ceil(response.data.data.movie_count / limit))

        } catch (error: any) {
            console.log(error.message)
            setError(error ?? { message: "An error occurred" })

        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (!loading && currentPage <= totalPages) {
            fetchData(currentPage);
        }
    }, [currentPage]);


    function handleScroll() {
        const webpageHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const currentPosition = document.documentElement.scrollTop;

        if ((currentPosition >= webpageHeight - viewportHeight) && (currentPage < totalPages) && (!loading)) {
            increasePageCount();
        }
    }

    // since scroll event is triggered very fast, the page number increases multiple times on scroll
    // to prevent it the only leading call is executed (trailing calls are ignored) for 500ms
    const debouncedScroll = debounceLeading(handleScroll, 500) 

    useEffect(() => {
        window.addEventListener("scroll", debouncedScroll)
        return () => window.removeEventListener("scroll", debouncedScroll)
    }, [debouncedScroll])



    return (
        <div className={`flex flex-col items-center py-10 bg-bgColor min-h-screen bg-bgColor1`}>
            <span className="fixed bottom-5 right-10 z-10 flex flex-col items-center select-none">
                <FaArrowAltCircleUp
                    className="  text-4xl text-accent_green hover:scale-110 transition active:scale-100"
                    title="Move to top"
                    onClick={scrollToTop}
                />
                <span className="text-text1 pt-1 font-bold text-sm">
                    page {currentPage}/{totalPages}
                </span>
                <p className="sticky top-20 flex justify-center text-sm text-text1">{data.length} movies</p>
            </span>
            <p className=" font-bold text-text1 mb-10 text-xl ">Infinite Scrolling</p>
            <section className={`flex flex-col items-center bg-bgColor1`}>
                <MovieCards className={`grid grid-cols-4 gap-x-16 gap-y-4 bg-bgColor1 `} data={data} />
            </section>
            {loading && <span className="m-5 w-8"><LoadingSVG /></span>}
            {error && <p className="m-5 text-2xl text-text1">{error.message}</p>}
            {currentPage == totalPages && <p className="m-5 text-2xl text-text1">Reached the end</p>}
        </div>

    )
}