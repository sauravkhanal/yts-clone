import { useContext } from "react"
import { DetailsContext } from "../.."
import { IoMdHeart } from "react-icons/io";
import RottenTomatoes from "../../../../assets/rotten_tomato.png"
import IMDb from "../../../../assets/imdb.png"


export default function Ratings() {
    const details = useContext(DetailsContext)

    return (
        <div className="flex">

            <div className="grid grid-cols-3 grid-rows-4 space-y-2 space-x-4 ">
                <IoMdHeart className="text-accent_green w-6 h-6 ml-4 self-center relative top-2" />

                <Text primary={details?.like_count} />

                <a href={`https://www.rottentomatoes.com/m/` + details?.title.split(" ").join("_")} target="_blank">
                    <img src={RottenTomatoes} className="w-7 h-7 object-contain" alt="rotten tomatoes" />
                </a>

                <Text primary={"_%"} secondary={"TOMATOMETER"} />

                <a href={`https://www.rottentomatoes.com/m/` + details?.title.split(" ").join("_")} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/106px-Rotten_Tomatoes_positive_audience.svg.png" className="w-7 h-7 object-contain" />
                </a>

                <Text primary={"_%"} secondary={"AUDIENCE"} />
                <a href={"https://www.imdb.com/title/" + details?.imdb_code} target="_blank">
                    <img src={IMDb} alt="IMDb" className="h-6" />
                </a>
                <Text primary={details?.rating} secondary={"/10"} />
            </div>
        </div>
    )
}

function Text({ primary, secondary }: { primary?: string | number, secondary?: string | React.ReactNode }) {
    return <p className="text-white font-bold text-xl col-span-2">{primary} <span className="text-text2 text-sm font-normal">{secondary}</span></p>
}