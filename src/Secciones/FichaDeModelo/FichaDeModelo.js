import React from 'react';
import "./FichaDeModelo.css";
import CarruselPartesVehiculo from "../../Componentes/Carrusel/CarruselPartesVehiculo.js"

import Imagen1 from "../../Imagenes/Imagen1.png";
import Imagen2 from "../../Imagenes/Imagen2.jpg";
import Imagen3 from "../../Imagenes/Imagen3.png";


export default class FichaDeModelo extends React.Component {
    constructor(props){
        super();
        this.state = { 
            ItemsPartes: props.ItemsPartes,
         }
    }
    
    render () {
        return (
            <div>
                <section className="estilosSeccionEncabezado" > 
                    <img src={Imagen1} alt="Foto"  className="ImagenVeiculo"/>
                    <div className="ContenedorTextoSeccionEncabezado"> 
                        <p  className="subtituloFicha"> <b>Hilux DX/SR</b></p>
                        <h1 className="tituloFicha">Preparada para cualquier desafío </h1>
                        <p className="descripcionFicha"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                    </div>
              
                </section>
                <section > 
                <CarruselPartesVehiculo ItemsPartes={this.state.ItemsPartes} />

                </section>
                <section className="estilosSeccion" > 
                    
                    <div className="ContenedorTextoSeccion"> 
                        
                        <h4 className="tituloSeccion">Titulo de 20px</h4>
                        <p className="descripcionSeccion"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                    </div>
                    <img src={Imagen2} alt="Foto"  className="ImagenSeccion"/>
                </section>
                
                <section className="estilosSeccion" style={{flexDirection:"row-reverse"}}> 
                    <div className="ContenedorTextoSeccion"> 
                        <h4 className="tituloSeccion">Titulo de 20px</h4>
                        <p className="descripcionSeccion"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                    </div>
                    <img src={Imagen3} alt="Foto"  className="ImagenSeccion"/>              
                </section>
 
            </div>
        )
    }
}