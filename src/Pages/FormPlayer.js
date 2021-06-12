import React from 'react'
import {Link} from 'react-router-dom'



var guardarNombreUsuario = function() {
    var playerName = document.getElementById("namePlay").value;
    localStorage.setItem("namePlayer", playerName);
    var playerShow = document.getElementById("nameShow").value;
    localStorage.setItem("nameShow", playerShow);
}

const FormPlayer = () => (

        <div id="divFormPlayer">
        <div id="contentForm" class="animated flipInX">
        <div className="row" id="fondoFormPlayer">
            <p>¡Hola concursante! ¡Bienvenido a ¿Quien quiere ser millonario?!<br/> ¿Como te llamas?</p>
            <div className="form-group col-md-8">
                <input type="text" id="namePlay" className="form-control form-control-lg" placeholder="Escribe tu nombre"/>
            </div>
            <p>¿Como se llama el presentador del programa de hoy?</p>
            <div className="form-group col-md-9">
                <input type="text" id="nameShow" className="form-control form-control-lg" placeholder="Escribe el nombre del presentador"/>
            </div>
            <div className="form-group col-md-8">
            <button id="fghg" onClick={guardarNombreUsuario}><Link to="/goShow">JUGAR</Link></button>
            </div>
        </div>
        </div>
        </div>


)

export default FormPlayer