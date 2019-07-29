import React from 'react';
import './Card.css';

import {Button} from '../Button/Button';

const Card = (props) => {

	return(
      <div className="card">
      	<div className="card-body">
	        <span>Name: {props.item.name}</span>
	        <span>Age: {props.item.age}</span>
	        <span>Gender: {props.item.gender}</span>
	    </div>  

        <div className="card-footer">
        	<Button type="red" 
        			onButtonClick={() => props.removeCard(props.item.id)}>
        		Remove card
        	</Button>
        	<Button type="orange" 
        			onButtonClick={() => props.duplicateCard(props.item.id)}>
        		Duplicate card
        	</Button>
        </div>	

      </div>
    )  
}

export {Card};