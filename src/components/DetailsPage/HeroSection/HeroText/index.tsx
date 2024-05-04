import { useContext } from "react"
import { DetailsContext } from "../.."
import AvailableIn from "./AvailableIn"
import Button from "../../../Button"
import YearGenre from "./YearGenre"
import { PiDownloadSimpleFill } from "react-icons/pi";
import Ratings from "./Ratings"

export default function index() {
	const details = useContext(DetailsContext)
	return (
		<div className="flex flex-col gap-6">
			
			<p className="text-[40px] text-white font-bold">{details?.title}</p>
			<YearGenre/>
			<AvailableIn />

			<Button variant="outline" className="hover:opacity-80 hover:bg-transparent rounded-md font-normal text-sm self-start">
				<a  className="flex items-center justify-center gap-2">
					<PiDownloadSimpleFill className="text-accent_green text-xl"/>Download Subtitles
				</a>
			</Button>
			<Ratings/>
		</div>

	)
}