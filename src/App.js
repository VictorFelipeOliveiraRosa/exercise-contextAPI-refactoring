import React from 'react';
import './App.css';
import Cars from './Cars';
import { CarContext } from './providers/CarContextApi'

class App extends React.Component {
  render() {
    return (
       <Cars />
    );
  }
}

export default App;
