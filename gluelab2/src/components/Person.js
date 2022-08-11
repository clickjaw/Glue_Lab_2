import React, { Component } from 'react';
import Main from "./components/Main";
import {Card} from "react-bootstrap";

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
    <Card>
        <Card.Body>
            
        <Button onClick = {() => this.handleClicks()} variant = 'primary'> Like: {this.state.cart}</Button>

        </Card.Body>
    </Card> 
      
      </>



    )
  }
}
