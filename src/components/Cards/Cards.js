import React, {Fragment} from 'react';
import {Card} from '../Card/Card';
import './Cards.css';
import {connect} from 'react-redux';

const CardsComponent = (props) => {

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
		<Fragment>
			<span className="add-card" onClick={props.openForm}>+</span>
			<div className="cards">
				<div className="wrapper">
					{renderCards()}
				</div>
			</div>
		</Fragment>
	)
}

CardsComponent.defaultProps = {
	data: []
}

const mapStateToProps = state => {
	return {
		data: state.data
	}
}

const Cards = connect(mapStateToProps)(CardsComponent);

export {Cards};