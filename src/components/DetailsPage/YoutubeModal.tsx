import { useContext } from "react";
import { DetailsContext } from ".";

export default function YoutubeModal({ isModalVisible, setModalVisible }: { isModalVisible: boolean, setModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
    const details = useContext(DetailsContext)
    return (
        isModalVisible &&
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex justify-center items-center z-10 " 
        onClick={() => setModalVisible(false)} 
        >
            <div className="flex flex-col">

                <button
                    className=" text-text2 font-bold text-3xl hover:scale-125 transition self-end my-2"
                    onClick={() => setModalVisible(false)}
                >
                    x
                </button>
                <iframe
                    title="YouTube Video"
                    width="800"
                    height="450"
                    src={`https://www.youtube.com/embed/${details?.yt_trailer_code}`}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
