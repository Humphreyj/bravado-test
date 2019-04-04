import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
