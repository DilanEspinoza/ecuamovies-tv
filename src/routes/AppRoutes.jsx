import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
	Home,
	Action,
	Comedy,
	Drama,
	Horror,
	Movies,
	NoFound,
	Romance,
	Series,
	Thriller,
} from "../pages";

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/action' element={<Action />} />
				<Route path='/comedy' element={<Comedy />} />
				<Route path='/drama' element={<Drama />} />
				<Route path='/horror' element={<Horror />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/romance' element={<Romance />} />
				<Route path='/series' element={<Series />} />
				<Route path='/thriller' element={<Thriller />} />

				<Route path='*' element={<NoFound />} />
			</Routes>
		</Router>
	);
};
