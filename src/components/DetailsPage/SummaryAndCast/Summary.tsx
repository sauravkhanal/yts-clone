import { useContext } from "react"
import { DetailsContext } from ".."
import { IClassName } from "../../../types"

export default function Summary(className: IClassName) {
	const details = useContext(DetailsContext)
	return (
		<div className={`px-4 ${className}`}>
			<p className="text-xl text-text1 font-bold">Plot Summary</p>
			<p className="text-text2 text-base py-6">{details?.description_full?.split("—")[0]}</p>
			<p className="text-text2 text-base py-6"><span className="italic">Uploaded by: </span>{details?.description_full?.split("—")[1].toUpperCase()}</p>
		</div>
	)
}
