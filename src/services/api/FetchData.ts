/* import axios from "axios";

export const getMovies = async (query: { query: string }) => {
	const API_KEY = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
	console.log(API_KEY.length);
	const URL_BASE = "https://api.themoviedb.org/3/search/movie?";

	try {
		const response = await axios.get(`${URL_BASE}`, {
			params: {
				query: query,
				api_key: API_KEY,
			},
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

curl --request GET \
     --url 'query=Jack+Reacher&api_key=f6cb23dde2cb05ebc7da6c3cb4a7fa0d'
 */
/* 
export const useFetch = async (query) => {
	const API_KEY = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
	const URL_BASE = "https://api.themoviedb.org/3/search/movie";
	try {
		const response = await fetch(
			`${URL_BASE}?query=${query}&api_key=${API_KEY}`
		);
		const data = await response.json();
		console.log(data.results);
		return data.results;
	} catch (error) {
		console.log(error);
	}
};
 */
