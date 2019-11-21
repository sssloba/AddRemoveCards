import * as actionTypes from './actionTypes.js';

const onAgeUpdate = (age) => {
	return {
		type: actionTypes.UPDATE_AGE,
		value: age
	}
}

export const updateAge = (age) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(onAgeUpdate(age))
		}, 4000)
	}
}

export const updateName = (name, lastName) => {
	return {
		type: actionTypes.UPDATE_NAME, 
		value: name, 
		lastName: lastName
	}
}

const onDataSet = (persons) => {
	return {
		type: actionTypes.SET_DATA,
		data: persons
	}
}

export const setData = () => {

	return dispatch => {
		fetch(`https://cards-b479c.firebaseio.com/people.json`)
	    .then(response => {
	      return response.json()
	    })
	    .then (response => {
	      const persons = [];

	      for(let person in response) {
	        response[person].id = person;
	        persons.push(response[person])
	      }

	      dispatch(onDataSet(persons));
	    })
	}
}