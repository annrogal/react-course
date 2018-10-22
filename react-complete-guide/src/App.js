import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
     return (
       <div className="App">
         <h1>I am React App!</h1>
        <Person />
        <Person />
        <Person />
       </div>
     );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React app!'))
  }
}

export default App;
