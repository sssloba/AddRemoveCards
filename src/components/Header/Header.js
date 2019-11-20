import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';
import {Menu} from '../Menu/Menu';

import {Search} from '../Search/Search';

const Header = (props) => ( 
	<header className={`header ${props.widthClass}`}>
		<div className="wrapper">
			<img className="logo" src={logo} />
			<Menu links={props.links}/>
			<Search data={props.data} onSearch={(data) => props.onSearch(data)} />
		</div>
	</header> 
)

export {Header};