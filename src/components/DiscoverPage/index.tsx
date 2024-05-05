import { useState, useEffect } from "react";
import { getAxios } from "../../api";
import { Movie, MovieQuery, Root } from "../../types";
import MovieCards from "../MovieCards";
import { AxiosResponse } from "axios";
import { FaArrowAltCircleUp } from "react-icons/fa";
import LoadingSVG from "../NavBar/QuickSearch/LoadingSVG";


export default function DiscoverPage(): JSX.Element {
    const [data, setData] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<{ message: string } | null>(null)

    function increasePage(): void {
        setPage(page => page + 1)
    }

    /**
     * Fetches movie data from the API.
     * @param {number} pageNumber - The page number to fetch.
     * @returns {Promise<void>} A Promise that resolves when the data is fetched.
     */
    async function fetchData(pageNumber: number): Promise<void> {
        setLoading(true)
        setError(null)
        try {

            const params: MovieQuery = {
                limit: 20,
                page: pageNumber
            };
            const response: AxiosResponse<Root> = await getAxios.get("/list_movies.json", { params , timeout: 5000});
            setData(prev => ([...prev, ...response.data.data.movies]));

        } catch (error: any) {
            console.log(error.message)
            setError(error ?? {message:"An error occurred"})

        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        !loading && fetchData(page);
    }, [page]);

    function handleScroll() {
        // console.log("***********************************************")
        // console.log("Height of webpage: ", document.documentElement.scrollHeight)
        // console.log("Scrolled from top: ", document.documentElement.scrollTop)
        // console.log("total height of view port: ", window.innerHeight)

        const webpageHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const currentPosition = document.documentElement.scrollTop;

        if (currentPosition >= webpageHeight - 2 * viewportHeight) { // fetch while there is still a viewport worth content is remaining
            increasePage();
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    function scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={`flex flex-col items-center py-10 bg-bgColor min-h-screen bg-bgColor1`}>
            <span className="fixed bottom-5 right-10 z-10 flex flex-col items-center select-none">
                <FaArrowAltCircleUp
                    className="  text-4xl text-accent_green hover:scale-110 transition active:scale-100"
                    title="Move to top"
                    onClick={scrollToTop}
                />
                <p className="sticky top-20 flex justify-center p-2 text-sm text-text1">{data.length} movies</p>
            </span>
            <p className=" font-bold text-text1 mb-10 text-xl ">Infinite Scrolling</p>
            <section className={`flex flex-col items-center bg-bgColor1`}>
                <MovieCards className={`grid grid-cols-4 gap-x-16 gap-y-4 bg-bgColor1 `} data={data} />
            </section>
            {loading && <span className="m-5 w-8"><LoadingSVG /></span>}
            {error && <p className="m-5 text-2xl text-text1">{error.message}</p>}
        </div>

    )
}