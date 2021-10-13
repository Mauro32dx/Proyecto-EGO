import React from 'react';
import Modelos from '../Modelos/Modelos.js';
import FichaDeModelo from '../FichaDeModelo/FichaDeModelo.js';

export default class Home extends React.Component {
    constructor(props){
        super();
        this.state = { 
        
         }
    }
    
    render () {
        return (
            <div>
                    <div>Logo</div>
                    <button>Modelos</button>
                    <button>Ficha de modelo</button>
                    <Modelos />
                    <FichaDeModelo />
            </div>
        )
    }
}