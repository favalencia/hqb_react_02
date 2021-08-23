import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inicio from './Inicio';
import Componente1 from './Componente1';
import Componente2 from './Componente2';


const Menu = () => {
  return (
    <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/componente1">Componente 1</Link>
          </li>
          <li>
            <Link to="/componente2">Componente 2</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
          <Inicio/>
          </Route>
          <Route path="/componente1">
            <Componente1/>
          </Route>
          <Route path="/componente2">            
           <Componente2/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default Menu;