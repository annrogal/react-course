import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [ 
      { id: 'addd', name: 'Max', age: 22 },
      { id: 'hdhshs', name: 'Adam', age: 16 },
      { id: 'afgg', name: 'Ada', age: 40 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  //dla wywoływanych eventów dodajemy w nazwie słówko Handler (good practice)
  //funckję wywołujemy bez nawiasów (), przekazujemy tylko referencję

  nameChangedHandler = (event, id) => {
    //DO NOT DO THIS: this.state.persons[0].name = 'John'
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };    //lub Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice() - slice() with no arguments copy full array

    const persons = [...this.state.persons]; //spread operator, tworzymy nowy obiekt, żeby nie wpływać na ten oryginalny
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      );
    }
     return (
       <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}  />
          {persons}
       </div>
     );
    //return React.cr eateElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default App;
