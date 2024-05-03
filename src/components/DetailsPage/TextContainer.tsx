// import { MovieDetail } from "../../types";

export default function TextContainer(details) {
  return (
    <div>
        <p className="text-[40px] text-white font-bold pb-6">{details?.title}</p>
        <p className="text-xl text-white font-bold ">{details?.year}</p>
        <p className="text-xl text-white font-bold ">{details?.genres?.slice(0, 3).join(" / ")}</p>
    </div>
  )
}