import React, {Component, Fragment} from 'react';
import './App.css';
import data from './data/data.json';

import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';

class App extends Component {

  state = {
    showCards: true,
    data: []
  }

  componentDidMount() {
    this.setState({
      data: data
    })
  }

  onCardRemove = (e) => {
    console.log(e.target)    
  }

  renderCards = () => {
    const displayData = this.state.searchedData || this.state.data;

    return this.state.showCards ? <Cards data={displayData} removeCard={this.onCardRemove} /> : null;
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
