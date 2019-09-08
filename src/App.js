import React, {Component, Fragment} from 'react';
import './App.css';

import data from './data/data.json';
import uuid from 'react-uuid';

import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';
import {Form} from './components/Form/Form';

class App extends Component {

  state = {
    showCards: true,
    data: [],
    formOpened: false
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

  onFormOpen = () => {
    this.setState({
      formOpened: true
    })
  }

  onFormClose = () => {
    this.setState({
      formOpened: false
    })
  }

  renderCards = () => {
    const {data, searchedData,showCards} = this.state;
    const displayData = searchedData || data;

    return (
      showCards
      ? <Cards data={displayData} 
               removeCard={(id) => this.onCardRemove(id)}
               duplicateCard={(id) => this.onCardDuplicate(id)}
               openForm={this.onFormOpen} /> 
      : null
    )
  }

  renderForm = () => {
    if (this.state.formOpened) {
      return <Form closeForm={this.onFormClose}
                   createCard={data => this.onCardCreate(data)} />
    }
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
      formOpened: false
    })
  }

  render() {
    const {data} = this.state;

    return (
      <Fragment>
      <Header className="full-width" 
              data={data}
              onSearch={(data) => this.onCardSearch(data)}
             
              />
              
              
      <div className="main-content" onClick={this.update}>
        {this.renderCards()}
        {this.renderForm()}
      </div>
      </Fragment>
    );
  }
}

export default App;
