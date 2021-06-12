import {Link} from 'react-router-dom'
import logo from '../img/Logo.png';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import videoShow from '../video/ShowQuienQuiereSerMillonario.mp4'
import $ from 'jquery'
import React, { Component } from 'react';
import react from '../img/react.png';
import js from '../img/javascript.png';
import strapi from '../img/Strapi.png';
import cruz from '../img/cruzcampo.png';
import barcelo from '../img/barcelo.png';
import betis from '../img/betis1.png';
import ada from '../img/Ada.png';
import logo2 from '../img/Logo.png';
import musicCredits from '../music/musicCredits.mp3';
 

setTimeout(function(){
    $("#divCredits1").css("display", "none");
    $("#divReact").css("display", "none");
    $("#divJs").css("display", "none");
    $("#divStrapi").css("display", "none");
    $("#divCruz").css("display", "none");
    $("#divBetis").css("display", "block");
    $("#divCredits3").css("display", "block");
    $("#divAda").css("display", "block");
    $("#divCredits4").css("display", "block");
    $("#divLogo").css("display", "block");
    $("#divButton").css("display", "block");
  }, 18000);

  class credits extends Component{

    constructor(props) {
        super(props)
        this.final = this.final.bind(this)
    }

        final(){
            localStorage.setItem("numRounds", "final");
            localStorage.setItem("comodinQuestion", "finalComodin1");
            localStorage.setItem("comodin50", "finalComodin2");
            localStorage.setItem("comodinLlamada", "finalComodin3"); 
            localStorage.setItem("namePlayer", "finalPlayer");
            window.location.assign("https://quienquieresermillonario2021.netlify.app/");
        }
   
       render(){  
   
           return (
        <div id="fondoGame" >
             <audio ref="audio_tag" autoPlay={true}controls={false} ><source type="audio/mp3" src={musicCredits} /></audio>
                    <div id="divCredits1" align="center" class="animated zoomOut"><h1  id="titleCredits1" class="animated zoomIn">JUEGO CREADO CON:</h1></div>
                    <div id="divCredits2" align="center" class="animated zoomOut"><h1   id="titleCredits2" class="animated zoomIn">PATROCINADO POR:</h1></div>
                    <div id="divCredits3" align="center" class="animated zoomOut"><h1   id="titleCredits3" class="animated zoomIn">CON LA COLABORACION DE:</h1></div>
                    <div id="divCredits4" align="center"><h1   id="titleCredits4" class="animated zoomIn">QUIEN QUIERE SER MILLONARIO</h1></div>
                    <div align="center" id="divReact" align="center" class="animated zoomOut"><img  align="center" id ="react"src={react}  class="animated zoomIn" ></img></div>
                    <div align="center" id="divJs" align="center" class="animated zoomOut"><img id ="js"src={js} class="animated zoomIn animated" ></img></div>
                    <div align="center" id="divStrapi" align="center" class="animated zoomOut"><img id ="strapi"src={strapi} class="animated zoomIn"></img></div>
                    <div id="divCruz"  class="animated zoomOut" ><img id ="cruz"src={cruz} class="animated zoomIn"></img></div>
                    <div id="divBarcelo" class="animated zoomOut" ><img id ="Barcelo"src={barcelo} class="animated zoomIn"></img></div>
                    <div id="divBetis" class="animated zoomOut" ><img id ="Betis"src={betis} class="animated zoomIn"></img></div>
                    <div id="divAda" class="animated zoomOut" ><img id ="Ada"src={ada} class="animated zoomIn"></img></div>
                    <div id="divLogo" ><img id ="Logo"src={logo2} class="animated zoomIn"></img></div>
                    <div id="divButton" ><button id ="Button"src={logo2} class="animated zoomIn" onClick={this.final}>¡VOLVER A JUGAR!</button></div>
                  
                   
                    
                    
                    
                </div>
           );
       }
   }
   
   export default credits