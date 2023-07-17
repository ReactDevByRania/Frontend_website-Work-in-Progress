import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


export default class Connexion extends Component {

    render() {
        return (
            <div className='Section2'>
                <fieldset align="center">
                    <div>
                        <label>password:</label>
                        <input className="code" type="password" placeholder='donner votre password' required /><br />
                    </div >
                    <div>
                        <label>gmail:</label>
                        <input className="mail" type="email" placeholder='donner votre gmail' required /><br />
                    </div>
                    <Link to="/User">
                        <button className="btn">Connecter</button> <br />
                    </Link>
                </fieldset>
                <Link to="/">
                    <button className="btn_bleu_1">retour a la page d'acceuil</button>
                </Link>
            </div>
        )
    }
}