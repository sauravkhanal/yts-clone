import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IHoverContent {
    rating?: string | Number;
    genres?: string[];
    url?: string;
    id:number;
    className?: string;
}

export default function HoverContent({ rating, genres , className,id }: IHoverContent) {

    const navigate = useNavigate();

    function handleClick(movie_id: number) {
        navigate(`/details/${movie_id}`)
    }
    
    return (
        <a className={`
            w-full h-full bg-black 
            opacity-0 bg-opacity-0 
            hover:bg-opacity-70 hover:opacity-100 
            transition duration-300 ${className}
            text-text1 font-bold text-2xl
            flex flex-col items-center justify-center gap-8
            group overflow-hidden absolute
            `}
            onClick={()=>handleClick(id)}
            >

            {/* star icon and rating */}
            <span className="flex flex-col items-center gap-1">
                <FaStar className="text-accent_green" />
                <p className="">{rating?.toString() ?? "*"} / 10</p>
            </span>

            {/* display each genre in separate line */}
            <div className="flex flex-col items-center">
                {(genres ?? ["Genre"]).slice(0,2).map(
                    (word, index) => <p key={index}>{word}</p>
                )}
            </div>

            <button className="rounded-[.18rem] bg-accent_green h-9 w-32 font-bold text-base relative -bottom-14 group-hover:bottom-0 transition-all duration-300">View Details</button>
        </a>
    )
}