import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br'


const MovieInfo = ({movie, video}) => {
	console.log(movie)
	moment.locale('pt-br')
	return (
		<div className='dropdown-content-on'>
			<div>
				<img className='div-img' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
				<div className='text-div'>
					<div className='title bold'>{movie.title}</div>
					<div>{movie.tagline}</div>
					<div className='infos'>
						<div>
							<span className='green bold'>Estréia:</span>
							<span className='mini'>{moment(movie.release_date).format('LL')}</span>
						</div>
						<div>
							<span className='bold'>Generos:</span>
							<span className='mini'>{movie.genres.map((genre) => genre.name + ', ')}</span>
						</div>
						<div>
							<span className='bold'>Duração:</span>
							<span className='mini'>{movie.runtime} min</span>
						</div>
					</div>
					<div className='summary'> {movie.overview} </div>
				</div>
			</div>
			<div className='div-video'>
				{video && video.results[0] && video.results[0].key ?
				<iframe width="100%" height="100%"
					src={`https://www.youtube.com/embed/${video.results[0].key}`}>
				</iframe>
				: null}
			</div>
		</div>
	);
};

export default MovieInfo;