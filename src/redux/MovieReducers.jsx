import * as actions from './ActionsTypes';

const initialState = {
	aMovies: [],
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.INFO_MOVIE:
			return {
				...state,
				aMovie: action.payload,
			};
		
		default:
			return state;
	}
};