import React from 'react';
import Modelos from '../Modelos/Modelos.js';
import FichaDeModelo from '../FichaDeModelo/FichaDeModelo.js';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import BarraNavegacion from '../../Componentes/BarraNavegacion/BarraNavegacion.js';


export default class Home extends React.Component {
    constructor(props){
        super();
        this.state = { 
            Modelos: props.Modelos,
            ItemsPartes: props.ItemsPartes,
         }
    }
    
    render () {
        return (
            <div>
                <Router>
                <div>
                    <BarraNavegacion>
                        <NavLink activeClassName="active" to="/proyecto-ego" className="BotonLink"><h3 >Modelos</h3></NavLink>
                        <NavLink activeClassName="active" to="/FichaDeModelo" className="BotonLink"><h3 >Ficha del modelo</h3></NavLink> 
                    </BarraNavegacion>
                    

                    <Switch>
                    <Route path="/proyecto-ego">
                        <Modelos Modelos={this.state.Modelos}/>
                    </Route>
                    <Route path="/FichaDeModelo">
                        <FichaDeModelo ItemsPartes={this.state.ItemsPartes}/>
                    </Route>
                    
                    </Switch>
                </div>
                </Router>
            </div>
        )
    }
}