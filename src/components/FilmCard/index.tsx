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
            <div>

                {/* image */}
                <div className="border-[5px] border-white rounded-sm w-[212.5px] h-[325px] 
                            bg-popcorn bg-cover bg-center
                            transition-colors duration-200
                            hover:border-accent_green
                            cursor-pointer
                            group
                            relative
                            "
                    id={id.toString()}
                >
                    {background_image ? <img src={medium_cover_image} className="min-w-full min-h-full object-cover" /> : ""}
                    <HoverContent genres={genres} rating={rating} url={url} className="absolute top-0" />
                </div>


                {/* text */}
                <div>
                    <p className="text-white font-bold hover:text-text2 max-w-[210px] line-clamp-1 overflow-clip"><a href="">{title ?? "Title"}</a></p>
                    <p className="text-text2 text-[13.6px] ">{year ?? "Year"}</p>
                </div>

            </div>
        </>
    )
}



