import * as actionTypes from './actionTypes';

const initialState = {
	age: 73,
	name: "Dobrila"
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

		case actionTypes.SET_DATA: 
			return {
				...state,
				data: action.data
			}

		default:
			return state;		
	}
}

export {reducer};