import React from 'react';
import ItemModelo from '../../Componentes/ItemModelo/ItemModelo';
import "./Modelos.css";

export default class Modelos extends React.Component {
    constructor(props){
        super();
        this.state = { 
            Modelos: props.Modelos, 
         }
    }
    
    render () {

        let crearListaItems = this.state.Modelos.map((data) => 
            <ItemModelo
                name={data.name } 
                year={data.year} 
                price={data.price} 
                photo={data.photo} 
            />
        );    

        let TodosLosModelos= ( 
            <div className='ContenedorItemsVeiculos'>
                {crearListaItems}
            </div>
        );

        return (
            <div>
                <div className="ContenedorEncabezadoModelos">
                    <h1>Descubrí todos los modelos </h1>
                    <div className="ContenedorSelectores2">
                        <div className="ContenedorSelectores">
                            <select name="Filtrar" className="Selector"> 
                                <option selected value="0"> Filtar por </option>
                                <optgroup label="Marca">
                                    <option value="1">Sedan</option>
                                    <option value="2">Hatchback</option>
                                    <option value="3">Pickups y Comerciales</option>
                                    <option value="4">SUVs</option>
                                </optgroup> 
                            </select>
                            <select name="Ordenar" className="Selector">
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
                        </div> 
                    </div>
                    
                </div>
                
 
                {TodosLosModelos}
            </div>
        )
    }
}