import { Movie } from "../../types";
import HoverContent from "./HoverContent";

export default function FilmCard(details: Movie) {
    return (
        <>
            <div>

                {/* image */}
                <div className="border-[5px] border-text1 rounded-sm w-[180px] h-[265px] 
                            bg-popcorn bg-cover bg-center
                            transition-colors duration-200
                            hover:border-accent_green
                            cursor-pointer
                            group
                            relative
                            "
                    id={details.id.toString()}
                >
                    {details.background_image ? <img src={details.medium_cover_image} className="min-w-full min-h-full object-cover" /> : ""}
                    <HoverContent genres={details.genres} rating={details.rating} id={details.id} className="absolute top-0" />
                </div>


                {/* text */}
                <div>
                    <p className="text-text1 font-bold hover:text-text2 max-w-[170px] line-clamp-1 overflow-clip"><a href={`/details/${details.id}`}>{details.title ?? "Title"}</a></p>
                    <p className="text-text2 text-[13.6px] ">{details.year ?? "Year"}</p>
                </div>

            </div>
        </>
    )
}



