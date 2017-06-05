
  import React, { Component } from 'react';
  import './App.css';
 import Title from './Title';
 import Display from './Display';
 import Keys from './Keys';

  class App extends Component {
    render() {
      return (
        <div className="App">
         <Title />
         <div className="box">
           <Display />
           <Keys />
         </div>
       </div>
      );
    }
  }
 export default App;
