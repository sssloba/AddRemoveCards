import React, {Component} from 'react';
import './Search.css';

class Search extends Component {

	state = {
		searchValue: ""
	}

	componentDidUpdate(prevProps, prevState) {
		if(!prevProps.data.length) {
			this.setState({
				data: this.props.data
			})
		}

		if (prevState.searchValue !== this.state.searchValue) {
			this.filterData();
		}
	}

	onValueUpdate = (e) => {
		this.setState({
			searchValue: e.target.value
		})
	}

	filterData = () => {
		let data = [...this.state.data];

		data = data.filter(item => (
			item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
		))

		this.props.onSearch(data);
	}

	render() {
		return(
			<input className="search" 
			type="text" 
			value={this.state.searchValue}
			onChange={this.onValueUpdate} />
		)
	}	
}

export {Search};