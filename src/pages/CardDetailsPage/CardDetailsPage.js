import React from 'react';
import {withRouter} from 'react-router-dom';

const CardDetailsPage = (props) => {

	const renderCardDetails = () => {
		return "Card data";
	}

	return(
		<div className="cardDetails">
			{renderCardDetails()}
			{console.log(props)}
		</div>
	);
}

export default withRouter(CardDetailsPage);