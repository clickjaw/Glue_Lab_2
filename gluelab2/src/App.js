import React, { Component } from 'react';
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";

export default class App extends Component {
  render() {
    return (
      <>

      <Header/>
      <Main/>
      <Footer/>

      </>
    )
  }
}
