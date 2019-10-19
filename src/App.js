import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Search from './Components/Search';
import Myphotos from './Components/Myphotos';

import './bootstrap.min.css';
import './App.css';


class App extends Component{
 
 render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path="/" component = { Search } /> 
      <Route path="/myphotos" component = { Myphotos } />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
