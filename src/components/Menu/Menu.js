import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {

	const renderLinks = () => {
		let links = [];
		for(let link in props.links) {
			links.push({
				name: link,
				link: props.links[link]
			});
		}

		return links.map(link => <li key={link.link}><NavLink to={link.link}>{link.name}</NavLink></li>)
	}

	return (
		<ul>
		{renderLinks()}
		</ul>
	)
}

export {Menu};