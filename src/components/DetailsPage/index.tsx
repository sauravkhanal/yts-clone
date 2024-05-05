import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieDetail } from "../../types";
import { getMovieDetail } from "../../api";
import HeroSection from "./HeroSection";
import Screenshots from "./Screenshots";
import YoutubeModal from "./YoutubeModal";
import SummaryAndCast from "./SummaryAndCast";


export const DetailsContext = createContext<MovieDetail | undefined>(undefined);


export default function DetailsPage() {
	const navigate = useNavigate()
	const navigateToErrorPage = () => navigate("/404")

	const { id } = useParams<string>();
	const [details, setDetails] = useState<MovieDetail | undefined>(undefined)
	const [ytModalVisible, setYtModalVisible] = useState<boolean>(false)


	useEffect(() => {
		const timer = setTimeout(navigateToErrorPage, 5000) // show error if data can't be fetched in 5s
		async function fetchData() {
			if (id) {
				const response = await getMovieDetail(parseInt(id));
				if (response) {
					setDetails(response?.data.movie);
				}

				if (response?.data.movie.id === 0 || response?.data.movie.id == undefined) navigate('/404')
				else if (!response) navigate('/404')

				clearTimeout(timer)
				// console.log(JSON.stringify(details))
				// console.log(`The x response is : ${JSON.stringify(response?.data.movie)}`)
			}
		}
		fetchData();

		return () => clearTimeout(timer)
	}, [id]);




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
				<SummaryAndCast/>
			</div>

		</DetailsContext.Provider>
	);
}