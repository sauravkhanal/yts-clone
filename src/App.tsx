import { Route, Routes } from "react-router-dom"
import FilmCard from "./components/FilmCard"
import MovieCards from "./components/MovieCards"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Browse from "./components/Browse"
import Footer from "./components/Footer"

function App() {

	return (
		<div className="font-arimo">
			<NavBar />
			{/* <div className="w-96 h-96 border-4 border-red-500 m-5 relative flex flex-col gap-5 justify-center items-center overflow-hidden">
				<div className="w-40 h-20 bg-blue-500 ">
				</div>
				<div className="w-40 h-20 bg-black relative -bottom-44">
				</div>
			</div> */}

			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/browse-movies" Component={Browse}/>
			</Routes>

			<Footer/>
			{/* <section className="bg-bgColor1 p-5">
				<FilmCard id={9999} title={"this is a long title of the movie and it overlows omfg"} genres={["one", "two"]} year={1999} />

				<MovieCards className="flex flex-wrap gap-10" />
			</section> */}

		</div>
	)
}

export default App
