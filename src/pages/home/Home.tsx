import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { getMovies } from "../../services";
import { Header } from "../../components/layout/header/Header";

interface Movie {
	title: string;
	poster_path: string;
}

export const Home = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movieData = await getMovies(
					"https://api.themoviedb.org/3/movie/popular"
				);
				setMovies(movieData.results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovies();
	}, []);
	return (
		<>
			<Header />
			<div className='pt-16'></div>
			<div className='h-screen'>Slider de imagenes</div>
			<main className=' w-full mt-8 '>
				<div className='w-10/12 flex flex-wrap m-4 gap-3 justify-center mx-auto max-w-5xl'>
					{movies &&
						movies.map((movie) => (
							<MovieCard title={movie.title} poster_path={movie.poster_path} />
						))}
				</div>
			</main>
		</>
	);
};
