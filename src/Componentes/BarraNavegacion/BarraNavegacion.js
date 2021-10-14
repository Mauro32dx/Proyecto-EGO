import React from 'react';
import "./BarraNavegacion.css";
import IconoMenu from '../Iconos/IconoMenu.js';
import IconoCerrar from '../Iconos/IconoCerrar';


export default function BarraNavegacion(props) {
     
    
    var styleActivo = {
        transition: "all 2s ease"
    };
    
    var styleDesactivo ={
        width: "0px",
        height: "0px",
        transition: "all 2s ease" 
    };

    return (
        <div className="ContenedorNavbar">
            <div className="ContenedorLinks"> 
                <div className="LogoEGO"><p className="textLogo">EGO</p></div>
                {props.children}                
            </div>
            <div  className="ContenedorBotonMenu">
                <p className="textMenu">Menú</p>
                <button  className='botonMenu'><IconoMenu width="30px"/></button>
                <div className='seccionMenu' style={false?styleActivo:styleDesactivo}> 
                <button ><IconoCerrar width="30px"/></button>
                <p>login</p></div>
            </div>
        </div>
    )
}