
import {Link} from 'react-router-dom'
import logo from '../img/Logo.png';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import videoShow from '../video/ShowQuienQuiereSerMillonario.mp4'
import $ from 'jquery'
import React, { Component } from 'react';



  class goShow extends Component{


   
   
    componentWillMount() {
        if(window.location.pathname === "/goShow"){
            setTimeout(function(){
                window.location.assign("https://quienquieresermillonario2021.netlify.app/question");
              }, 32500);
              
         }
    
    }
   
   
       render(){  
   
           return (
            <div class="divPrincipal" align="center">
            <div id="divInicio">
              {<video src={videoShow} width="700" height="400" autoplay="true" class="animated bounceIn" id="videoShow" />}        
              <p id="introduccionShow" class="animated flipInX" >Nuestro concursante de hoy es... ¡¡{localStorage.getItem("namePlayer")}!!</p>
              <p id="introduccionShow2" class="animated flipInX" >Un programa presentado por ¡¡{localStorage.getItem("nameShow")}!!</p>
            </div>
            </div>
           );
       }
   }
   
   export default goShow