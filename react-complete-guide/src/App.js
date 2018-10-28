import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [ 
      { name: 'Max', age: 22 },
      { name: 'Adam', age: 16 },
      { name: 'Ada', age: 40 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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
    }

     return (
       <div className="App">
         <h1>I am React App!</h1>
         <button 
          style={style}
          onClick={ this.togglePersonsHandler }>Switch Name</button>
          {persons}
       </div>
     );
    //return React.cr eateElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default App;
