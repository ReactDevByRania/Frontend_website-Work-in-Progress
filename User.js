import React, { Component } from "react";
import { Link } from "react-router-dom";
import './App2.css';

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="section3">
                    <div >
                        <p className="banniere_titre1">Hello dans Stylothes</p>
                    </div>
                </div>
                <div className="class1">
                    <p className="Paypal1">
                        Hello dans Stylothes <br />
                        Un paiement sécurisé pour un style assuré.<br />
                        Payez confiant.
                    </p>
                    <div
                        className="photo1">
                    </div>
                    <Link to="/Payment">
                        <button className="navbar_btn_login_btn_2">payement</button>
                    </Link>
                </div>
                <div className="Paypal2">
                    Que ce soit pour faire vos courses en bas de chez vous, payer votre équipement de sport en plusieurs fois,
                    payer en ligne ou faire un don à une association qui vous tient à cœur, nous pouvons vous aider.
                    Effectuez tous vos paiements avec un seul compte PayPal sécurisé.
                    <Link to="/Payment">
                        <button className="navbar_btn_login_btn_2">payement</button>
                    </Link>
                    <hr />
                </div>
                <div className="Paypal3">
                    Achetez en ligne avec Stylothes
                    Achetez en toute confiance sur des millions de sites dans le monde ou faites un don à votre association préférée.
                    Si un article ne correspond pas à la description du vendeur,
                    la Protection des Achats PayPal1  peut vous rembourser.
                    <Link to="/Payment">
                        <button className="navbar_btn_login_btn_2">payement</button>
                    </Link>
                    <hr />
                </div>
                <div className="Paypal4">
                    Payez en 4 fois sur des milliers de sites web
                    Vous pouvez désormais payer en 4X avec PayPal : achetez ce dont vous avez besoin,
                    quand vous en avez besoin et payez en 4 fois4.
                    Payez sans contact en point de vente avec votre téléphone
                    Grâce à notre app, plus besoin de cash, de cartes ou de code PIN.
                    Ouvrez l'app PayPal et sélectionnez Scanner/Payer.
                    Scannez le QR code du vendeur3, saisissez le montant et cliquez sur Envoyer.
                    Rien de plus facile.
                    <Link to="/Payment">
                        <button className="navbar_btn_login_btn_2">payement</button>
                    </Link>
                    <hr />
                </div>
                <div className="Paypal5">
                    Payez avec PayPal facilement et en sécurité, à tout moment,
                    et de quasiment partout.
                    <Link to="/Payment">
                        <button className="navbar_btn_login_btn_2">payement</button>
                    </Link>
                    <hr />
                </div>
                <div className="section4">
                    <div >
                        <Link to="/Connexion">
                            <button className="btn_bleu_2">retour a la page </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}