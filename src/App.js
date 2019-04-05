import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Sidedrawer from './components/Sidedrawer/Sidedrawer'
import Backdrop from './components/Backdrop/Backdrop'

import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  
  state = {
    drawerOpen: false
  }

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
      //sets the state of drawerOpen to the opposite of the previous state.      
    })
 
  }

  backdropClickHandler = () => {
    this.setState({drawerOpen: false})
  }


  render() {

    let backdrop;

    if(this.state.drawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Header drawerToggleHandler={this.drawerToggleHandler} />
          <Sidedrawer show={this.state.drawerOpen} />
          {backdrop}
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
