import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {

  constructor() {
    super();
    this.state = 
      { items: [],
        person: [],
        valor: "",
        respuesta :"",
        clave:"",
        defSecreto:"",
        advSecreto:""

      };
    this.controlCambiosSet = this.controlCambiosSet.bind(this);
    this.controlCambiosDef = this.controlCambiosDef.bind(this);
    
    this.adivinar = this.adivinar.bind(this);
    this.enviar = this.enviar.bind(this);
}

adivinar() {
  var cadena;
  this.cadena = this.state.advSecreto;
  axios.get('http://localhost:5000/adivinarsecreto/'+ this.cadena)
  .then(res=>  {
    const respuesta = res.data;
    this.setState({respuesta});
  })
}

enviar() {
  var cadena;
  this.cadena = this.state.defSecreto;

  axios.post('http://localhost:5000/setsecreto/',{ "secret": this.cadena })
  .then(res=>  {
    const clave = res.data;
    this.setState({clave});
  })
}

controlCambiosSet(event) {
  this.setState({advSecreto: event.target.value});
}

controlCambiosDef(event) {
  this.setState({defSecreto: event.target.value});
}


render() {
  
  return (
    <div className="App">
    <header className="App-header">

          <h1 className="App-title">Juan David y Sebastián - CodeBreaker</h1>
        </header>
    <div className="App-intro">
      <div className="definir">
      <p>Definir clave </p>
      <input type="text" placeholder="Enviar Secreto"  onChange={this.controlCambiosDef} />
      <button type="submit" value="Submit" onClick={this.enviar}> Enviar </button>
        <p>Clave definida: {this.state.clave}</p>
      </div>
      <div className="adivinar">
      <p>Adivinar: </p>
      <input type="text" placeholder="Adivinar Secreto" onChange={this.controlCambiosSet} />
      <button type="submit" value="Submit" onClick={this.adivinar}> Adivinar </button>
        
          <p>Respuesta: {this.state.respuesta}</p>
        </div>
    
    </div>

    </div>
  );
} 
}


export default App;


