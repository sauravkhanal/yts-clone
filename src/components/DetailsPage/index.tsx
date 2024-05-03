import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../../types";
import { getMovieDetail } from "../../api";
import ImageBtnContainer from "./ImageBtnContainer";
import SimilarMovies from "./SimilarMovies";
import TextContainer from "./TextContainer";
import Screenshots from "./Screenshots";
import YoutubeModal from "./YoutubeModal";

export default function DetailsPage() {
	const { id } = useParams<string>();
	const [details, setDetails] = useState<MovieDetail | undefined>(undefined)
	const [isModalOpen, setModalOpen] = useState<boolean>(false)
	const toggleModal = () => {
		setModalOpen((v) => !v)
	}

	useEffect(() => {
		async function fetchData() {
			if (id) {
				const response = await getMovieDetail(parseInt(id));
				if (response) setDetails(response?.data.movie);
				// console.log(JSON.stringify(details))
				// console.log(`The x response is : ${JSON.stringify(response?.data.movie)}`)
			}
		}
		fetchData();
	}, [id]);


	return (
		<div className="relative bg-bgColor2 flex flex-col min-h-screen" style={{
			backgroundImage: `url(${details?.background_image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}}>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgColor2 backdrop-filter backdrop-blur-lg"></div>
			<div className="flex justify-evenly gap-20 py-10 md:px-20 px-32 relative drop-shadow-lg">
				<ImageBtnContainer large_cover_image={details?.large_cover_image} title={details?.title} />
				<TextContainer {...details} />
				<SimilarMovies id={id} />
				<YoutubeModal video_id={details?.yt_trailer_code} isModalOpen={isModalOpen} toggleModal={toggleModal} />
			</div>
			<Screenshots
				ss1={details?.medium_screenshot_image1}
				ss2={details?.medium_screenshot_image2}
				ss3={details?.medium_screenshot_image3}
				onClick={toggleModal} />
		</div>
	);
	23

}