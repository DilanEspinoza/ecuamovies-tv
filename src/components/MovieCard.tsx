const MovieCard = ({ movies }) => {
	return (
		<div className='flex flex-wrap m-4 '>
			{movies &&
				movies.map((movie) => {
					return (
						<article
							key={movie.id + "-container-movie"}
							className='flex flex-col'>
							<p key={movie.id + "-title"}>{movie.title}</p>
							<img
								key={movie.id + "-img"}
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className='w-52'
							/>
						</article>
					);
				})}
		</div>
	);
};
export default MovieCard;
