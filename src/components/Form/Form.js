import React, {Component} from 'react';
import './Form.css';
import {Button} from '../Button/Button';
import uuid from 'react-uuid';

class Form extends Component {

	state = {
		formData: {
			name: "",
			age: "",
			gender: 'male'

		}
	}

	onFieldChange = (e) => {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.dataset.id]: e.target.value
			}
		})
	}

	createCard = () => {
		const data = {
			...this.state.formData,
			id: uuid()
		}

		this.props.createCard(data)
	}

	render() {
		const {name, age, gender} = this.state.formData;
		return (
			<div className="form">
				<div className="form-inner">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" value={name} data-id={"name"} onChange={this.onFieldChange} />
					<label htmlFor="age">Age</label>
					<input type="number" id="age" value={age} data-id={"age"} onChange={this.onFieldChange} />
					<label htmlFor="gender">Gender</label>
					<select id="gender" data-id={"gender"} onChange={this.onFieldChange}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>

					<div className="form-buttons">
						<Button type="red" onButtonClick={this.props.closeForm}>Cancel</Button>
						<Button onButtonClick={this.createCard}>Submit</Button>
					</div>
				</div>
			</div>
		)
	}

}

export {Form};