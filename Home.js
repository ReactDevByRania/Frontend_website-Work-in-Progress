import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="container">
            <div className="acceuil">
                <section className="section1">
                    <div className="navbar-container">
                        <nav className="navbar">
                            <div className="navbar-logo">
                                <span className="p1">S</span>
                                <span className="p2">S</span>
                                Stylothes
                            </div>
                            <div className="nav_liste">
                                <ul>
                                    <li>
                                        <a href="/Connexion" className='one'>Acceuil</a>
                                    </li>
                                    <li>
                                        <a href='#'>Produits</a>
                                        <ul>
                                            <li>
                                                <a href="#">pour homme</a>
                                            </li>
                                            <li>
                                                <a href="#">pour femme</a>
                                            </li>
                                            <li>
                                                <a href="#">pour enfants</a>
                                            </li>
                                            <li>
                                                <a href="#">pour les bebes</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Les promotions</a>
                                        <ul>
                                            <li>
                                                <a href="#">les Aeids</a>
                                            </li>
                                            <li>
                                                <a href="#">vacances d'été</a>
                                            </li>
                                            <li>
                                                <a href="#">vacances de hiver</a>
                                            </li>
                                            <li>
                                                <a href="#">les retours</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar_button">
                                <div>
                                    <Link to="/Connexion" >
                                        <button className="navbar_btn_login_btn_1">connexion</button>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="banniere">
                        <h1 className="banniere_titre">Notre Service</h1>
                        <p className="bannierre_p">Paiement 100% sécurisé<br />
                            Echange & Remboursement <br />
                            Guide des tailles <br />
                            Guide d'entretien <br />
                            Livraison Express</p>
                        <div>
                            <Link to="/Compt">
                                <button className="btn_bleu">ouvrir un compte</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}


export default Home;

