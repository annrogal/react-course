import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [ 
      { name: 'Max', age: 22 },
      { name: 'Adam', age: 16 },
      { name: 'Ada', age: 40 }
    ]
  }

  //dla wywoływanych eventów dodajemy w nazwie słówko Handler (good practice)
  //funckję wywołujemy bez nawiasów (), przekazujemy tylko referencję
  switchNameHandler = (newName) => {
    //DO NOT DO THIS: this.state.persons[0].name = 'John'
    this.setState({persons: [ 
      { name: newName, age: 22 },
      { name: 'Adam', age: 16 },
      { name: 'Ada', age: 36 }
    ]})
  }

  nameChangedHandler = (event) => {
    //DO NOT DO THIS: this.state.persons[0].name = 'John'
    this.setState({persons: [ 
      { name: 'Max', age: 22 },
      { name: event.target.value, age: 16 },
      { name: 'Ada', age: 36 }
    ]})
  }

  render() {
     return (
       <div className="App">
         <h1>I am React App!</h1>
        
         <button onClick={ () => this.switchNameHandler('Maximilian!!') }>Switch Name</button>
        <Person name={ this.state.persons[0].name } 
        age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name }
         age={ this.state.persons[1].age } 
         click={ this.switchNameHandler.bind(this, 'Max') }
         changed={ this.nameChangedHandler}>My hobby is swimming</Person>
        <Person name={ this.state.persons[2].name }
         age={ this.state.persons[2].age }/>      
       </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default App;
