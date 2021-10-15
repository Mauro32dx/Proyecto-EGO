import React from 'react';
import ItemParteVeiculo from './ItemParteVeiculo.js';
import "./CarruselPartesVehiculo.css";

export default function CarruselFichaModelo(props) {

    let crearListaItems = props.ItemsPartes.map((data) => 
            <ItemParteVeiculo 
                titulo={data.titulo} 
                descripcion={data.descripcion} 
                photo={data.photo} 
            />
        );
    return (
        <div className="ContenedorCarrusel"> 
            <div className="ContenedorItemsCarrusel">            
                <div className="gradienteDerecho" />
                <div className="gradienteIzquerdo" />
                 {crearListaItems}                
            </div>
            
        </div>
    )
}
