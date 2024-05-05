import { useContext } from "react"
import { DetailsContext } from ".."
import CastCard from "./CastCard"
import { IClassName } from "../../../types"

export default function DirectorAndCast(className: IClassName) {
  const details = useContext(DetailsContext)
    return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <p className="text-2xl text-text1 font-bold">Top Cast</p>
        {
             details?.cast ? details?.cast?.map(value => <CastCard detail={value} key={value.imdb_code}/>) 
             :
             <p className="text-xl text-text1 font-bold pt-5">Not Available</p>
        }
    </div>
  );
}