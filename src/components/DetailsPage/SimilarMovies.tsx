import { useEffect, useState } from "react"
import { getSimilarMovie } from "../../api";
import { useNavigate } from "react-router-dom";

interface Iid {
    id?: string;
    className?: string;
}

export default function SimilarMovies({ id, className }: Iid) {
    
    const navigate = useNavigate();

    function handleClick(movie_id: number) {
        navigate(`/details/${movie_id}`)
    }

    const [similarMovies, setSimilarMovies] = useState<{ id: number; img: string; }[] | undefined>()
    useEffect(() => {
        async function fetch() {
            const response = await getSimilarMovie(id)
            // console.log("response from fetch")
            // console.log(response)
            setSimilarMovies(response)
        }
        fetch();
    }, [id])

    return (
    <div className={`flex flex-col w-[248px] ${className} `}>
        <p className="text-white font-bold pb-1">Similar Movies</p>
        <div className=" flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-5">
                {
                    similarMovies?.map((value, _) => <img
                        src={value.img}
                        id={value.id.toString()}
                        className="border-4 border-white hover:border-accent_green rounded-sm transition w-28" 
                        onClick={()=> handleClick(value.id)}
                        />)
                }
            </div>
        </div>
    </div>
    )
}