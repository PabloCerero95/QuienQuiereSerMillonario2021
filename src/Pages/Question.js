import React from 'react'
import {Button, ModalHeader, ModalBody, ModalFooter, Modal} from 'reactstrap';
import {Link} from 'react-router-dom'
import $ from 'jquery'; 
import logo from '../img/Logo.png';
import img50 from '../img/Comodin50.png';
import imgLlamada from '../img/ComodinLlamada.png';
import imgQuestion from '../img/ComodinQuestion.png';
import musicQuestion from '../music/musicQuestion.mp3';
import musicCorrect from '../music/musicCorrect.mp3';
import musicIncorrect from '../music/musicIncorrect.mp3';





class Question extends React.Component {

    

    constructor(props) {
        super(props)
        this.state = { pregunta: undefined, respuestaCorrecta: undefined, openQuestion: false, open50: false, 
            openLlamada: false, openCronometro: false, timer: 30, openAcierto: false, 
            openFallo: false, openComodinFail: false, openPremioFinal: false, 
            openEsperaClasificacion: false, openFalloFinal: false, openFalloTonto: false}
        this.comodinQuestion = this.comodinQuestion.bind(this)
        this.validateQuestion = this.validateQuestion.bind(this)
        this.comodin50 = this.comodin50.bind(this)
        this.comodinLlamada = this.comodinLlamada.bind(this)
        this.updateClock = this.updateClock.bind(this)
        this.createClassification = this.createClassification.bind(this)
        this.cierreComodin50 = this.cierreComodin50.bind(this)
        this.cierreComodinLlamada = this.cierreComodinLlamada.bind(this)
        this.cierreComodinCronometro = this.cierreComodinCronometro.bind(this)
        this.cierreComodinFail = this.cierreComodinFail.bind(this)
        this.goClassification = this.goClassification.bind(this)
    }
    

    componentWillMount() {
        var numRounds = parseInt(localStorage.getItem("numRounds"));
        fetch('https://api-quienquieresermillonario.herokuapp.com/Questions?Round=' + numRounds)
            .then((response) => {
                return response.json()
            })
            .then((preguntas) => {
                var numPreguntas = preguntas.length
                var numQuestion = Math.floor(Math.random() * numPreguntas) + 1;
                var pregunta = preguntas[numQuestion-1]
                var namePlayer = localStorage.getItem("namePlayer")
                this.setState({ pregunta: pregunta, namePlayer: namePlayer })
            })         
    }

    validateQuestion(e){
        var respuestaUsuario = e.currentTarget.innerHTML;
        var respuestaCorrecta = this.state.pregunta.Answer_Correct
        if (respuestaCorrecta == respuestaUsuario){
            if (this.state.pregunta.Round == 15){
                if(respuestaUsuario == this.state.pregunta.Answer_1){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer1").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true)
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                        setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer1").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                            }, 4000);
                        setTimeout(function(){
                            this.setState({openPremioFinal: !this.state.openPremioFinal});  
                            }.bind(this), 6000);
                }else if(respuestaUsuario == this.state.pregunta.Answer_2){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer2").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                        setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer2").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                        }, 4000);
                        setTimeout(function(){
                            this.setState({openPremioFinal: !this.state.openPremioFinal});  
                            }.bind(this), 6000);
               }else if(respuestaUsuario == this.state.pregunta.Answer_3){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer3").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer3").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                    }, 4000);
                    setTimeout(function(){
                        this.setState({openPremioFinal: !this.state.openPremioFinal});  
                        }.bind(this), 6000);
               }else if(respuestaUsuario == this.state.pregunta.Answer_4){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer4").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer4").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                    }, 4000);
                    setTimeout(function(){
                        this.setState({openPremioFinal: !this.state.openPremioFinal});  
                        }.bind(this), 6000);
                } 
                
            }else{
                if(respuestaUsuario == this.state.pregunta.Answer_1){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer1").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                        setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer1").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                            }, 4000);
                        setTimeout(function(){
                            this.setState({openAcierto: !this.state.openAcierto});  
                            }.bind(this), 6000);
                        setTimeout(function(){
                            window.location.assign("https://quienquieresermillonario2021.netlify.app/question");
                            }, 12000);
                }else if(respuestaUsuario == this.state.pregunta.Answer_2){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer2").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                        setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer2").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                        }, 4000);
                        setTimeout(function(){
                            this.setState({openAcierto: !this.state.openAcierto});  
                            }.bind(this), 6000);
                        setTimeout(function(){
                            window.location.assign("https://quienquieresermillonario2021.netlify.app/question");
                            }, 12000);
               }else if(respuestaUsuario == this.state.pregunta.Answer_3){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer3").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer3").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                    }, 4000);
                    setTimeout(function(){
                        this.setState({openAcierto: !this.state.openAcierto});  
                        }.bind(this), 6000);
                    setTimeout(function(){
                        window.location.assign("https://quienquieresermillonario2021.netlify.app/question");
                        }, 12000);
               }else if(respuestaUsuario == this.state.pregunta.Answer_4){
                    var numRounds = parseInt(localStorage.getItem("numRounds"));
                    numRounds++;
                    localStorage.setItem("numRounds", numRounds);
                    $("#divAnswer4").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                            $('#audioQuestion').trigger('pause');
                            $("#divAnswer4").css("background-color", "green");
                            $('#audioCorrect').trigger('play');
                    }, 4000);
                    setTimeout(function(){
                        this.setState({openAcierto: !this.state.openAcierto});  
                        }.bind(this), 6000);
                    setTimeout(function(){
                       window.location.assign("https://quienquieresermillonario2021.netlify.app/question");
                        }, 12000);
                } 
            }       
        
        }else{
           if(this.state.pregunta.Round == 15){
            if(this.state.pregunta.Answer_1 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer1").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer1").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloFinal: !this.state.openFalloFinal});  
                    }.bind(this), 6000);

            }else if(this.state.pregunta.Answer_2 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer2").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer2").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloFinal: !this.state.openFalloFinal});  
                    }.bind(this), 6000);
            }else if(this.state.pregunta.Answer_3 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer3").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer3").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                    $(this.respuestaCorrecta).css("background-color", "green");
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloFinal: !this.state.openFalloFinal});  
                    }.bind(this), 6000);
            }else if(this.state.pregunta.Answer_4 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer4").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer4").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloFinal: !this.state.openFalloFinal});  
                    }.bind(this), 6000);
            }


        }else if(this.state.pregunta.Round == 1){
            if(this.state.pregunta.Answer_1 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer1").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer1").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloTonto: !this.state.openFalloTonto});  
                    }.bind(this), 6000);

            }else if(this.state.pregunta.Answer_2 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer2").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer2").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloTonto: !this.state.openFalloTonto});  
                    }.bind(this), 6000);
            }else if(this.state.pregunta.Answer_3 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer3").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer3").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                    $(this.respuestaCorrecta).css("background-color", "green");
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloTonto: !this.state.openFalloTonto});  
                    }.bind(this), 6000);
            }else if(this.state.pregunta.Answer_4 == respuestaUsuario){
                this.state.pregunta.PriceQuestion = 0;
                $("#divAnswer4").css("background-color", "orange");
                $('#divAnswer1').attr("disabled", true);
                $('#divAnswer2').attr("disabled", true);
                $('#divAnswer3').attr("disabled", true);
                $('#divAnswer4').attr("disabled", true);
                setTimeout(function(){
                    $('#audioQuestion').trigger('pause');
                    $("#divAnswer4").css("background-color", "red");
                    $('#audioIncorrect').trigger('play');
                  }, 4000);
                  setTimeout(function(){
                    this.setState({openFalloTonto: !this.state.openFalloTonto});  
                    }.bind(this), 6000);
            }

        }else{
           
                
                if(this.state.pregunta.Answer_1 == respuestaUsuario){
                    $("#divAnswer1").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                        $('#audioQuestion').trigger('pause');
                        $("#divAnswer1").css("background-color", "red");
                        $('#audioIncorrect').trigger('play');
                      }, 4000);
                      setTimeout(function(){
                        this.setState({openFallo: !this.state.openFallo});  
                        }.bind(this), 6000);

                }else if(this.state.pregunta.Answer_2 == respuestaUsuario){
                    $("#divAnswer2").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                        $('#audioQuestion').trigger('pause');
                        $("#divAnswer2").css("background-color", "red");
                        $('#audioIncorrect').trigger('play');
                      }, 4000);
                      setTimeout(function(){
                        this.setState({openFallo: !this.state.openFallo});  
                        }.bind(this), 6000);
                }else if(this.state.pregunta.Answer_3 == respuestaUsuario){
                    $("#divAnswer3").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                        $('#audioQuestion').trigger('pause');
                        $("#divAnswer3").css("background-color", "red");
                        $('#audioIncorrect').trigger('play');
                        $(this.respuestaCorrecta).css("background-color", "green");
                      }, 4000);
                      setTimeout(function(){
                        this.setState({openFallo: !this.state.openFallo});  
                        }.bind(this), 6000);
                }else if(this.state.pregunta.Answer_4 == respuestaUsuario){
                    $("#divAnswer4").css("background-color", "orange");
                    $('#divAnswer1').attr("disabled", true);
                    $('#divAnswer2').attr("disabled", true);
                    $('#divAnswer3').attr("disabled", true);
                    $('#divAnswer4').attr("disabled", true);
                    setTimeout(function(){
                        $('#audioQuestion').trigger('pause');
                        $("#divAnswer4").css("background-color", "red");
                        $('#audioIncorrect').trigger('play');
                      }, 4000);
                      setTimeout(function(){
                        this.setState({openFallo: !this.state.openFallo});  
                        }.bind(this), 6000);
                }
            }
        }
    }

    comodinQuestion=()=>{
        const buttonQuestion = document.getElementById("buttonQuestion");
        if(localStorage.getItem('comodinQuestion') === 'false'){ 
            localStorage.setItem("comodinQuestion", "true");
            this.setState({openQuestion: !this.state.openQuestion});
            setTimeout(function(){ window.location.assign("https://quienquieresermillonario2021.netlify.app/question"); }, 5000);

        } else if(localStorage.getItem('comodinQuestion') === 'true'){ 
            this.setState({openComodinFail: !this.state.openComodinFail});  
        }
    }

    comodin50(){
        if(localStorage.getItem('comodin50') === 'false'){ 
            localStorage.setItem("comodin50", "true");
            this.setState({open50: !this.state.open50});   
            var respuestaCorrecta = this.state.pregunta.Answer_Correct
            var respuestasDeshabilitadas = 0
            if (this.state.pregunta.Answer_1 != respuestaCorrecta){
                document.getElementById("divAnswer1").style.visibility = "hidden";
                respuestasDeshabilitadas++
            }
            if (this.state.pregunta.Answer_2 != respuestaCorrecta){
                document.getElementById("divAnswer2").style.visibility = "hidden";
                respuestasDeshabilitadas++
            }
            if (respuestasDeshabilitadas != 2 && this.state.pregunta.Answer_3 != respuestaCorrecta){
                document.getElementById("divAnswer3").style.visibility = "hidden";
                respuestasDeshabilitadas++
            }
            if (respuestasDeshabilitadas != 2 && this.state.pregunta.Answer_4 != respuestaCorrecta){
                document.getElementById("divAnswer4").style.visibility = "hidden";
                respuestasDeshabilitadas++
            }

        } else if(localStorage.getItem('comodin50') === 'true'){     
            this.setState({openComodinFail: !this.state.openComodinFail});  
        }
    }

    comodinLlamada(){
        if(localStorage.getItem('comodinLlamada') === 'false'){ 
            localStorage.setItem("comodinLlamada", "true");
            this.setState({openLlamada: !this.state.openLlamada});          
        }  
        else if(localStorage.getItem('comodinLlamada') === 'true'){ 
            this.setState({openComodinFail: !this.state.openComodinFail});  
        }
    }

    createClassification(){
        fetch('https://api-quienquieresermillonario.herokuapp.com/Classifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Name_Contestant": this.state.namePlayer,
                "Price_Final": this.state.pregunta.PriceQuestion
            }),
            })
            .then(response => response.json())
            .then(data => console.log(data));

            this.setState({openEsperaClasificacion: !this.state.openEsperaClasificacion}); 

            }

    goClassification(){
        setTimeout(function(){
            window.location.assign("https://quienquieresermillonario2021.netlify.app/classification");
            }.bind(this), 3000);
    }

    updateClock(){
    this.setState({openCronometro: !this.state.openCronometro});
    this.interval = setInterval(
        () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
        1000
      );
      }
      componentDidUpdate(){
        if(this.state.timer === 0){ 
          clearInterval(this.interval);
        }
      }

      cierreComodin50(){
        this.setState({open50: !this.state.open50}); 
      }
      cierreComodinLlamada(){
        this.setState({openLlamada: !this.state.openLlamada}); 

      }
      cierreComodinCronometro(){
        this.setState({openCronometro: !this.state.openCronometro});  
      }
      cierreComodinFail(){
        this.setState({openComodinFail: !this.state.openComodinFail});  
      }

    render() {    
        if (this.state.pregunta != undefined) {
            return (
                //FONDO DEL JUEGO//

   
                <div id="fondoGame">                       
                    <audio id="audioQuestion" ref="audio_tag" autoPlay={true}controls={false} ><source type="audio/mp3" src={musicQuestion} /></audio>
                    <audio id="audioCorrect" ref="audio_tag" autoPlay={false}controls={false} ><source type="audio/mp3" src={musicCorrect} /></audio>
                    <audio id="audioIncorrect" ref="audio_tag" autoPlay={false}controls={false} ><source type="audio/mp3" src={musicIncorrect} /></audio>
                    <div id="fondoPrize">
                         {/* NOMBRE Y EL PREMIO ACTUAL QUE SE IRA ACTUALIZANDO POR CADA PREGUNTA QUE LLEVE */}
                         <div>
                         <h2 id="RoundQuestion">Ronda {this.state.pregunta.Round}</h2>
                         </div>
                         <div>
                         <h2 id="PrizeRound">Premio: {this.state.pregunta.PriceQuestion} euros</h2>
                         </div>
                         <div>
                         <h2 id="Player">Concursante: {this.state.namePlayer}</h2>
                         </div>
                    </div>

                    {/* ---//COMODINES//-- */}

                    <div id="fondoComodines">
                        <div id="fondoComodinQuestion">
                        <button id="buttonQuestion"><img id="imgQuestion" src={imgQuestion} onClick={this.comodinQuestion} /></button>
                        </div>
                        <div id="fondoComodin50">
                        <button id="button50"><img id="img50" src={img50} onClick={this.comodin50} /></button>
                        </div>
                        <div id="fondoComodinPublico">
                            
                            <button id="buttonLlamada"><img id="imgLlamada" src={imgLlamada} onClick={this.comodinLlamada} /></button>
                        </div>
                    </div>

                    <img  id="logoQuestion" src={logo} ></img>

                    {/* --- //PREGUNTAS//--- */}

                    <div id="contenedorFondoQuestion">
                        <div id="fondoQuestion">
                            <div className="divQuestions" align="center">
                                <div id="divQuestion" class="animated flipInX">
                                    {this.state.pregunta.Question_Descrip}
                                </div>
                                <div id="divAnswerTop">
                                    <button id="divAnswer1" class="animated flipInX" onClick={this.validateQuestion}>
                                        {this.state.pregunta.Answer_1}
                                    </button>
                                    <button id="divAnswer2" class="animated flipInX" onClick={this.validateQuestion}>
                                        {this.state.pregunta.Answer_2}
                                    </button>
                                </div>
                                <div id="divAnswerBottom">
                                    <button id="divAnswer3" class="animated flipInX" onClick={this.validateQuestion}>
                                        {this.state.pregunta.Answer_3}
                                    </button>
                                    <button id="divAnswer4" class="animated flipInX" onClick={this.validateQuestion}>
                                        {this.state.pregunta.Answer_4}
                                    </button>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <Modal id="Modal" isOpen={this.state.openQuestion}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡COMODIN DEL CAMBIO DE PREGUNTA!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                                ¡Has activado el comodin del cambio de pregunta!
                                En breves segundos se le cambiara la pregunta
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal >
                    <Modal id="Modal" isOpen={this.state.open50}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡COMODIN DEL 50:50!</h1>
                        </ModalHeader >
                            <ModalBody id="alertaBody" >
                                Se le quitara dos respuestas incorrecta.
                                Solo se quedara dos respuestas... ¿Cual de los dos sera la verdadera?
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.cierreComodin50} >CERRAR</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openLlamada}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡EL COMODIN DE LA LLAMADA!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                                En breves segundos realizaremos una llamada a un amigo y el cronometro funcionara.
                                <div><Button id="cierreModal" onClick={this.updateClock}>COMENZAR CRONOMETRO</Button></div>
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.cierreComodinLlamada} >CERRAR</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openCronometro}>
                        <ModalHeader id="alertaHeader">
                        <h1 id="modalTitle">CRONOMETRO DE LA LLAMADA</h1>
                        </ModalHeader >
                        <ModalBody id="alertaBody">
                            <div><span id="countdown">{this.state.timer}</span></div>
                        </ModalBody>
                        <ModalFooter id="alertaFooter">
                        <button id="cierreModal" onClick={this.cierreComodinCronometro} >CERRAR</button>
                        ¡QUIEN QUIERE SER MILLONARIO!
                        </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openAcierto}>
                        <ModalHeader id="alertaHeader">
                        <h1 id="modalTitle">¡RESPUESTA CORRECTA!</h1>
                        </ModalHeader >
                        <ModalBody id="alertaBody">
                            ¡ENHORABUENA! ¡COMENZAMOS LA RONDA {this.state.pregunta.Round + 1} EN BREVES SEGUNDOS!
                        </ModalBody>
                        <ModalFooter id="alertaFooter">
                        ¡QUIEN QUIERE SER MILLONARIO!
                        </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openFallo}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡HAS FALLADO LA PREGUNTA !</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                               LA RESPUESTA CORRECTA ERA: <p id="respuestacorrecta">{this.state.pregunta.Answer_Correct}</p> ¡SE ACABO EL JUEGO!.. PERO HAS GANADO ¡¡¡{this.state.pregunta.PriceQuestion} EUROS!!! ¡ENHORABUENA!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.createClassification} >ENVIAR TU NOMBRE A LA CLASIFICACION</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openComodinFail}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡ESTE COMODIN YA HA SIDO USADO!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                              ¡PRUEBE CON OTRO COMODIN O EMPIENCE UNA NUEVA PARTIDA!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.cierreComodinFail} >CERRAR</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openPremioFinal}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡HAS GANADO QUIEN QUIERE SER MILLONARIO!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                               ¡¡¡ENHORABUENA MILLONARIO!!! TE HAS LLEVADO EL BOTE DE ¡¡¡{this.state.pregunta.PriceQuestion} EUROS!!!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.createClassification} >ENVIAR TU NOMBRE A LA CLASIFICACION</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openEsperaClasificacion}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡ESTAMOS ACTUALIZANDO LA CLASIFICACION!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                              ¡ESTAMOS COLOCANDO SU NOMBRE EN EL PODIUM DE JUGADORES! ¡ PINCHE EN EL BOTON Y EN BREVES SEGUNDOS SE LE LLEVARA A LA ZONA DE CLASIFICACION!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.goClassification} >IR A LA CLASIFICACION</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>

                    <Modal id="Modal" isOpen={this.state.openFalloFinal}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡HAS FALLADO LA ULTIMA PREGUNTA!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                               LA RESPUESTA CORRECTA ERA: <p id="respuestacorrecta">{this.state.pregunta.Answer_Correct}</p> ¡SE ACABO EL JUEGO!.. Y SE HA LLEVADO ¡¡¡{this.state.pregunta.PriceQuestion} EUROS!!! ¡SUERTE PARA LA PROXIMA VEZ!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.createClassification} >ENVIAR TU NOMBRE A LA CLASIFICACION</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
                    <Modal id="Modal" isOpen={this.state.openFalloTonto}>
                        <ModalHeader id="alertaHeader">
                            <h1 id="modalTitle">¡HAS FALLADO LA PRIMERA PREGUNTA!</h1>
                        </ModalHeader>
                            <ModalBody id="alertaBody">
                               LA RESPUESTA CORRECTA ERA: <p id="respuestacorrecta">{this.state.pregunta.Answer_Correct}</p> ¡SE ACABO EL JUEGO!.. ¿COMO HAS PODIDO FALLAR EN LA PRIMERA PREGUNTA? ¡COMO CASTIGO TE HAS LLEVADO...{this.state.pregunta.PriceQuestion} EUROS!!! ¡NO VUELVAS MAS!
                            </ModalBody>
                                <ModalFooter id="alertaFooter">
                                <button id="cierreModal" onClick={this.createClassification} >ENVIAR TU NOMBRE A LA CLASIFICACION</button>
                                ¡QUIEN QUIERE SER MILLONARIO!
                                </ModalFooter>
                    </Modal>
  
                </div>
            )
        } else {
            return (
                <div id="fondoGame">
                <img src={logo} id="logoLoading"  />
               <p className="text-center" id="titleLoading">Cargando pregunta...</p>
           </div>
            ) 
        }

    }


}



export default Question