import axios from 'axios';
import { apiUrl, API_KEY } from '../api';

function getMovies() {
	return axios.get(`${apiUrl}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`).then((response) => response.data.results);
}

function getAMovie(id) {
	return axios.get(`${apiUrl}/movie/${id}?api_key=${API_KEY}&language=pt-BR`).then((response) => response.data);
}

function getVideo(id) {
	return axios.get(`${apiUrl}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`).then((response) => response.data);
}

export default {
	getMovies,
	getAMovie,
	getVideo,
};
