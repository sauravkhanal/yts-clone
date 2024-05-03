import { Movie } from "../../types"
import FilmCard from "./FilmCard.tsx"

interface IMovieCards {
    data?: Movie[];
    className?: string;
}

export default function MovieCards({ data, className }: IMovieCards) {

    return (
        <div className={className}>
            {
                data?.map((data, index) => <FilmCard  {...data} key={index} />)
            }
        </div>
    )
}