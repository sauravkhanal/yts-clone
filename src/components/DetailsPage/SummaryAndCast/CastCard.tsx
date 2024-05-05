import { Cast, IClassName } from "../../../types";

export default function CastCard({ detail, className }: { detail: Cast, className?: IClassName }) {
	console.log(detail.name , detail.url_small_image)
	return (
		<div className={`flex gap-1 border-b border-text2 border-opacity-30 py-2 items-center ${className}`}>
			<a href={`https://www.imdb.com/name/nm${detail.imdb_code}`} target="_blank">
				{
				detail.url_small_image ?
				<img src={detail.url_small_image} alt="profile image" className="w-10 h-10 rounded-full" />
				:
				<img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" alt="profile image" className="w-10 h-10 rounded-full" />
			}
			</a>
			<p className="text-text2 text-xs">{detail.name}<span className="text-text1 text-sm"> as {detail.character_name}</span></p>
		</div>
	)
}