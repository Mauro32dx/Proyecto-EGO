import React from 'react';
import "./CarruselPartesVehiculo.css";

export default function ItemParteVeiculo(props) {
    return (
        <div className="ItemParte">
            <div ><img src={props.photo} alt="Foto" className="fotoPartes"/> </div>   
            <h3 className="tituloItemParte"> {props.titulo} </h3>
            <p className="descripcionItemParte"> {props.descripcion}</p>                             
        </div>
    )
}