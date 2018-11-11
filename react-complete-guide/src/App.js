import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'; // https://github.com/FormidableLabs/radium
import Person from './Person/Person';



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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'blask'    //sposób wykorzystania Radium
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={ () => this.deletePersonHandler(index) }
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
            </div>
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'blask'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if( this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

     return (
       <StyleRoot>
       <div className="App">
         <h1>I am React App!</h1>
          <p className={classes.join(' ')}>This is really wirking!</p>
         <button 
          style={style}
          onClick={ this.togglePersonsHandler }>Toggle persons</button>
          {persons}
       </div>
       </StyleRoot>
     );
    //return React.cr eateElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default Radium(App);
