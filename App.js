import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Compt from './Compt';
import Connexion from './Connexion';
import User from './User';
import Payment from './Payment';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/Compt" component={Compt} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/User" component={User} />
        <Route path="/Payment" component={Payment} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;