import { IoPlayCircleOutline } from "react-icons/io5";

interface IScreenshots {
    ss1?: string,
    ss2?: string,
    ss3?: string,
    onClick: any
}

export default function Screenshots({ ss1, ss2, ss3, onClick }: IScreenshots) {
    return (
        <div className="flex flex-row gap-1 justify-center max-h-60 w-auto z-10 my-10">
            <div className="relative " >
                <img src={ss1} alt="screen shot1" className="hover:opacity-70 transition  object-contain" />
                <div
                    onClick={onClick}
                    className="absolute top-0 w-full h-full flex flex-col justify-center items-center hover:scale-110 transition"
                >
                    <IoPlayCircleOutline className="text-6xl text-white" />
                    <p className="font-semibold text-white text-xl">Trailer</p>
                </div>
            </div>
            <div>

                <img src={ss2} alt="screen shot2" className="hover:opacity-70 transition object-contain " />
            </div>
            <div>

                <img src={ss3} alt="screen shot3" className="hover:opacity-70 transition object-contain" />
            </div>
        </div>
    )
}