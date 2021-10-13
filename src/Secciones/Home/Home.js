import React from 'react';
import Modelos from '../Modelos/Modelos.js';
import FichaDeModelo from '../FichaDeModelo/FichaDeModelo.js';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Home extends React.Component {
    constructor(props){
        super();
        this.state = { 
        
         }
    }
    
    render () {
        return (
            <div>
                <Router>
                <div>
                    <div>Logo</div>
                    <Link to="/Modelos">Modelos</Link> <br />
                    <Link to="/FichaDeModelo">Ficha del modelo</Link>

                    <Switch>
                    <Route path="/Modelos">
                        <Modelos />
                    </Route>
                    <Route path="/FichaDeModelo">
                        <FichaDeModelo />
                    </Route>
                    
                    </Switch>
                </div>
                </Router>
            </div>
        )
    }
}