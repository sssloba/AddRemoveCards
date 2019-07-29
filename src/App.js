import React, {Component, Fragment} from 'react';
import './App.css';

import data from './data/data.json';
import uuid from 'react-uuid';

import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';

class App extends Component {

  state = {
    showCards: true,
    data: []
  }

  componentDidMount() {
    this.setData();
  }

  setData = () => {
    const loadedData = [...data];

    loadedData.forEach(item => {
      item.id = uuid();
    })
    console.log(loadedData)

    this.setState({
      data: loadedData
    })
  }

  onCardRemove = (id) => {
     let newData = [...this.state.data];

     newData = newData.filter(item => {
      return item.id !== id;
     })   

     this.setState({
      data:newData
     })
  }

  onCardDuplicate = (id) => {
    let newData = [...this.state.data];
    let duplicatedCard = {...newData.find(item => item.id === id)};
    const duplicatedCardIndex = newData.findIndex(item => item.id === id);

    console.log(duplicatedCardIndex)

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
      showCards && data.length 
      ? <Cards data={displayData} 
               removeCard={(id) => this.onCardRemove(id)}
               duplicateCard={(id) => this.onCardDuplicate(id)} /> 
      : null
    )
  }

  onCardSearch = (data) => {
      this.setState({
        searchedData: data
      })
  }

  render() {
    return (
      <Fragment>
      <Header className="full-width" 
              data={this.state.data}
              onSearch={(data) => this.onCardSearch(data)}
               />
              
              
      <div className="main-content" onClick={this.update} >
        {this.renderCards()}
      </div>
      </Fragment>
    );
  }
}

export default App;
