import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col"
import styled from "styled-components";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <p><h1>Hello, World!</h1></p>
        <SayFullName name="Vladimir" surname="Magdesyan" link="telegram.org" />
        <SayFullName name="Pavel" surname="Durov" link="facebook.com" />
      </div>
    );
  }
}
function SayFullName(props) {
  return (
    <div>
      <h1>Моё имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}>Ссылка на профиль</a>
    </div>
  )
}
export default App;
