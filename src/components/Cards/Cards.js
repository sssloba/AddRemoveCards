import React from 'react';
import {Card} from '../Card/Card';
import './Cards.css';

const Cards = (props) => {

	const renderCards = () => (
    	props.data.map((item) => {
      		return (
      			<Card item={item} 
      				  key={item.id} 
      				  removeCard={(id) => props.removeCard(id)}
      				  duplicateCard={(id) => props.duplicateCard(id)} />
	        )
	    })
	)

	return (
		<div className="cards">
			<div className="wrapper">
				{renderCards()}
			</div>
		</div>
	)
}

export {Cards};