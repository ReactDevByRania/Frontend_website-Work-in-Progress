import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class Compt extends Component {
    render() {
        return (
            <div className='Section2'>
                <fieldset align="center">
                    <div>
                        <label className="Nom" for="Nom">donner votre nom:</label>
                        <input type="text" placeholder='de 4 a 8 caracteres' required /><br />
                    </div>
                    <div>
                        <label for="code">donner un password a votre compte:</label>
                        <input className="code" type="password" placeholder='2 chiffres + 6 letters + un caractere specifique' required /><br />
                    </div >
                    <div>
                        <label for="mail">donner votre gmail:</label>
                        <input className="mail" type="email" placeholder='..........@gmail.com' required /><br />
                    </div>

                    <button className="btn">Cree votre compte</button><br />
                </fieldset>
                <Link to="/">
                    <button className="btn_bleu_1">retour a la pagre d'acceuil</button>
                </Link>
                <div style={{ backgroundImage: "url(images\night-sky-gc98920200_1920.jpg)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </div>
            </div>
        )
    }
}
