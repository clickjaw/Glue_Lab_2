import React, { Component } from 'react';
import Main from "./Main";
import {Button,Card,} from "react-bootstrap";
import "../App.css";

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
          cart: 0,
        }
      }
    
      handleClicks(){
        // when user clicks add one
        this.setState((prev) => ({
            cart: prev.cart + 1,
        }))
        console.log(this.state.cart);
      }
  
    render() {
    return (
      <>
   
    <Card style = {{width: '20rem',
                    backgroundColor: "white",
                    border: "3px black solid",
                    borderRadius: "5px", 
                    margin: "20px",
                    padding: "10px",
                    }}>

        <Card.Body style = {{display: "grid", justifyContent: "center"}}>
        <Card.Title style = {{fontFamily: "Indie Flower", fontWeight: "bold", fontSize: "24px", display: "grid", justifyContent: "center"}}> {this.props.firstName} {this.props.lastName}</Card.Title><br/>
        <Card.Img variant = "top" src = {this.props.pic} alt = {this.props.firstName} width = "200" style = {{border:"4px powderblue solid", borderRadius: "5px", display: "grid", justifyContent: "center"}}></Card.Img>
        
        <Card.Text style = {{backgroundColor: "lightblue",
                            padding: "5px",
                            borderRadius: "5px",
                             fontFamily: "18px", 
                             fontWeight: "bold", 
                             display: "grid", 
                             justifyContent: "center"
                             }}>Trivia</Card.Text>
        <Card.Text style = {{fontSize: "14px", fontFamily: "Arial", width: "200px", display: "grid", justifyContent: "justify"}}>{this.props.trivia}</Card.Text>
        {/* <Card.Text style = {{color: "black", fontSize: "12px"}}>Location: {this.props.city}</Card.Text> */}
            
        <Button variant = "light" onClick = {() => this.handleClicks()}> Played with: {this.state.cart}</Button>{''}


        </Card.Body>

    </Card> 
    

      
      </>

    )
  }
}

