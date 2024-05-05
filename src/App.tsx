import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Browse from "./components/Browse"
import Footer from "./components/Footer"
import DetailsPage from "./components/DetailsPage"
import PageNotFound from "./components/404"
import DiscoverPage from "./components/DiscoverPage"

function App() {

	const currentRoute = useLocation().pathname;

	return (
		<div className="font-arimo flex flex-col min-h-screen">
			<NavBar />

			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/browse-movies" Component={Browse}/>
				<Route path="/details/:id" Component={DetailsPage}/>
				<Route path="/discover" Component={DiscoverPage}/>
				<Route path="*" Component={PageNotFound}/>
			</Routes>

			{currentRoute !== "/discover" && <Footer/>}
		</div>
	)
}

export default App
