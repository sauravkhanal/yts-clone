import { useContext } from "react";
import { DetailsContext } from "../..";
import Button from "../../../Button";

export default function AvailableIn() {
	const details = useContext(DetailsContext)
	return (
		<div className="flex flex-wrap gap-x-2 gap-y-1">
			<div className="italic text-text1 text-xl">Available in:</div>
			{
				details?.torrents.map((torrent, index) => (
					<div key={index} >
						<Button variant="outline" className="hover:opacity-80 hover:bg-transparent rounded-md font-normal text-sm">
							<a href={torrent.url} target="_blank">
								{/* display .x265 green only if vidoe_coded is x265 */}
								{torrent.quality}.{torrent.type.toUpperCase()}{(torrent.video_codec === "x265") && <span className="text-xs text-accent_green">.x265</span>}
							</a>
						</Button>
					</div>
				))
			}
		</div>
	)
}
