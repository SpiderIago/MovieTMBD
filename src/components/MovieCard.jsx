import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/Actions';
import Heart from '../icons/heart'
import HeartFill from '../icons/heartFill'

const MovieCard = ({ movie, func }) => {
	const { favourite } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	return (
		<div className="col-md-4 col-sm-6 col-xs-12" key={movie.id}>
			<div className="card-header" onClick={() => func(movie.id)}>
				<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
				<a><i
					onClick={() =>
						dispatch(
							favourite.find((m) => m.id == movie.id)
								? RemoveFromFavouriteAction(movie.id)
								: addFavouriteAction(movie)
						)
					}
				>
					{favourite.find((m) => m.id == movie.id) ? <HeartFill/> : <Heart/>}
				</i></a>
			</div>
			
		</div>
	);
};

export default MovieCard;
