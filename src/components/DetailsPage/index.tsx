import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetail } from "../../types";
import { getMovieDetail } from "../../api";
import HeroSection from "./HeroSection";
import Screenshots from "./Screenshots";
import YoutubeModal from "./YoutubeModal";


export const DetailsContext = createContext<MovieDetail | undefined>(undefined);


export default function DetailsPage() {

	const { id } = useParams<string>();
	const [details, setDetails] = useState<MovieDetail | undefined>(undefined)
	const [ytModalVisible, setYtModalVisible] = useState<boolean>(false)
	const toggleModal = () => {
		setYtModalVisible((v) => !v)
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


	// 	return (
	// 		<div style={{
	// 			backgroundImage: `url(${details?.background_image})`,
	// 			backgroundSize: 'cover',
	// 			backgroundPosition: 'center',
	// 			backgroundRepeat: 'no-repeat'
	// 		}}
	// 			className="relative bg-bgColor2 flex flex-col min-h-screen  justify-center items-center"
	// 		>
	// 			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgColor2 backdrop-filter backdrop-blur-lg">

	// 			<div className="flex justify-evenly gap-20 py-10 md:px-20 px-32 relative max-w-screen-lg">
	// 				<ImageBtnContainer large_cover_image={details?.large_cover_image} title={details?.title} />
	// 				<TextContainer {...details} />
	// 				<SimilarMovies id={id} />
	// 			</div>
	// 				<YoutubeModal video_id={details?.yt_trailer_code} isModalOpen={isModalOpen} toggleModal={toggleModal} />
	// 			</div>
	// 			<Screenshots onClick={toggleModal}
	// 				ss1={details?.medium_screenshot_image1}
	// 				ss2={details?.medium_screenshot_image2}
	// 				ss3={details?.medium_screenshot_image3}
	// 			/>
	// 		</div>
	// 	);
	// }
	return (
		<DetailsContext.Provider value={details}>
			<div>
				<YoutubeModal isModalVisible={ytModalVisible} setModalVisible={setYtModalVisible}/>
				<div style={{
					backgroundImage: `url(${details?.background_image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundBlendMode: "overlay"
				}}
				>
					<div
						className="
				relative top-0 w-full h-full  
				bg-gradient-to-b from-transparent to-bgColor2 backdrop-filter backdrop-blur-lg
				flex flex-col items-center
				py-10
				">
						<HeroSection />
					</div>
				</div>
				<Screenshots setVisible={setYtModalVisible} />
			</div>

		</DetailsContext.Provider>
	);
}