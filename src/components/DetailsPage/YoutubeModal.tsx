export default function YoutubeModal({ video_id, isModalOpen, toggleModal }: { video_id: string | undefined, isModalOpen: boolean, toggleModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        isModalOpen &&
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex justify-center items-center z-50">
            <button className="absolute top-10 right-[300px] text-white text-2xl hover:opacity-80" onClick={toggleModal}>X</button>
            <iframe
                title="YouTube Video"
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${video_id}`}
                allowFullScreen
            ></iframe>
        </div>
    );
}
