import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Browse from "./components/Browse"
import Footer from "./components/Footer"
import DetailsPage from "./components/DetailsPage"
import PageNotFound from "./components/404"

function App() {

	return (
		<div className="font-arimo flex flex-col min-h-screen">
			<NavBar />

			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/browse-movies" Component={Browse}/>
				<Route path="/details/:id" Component={DetailsPage}/>
				<Route path="*" Component={PageNotFound}/>
			</Routes>

			<Footer/>
		</div>
	)
}

export default App
