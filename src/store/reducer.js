import * as actionTypes from './actionTypes';

const initialState = {
	age: 45,
	name: "Nikola"
}

const reducer = (state = initialState, action) => {
	
	switch(action.type) {
		case actionTypes.UPDATE_AGE:
			return {
				...state,
				age: action.value
			}

		case actionTypes.UPDATE_NAME:
			return {
				...state,
				name: action.value,
				lastName: action.lastName
			}

		default:
			return state;		
	}
}

export {reducer};