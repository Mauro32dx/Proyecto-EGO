import React, {useState} from 'react';
import "./BarraNavegacion.css";
import IconoMenu from '../Iconos/IconoMenu.js';
import IconoCerrar from '../Iconos/IconoCerrar';
import Logo from '../Iconos/Logo';

export default function BarraNavegacion(props) {
    const [estado, setEstado] = useState(false);

    var styleActivo = {
        width: "250px",
        visibility: "visible",
        transition: "all 2s ease"
    };
    
    var styleDesactivo ={
        width: "0px",
        visibility: "hidden",
        transition: "all 2s ease" 
    };
    var styleActivo2 = {
        display: "inline",
    };
    
    var styleDesactivo2 ={
        
        display: "none",
    };

    return (
        <div className="ContenedorNavbar">
            <div className="ContenedorLinks"> 
                <div className="LogoEGO"><Logo width="50px"/></div>
                <div className="ContenedorBotones" >
                    {props.children}  
                </div>
                                
            </div>
            <div  className="ContenedorBotonMenu">
                <p className="textMenu">Menú</p>
                <button  className='botonMenu' onClick={()=>{setEstado(!estado)}} >
                    {estado?<IconoCerrar width="30px"/>:<IconoMenu width="30px"/>}
                </button>
                <div className='seccionMenu' style={estado?styleActivo:styleDesactivo}>
                    <div style={estado?styleActivo2:styleDesactivo2}>
                        <p className="textMenu2">Menú</p>
                        <div className="contenedorOpciones">
                            <a href="#a">login</a>
                            <a href="#a">opcion1</a>
                            <a href="#a">opcion2</a>
                            <p>...</p>   
                        </div>
                        
                        <div className="ContenedorBotones2" >
                            <p className="textMenu2">Secciones</p>
                            {props.children}   
                        </div>                        
                    </div>

                </div>
            </div>
        </div>
    )
}