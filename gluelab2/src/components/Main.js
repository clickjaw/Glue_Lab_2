import React, { Component } from 'react';
import "./App.css";
import Person from "./components/Person";
import Data from "../data.json";

export default class Main extends Component {
  render() {
    return (
        <>
        
        <h1>Your Friend List: </h1>
        {Data.person.map(person=>{
            return (
             <Person
             firstName = {person.firstName}
             lastName = {person.lastName}
             email = {person.email}
             city = {person.city}
             ipAddress = {person.ipAddress}

             />   

            )

        })}

        </>
        )
  }
}
