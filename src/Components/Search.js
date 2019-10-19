import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { apiCredentials } from '../data/api';
import axios from 'axios';
import Images from './Images';

class Search extends Component{

    state = {
        searchText:'',
        amount:4,
        apiUrl: apiCredentials.end_point,
        apiKey:apiCredentials.api_key,
        images:[],
        saved_images: []
    }

    callbackFunction = (childData) => { 
    this.setState({saved_images: [...this.state.saved_images, childData]});}

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        
       
    };

    onBtnClick = (e) => {
        e.preventDefault();
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                    &per_page=${this.state.amount}&image_type=photo&safe_search=true`)
                    .then(response => this.setState({ images: response.data.hits }))
                    .catch(error => alert(error));
    }

   

    onAmountChange = (e, index, value) => { this.setState( {amount: value} ); }

    
    render(){
        return(
            <div className = "container">

            <div className = "MyImages"><Link to={{ pathname: `/myphotos`, state: this.state.saved_images }}> My Photos </Link> </div>
                <div className="form-group" className="row">
                    <h4>Image Search</h4>
                        <form class="form-inline" className = "row">
                              <input className="col-md-6" type="text" name = "searchText" id = "image_search" value = { this.state.searchText } onChange = {this.onTextChange} />
                              <select className="col-md-2" value = { this.state.amount } onChange = { this.onAmountChange } >
                               
                                <option value="4" >4</option>
                                <option value="6" >6</option>
                                <option value="8" >8</option>
                                <option value="12" >12</option>
                                <option value="16" >16</option>
                              </select>
                              <button className="btn btn-primary col-md-4" onClick={ this.onBtnClick }>Search</button>
                        </form>
                </div>
                <div className="row">
                { this.state.images.length > 0 ? (<Images image_list = {this.state.images} saved = {this.state.saved_images} callbackFromParent = {this.callbackFunction} />) : null }
            </div>
            </div>
        );
    }
    }


export default Search