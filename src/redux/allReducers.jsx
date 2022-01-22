import { combineReducers } from 'redux';
import { moviesReducer } from './MoviesReducers';
import { movieReducer } from './MovieReducers';

export const allReducers = combineReducers({
	movies: moviesReducer,
	movie: movieReducer
});
