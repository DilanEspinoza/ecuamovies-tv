interface Movie {
	title: string;
	poster_path: string;
}

export const MovieCard = ({ title, poster_path }: Movie) => {
	return (
		<article className=' flex justify-start items-center flex-col p-2 text-balance text-center overflow-hidden max-w-xs '>
			<img
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt={title}
				className='w-52 rounded-md'
			/>
			<p className='text-overflow-ellipsis'>{title}</p>
		</article>
	);
	{
		/* <div className='flex flex-wrap m-4 '>
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
		</div> */
	}
};
