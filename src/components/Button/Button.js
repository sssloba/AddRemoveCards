import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		<button className={`${props.type}`}
				onClick={props.onButtonClick}>
				{props.children}
		</button>
		)
}

export {Button};