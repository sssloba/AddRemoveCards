import React, {Component, Fragment} from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/Header/Header';

import {CardsPage} from './pages/CardsPage/CardsPage';
import {FormPage} from './pages/FormPage/FormPage';
import CardDetailsPage from './pages/CardDetailsPage/CardDetailsPage';
import * as actionTypes from './store/actionTypes';

import {connect} from 'react-redux';

class App extends Component {

state = {
  links: {
    form: '/form-page',
    cards: '/cards-page'
  }
}

  onAgeUpdate = () => {
    this.props.updateAge(24);
  }

  render() {

    return (
      <Fragment>
        <BrowserRouter>

        {
         // <Header className="full-width"
         //    links={this.state.links} 
         //    data={[]}
         //    onSearch={(data) => this.onCardSearch(data)}
         //    />
        }
        
          <button onClick={() => this.props.updateName("Peter")}>Change name</button>
          <button onClick={this.onAgeUpdate}>Change age</button>
          <div className="main-content">
            {this.props.age}
            {this.props.name}
            <Route path={this.state.links.cards} exact component={CardsPage} />
            <Route path={this.state.links.form} exact component={FormPage} />
            <Route path='/cards/:id' exact component={CardDetailsPage} />
          </div>

         </BrowserRouter> 
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAge: (age) => dispatch({type: actionTypes.UPDATE_AGE, value: age}),
    updateName: (name, lastName) => dispatch({type: actionTypes.UPDATE_NAME, value: name, lastName: lastName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
