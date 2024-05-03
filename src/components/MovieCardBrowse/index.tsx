import { Movie } from "../../types"
import FilmCard from "./FilmCard.tsx"

interface IMovieCards {
    data?: Movie[];
    className?: string;
}

export default function MovieCards({ data, className }: IMovieCards) {

    if (!data || data.length == 0){
        return <div className={`flex justify-center p-11 `}>
            <p className="text-4xl font-bold text-white">No Movies Found.</p>
        </div>
    }

    return (
        <div className={className}>
            {
                data?.map((data, index) => <FilmCard  {...data} key={index} />)
            }
        </div>
    )
}