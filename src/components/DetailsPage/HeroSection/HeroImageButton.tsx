import { useContext } from "react";
import Button from "../../Button";
import { DetailsContext } from "..";
import { PiDownloadSimpleFill } from "react-icons/pi";

/**
 * Component that uses details context to display a hero image with download and watch now buttons.
 * @returns {JSX.Element} The JSX element to render.
 */
export default function HeroImageButton(): JSX.Element {
	const details = useContext(DetailsContext);

	return (
		<div className="flex flex-col w-72 gap-2">
			<img
				src={details?.large_cover_image}
				alt={details?.title}
				className="border-[5px] border-white rounded sm"
			/>
			<Button className="py-2"> 
				<a
					href={details?.torrents[details?.torrents.length - 1]?.url} // link to last torrent url
					className="flex justify-center items-center gap-2"
				>
					<PiDownloadSimpleFill className="text-2xl text-black text-opacity-50" />
					Download
				</a>
			</Button>
			<Button className="bg-[#0aad9e] py-2">Watch Now</Button>
		</div>
	);
}
