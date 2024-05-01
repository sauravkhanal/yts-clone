import { FaStar } from "react-icons/fa";

interface IHoverContent {
    rating?: string | Number;
    genres?: string[];
    url?: string;
    className?: string;
}

export default function HoverContent({ rating, genres, url, className }: IHoverContent) {
    return (
        <div className={`
            w-full h-full bg-black 
            opacity-0 bg-opacity-0 
            hover:bg-opacity-70 hover:opacity-100 
            transition duration-300 ${className}
            text-white font-bold text-2xl
            flex flex-col items-center justify-center gap-8
            group overflow-hidden
            `}>

            {/* star icon and rating */}
            <span className="flex flex-col items-center gap-1">
                <FaStar className="text-accent_green" />
                <p className="">{rating?.toString() ?? "*"} / 10</p>
            </span>

            {/* display each genre in separate line */}
            <div className="flex flex-col items-center">
                {(genres ?? ["Genre"]).map(
                    (word, index) => <p key={index}>{word}</p>
                )}
            </div>

            <button className="rounded-[.18rem] bg-accent_green h-9 w-32 font-bold text-base relative -bottom-14 group-hover:bottom-0 transition-all duration-300"><a href={url}>View Details</a></button>
        </div>
    )
}