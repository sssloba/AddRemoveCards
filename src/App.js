import React, {Component, Fragment} from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

// import data from './data/data.json';

import {Header} from './components/Header/Header';


import {CardsPage} from './pages/CardsPage/CardsPage';
import {FormPage} from './pages/FormPage/FormPage';
import CardDetailsPage from './pages/CardDetailsPage/CardDetailsPage';
class App extends Component {

state = {
  links: {
    form: '/form-page',
    cards: '/cards-page'
  }
}

  render() {

    return (
      <Fragment>
        <BrowserRouter>
         <Header className="full-width"
              links={this.state.links} 
              data={[]}
              onSearch={(data) => this.onCardSearch(data)}
              />
          <div className="main-content">

            <Route path={this.state.links.cards} exact component={CardsPage} />
            <Route path={this.state.links.form} exact component={FormPage} />
            <Route path='/cards/:id' exact component={CardDetailsPage} />

          </div>
         </BrowserRouter> 
      </Fragment>
    );
  }
}

export default App;
