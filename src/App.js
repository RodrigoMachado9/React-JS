import React, { Component } from 'react'
//importanto determinado componente//
import TextCouter from './TextCounter';

//  para consumir determinado componente, devemos utilizá-lo igual a um container, conforme exemplo abaixo: <TextCounter/> ou 
// <TextCounter> passando alguma coisa para o componente </TextCounter>


class App extends Component {
  render() {
    return (
      <div><TextCouter limit={30}/></div>
    )
  };
}


// React.createElement('TextCounter', {limit: 20})  exemplo, caso não existisse o componente: TextCounter.
export default App;
