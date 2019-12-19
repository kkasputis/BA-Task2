import React, {Component} from 'react';

import './App.css';
import CommentForm from './components/commentForm';
import CommentList from './components/commentList';

class App extends Component{
 




render() {

  return (

    <div className="App">
      <header className="App-header">
        <font size="6">Rašyti atsiliepimą/atsiliepimų forma</font>
 <CommentForm />
 <CommentList />

            </header>
       </div>
  );
  }

}


export default App;
