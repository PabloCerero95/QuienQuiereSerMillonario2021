import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/Logo.png';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import videoPrincipal from '../video/videoPre.mp4'
import $ from 'jquery'
import {Button, ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";


if(!localStorage.getItem('numRounds') || localStorage.getItem('numRounds') === 'final' ){
  localStorage.setItem('numRounds', 1)
}
if(!localStorage.getItem('comodinQuestion') || localStorage.getItem('comodinQuestion') === 'finalComodin1' ){
  localStorage.setItem('comodinQuestion', "false")
}
if(!localStorage.getItem('comodin50') || localStorage.getItem('comodin50') === 'finalComodin2' ){
  localStorage.setItem('comodin50', "false")
}
if(!localStorage.getItem('comodinLlamada') || localStorage.getItem('comodinLlamada') === 'finalComodin3' ){
  localStorage.setItem('comodinLlamada', "false")
}


setTimeout(function(){
  $("#videoPre").css("display", "none");
  // $("#introduccion").css("display", "block");
  setTimeout(function(){
    // $("#videoPre").css("display", "none");
    $("#introduccion").css("display", "block");
  });
}, 15500);

class Home extends Component{


  constructor(props) {
    super(props)
    this.state = { openRules: false}
  
    this.rules = this.rules.bind(this)
}
  
rules(){
  this.setState({openRules: !this.state.openRules});   
}
 
 
     render(){  
 
         return (
          <div class="divPrincipal" align="center">
          <div id="divInicio">
            <img src={logo} id="logo" class="animated rollIn" />
            <button id="buttonRegla" data-toggle="modal" data-target="#exampleModal" class="animated rollIn" onClick={this.rules} >REGLAS</button>
            <button id="buttonJugar" class="animated rollIn"><Link to="/formPlayer">JUGAR</Link></button>
            <p id="introduccion" class="animated flipInX" >Un juego creado y distribuido por REALITYGAMES©</p>
            {<video src={videoPrincipal} width="700" height="400"  autoplay="true" class="animated rollOut" id="videoPre" />}
          </div>
          <Modal id="Modal" isOpen={this.state.openRules}>
      
                                <ModalHeader id="alertaHeader" closeButton>
                                   <h1 id="modalTitle">REGLAS</h1>
                                </ModalHeader>
                                    <ModalBody id="alertaBody">
                                      <div><p>¿Quien quiere ser millonario? Es un juego de preguntas con un total de 15 rondas y ¡cuanto mas acierte mas dinero te llevas!
                                        <div>  (1) COMODIN CAMBIO DE PREGUNTA: El concursante se le cambiara la pregunta por otra de misma dificultad</div>
                                        <div>(2) COMODIN 50X50: Dos respuestas fuera, una incorrecta y otra correcta ¡Mas facil todavia!</div>
                                        <div>(3) COMODIN LLAMADA: El concursante podra llamar por el movil a algun amigo, donde se le colocara un cronometro de 30 SEGUNDOS para hacerle la pregunta
                                        todo vigilado desde el presentador para que no haga ningun tipo de trampa. Cuando acabe el tiempo tendra que colgar la llamada si no sera descalificado</div>
                                        <div>Si llegas a la ultima pregunta es ¡TODO O NADA! Puedes llevarte a tu casa EL MILLON DE EUROS o irte con 0 EUROS!</div></p></div>
                                         
                                    </ModalBody>
                                        <ModalFooter id="alertaFooter">
                                        <button id="cierreModal" onClick={this.rules} >CERRAR</button>
                                        REALITYGAMES©
        
                                        </ModalFooter>

                            </Modal>
          </div>
         );
     }
 }
 
 export default Home
