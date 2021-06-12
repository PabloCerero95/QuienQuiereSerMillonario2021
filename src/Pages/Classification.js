
import {Button, ModalHeader, ModalBody, ModalFooter, Modal, CarouselIndicators} from 'reactstrap';
import {Link} from 'react-router-dom'
import $ from 'jquery'; 
import React, { Component } from 'react';
import logo from '../img/Logo.png';


class Classification extends Component{
    super(props){

        
    this.creditos = this.creditos.bind(this);
}
state = { data: [] };
 

 componentDidMount() {

   fetch("https://api-quienquieresermillonario.herokuapp.com/Classifications?_sort=Price_Final:DESC")

     .then(response => response.json())

     .then(data => this.setState({ data }));

     
 }

 creditos(){
    window.location.assign("https://quienquieresermillonario2021.netlify.app/credits");
 }

 renderTableData() {
    return this.state.data.map(function(item) {
       return (
          <tr>
             <td>{item.Name_Contestant}</td>
             <td> {item.Price_Final} euros </td>
          </tr>
       )
    })
 }



    render(){  
        if (this.state.data != undefined) {
        return (
            <div id="fondoGame">
            <div id="divClassification" class="animated zoomIn" align="center">
                <h1 id="titleClassification">Clasificación</h1>
                <div id="contenedorClassification">
                <table border="6" id="table">
                <tr>
                <th scope="row">Concursante </th>
                <th scope="row">Premio</th>
                </tr>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
                </div>
                
            </div>
            <button id="buttonCredits" class="animated zoomIn" onClick={this.creditos} ><a id="titlebutton">CREDITOS</a></button>
            </div>
            

        );
    } else{
        return (
            <div id="fondoGame">
            <img src={logo} id="logoLoading"  />
           <p className="text-center" id="titleLoading">Cargando clasificacion...</p>
       </div>
        ) 

    }
}
}

export default Classification