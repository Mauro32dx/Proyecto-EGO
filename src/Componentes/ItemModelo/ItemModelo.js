import React from 'react';
import "./ItemModelo.css";

export default function ItemModelo(props) {
    return (
        <div className="ItemModelo">
            <div className="ContenedorTitulo">
                <h3 className="NombreText"> {props.name} </h3>
                <p className="DescripcionText"> {props.year} | ${props.price}</p>                     
            </div>
            <div className="ContenedorImagen">
                <img src={props.photo} alt="Foto"  className="fotoVeiculo"/>                              
            </div>
        </div>
    )
}