import React, {Component} from 'react';

import uuid from 'react-uuid';
import {Cards} from '../../components/Cards/Cards';


class CardsPage extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.setData();
  }

  setData = () => {

    fetch(`https://cards-b479c.firebaseio.com/people.json`)
    .then(response => {
      return response.json()
    })
    .then (response => {
      const persons = [];

      for(let person in response) {
        response[person].id = person;
        persons.push(response[person])
      }
           
      this.setState({
        data: persons
      })
    })  
  }

  onCardSearch = (data) => {
      this.setState({
        searchedData: data
      })
  }

  onCardCreate = (item) => {
    fetch(`https://cards-b479c.firebaseio.com/people.json`, {
      method: "POST",
      body: JSON.stringify(item)
    })
    .then(response => {
      this.setData();
    })

    this.setState({
      formOpened: true
    })
  }

    onCardRemove = (id) => {
     fetch(`https://cards-b479c.firebaseio.com/people/${id}.json`, {
      method: "DELETE"
     })
     .then(response => {
        this.setData();
     })
  }

  onCardDuplicate = (id) => {
    let newData = [...this.state.data];
    let duplicatedCard = {...newData.find(item => item.id === id)};
    const duplicatedCardIndex = newData.findIndex(item => item.id === id); 

    duplicatedCard.id = uuid();
    duplicatedCard.name += "_copy";

    newData.splice(duplicatedCardIndex + 1, 0, duplicatedCard);

    this.setState({
      data: newData,
    })
  }

  renderCards = () => {
    const {data, searchedData,showCards} = this.state;
    const displayData = searchedData || data;

    return (
      <Cards data={displayData} 
               removeCard={(id) => this.onCardRemove(id)}
               duplicateCard={(id) => this.onCardDuplicate(id)}
               openForm={this.onFormOpen} /> 
    )
  }

  render() {
    return (
      <div>{this.renderCards()}</div>
      )
  }
}

export {CardsPage};