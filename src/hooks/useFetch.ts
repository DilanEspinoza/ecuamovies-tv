export const useFetch = async (query: string) => {
	const API_KEY = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
	const URL_BASE = "https://api.themoviedb.org/3/search/movie";
	try {
		const response = await fetch(
			`${URL_BASE}?query=${query}&api_key=${API_KEY}`
		);
		const data = await response.json();
		const results = data.results;
		return { results };
	} catch (error) {
		console.log(error);
		// }
	}
};
