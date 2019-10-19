import React, { Component } from 'react';
import { apiCredentials } from '../data/api';

class Myphotos extends Component{

    constructor(props){
    super(props);
    this.state = {
      images: []
      }
    }

    componentDidMount(){

      this.setState({images: this.props.location.state})

    }
     
	   	
    render(){
        console.log(this.state.images);
       	let images = this.state.images.map((image)=>{

    
        return (
      
       <li> <img src= { image } width = "400" height="300" /> </li>

        );
    });


      return (
 			<div className="container images">
            <h1> My Photos </h1>
             <ul>
            
             	{ images }
            
             </ul>
            </div>
        );
    }
  }


export default Myphotos