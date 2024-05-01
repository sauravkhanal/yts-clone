import { Movie } from "../../types";
import HoverContent from "./HoverContent";

export default function FilmCard({
    id,
    url,
    imdb_code,
    title,
    title_english,
    title_long,
    slug,
    year,
    rating,
    runtime,
    genres,
    summary,
    description_full,
    synopsis,
    yt_trailer_code,
    language,
    mpa_rating,
    background_image,
    background_image_original,
    small_cover_image,
    medium_cover_image,
    large_cover_image,
    state,
    torrents,
    date_uploaded,
    date_uploaded_unix,
}: Movie) {
    return (
        <>
            {/* image */}
            <div className="border-[5px] border-white rounded-sm w-56 h-80 
                            bg-popcorn bg-cover bg-center
                            transition-colors duration-200
                            hover:border-accent_green
                            cursor-pointer
                            group
                            relative
                            "
                            id={id.toString()}
                            >
                {background_image ? <img src={background_image} className="min-w-full min-h-full object-cover" /> : ""}
                <HoverContent />
            </div>
            {/* text */}
            <div className="pl-1">
                <p className="text-white font-bold hover:text-text2 text-ellipsis"><a href="">{title ?? "Title"}</a></p>
                <p className="text-text2 text-xs ">{year ?? "Year"}</p>
            </div>
        </>
    )
}



