import { useContext } from "react";
import { PiPlayCircleThin } from "react-icons/pi";
import { DetailsContext } from ".";



export default function Screenshots( {setVisible} : {setVisible: React.Dispatch<React.SetStateAction<boolean>>}) {
    const details = useContext(DetailsContext)
    return (
        <div className={`flex flex-row gap-1 justify-center py-10 bg-bgColor2 `}>
            <div
                className="relative flex justify-center items-center group cursor-pointer"
                onClick={()=>setVisible(true)}
            >
                <img src={details?.medium_screenshot_image1} alt="screen shot1" className="group-hover:opacity-70 transition  object-contain" />
                <span className="absolute group-hover:scale-110 transition pt-10">
                    <PiPlayCircleThin className="text-6xl text-text1" />
                    <p className="font-semibold text-text1 text-xl">Trailer</p>
                </span>
            </div>
            <img src={details?.medium_screenshot_image2} alt="screen shot2" className="hover:opacity-70 transition object-contain " />
            <img src={details?.medium_screenshot_image3} alt="screen shot3" className="hover:opacity-70 transition object-contain" />
        </div>
    )
}