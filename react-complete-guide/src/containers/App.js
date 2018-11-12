import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
            return<Person 
            click={ () => this.deletePersonHandler(index) }
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
            </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if( this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

     return (
       <div className={classes.App}>
         <h1>I am React App!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
         <button 
          className={btnClass}
          onClick={ this.togglePersonsHandler }>Toggle persons</button>
          {persons}
       </div>
     );
    //return React.cr eateElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default App;
