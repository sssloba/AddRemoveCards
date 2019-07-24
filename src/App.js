import React, {Component, Fragment} from 'react';
import './App.css';
import data from './data/data.json';

import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';
class App extends Component {

  onCardRemove = (e) => {
    console.log(e.target)    
  }

  render() {
    return (
      <Fragment>
      <Header className="full-width" />
      <div className="main-content">
        <div className="cards">
          <Cards data={data} removeCard={this.onCardRemove} />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default App;
