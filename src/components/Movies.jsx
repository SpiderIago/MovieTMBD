import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction, fetchAMoviesAction } from '../redux/Actions';
import MoviesApi from '../services/MoviesApi';
import MovieCard from './MovieCard';
import MovieInfo from './MovieInfo';
import ScrollContainer from 'react-indiana-drag-scroll'

const Movies = () => {
	const { movies } = useSelector((state) => state.movies);
	const [aMovie, setAMovie] = useState(null);
	const [aVideo, setAVideo] = useState(null);
	const dispatch = useDispatch();
	
	const fetchMovie = (id) => {
			MoviesApi.getAMovie(id).then(function (value) {        
				setAMovie(value)
			});
			MoviesApi.getVideo(id).then(function (video) {        
				setAVideo(video)
			});
	}

	const fetchMovies = async () => {
		try {
			const data = await MoviesApi.getMovies();
			console.log('oi', data)
			dispatch(fetchMoviesAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};


	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<>
		<div className="container dropdown">
			<h1 className="mt-4 mb-4">Em cartaz</h1>
				<ScrollContainer className="scroll-container" ignoreElements='a .card-header'> 
					<div className="row-movie-list">{movies && movies.map((movie) => <MovieCard movie={movie} func={(id) => fetchMovie(id)} />)}</div>
				</ScrollContainer>
		</div>
		{aMovie ? 
			<MovieInfo movie={aMovie} video={aVideo} /> : null}
		</>
	);
};

export default Movies;
