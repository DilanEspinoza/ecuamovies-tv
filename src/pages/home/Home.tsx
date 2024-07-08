import { useState } from "react";
import { Navbar } from "../../components/Layout";
export const Home = () => {
	const [query, setQuery] = useState();
	const [movies, setMovies] = useState([]);

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	const getData = async () => {
		const API_KEY = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
		const URL_BASE = "https://api.themoviedb.org/3/search/movie";
		try {
			const response = await fetch(
				`${URL_BASE}?query=${query}&api_key=${API_KEY}`
			);
			const data = await response.json();
			console.log(data.results);
			setMovies(data.results);
		} catch (error) {
			console.log(error);
			// }
		}
	};

	return (
		<>
			<Navbar />
			<div className='p-4'>
				<form className='flex  gap-2' onSubmit={(e) => e.preventDefault()}>
					<input
						className='border-solid border-black p-2'
						type='text'
						placeholder='Search your movie'
						onChange={handleOnChange}
					/>
					<button
						className=' bg-cyan-600 text-white p-2 rounded-md'
						type='submit'
						onClick={getData}>
						Search
					</button>
				</form>
			</div>
		</>
	);
};
