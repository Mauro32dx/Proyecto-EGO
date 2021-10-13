import React from 'react';

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
                <h1>FICHA DE MODELO </h1>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                <div>IMAGEN</div>
                <div>CORRUSEL PARTE VEIHCULO</div>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                <div>IMAGEN 2</div>
                <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                <div>IMAGEN 3</div>   
            </div>
        )
    }
}