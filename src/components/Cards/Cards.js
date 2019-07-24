import React from 'react';
import {Card} from '../Card/Card';
import './Cards.css';

const Cards = (props) => {

	const renderCards = () => (
    	props.data.map((item, i) => {
      		return (
      			<Card item={item} key={i} removeCard={props.removeCard} />
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