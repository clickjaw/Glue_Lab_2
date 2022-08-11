import React, { Component } from 'react';
import "../App.css";
import Person from "./Person";
import Data from "../data.json";
import Button from "react-bootstrap/Button";

export default class Main extends Component {
  render() {
    return (
        <>
        
        <h1 class = "friendList">Andy's Toy Box</h1>
        {Data.person.map(person=>{
            return (
             <Person
             firstName = {person.firstName}
             lastName = {person.lastName}
             trivia = {person.trivia}
             city = {person.city}
             ipAddress = {person.ipAddress}
             pic = {person.pic}

             />   

            )

        })}

        </>
        )
  }
}
