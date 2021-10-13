import React from 'react';

export default class Modelos extends React.Component {
    constructor(props){
        super();
        this.state = { 
            
         }
    }
    
    render () {
        return (
            <div>
                <h1>Descubrí todos los modelos </h1>
                <select name="Filtrar">
                    <option selected value="0"> Filtar por </option>
                    <optgroup label="Marca">
                        <option value="1">Sedan</option>
                        <option value="2">Hatchback</option>
                        <option value="3">Pickups y Comerciales</option>
                        <option value="4">SUVs</option>
                    </optgroup> 
                </select>
                <select name="Ordenar">
                    <option selected value="0">Ordenar por </option> 
                    <optgroup label="Año"> 
                        <option value="1">Acendente</option> 
                        <option value="2">Desendente</option> 
                    </optgroup> 
                    <optgroup label="Precio"> 
                        <option value="1">Mas bajo</option> 
                        <option value="2">Mas Alto</option> 
                    </optgroup> 
                </select> 
                <div>TODOS LOS ITEMS</div>
            </div>
        )
    }
}