import { useContext, useEffect, useState } from "react"
import { getSimilarMovie } from "../../../api";
import { Link, useNavigate } from "react-router-dom";
import { DetailsContext } from "..";
import { IClassName } from "../../../types";


export default function SimilarMovies({ className }: IClassName) {
    const details = useContext(DetailsContext)
    const navigate = useNavigate();


    function handleClick(movie_id: number) {
        navigate(`/details/${movie_id}`)
    }

    const [similarMovies, setSimilarMovies] = useState<{ id: number; img: string; }[] | undefined>()
    useEffect(() => {
        async function fetch() {
            const response = await getSimilarMovie(details?.id)
            // console.log("response from fetch")
            // console.log(response)
            setSimilarMovies(response)
        }
        fetch();
    }, [details?.id])

    return (
        <div className={`flex flex-col w-[248px] ${className} `}>
            <p className="text-text1 font-bold pb-1 shadow-text2 ">Similar Movies</p>
            <div className=" flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-5">
                    {
                        similarMovies?.map((value, _) =>
                            <Link to={`/details/${value.id}`}>
                                <img
                                    src={value.img}
                                    key={value.id.toString()}
                                    className="border-4 border-text1 hover:border-accent_green rounded-sm transition w-28"
                                    onClick={() => handleClick(value.id)}
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}