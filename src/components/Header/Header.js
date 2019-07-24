import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';

import {Search} from '../Search/Search';

const Header = (props) => ( 
	<header className={`header ${props.widthClass}`}>
		<div className="wrapper">
			<img className="logo" src={logo} />
			<Search />
		</div>
	</header> )

export {Header};