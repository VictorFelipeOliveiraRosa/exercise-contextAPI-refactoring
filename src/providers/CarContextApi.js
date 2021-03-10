import React, { createContext } from 'react';

export const CarContext = createContext();

export class CarProvider extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.initialState = this.initialState.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({ [car]: side });
  }

  initialState() {
    return {
      ...this.state,
      moveCar: this.moveCar,
    }
  };

  render() {
    const { props } = this;
    return (
       <CarContext.Provider value={ this.initialState() }>
        { props.children } 
       </CarContext.Provider>
    );
  }
} 