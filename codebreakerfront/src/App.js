import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { items: [] };
}

componentDidMount() {
  fetch(`https://codebreaker-api-jd-s.herokuapp.com/adivinarsecreto/:1598`)
  .then(result=>result.json())
  .then(items=>this.setState({items}))
    /*fetch(`https://codebreaker-api-jd-s.herokuapp.com/adivinarsecreto/:1598`) 
        .then(result=> {
            this.setState({items:result.json()});
        });*/
}

render() {
  
  return (
    <div>
    <h1>Juan David y Sebastián - CodeBreaker</h1>
    <input type="text" placeholder="code"></input>
    <div>
      <button onClick={this.props.resetearPartida}>Adivinar</button>
    </div>
    
    </div>
  );
}
  
  
  
}

/*       
    return(
        <div>
            <div>Items:</div>
            <ul>
              {this.state.items.map(item=><li key={item.id}>{item.body}</li>)}
            </ul>          
        </div>  
    );*/

  /*
  render() {
    
  */
export default App;
