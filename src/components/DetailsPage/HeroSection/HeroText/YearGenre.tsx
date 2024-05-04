import { useContext } from "react"
import { DetailsContext } from "../.."

export default function YearGenre() {
    const details = useContext(DetailsContext)
    return (
        <div >
            <p className="text-xl text-text1 font-bold ">{details?.year}</p>
            <span className="text-text1 flex gap-2 flex-wrap text-xl font-bold">
                {
                    // workaround to show / after every element except last, use selector later
                    //TODO: use css selector to show "/"
                    details?.genres?.map((genre, index) => <p>{genre}{((details.genres.length - 1) !== (index)) ? " /" : ""}</p>)
                }
            </span>
        </div>
    )
}